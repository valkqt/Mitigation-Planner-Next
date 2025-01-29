-- CreateTable
CREATE TABLE "Preset" (
    "id" SERIAL NOT NULL,
    "flags" JSONB,
    "segments" JSONB,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Preset_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Preset" ADD CONSTRAINT "Preset_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
