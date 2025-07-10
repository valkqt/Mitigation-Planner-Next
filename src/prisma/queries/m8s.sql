INSERT INTO "Mechanic" (name, sources, targets, "mechanicType", "damageType", description) VALUES 
('Extraplanar Pursuit', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Wind/Stonefang', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Eminent / Revolutionary Reign', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Line AoE', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Circle/Cone AoE + Wolves Reign', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Millenial Decay', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Aero III', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Breath of Decay', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Gust', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Prowling Gale + Winds of Decay', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Tracking Tremors', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Great Divide', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Terrestrial Titans', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Titanic Pursuit', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Towerfall + Fanged Crossing', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Tactical Pack', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Howling Havoc + Adds', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Pack Predation', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Wind/Sand Surge', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Ravenous Sabre', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Terrestrial Rage', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Fanged Charge', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Heavensearth + Suspended Stone', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Shadowchase', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Roaring Wind', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Weal of Stone', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Beckon Moonlight', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Moonbeam''s Bite', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Howling Blade', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),

-- phase 2

('Custscene', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Quake III', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Ultraviolet Ray + Gleaming Beam', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Twinbite', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Hero''s Blow', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Mooncleaver', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Elemental Purge (Cast)', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Elemental Purge (Hit)', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Prowling Gale (Cast)', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Prowling Gale (Hit)', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Rise of the Howling Wind (Start)', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Twofold Tempest', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Platform Returns', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Bare Fangs', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Champion''s Circuit', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Rise of the Howling Wind (Ends)', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),

('Rise of the Hunter''s Blade (Start)', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Lone Wolf''s Lament', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Rise of the Hunter''s Blade (Ends)', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),

('Howling Eight', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', ''),
('Starcleaver', '{"BOSS"}', '{"RAID"}', 'DAMAGE', 'MAGICAL', '');

INSERT INTO "Node" (timestamp, "castTime", "mechanicId", "encounterId") VALUES 
(10, 4, 112, 4), -- Extraplanar Pursuit  
(23, 6, 113, 4), -- Wind/Stonefang  
(34, 7, 114, 4), -- Eminent / Revolutionary Reign  
(44, 0, 115, 4), -- Line AoE  
(47, 0, 116, 4), -- Circle/Cone AoE + Wolves Reign  
(49, 4, 112, 4), -- Extraplanar Pursuit  
(61, 5, 117, 4), -- Millenial Decay  
(72, 5, 118, 4), -- Aero III  
(79, 0, 119, 4), -- Breath of Decay *Starts*  
(79, 0, 120, 4), -- Gust  
(84, 0, 120, 4), -- Gust  
(87, 0, 119, 4), -- Breath of Decay *Ends*  
(88, 5, 118, 4), -- Aero III  
(95, 0, 121, 4), -- Prowling Gale + Winds of Decay  
(96, 5, 122, 4), -- Tracking Tremors  
(111, 4, 112, 4), -- Extraplanar Pursuit  
(119, 5, 123, 4), -- Great Divide  
(135, 4, 124, 4), -- Terrestrial Titans  
(142, 4, 125, 4), -- Titanic Pursuit  
(155, 0, 126, 4), -- Towerfall + Fanged Crossing  
(154, 7, 114, 4), -- Eminent / Revolutionary Reign  
(164, 0, 115, 4), -- Line AoE  
(167, 0, 116, 4), -- Circle/Cone AoE + Wolves Reign  
(176, 3, 127, 4), -- Tactical Pack  
(183, 5, 128, 4), -- Howling Havoc + Adds  
(199, 0, 129, 4), -- Pack Predation  
(202, 0, 130, 4), -- Wind/Sand Surge #1  
(206, 0, 130, 4), -- Wind/Sand Surge #2  
(213, 0, 129, 4), -- Pack Predation  
(215, 0, 130, 4), -- Wind/Sand Surge #3  
(220, 0, 130, 4), -- Wind/Sand Surge #4  
(227, 0, 129, 4), -- Pack Predation  
(229, 0, 130, 4), -- Wind/Sand Surge #5  
(234, 0, 130, 4), -- Wind/Sand Surge #6  
(256, 4, 131, 4), -- Ravenous Sabre  
(278, 3, 132, 4), -- Terrestrial Rage  
(288, 0, 133, 4), -- Fanged Charge #1  
(289, 0, 134, 4), -- Heavensearth + Suspended Stone  
(290, 0, 133, 4), -- Fanged Charge #2  
(296, 0, 134, 4), -- Heavensearth + Suspended Stone  
(296, 0, 135, 4), -- Shadowchase  
(301, 0, 136, 4), -- Roaring Wind  
(300, 7, 114, 4), -- Eminent / Revolutionary Reign  
(309, 0, 115, 4), -- Line AoE  
(313, 0, 116, 4), -- Circle/Cone AoE + Wolves Reign  
(316, 0, 137, 4), -- Weal of Stone  
(321, 5, 123, 4), -- Great Divide  
(338, 3, 138, 4), -- Beckon Moonlight  
(345, 3, 132, 4), -- Terrestrial Rage  
(353, 0, 134, 4), -- Heavensearth + Suspended Stone  
(346, 9, 139, 4), -- Moonbeam's Bite #1  
(351, 0, 139, 4), -- Moonbeam's Bite #2  
(356, 0, 139, 4), -- Moonbeam's Bite #3  
(361, 0, 139, 4), -- Moonbeam's Bite #4  
(361, 0, 134, 4), -- Heavensearth + Suspended Stone  
(366, 0, 137, 4), -- Weal of Stone  
(365, 6, 113, 4), -- Wind/Stonefang  
(375, 5, 122, 4), -- Tracking Tremors  
(390, 4, 112, 4), -- Extraplanar Pursuit  
(404, 4, 140, 4), -- Howling Blade  

-- Phase 2  
(404, 0, 141, 4), -- Cutscene  
(457, 5, 142, 4), -- Quake III  
(468, 6, 143, 4), -- Ultraviolet Ray + Gleaming Beam  
(478, 7, 144, 4), -- Twinbite  
(491, 7, 145, 4), -- Hero's Blow  
(502, 6, 143, 4), -- Ultraviolet Ray + Gleaming Beam  
(514, 5, 142, 4), -- Quake III  
(525, 5, 146, 4), -- Mooncleaver  
(532, 5, 147, 4), -- Elemental Purge Cast  
(542, 0, 148, 4), -- Elemental Purge Hit  
(545, 3, 149, 4), -- Prowling Gale Cast  
(556, 0, 150, 4), -- Prowling Gale Hit  
(551, 7, 151, 4), -- Rise of the Howling Wind Starts  
(560, 7, 152, 4), -- Twofold Tempest #1  
(574, 0, 152, 4), -- Twofold Tempest #2  
(581, 0, 152, 4), -- Twofold Tempest #3  
(588, 0, 152, 4), -- Twofold Tempest #4  
(593, 0, 153, 4), -- Platform Returns  
(596, 4, 154, 4), -- Bare Fangs Cast  
(605, 8, 155, 4), -- Champion's Circuit  
(612, 0, 154, 4), -- Bare Fangs #1  
(616, 0, 154, 4), -- Bare Fangs #2  
(621, 0, 154, 4), -- Bare Fangs #3  
(625, 0, 154, 4), -- Bare Fangs #4  
(630, 0, 154, 4), -- Bare Fangs #5  
(633, 0, 156, 4), -- Rise of the Howling Wind Ends  
(635, 5, 142, 4), -- Quake III  
(650, 6, 143, 4), -- Ultraviolet Ray + Gleaming Beam  
(660, 7, 144, 4), -- Twinbite  
(675, 7, 157, 4), -- Rise of the Hunter's Blade Starts  
(685, 3, 158, 4), -- Lone Wolf's Lament  
(695, 3, 149, 4), -- Prowling Gale Cast  
(706, 0, 150, 4), -- Prowling Gale Hit  
(709, 7, 145, 4), -- Hero's Blow  
(719, 0, 159, 4), -- Rise of the Hunter's Blade Ends  
(724, 6, 143, 4), -- Ultraviolet Ray + Gleaming Beam  
(737, 8, 160, 4), -- Howling Eight #1  
(752, 4, 146, 4), -- Mooncleaver #1  
(759, 5, 160, 4), -- Howling Eight #2  
(772, 4, 146, 4), -- Mooncleaver #2  
(779, 5, 160, 4), -- Howling Eight #3  
(792, 4, 146, 4), -- Mooncleaver #3  
(799, 5, 160, 4), -- Howling Eight #4  
(812, 4, 146, 4), -- Mooncleaver #4  
(819, 5, 160, 4), -- Howling Eight #5  
(832, 10, 161, 4); -- Starcleaver  
