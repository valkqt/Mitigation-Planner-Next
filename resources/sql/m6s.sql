INSERT INTO "Mechanic" (name, sources, "castTime", targets, "mechanicType", "damageType", description) VALUES

                ('Mousse Mural', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Color Riot', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Wingmark Cast', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Color Clash Cast', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Wingmark Jump', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Double Style Cast', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Double Style + Color Clash Hit', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Sticky Mousse Spread', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Sticky Mousse Stacks', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Sugarscape Desert', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Layer Cactus', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Spray Pain Starts', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Spray Pain Ends', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Brûlée + Crowd Brûlée', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Layer Quicksand', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Spray Pain + Brûlée', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Pudding Graf Cast', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Pudding Graf', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Bomb Jump', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),

                ('Soul Sugar', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Live Painting', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('I Crave Violence', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Water III', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Player Bound', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Ready Ore Not', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Ore-rigato Mu Enrage', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Single Style Cast', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Single Style Hit', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Sugarscape Rivers', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Double Style Cast', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Double Style Hit', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Taste of Fire / Thunder', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Layer Thunderstorm', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Taste of Thunder Baited', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Highlightning', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Lightning Bolts Start', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Highlightning + Lightning Storm', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Pudding Party', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Layer Volcano', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Mousse Drip Cast', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Mousse Drip Hit', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Moussacre', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Mousse Towers', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Mousse Mural', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Sticky Mousse Spread', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Sticky Mousse Stacks', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Color Riot', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Color Clash Cast', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Double Style + Color Clash Hit', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
                ('Artistic Anarchy Cast', '{"BOSS"}', 0, '{"RAID"}', 'DAMAGE', 'MAGICAL', '');

INSERT INTO "Node" (timestamp, "mechanicId", "encounterId") VALUES 
        (6, 25, 2),   -- Mousse Mural
        (17, 26, 2),  -- Color Riot
        (31, 27, 2),  -- Wingmark Cast
        (38, 28, 2),  -- Color Clash Cast
        (57, 29, 2),  -- Wingmark Jump
        (46, 30, 2),  -- Double Style Cast
        (62, 31, 2),  -- Double Style + Color Clash Hit
        (65, 32, 2),  -- Sticky Mousse Spread
        (76, 33, 2),  -- Sticky Mousse Stacks
        (77, 26, 2),  -- Color Riot (repeat)
        (90, 34, 2),  -- Sugarscape Desert
        (97, 35, 2),  -- Layer Cactus
        (115, 36, 2), -- Spray Pain Starts
        (137, 37, 2), -- Spray Pain Ends
        (142, 38, 2), -- Brûlée + Crowd Brûlée
        (144, 32, 2), -- Sticky Mousse Spread (repeat)
        (153, 33, 2), -- Sticky Mousse Stacks (repeat)
        (157, 39, 2), -- Layer Quicksand
        (165, 40, 2), -- Spray Pain + Brûlée
        (174, 41, 2), -- Pudding Graf Cast
        (184, 30, 2), -- Double Style Cast (repeat)
        (194, 42, 2), -- Pudding Graf
        (210, 43, 2), -- Bomb Jump
        (214, 25, 2), -- Mousse Mural (repeat)
        (203, 26, 2), -- Color Riot (repeat)
        (215, 44, 2),   -- Soul Sugar
        (221, 45, 2),   -- Live Painting
        (239, 46, 2),   -- I Crave Violence
        (250, 45, 2),   -- Live Painting (repeat)
        (262, 47, 2),   -- Water III
        (272, 47, 2),   -- Water III (repeat)
        (272, 45, 2),   -- Live Painting (repeat)
        (285, 48, 2),   -- Player Bound
        (290, 46, 2),   -- I Crave Violence (repeat)
        (299, 49, 2),   -- Ready Ore Not
        (304, 46, 2),   -- I Crave Violence (repeat)
        (312, 50, 2),   -- Ore-rigato Mu Enrage
        (312, 45, 2),   -- Live Painting (repeat)
        (324, 48, 2),   -- Player Bound (repeat)
        (324, 47, 2),   -- Water III (repeat)
        (329, 46, 2),   -- I Crave Violence (repeat)
        (333, 47, 2),   -- Water III (repeat)
        (342, 47, 2),   -- Water III (repeat)
        (344, 46, 2),   -- I Crave Violence (repeat)
        (352, 47, 2),   -- Water III (repeat)
        (358, 46, 2),   -- I Crave Violence (repeat)
        (361, 47, 2),   -- Water III (repeat)
        (370, 47, 2),   -- Water III (repeat)
        (383, 49, 2),   -- Ready Ore Not (repeat)
        (396, 50, 2),   -- Ore-rigato Mu Enrage (repeat)
        (401, 51, 2),   -- Single Style Cast
        (403, 52, 2),   -- Single Style Hit
        (407, 26, 2),   -- Color Riot (already assigned earlier)
        (415, 25, 2),   -- Mousse Mural (already assigned earlier)
        (429, 53, 2),    -- Sugarscape Rivers
        (444, 29, 2),    -- Double Style Cast
        (454, 54, 2),    -- Double Style Hit
        (454, 55, 2),    -- Taste of Fire / Thunder
        (455, 56, 2),    -- Layer Thunderstorm
        (466, 57, 2),    -- Taste of Thunder Baited
        (471, 58, 2),    -- Highlightning
        (472, 59, 2),    -- Lightning Bolts Start
        (481, 60, 2),    -- Highlightning + Lightning Storm
        (492, 60, 2),    -- Highlightning + Lightning Storm
        (502, 60, 2),    -- Highlightning + Lightning Storm
        (513, 60, 2),    -- Highlightning + Lightning Storm
        (514, 61, 2),    -- Pudding Party
        (531, 62, 2),    -- Layer Volcano
        (543, 63, 2),    -- Mousse Drip Cast
        (553, 64, 2),    -- Mousse Drip Hit
        (554, 65, 2),    -- Moussacre
        (563, 57, 2),    -- Taste of Thunder Baited
        (567, 66, 2),    -- Mousse Towers
        (568, 31, 2),    -- Wingmark Cast
        (583, 33, 2),    -- Wingmark Jump
        (589, 57, 2),    -- Taste of Thunder Baited
        (594, 66, 2),    -- Mousse Towers
        (594, 25, 2),    -- Mousse Mural
        (604, 34, 2),    -- Sticky Mousse Spread
        (616, 35, 2),    -- Sticky Mousse Stacks
        (616, 26, 2),    -- Color Riot
        (630, 31, 2),    -- Wingmark Cast
        (637, 32, 2),    -- Color Clash Cast
        (656, 33, 2),    -- Wingmark Jump
        (661, 29, 2),    -- Double Style Cast
        (661, 36, 2),    -- Double Style + Color Clash Hit
        (669, 67, 2),    -- Artistic Anarchy Cast
        (684, 67, 2);    -- Artistic Anarchy (Enrage)