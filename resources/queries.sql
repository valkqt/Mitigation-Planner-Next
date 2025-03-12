INSERT INTO "Encounter" (name, expansion, level, duration) VALUES ('Eden''s Gate: Refulgence', 'SHB', 80, 838);
INSERT INTO "Mechanic" (name, source, "castTime", targets, "mechanicType", "damageType", description)
     VALUES ('Absolute Zero', 'BOSS', 5, '{"RAID"}', 'DAMAGE', 'MAGICAL', 'Raidwide');

INSERT INTO "Node" (timestamp, duration, "mechanicId", "encounterId") VALUES (10, 13, 1, 1);

INSERT INTO "Job" (name, role) VALUES ('Sage', 'HEALER'), ('Astrologian', 'HEALER'), ('Scholar', 'HEALER'), ('White Mage', 'HEALER')

INSERT INTO "Ability" (name, duration, cooldown, level, target, type, jobId) VALUES 
('Kerachole', 15, 30, 50, 'RAID', 'MITIGATION', 1), 
('Holos', 20, 120, 76, 'RAID', 'MITIGATION', 1);

INSERT INTO "Preset" (name, "encounterId", flags, segments, "userId") 
VALUES ('e8s test 1', 1, '', '', 1), ('e8s test 2', 1, '', '', 1), ('e8s test 3', 1, '', '', 1);