// AP Chemistry — Units 1–4. Question format: [stem, correct, [distractors], explanation, figure?]
// Values use common AP approximations (e.g., molar masses to 0.1 g/mol, R = 0.0821 L·atm/(mol·K)).
window.AP_DATA = window.AP_DATA || {};
AP_DATA.chem = {
  id: "chem",
  name: "AP Chemistry",
  short: "Chem",
  blurb: "Atoms to equilibrium: structure, bonding, reactions, kinetics, thermodynamics, acids and bases, and electrochemistry.",
  exam: "Exam: 60 MCQ (90 min) + 7 FRQ (105 min), calculator allowed",
  units: []
};
AP_DATA.chem.units.push(
{ n: 1, name: "Atomic Structure and Properties", weight: "7–9%", topics: [
  ["1.1", "Moles and Molar Mass", [
    ["How many oxygen atoms are in 4.40 g of CO₂ (44.0 g/mol)?", "1.20 × 10²³", ["6.02 × 10²²", "1.20 × 10²⁴", "2.65 × 10²⁴"], "4.40 g ÷ 44.0 g/mol = 0.100 mol CO₂, which has 0.200 mol O atoms. 0.200 × 6.02 × 10²³ = 1.20 × 10²³."],
    ["Which 1.0 g sample contains the greatest total number of atoms?", "H₂", ["He", "CH₄", "Li"], "Moles of atoms: H₂ = (1.0/2.0) × 2 = 1.0; He = 0.25; CH₄ = (1.0/16) × 5 = 0.31; Li = 0.14."],
    ["A 0.200 mol sample of an ionic compound has a mass of 11.7 g. Which compound could it be?", "NaCl", ["KCl", "NaF", "LiCl"], "Molar mass = 11.7 ÷ 0.200 = 58.5 g/mol, which matches NaCl (58.5). KCl is 74.6, NaF 42.0, LiCl 42.4."],
    ["What is the mass of 3.01 × 10²³ molecules of O₂?", "16.0 g", ["8.00 g", "32.0 g", "64.0 g"], "3.01 × 10²³ molecules is 0.500 mol, and 0.500 mol × 32.0 g/mol = 16.0 g. Using 16.0 g/mol (one O atom) gives 8.00 g."]
  ]],
  ["1.2", "Mass Spectroscopy of Elements", [
    ["The mass spectrum of an element shows two peaks. Based on the data, what is the element's average atomic mass?", "About 10.8 amu", ["About 10.5 amu", "About 10.2 amu", "Exactly 11 amu"], "Weighted average: 0.20(10) + 0.80(11) = 2.0 + 8.8 = 10.8 amu. This matches boron.", { t: "bar", title: "Mass spectrum of an element", cats: ["10", "11"], x: { label: "Mass (amu)" }, y: { min: 0, max: 100, ticks: [0, 20, 40, 60, 80, 100], label: "Relative abundance (%)" }, series: [{ name: "Abundance", vals: [20, 80] }] }],
    ["An element has two isotopes: mass 63 (69.2%) and mass 65 (30.8%). Which element is it?", "Copper", ["Zinc", "Nickel", "Gallium"], "63(0.692) + 65(0.308) ≈ 63.6 amu, which matches copper (63.55)."],
    ["Boron (average atomic mass 10.81 amu) has two isotopes, ¹⁰B and ¹¹B. About what percent of boron atoms are ¹¹B?", "81%", ["19%", "50%", "91%"], "10x + 11(1 − x) = 10.81 gives x = 0.19 for ¹⁰B, so ¹¹B is 81%."],
    ["The mass spectrum of Cl₂ gas shows peaks at 70, 72, and 74 amu. What best explains the three peaks?", "Chlorine's two isotopes pair up in three ways", ["Chlorine has three stable isotopes", "Cl₂ breaks into three kinds of fragments", "Cl₂ gains zero, one, or two electrons"], "³⁵Cl–³⁵Cl = 70, ³⁵Cl–³⁷Cl = 72, and ³⁷Cl–³⁷Cl = 74."]
  ]],
  ["1.3", "Elemental Composition of Pure Substances", [
    ["What is the percent by mass of nitrogen in NH₄NO₃ (80.0 g/mol)?", "35.0%", ["17.5%", "60.0%", "46.7%"], "There are two N atoms: 28.0 ÷ 80.0 = 35.0%. Counting only one N gives 17.5%."],
    ["Burning 2.10 g of a hydrocarbon produces 6.60 g of CO₂ and 2.70 g of H₂O. What is its empirical formula?", "CH₂", ["CH", "CH₃", "C₂H₃"], "C: 6.60/44.0 = 0.150 mol. H: 2 × (2.70/18.0) = 0.300 mol. The ratio is 1 : 2."],
    ["A compound is 52.2% C, 13.0% H, and 34.8% O by mass. What is its empirical formula?", "C₂H₆O", ["CH₃O", "C₂H₅O", "C₃H₈O"], "Per 100 g: C 4.35 mol, H 12.9 mol, O 2.18 mol. Dividing by 2.18 gives 2 : 6 : 1."],
    ["In one compound, 1.00 g of carbon combines with 1.33 g of oxygen; the compound is CO. In a second compound, 1.00 g of carbon combines with 2.66 g of oxygen. What is the second compound?", "CO₂", ["C₂O", "C₂O₃", "CO₃"], "Twice as much oxygen per gram of carbon means twice as many O atoms per C atom (law of multiple proportions)."]
  ]],
  ["1.4", "Composition of Mixtures", [
    ["A 5.00 g mixture of NaCl and sand is dissolved, and all the chloride is precipitated as 7.17 g of AgCl (143.3 g/mol). What is the percent NaCl in the mixture?", "58.5%", ["41.5%", "71.7%", "35.5%"], "7.17 ÷ 143.3 = 0.0500 mol Cl⁻ = 0.0500 mol NaCl = 2.92 g, and 2.92 ÷ 5.00 = 58.5%."],
    ["Heating a 3.00 g sample of impure CaCO₃ (100.1 g/mol) releases 1.10 g of CO₂ (44.0 g/mol). What is the percent CaCO₃ in the sample?", "83.3%", ["36.7%", "91.7%", "16.7%"], "1.10 ÷ 44.0 = 0.0250 mol CO₂ = 0.0250 mol CaCO₃ = 2.50 g, and 2.50 ÷ 3.00 = 83.3%."],
    ["In the AgCl experiment, the precipitate is weighed while still damp. How does this affect the calculated percent NaCl?", "It is too high", ["It is too low", "It is unchanged", "It cannot be predicted"], "The extra water is counted as AgCl, so the calculated moles of Cl⁻, and therefore of NaCl, are too large."],
    ["A gas mixture contains 2.0 mol N₂ (28.0 g/mol) and 3.0 mol O₂ (32.0 g/mol). What is the mass percent of N₂?", "36.8%", ["40.0%", "63.2%", "46.7%"], "N₂: 56.0 g; O₂: 96.0 g. 56.0 ÷ 152.0 = 36.8%. 40.0% is the mole percent, not the mass percent."]
  ]],
  ["1.5", "Atomic Structure and Electron Configuration", [
    ["Which species is NOT isoelectronic with neon?", "Cl⁻", ["Mg²⁺", "F⁻", "O²⁻"], "Cl⁻ has 18 electrons (like argon). The others each have 10."],
    ["What is the ground-state electron configuration of Fe³⁺?", "[Ar] 3d⁵", ["[Ar] 4s² 3d³", "[Ar] 4s¹ 3d⁴", "[Ar] 3d⁶"], "Fe is [Ar] 4s² 3d⁶. Transition metals lose 4s electrons first, then one 3d electron."],
    ["The first ionization energy of oxygen is lower than that of nitrogen. What best explains this?", "Repulsion between paired 2p electrons in O", ["Oxygen has a smaller nuclear charge than N", "Oxygen's valence electrons are in a higher shell", "Nitrogen's 2p subshell is completely filled"], "O's fourth 2p electron shares an orbital, and the extra repulsion makes it easier to remove."],
    ["How many unpaired electrons does a ground-state cobalt atom (Z = 27) have?", "3", ["7", "1", "5"], "Co is [Ar] 4s² 3d⁷. Seven d electrons in five orbitals leave 3 unpaired."]
  ]],
  ["1.6", "Photoelectron Spectroscopy", [
    ["The photoelectron spectrum of an element is shown. Which element is it?", "Neon (1s² 2s² 2p⁶)", ["Oxygen (1s² 2s² 2p⁴)", "Sodium (1s² 2s² 2p⁶ 3s¹)", "Magnesium (1s² 2s² 2p⁶ 3s²)"], "Three peaks with relative heights 2 : 2 : 6 and no low-energy 3s peak match 1s² 2s² 2p⁶, which is neon.", { t: "bar", title: "Photoelectron spectrum (binding energy decreases to the right)", cats: ["84 (1s)", "4.68 (2s)", "2.08 (2p)"], x: { label: "Binding energy (MJ/mol)" }, y: { min: 0, max: 7, ticks: [0, 1, 2, 3, 4, 5, 6, 7], label: "Relative number of electrons" }, series: [{ name: "Electrons", vals: [2, 2, 6] }] }],
    ["In the photoelectron spectrum of magnesium, which peak is the tallest?", "2p", ["1s", "3s", "2s"], "Peak height is proportional to the number of electrons: 2p has 6, while the others have 2."],
    ["How does the 1s peak of Mg compare with the 1s peak of Na in their photoelectron spectra?", "Mg's is at a higher binding energy", ["Na's is at a higher binding energy", "They are at the same binding energy", "Mg's is taller than Na's"], "Mg has one more proton, so its 1s electrons are held more tightly. Both 1s peaks represent 2 electrons."],
    ["A photoelectron spectrum has five peaks with relative heights 2, 2, 6, 2, 1 (from highest to lowest binding energy). Which element is it?", "Aluminum", ["Magnesium", "Silicon", "Sodium"], "The configuration is 1s² 2s² 2p⁶ 3s² 3p¹, which is aluminum."]
  ]],
  ["1.7", "Periodic Trends", [
    ["Which of these isoelectronic ions has the largest radius: O²⁻, F⁻, Na⁺, or Mg²⁺?", "O²⁻", ["F⁻", "Na⁺", "Mg²⁺"], "All have 10 electrons. O²⁻ has the fewest protons (8), so its electrons are held least tightly."],
    ["The data show the first four ionization energies of an element. In which group is the element most likely found?", "Group 2", ["Group 1", "Group 13", "Group 14"], "The big jump comes after the second electron, so the element has 2 valence electrons, which is Group 2 (the data match magnesium).", { t: "table", title: "Successive ionization energies (kJ/mol)", head: ["IE₁", "IE₂", "IE₃", "IE₄"], rows: [["738", "1,451", "7,733", "10,543"]], rowHead: false }],
    ["Which element has the highest second ionization energy?", "Na", ["Mg", "Al", "Si"], "Na's second electron comes from the filled 2p core, which requires much more energy."],
    ["Which shows the elements in order of increasing first ionization energy?", "Al < Mg < Si", ["Mg < Al < Si", "Si < Mg < Al", "Mg < Si < Al"], "Al's 3p electron is higher in energy and shielded by 3s, so Al is lower than Mg; Si is highest."]
  ]],
  ["1.8", "Valence Electrons and Ionic Compounds", [
    ["A period 3 element forms an oxide with the formula X₂O₃. Which element is X?", "Al", ["Mg", "Na", "Si"], "X₂O₃ requires X³⁺, which matches aluminum."],
    ["What is the formula of the compound formed by calcium and phosphorus?", "Ca₃P₂", ["Ca₂P₃", "CaP", "Ca₃P"], "Ca²⁺ and P³⁻ combine 3 : 2 so the charges cancel."],
    ["An element's successive ionization energies (kJ/mol) are 580, 1,820, 2,750, and 11,600. What is the formula of its chloride?", "XCl₃", ["XCl₄", "XCl₂", "X₃Cl"], "The big jump after the third ionization energy means X has 3 valence electrons and forms X³⁺."],
    ["What ion does selenium most commonly form?", "Se²⁻", ["Se²⁺", "Se⁶⁺", "Se⁻"], "Se is in group 16 and gains 2 electrons to reach a noble-gas configuration."]
  ]]
]},
{ n: 2, name: "Compound Structure and Properties", weight: "7–9%", topics: [
  ["2.1", "Types of Chemical Bonds", [
    ["Which solid conducts electricity?", "Cu(s)", ["NaCl(s)", "SiO₂(s)", "I₂(s)"], "Metals have delocalized electrons. Ions in solid NaCl are fixed in place."],
    ["Which bond is most polar?", "O–H", ["N–H", "C–H", "S–H"], "O–H has the largest electronegativity difference (about 1.4)."],
    ["A solid melts at 801°C, does not conduct as a solid, and conducts when melted. What type of solid is it?", "Ionic", ["Metallic", "Covalent network", "Molecular"], "Ions become mobile only when the solid melts or dissolves."],
    ["Which compound has the greatest ionic character?", "KF", ["NaCl", "LiI", "AlCl₃"], "K and F have the largest electronegativity difference of these pairs."]
  ]],
  ["2.2", "Intramolecular Force and Potential Energy", [
    ["The graph shows potential energy versus distance between two hydrogen atoms. What does the distance at the lowest point represent?", "The bond length", ["The bond energy", "The atomic radius of hydrogen", "The distance at which the atoms stop attracting"], "At the minimum, attraction and repulsion are balanced. That distance is the bond length, and the depth of the well is the bond energy.", { t: "line", title: "Potential energy of two H atoms", x: { min: 0, max: 250, ticks: [0, 50, 100, 150, 200, 250], label: "Internuclear distance (pm)" }, y: { min: -500, max: 300, ticks: [-400, -200, 0, 200], label: "Potential energy (kJ/mol)" }, series: [{ name: "H₂", pts: [[40, 280], [50, 90], [60, -200], [66, -340], [74, -436], [85, -400], [100, -300], [130, -150], [170, -50], [220, -10], [250, 0]] }] }],
    ["Which diatomic molecule has the greatest bond energy?", "N₂", ["O₂", "F₂", "H₂"], "N₂ has a triple bond, the strongest of these."],
    ["As the bond order between two atoms increases, what happens to the bond?", "Shorter and stronger", ["Longer and stronger", "Shorter and weaker", "Longer and weaker"], "More shared electron pairs pull the nuclei closer and hold them more tightly."],
    ["Which bond is longest?", "H–I", ["H–Br", "H–Cl", "H–F"], "Iodine is the largest atom, so the H–I bond is the longest."]
  ]],
  ["2.3", "Structure of Ionic Solids", [
    ["Which compound has the greatest lattice energy?", "MgO", ["NaF", "CaO", "KCl"], "MgO has 2+/2− charges and small ions, giving the strongest Coulombic attraction."],
    ["NaF melts at 993°C and KCl at 770°C. What best explains the difference?", "NaF's ions are smaller", ["NaF's ions have larger charges", "KCl has stronger dispersion forces", "NaF has covalent bonds"], "Both are 1+/1−, but smaller ions are closer together, so the attraction is stronger."],
    ["Which shows these compounds in order of increasing melting point?", "KBr < NaCl < MgO", ["MgO < NaCl < KBr", "NaCl < KBr < MgO", "KBr < MgO < NaCl"], "Higher charge and smaller ions increase lattice energy and melting point."],
    ["Why do ionic solids shatter instead of bending when struck?", "Shifting brings like charges together", ["Their bonds are weaker than metallic bonds", "Their electrons are delocalized", "Their ions are all the same size"], "A shift in the lattice puts ions of the same charge side by side, and the repulsion breaks the crystal."]
  ]],
  ["2.4", "Structure of Metals and Alloys", [
    ["Brass is made of copper and zinc, whose atoms are similar in size. What kind of alloy is brass?", "Substitutional", ["Interstitial", "Covalent network", "Ionic"], "Zn atoms replace Cu atoms in the lattice."],
    ["Why is steel harder than pure iron?", "Carbon atoms block layers from sliding", ["Carbon forms ionic bonds with iron", "Carbon adds more delocalized electrons", "Carbon atoms replace some iron atoms"], "Small C atoms fill the holes between Fe atoms and make it harder for layers to move."],
    ["Which element is most likely to form an interstitial alloy with iron?", "Carbon", ["Chromium", "Nickel", "Manganese"], "Interstitial atoms must be much smaller than the host atoms."],
    ["Why can metals be hammered into sheets without breaking?", "Delocalized electrons adjust as layers slide", ["The metal cations attract each other", "Metallic bonds are weaker than ionic ones", "Metals contain no charged particles"], "The sea of electrons keeps holding the cations together even as layers shift."]
  ]],
  ["2.5", "Lewis Diagrams", [
    ["How many lone pairs are on the central atom in XeF₄?", "2", ["0", "1", "3"], "Xe has 8 valence electrons: 4 form bonds with F and 4 remain as 2 lone pairs."],
    ["How many valence electrons are in the sulfate ion, SO₄²⁻?", "32", ["30", "24", "34"], "6 + 4(6) + 2 = 32."],
    ["Which molecule has a central atom with more than an octet?", "SF₆", ["CF₄", "NH₃", "BF₃"], "S has 12 electrons around it in SF₆."],
    ["How many π bonds are in a molecule of HCN?", "2", ["1", "3", "0"], "H–C≡N has one σ and two π bonds in the triple bond."]
  ]],
  ["2.6", "Resonance and Formal Charge", [
    ["In the best Lewis structure of the cyanate ion, OCN⁻, which atom carries the −1 formal charge?", "O", ["N", "C", "None"], "The structure with −1 on the most electronegative atom (O) is favored."],
    ["What is the average N–O bond order in the nitrite ion, NO₂⁻?", "1.5", ["1", "2", "1.33"], "Two resonance structures each have one single and one double bond."],
    ["Which species does NOT have resonance structures?", "CH₄", ["O₃", "NO₃⁻", "C₆H₆"], "CH₄ has only single bonds and no alternative placements of electrons."],
    ["In a Lewis structure of SO₂ with one S=O and one S–O bond, what is the formal charge on S?", "+1", ["0", "−1", "+2"], "S: 6 valence − 2 nonbonding − 3 bonds = +1."]
  ]],
  ["2.7", "VSEPR and Bond Hybridization", [
    ["What is the molecular geometry of SF₄?", "Seesaw", ["Tetrahedral", "Square planar", "Trigonal pyramidal"], "S has 4 bonding pairs and 1 lone pair (5 electron domains)."],
    ["What is the hybridization of carbon in the carbonate ion, CO₃²⁻?", "sp²", ["sp³", "sp", "sp³d"], "Carbon has three electron domains in a trigonal planar arrangement."],
    ["Why is the H–O–H bond angle in water less than 109.5°?", "Lone pairs repel more than bonding pairs", ["Hydrogen atoms repel each other strongly", "Oxygen is sp² hybridized", "Water forms hydrogen bonds"], "Water's two lone pairs compress the bond angle to about 104.5°."],
    ["Which molecule is polar?", "SO₂", ["CO₂", "BF₃", "CCl₄"], "SO₂ is bent, so its bond dipoles don't cancel."]
  ]]
]},
{ n: 3, name: "Properties of Substances and Mixtures", weight: "18–22%", topics: [
  ["3.1", "Intermolecular Forces", [
    ["Which substance has the highest boiling point?", "CH₃CH₂OH", ["CH₃OCH₃", "CH₃CH₂CH₃", "CH₃Cl"], "Ethanol has an O–H group, so it forms hydrogen bonds. The others don't."],
    ["n-Pentane boils at 36°C, but neopentane (same formula) boils at 10°C. Why?", "n-Pentane has more surface contact", ["n-Pentane forms hydrogen bonds", "Neopentane has more electrons", "Neopentane is more polar"], "The longer shape gives more contact between molecules, so London dispersion forces are stronger."],
    ["The table gives boiling points of Group 16 hydrides. Why is water's boiling point so much higher than the trend would predict?", "Water forms hydrogen bonds", ["Water has the most electrons", "Water has stronger London forces", "Water molecules are the most polar"], "H₂S, H₂Se, and H₂Te rise with size (dispersion forces), but H₂O is far above the trend because of hydrogen bonding.", { t: "table", title: "Boiling points of Group 16 hydrides", head: ["Compound", "H₂O", "H₂S", "H₂Se", "H₂Te"], rows: [["Boiling point (°C)", "100", "−60", "−41", "−2"]] }],
    ["Which substance has dipole–dipole forces but NO hydrogen bonding between its molecules?", "CH₂O", ["CH₃OH", "CH₄", "HF"], "Formaldehyde is polar, but its H atoms are bonded to C, not to N, O, or F."]
  ]],
  ["3.2", "Properties of Solids", [
    ["Which solid has the highest melting point?", "SiO₂", ["I₂", "CO₂", "H₂O"], "SiO₂ is a covalent network solid; melting it requires breaking covalent bonds."],
    ["Which solid conducts electricity?", "Graphite", ["Diamond", "NaCl", "Ice"], "Graphite has delocalized π electrons within its layers."],
    ["Which solid dissolves in hexane and melts below 120°C?", "I₂", ["NaCl", "SiO₂", "Cu"], "I₂ is a nonpolar molecular solid held together by dispersion forces."],
    ["Why is graphite a good lubricant while diamond is very hard?", "Graphite's layers are held by weak forces", ["Graphite has ionic bonds between layers", "Diamond has delocalized electrons", "Diamond's atoms are sp² hybridized"], "Graphite's sheets are bonded covalently, but the sheets are held to each other only by dispersion forces."]
  ]],
  ["3.3", "Solids, Liquids, and Gases", [
    ["Why is ice less dense than liquid water?", "Hydrogen bonds hold it in an open lattice", ["Its molecules move faster than in the liquid", "Its molecules are larger than in the liquid", "It contains trapped air bubbles"], "The hydrogen-bonded structure of ice spaces the molecules farther apart."],
    ["Why does vapor pressure increase with temperature?", "More molecules can escape the liquid", ["The molecules become lighter", "The IMFs become stronger", "The liquid's volume increases"], "At higher temperature, a larger fraction of molecules has enough kinetic energy to overcome intermolecular forces."],
    ["Which liquid has the highest vapor pressure at 25°C?", "Diethyl ether", ["Water", "Ethanol", "Glycerol"], "Diethyl ether has no hydrogen bonding between its molecules, so they escape most easily."],
    ["A liquid and its vapor are at equilibrium in a sealed container. The volume is doubled at constant temperature, and some liquid remains. What is the new vapor pressure?", "Unchanged", ["Halved", "Doubled", "Zero"], "More liquid evaporates until the vapor pressure returns to the value set by the temperature."]
  ]],
  ["3.4", "Ideal Gas Law", [
    ["What is the volume of 0.500 mol of gas at 27°C and 2.00 atm? (R = 0.0821 L·atm/mol·K)", "6.16 L", ["12.3 L", "0.553 L", "11.2 L"], "V = nRT/P = (0.500)(0.0821)(300.)/2.00 = 6.16 L. Using 27 instead of 300 K gives 0.553 L."],
    ["A 1.00 g sample of a gas occupies 0.560 L at STP (0°C, 1.00 atm). What is its molar mass?", "40.0 g/mol", ["22.4 g/mol", "25.0 g/mol", "0.025 g/mol"], "n = 0.560/22.4 = 0.0250 mol, and 1.00 g ÷ 0.0250 mol = 40.0 g/mol."],
    ["A mixture of 2.0 mol N₂ and 1.0 mol O₂ has a total pressure of 1.2 atm. What is the partial pressure of O₂?", "0.40 atm", ["0.60 atm", "0.80 atm", "1.2 atm"], "O₂ is 1/3 of the moles, so P(O₂) = (1/3)(1.2) = 0.40 atm."],
    ["What is the density of CO₂ (44.0 g/mol) at STP?", "1.96 g/L", ["0.509 g/L", "44.0 g/L", "22.4 g/L"], "d = M/V(molar) = 44.0 ÷ 22.4 = 1.96 g/L."]
  ]],
  ["3.5", "Kinetic Molecular Theory", [
    ["At the same temperature, how does the average speed of He (4.0 g/mol) compare with CH₄ (16.0 g/mol)?", "2 times faster", ["4 times faster", "Half as fast", "16 times faster"], "Speed ∝ 1/√M: √(16/4) = 2."],
    ["The graph shows the distribution of molecular speeds for the same gas at two temperatures. Which curve is at the higher temperature?", "Curve B, which peaks at a higher speed", ["Curve A, which has the taller peak", "Curve A, which peaks at a lower speed", "Curve B, which has more total area"], "At higher T, more molecules move fast, so the curve shifts right and spreads out. The area under both curves stays the same.", { t: "line", title: "Maxwell–Boltzmann distribution", x: { min: 0, max: 1500, ticks: [0, 500, 1000, 1500], label: "Molecular speed (m/s)" }, y: { min: 0, max: 10, ticks: [0, 5, 10], label: "Fraction of molecules" }, series: [{ name: "Curve A", pts: [[0, 0], [100, 2.4], [200, 6.2], [300, 8.6], [400, 8.7], [500, 7], [600, 4.6], [700, 2.6], [800, 1.2], [900, .5], [1000, .2], [1200, 0]] }, { name: "Curve B", pts: [[0, 0], [150, 1.3], [300, 3.7], [450, 5.4], [600, 5.8], [750, 5], [900, 3.6], [1050, 2.2], [1200, 1.1], [1350, .5], [1500, .2]], k: 2 }] }],
    ["An unknown gas effuses half as fast as helium (4.0 g/mol). What is its molar mass?", "16 g/mol", ["8 g/mol", "2 g/mol", "1 g/mol"], "Rate ratio 1/2 = √(4/M), so M = 16."],
    ["Which sample has the greatest average kinetic energy per molecule?", "CO₂ at 350 K", ["H₂ at 300 K", "O₂ at 300 K", "He at 250 K"], "Average kinetic energy depends only on temperature, not on molar mass."]
  ]],
  ["3.6", "Deviation from Ideal Gas Law", [
    ["Which gas deviates most from ideal behavior at the same conditions?", "NH₃", ["He", "H₂", "Ne"], "NH₃ molecules are polar and form hydrogen bonds, so they attract each other strongly."],
    ["At very high pressure, why is a real gas's volume larger than the ideal gas law predicts?", "Its molecules take up space", ["Its molecules attract each other", "Its molecules move faster", "Its molecules are polar"], "The ideal gas law assumes the particles have no volume; at high pressure that isn't true."],
    ["At moderate pressure, a real gas has PV/nRT less than 1. What causes this?", "Attractions between molecules", ["The volume of the molecules", "Collisions with the walls", "Increasing kinetic energy"], "Attractions reduce the force of collisions with the walls, lowering the pressure."],
    ["Under which conditions does a gas behave most ideally?", "High temperature, low pressure", ["Low temperature, high pressure", "High temperature, high pressure", "Low temperature, low pressure"], "Molecules are far apart and moving fast, so attractions and particle volume matter little."]
  ]],
  ["3.7", "Solutions and Mixtures", [
    ["What is the molarity of a solution made from 10.0 g of NaOH (40.0 g/mol) in 500. mL of solution?", "0.500 M", ["0.0200 M", "0.250 M", "20.0 M"], "10.0 ÷ 40.0 = 0.250 mol, and 0.250 mol ÷ 0.500 L = 0.500 M."],
    ["What volume of 6.0 M HCl is needed to make 250. mL of 0.30 M HCl?", "12.5 mL", ["5.0 mL", "25 mL", "125 mL"], "M₁V₁ = M₂V₂: V₁ = (0.30)(250.)/6.0 = 12.5 mL."],
    ["What is [Cl⁻] in 0.20 M CaCl₂?", "0.40 M", ["0.20 M", "0.10 M", "0.60 M"], "Each CaCl₂ gives 2 Cl⁻ ions."],
    ["100. mL of 0.10 M NaCl is mixed with 100. mL of 0.30 M NaCl. What is the final concentration?", "0.20 M", ["0.40 M", "0.10 M", "0.30 M"], "Total moles = 0.010 + 0.030 = 0.040 in 0.200 L."]
  ]],
  ["3.8", "Representations of Solutions", [
    ["In a particle diagram of aqueous K₃PO₄, what should the ratio of K⁺ to PO₄³⁻ ions be?", "3 : 1", ["1 : 1", "1 : 3", "4 : 1"], "Each formula unit dissolves into 3 K⁺ and 1 PO₄³⁻."],
    ["How are water molecules oriented around a dissolved Mg²⁺ ion?", "Oxygen atoms toward the ion", ["Hydrogen atoms toward the ion", "Randomly around the ion", "Bonded covalently to the ion"], "The partial negative oxygen end is attracted to the positive ion."],
    ["Which solution has the highest total concentration of dissolved particles?", "0.10 M Al(NO₃)₃", ["0.15 M NaCl", "0.20 M glucose", "0.10 M CaCl₂"], "Al(NO₃)₃ gives 4 ions: 0.40 M. NaCl gives 0.30 M, CaCl₂ 0.30 M, and glucose 0.20 M."],
    ["What should a particle diagram of HF(aq) mostly show?", "HF molecules and few ions", ["H⁺ and F⁻ ions only", "Equal HF molecules and ions", "H₂ and F₂ molecules"], "HF is a weak acid, so only a small fraction ionizes."]
  ]],
  ["3.9", "Separation of Solutions and Mixtures Chromatography", [
    ["In thin-layer chromatography on polar silica with a nonpolar solvent, which compound travels farthest?", "The least polar compound", ["The most polar compound", "The largest compound", "The compound with an O–H group"], "Polar compounds stick to the polar silica; nonpolar compounds move with the nonpolar solvent."],
    ["A spot travels 2.4 cm while the solvent travels 8.0 cm. What is the spot's Rf value?", "0.30", ["3.3", "0.24", "5.6"], "Rf = 2.4 ÷ 8.0 = 0.30."],
    ["Distillation separates two liquids mainly because they differ in which property?", "Boiling point", ["Density", "Solubility in water", "Molar mass"], "The liquid with weaker intermolecular forces boils off first."],
    ["On silica, the solvent is changed to a more polar mixture. What happens to the Rf values of polar compounds?", "They increase", ["They decrease", "They stay the same", "They become zero"], "A more polar solvent competes better for polar compounds and carries them farther."]
  ]],
  ["3.10", "Solubility", [
    ["Which compound is most soluble in water?", "CH₃OH", ["CH₃CH₂CH₂CH₂OH", "C₆H₁₄", "CCl₄"], "Methanol has a small nonpolar part and an O–H group that hydrogen bonds with water."],
    ["Which substance dissolves best in hexane?", "I₂", ["NaCl", "CH₃OH", "KNO₃"], "I₂ is nonpolar, like hexane."],
    ["Why is 1-butanol less soluble in water than methanol?", "Its nonpolar chain is longer", ["It cannot form hydrogen bonds", "It is an ionic compound", "It has a smaller molar mass"], "Both have one O–H group, but butanol's longer hydrocarbon chain disrupts water's hydrogen bonding."],
    ["How does the solubility of O₂ gas in water change as the water warms?", "It decreases", ["It increases", "It stays the same", "It first rises, then falls"], "Gas molecules gain kinetic energy and escape the solution more easily."]
  ]],
  ["3.11", "Spectroscopy and the Electromagnetic Spectrum", [
    ["Which type of radiation causes molecular vibrations?", "Infrared", ["Microwave", "Ultraviolet", "X-ray"], "Infrared photons match the energy gaps between vibrational levels."],
    ["Which region has the highest energy per photon?", "Ultraviolet", ["Microwave", "Infrared", "Visible"], "Energy increases with frequency: microwave < infrared < visible < UV."],
    ["A solution appears blue. Which color of light does it most strongly absorb?", "Orange", ["Blue", "Green", "Violet"], "We see the complementary color of the light that is absorbed; orange and blue are complements."],
    ["Which type of radiation causes molecular rotations?", "Microwave", ["Infrared", "Visible", "Ultraviolet"], "Rotational energy levels are closely spaced and match low-energy microwave photons."]
  ]],
  ["3.12", "Photoelectric Effect", [
    ["What is the energy of one photon of 400. nm light? (h = 6.626 × 10⁻³⁴ J·s, c = 3.00 × 10⁸ m/s)", "4.97 × 10⁻¹⁹ J", ["2.65 × 10⁻³¹ J", "4.97 × 10⁻²⁸ J", "7.50 × 10¹⁴ J"], "E = hc/λ = (6.626 × 10⁻³⁴)(3.00 × 10⁸)/(4.00 × 10⁻⁷ m). Forgetting to convert nm to m gives 4.97 × 10⁻²⁸."],
    ["What is the frequency of 600. nm light?", "5.00 × 10¹⁴ Hz", ["2.00 × 10⁻¹⁵ Hz", "1.80 × 10¹¹ Hz", "5.00 × 10⁵ Hz"], "ν = c/λ = (3.00 × 10⁸)/(6.00 × 10⁻⁷ m)."],
    ["What is the energy of one mole of photons with wavelength 500. nm?", "240 kJ", ["398 kJ", "24.0 kJ", "2.40 kJ"], "One photon has 3.98 × 10⁻¹⁹ J. × 6.02 × 10²³ = 2.40 × 10⁵ J = 240 kJ."],
    ["Light with photon energy 4.97 × 10⁻¹⁹ J strikes a metal with a work function of 3.00 × 10⁻¹⁹ J. What is the maximum kinetic energy of an ejected electron?", "1.97 × 10⁻¹⁹ J", ["7.97 × 10⁻¹⁹ J", "3.00 × 10⁻¹⁹ J", "1.66 × 10⁻¹⁹ J"], "KE = photon energy − work function."]
  ]],
  ["3.13", "Beer-Lambert Law", [
    ["The graph shows absorbance versus concentration for a dye. What is the concentration of a sample with absorbance 0.60?", "0.30 M", ["0.20 M", "0.60 M", "0.15 M"], "The calibration line has a slope of 2.0 M⁻¹, so 0.60 ÷ 2.0 = 0.30 M.", { t: "line", title: "Calibration curve for a dye", x: { min: 0, max: 0.5, ticks: [0, 0.1, 0.2, 0.3, 0.4, 0.5], label: "Concentration (M)" }, y: { min: 0, max: 1, ticks: [0, 0.2, 0.4, 0.6, 0.8, 1], label: "Absorbance" }, series: [{ name: "Absorbance", pts: [[0, 0], [0.1, 0.2], [0.2, 0.4], [0.3, 0.6], [0.4, 0.8]], dots: true }] }],
    ["A solution has absorbance 0.600 in a 1.00 cm cell. The molar absorptivity is 150 M⁻¹cm⁻¹. What is its concentration?", "4.00 × 10⁻³ M", ["90.0 M", "4.00 × 10⁻² M", "250 M"], "c = A/(εb) = 0.600/150 = 0.00400 M."],
    ["The path length is doubled and the concentration is halved. What happens to the absorbance?", "It stays the same", ["It doubles", "It halves", "It quadruples"], "A = εbc, and 2b × c/2 = bc."],
    ["Why is absorbance usually measured at the wavelength of maximum absorbance (λmax)?", "Small changes in c cause the biggest change in A", ["It is the wavelength that passes through", "It prevents the solution from heating", "It makes ε equal to 1"], "At λmax the slope ε is largest, making the measurement most sensitive."]
  ]]
]},
{ n: 4, name: "Chemical Reactions", weight: "7–9%", topics: [
  ["4.1", "Introduction for Reactions", [
    ["A student burns 5.0 g of magnesium ribbon in air, and the white product has a mass of 8.3 g. What best explains the increase in mass?", "Oxygen from the air combined with Mg", ["Mass is created when a flame is present", "Mg absorbs heat, which has mass", "Water vapor condenses on the product"], "Mass is conserved; the product (MgO) includes the mass of oxygen atoms taken from the air."],
    ["Which observation is the strongest evidence of a chemical change?", "Gas bubbles form when two solutions mix", ["Sugar dissolves in water", "Ice melts in a warm room", "Water boils at 100°C"], "Gas forming from mixed solutions signals a new substance. The others change only state or mixing."],
    ["For 2 SO₂ + O₂ → 2 SO₃, a container holds 6 SO₂ molecules and 4 O₂ molecules. What does it contain after the reaction goes to completion?", "6 SO₃ and 1 O₂", ["6 SO₃ and 4 O₂", "4 SO₃ and 2 SO₂", "5 SO₃ and 0 O₂"], "6 SO₂ need only 3 O₂, so SO₂ is limiting: 6 SO₃ form and 1 O₂ is left over."],
    ["1.0 mol of N₂ and 3.0 mol of H₂ react completely: N₂ + 3 H₂ → 2 NH₃. What is the total number of moles of gas afterward?", "2.0 mol", ["4.0 mol", "6.0 mol", "1.0 mol"], "Atoms are conserved, but molecules are not: 4.0 mol of reactants become 2.0 mol of NH₃."]
  ]],
  ["4.2", "Net Ionic Equations", [
    ["What is the net ionic equation when Pb(NO₃)₂(aq) and KI(aq) are mixed?", "Pb²⁺ + 2 I⁻ → PbI₂(s)", ["K⁺ + NO₃⁻ → KNO₃(s)", "Pb²⁺ + I⁻ → PbI(s)", "Pb(NO₃)₂ + 2 KI → PbI₂"], "PbI₂ precipitates. K⁺ and NO₃⁻ are spectator ions, and charges must balance (2 I⁻)."],
    ["What is the net ionic equation for HCl(aq) + NaOH(aq)?", "H⁺ + OH⁻ → H₂O(l)", ["Na⁺ + Cl⁻ → NaCl(s)", "HCl + OH⁻ → Cl⁻ + H₂O", "H⁺ + NaOH → Na⁺ + H₂O"], "HCl and NaOH are strong and fully ionized; NaCl stays dissolved."],
    ["What is the net ionic equation for acetic acid reacting with sodium hydroxide?", "CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O", ["H⁺ + OH⁻ → H₂O", "CH₃COO⁻ + Na⁺ → CH₃COONa", "CH₃COOH + Na⁺ → CH₃COONa + H⁺"], "Acetic acid is weak, so it is written as a molecule, not as H⁺."],
    ["Solutions of Na₂SO₄ and KNO₃ are mixed. What is the net ionic equation?", "No net reaction occurs", ["2 K⁺ + SO₄²⁻ → K₂SO₄(s)", "Na⁺ + NO₃⁻ → NaNO₃(s)", "SO₄²⁻ + NO₃⁻ → SNO₇³⁻"], "All possible products are soluble, so every ion is a spectator."]
  ]],
  ["4.3", "Representations of Reactions", [
    ["When C₂H₆ burns completely, what is the coefficient of O₂ in the balanced equation with the smallest whole-number coefficients?", "7", ["3.5", "5", "14"], "2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O."],
    ["What is the sum of the smallest whole-number coefficients for Al + O₂ → Al₂O₃?", "9", ["6", "5", "7"], "4 Al + 3 O₂ → 2 Al₂O₃: 4 + 3 + 2 = 9."],
    ["In the balanced equation Fe₂O₃ + __ CO → 2 Fe + __ CO₂, what coefficient goes in front of CO?", "3", ["1", "2", "6"], "Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂. The 3 oxygens in Fe₂O₃ go to 3 CO₂."],
    ["A container holds 2 CH₄ and 5 O₂ molecules. After complete combustion, what does it contain?", "2 CO₂, 4 H₂O, 1 O₂", ["2 CO₂, 4 H₂O, 0 O₂", "2 CO₂, 2 H₂O, 3 O₂", "1 CO₂, 2 H₂O, 3 O₂"], "CH₄ + 2 O₂ → CO₂ + 2 H₂O. 2 CH₄ use 4 O₂, leaving 1 O₂."]
  ]],
  ["4.4", "Physical and Chemical Changes", [
    ["Which process involves breaking covalent bonds within molecules?", "Electrolysis of water", ["Boiling water", "Dissolving sugar", "Melting ice"], "Electrolysis breaks O–H bonds to form H₂ and O₂. The others overcome only intermolecular forces."],
    ["Which best describes what happens when NaCl dissolves in water?", "Ionic attractions break; ion–dipole forces form", ["Covalent bonds in water break", "Na and Cl atoms become neutral", "NaCl molecules spread through the water"], "Dissolving separates the ions, which are then surrounded by water molecules."],
    ["When dry ice (solid CO₂) sublimes, what is overcome?", "Only intermolecular forces", ["C=O covalent bonds", "Ionic bonds", "Metallic bonds"], "CO₂ molecules stay intact; only the forces between them are overcome."],
    ["Which change is chemical?", "Iron rusting in moist air", ["Iron being magnetized", "Iron being cut into pieces", "Iron melting in a furnace"], "Rusting forms a new substance, iron oxide."]
  ]],
  ["4.5", "Stoichiometry", [
    ["N₂ + 3 H₂ → 2 NH₃. If 28.0 g of N₂ reacts with 4.0 g of H₂ (use 2.0 g/mol), what mass of NH₃ (17.0 g/mol) can form?", "22.7 g", ["34.0 g", "32.0 g", "11.3 g"], "1.00 mol N₂ and 2.0 mol H₂. H₂ is limiting: 2.0 × (2/3) = 1.33 mol NH₃ × 17.0 = 22.7 g."],
    ["The theoretical yield of a reaction is 22.7 g, but only 18.0 g is collected. What is the percent yield?", "79.3%", ["126%", "56.3%", "20.7%"], "18.0 ÷ 22.7 × 100 = 79.3%."],
    ["2 KClO₃ → 2 KCl + 3 O₂. What mass of O₂ (32.0 g/mol) forms from 24.5 g of KClO₃ (122.6 g/mol)?", "9.60 g", ["6.40 g", "4.80 g", "19.2 g"], "24.5 ÷ 122.6 = 0.200 mol KClO₃ → 0.300 mol O₂ → 9.60 g. Using a 1 : 1 ratio gives 6.40 g."],
    ["What mass of CO₂ (44.0 g/mol) forms when 10.0 g of C₃H₈ (44.1 g/mol) burns completely?", "29.9 g", ["9.98 g", "10.0 g", "19.9 g"], "10.0 ÷ 44.1 = 0.227 mol C₃H₈ → 3 × 0.227 = 0.680 mol CO₂ → 29.9 g."]
  ]],
  ["4.6", "Introduction to Titration", [
    ["20.0 mL of H₂SO₄ is titrated to the equivalence point with 30.0 mL of 0.200 M NaOH. What is [H₂SO₄]?", "0.150 M", ["0.300 M", "0.0750 M", "0.133 M"], "0.00600 mol NaOH neutralizes 0.00300 mol H₂SO₄ (diprotic). 0.00300 ÷ 0.0200 L = 0.150 M."],
    ["0.500 g of an unknown monoprotic acid requires 25.0 mL of 0.100 M NaOH to reach the equivalence point. What is its molar mass?", "200. g/mol", ["20.0 g/mol", "125 g/mol", "500. g/mol"], "Moles of acid = 0.00250. 0.500 g ÷ 0.00250 mol = 200. g/mol."],
    ["During a titration of an acid with NaOH, an air bubble in the buret tip escapes and is recorded as NaOH volume. How is the calculated acid concentration affected?", "It is too high", ["It is too low", "It is unchanged", "It cannot be predicted"], "The recorded NaOH volume is too large, so the calculated moles of acid are too large."],
    ["What is the pH at the equivalence point when HCl is titrated with NaOH at 25°C?", "7.00", ["Less than 7", "Greater than 7", "Equal to the pKa"], "The products are water and NaCl, whose ions don't react with water."]
  ]],
  ["4.7", "Types of Chemical Reactions", [
    ["How is the reaction 2 Na + Cl₂ → 2 NaCl classified?", "Redox", ["Acid–base", "Precipitation", "Decomposition"], "Na goes from 0 to +1 and Cl from 0 to −1, so electrons are transferred."],
    ["Which reaction is a precipitation reaction?", "AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)", ["HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)", "Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)", "2 H₂O₂(aq) → 2 H₂O(l) + O₂(g)"], "An insoluble solid (AgCl) forms from two solutions."],
    ["Which reaction is NOT a redox reaction?", "CaCO₃ → CaO + CO₂", ["2 H₂ + O₂ → 2 H₂O", "Zn + 2 HCl → ZnCl₂ + H₂", "2 Mg + O₂ → 2 MgO"], "No oxidation numbers change in CaCO₃ → CaO + CO₂."],
    ["How is HCl + NH₃ → NH₄Cl classified?", "Acid–base", ["Redox", "Precipitation", "Combustion"], "HCl donates a proton to NH₃."]
  ]],
  ["4.8", "Introduction to Acid-Base Reactions", [
    ["What is the conjugate base of HCO₃⁻?", "CO₃²⁻", ["H₂CO₃", "OH⁻", "H₃O⁺"], "Removing H⁺ from HCO₃⁻ gives CO₃²⁻."],
    ["Which species is amphoteric?", "HSO₄⁻", ["SO₄²⁻", "NH₄⁺", "Cl⁻"], "HSO₄⁻ can donate an H⁺ (forming SO₄²⁻) or accept one (forming H₂SO₄)."],
    ["In NH₃ + HCl → NH₄⁺ + Cl⁻, which species is the Brønsted–Lowry base?", "NH₃", ["HCl", "NH₄⁺", "Cl⁻"], "NH₃ accepts a proton from HCl."],
    ["How many moles of NaOH are needed to completely neutralize 0.10 mol of H₃PO₄?", "0.30 mol", ["0.10 mol", "0.20 mol", "0.033 mol"], "H₃PO₄ has three acidic hydrogens."]
  ]],
  ["4.9", "Oxidation-Reduction (Redox) Reactions", [
    ["What is the oxidation number of Cr in Cr₂O₇²⁻?", "+6", ["+7", "+12", "+3"], "2x + 7(−2) = −2, so x = +6."],
    ["In 2 Al + 3 Cu²⁺ → 2 Al³⁺ + 3 Cu, how many electrons are transferred?", "6", ["3", "2", "5"], "Each Al loses 3 electrons: 2 × 3 = 6, which equals 3 Cu²⁺ × 2."],
    ["When MnO₄⁻ oxidizes Fe²⁺ to Fe³⁺ in acid (forming Mn²⁺), what is the mole ratio of Fe²⁺ to MnO₄⁻?", "5 : 1", ["1 : 5", "1 : 1", "3 : 1"], "Mn gains 5 electrons (+7 to +2), and each Fe²⁺ loses 1."],
    ["In Zn + Cu²⁺ → Zn²⁺ + Cu, which species is the oxidizing agent?", "Cu²⁺", ["Zn", "Zn²⁺", "Cu"], "Cu²⁺ is reduced, so it is the oxidizing agent."]
  ]]
]}
);
