CREATE TABLE "careers" (
"id"  SERIAL ,
"industry_id" INTEGER ,
"name" VARCHAR NOT NULL DEFAULT 'NULL' ,
"annual_salary" VARCHAR NOT NULL DEFAULT 'NULL' ,
"training_length" VARCHAR ,
"description" VARCHAR ,
"openings" VARCHAR ,
"training_hours" VARCHAR ,
"training_cost" VARCHAR ,
"card_image_url" VARCHAR ,
"card_pro" VARCHAR ,
"profile_image_url" VARCHAR ,
"hourly_pay" VARCHAR ,
"video_url" VARCHAR ,
"paid_to_learn" BOOLEAN ,
"free_training" BOOLEAN ,
PRIMARY KEY ("id")
);

CREATE TABLE "industries" (
"id"  SERIAL ,
"name" VARCHAR NOT NULL DEFAULT 'NULL' ,
PRIMARY KEY ("id")
);

CREATE TABLE "career_traits" (
"id"  SERIAL ,
"career_id" INTEGER NOT NULL ,
"type" VARCHAR NOT NULL DEFAULT 'NULL' ,
"description" VARCHAR NOT NULL DEFAULT 'NULL' ,
PRIMARY KEY ("id")
);

CREATE TABLE "services" (
"id"  SERIAL ,
"career_id" INTEGER NOT NULL ,
"logo_url" VARCHAR ,
"name" VARCHAR NOT NULL DEFAULT 'NULL' ,
"subheading" VARCHAR ,
"about" VARCHAR ,
"financial_info" VARCHAR ,
"program_length" VARCHAR ,
"location" VARCHAR ,
"app_process" VARCHAR ,
"website" VARCHAR ,
"apply_now_cta" VARCHAR ,
"program_url" VARCHAR ,
"app_url" VARCHAR ,
"paid_to_learn" BOOLEAN ,
"federal_loans" BOOLEAN ,
PRIMARY KEY ("id")
);

CREATE TABLE "services_traits" (
"id"  SERIAL ,
"service_id" INTEGER NOT NULL ,
"type" VARCHAR NOT NULL DEFAULT 'NULL' ,
"description" VARCHAR ,
PRIMARY KEY ("id")
);

CREATE TABLE "users" (
"id"  SERIAL ,
"email" VARCHAR NOT NULL DEFAULT 'NULL' ,
"password" VARCHAR NOT NULL DEFAULT 'NULL' ,
"first_name" VARCHAR ,
"last_name" VARCHAR ,
"phone_number" VARCHAR ,
PRIMARY KEY ("id")
);

CREATE TABLE "favorites" (
"id"  SERIAL ,
"type" VARCHAR NOT NULL DEFAULT 'NULL' ,
"target_id" INTEGER NOT NULL ,
"user_id" INTEGER NOT NULL ,
PRIMARY KEY ("id")
);

ALTER TABLE "careers" ADD FOREIGN KEY ("industry_id") REFERENCES "industries" ("id");
ALTER TABLE "career_traits" ADD FOREIGN KEY ("career_id") REFERENCES "careers" ("id");
ALTER TABLE "services" ADD FOREIGN KEY ("career_id") REFERENCES "careers" ("id");
ALTER TABLE "services_traits" ADD FOREIGN KEY ("service_id") REFERENCES "services" ("id");
ALTER TABLE "favorites" ADD FOREIGN KEY ("target_id") REFERENCES "services" ("id");
ALTER TABLE "favorites" ADD FOREIGN KEY ("target_id") REFERENCES "careers" ("id");
ALTER TABLE "favorites" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");