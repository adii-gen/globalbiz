CREATE TYPE "public"."business_entity_type" AS ENUM('FREEZONE_LIMITED_LIABILITY_COMPANY', 'BRANCH_OF_FOREIGN_COMPANY', 'BRANCH_OF_UAE_COMPANY', 'FREELANCE_LICENSE');--> statement-breakpoint
CREATE TYPE "public"."freezone_emirate" AS ENUM('ABU_DHABI', 'DUBAI', 'SHARJAH', 'AJMAN', 'UMM_AL_QUWAIN', 'RAS_AL_KHAIMAH', 'FUJAIRAH');--> statement-breakpoint
CREATE TYPE "public"."license_type" AS ENUM('COMMERCIAL', 'INDUSTRIAL', 'PROFESSIONAL', 'FREELANCE', 'OTHER');--> statement-breakpoint
CREATE TABLE "freezones" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"emirate" "freezone_emirate" NOT NULL,
	"description" text,
	"advantages" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"license_types" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"business_entities" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"foreign_ownership" boolean DEFAULT true NOT NULL,
	"tax_exemption" boolean DEFAULT true NOT NULL,
	"customs_duty_exemption" boolean DEFAULT true NOT NULL,
	"capital_repatriation" boolean DEFAULT true NOT NULL,
	"has_prebuilt_infrastructure" boolean DEFAULT true,
	"has_cluster_environment" boolean DEFAULT false,
	"has_single_window_operations" boolean DEFAULT true,
	"setup_process" text,
	"immigration_process" text,
	"website" text,
	"location" text,
	"contact_email" text,
	"contact_phone" text,
	"is_active" boolean DEFAULT true NOT NULL,
	"slug" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "freezones_name_key" ON "freezones" USING btree ("name");--> statement-breakpoint
CREATE UNIQUE INDEX "freezones_slug_key" ON "freezones" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "freezones_emirate_idx" ON "freezones" USING btree ("emirate");--> statement-breakpoint
CREATE INDEX "freezones_foreign_ownership_idx" ON "freezones" USING btree ("foreign_ownership");--> statement-breakpoint
CREATE INDEX "freezones_tax_exemption_idx" ON "freezones" USING btree ("tax_exemption");--> statement-breakpoint
CREATE INDEX "freezones_active_idx" ON "freezones" USING btree ("is_active");