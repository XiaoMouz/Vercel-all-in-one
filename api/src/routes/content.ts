import express from "express";
import { Request, Response } from "express";
import {
  getPostBySlug,
  getPublishPosts,
} from "../db/repository/post.repository.js";

const router = express.Router();

interface ContentTableData {
  cid: number;
  slug: string | null;
  title: string | null;
  headImage: string | null;
  createTime: number | null;
  modifyTime: number | null;
  text: string | null;
  authorId: number | null;
  type: string | null;
  status: string | null;
  password: string | null;
  allowComment: boolean | null;
  parent: number | null;
  commentsNum: number | null;
  views: number | null;
  stars: number | null;
}

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
        let data: any = { ...post[0] };
        delete data.password;
        JSON.stringify;
        res.status(200).json({
          code: 200,
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
