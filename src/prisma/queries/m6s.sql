INSERT INTO "Mechanic" (name, sources, targets, "mechanicType", "damageType", description) VALUES

    ('Mousse Mural', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Color Riot', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Wingmark Cast', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Color Clash Cast', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Wingmark Jump', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Double Style Cast', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Double Style + Color Clash Hit', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Sticky Mousse Spread', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Sticky Mousse Stacks', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Sugarscape Desert', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Layer Cactus', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Spray Pain Starts', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Spray Pain Ends', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Brûlée + Crowd Brûlée', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Layer Quicksand', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Spray Pain + Brûlée', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Pudding Graf Cast', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Pudding Graf', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Bomb Jump', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Soul Sugar', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Live Painting', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('I Crave Violence', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Water III', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Player Bound', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Ready Ore Not', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Ore-rigato Mu Enrage', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Single Style Cast', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Single Style Hit', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Sugarscape Rivers', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Double Style Cast', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Double Style Hit', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Taste of Fire / Thunder', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Layer Thunderstorm', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Taste of Thunder Baited', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Highlightning', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Lightning Bolts Start', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Highlightning + Lightning Storm', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Pudding Party', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Layer Volcano', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Mousse Drip Cast', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Mousse Drip Hit', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Moussacre', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Mousse Towers', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
    ('Artistic Anarchy', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', '');

INSERT INTO "Node" (timestamp, "castTime", "mechanicId", "encounterId") VALUES 
(6, 5, 25, 2),   -- Mousse Mural
(17, 5, 26, 2),  -- Color Riot
(31, 4, 27, 2),  -- Wingmark Cast
(38, 3, 37, 2),  -- Color Clash Cast
(57, 0, 29, 2),  -- Wingmark Jump
(46, 12, 30, 2),  -- Double Style Cast
(62, 0, 31, 2),  -- Double Style + Color Clash Hit
(65, 5, 32, 2),  -- Sticky Mousse Spread
(76, 0, 33, 2),  -- Sticky Mousse Stacks
(77, 5, 26, 2),  -- Color Riot (repeat)
(90, 1, 34, 2),  -- Sugarscape Desert
(97, 1, 35, 2),  -- Layer Cactus
(115, 7, 36, 2), -- Spray Pain Starts
(137, 0, 37, 2), -- Spray Pain Ends
(142, 0, 38, 2), -- Brûlée + Crowd Brûlée
(144, 5, 32, 2), -- Sticky Mousse Spread (repeat)
(153, 0, 33, 2), -- Sticky Mousse Stacks (repeat)
(157, 1, 39, 2), -- Layer Quicksand
(165, 8, 40, 2), -- Spray Pain + Brûlée
(174, 3, 41, 2), -- Pudding Graf Cast
(184, 8, 30, 2), -- Double Style Cast (repeat)
(194, 0, 42, 2), -- Pudding Graf
(210, 0, 43, 2), -- Bomb Jump
(214, 5, 25, 2), -- Mousse Mural (repeat)
(223, 5, 26, 2), -- Color Riot (repeat)

(215, 3, 44, 2),   -- Soul Sugar
(221, 4, 45, 2),   -- Live Painting
(239, 2, 46, 2),   -- I Crave Violence
(250, 4, 45, 2),   -- Live Painting (repeat)
(262, 3, 47, 2),   -- Water III
(272, 3, 47, 2),   -- Water III (repeat)
(272, 4, 45, 2),   -- Live Painting (repeat)
(285, 0, 48, 2),   -- Player Bound
(290, 3, 46, 2),   -- I Crave Violence (repeat)
(299, 7, 49, 2),   -- Ready Ore Not
(304, 3, 46, 2),   -- I Crave Violence (repeat)
(312, 0, 50, 2),   -- Ore-rigato Mu Enrage
(312, 4, 45, 2),   -- Live Painting (repeat)
(324, 0, 48, 2),   -- Player Bound (repeat)
(324, 3, 47, 2),   -- Water III (repeat)
(329, 3, 46, 2),   -- I Crave Violence (repeat)
(333, 3, 47, 2),   -- Water III (repeat)
(342, 3, 47, 2),   -- Water III (repeat)
(344, 3, 46, 2),   -- I Crave Violence (repeat)
(352, 3, 47, 2),   -- Water III (repeat)
(358, 3, 46, 2),   -- I Crave Violence (repeat)
(361, 3, 47, 2),   -- Water III (repeat)
(370, 3, 47, 2),   -- Water III (repeat)
(383, 7, 49, 2),   -- Ready Ore Not (repeat)
(396, 0, 50, 2),   -- Ore-rigato Mu Enrage (repeat)
(401, 6, 51, 2),   -- Single Style Cast
(403, 0, 52, 2),   -- Single Style Hit
(407, 5, 26, 2),   -- Color Riot (already assigned earlier)
(415, 5, 25, 2),   -- Mousse Mural (already assigned earlier)

(429, 1, 53, 2),   -- Sugarscape Rivers
(444, 6, 30, 2),   -- Double Style (Cast)
(454, 0, 55, 2),   -- Double Style (Hit)
(454, 0, 56, 2),   -- Taste of Thunder / Fire
(455, 1, 57, 2),   -- Layer Thunderstorm
(466, 3, 58, 2),   -- Taste of Thunder Baited
(471, 0, 59, 2),   -- Highlighting
(472, 0, 60, 2),   -- Lightning Bolts Start
(481, 0, 61, 2),   -- Highlighting + Lightning Storm
(492, 0, 61, 2),   -- Highlighting + Lightning Storm
(502, 0, 61, 2),   -- Highlighting + Lightning Storm
(513, 0, 61, 2),   -- Highlighting + Lightning Storm
(514, 3, 62, 2),   -- Pudding Party
(531, 1, 63, 2),   -- Layer Volcano
(543, 5, 64, 2),   -- Mousse Drip Cast
(553, 0, 65, 2),   -- Mousse Drip Hit
(554, 4, 66, 2),   -- Moussacre
(563, 3, 58, 2),   -- Taste of Thunder Baited
(567, 0, 67, 2),   -- Mousse Towers
(568, 4, 27, 2),   -- Wingmark Cast
(583, 0, 29, 2),   -- Wingmark Jump
(589, 3, 58, 2),   -- Taste of Thunder Baited
(594, 0, 67, 2),   -- Mousse Towers
(594, 5, 25, 2),   -- Mousse Mural
(604, 5, 32, 2),   -- Sticky Mousse Spread
(616, 0, 33, 2),   -- Sticky Mousse Stack
(616, 5, 26, 2),   -- Color Riot
(630, 4, 27, 2),   -- Wingmark Cast
(637, 3, 28, 2),   -- Color Clash Cast
(644, 0, 30, 2),   -- Wingmark Jump
(656, 12, 29, 2),   -- Double Style Cast
(661, 0, 31, 2),   -- Double Style + Color Clash Hit
(669, 15, 68, 2);  -- Artistic Anarchy (Enrage)