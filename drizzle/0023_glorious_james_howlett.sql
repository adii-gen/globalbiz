CREATE TABLE "details" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"description" text,
	"benefits" jsonb,
	"license_types" jsonb,
	"sub_freezones" jsonb,
	"business_entities" jsonb,
	"business_process" jsonb,
	"understanding" jsonb,
	"prerequisites" jsonb,
	"perks" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
