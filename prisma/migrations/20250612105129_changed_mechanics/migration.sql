/*
  Warnings:

  - You are about to drop the column `source` on the `Mechanic` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `Node` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "EnemyTarget" ADD VALUE 'ROLE';

-- AlterTable
ALTER TABLE "Mechanic" DROP COLUMN "source",
ADD COLUMN     "sources" "Source"[],
ALTER COLUMN "castTime" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Node" DROP COLUMN "duration";

-- AlterTable
ALTER TABLE "Preset" ALTER COLUMN "userId" DROP NOT NULL;
