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
"program_length_total" VARCHAR ,
"location" VARCHAR ,
"app_type" VARCHAR ,
"app_process" VARCHAR ,
"apply_now_cta" VARCHAR ,
"program_url" VARCHAR ,
"app_url" VARCHAR ,
"app_phone_number" VARCHAR ,
"paid_to_learn" BOOLEAN ,
"federal_student_aid" BOOLEAN ,
"card_length" VARCHAR ,
"card_tuition" VARCHAR ,
"card_location" VARCHAR ,
"page_title" VARCHAR ,
"program_total_weekly" VARCHAR ,
"program_class_times" VARCHAR ,
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
"email" VARCHAR ,
"password" VARCHAR ,
"first_name" VARCHAR ,
"last_name" VARCHAR ,
"phone_number" VARCHAR ,
"zip" VARCHAR ,
"resetPasswordToken" VARCHAR ,
"resetPasswordExpiry" INTEGER ,
PRIMARY KEY ("id")
);

CREATE TABLE "favorites" (
"id"  SERIAL ,
"career_id" INTEGER NOT NULL ,
"service_id" INTEGER ,
"user_id" INTEGER NOT NULL ,
PRIMARY KEY ("id")
);

CREATE TABLE "contact_form" (
"id"  SERIAL ,
"user_id" INTEGER ,
"page" VARCHAR NOT NULL DEFAULT 'NULL' ,
"career" VARCHAR ,
"training_service" VARCHAR ,
"financial_aid" BOOLEAN ,
"app_process" BOOLEAN ,
"talk_to_grad" BOOLEAN ,
"talk_to_working" BOOLEAN ,
"other" BOOLEAN ,
"message" VARCHAR ,
PRIMARY KEY ("id")
);

CREATE TABLE "questions" (
"id"  SERIAL ,
"data" INTEGER ,
PRIMARY KEY ("id")
);

CREATE TABLE "responses" (
"id"  SERIAL ,
"user_id" INTEGER ,
"question_id" INTEGER ,
"response" TEXT ,
PRIMARY KEY ("id")
);

ALTER TABLE "careers" ADD FOREIGN KEY ("industry_id") REFERENCES "industries" ("id");
ALTER TABLE "career_traits" ADD FOREIGN KEY ("career_id") REFERENCES "careers" ("id");
ALTER TABLE "services" ADD FOREIGN KEY ("career_id") REFERENCES "careers" ("id");
ALTER TABLE "services_traits" ADD FOREIGN KEY ("service_id") REFERENCES "services" ("id");
ALTER TABLE "favorites" ADD FOREIGN KEY ("career_id") REFERENCES "careers" ("id");
ALTER TABLE "favorites" ADD FOREIGN KEY ("service_id") REFERENCES "services" ("id");
ALTER TABLE "favorites" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
ALTER TABLE "contact_form" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
ALTER TABLE "responses" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
ALTER TABLE "responses" ADD FOREIGN KEY ("question_id") REFERENCES "questions" ("id");