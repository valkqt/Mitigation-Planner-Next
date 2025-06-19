import prisma from "@/lib/prisma";

export async function POST() {
  try {
        // add encounter
        await prisma.$executeRaw`INSERT INTO "Encounter" (name, level, duration) VALUES
        ('Dancing Green',  100, 606),
        ('Sugar Riot',  100, 684),
        ('Brute Abombinator',  100, 671),
        ('Howling Blade',  100, 846);
        `;

        // add mechanics
        await prisma.$executeRaw`INSERT INTO "Mechanic" (name, sources, "castTime", targets, "mechanicType", "damageType", description)
             VALUES    ('Deep Cut', '{"BOSS"}', 5, '{"MAIN_THREAT", "SECONDARY_THREAT"}', 'DAMAGE', 'PHYSICAL', ''),
                       ('Flip to A/B-side', '{"BOSS"}', 4, '{"SELF"}', 'SETUP', 'NONE', ''),
                       ('2-4-snap Twist', '{"BOSS"}', 5, '{"GROUND"}', 'DAMAGE', 'MAGICAL', ''),
                       ('Play A/B-side', '{"BOSS"}', 0, '{"ROLE"}', 'DAMAGE', 'MAGICAL', ''),
                       ('Celebrate Good Times', '{"BOSS"}', 5, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                       ('Disco Infernal', '{"BOSS"}', 4, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                       ('Funky Floor', '{"BOSS"}', 2, '{"MAIN_THREAT"}', 'SETUP', 'NONE', ''),
                       ('Inside Out / Outside In', '{"BOSS"}', 5, '{"GROUND"}', 'DAMAGE', 'MAGICAL', ''),
                       ('Burn Baby Burn', '{"BOSS"}', 0, '{"ROLE"}', 'DAMAGE', 'MAGICAL', ''),
                       ('Ensemble Assemble', '{"BOSS"}', 3, '{"SELF"}', 'SETUP', 'MAGICAL', ''),
                       ('Arcady Night Fever', '{"BOSS"}', 5, '{"GROUND"}', 'DAMAGE', 'MAGICAL', ''),
                       ('Get Down! ', '{"BOSS"}', 0, '{"GROUND"}', 'DAMAGE', 'MAGICAL', ''),
                       ('Let''s Dance', '{"ENEMY"}', 6, '{"GROUND"}', 'DAMAGE', 'MAGICAL', ''),
                       ('Let''s Dance + Freak Out', '{"BOSS"}', 0, '{"GROUND"}', 'DAMAGE', 'MAGICAL', ''),
                       ('Let''Pose', '{"BOSS"}', 5, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                       ('Ride The Waves', '{"BOSS"}', 4, '{"GROUND"}', 'DAMAGE', 'MAGICAL', ''),
                       ('Eighth/Quarter Beats', '{"BOSS"}', 4, '{"GROUND"}', 'DAMAGE', 'MAGICAL', ''),
                       ('Frogtourage', '{"BOSS"}', 4, '{"GROUND"}', 'DAMAGE', 'MAGICAL', ''),
                       ('Back-up Dance', '{"BOSS"}', 0, '{"ROLE"}', 'DAMAGE', 'MAGICAL', ''),
                       ('Let''s Dance Remix', '{"BOSS"}', 6, '{"GROUND"}', 'DAMAGE', 'MAGICAL', ''),
                       ('Do the Hustle', '{"BOSS"}', 4, '{"GROUND"}', 'DAMAGE', 'MAGICAL', ''),
                       ('Moonburn + Back-up Dance', '{"BOSS"}', 0, '{"ROLE"}', 'DAMAGE', 'MAGICAL', ''),
                       ('Frogtourage Finale', '{"BOSS"}', 4, '{"GROUND"}', 'DAMAGE', 'MAGICAL', ''),
                       ('Hi-NRG Fever', '{"BOSS"}', 4, '{"GROUND"}', 'DAMAGE', 'MAGICAL', '');
        `;

        // add nodes
        await prisma.$executeRaw`INSERT INTO "Node" (timestamp, "mechanicId", "encounterId") VALUES
                            (9, 1, 1),
                            (23, 2, 1),
                            (29, 3, 1),
                            (39, 4, 1),
                            (42, 2, 1),
                            (48, 3, 1),
                            (58, 4, 1),
                            (59, 5, 1),
                            (73, 6, 1),
                            (79, 7, 1),
                            (85, 8, 1),
                            (95, 2, 1),
                            (101, 9, 1),
                            (109, 9, 1),
                            (112, 3, 1),
                            (122, 4, 1),
                            (123, 5, 1),
                            (130, 1, 1),
                            (144, 10, 1),
                            (150, 11, 1),
                            (155, 12, 1),
                            (157, 12, 1),
                            (160, 12, 1),
                            (162, 12, 1),
                            (165, 12, 1),
                            (167, 12, 1),
                            (170, 12, 1),
                            (172, 12, 1),
                            (177, 13, 1),
                            (186, 14, 1),
                            (188, 13, 1),
                            (191, 14, 1),
                            (193, 13, 1),
                            (196, 14, 1),
                            (198, 13, 1),
                            (201, 14, 1),
                            (204, 15, 1),
                            (223, 2, 1),
                            (229, 16, 1),
                            (238, 17, 1),
                            (246, 17, 1),
                            (257, 8, 1),
                            (267, 3, 1),
                            (277, 4, 1),
                            (279, 1, 1),
                            (286, 5, 1),
                            (299, 18, 1),
                            (312, 17, 1),
                            (321, 6, 1),
                            (335, 9, 1),
                            (337, 19, 1),
                            (342, 2, 1),
                            (345, 9, 1),
                            (347, 19, 1),
                            (348, 3, 1),
                            (358, 4, 1),
                            (359, 5, 1),
                            (373, 10, 1),
                            (379, 11, 1),
                            (385, 12, 1),
                            (387, 12, 1),
                            (390, 12, 1),
                            (392, 12, 1),
                            (395, 12, 1),
                            (397, 12, 1),
                            (400, 12, 1),
                            (402, 12, 1),
                            (406, 20, 1),
                            (414, 20, 1),
                            (416, 20, 1),
                            (417, 20, 1),
                            (419, 20, 1),
                            (420, 20, 1),
                            (421, 20, 1),
                            (423, 20, 1),
                            (425, 15, 1),
                            (447, 18, 1),
                            (451, 21, 1),
                            (455, 21, 1),
                            (459, 21, 1),
                            (482, 22, 1),
                            (498, 22, 1),
                            (502, 21, 1),
                            (509, 1, 1),
                            (523, 7, 1),
                            (528, 17, 1),
                            (537, 8, 1),
                            (549, 17, 1),
                            (556, 5, 1),
                            (566, 5, 1),
                            (588, 23, 1),
                            (594, 24, 1);
        `;

        // add jobs
        await prisma.$executeRaw`INSERT INTO "Job" (name, role) VALUES
        ('Sage', 'HEALER'),
        ('Astrologian', 'HEALER'),
        ('Scholar', 'HEALER'),
        ('White Mage', 'HEALER'),
        ('Paladin', 'TANK'),
        ('Warrior', 'TANK'),
        ('Dark Knight', 'TANK'),
        ('Gunbreaker', 'TANK');
        `;

        // add abilities
        await prisma.$executeRaw`
        INSERT INTO "Ability" ("name", "duration", "cooldown", "level", "target", "type") VALUES
    ('Kerachole', 15, 30, 50, 'RAID', 'MITIGATION'),
    ('Holos', 20, 120, 76, 'RAID', 'MITIGATION'),
    ('Philosophia', 20, 180, 100, 'RAID', 'HEALING'),
    ('Pneuma', 0, 120, 90, 'RAID', 'HEALING'),
    ('Krasis', 10, 60, 86, 'ALLY', 'HEALING'),
    ('Panhaima', 15, 120, 80, 'RAID', 'MITIGATION'),
    ('Haima', 15, 120, 70, 'ALLY', 'MITIGATION'),
    ('Physis', 15, 60, 20, 'RAID', 'HEALING'),
    ('Zoe', 30, 90, 56, 'SELF', 'BUFF'),
    ('Pepsis', 0, 30, 58, 'RAID', 'HEALING'),
    ('Soteria', 15, 60, 35, 'SELF', 'BUFF'),
    ('Eukrasian Prognosis', 30, 3, 10, 'RAID', 'MITIGATION');
    `;

    await prisma.$executeRaw`
INSERT INTO "AbilitiesOnJobs" ("jobId", "abilityId") VALUES 
(1, 1), 
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(1, 12);
`;
  } catch (e) {
    console.log(e);
  }
  return await Response.json("mrow");
}
