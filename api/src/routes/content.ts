import express from "express";
import { Request, Response } from "express";
import {
  getPostBySlug,
  getPublishPosts,
} from "../db/repository/post.repository.js";
import { ContentTableData } from "../db/entities/content.entity.js";

const router = express.Router();

router.get("/post", (req: Request, res: Response) => {
  getPublishPosts()
    .then((posts) => {
      res.status(200).json({
        code: 200,
        data: posts,
      });
    })
    .catch((error): void => {
      console.error(error);
      res.status(500).json({
        code: 500,
        message: "failed to get posts",
        error: {
          type: error.name,
          msg: error.message,
          stack: error.stack,
        },
      });
    });
  return;
});

router.get("/post/:slug", (req: Request, res: Response) => {
  getPostBySlug(req.params.slug)
    .then((post) => {
      if (post.length === 0) {
        res.status(404).json({
          code: 404,
          message: "post not found",
        });
      } else {
        let lock: boolean = false;
        // delete password field
        let data: ContentTableData = { ...post[0] };
        if (data.password != null) {
          delete data.text;
          lock = true;
        }
        delete data.password;

        res.status(200).json({
          code: 200,
          lock: lock,
          data,
        });
      }
      return;
    })
    .catch((error): void => {
      console.error(error);
      res.status(500).json({
        code: 500,
        message: "failed to get post",
        error: {
          type: error.name,
          msg: error.message,
          stack: error.stack,
        },
      });
    });
});

export default router;
