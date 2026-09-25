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
    ["How many moles of water are in 36.0 g of H₂O? (molar mass 18.0 g/mol)", "2.00 mol", ["0.500 mol", "18.0 mol", "648 mol"], "moles = mass ÷ molar mass = 36.0 g ÷ 18.0 g/mol = 2.00 mol."],
    ["Which sample contains the greatest number of atoms?", "1.0 mol of CH₄", ["1.0 mol of He", "1.0 mol of O₂", "1.0 mol of NaCl"], "Each CH₄ has 5 atoms, so 1.0 mol CH₄ has 5 mol of atoms, more than He (1), O₂ (2), or NaCl (2)."],
    ["What is the mass of 0.250 mol of CO₂? (C = 12.0, O = 16.0 g/mol)", "11.0 g", ["44.0 g", "176 g", "7.00 g"], "Molar mass of CO₂ = 12.0 + 2(16.0) = 44.0 g/mol; 0.250 × 44.0 = 11.0 g."],
    ["A sample of an element contains 3.01 × 10²³ atoms and has a mass of 20.0 g. What is the element's molar mass?", "40.0 g/mol", ["20.0 g/mol", "10.0 g/mol", "80.0 g/mol"], "3.01 × 10²³ atoms is 0.500 mol, so molar mass = 20.0 g ÷ 0.500 mol = 40.0 g/mol (calcium)."]
  ]],
  ["1.2", "Mass Spectroscopy of Elements", [
    ["The mass spectrum of an element shows two peaks. Based on the data, what is the element's average atomic mass?", "About 10.8 amu", ["About 10.5 amu", "About 10.2 amu", "Exactly 11 amu"], "Weighted average: 0.20(10) + 0.80(11) = 2.0 + 8.8 = 10.8 amu. This matches boron.", { t: "bar", title: "Mass spectrum of an element", cats: ["10", "11"], x: { label: "Mass (amu)" }, y: { min: 0, max: 100, ticks: [0, 20, 40, 60, 80, 100], label: "Relative abundance (%)" }, series: [{ name: "Abundance", vals: [20, 80] }] }],
    ["In a mass spectrum of an element, each peak corresponds to", "a different isotope of the element", ["a different energy level of the electrons", "a different ionization energy", "a different compound of the element"], "Isotopes have different masses, so a mass spectrometer separates them into separate peaks whose heights show relative abundance."],
    ["Chlorine's average atomic mass is 35.45 amu. Its two isotopes are Cl-35 and Cl-37. Which is true?", "Cl-35 is more abundant than Cl-37", ["Cl-37 is more abundant than Cl-35", "They are equally abundant", "A third isotope must be the most abundant"], "The average (35.45) is much closer to 35 than 37, so Cl-35 must make up most of the sample (about 76%)."],
    ["Two isotopes of the same element differ in their number of", "neutrons", ["protons", "electrons in the neutral atom", "valence electrons"], "Isotopes have the same number of protons (same element) but different numbers of neutrons, so different masses."]
  ]],
  ["1.3", "Elemental Composition of Pure Substances", [
    ["What is the empirical formula of a compound with the molecular formula C₆H₁₂O₆?", "CH₂O", ["C₆H₁₂O₆", "C₃H₆O₃", "CHO"], "Divide all subscripts by their greatest common factor, 6: C₆H₁₂O₆ → CH₂O."],
    ["A compound is 40.0% carbon, 6.7% hydrogen, and 53.3% oxygen by mass. What is its empirical formula?", "CH₂O", ["C₂H₄O", "CHO₂", "CH₄O"], "In 100 g: 40.0/12.0 = 3.33 mol C, 6.7/1.0 = 6.7 mol H, 53.3/16.0 = 3.33 mol O. The ratio 1 : 2 : 1 gives CH₂O."],
    ["According to the law of definite proportions, a pure sample of water from any source", "always has the same mass ratio of hydrogen to oxygen", ["can have any ratio of hydrogen to oxygen", "has more oxygen if it comes from the ocean", "contains equal masses of hydrogen and oxygen"], "A pure compound always has the same elements in the same proportion by mass (about 1 : 8 H : O for water)."],
    ["What is the percent by mass of oxygen in H₂O? (H = 1.0, O = 16.0 g/mol)", "About 89%", ["About 33%", "About 67%", "About 11%"], "16.0 ÷ 18.0 × 100 ≈ 88.9% oxygen by mass."]
  ]],
  ["1.4", "Composition of Mixtures", [
    ["A 10.0 g mixture of NaCl and sand contains 2.5 g of NaCl. What is the percent NaCl by mass?", "25%", ["2.5%", "75%", "40%"], "2.5 g ÷ 10.0 g × 100 = 25% NaCl."],
    ["How does a mixture differ from a pure compound?", "A mixture's composition can vary, while a compound has a fixed composition", ["A mixture always contains only one element", "A compound can be separated by filtration", "A mixture has a fixed ratio of components"], "Mixtures can be made in any ratio; compounds follow the law of definite proportions."],
    ["A sample labeled \"pure KCl\" is found to be 50% chlorine by mass. Pure KCl is about 47.6% Cl. Which impurity could explain the result?", "NaCl, which has a higher percent Cl by mass", ["KBr, which has no chlorine", "KI, which has no chlorine", "Sand, which has no chlorine"], "Only an impurity with a higher mass percent of Cl than KCl can raise the overall %Cl. NaCl is about 60.7% Cl."],
    ["Elemental analysis of a mixture of two compounds is most useful for", "determining the relative amounts of each compound in the mixture", ["finding the mixture's boiling point", "determining the isotopes present", "measuring the mixture's density"], "If each compound has a known composition, the measured mass percent of an element tells you how much of each is present."]
  ]],
  ["1.5", "Atomic Structure and Electron Configuration", [
    ["What is the ground-state electron configuration of a neutral sulfur atom (Z = 16)?", "1s² 2s² 2p⁶ 3s² 3p⁴", ["1s² 2s² 2p⁶ 3s² 3p⁶", "1s² 2s² 2p⁶ 3s² 3d⁴", "1s² 2s² 2p⁶ 3p⁶"], "16 electrons fill 1s, 2s, 2p, and 3s (12 electrons), leaving 4 in 3p."],
    ["Which ion has the same electron configuration as argon?", "K⁺", ["Na⁺", "Cl", "Ca⁺"], "K⁺ has 19 − 1 = 18 electrons, the same as Ar. Neutral Cl has 17 and Ca⁺ has 19."],
    ["According to Coulomb's law, the attraction between the nucleus and an electron increases when", "the nuclear charge increases or the electron is closer to the nucleus", ["the electron is farther from the nucleus", "the nuclear charge decreases", "more inner electrons shield it"], "Force is proportional to the product of charges and inversely proportional to the square of the distance."],
    ["What is the electron configuration of Fe²⁺ (Fe has Z = 26)?", "[Ar] 3d⁶", ["[Ar] 4s² 3d⁴", "[Ar] 4s² 3d⁶", "[Ar] 4s¹ 3d⁵"], "Fe is [Ar] 4s² 3d⁶. Transition metals lose their 4s electrons first, so Fe²⁺ is [Ar] 3d⁶."]
  ]],
  ["1.6", "Photoelectron Spectroscopy", [
    ["The photoelectron spectrum of an element is shown. Which element is it?", "Neon (1s² 2s² 2p⁶)", ["Oxygen (1s² 2s² 2p⁴)", "Sodium (1s² 2s² 2p⁶ 3s¹)", "Magnesium (1s² 2s² 2p⁶ 3s²)"], "Three peaks with relative heights 2 : 2 : 6 and no low-energy 3s peak match 1s² 2s² 2p⁶, which is neon.", { t: "bar", title: "Photoelectron spectrum (binding energy decreases to the right)", cats: ["84 (1s)", "4.68 (2s)", "2.08 (2p)"], x: { label: "Binding energy (MJ/mol)" }, y: { min: 0, max: 7, ticks: [0, 1, 2, 3, 4, 5, 6, 7], label: "Relative number of electrons" }, series: [{ name: "Electrons", vals: [2, 2, 6] }] }],
    ["In a photoelectron spectrum, the peak with the highest binding energy corresponds to electrons that are", "in the 1s subshell, closest to the nucleus", ["in the valence shell", "in the highest-energy subshell", "unpaired"], "1s electrons are closest to the nucleus and least shielded, so they take the most energy to remove."],
    ["The 1s peak of sodium appears at a higher binding energy than the 1s peak of neon because sodium has", "a greater nuclear charge", ["more electron shells shielding the 1s electrons", "fewer protons", "a smaller mass"], "Na has 11 protons and Ne has 10. The extra proton pulls harder on the 1s electrons."],
    ["The relative height of a peak in a photoelectron spectrum shows", "the number of electrons in that subshell", ["the energy of the photons used", "the mass of the atom", "the number of neutrons"], "Peak height (intensity) is proportional to how many electrons are in that subshell."]
  ]],
  ["1.7", "Periodic Trends", [
    ["Which atom has the largest atomic radius?", "K", ["Na", "Ca", "Br"], "Radius increases down a group (more shells) and decreases across a period (greater effective nuclear charge). K is lowest and farthest left."],
    ["The data show the first four ionization energies of an element. In which group is the element most likely found?", "Group 2", ["Group 1", "Group 13", "Group 14"], "The big jump comes after the second electron, so the element has 2 valence electrons, which is Group 2 (the data match magnesium).", { t: "table", title: "Successive ionization energies (kJ/mol)", head: ["IE₁", "IE₂", "IE₃", "IE₄"], rows: [["738", "1,451", "7,733", "10,543"]], rowHead: false }],
    ["Why is the first ionization energy of oxygen lower than that of nitrogen?", "Oxygen has a paired 2p electron, and repulsion between the paired electrons makes one easier to remove", ["Oxygen has fewer protons than nitrogen", "Oxygen's valence electrons are in a higher shell", "Nitrogen is larger than oxygen"], "N has three unpaired 2p electrons. In O, the fourth 2p electron pairs up, and electron–electron repulsion lowers its ionization energy."],
    ["Which element has the greatest electronegativity?", "F", ["Cl", "O", "Na"], "Electronegativity increases up a group and across a period, so fluorine is the most electronegative element."]
  ]],
  ["1.8", "Valence Electrons and Ionic Compounds", [
    ["What is the formula of the ionic compound formed between aluminum and oxygen?", "Al₂O₃", ["AlO", "Al₃O₂", "AlO₂"], "Al forms Al³⁺ and O forms O²⁻. Two Al³⁺ (+6) balance three O²⁻ (−6)."],
    ["Elements in the same group tend to form compounds with similar formulas because they have", "the same number of valence electrons", ["the same atomic mass", "the same number of shells", "the same number of neutrons"], "Valence electrons decide how many electrons an atom gains or loses, so Na and K both form XCl, for example."],
    ["Calcium most commonly forms which ion?", "Ca²⁺", ["Ca⁺", "Ca²⁻", "Ca³⁺"], "Calcium is in Group 2 and loses its two 4s valence electrons to reach an argon configuration."],
    ["An unknown element X forms the compounds XCl₃ and X₂O₃. X is most likely in the same group as", "aluminum", ["magnesium", "sodium", "carbon"], "Both formulas mean X forms X³⁺ ions, like the Group 13 element aluminum (AlCl₃, Al₂O₃)."]
  ]]
]},
{ n: 2, name: "Compound Structure and Properties", weight: "7–9%", topics: [
  ["2.1", "Types of Chemical Bonds", [
    ["Which pair of atoms would form the most polar bond?", "H and F", ["H and Cl", "H and C", "C and O"], "Polarity grows with the electronegativity difference. F is the most electronegative element, so H–F has the largest difference."],
    ["A solid conducts electricity when melted but not as a solid, and it has a high melting point. What type of bonding does it have?", "Ionic", ["Metallic", "Nonpolar covalent", "Hydrogen bonding"], "Ions are locked in place in the solid but can move when melted, which is the signature of an ionic compound."],
    ["Metallic bonding is best described as", "metal cations surrounded by a sea of delocalized valence electrons", ["shared electron pairs between two specific atoms", "transfer of electrons from a metal to a nonmetal", "attractions between polar molecules"], "The mobile electrons explain why metals conduct electricity and are malleable."],
    ["Which compound contains both ionic and covalent bonds?", "NaNO₃", ["NaCl", "CO₂", "MgO"], "Na⁺ and NO₃⁻ are held by ionic attraction, and the N–O bonds inside nitrate are covalent."]
  ]],
  ["2.2", "Intramolecular Force and Potential Energy", [
    ["The graph shows potential energy versus distance between two hydrogen atoms. What does the distance at the lowest point represent?", "The bond length", ["The bond energy", "The atomic radius of hydrogen", "The distance at which the atoms stop attracting"], "At the minimum, attraction and repulsion are balanced. That distance is the bond length, and the depth of the well is the bond energy.", { t: "line", title: "Potential energy of two H atoms", x: { min: 0, max: 250, ticks: [0, 50, 100, 150, 200, 250], label: "Internuclear distance (pm)" }, y: { min: -500, max: 300, ticks: [-400, -200, 0, 200], label: "Potential energy (kJ/mol)" }, series: [{ name: "H₂", pts: [[40, 280], [50, 90], [60, -200], [66, -340], [74, -436], [85, -400], [100, -300], [130, -150], [170, -50], [220, -10], [250, 0]] }] }],
    ["Compared with a single C–C bond, a C≡C triple bond is", "shorter and stronger", ["longer and weaker", "longer and stronger", "shorter and weaker"], "More shared electron pairs pull the nuclei closer together and take more energy to break."],
    ["Why does the potential energy rise sharply when two atoms get very close together?", "The positively charged nuclei repel each other", ["The electrons are transferred", "The atoms become ions", "The bond breaks"], "At short distances, nucleus–nucleus repulsion dominates over electron–nucleus attraction."],
    ["Which bond is expected to be the longest?", "H–I", ["H–F", "H–Cl", "H–Br"], "Iodine has the largest atomic radius of the halogens, so H–I has the longest bond (and the weakest)."]
  ]],
  ["2.3", "Structure of Ionic Solids", [
    ["Which compound has the greatest lattice energy?", "MgO", ["NaCl", "KBr", "NaF"], "Lattice energy grows with ion charge and shrinks with ion size. Mg²⁺ and O²⁻ are small and doubly charged."],
    ["Why are ionic solids brittle?", "Shifting a layer lines up like-charged ions, which repel and crack the crystal", ["Their electrons are delocalized", "They have weak intermolecular forces", "Their bonds are nonpolar"], "When a force moves one layer, cations line up with cations and anions with anions, and the repulsion splits the crystal."],
    ["Which compound would you expect to have the higher melting point, NaF or KCl, and why?", "NaF, because its smaller ions are closer together and attract more strongly", ["KCl, because its ions are larger", "KCl, because potassium has more protons", "They are equal because both ions have ±1 charges"], "With equal charges, smaller ions give stronger Coulombic attraction and a higher melting point."],
    ["In a crystal of NaCl, each Na⁺ ion is surrounded by", "Cl⁻ ions, arranged to maximize attraction and minimize repulsion", ["other Na⁺ ions", "shared electron pairs", "neutral Na atoms"], "Ionic lattices alternate cations and anions in a repeating 3D pattern."]
  ]],
  ["2.4", "Structure of Metals and Alloys", [
    ["Steel is harder than pure iron because the small carbon atoms", "fill spaces between iron atoms and make it harder for layers to slide", ["replace iron atoms of about the same size", "form ionic bonds with iron", "remove the sea of electrons"], "Steel is an interstitial alloy. Carbon atoms in the holes pin the layers of iron atoms."],
    ["Brass is made of copper and zinc atoms of similar size. What type of alloy is it?", "Substitutional", ["Interstitial", "Ionic", "Network covalent"], "In a substitutional alloy, atoms of similar radius replace one another in the lattice."],
    ["Metals are malleable because", "delocalized electrons let layers of atoms slide without breaking the bonding", ["their ions repel strongly when shifted", "they have directional covalent bonds", "they have no valence electrons"], "The electron sea keeps holding the cations together even as layers move."],
    ["Why do metals conduct electricity well in the solid state?", "Their valence electrons are free to move through the structure", ["Their ions move freely", "They contain hydrogen bonds", "Their nuclei are mobile"], "Mobile, delocalized electrons carry charge."]
  ]],
  ["2.5", "Lewis Diagrams", [
    ["How many valence electrons are in the Lewis structure of CO₂?", "16", ["12", "18", "22"], "C has 4 and each O has 6: 4 + 2(6) = 16."],
    ["In the best Lewis structure for N₂, the nitrogen atoms share", "a triple bond, with one lone pair on each N", ["a single bond, with three lone pairs on each N", "a double bond, with two lone pairs on each N", "a quadruple bond"], "N₂ has 10 valence electrons. A triple bond plus one lone pair on each atom gives both an octet."],
    ["Which molecule has an atom with fewer than an octet in its best Lewis structure?", "BF₃", ["NH₃", "CH₄", "H₂O"], "Boron in BF₃ has only 6 electrons around it, a common exception to the octet rule."],
    ["How many lone pairs are on the central atom of NH₃?", "1", ["0", "2", "3"], "N has 5 valence electrons; 3 form bonds to H and 2 remain as one lone pair."]
  ]],
  ["2.6", "Resonance and Formal Charge", [
    ["The nitrate ion (NO₃⁻) has three resonance structures. What is true about its N–O bonds?", "All three are the same length, between a single and a double bond", ["One is a double bond and two are single bonds at all times", "The bonds switch rapidly between single and double", "All three are double bonds"], "Resonance means the real structure is an average (hybrid); each N–O bond has a bond order of 4/3."],
    ["What is the formal charge on the carbon atom in the Lewis structure of CO with a triple bond and one lone pair on each atom?", "−1", ["0", "+1", "−2"], "Formal charge = valence − lone-pair electrons − bonds = 4 − 2 − 3 = −1. Oxygen gets +1."],
    ["When several Lewis structures are possible, the best one usually", "has formal charges closest to zero, with any negative charge on the more electronegative atom", ["has the most double bonds", "puts negative formal charge on the least electronegative atom", "has the most lone pairs on the central atom"], "Structures that minimize formal charges and place negative charge on electronegative atoms best match experimental data."],
    ["Which species shows resonance?", "O₃", ["H₂O", "CH₄", "NH₃"], "Ozone has two equivalent structures with the double bond on either side, so its two O–O bonds are identical."]
  ]],
  ["2.7", "VSEPR and Bond Hybridization", [
    ["What is the molecular geometry of H₂O?", "Bent", ["Linear", "Trigonal planar", "Tetrahedral"], "Oxygen has 4 electron domains (2 bonds, 2 lone pairs). The electron geometry is tetrahedral but the shape is bent (about 104.5°)."],
    ["What is the hybridization of carbon in CO₂?", "sp", ["sp²", "sp³", "sp³d"], "Carbon has two electron domains (two double bonds), which gives a linear shape and sp hybridization."],
    ["Which molecule is nonpolar even though it has polar bonds?", "CCl₄", ["NH₃", "H₂O", "CHCl₃"], "CCl₄ is tetrahedral and symmetric, so the four C–Cl bond dipoles cancel."],
    ["How many sigma and pi bonds are in ethene, C₂H₄?", "5 sigma and 1 pi", ["4 sigma and 2 pi", "6 sigma and 0 pi", "5 sigma and 2 pi"], "Four C–H single bonds and the C=C (one sigma + one pi) give 5 σ and 1 π."]
  ]]
]},
{ n: 3, name: "Properties of Substances and Mixtures", weight: "18–22%", topics: [
  ["3.1", "Intermolecular Forces", [
    ["Which substance has hydrogen bonding between its molecules?", "CH₃OH", ["CH₄", "CH₃Cl", "H₂S"], "Hydrogen bonding needs H bonded directly to N, O, or F. Methanol has an O–H group."],
    ["Why does I₂ have a higher boiling point than F₂?", "I₂ has more electrons and is more polarizable, so its London dispersion forces are stronger", ["I₂ has hydrogen bonds", "I₂ is polar", "F₂ has ionic bonds"], "Larger electron clouds distort more easily, giving stronger temporary dipoles."],
    ["The table gives boiling points of Group 16 hydrides. Why is water's boiling point so much higher than the trend would predict?", "Water molecules form hydrogen bonds", ["Water has the most electrons", "Water has the strongest London forces", "Water is ionic"], "H₂S, H₂Se, and H₂Te rise with size (dispersion forces), but H₂O is far above the trend because of hydrogen bonding.", { t: "table", title: "Boiling points of Group 16 hydrides", head: ["Compound", "H₂O", "H₂S", "H₂Se", "H₂Te"], rows: [["Boiling point (°C)", "100", "−60", "−41", "−2"]] }],
    ["Which intermolecular forces are present between molecules of HCl?", "Dipole–dipole forces and London dispersion forces", ["Only London dispersion forces", "Hydrogen bonding", "Ionic bonding"], "HCl is polar, but H is bonded to Cl, not N, O, or F, so it has dipole–dipole forces but no hydrogen bonds. All molecules have dispersion forces."]
  ]],
  ["3.2", "Properties of Solids", [
    ["Diamond has a very high melting point because", "each carbon is covalently bonded to four others in a continuous network", ["it has strong hydrogen bonds", "its molecules have strong London forces", "it contains metal ions"], "Melting a covalent network solid requires breaking covalent bonds throughout the crystal."],
    ["Which substance is a molecular solid at room temperature?", "Sucrose (C₁₂H₂₂O₁₁)", ["SiO₂", "NaCl", "Cu"], "Sucrose molecules are held by intermolecular forces. SiO₂ is a covalent network, NaCl is ionic, and Cu is metallic."],
    ["Graphite conducts electricity but diamond does not because in graphite", "each carbon has one electron delocalized across its layer", ["the atoms are ions", "there are hydrogen bonds between layers", "the carbon atoms are sp³ hybridized"], "Graphite's sp² carbons leave one p electron per atom free to move within the sheets."],
    ["An unknown solid is soft, has a low melting point, and does not conduct electricity when solid or melted. It is most likely", "a molecular solid", ["an ionic solid", "a metallic solid", "a covalent network solid"], "Weak intermolecular forces and no mobile charges point to a molecular solid."]
  ]],
  ["3.3", "Solids, Liquids, and Gases", [
    ["Which best explains why gases are easily compressed but liquids are not?", "Gas particles are far apart compared with their size, while liquid particles are close together", ["Gas particles are smaller than liquid particles", "Liquid particles have no intermolecular forces", "Gas particles do not move"], "Most of a gas's volume is empty space; liquid particles are already touching."],
    ["As a liquid is cooled to its freezing point and freezes, its particles", "lose freedom of motion and settle into fixed positions", ["move farther apart", "gain kinetic energy", "break their covalent bonds"], "Freezing releases energy as intermolecular attractions lock particles into a lattice."],
    ["Ice is less dense than liquid water because", "hydrogen bonding holds ice molecules in an open hexagonal lattice", ["ice molecules move faster", "ice contains air bubbles in all cases", "water molecules are larger in the solid"], "In liquid water molecules can pack more closely. This is why ice floats."],
    ["Which substance has the highest vapor pressure at 25°C?", "Diethyl ether, (C₂H₅)₂O", ["Water, H₂O", "Ethanol, C₂H₅OH", "Glycerol, C₃H₈O₃"], "Ether has no O–H group and cannot hydrogen bond with itself, so its weaker forces let more molecules escape."]
  ]],
  ["3.4", "Ideal Gas Law", [
    ["What volume does 1.00 mol of an ideal gas occupy at 273 K and 1.00 atm?", "22.4 L", ["1.00 L", "24.5 L", "11.2 L"], "V = nRT/P = (1.00)(0.0821)(273)/1.00 ≈ 22.4 L."],
    ["A gas at 300 K is heated to 600 K at constant volume. What happens to its pressure?", "It doubles", ["It halves", "It stays the same", "It quadruples"], "At constant n and V, pressure is proportional to Kelvin temperature."],
    ["A mixture contains 2.0 mol N₂ and 1.0 mol O₂ at a total pressure of 3.0 atm. What is the partial pressure of O₂?", "1.0 atm", ["3.0 atm", "2.0 atm", "0.33 atm"], "Mole fraction of O₂ is 1/3, so P(O₂) = (1/3)(3.0 atm) = 1.0 atm (Dalton's law)."],
    ["A gas has a density of 1.25 g/L at 273 K and 1.00 atm. What is its molar mass?", "About 28 g/mol", ["About 14 g/mol", "About 32 g/mol", "About 44 g/mol"], "M = dRT/P = (1.25)(0.0821)(273)/1.00 ≈ 28 g/mol (consistent with N₂ or CO)."]
  ]],
  ["3.5", "Kinetic Molecular Theory", [
    ["At the same temperature, which gas has the greatest average molecular speed?", "He", ["Ne", "Ar", "Kr"], "All gases at the same T have the same average kinetic energy, so the lightest particles move fastest."],
    ["The graph shows the distribution of molecular speeds for the same gas at two temperatures. Which curve is at the higher temperature?", "Curve B, which is flatter and peaks at a higher speed", ["Curve A, which has a taller peak", "Both are at the same temperature", "It cannot be determined"], "At higher T, more molecules move fast, so the curve shifts right and spreads out. The area under both curves stays the same.", { t: "line", title: "Maxwell–Boltzmann distribution", x: { min: 0, max: 1500, ticks: [0, 500, 1000, 1500], label: "Molecular speed (m/s)" }, y: { min: 0, max: 10, ticks: [0, 5, 10], label: "Fraction of molecules" }, series: [{ name: "Curve A", pts: [[0, 0], [100, 2.4], [200, 6.2], [300, 8.6], [400, 8.7], [500, 7], [600, 4.6], [700, 2.6], [800, 1.2], [900, .5], [1000, .2], [1200, 0]] }, { name: "Curve B", pts: [[0, 0], [150, 1.3], [300, 3.7], [450, 5.4], [600, 5.8], [750, 5], [900, 3.6], [1050, 2.2], [1200, 1.1], [1350, .5], [1500, .2]], k: 2 }] }],
    ["According to kinetic molecular theory, the pressure of a gas comes from", "collisions of gas particles with the container walls", ["attractions between gas particles", "the weight of the gas", "the particles' volume"], "Each collision exerts a force on the wall; more frequent or harder collisions mean higher pressure."],
    ["Kelvin temperature is directly proportional to", "the average kinetic energy of the particles", ["the speed of every particle", "the number of particles", "the volume of each particle"], "Doubling the Kelvin temperature doubles the average kinetic energy of the particles."]
  ]],
  ["3.6", "Deviation from Ideal Gas Law", [
    ["Under which conditions does a real gas behave most like an ideal gas?", "High temperature and low pressure", ["Low temperature and high pressure", "Low temperature and low pressure", "High temperature and high pressure"], "Particles are far apart (low P) and move fast enough (high T) that their volume and attractions barely matter."],
    ["At high pressure, the measured volume of a real gas is often larger than predicted because", "the particles themselves take up space", ["the particles attract each other strongly", "the particles stop moving", "the gas becomes a liquid"], "When particles are crowded, their own volume is a larger share of the container, so V is larger than ideal."],
    ["Which gas deviates most from ideal behavior at the same conditions?", "NH₃", ["He", "H₂", "Ne"], "NH₃ is polar and hydrogen bonds, so its strong intermolecular attractions cause the largest deviation."],
    ["At low temperatures, a real gas has a lower pressure than predicted by PV = nRT because", "attractions between particles reduce the force of their collisions with the walls", ["the particles have no volume", "the particles move faster", "the number of moles increases"], "Slow particles are pulled back by their neighbors and hit the walls less hard."]
  ]],
  ["3.7", "Solutions and Mixtures", [
    ["What is the molarity of a solution made by dissolving 0.50 mol of NaCl in enough water to make 250 mL of solution?", "2.0 M", ["0.125 M", "0.50 M", "1.0 M"], "M = mol ÷ L = 0.50 ÷ 0.250 = 2.0 M."],
    ["How many milliliters of 6.0 M HCl are needed to make 300. mL of 1.0 M HCl?", "50. mL", ["18 mL", "180 mL", "300. mL"], "M₁V₁ = M₂V₂ → 6.0 × V₁ = 1.0 × 300. → V₁ = 50. mL."],
    ["What is the concentration of chloride ions in 0.20 M CaCl₂?", "0.40 M", ["0.20 M", "0.10 M", "0.60 M"], "Each CaCl₂ gives 2 Cl⁻ ions, so [Cl⁻] = 2 × 0.20 = 0.40 M."],
    ["A solution is best described as", "a homogeneous mixture with uniform composition throughout", ["a pure substance", "a heterogeneous mixture", "a compound with a fixed formula"], "Solute particles are evenly spread among solvent particles."]
  ]],
  ["3.8", "Representations of Solutions", [
    ["In a particle diagram of NaCl dissolved in water, how are water molecules oriented around a Na⁺ ion?", "With their partially negative oxygen atoms pointing toward the ion", ["With their hydrogen atoms pointing toward the ion", "Randomly, with no pattern", "Bonded covalently to the ion"], "Ion–dipole attraction orients the negative end of each water molecule toward the cation."],
    ["A particle diagram shows 6 solute particles in 2 L of solution A and 6 of the same particles in 3 L of solution B. Which is true?", "Solution A is more concentrated", ["Solution B is more concentrated", "They have the same concentration", "Solution B has more solute"], "Same amount of solute in a smaller volume means higher concentration."],
    ["Around a Cl⁻ ion in water, water molecules point", "their partially positive hydrogen atoms toward the ion", ["their oxygen atoms toward the ion", "away from the ion", "in the same direction as around Na⁺"], "The positive ends of the water dipoles are attracted to the anion."],
    ["A diagram of 0.1 M MgCl₂ should show, for every Mg²⁺ ion,", "two Cl⁻ ions", ["one Cl⁻ ion", "one MgCl₂ molecule", "three Cl⁻ ions"], "MgCl₂ dissociates completely into one Mg²⁺ and two Cl⁻ ions."]
  ]],
  ["3.9", "Separation of Solutions and Mixtures Chromatography", [
    ["In paper chromatography with a nonpolar solvent, which component travels farthest?", "The least polar component", ["The most polar component", "The heaviest component", "All components travel the same distance"], "Nonpolar components interact more with the nonpolar mobile phase and less with the polar paper, so they move farther."],
    ["A spot travels 3.0 cm while the solvent front travels 6.0 cm. What is its Rf value?", "0.50", ["2.0", "3.0", "0.30"], "Rf = distance of spot ÷ distance of solvent front = 3.0 ÷ 6.0 = 0.50."],
    ["Which method is best for separating ethanol (bp 78°C) from water (bp 100°C)?", "Distillation", ["Filtration", "Paper chromatography", "Decanting"], "Distillation separates liquids with different boiling points, which reflect different intermolecular forces."],
    ["Filtration can separate", "sand from salt water", ["dissolved salt from water", "ethanol from water", "two dissolved dyes"], "Filtration removes undissolved solids; dissolved particles pass through the filter."]
  ]],
  ["3.10", "Solubility", [
    ["Which substance is most soluble in water?", "CH₃OH", ["CCl₄", "C₆H₁₄", "I₂"], "\"Like dissolves like\": methanol is polar and hydrogen bonds with water. The others are nonpolar."],
    ["Iodine (I₂) dissolves better in hexane than in water because", "both I₂ and hexane are nonpolar and interact through London dispersion forces", ["I₂ forms hydrogen bonds with hexane", "I₂ is ionic", "hexane is more polar than water"], "Nonpolar solutes mix best with nonpolar solvents."],
    ["Why is NaCl soluble in water but not in hexane?", "Water's ion–dipole attractions can make up for breaking the ionic lattice; hexane cannot", ["Hexane molecules are too small", "NaCl reacts with water", "Hexane has hydrogen bonds"], "Nonpolar hexane cannot interact strongly with ions, so dissolving would cost too much energy."],
    ["As the length of the carbon chain in an alcohol increases (methanol → hexanol), its solubility in water", "decreases, because the nonpolar part of the molecule gets larger", ["increases", "stays the same", "increases then decreases"], "The single O–H group is outweighed by a growing nonpolar chain."]
  ]],
  ["3.11", "Spectroscopy and the Electromagnetic Spectrum", [
    ["Absorption of infrared radiation by a molecule usually causes", "changes in molecular vibrations", ["electrons to leave the atom", "nuclear reactions", "electronic transitions only"], "IR matches the energy of bond vibrations; UV and visible light cause electronic transitions; microwaves cause rotations."],
    ["Which type of radiation has the highest energy per photon?", "Ultraviolet", ["Infrared", "Microwave", "Visible red light"], "Photon energy increases with frequency. UV has a higher frequency than visible, infrared, or microwave radiation."],
    ["Microwave radiation is mainly associated with", "changes in molecular rotation", ["breaking covalent bonds", "exciting inner-shell electrons", "ionizing atoms"], "Microwave photons have low energy, matching the spacing between rotational energy levels."],
    ["An atom emits a photon when an electron", "drops from a higher energy level to a lower one", ["moves to a higher energy level", "leaves the atom", "stays in the same level"], "The photon's energy equals the difference between the two levels."]
  ]],
  ["3.12", "Photoelectric Effect", [
    ["What is the energy of a photon with a frequency of 5.0 × 10¹⁴ s⁻¹? (h = 6.63 × 10⁻³⁴ J·s)", "3.3 × 10⁻¹⁹ J", ["1.3 × 10⁻⁴⁸ J", "7.5 × 10⁴⁷ J", "3.3 × 10⁻¹⁴ J"], "E = hν = (6.63 × 10⁻³⁴)(5.0 × 10¹⁴) ≈ 3.3 × 10⁻¹⁹ J."],
    ["In the photoelectric effect, increasing the intensity of light that is below the threshold frequency", "still ejects no electrons", ["ejects more electrons", "ejects faster electrons", "raises the threshold frequency"], "Each photon must individually carry enough energy. More weak photons do not add up."],
    ["As the wavelength of light increases, the energy of each photon", "decreases", ["increases", "stays the same", "doubles"], "E = hc/λ, so energy is inversely proportional to wavelength."],
    ["The photoelectric effect provided evidence that light", "behaves as particles (photons) with quantized energy", ["is only a wave", "has no energy", "travels at different speeds in a vacuum"], "Electron ejection depends on the frequency of light, not its intensity, which the wave model couldn't explain."]
  ]],
  ["3.13", "Beer-Lambert Law", [
    ["The graph shows absorbance versus concentration for a dye. What is the concentration of a sample with absorbance 0.60?", "0.30 M", ["0.20 M", "0.60 M", "0.15 M"], "The calibration line has a slope of 2.0 M⁻¹, so 0.60 ÷ 2.0 = 0.30 M.", { t: "line", title: "Calibration curve for a dye", x: { min: 0, max: 0.5, ticks: [0, 0.1, 0.2, 0.3, 0.4, 0.5], label: "Concentration (M)" }, y: { min: 0, max: 1, ticks: [0, 0.2, 0.4, 0.6, 0.8, 1], label: "Absorbance" }, series: [{ name: "Absorbance", pts: [[0, 0], [0.1, 0.2], [0.2, 0.4], [0.3, 0.6], [0.4, 0.8]], dots: true }] }],
    ["According to the Beer–Lambert law (A = εbc), if the concentration of a solution doubles, the absorbance", "doubles", ["halves", "stays the same", "quadruples"], "Absorbance is directly proportional to concentration."],
    ["A student forgets to wipe fingerprints off the cuvette before measuring a sample. How does this affect the calculated concentration?", "It is too high, because the fingerprints absorb light and raise the absorbance", ["It is too low", "It is unaffected", "It becomes zero"], "Extra absorbance is interpreted as more solute."],
    ["Why is the spectrophotometer set to the wavelength of maximum absorbance for the solute?", "It gives the greatest sensitivity to changes in concentration", ["The solute stops absorbing at other wavelengths", "It makes the cuvette transparent", "It changes the path length"], "At λmax, the molar absorptivity ε is largest, so A changes the most per change in concentration."]
  ]]
]},
{ n: 4, name: "Chemical Reactions", weight: "7–9%", topics: [
  ["4.1", "Introduction for Reactions", [
    ["Which observation is the best evidence that a chemical reaction has occurred?", "A gas forms when two solutions are mixed", ["Ice melts", "Sugar dissolves in water", "Water boils"], "A new substance (the gas) was produced. The others are physical changes."],
    ["Which is a balanced equation for the combustion of methane?", "CH₄ + 2 O₂ → CO₂ + 2 H₂O", ["CH₄ + O₂ → CO₂ + H₂O", "CH₄ + 3 O₂ → CO₂ + 2 H₂O", "2 CH₄ + O₂ → 2 CO₂ + H₂O"], "Balanced: 1 C, 4 H, and 4 O atoms on each side."],
    ["In a balanced chemical equation, what is conserved?", "The number of atoms of each element", ["The number of molecules", "The number of moles of substances", "The volume of substances"], "Atoms are rearranged, not created or destroyed, so mass is also conserved."],
    ["When balanced with the smallest whole numbers, what is the coefficient of O₂ in the reaction: __C₃H₈ + __O₂ → __CO₂ + __H₂O?", "5", ["3", "4", "7"], "C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O. The products have 6 + 4 = 10 O atoms."]
  ]],
  ["4.2", "Net Ionic Equations", [
    ["What is the net ionic equation for the reaction of AgNO₃(aq) with NaCl(aq)?", "Ag⁺(aq) + Cl⁻(aq) → AgCl(s)", ["Na⁺(aq) + NO₃⁻(aq) → NaNO₃(aq)", "AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)", "Ag⁺(aq) + NO₃⁻(aq) → AgNO₃(s)"], "Na⁺ and NO₃⁻ are spectator ions. Only the ions that form the precipitate appear."],
    ["What is the net ionic equation for the reaction of HCl(aq) with NaOH(aq)?", "H⁺(aq) + OH⁻(aq) → H₂O(l)", ["HCl + NaOH → NaCl + H₂O", "Na⁺(aq) + Cl⁻(aq) → NaCl(s)", "H⁺(aq) + Cl⁻(aq) → HCl(aq)"], "Strong acid + strong base: the net reaction is just the formation of water."],
    ["In the reaction of Ba(NO₃)₂(aq) with Na₂SO₄(aq), which ions are spectators?", "Na⁺ and NO₃⁻", ["Ba²⁺ and SO₄²⁻", "Ba²⁺ and Na⁺", "SO₄²⁻ and NO₃⁻"], "Ba²⁺ and SO₄²⁻ form BaSO₄(s). The other ions stay dissolved and unchanged."],
    ["When acetic acid (a weak acid) reacts with NaOH(aq), how is acetic acid written in the net ionic equation?", "As the molecule CH₃COOH, because it is mostly un-ionized", ["As H⁺ and CH₃COO⁻", "It is left out as a spectator", "As CH₃COONa"], "Weak acids are written in molecular form: CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O."]
  ]],
  ["4.3", "Representations of Reactions", [
    ["A particle diagram shows 4 H₂ molecules reacting with 1 O₂ molecule. After the reaction, which particles remain?", "2 H₂O molecules and 2 H₂ molecules", ["4 H₂O molecules", "2 H₂O molecules and 1 O₂ molecule", "1 H₂O molecule and 3 H₂ molecules"], "2 H₂ + O₂ → 2 H₂O. One O₂ uses 2 H₂, leaving 2 H₂ unreacted."],
    ["A particle diagram shows 3 N₂ molecules and 3 H₂ molecules before they react by N₂ + 3 H₂ → 2 NH₃. Which is the limiting reactant?", "H₂", ["N₂", "NH₃", "Neither; they react completely"], "3 H₂ react with only 1 N₂, so H₂ runs out first and 2 N₂ are left over."],
    ["In a particle diagram, a correct representation of a balanced reaction must show", "the same number of each kind of atom before and after", ["the same number of molecules before and after", "only product particles", "atoms changing into other elements"], "Atoms are conserved, though the number of molecules can change."],
    ["A diagram of solid NaCl dissolving should show", "separate Na⁺ and Cl⁻ ions surrounded by water molecules", ["NaCl molecules floating in water", "Na and Cl atoms bonded to water", "Na₂ and Cl₂ molecules"], "Ionic solids dissociate into hydrated ions."]
  ]],
  ["4.4", "Physical and Chemical Changes", [
    ["Which process is a chemical change?", "Iron rusting", ["Water freezing", "Salt dissolving in water", "Dry ice subliming"], "Rusting forms a new substance (iron oxide) by breaking and forming chemical bonds."],
    ["Why is dissolving NaCl in water sometimes hard to classify as physical or chemical?", "Ionic bonds are broken but no new substances with new bonds form; ions are just surrounded by water", ["It produces a gas", "It changes the nuclei", "It creates new covalent bonds between Na and O"], "Dissolving breaks ionic attractions and forms ion–dipole interactions, which has features of both kinds of change."],
    ["Boiling water is a physical change because", "only intermolecular forces are overcome; the H₂O molecules stay intact", ["O–H bonds are broken", "hydrogen and oxygen gases form", "energy is released"], "Steam is still H₂O."],
    ["Which process breaks covalent bonds?", "Electrolysis of water into H₂ and O₂", ["Melting ice", "Evaporating alcohol", "Dissolving sugar"], "Electrolysis breaks O–H bonds to make new substances."]
  ]],
  ["4.5", "Stoichiometry", [
    ["How many grams of H₂O form when 4.0 g of H₂ reacts completely with excess O₂? (2 H₂ + O₂ → 2 H₂O)", "36 g", ["18 g", "72 g", "4.0 g"], "4.0 g H₂ = 2.0 mol H₂ → 2.0 mol H₂O × 18 g/mol = 36 g."],
    ["For N₂ + 3 H₂ → 2 NH₃, how many moles of NH₃ can form from 6.0 mol H₂ and excess N₂?", "4.0 mol", ["2.0 mol", "6.0 mol", "12 mol"], "6.0 mol H₂ × (2 NH₃ / 3 H₂) = 4.0 mol NH₃."],
    ["If 2.0 mol Al reacts with 2.0 mol Cl₂ in 2 Al + 3 Cl₂ → 2 AlCl₃, which is the limiting reactant?", "Cl₂", ["Al", "AlCl₃", "Neither"], "2.0 mol Al needs 3.0 mol Cl₂, but only 2.0 mol is present, so Cl₂ runs out first."],
    ["A reaction has a theoretical yield of 50.0 g but produces 40.0 g of product. What is the percent yield?", "80.0%", ["125%", "20.0%", "90.0%"], "Percent yield = actual ÷ theoretical × 100 = 40.0 ÷ 50.0 × 100 = 80.0%."]
  ]],
  ["4.6", "Introduction to Titration", [
    ["It takes 25.0 mL of 0.100 M NaOH to neutralize 10.0 mL of HCl. What is the concentration of the HCl?", "0.250 M", ["0.100 M", "0.0400 M", "2.50 M"], "mol NaOH = 0.0250 × 0.100 = 0.00250 mol = mol HCl; 0.00250 ÷ 0.0100 L = 0.250 M."],
    ["At the equivalence point of a titration,", "the moles of titrant added exactly react with the moles of analyte", ["the pH is always 7", "the indicator has not changed color", "all the solution has evaporated"], "The amounts are stoichiometrically equivalent. The pH at that point depends on the acid and base."],
    ["A student leaves an air bubble in the buret tip that comes out during the titration. How does this affect the calculated analyte concentration?", "It is too high, because the recorded titrant volume is larger than what was actually added", ["It is too low", "It is unaffected", "It makes the equivalence point impossible to find"], "The bubble's volume is counted as titrant that never reacted."],
    ["How many mL of 0.200 M H₂SO₄ are needed to neutralize 40.0 mL of 0.100 M NaOH?", "10.0 mL", ["20.0 mL", "40.0 mL", "5.00 mL"], "mol OH⁻ = 0.00400; H₂SO₄ gives 2 H⁺, so mol H₂SO₄ = 0.00200; V = 0.00200 ÷ 0.200 = 0.0100 L = 10.0 mL."]
  ]],
  ["4.7", "Types of Chemical Reactions", [
    ["Classify the reaction: Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)", "Oxidation–reduction", ["Acid–base", "Precipitation", "Decomposition only"], "Zn loses electrons (oxidized) and Cu²⁺ gains them (reduced)."],
    ["Classify the reaction: Pb(NO₃)₂(aq) + 2 KI(aq) → PbI₂(s) + 2 KNO₃(aq)", "Precipitation", ["Redox", "Combustion", "Acid–base"], "An insoluble solid (PbI₂) forms from two soluble compounds; no oxidation numbers change."],
    ["Which is a combustion reaction?", "C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O", ["NaOH + HCl → NaCl + H₂O", "CaCO₃ → CaO + CO₂", "AgNO₃ + NaCl → AgCl + NaNO₃"], "Combustion of a hydrocarbon or alcohol in O₂ gives CO₂ and H₂O."],
    ["Which salt is insoluble in water?", "BaSO₄", ["NaNO₃", "KCl", "NH₄Br"], "All sodium, potassium, ammonium, and nitrate salts are soluble. BaSO₄ is a classic insoluble sulfate."]
  ]],
  ["4.8", "Introduction to Acid-Base Reactions", [
    ["In the reaction NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, which species acts as a Brønsted–Lowry acid?", "H₂O", ["NH₃", "OH⁻", "None"], "Water donates a proton (H⁺) to NH₃."],
    ["What is the conjugate base of H₂PO₄⁻?", "HPO₄²⁻", ["H₃PO₄", "PO₄³⁻", "H₂PO₄"], "A conjugate base has one fewer H⁺ than the acid."],
    ["Water is described as amphoteric because it", "can act as either an acid or a base", ["is neutral", "conducts electricity", "is a strong electrolyte"], "Water donates H⁺ to bases like NH₃ and accepts H⁺ from acids like HCl."],
    ["In the reaction HCl + H₂O → H₃O⁺ + Cl⁻, which is the conjugate acid–base pair?", "HCl and Cl⁻", ["HCl and H₂O", "H₃O⁺ and Cl⁻", "H₂O and Cl⁻"], "HCl loses an H⁺ to become Cl⁻. (H₂O and H₃O⁺ are the other pair.)"]
  ]],
  ["4.9", "Oxidation-Reduction (Redox) Reactions", [
    ["What is the oxidation number of S in H₂SO₄?", "+6", ["+4", "+2", "−2"], "2(+1) + S + 4(−2) = 0 → S = +6."],
    ["In 2 Na + Cl₂ → 2 NaCl, which species is oxidized?", "Na", ["Cl₂", "NaCl", "Neither"], "Na goes from 0 to +1, losing an electron. Cl goes from 0 to −1."],
    ["In a redox reaction, the reducing agent is the species that", "is oxidized and gives electrons to another species", ["is reduced and gains electrons", "accepts protons", "donates protons"], "The reducing agent causes something else to be reduced by giving it electrons."],
    ["Balance in acidic solution: MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺. How many Fe²⁺ react with each MnO₄⁻?", "5", ["1", "3", "8"], "Mn goes from +7 to +2 (gains 5 e⁻); each Fe²⁺ loses 1 e⁻, so 5 Fe²⁺ are needed: MnO₄⁻ + 5 Fe²⁺ + 8 H⁺ → Mn²⁺ + 5 Fe³⁺ + 4 H₂O."]
  ]]
]}
);
