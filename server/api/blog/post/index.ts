import { getPublishPosts } from "@/server/db/repository/post.repository";
import { ResponseModel } from "@/server/model/ResponseModel";

export default defineEventHandler(async (event) => {
  const posts = await getPublishPosts();
  return new ResponseModel(200, "success", {
    posts,
  });
});
