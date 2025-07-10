/*
  Warnings:

  - The primary key for the `Preset` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- CreateEnum
CREATE TYPE "Expansion" AS ENUM ('ARR', 'HW', 'SB', 'SHB', 'EW', 'DT');

-- DropForeignKey
ALTER TABLE "Ability" DROP CONSTRAINT "Ability_jobId_fkey";

-- DropForeignKey
ALTER TABLE "Node" DROP CONSTRAINT "Node_encounterId_fkey";

-- DropForeignKey
ALTER TABLE "Node" DROP CONSTRAINT "Node_mechanicId_fkey";

-- AlterTable
ALTER TABLE "Preset" DROP CONSTRAINT "Preset_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Preset_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Preset_id_seq";

-- AddForeignKey
ALTER TABLE "Ability" ADD CONSTRAINT "Ability_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Node" ADD CONSTRAINT "Node_encounterId_fkey" FOREIGN KEY ("encounterId") REFERENCES "Encounter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Node" ADD CONSTRAINT "Node_mechanicId_fkey" FOREIGN KEY ("mechanicId") REFERENCES "Mechanic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
