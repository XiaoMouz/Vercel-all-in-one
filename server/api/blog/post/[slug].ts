import {
  getPostById,
  getPostBySlug,
} from '@/server/db/repository/post.repository';
import { ResponseModel } from '@/server/model/ResponseModel';

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug');

  if (!slug) {
    setResponseStatus(event, 400);
    return new ResponseModel(400, 'slug is required');
  }
  let post = await getPostBySlug(slug);
  if (post.length === 0 && !isNaN(+slug)) {
    post = await getPostById(+slug);
  }

  if (post.length === 0) {
    setResponseStatus(event, 404);
    return new ResponseModel(404, 'post not found');
  }

  let lock: boolean = false;
  let { password, ...content } = post[0];
  if (password != null) {
    content.text = null;
    lock = true;
    setResponseStatus(event, 403);
  }
  return new ResponseModel(200, 'success', {
    lock,
    content,
  });
});
