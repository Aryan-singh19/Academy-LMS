/**
 * Branch catalogue + semester plan (RGPV, AICTE flexible curricula).
 * Each semester lists { id, code } pairs; `id` is a course id (existing or generated),
 * `code` is how that branch prints the paper. Subjects shared between branches reuse one id,
 * so a student's progress on, say, Data Structures counts for CSE and IT alike.
 * Elective slots list the most commonly offered option(s).
 */
const BRANCHES = {
    CSE: { degree: 'B.Tech', name: 'Computer Science & Engineering', short: 'CSE', icon: '💻' },
    IT: { degree: 'B.Tech', name: 'Information Technology (CSIT)', short: 'IT', icon: '🌐' },
    EC: { degree: 'B.Tech', name: 'Electronics & Communication', short: 'ECE', icon: '📡' },
    EX: { degree: 'B.Tech', name: 'Electrical & Electronics', short: 'EX', icon: '⚡' },
    ME: { degree: 'B.Tech', name: 'Mechanical Engineering', short: 'ME', icon: '⚙️' },
    CE: { degree: 'B.Tech', name: 'Civil Engineering', short: 'CE', icon: '🏗️' },
    AU: { degree: 'B.Tech', name: 'Automobile Engineering', short: 'AU', icon: '🚗', note: 'RGPV does not publish the current AU semester 6-8 scheme online; these are the commonly offered papers. Confirm codes with your department.' },
    'MT-CSE': { degree: 'M.Tech', name: 'Computer Science & Engineering', short: 'M.Tech CSE', icon: '🧠', note: 'M.Tech semesters 3-4 are electives and dissertation; theory papers are in semesters 1-2. Paper codes vary slightly between RGPV institutes.' },
    'MT-VLSI': { degree: 'M.Tech', name: 'VLSI Design', short: 'M.Tech VLSI', icon: '🔬', note: 'M.Tech semesters 3-4 are electives and dissertation; paper codes vary slightly between institutes.' },
    'MT-TH': { degree: 'M.Tech', name: 'Thermal Engineering', short: 'M.Tech Thermal', icon: '🔥', note: 'M.Tech semesters 3-4 are electives and dissertation; paper codes vary slightly between institutes.' },
    'MT-ST': { degree: 'M.Tech', name: 'Structural Engineering', short: 'M.Tech Structural', icon: '🏛️', note: 'M.Tech semesters 3-4 are electives and dissertation; paper codes vary slightly between institutes.' },
    'MT-PS': { degree: 'M.Tech', name: 'Power Systems', short: 'M.Tech Power', icon: '🔌', note: 'M.Tech semesters 3-4 are electives and dissertation; paper codes vary slightly between institutes.' }
};

const e = (id, code) => ({ id, code });

const FIRST_YEAR = {
    1: [e('bt101', 'BT-101'), e('bt102', 'BT-102'), e('bt103', 'BT-103'), e('bt104', 'BT-104'), e('bt105', 'BT-105')],
    2: [e('bt201', 'BT-201'), e('bt202', 'BT-202'), e('bt203', 'BT-203'), e('bt204', 'BT-204'), e('bt205', 'BT-205')]
};

const PLAN = {
    CSE: {
        ...FIRST_YEAR,
        3: [e('es301', 'ES-301'), e('cs302', 'CS-302'), e('cs303', 'CS-303'), e('cs304', 'CS-304'), e('cs305', 'CS-305')],
        4: [e('bt301', 'BT-401'), e('cs402', 'CS-402'), e('cs403', 'CS-403'), e('cs404', 'CS-404'), e('cs405', 'CS-405')],
        5: [e('cs501', 'CS-501'), e('cs502', 'CS-502'), e('cs503', 'CS-503'), e('cs503-cs', 'CS-503-CS'), e('cs504', 'CS-504')],
        6: [e('cs601', 'CS-601'), e('cs602', 'CS-602'), e('cs603', 'CS-603'), e('cs603-cg', 'CS-603-CG'), e('cs604', 'CS-604')],
        7: [e('cs701', 'CS-701'), e('cs702-bd', 'CS-702-BD'), e('cs702-wmc', 'CS-702-WMC'), e('cs703-cis', 'CS-703-CIS'), e('cs703-dm', 'CS-703-DM')],
        8: [e('cs801', 'CS-801'), e('cs802-bc', 'CS-802(A)'), e('cs802-cc', 'CS-802(B)'), e('cs803-ip', 'CS-803(A)')]
    },
    IT: {
        ...FIRST_YEAR,
        3: [e('es301', 'ES-301'), e('cs302', 'CSIT-302'), e('cs303', 'CSIT-303'), e('cs304', 'CSIT-304'), e('cs305', 'CSIT-305')],
        4: [e('bt301', 'BT-401'), e('it402', 'CSIT-402'), e('cs402', 'CSIT-403'), e('cs404', 'CSIT-404'), e('cs502', 'CSIT-405')],
        5: [e('cs602', 'CSIT-501'), e('cs405', 'CSIT-502'), e('cs501', 'CSIT-503(A)'), e('cs503-cs', 'CSIT-504(A)'), e('it504-ai', 'CSIT-504(B)'), e('cs504', 'CSIT-504(C)')],
        6: [e('cs403', 'CSIT-601'), e('cs601', 'CSIT-602'), e('cs702-wmc', 'CSIT-603(A)'), e('cs603-cg', 'CSIT-603(B)'), e('cs703-cis', 'CSIT-604(A)')],
        7: [e('cs801', 'CSIT-701'), e('cs603', 'CSIT-702(B)'), e('it702-nlp', 'CSIT-702(D)'), e('cs802-cc', 'CSIT-703(C)')],
        8: [e('it801', 'CSIT-801'), e('it802-dwm', 'CSIT-802(A)'), e('cs802-bc', 'CSIT-802(D)')]
    },
    EC: {
        ...FIRST_YEAR,
        3: [e('bt301', 'BT-301'), e('ec302', 'EC-302'), e('ec303', 'EC-303'), e('ec304', 'EC-304'), e('ec305', 'EC-305')],
        4: [e('es301', 'ES-401'), e('ec402', 'EC-402'), e('ec403', 'EC-403'), e('ec404', 'EC-404'), e('ec405', 'EC-405')],
        5: [e('ec501', 'EC-501'), e('ec502', 'EC-502'), e('ec503-mc', 'EC-503(B)'), e('ec504-emt', 'EC-504(A)')],
        6: [e('ec601', 'EC-601'), e('ec602', 'EC-602'), e('ec603-sat', 'EC-603(C)'), e('ec604-mes', 'EC-604(A)')],
        7: [e('ec701', 'EC-701'), e('ec702-mw', 'EC-702(A)'), e('ec702-itc', 'EC-702(B)'), e('cs801', 'EC-703(B)')],
        8: [e('ec801', 'EC-801'), e('ec802-wc', 'EC-802(B)'), e('cs803-ip', 'EC-803(B)')]
    },
    EX: {
        ...FIRST_YEAR,
        3: [e('es301', 'ES-301'), e('ec402', 'EX-302'), e('ex303', 'EX-303'), e('ec305', 'EX-304'), e('ec405', 'EX-305')],
        4: [e('bt301', 'BT-401'), e('ex402', 'EX-402'), e('ec303', 'EX-403'), e('ex404', 'EX-404'), e('ec404', 'EX-405')],
        5: [e('ex501', 'EX-501'), e('ex502', 'EX-502'), e('ex503c', 'EX-503(C)'), e('ex504a', 'EX-504(A)')],
        6: [e('ex601', 'EX-601'), e('ec501', 'EX-602'), e('ex603a', 'EX-603(A)'), e('cs801', 'EX-604(B)')],
        7: [e('ex701', 'EX-701'), e('ex702b', 'EX-702(B)'), e('ex702c', 'EX-702(C)'), e('au703', 'EX-703(A)')],
        8: [e('ex801', 'EX-801'), e('ex802b', 'EX-802(B)'), e('it504-ai', 'EX-802(D)')]
    },
    CE: {
        ...FIRST_YEAR,
        3: [e('bt301', 'BT-301'), e('ce302', 'CE-302'), e('ce303', 'CE-303'), e('ce304', 'CE-304'), e('me304', 'CE-305')],
        4: [e('es301', 'ES-401'), e('ce402', 'CE-402'), e('ce403', 'CE-403'), e('ce404', 'CE-404'), e('ce405', 'CE-405')],
        5: [e('me404', 'CE-501'), e('ce502', 'CE-502'), e('ce503a', 'CE-503(A)'), e('ce504b', 'CE-504(B)')],
        6: [e('ce601', 'CE-601'), e('ce602', 'CE-602'), e('ce603a', 'CE-603(A)'), e('me703-or', 'CE-604(D)')],
        7: [e('ce701', 'CE-701'), e('ce702a', 'CE-702(A)'), e('ce702b', 'CE-702(B)'), e('cs801', 'CE-703(A)')],
        8: [e('ce801', 'CE-801'), e('ce802b', 'CE-802(B)'), e('ce802d', 'CE-802(D)'), e('cs503', 'CE-803(B)')]
    },
    ME: {
        ...FIRST_YEAR,
        3: [e('bt301', 'BT-301'), e('me302', 'ME-302'), e('me303', 'ME-303'), e('me304', 'ME-304'), e('me305', 'ME-305')],
        4: [e('es301', 'ES-401'), e('me402', 'ME-402'), e('me403', 'ME-403'), e('me404', 'ME-404'), e('me405', 'ME-405')],
        5: [e('me501', 'ME-501'), e('me502', 'ME-502'), e('me503-mt', 'ME-503(A)'), e('au503-aaf', 'ME-503(C)'), e('me504-fem', 'ME-504(C)')],
        6: [e('me601', 'ME-601'), e('me602', 'ME-602'), e('me603-tm', 'ME-603(A)'), e('me604-rob', 'ME-604(A)')],
        7: [e('me701', 'ME-701'), e('me702-ppe', 'ME-702(C)'), e('cs801', 'ME-702(B)'), e('me703-or', 'ME-703(A)')],
        8: [e('me801', 'ME-801'), e('me802-ae', 'ME-802(A)'), e('me803-eca', 'ME-803(B)')]
    },
    AU: {
        ...FIRST_YEAR,
        3: [e('bt301', 'BT-301'), e('me302', 'AU-302'), e('me303', 'AU-303'), e('me304', 'AU-304'), e('me305', 'AU-305')],
        4: [e('es301', 'ES-401'), e('me402', 'AU-402'), e('me403', 'AU-403'), e('me404', 'AU-404'), e('me405', 'AU-405')],
        5: [e('au501', 'AU-501'), e('au502', 'AU-502'), e('au503-ats', 'AU-503(A)'), e('au503-aaf', 'AU-503(C)'), e('me503-mt', 'AU-504(C)')],
        6: [e('au601', 'AU-601'), e('me602', 'AU-602'), e('au603', 'AU-603'), e('me604-rob', 'AU-604')],
        7: [e('me502', 'AU-701'), e('me701', 'AU-702'), e('au702', 'AU-703'), e('au703', 'AU-704')],
        8: [e('au801', 'AU-801'), e('au802', 'AU-802'), e('me801', 'AU-803')]
    },
    'MT-CSE': {
        1: [e('mcse101', 'MCSE-101'), e('mcse102', 'MCSE-102'), e('mcse103', 'MCSE-103'), e('mcse104', 'MCSE-104')],
        2: [e('mcse201', 'MCSE-201'), e('mcse202', 'MCSE-202'), e('mcse203', 'MCSE-203'), e('mt-rm', 'MCSE-204')]
    },
    'MT-VLSI': {
        1: [e('mvl101', 'MVL-101'), e('mvl102', 'MVL-102'), e('mvl103', 'MVL-103'), e('mvl104', 'MVL-104')],
        2: [e('mvl201', 'MVL-201'), e('mvl202', 'MVL-202'), e('mvl203', 'MVL-203'), e('mt-rm', 'MVL-204')]
    },
    'MT-TH': {
        1: [e('mth101', 'MTH-101'), e('mth102', 'MTH-102'), e('mth103', 'MTH-103'), e('mth104', 'MTH-104')],
        2: [e('mth201', 'MTH-201'), e('mth202', 'MTH-202'), e('mth203', 'MTH-203'), e('mt-rm', 'MTH-204')]
    },
    'MT-ST': {
        1: [e('mst101', 'MST-101'), e('mst102', 'MST-102'), e('mst103', 'MST-103'), e('mst104', 'MST-104')],
        2: [e('mst201', 'MST-201'), e('me504-fem', 'MST-202'), e('ce802d', 'MST-203'), e('mt-rm', 'MST-204')]
    },
    'MT-PS': {
        1: [e('mps101', 'MPS-101'), e('mps102', 'MPS-102'), e('mps103', 'MPS-103'), e('mps104', 'MPS-104')],
        2: [e('mps201', 'MPS-201'), e('mps202', 'MPS-202'), e('ex702b', 'MPS-203'), e('mt-rm', 'MPS-204')]
    }
};

module.exports = { BRANCHES, PLAN };
