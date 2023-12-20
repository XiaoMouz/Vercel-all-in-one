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

export const UserTable = schema.table("users", {
  uid: bigint("uid", { mode: "number" }).primaryKey(),
  name: varchar("name"),
  password: varchar("password"),
  mail: varchar("mail"),
  url: varchar("url"),
  screenName: varchar("screenname"),
  created: bigint("created", { mode: "number" }),
  activated: bigint("activated", { mode: "number" }),
  logged: bigint("logged", { mode: "number" }),
  group: varchar("group"),
  apiKey: varchar("apikey"),
});
