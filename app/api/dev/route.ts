import prisma from "@/lib/prisma";

export async function POST() {
  try {
    // add encounter
    await prisma.$executeRaw`INSERT INTO "Encounter" (name, expansion, level, duration) VALUES ('Eden''s Gate: Refulgence', 'SHB', 80, 838);`;

    // add mechanics
    await prisma.$executeRaw`INSERT INTO "Mechanic" (name, source, "castTime", targets, "mechanicType", "damageType", description)
     VALUES ('Absolute Zero', 'BOSS', 5, '{"RAID"}', 'DAMAGE', 'MAGICAL', 'Raidwide');`;

    // add nodes
    await prisma.$executeRaw`INSERT INTO "Node" (timestamp, duration, "mechanicId", "encounterId") VALUES (10, 13, 1, 1);`;

    // add jobs
    await prisma.$executeRaw`INSERT INTO "Job" (name, role) 
    VALUES ('Sage', 'HEALER'), ('Astrologian', 'HEALER'), ('Scholar', 'HEALER'), ('White Mage', 'HEALER')`;

    // add abilities
    await prisma.$executeRaw`
    INSERT INTO "Ability" (name, duration, cooldown, level, target, type, "jobId") 
    VALUES ('Kerachole', 15, 30, 50, 'RAID', 'MITIGATION', 1), 
           ('Holos', 20, 120, 76, 'RAID', 'MITIGATION', 1);`;
  } catch (e) {
    console.log(e);
  }
  return await Response.json("mrow");
}
