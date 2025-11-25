ALTER TABLE "management_details" RENAME COLUMN "plan_name" TO "name";--> statement-breakpoint
ALTER TABLE "management_details" RENAME COLUMN "tagline" TO "designation";--> statement-breakpoint
ALTER TABLE "management_details" ADD COLUMN "department" varchar(255);