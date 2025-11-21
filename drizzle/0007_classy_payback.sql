ALTER TABLE "freezone_details" ADD COLUMN "sub_freezones" jsonb;--> statement-breakpoint
ALTER TABLE "freezone_details" DROP COLUMN "freezone_list";