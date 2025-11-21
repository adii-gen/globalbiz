CREATE TABLE "freezone_details" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"freezone_id" uuid NOT NULL,
	"description" text,
	"benefits" jsonb,
	"license_types" jsonb,
	"freezone_list" jsonb,
	"business_entities" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "freezone_details" ADD CONSTRAINT "freezone_details_freezone_id_freezones_id_fk" FOREIGN KEY ("freezone_id") REFERENCES "public"."freezones"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "freezone_details_freezone_idx" ON "freezone_details" USING btree ("freezone_id");