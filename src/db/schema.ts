/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// ===== 1. UPDATED SCHEMA (schema.ts) =====
import { Description } from "@radix-ui/react-toast";
import { InferModel } from "drizzle-orm";
import {
  boolean,
  decimal,
  index,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
  varchar
} from "drizzle-orm/pg-core";

// ===== ENUMS =====
export const UserRole = pgEnum("user_role", ["ADMIN", "USER"]);
export const VerificationStatus = pgEnum("verification_status", ["PENDING", "APPROVED", "REJECTED"]);
export const ProjectStatus = pgEnum("project_status", ["DRAFT", "PUBLISHED", "ARCHIVED"]);

// ===== USERS =====
export const UsersTable = pgTable(
  "users",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    emailVerified: timestamp("email_verified", { mode: "date" }),
    password: text("password").notNull(),
    phone: text("phone"),
    phoneVerified: timestamp("phone_verified", { mode: "date" }),
    role: UserRole("role").default("USER").notNull(),
    organizationId: uuid("organization_id"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("users_email_key").on(table.email),
    index("users_name_email_phone_idx").on(table.name, table.email, table.phone),
    index("users_organization_idx").on(table.organizationId),
  ]
);

export type User = InferModel<typeof UsersTable>;
export type NewUser = InferModel<typeof UsersTable, "insert">;

// ===== PROJECTS =====
export const ProjectsTable = pgTable(
  "projects",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    name: text("name").notNull(),
    description: text("description"),
    logo: text("logo"),
    status: ProjectStatus("status").default("DRAFT").notNull(),
    coverImage: text("cover_image"),
    websiteUrl: text("website_url"),
    bio: text("bio"),
    slug: text("slug"), // Added for URL-friendly project identification
    userId: uuid("user_id").notNull(),
    contentJson: jsonb("content_json"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("projects_slug_key").on(table.slug),
    index("projects_user_idx").on(table.userId),
    index("projects_name_idx").on(table.name),
    index("projects_status_idx").on(table.status),
    index("projects_created_at_idx").on(table.createdAt),
  ]
);

export type Project = InferModel<typeof ProjectsTable>;
export type NewProject = InferModel<typeof ProjectsTable, "insert">;

// Type definitions for JSON content
export interface ProjectContentItem {
  id: string;
  heading: string;
  description: string;
  order?: number;
}

export interface ProjectContent {
  sections: ProjectContentItem[];
  metadata?: {
    version?: string;
    lastModified?: string;
    [key: string]: any;
  };
}

// ===== AUTH TABLES (keeping existing) =====
export const EmailVerificationTokenTable = pgTable(
  "email_verification_tokens",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    email: text("email").notNull(),
    token: uuid("token").notNull(),
    expiresAt: timestamp("expires_at", { mode: "date" }).notNull(),
  },
  (table) => [
    uniqueIndex("email_verification_tokens_email_token_key").on(table.email, table.token),
    uniqueIndex("email_verification_tokens_token_key").on(table.token),
  ]
);

export const PhoneVerificationTable = pgTable(
  "phone_verification_tokens",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    phone: text("phone").notNull(),
    otp: text("otp").notNull(),
    expiresAt: timestamp("expires_at", { mode: "date" }).notNull(),
  },
  (table) => [
    uniqueIndex("phone_verification_tokens_phone_otp_key").on(table.phone, table.otp),
    uniqueIndex("phone_verification_tokens_otp_key").on(table.otp),
  ]
);

export const PasswordResetTokenTable = pgTable(
  "password_reset_tokens",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    email: text("email").notNull(),
    token: uuid("token").notNull(),
    expiresAt: timestamp("expires_at", { mode: "date" }).notNull(),
  },
  (table) => [
    uniqueIndex("password_reset_tokens_email_token_key").on(table.email, table.token),
    uniqueIndex("password_reset_tokens_token_key").on(table.token),
  ]
);




// ===== FREEZONES TABLE =====
export const FreezonesTable = pgTable(
  "freezones",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),

    // Basic Information
    name: text("name").notNull(),
    slug: text("slug").notNull(), // NEW

 },
  (table) => [
    uniqueIndex("freezones_slug_key").on(table.slug),
  ]
);


export const FreezoneDetailsTable = pgTable(
  "freezone_details",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),

    // Relation to freezones table
    freezoneId: uuid("freezone_id")
      .notNull()
      .references(() => FreezonesTable.id, { onDelete: "cascade" }),

    // Text long description
    description: text("description"),

    // Benefits stored as array of bullet points
    benefits: jsonb("benefits")
      .$type<string[]>(), // array of strings

    // License types: contains image, heading and small description for each item
    licenseTypes: jsonb("license_types")
      .$type<
        {
          image?: string;
          heading: string;
          description?: string;
        }[]
      >(),

    // Freezone list pointer style data
    subFreezones: jsonb("sub_freezones").$type<
      {
        name: string;
        description?: string;
        image?: string;
        benefits?: string[];
        businessEntitiesAllowed?: {
          title: string;
          description?: string;
        }[];
      }[]
    >(),
    // Business entities mapped as title + short description
    businessEntities: jsonb("business_entities")
      .$type<
        {
          title: string;
          description?: string;
        }[]
      >(),

    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    index("freezone_details_freezone_idx").on(table.freezoneId),
  ]
);


subFreezones: jsonb("sub_freezones").$type<
  {
    name: string;
    description?: string;
    image?: string;
    benefits?: string[]; // bullet list
    businessEntitiesAllowed?: {
      title: string;
      description?: string;
    }[];
  }[]
>();


export const MainlandTable = pgTable(
  "mainland",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),

    // Basic Information
    name: text("name").notNull(),
    slug: text("slug").notNull(), // NEW

  },
   (table) => [
    // 🔥 CRITICAL: Add unique index on slug for fast lookups
    uniqueIndex("mainland_slug_key").on(table.slug),
    
    // Optional: Regular index if you don't want unique constraint
    // index("mainland_slug_idx").on(table.slug),
  ]
);

export const mainlandDetailsTable = pgTable(
  "mainland_details",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),

    // Relation to mainlands table
    mainlandId: uuid("mainland_id")
      .notNull()
      .references(() => MainlandTable.id, { onDelete: "cascade" }),

    // Text long description
    description: text("description"),

    // Benefits stored as array of bullet points
    benefits: jsonb("benefits")
      .$type<string[]>(), // array of strings

    // License types: contains image, heading and small description for each item
    licenseTypes: jsonb("license_types")
      .$type<
        {
          image?: string;
          heading: string;
          description?: string;
        }[]
      >(),
    buesinessProcess: jsonb("business_process")
      .$type<
        {
          image?: string;
          heading: string;
          description?: string;
        }[]
      >(),
    // mainland list pointer style data
    // submainlands: jsonb("sub_mainlands").$type<
    //   {
    //     name: string;
    //     description?: string;
    //     image?: string;
    //     benefits?: string[];
    //     businessEntitiesAllowed?: {
    //       title: string;
    //       description?: string;
    //     }[];
    //   }[]
    // >(),
    // Business entities mapped as title + short description
    // businessEntities: jsonb("business_entities")
    //   .$type<
    //     {
    //       title: string;
    //       description?: string;
    //     }[]
    //   >(),

    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    index("mainland_details_mainland_idx").on(table.mainlandId),
  ]
);



export const offshoreTable = pgTable(
  "offshore",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),

    // Basic Information
    name: text("name").notNull(),
    slug: text("slug").notNull(), // NEW

   }
  
);


export const offshoreDetailsTable = pgTable(
  "offshore_details",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),

    // Relation to offshores table
    offshoreId: uuid("offshore_id")
      .notNull()
      .references(() => offshoreTable.id, { onDelete: "cascade" }),

    // Text long description
    description: text("description"),

    // Benefits stored as array of bullet points
    understanding: jsonb("understanding")
      .$type<string[]>(), // array of strings
 benefits: jsonb("benefits")
      .$type<string[]>(), // array of strings

    prerequisites: jsonb("prerequisites")
      .$type<string[]>(), // array of strings
 buesinessProcess: jsonb("business_process")
      .$type<
        {
          image?: string;
          heading: string;
          description?: string;
        }[]
      >(),
       perks: jsonb("perks")
      .$type<
        {
          image?: string;
          description?: string;
        }[]
      >(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    index("offshore_details_offshore_idx").on(table.offshoreId),
  ]
);


export const PricingPlanTable = pgTable(
  "pricing_plans",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    planName: varchar("plan_name", { length: 255 }).notNull(),
    tagline: varchar("tagline", { length: 255 }),
    structure: varchar("structure", { length: 100 }),
    headCount: varchar("head_count", { length: 100 }),
    transactions: varchar("transactions", { length: 100 }),
    revenue: varchar("revenue", { length: 100 }),
    budget: varchar("budget", { length: 100 }),
    compliance: varchar("compliance", { length: 100 }),
    
    monthlyPrice: decimal("monthly_price", { precision: 12, scale: 2 }),
    annualPrice: decimal("annual_price", { precision: 12, scale: 2 }).notNull(),
    currency: varchar("currency", { length: 10 }).default("AED").notNull(),
    discountPercentage: integer("discount_percentage").default(0),
    
    includedFeatures: jsonb("included_features").notNull(),
    
    order: integer("order").notNull().default(0),
    isActive: boolean("is_active").default(true),
    isFeatured: boolean("is_featured").default(false),
    
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => ({
    orderIdx: index("pricing_plans_order_idx").on(table.order),
    planNameKey: uniqueIndex("pricing_plans_plan_name_key").on(table.planName),
  })
);

export const ManagementDetails = pgTable(
  "management_details",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    Name: varchar("name", { length: 255 }).notNull(),
    Designation: varchar("designation", { length: 255 }),
    Description: varchar("description", { length: 255 }),
    
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  }
);
export const Address=pgTable(
  "address",{
    id:uuid("id").defaultRandom().primaryKey().notNull(),
    officeName: varchar("office_name",{length:255}).notNull(),
    officeAddress:varchar("office_address",{length:255}).notNull(),
    phone: text("phone"),
    email: text("email").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  }
);



export const blogs = pgTable('blogs', {
    id:uuid("id").defaultRandom().primaryKey().notNull(),
  url: text('url').notNull(),
  title: text('title').notNull(),
  short_description: text('short_description'),
  description: text('description'),
  image: varchar('image', { length: 255 }).notNull(),
  meta_title: text('meta_title'),
  meta_keywords: text('meta_keywords'),
  meta_description: text('meta_description'),
  tags: text('tags').notNull(),
  author_name: varchar('author_name', { length: 255 }),
  added_by: integer('added_by').notNull(),
  view: integer('view').notNull().default(0),
  is_featured: boolean('is_featured').notNull().default(false),
  is_editor: boolean('is_editor').notNull().default(false),
  status: boolean('status').notNull().default(true),
  created: timestamp('created').notNull(),
  modified: timestamp('modified'),
  published: timestamp('published')
});

