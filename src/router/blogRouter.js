import express from "express";
import routes from "../routes";
import {
  homeController,
  aboutController,
  postController,
  etcController,
  deleteController,
  writeController,
  writeControllerPost
} from "../controller/blogController";

const blogRouter = express.Router();

blogRouter.get(routes.home, homeController);
blogRouter.get(routes.about, aboutController);
blogRouter.get(routes.post, postController);
blogRouter.get(routes.etc, etcController);
blogRouter.post(routes.post_delete, deleteController);
blogRouter.get(routes.post_write, writeController);
blogRouter.post(routes.post_write, writeControllerPost);

export default blogRouter;
