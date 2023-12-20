import {
  serial,
  text,
  varchar,
  integer,
  boolean,
  pgSchema,
} from "drizzle-orm/pg-core";

export const schema = pgSchema("blog");

export const ContentTable = schema.table("contents", {
  cid: serial("cid").primaryKey(),
  title: varchar("title"),
  slug: varchar("slug"),
  headImage: varchar("headimage"),
  createTime: integer("createdtime"),
  modifyTime: integer("modifiedtime"),
  text: text("text"),
  authorId: integer("authorid"),
  type: varchar("type"),
  status: varchar("status"),
  password: varchar("password"),
  allowComment: boolean("allowcomment"),
  parent: integer("parent"),
  commentsNum: integer("commentsnum"),
  views: integer("views"),
  stars: integer("stars"),
});
