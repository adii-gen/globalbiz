CREATE TABLE "mainland" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "mainland_details" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"mainland_id" uuid NOT NULL,
	"description" text,
	"benefits" jsonb,
	"license_types" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "mainland_details" ADD CONSTRAINT "mainland_details_mainland_id_mainland_id_fk" FOREIGN KEY ("mainland_id") REFERENCES "public"."mainland"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "mainland_details_mainland_idx" ON "mainland_details" USING btree ("mainland_id");