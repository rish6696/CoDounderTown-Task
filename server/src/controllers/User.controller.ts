import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";

import { APIError } from "../utilities/APIError";
import { UNEXPECTED_ERROR, generateError } from "../utilities/errorConstants";
import logger from "../utilities/logger";

import { BlogModel } from "../models/model.index";

export const createBlogController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body as {
    title: string;
    body: string;
    tags: [string];
    userId: [string];
  };

  logger.info(`Create Blog with data ${JSON.stringify(data)}`);

  const { title, body, tags, userId } = data;

  try {
    const blog = new BlogModel({
      title,
      body,
      tags,
      userId,
    });

    const savedBlog = await blog.save();

    res.send({ status: true, message: "Blog Created Successfully" });
  } catch (error) {
    logger.error(`Error while creating blogs and error ${generateError(error)}`);
    return next(new APIError(500, UNEXPECTED_ERROR));
  }
};

export const getUserBlogsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.body;
  try {
    const blogs = await BlogModel.find({ userId: Types.ObjectId(userId) });
    return res.send({ status: true, data: blogs });
  } catch (error) {
    logger.error(
      `Error while fetching blogs for userID ${userId} and error ${generateError(error)}`
    );
    return next(new APIError(500, UNEXPECTED_ERROR));
  }
};

export const getAllBlogsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { tags } = req.query as { tags: string | undefined };

  let query = [];

  if (tags) {
    const tagsArray = tags.split(",");
    query.push({ tags: { $in: tagsArray } });
  }

  try {
    const blogs = await BlogModel.find({ ...query }).sort({ createdAt: 1 });
    return res.send({ status: true, data: blogs });
  } catch (error) {
    logger.error(`Error while Fetching all blogs and error ${generateError(error)}`);
    return next(new APIError(500, UNEXPECTED_ERROR));
  }
};
