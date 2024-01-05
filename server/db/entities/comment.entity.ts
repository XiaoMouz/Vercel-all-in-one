import {
  serial,
  text,
  varchar,
  integer,
  boolean,
  pgSchema,
  bigint,
} from "drizzle-orm/pg-core";

const schema = pgSchema("blog");

export const CommentTable = schema.table("comments", {
  id: serial("coid").primaryKey(),
  cid: bigint("cid", { mode: "number" }),
  createTime: bigint("created", { mode: "number" }),
  author: varchar("author"),
  authorId: bigint("authorid", { mode: "number" }),
  ownerId: bigint("ownerid", { mode: "number" }),
  mail: varchar("mail"),
  url: varchar("url"),
  ip: varchar("ip"),
  agent: varchar("agent"),
  text: text("text"),
  type: varchar("type"),
  status: varchar("status"),
  parent: bigint("parent", { mode: "number" }),
  stars: integer("stars"),
});

export interface CommentTableData {
  id: number;
  cid: number;
  createTime: number;
  author: string;
  authorId: number;
  ownerId: number;
  mail: string;
  url: string;
  ip: string;
  agent: string;
  text: string;
  type: string;
  status: string;
  parent: number;
  stars: number;
}
