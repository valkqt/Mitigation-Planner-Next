INSERT INTO "Mechanic" (name, sources, targets, "mechanicType", "damageType", description) VALUES 

-- phase 1
('Brutal Impact x6', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Stoneringer', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Smash Here/There In/Out', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Smash Here/There Buster', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Spore Sac Cast', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Spore Sac Hit', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Sinister Seeds Cast', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Pollen + Blooming Abomination', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Sinister Seeds Baits', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Sinister Seeds Spreads', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Tendrils of Terror + Impact', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Roots of Evil', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Add AoEs', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Quarry Swamp', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Explosion', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Pulp Smash Stack', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Pulp Smash Spread', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Neo Bombarian Special', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),

-- phase 2
('Brutish Swing', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Glower Power', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Revenge of the Vines', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Thorny Deathmatch', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Abominable Blink', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Sporesplosion Cast', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Sporesplosion Act', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Demolition Deathmatch', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Strange Seeds Cast', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Strange Seeds #1', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Tendrils of Terror', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Strange Seeds #2', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Strange Seeds #3', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Strange Seeds #4', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Killer Seeds', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Powerslam', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),

--phase 3
('Brutal Impact x7', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Stoneringer: 2 Stoneringers', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Lashing Lariat', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Slaminator', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Brutal Impact x8', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Debris Deathmatch', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Tendrils of Terror + Roots of Evil', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Tendrils of Terror + Brutish Swing', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Special Bombarian Special', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', '');

INSERT INTO "Node" (timestamp, "castTime", "mechanicId", "encounterId") VALUES 

-- phase 1

(5, 5, 69, 3),    -- Brutal Impact x6  
(21, 2, 70, 3),   -- Stoneringer  
(29, 4, 71, 3),   -- Smash Here/There In/Out  
(34, 0, 72, 3),   -- Smash Here/There Buster  
(40, 3, 73, 3),   -- Spore Sac Cast  
(48, 0, 74, 3),   -- Spore Sac Hit  
(49, 4, 75, 3),   -- Sinister Seeds Cast  
(54, 0, 76, 3),   -- Pollen + Blooming Abomination  
(57, 0, 77, 3),   -- Sinister Seeds Baits  
(61, 0, 78, 3),   -- Sinister Seeds Spreads  
(65, 3, 79, 3),   -- Tendrils of Terror + Impact  
(71, 0, 80, 3),   -- Roots of Evil  
(71, 7, 81, 3),   -- Add AoEs  
(89, 4, 82, 3),   -- Quarry Swamp  
(105, 0, 83, 3),  -- Explosion  
(108, 0, 83, 3),  -- Explosion  
(109, 2, 70, 3),  -- Stoneringer  
(110, 0, 83, 3),  -- Explosion  
(114, 4, 71, 3),  -- Smash Here/There In/Out  
(119, 0, 72, 3),  -- Smash Here/There Buster  
(122, 5, 84, 3),  -- Pulp Smash Stack  
(129, 0, 85, 3),  -- Pulp Smash Spread  
(140, 8, 86, 3),  -- Neo Bombarian Special  

-- phase 2  
(168, 2, 70, 3),   -- Stoneringer  
(176, 8, 87, 3),   -- Brutish Swing  
(185, 4, 88, 3),   -- Glower Power  
(190, 5, 89, 3),   -- Revenge of the Vines  
(203, 3, 90, 3),   -- Thorny Deathmatch  
(208, 2, 70, 3),   -- Stoneringer  
(216, 6, 91, 3),   -- Abominable Blink  
(228, 4, 92, 3),   -- Sporesplosion Cast  
(238, 0, 93, 3),   -- Sporesplosion Act  
(239, 8, 87, 3),   -- Brutish Swing  
(248, 4, 88, 3),   -- Glower Power  
(253, 5, 89, 3),   -- Revenge of the Vines  
(264, 3, 94, 3),   -- Demolition Deathmatch  
(275, 5, 91, 3),   -- Abominable Blink  
(284, 4, 95, 3),   -- Strange Seeds Cast  
(294, 2, 70, 3),   -- Stoneringer  
(295, 0, 96, 3),   -- Strange Seeds #1  
(296, 3, 97, 3),   -- Tendrils of Terror  
(300, 0, 98, 3),   -- Strange Seeds #2  
(301, 3, 97, 3),   -- Tendrils of Terror  
(305, 0, 99, 3),   -- Strange Seeds #3  
(306, 3, 97, 3),   -- Tendrils of Terror  
(310, 0, 100, 3),  -- Strange Seeds #4  
(311, 3, 97, 3),   -- Tendrils of Terror  
(320, 0, 101, 3),  -- Killer Seeds  
(321, 3, 97, 3),   -- Tendrils of Terror  
(322, 8, 87, 3),   -- Brutish Swing  
(331, 4, 88, 3),   -- Glower Power  
(335, 5, 89, 3),   -- Revenge of the Vines  
(347, 6, 102, 3),  -- Powerslam  

-- phase 3  
(377, 5, 103, 3), -- Brutal Impact x7  
(394, 2, 104, 3), -- Stoneringer 2: Stoneringers  
(402, 3, 87, 3),  -- Brutish Swing  
(412, 4, 105, 3), -- Lashing Lariat  
(418, 7, 87, 3),  -- Brutish Swing  
(426, 2, 88, 3),  -- Glower Power  
(429, 5, 106, 3), -- Slaminator  
(438, 5, 107, 3), -- Brutal Impact x8  
(453, 2, 70, 3),  -- Stoneringer  
(461, 4, 71, 3),  -- Smash Here/There In/Out  
(466, 0, 72, 3),  -- Smash Here/There Buster  
(475, 3, 108, 3), -- Debris Deathmatch  
(480, 3, 73, 3),  -- Spore Sac Cast  
(488, 0, 74, 3),  -- Spore Sac Hit  
(494, 0, 76, 3),  -- Pollen + Blooming Abomination  
(497, 0, 101, 3), -- Killer Seeds  
(499, 3, 97, 3),  -- Tendrils of Terror  
(510, 4, 82, 3),  -- Quarry Swamp  
(521, 4, 75, 3),  -- Sinister Seeds Cast  
(529, 0, 77, 3),  -- Sinister Seeds Baits  
(533, 0, 78, 3),  -- Sinister Seeds Spreads  
(537, 3, 109, 3), -- Tendrils of Terror + Roots of Evil  
(540, 5, 84, 3),  -- Pulp Smash Stack  
(545, 0, 85, 3),  -- Pulp Smash Spread  
(548, 5, 107, 3), -- Brutal Impact x8  
(568, 2, 104, 3), -- Stoneringer 2: Stoneringers  
(573, 4, 95, 3),  -- Strange Seeds Cast  
(578, 0, 96, 3),  -- Strange Seeds #1  
(586, 7, 110, 3), -- Tendrils of Terror + Brutish Swing  
(594, 4, 105, 3), -- Lashing Lariat  
(602, 0, 98, 3),  -- Strange Seeds #2  
(601, 6, 110, 3), -- Tendrils of Terror + Brutish Swing  
(609, 5, 106, 3), -- Slaminator  
(618, 2, 70, 3),  -- Stoneringer  
(626, 0, 71, 3),  -- Smash Here/There In/Out  
(631, 0, 72, 3),  -- Smash Here/There Buster  
(635, 5, 107, 3), -- Brutal Impact x8  
(658, 13, 111, 3); -- Special Bombarian Special  