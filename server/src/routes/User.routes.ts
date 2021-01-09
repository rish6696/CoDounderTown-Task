import express, { Router } from "express";
import { createValidator, ExpressJoiInstance } from "express-joi-validation";
import { createBlogValidator, getBlogsValidator } from "../validators/User.validator";
import {
  createBlogController,
  getAllBlogsController,
  getUserBlogsController,
} from "../controllers/User.controller";

import { verifyJwtToken } from "../middlewares/authMiddleware";

const validator: ExpressJoiInstance = createValidator({});

const authRouter: Router = express.Router();

authRouter
  .route("/user/blog/create")
  .post(validator.body(createBlogValidator), createBlogController);

authRouter
  .route("get/blogs")
  .get(validator.query(getBlogsValidator), getAllBlogsController);

authRouter
  .route("/user/get/blogs")
  .get(verifyJwtToken,getUserBlogsController);

export default authRouter;
