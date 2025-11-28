ALTER TABLE "FreeGameUser" RENAME COLUMN "hotel_id" TO "user_id";--> statement-breakpoint
ALTER TABLE "FreeGameUser" RENAME COLUMN "primary_phone" TO "phone_number";--> statement-breakpoint
ALTER TABLE "FreeGameUser" DROP CONSTRAINT "FreeGameUser_primary_phone_unique";--> statement-breakpoint
ALTER TABLE "FreeGameUser" ADD CONSTRAINT "FreeGameUser_phone_number_unique" UNIQUE("phone_number");