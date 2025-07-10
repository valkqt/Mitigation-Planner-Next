/*
  Warnings:

  - Added the required column `encounterId` to the `Preset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Preset` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Preset" ADD COLUMN     "encounterId" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_encounterId_fkey" FOREIGN KEY ("encounterId") REFERENCES "Encounter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
