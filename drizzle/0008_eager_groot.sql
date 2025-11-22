ALTER TABLE "freezone_details" ADD COLUMN "slug" text NOT NULL;--> statement-breakpoint
ALTER TABLE "freezone_details" ADD CONSTRAINT "freezone_details_slug_unique" UNIQUE("slug");