/*
  Warnings:

  - You are about to drop the column `castTime` on the `Mechanic` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Mechanic" DROP COLUMN "castTime";

-- AlterTable
ALTER TABLE "Node" ADD COLUMN     "castTime" INTEGER NOT NULL DEFAULT 0;
