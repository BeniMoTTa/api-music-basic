-- CreateEnum
CREATE TYPE "typeMusics" AS ENUM ('Punk', 'Deathcore', 'HeavyMetal', 'Indie', 'Grunge', 'Progress', 'Country', 'PopRock', 'FolkRock', 'HardRock', 'NewWave');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(127) NOT NULL,
    "email" VARCHAR(127) NOT NULL,
    "password" VARCHAR(60) NOT NULL,
    "reset_password" VARCHAR(127),
    "cpf" VARCHAR(11) NOT NULL,
    "phone" VARCHAR(11) NOT NULL,
    "birthdate" VARCHAR(8) NOT NULL,
    "cep" VARCHAR(12) NOT NULL,
    "state" VARCHAR(127) NOT NULL,
    "city" VARCHAR(127) NOT NULL,
    "street" VARCHAR(127) NOT NULL,
    "number" VARCHAR(127) NOT NULL,
    "complement" VARCHAR(127) NOT NULL,
    "user_typeMusic" "typeMusics" NOT NULL DEFAULT 'HeavyMetal',
    "user_color" VARCHAR(12) NOT NULL,
    "profileImage" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "edited" BOOLEAN DEFAULT false,
    "user_id" INTEGER,
    "music_id" INTEGER,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "music" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "audioUrl" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "music_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_music_id_fkey" FOREIGN KEY ("music_id") REFERENCES "music"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "music" ADD CONSTRAINT "music_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
