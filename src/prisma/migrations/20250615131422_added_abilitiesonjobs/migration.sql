/*
  Warnings:

  - You are about to drop the column `jobId` on the `Ability` table. All the data in the column will be lost.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "PlayerTarget" ADD VALUE 'GROUND';
ALTER TYPE "PlayerTarget" ADD VALUE 'ENEMY';

-- DropForeignKey
ALTER TABLE "Ability" DROP CONSTRAINT "Ability_jobId_fkey";

-- AlterTable
ALTER TABLE "Ability" DROP COLUMN "jobId";

-- CreateTable
CREATE TABLE "AbilitiesOnJobs" (
    "jobId" INTEGER NOT NULL,
    "abilityId" INTEGER NOT NULL,

    CONSTRAINT "AbilitiesOnJobs_pkey" PRIMARY KEY ("jobId","abilityId")
);

-- AddForeignKey
ALTER TABLE "AbilitiesOnJobs" ADD CONSTRAINT "AbilitiesOnJobs_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AbilitiesOnJobs" ADD CONSTRAINT "AbilitiesOnJobs_abilityId_fkey" FOREIGN KEY ("abilityId") REFERENCES "Ability"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
