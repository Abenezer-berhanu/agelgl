CREATE TYPE "public"."HotelStatus" AS ENUM('ACTIVE', 'FINISH');--> statement-breakpoint
CREATE TABLE "FreeGameUser" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"hotel_id" uuid NOT NULL,
	"primary_phone" varchar(14) NOT NULL,
	CONSTRAINT "FreeGameUser_primary_phone_unique" UNIQUE("primary_phone")
);
