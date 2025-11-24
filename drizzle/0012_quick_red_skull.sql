CREATE TABLE "offshore_details" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"offshore_id" uuid NOT NULL,
	"description" text,
	"understanding" jsonb,
	"perks" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "offshore" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "offshore_details" ADD CONSTRAINT "offshore_details_offshore_id_offshore_id_fk" FOREIGN KEY ("offshore_id") REFERENCES "public"."offshore"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "offshore_details_offshore_idx" ON "offshore_details" USING btree ("offshore_id");