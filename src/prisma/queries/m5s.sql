INSERT INTO "Mechanic" (name, sources,  targets, "mechanicType", "damageType", description)
     VALUES    ('Deep Cut', '{"BOSS"}', '{"MAIN_THREAT", "SECONDARY_THREAT"}', 'DAMAGE', 'PHYSICAL', ''),
               ('Flip to A/B-side', '{"BOSS"}','{"SELF"}', 'SETUP', 'NONE', ''),
               ('2-4-snap Twist', '{"BOSS"}', '{"GROUND"}', 'DAMAGE', 'MAGICAL', ''),
               ('Play A/B-side', '{"BOSS"}', '{"ROLE"}', 'DAMAGE', 'MAGICAL', ''),
               ('Celebrate Good Times', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
               ('Disco Infernal', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
               ('Funky Floor', '{"BOSS"}', '{"MAIN_THREAT"}', 'SETUP', 'NONE', ''),
               ('Inside Out / Outside In', '{"BOSS"}', '{"GROUND"}', 'DAMAGE', 'MAGICAL', ''),
               ('Burn Baby Burn', '{"BOSS"}', '{"ROLE"}', 'DAMAGE', 'MAGICAL', ''),
               ('Ensemble Assemble', '{"BOSS"}', '{"SELF"}', 'SETUP', 'MAGICAL', ''),
               ('Arcady Night Fever', '{"BOSS"}', '{"GROUND"}', 'DAMAGE', 'MAGICAL', ''),
               ('Get Down! ', '{"BOSS"}', '{"GROUND"}', 'DAMAGE', 'MAGICAL', ''),
               ('Let''s Dance', '{"ENEMY"}', '{"GROUND"}', 'DAMAGE', 'MAGICAL', ''),

               ('Let''s Dance + Freak Out', '{"BOSS"}', '{"GROUND"}', 'DAMAGE', 'MAGICAL', ''),
               ('Let''Pose', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
               ('Ride The Waves', '{"BOSS"}', '{"GROUND"}', 'DAMAGE', 'MAGICAL', ''),
               ('Eighth/Quarter Beats', '{"BOSS"}', '{"GROUND"}', 'DAMAGE', 'MAGICAL', ''),
               ('Frogtourage', '{"BOSS"}', '{"GROUND"}', 'DAMAGE', 'MAGICAL', ''),
               ('Back-up Dance', '{"BOSS"}', '{"ROLE"}', 'DAMAGE', 'MAGICAL', ''),
               ('Let''s Dance Remix', '{"BOSS"}', '{"GROUND"}', 'DAMAGE', 'MAGICAL', ''),

               ('Do the Hustle', '{"BOSS"}', '{"GROUND"}', 'DAMAGE', 'MAGICAL', ''),
               ('Moonburn + Back-up Dance', '{"ENEMY"}', '{"ROLE"}', 'DAMAGE', 'MAGICAL', ''),
               ('Frogtourage Finale', '{"BOSS"}', '{"GROUND"}', 'DAMAGE', 'MAGICAL', ''),
               ('Hi-NRG Fever', '{"BOSS"}', '{"GROUND"}', 'DAMAGE', 'MAGICAL', '');


INSERT INTO "Node" (timestamp,  "castTime", "mechanicId", "encounterId") VALUES 
                    (9, 5, 1, 1),       -- Deep Cut
                    (23, 4, 2, 1),      -- Flip to A/B Side
                    (29, 5, 3, 1),      -- 2-4 Snap Twist
                    (39, 0, 4, 1),      -- Play A/B Side
                    (42, 4, 2, 1),      -- Flip to A/B Side
                    (48, 5, 3, 1),      -- 2-4 Snap Twist
                    (58, 0, 4, 1),      -- Play A/B Side
                    (59, 5, 5, 1),      -- Celebrate Good Times
                    (73, 4, 6, 1),      -- Disco Infernal
                    (79, 2, 7, 1),      -- Funky Floor
                    (85, 5, 8, 1),      -- Inside Out / Outside In
                    (95, 4, 2, 1),      -- Flip to A/B Side
                    (101, 0, 9, 1),     -- Burn Baby Burn
                    (109,  0, 9, 1),    -- Burn Baby Burn
                    (112,  5, 3, 1),    -- 2-4 Snap Twist
                    (122,  0, 4, 1),    -- Play A/B Side
                    (123,  5, 5, 1),    -- Celebrate Good Times
                    (130,  5, 1, 1),    -- Deep Cut
                    (144,  3, 10, 1),   -- Ensemble Assemble
                    (150,  5, 11, 1),   -- Arcady Night Fever
                    (155,  0, 12, 1),   -- Get Down!
                    (157,  0, 12, 1),   -- Get Down!
                    (160,  0, 12, 1),   -- Get Down!
                    (162,  0, 12, 1),   -- Get Down!
                    (165,  0, 12, 1),   -- Get Down!
                    (167,  0, 12, 1),   -- Get Down!
                    (170,  0, 12, 1),   -- Get Down!
                    (172,  0, 12, 1),   -- Get Down!
                    (177,  6, 13, 1),   -- Let's Dance
                    (186,  0, 14, 1),   -- Let's Dance + Freak Out
                    (188,  0, 13, 1),   -- Let's Dance
                    (191,  0, 14, 1),   -- Let's Dance + Freak Out
                    (193,  0, 13, 1),   -- Let's Dance
                    (196,  0, 14, 1),   -- Let's Dance + Freak Out
                    (198,  0, 13, 1),   -- Let's Dance
                    (201,  0, 14, 1),   -- Let's Dance + Freak Out
                    (204,  5, 15, 1),   -- Let's Pose
                    (223,  4, 2, 1),    -- Flip to A/B Side
                    (229,  4, 16, 1),   -- Ride The Waves
                    (238,  5, 17, 1),   -- Quarter/Eight Beats
                    (246,  5, 17, 1),   -- Quarter/Eight Beats
                    (257,  5, 8, 1),    -- Inside Out / Outside In
                    (267,  5, 3, 1),    -- 2-4 Snap Twist
                    (277,  0, 4, 1),    -- Play A/B Side
                    (279,  5, 1, 1),    -- Deep Cut
                    (286,  5, 5, 1),    -- Celebrate Good Times
                    (299,  3, 18, 1),   -- Frogtourage
                    (312, 5, 17, 1),    -- Moonburn + Eighth/Quarter Beats
                    (321,  4, 6, 1),    -- Disco Infernal
                    (335,  0, 9, 1),    -- Burn Baby Burn
                    (337,  0, 19, 1),   -- Backup Dance
                    (342,  4, 2, 1),    -- Flip to A/B Side
                    (345,  0, 9, 1),    -- Burn Baby Burn
                    (347,  0, 19, 1),   -- Backup Dance
                    (348,  5, 3, 1),    -- 2-4 Snap Twist
                    (358,  0, 4, 1),    -- Play A/B Side
                    (359,  5, 5, 1),    -- Celebrate Good Times
                    (373,  3, 10, 1),   -- Ensemble Assemble
                    (379,  5, 11, 1),   -- Arcady Night Fever
                    (385,  0, 12, 1),   -- Get Down!
                    (387,  0, 12, 1),   -- Get Down!
                    (390,  0, 12, 1),   -- Get Down!
                    (392,  0, 12, 1),   -- Get Down!
                    (395,  0, 12, 1),   -- Get Down!
                    (397, 0, 12, 1),    -- Get Down!
                    (400,  0, 12, 1),   -- Get Down!
                    (402,  0, 12, 1),   -- Get Down!
                    (406,  6, 20, 1),   -- Let's Dance Remix
                    (414,  0, 20, 1),   -- Let's Dance Remix
                    (416,  0, 20, 1),   -- Let's Dance Remix
                    (417,  0, 20, 1),   -- Let's Dance Remix
                    (419,  0, 20, 1),   -- Let's Dance Remix
                    (420,  0, 20, 1),   -- Let's Dance Remix
                    (421,  0, 20, 1),   -- Let's Dance Remix
                    (423,  0, 20, 1),   -- Let's Dance Remix
                    (425,  5, 15, 1),   -- Let's Pose
                    (447,  3, 18, 1),   -- Frogtourage
                    (451,  5, 21, 1),   -- Do The Hustle (Tour)
                    (455,  5, 21, 1),   -- Do The Hustle (Tour)
                    (459,  5, 21, 1),   -- Do The Hustle (Boss)
                    (482,  0, 22, 1),   -- Moonburn + Backup Dance
                    (498,  0, 22, 1),   -- Moonburn + Backup Dance
                    (502,  5, 21, 1),   -- Do The Hustle (Boss + Tour)
                    (509,  5, 1, 1),    -- Deep Cut
                    (523,  2, 7, 1),    -- Funky Floor
                    (528,  5, 17, 1),   -- Quarter/Eighth Beats
                    (537,  5, 8, 1),    -- Inside Out / Outside In
                    (549,  5, 17, 1),   -- Quarter/Eighth Beats
                    (556,  5, 5, 1),    -- Celebrate Good Times
                    (566,  5, 5, 1),    -- Celebrate Good Times
                    (588,  3, 23, 1),   -- Frogtourage Finale
                    (594,  12, 24, 1);   -- Hi-NRG Fever (Enrage)
