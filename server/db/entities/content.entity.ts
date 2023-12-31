import {
  serial,
  text,
  varchar,
  integer,
  boolean,
  pgSchema,
  bigint,
} from 'drizzle-orm/pg-core';

const schema = pgSchema('blog');

export const ContentTable = schema.table('contents', {
  cid: serial('cid').primaryKey(),
  title: varchar('title'),
  slug: varchar('slug'),
  headImage: varchar('headimage'),
  createTime: bigint('createdtime', { mode: 'number' }),
  modifyTime: bigint('modifiedtime', { mode: 'number' }),
  text: text('text'),
  authorId: integer('authorid'),
  type: varchar('type'),
  status: varchar('status'),
  password: varchar('password'),
  allowComment: boolean('allowcomment'),
  parent: integer('parent'),
  commentsNum: integer('commentsnum'),
  views: integer('views'),
  stars: integer('stars'),
});

export interface ContentTableData {
  cid: number;
  slug: string | null;
  title: string;
  headImage: string;
  createTime: number;
  modifyTime: number;
  text?: string | null;
  authorId: number;
  type: string;
  status: string;
  password?: string | null;
  allowComment: boolean;
  parent: number | null;
  commentsNum: number;
  views: number;
  stars: number;
}
