import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { CommentTable } from "../entities/comment.entity.js";
import { and, eq } from "drizzle-orm";

export const db = drizzle(sql);

export const getCommentsByCid = async (cid: number) => {
  return await db
    .select()
    .from(CommentTable)
    .where(and(eq(CommentTable.cid, cid), eq(CommentTable.status, "approved")));
};
