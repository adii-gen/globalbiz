DROP INDEX "freezones_name_key";--> statement-breakpoint
DROP INDEX "freezones_slug_key";--> statement-breakpoint
DROP INDEX "freezones_emirate_idx";--> statement-breakpoint
DROP INDEX "freezones_foreign_ownership_idx";--> statement-breakpoint
DROP INDEX "freezones_tax_exemption_idx";--> statement-breakpoint
DROP INDEX "freezones_active_idx";--> statement-breakpoint
ALTER TABLE "freezones" DROP COLUMN "emirate";--> statement-breakpoint
ALTER TABLE "freezones" DROP COLUMN "description";--> statement-breakpoint
ALTER TABLE "freezones" DROP COLUMN "advantages";--> statement-breakpoint
ALTER TABLE "freezones" DROP COLUMN "license_types";--> statement-breakpoint
ALTER TABLE "freezones" DROP COLUMN "business_entities";--> statement-breakpoint
ALTER TABLE "freezones" DROP COLUMN "foreign_ownership";--> statement-breakpoint
ALTER TABLE "freezones" DROP COLUMN "tax_exemption";--> statement-breakpoint
ALTER TABLE "freezones" DROP COLUMN "customs_duty_exemption";--> statement-breakpoint
ALTER TABLE "freezones" DROP COLUMN "capital_repatriation";--> statement-breakpoint
ALTER TABLE "freezones" DROP COLUMN "has_prebuilt_infrastructure";--> statement-breakpoint
ALTER TABLE "freezones" DROP COLUMN "has_cluster_environment";--> statement-breakpoint
ALTER TABLE "freezones" DROP COLUMN "has_single_window_operations";--> statement-breakpoint
ALTER TABLE "freezones" DROP COLUMN "setup_process";--> statement-breakpoint
ALTER TABLE "freezones" DROP COLUMN "immigration_process";--> statement-breakpoint
ALTER TABLE "freezones" DROP COLUMN "website";--> statement-breakpoint
ALTER TABLE "freezones" DROP COLUMN "location";--> statement-breakpoint
ALTER TABLE "freezones" DROP COLUMN "contact_email";--> statement-breakpoint
ALTER TABLE "freezones" DROP COLUMN "contact_phone";--> statement-breakpoint
ALTER TABLE "freezones" DROP COLUMN "is_active";--> statement-breakpoint
ALTER TABLE "freezones" DROP COLUMN "slug";--> statement-breakpoint
ALTER TABLE "freezones" DROP COLUMN "created_at";--> statement-breakpoint
ALTER TABLE "freezones" DROP COLUMN "updated_at";--> statement-breakpoint
DROP TYPE "public"."business_entity_type";--> statement-breakpoint
DROP TYPE "public"."freezone_emirate";--> statement-breakpoint
DROP TYPE "public"."license_type";