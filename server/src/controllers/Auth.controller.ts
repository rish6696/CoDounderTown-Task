import { Request, Response, NextFunction } from "express";
import { jwtSecretKey, saltRound } from "../config";
import { AUTH_COOKIE_KEY, TOKEN_TYPES } from "../constants";

import { APIError } from "../utilities/APIError";
import {
  UNEXPECTED_ERROR,
  generateError,
  ERROR_STATUS_CODE,
  EMAIL_ALREADY_EXISTS,
  WRONG_PASSWORD,
  EMAIL_NOT_EXISTS,
  UNAUTHORIZED_REQUEST,
} from "../utilities/errorConstants";
import logger from "../utilities/logger";

import Bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import { UserModel } from "../models/model.index";

export const logoutController = (req: Request, res: Response, next: NextFunction) => {
  res.clearCookie(AUTH_COOKIE_KEY);
  res.send({ status: true });
};

export const signUpUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body as {
    name: string;
    email: string;
    password: string;
  };

  logger.info(`SignUp user with data ${JSON.stringify(data)}`);

  const { email, name, password } = data;

  try {
    const result = await UserModel.findOne({ email });

    if (result)
      return next(new APIError(ERROR_STATUS_CODE.BAD_REQUEST_CODE, EMAIL_ALREADY_EXISTS));

    const hashedPassword = await Bcrypt.hash(password, parseInt(saltRound));

    const user = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await user.save();

    res.send({ status: true, message: "User Created Successfully" });
  } catch (error) {
    logger.error(
      `Error while registering user with email ${email} and error ${generateError(error)}`
    );
    return next(new APIError(500, UNEXPECTED_ERROR));
  }
};

export const loginUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body as { email: string; password: string };

  logger.info(`Login user with email ${JSON.stringify(data.email)}`);

  try {
    const { email, password } = data;

    const response = await UserModel.findOne({ email });

    if (!response)
      return next(
        new APIError(ERROR_STATUS_CODE.UNAUTHORIZED_REQUEST_CODE, EMAIL_NOT_EXISTS)
      );

    const dbPassword = response.password;
    const userId = response._id;

    const verify = await Bcrypt.compare(password, dbPassword);

    if (verify == true) {
      const token = JWT.sign(
        {
          userId,
          tokenType: TOKEN_TYPES.LOGIN_STORE_TOKEN_TYPE,
          userNameAlphabet: response.name.charAt(0).toUpperCase(),
        },
        jwtSecretKey
      );
      res.cookie(AUTH_COOKIE_KEY, token, { httpOnly: true });
      res.send({ status: true });
    } else {
      return next(
        new APIError(ERROR_STATUS_CODE.UNAUTHORIZED_REQUEST_CODE, WRONG_PASSWORD)
      );
    }
  } catch (error) {
    logger.error(
      `Error while login user with email ${data.email} ${generateError(error)}`
    );
    next(new APIError(ERROR_STATUS_CODE.INTERNAL_SERVER_ERROR_CODE, UNEXPECTED_ERROR));
  }
};

export const validateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies[AUTH_COOKIE_KEY];

  try {
    if (!token)
      return next(
        new APIError(ERROR_STATUS_CODE.UNAUTHORIZED_REQUEST_CODE, UNAUTHORIZED_REQUEST)
      );

    const verified = JWT.verify(token, jwtSecretKey) as {
      userId: string;
      iat: number;
      exp: number;
      userNameAlphabet:string;
    };

    if (!verified)
      return next(
        new APIError(ERROR_STATUS_CODE.UNAUTHORIZED_REQUEST_CODE, UNAUTHORIZED_REQUEST)
      );

    return res.send({ status: true, data: {userNameAlphabet:verified.userNameAlphabet} });
  } catch (error) {
    logger.error(`Error while validating user ${generateError(error)}`);
    next(new APIError(ERROR_STATUS_CODE.INTERNAL_SERVER_ERROR_CODE, UNEXPECTED_ERROR));
  }
};
