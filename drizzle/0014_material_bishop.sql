CREATE TABLE "pricing_plans" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"plan_name" varchar(255) NOT NULL,
	"tagline" varchar(255),
	"structure" varchar(100),
	"head_count" varchar(100),
	"transactions" varchar(100),
	"revenue" varchar(100),
	"budget" varchar(100),
	"compliance" varchar(100),
	"monthly_price" numeric(12, 2),
	"annual_price" numeric(12, 2) NOT NULL,
	"currency" varchar(10) DEFAULT 'AED' NOT NULL,
	"discount_percentage" integer DEFAULT 0,
	"included_features" jsonb NOT NULL,
	"order" integer DEFAULT 0 NOT NULL,
	"is_active" boolean DEFAULT true,
	"is_featured" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "pricing_plans_order_idx" ON "pricing_plans" USING btree ("order");--> statement-breakpoint
CREATE UNIQUE INDEX "pricing_plans_plan_name_key" ON "pricing_plans" USING btree ("plan_name");