import { pgEnum, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const freeGameUserStatus = pgEnum("HotelStatus", ["ACTIVE", "FINISH"]);

export const freeGameUser = pgTable("FreeGameUser", {
  id: uuid("id").defaultRandom().primaryKey(),
  user_id: uuid("user_id").notNull(),
  phone_number: varchar("phone_number", { length: 14 }).notNull().unique(),
  status: freeGameUserStatus().default("ACTIVE"),
});
