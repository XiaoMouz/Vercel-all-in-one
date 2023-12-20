import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { ContentTable } from "../entities/content.entity.js";
import { and, eq } from "drizzle-orm";

// Use this object to send drizzle queries to your DB
export const db = drizzle(sql);

export const getPostBySlug = async (slug: string) => {
  return await db
    .select()
    .from(ContentTable)
    .where(and(eq(ContentTable.type, "post"), eq(ContentTable.slug, slug)));
};

export const getPostById = async (id: number) => {
  return await db
    .select()
    .from(ContentTable)
    .where(and(eq(ContentTable.type, "post"), eq(ContentTable.cid, id)));
};

export const getPublishPosts = async () => {
  return await db
    .select({
      cid: ContentTable.cid,
      slug: ContentTable.slug,
      title: ContentTable.title,
      views: ContentTable.views,
      stars: ContentTable.stars,
      commentsNum: ContentTable.commentsNum,
    })
    .from(ContentTable)
    .where(
      and(eq(ContentTable.type, "post"), eq(ContentTable.status, "publish"))
    );
};
