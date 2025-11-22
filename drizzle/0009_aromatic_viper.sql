ALTER TABLE "freezone_details" DROP CONSTRAINT "freezone_details_slug_unique";--> statement-breakpoint
ALTER TABLE "freezones" ADD COLUMN "slug" text NOT NULL;--> statement-breakpoint
ALTER TABLE "freezone_details" DROP COLUMN "slug";