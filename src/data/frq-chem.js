// AP Chemistry: free-response questions, one per CED topic (Claude version only).
// Each topic: [stimulus, [[part prompt, rubric], ...]]. Every part is worth 1 point; Claude grades only against the rubric.
// Numeric rubrics accept answers within normal rounding (±1 in the last significant figure) with correct units.
window.AP_FRQ = window.AP_FRQ || {};
AP_FRQ.chem = {
"1.1": ["A student has a 36.0 g sample of water, H₂O (molar mass 18.02 g/mol).", [
  ["Calculate the number of moles of water in the sample.", "Earns the point for 2.00 mol (36.0 g ÷ 18.02 g/mol). Accept 1.998 or 2.0 mol."],
  ["Calculate the number of water molecules in the sample.", "Earns the point for about 1.20 × 10²⁴ molecules (2.00 mol × 6.022 × 10²³). Accept a correct value based on the student's own mole answer from part A."],
  ["Calculate the number of hydrogen atoms in the sample.", "Earns the point for about 2.41 × 10²⁴ H atoms (two H atoms per molecule). Accept a consistent answer based on the student's part B."]
]],
"1.2": ["A mass spectrum of chlorine shows two peaks: mass 35 amu with a relative abundance of 75.8%, and mass 37 amu with a relative abundance of 24.2%.", [
  ["Calculate the average atomic mass of chlorine.", "Earns the point for about 35.5 amu (35 × 0.758 + 37 × 0.242 = 35.48). Accept 35.4–35.5."],
  ["Explain why the average atomic mass is closer to 35 than to 37.", "Earns the point for explaining that the chlorine-35 isotope is much more abundant, so it contributes more to the weighted average."],
  ["Describe what the two peaks show about the atoms of chlorine.", "Earns the point for describing that chlorine has two isotopes with the same number of protons but different numbers of neutrons (18 vs. 20)."]
]],
"1.3": ["A compound is 40.0% carbon, 6.7% hydrogen, and 53.3% oxygen by mass. Its molar mass is 180. g/mol.", [
  ["Determine the empirical formula of the compound.", "Earns the point for CH₂O (in 100 g: 3.33 mol C, 6.6 mol H, 3.33 mol O → 1:2:1). Work showing mole ratios is expected but a correct formula with reasonable support earns it."],
  ["Determine the molecular formula of the compound.", "Earns the point for C₆H₁₂O₆ (180 ÷ 30 = 6)."],
  ["Explain why the law of definite proportions means every sample of this compound has the same percent composition.", "Earns the point for explaining that a pure compound always has the same elements in the same fixed mass ratio, regardless of sample size or source."]
]],
"1.4": ["A 10.0 g mixture of sodium chloride and sand is stirred into water. The sand is filtered out, and the water is evaporated, leaving 3.5 g of NaCl.", [
  ["Calculate the percent by mass of NaCl in the mixture.", "Earns the point for 35% (3.5 ÷ 10.0 × 100)."],
  ["Explain why filtration separates the sand from the NaCl.", "Earns the point for explaining that NaCl dissolves in water and passes through the filter, while sand is insoluble and is trapped."],
  ["Predict how the calculated percentage would change if the NaCl were not completely dry when weighed, and explain.", "Earns the point for predicting the percentage would be too high because remaining water adds mass that is counted as NaCl."]
]],
"1.5": ["Consider a sulfur atom (atomic number 16) and a sulfide ion, S²⁻.", [
  ["Write the full ground-state electron configuration of a sulfur atom.", "Earns the point for 1s² 2s² 2p⁶ 3s² 3p⁴."],
  ["Write the electron configuration of the sulfide ion, S²⁻.", "Earns the point for 1s² 2s² 2p⁶ 3s² 3p⁶ (or [Ne] 3s² 3p⁶, or 'same as argon')."],
  ["Explain, using Coulomb's law, why a 1s electron in sulfur is harder to remove than a 3p electron.", "Earns the point for explaining that the 1s electron is much closer to the nucleus (and less shielded), so the attraction to the nucleus is much stronger."]
]],
"1.6": ["The photoelectron spectrum (PES) of sodium (1s² 2s² 2p⁶ 3s¹) is analyzed.", [
  ["Identify how many peaks appear in the PES of sodium.", "Earns the point for 4 peaks (1s, 2s, 2p, 3s)."],
  ["Identify which peak has the lowest binding energy and explain why.", "Earns the point for the 3s peak, because that electron is farthest from the nucleus and most shielded, so it's least attracted."],
  ["Describe how the relative heights of the 2p and 3s peaks compare, and why.", "Earns the point for describing that the 2p peak is 6 times as tall as the 3s peak because peak height reflects the number of electrons (6 vs. 1)."]
]],
"1.7": ["Consider sodium (Na) and magnesium (Mg), which are in the same period.", [
  ["Identify which element has the larger atomic radius.", "Earns the point for sodium (Na)."],
  ["Identify which element has the higher first ionization energy.", "Earns the point for magnesium (Mg)."],
  ["Explain the trend in part B using atomic structure.", "Earns the point for explaining that Mg has more protons (greater nuclear charge) with electrons in the same shell and similar shielding, so its outer electrons are held more strongly."]
]],
"1.8": ["Main-group elements form ions by gaining or losing valence electrons.", [
  ["Write the formula of the ionic compound formed by magnesium and nitrogen.", "Earns the point for Mg₃N₂."],
  ["Explain why magnesium forms a 2+ ion.", "Earns the point for explaining that Mg has 2 valence electrons; losing them gives a noble-gas (neon) configuration."],
  ["Predict the formula of the compound formed by calcium and chlorine, and justify.", "Earns the point for CaCl₂, because Ca forms Ca²⁺ and Cl forms Cl⁻, so two Cl⁻ balance one Ca²⁺."]
]],
"2.1": ["Sodium chloride (NaCl), methane (CH₄), and copper (Cu) are three substances with different types of bonding.", [
  ["Identify the type of bonding in NaCl.", "Earns the point for ionic bonding."],
  ["Identify the type of bonding in copper.", "Earns the point for metallic bonding (cations in a sea of delocalized electrons)."],
  ["Explain how electronegativity difference determines whether a bond is ionic or covalent.", "Earns the point for explaining that a large electronegativity difference leads to electron transfer (ionic), while a small difference leads to electron sharing (covalent); intermediate differences give polar covalent bonds."]
]],
"2.2": ["A graph shows potential energy versus internuclear distance for two hydrogen atoms forming H₂.", [
  ["Identify what the internuclear distance at the minimum energy represents.", "Earns the point for the bond length."],
  ["Describe what the depth of the energy well represents.", "Earns the point for the bond energy (energy needed to break the bond)."],
  ["Explain why the potential energy increases sharply when atoms get very close.", "Earns the point for explaining that the positively charged nuclei (and electron clouds) repel each other strongly at short distances."]
]],
"2.3": ["NaCl melts at 801°C, while MgO melts at 2,852°C.", [
  ["Identify the charges of the ions in MgO.", "Earns the point for Mg²⁺ and O²⁻."],
  ["Explain why MgO has a much higher melting point than NaCl.", "Earns the point for explaining that MgO's ions have larger charges (2+/2−) and are smaller, so Coulombic attractions (lattice energy) are much stronger."],
  ["Explain why ionic solids are brittle.", "Earns the point for explaining that shifting a layer brings like-charged ions next to each other, which repel and cause the crystal to break."]
]],
"2.4": ["Steel is an alloy of iron with small amounts of carbon. Brass is an alloy of copper and zinc.", [
  ["Identify the type of alloy steel is.", "Earns the point for interstitial alloy (small carbon atoms fill holes between iron atoms)."],
  ["Describe why brass is a substitutional alloy.", "Earns the point for describing that zinc atoms, similar in size to copper atoms, replace copper atoms in the lattice."],
  ["Explain why steel is less malleable than pure iron.", "Earns the point for explaining that carbon atoms in the gaps block layers of iron atoms from sliding past each other."]
]],
"2.5": ["Consider the molecules CO₂ and NH₃.", [
  ["Describe the Lewis structure of CO₂.", "Earns the point for describing C in the center with a double bond to each O, and two lone pairs on each O (no lone pairs on C). A drawing written in text is acceptable."],
  ["Describe the Lewis structure of NH₃.", "Earns the point for describing N in the center, single bonds to three H atoms, and one lone pair on N."],
  ["Identify the total number of valence electrons in CO₂.", "Earns the point for 16."]
]],
"2.6": ["The nitrate ion, NO₃⁻, has three resonance structures.", [
  ["Describe what resonance structures represent.", "Earns the point for describing that the actual structure is an average (hybrid) of the structures, with electrons delocalized; the molecule does not switch between them."],
  ["Determine the average N–O bond order in nitrate.", "Earns the point for 4/3 (about 1.33): one double bond shared among three bonds."],
  ["Calculate the formal charge on nitrogen in any resonance structure of nitrate.", "Earns the point for +1 (5 valence − 0 nonbonding − 4 bonds = +1)."]
]],
"2.7": ["Consider NH₃, CO₂, and BF₃.", [
  ["Identify the molecular geometry of NH₃ and its approximate bond angle.", "Earns the point for trigonal pyramidal and about 107° (accept <109.5°)."],
  ["Identify the hybridization of the central atom in CO₂.", "Earns the point for sp."],
  ["Explain why BF₃ is nonpolar even though its B–F bonds are polar.", "Earns the point for explaining that the trigonal planar shape is symmetrical, so the bond dipoles cancel."]
]],
"3.1": ["The boiling points of CH₄, NH₃, and H₂O are −162°C, −33°C, and 100°C.", [
  ["Identify the strongest intermolecular force in CH₄.", "Earns the point for London dispersion forces."],
  ["Explain why H₂O has a higher boiling point than NH₃.", "Earns the point for explaining that water forms more/stronger hydrogen bonds (O is more electronegative and each H₂O can form up to four H bonds), so more energy is needed to separate molecules."],
  ["Explain why Br₂ has a higher boiling point than Cl₂.", "Earns the point for explaining that Br₂ has more electrons (larger, more polarizable electron cloud), so its London dispersion forces are stronger."]
]],
"3.2": ["Diamond, ice, and sodium chloride are all solids.", [
  ["Identify the type of solid diamond is.", "Earns the point for covalent network solid."],
  ["Explain why diamond has a very high melting point.", "Earns the point for explaining that melting requires breaking strong covalent bonds throughout the network."],
  ["Explain why NaCl conducts electricity when molten but not as a solid.", "Earns the point for explaining that ions are fixed in place in the solid but can move freely when molten."]
]],
"3.3": ["A sample of water exists as solid, liquid, and gas at different temperatures.", [
  ["Describe the arrangement and motion of particles in a liquid.", "Earns the point for describing particles close together but able to move/slide past each other; no fixed positions."],
  ["Describe the arrangement of particles in a gas.", "Earns the point for describing particles far apart, moving rapidly and randomly, with negligible attractions."],
  ["Explain why gases are much more compressible than liquids.", "Earns the point for explaining that most of a gas is empty space between particles, so they can be pushed closer together."]
]],
"3.4": ["A 2.00 L container holds a gas at 1.00 atm and 300. K. (R = 0.08206 L·atm/mol·K)", [
  ["Calculate the number of moles of gas.", "Earns the point for 0.0812 mol (n = PV/RT = 2.00 / (0.08206 × 300.))."],
  ["Predict the new pressure if the temperature is raised to 450. K at constant volume.", "Earns the point for 1.50 atm (P ∝ T)."],
  ["Explain the result of part B using particle behavior.", "Earns the point for explaining that particles move faster at higher temperature and collide with the walls more often and with more force, increasing pressure."]
]],
"3.5": ["Helium and argon gases are in separate containers at the same temperature.", [
  ["Compare the average kinetic energies of the He and Ar atoms.", "Earns the point for stating they are equal because average kinetic energy depends only on temperature."],
  ["Identify which gas has the higher average speed, and explain.", "Earns the point for helium, because it has smaller mass, so it must move faster to have the same kinetic energy (KE = ½mv²)."],
  ["Describe how a Maxwell-Boltzmann distribution changes when temperature increases.", "Earns the point for describing that the curve flattens and spreads to higher speeds (peak shifts right and lowers)."]
]],
"3.6": ["Real gases deviate from ideal behavior under some conditions.", [
  ["Identify the conditions under which gases deviate most from ideal behavior.", "Earns the point for high pressure and low temperature."],
  ["Explain why attractive forces make a real gas's pressure lower than predicted.", "Earns the point for explaining that attractions between particles reduce the force and frequency of collisions with the container walls."],
  ["Explain why particle volume makes a real gas's volume greater than predicted at high pressure.", "Earns the point for explaining that the particles themselves occupy space, so the free volume is less than the container, and the real volume is greater than the ideal volume predicted."]
]],
"3.7": ["A student dissolves 5.85 g of NaCl (molar mass 58.44 g/mol) in enough water to make 250. mL of solution.", [
  ["Calculate the molarity of the solution.", "Earns the point for 0.400 M (0.100 mol ÷ 0.250 L)."],
  ["Calculate the concentration after 50.0 mL of this solution is diluted to 200. mL.", "Earns the point for 0.100 M (M₁V₁ = M₂V₂). Accept consistent use of the student's own part A answer."],
  ["Explain why the number of moles of NaCl does not change during dilution.", "Earns the point for explaining that only solvent is added, so the amount of solute is the same; it is spread over a larger volume."]
]],
"3.8": ["A particle diagram shows NaCl dissolved in water.", [
  ["Describe how water molecules orient around a Na⁺ ion.", "Earns the point for describing the partially negative oxygen ends facing the Na⁺ ion."],
  ["Describe how water molecules orient around a Cl⁻ ion.", "Earns the point for describing the partially positive hydrogen ends facing the Cl⁻ ion."],
  ["Identify the type of attraction between the ions and water.", "Earns the point for ion-dipole attractions."]
]],
"3.9": ["A paper chromatography experiment separates a dye mixture using water as the mobile phase. A polar dye travels a short distance, while a less polar dye travels farther.", [
  ["Explain why a dye that is more attracted to the stationary phase travels a shorter distance.", "Earns the point for explaining that stronger attraction to the paper (stationary phase) holds the dye back so it moves more slowly with the solvent."],
  ["Calculate the Rf value of a dye that traveled 3.0 cm when the solvent traveled 6.0 cm.", "Earns the point for 0.50."],
  ["Describe how distillation separates a mixture of two liquids.", "Earns the point for describing heating the mixture so the more volatile liquid (lower boiling point, weaker IMFs) evaporates first and is condensed and collected."]
]],
"3.10": ["NaCl dissolves in water but not in hexane (C₆H₁₄). Iodine (I₂) dissolves better in hexane than in water.", [
  ["Explain why NaCl dissolves in water.", "Earns the point for explaining that ion-dipole attractions between ions and polar water molecules are strong enough to overcome the ionic attractions."],
  ["Explain why I₂ dissolves in hexane.", "Earns the point for explaining that both are nonpolar and interact through London dispersion forces ('like dissolves like')."],
  ["Explain why NaCl does not dissolve in hexane.", "Earns the point for explaining that nonpolar hexane can't form strong attractions with ions, so it can't overcome the ionic lattice."]
]],
"3.11": ["Different regions of the electromagnetic spectrum cause different changes in molecules.", [
  ["Identify the type of molecular change caused by infrared radiation.", "Earns the point for molecular vibrations."],
  ["Identify the type of change caused by ultraviolet/visible radiation.", "Earns the point for electronic transitions (electrons moving to higher energy levels)."],
  ["Explain why microwave radiation causes molecular rotations but not electronic transitions.", "Earns the point for explaining that microwave photons have low energy, only enough to change rotational energy, not enough to excite electrons."]
]],
"3.12": ["Light of wavelength 500. nm strikes a metal surface. (h = 6.626 × 10⁻³⁴ J·s, c = 3.00 × 10⁸ m/s)", [
  ["Calculate the energy of one photon of this light.", "Earns the point for 3.98 × 10⁻¹⁹ J (E = hc/λ with λ = 5.00 × 10⁻⁷ m)."],
  ["Explain why increasing light intensity below the threshold frequency does not eject electrons.", "Earns the point for explaining that each photon's energy depends on frequency, not intensity; if each photon has too little energy, more photons won't eject electrons."],
  ["Describe what happens to the kinetic energy of ejected electrons if the frequency increases.", "Earns the point for describing that kinetic energy increases (photon energy minus the work function)."]
]],
"3.13": ["A solution has absorbance 0.50 in a 1.0 cm cuvette. The molar absorptivity is 5.0 × 10³ M⁻¹cm⁻¹.", [
  ["Calculate the concentration of the solution.", "Earns the point for 1.0 × 10⁻⁴ M (c = A / εb)."],
  ["Predict how absorbance changes if concentration doubles.", "Earns the point for absorbance doubles (to 1.0) because absorbance is directly proportional to concentration."],
  ["Explain the effect of fingerprints on the cuvette on the calculated concentration.", "Earns the point for explaining that fingerprints absorb/scatter light, raising measured absorbance, so the calculated concentration would be too high."]
]],
"4.1": ["When a student mixes two clear solutions, a yellow solid forms and the mixture warms.", [
  ["Identify two pieces of evidence that a chemical reaction occurred.", "Earns the point for identifying two: precipitate forms, color change, temperature change."],
  ["Explain why evidence such as a color change does not always prove a chemical reaction occurred.", "Earns the point for explaining that some physical changes can also change color or temperature (e.g., dissolving, mixing), so chemical changes are confirmed by new substances."],
  ["Describe what happens to atoms during a chemical reaction.", "Earns the point for describing that atoms are rearranged into new substances; bonds are broken and formed; atoms are conserved."]
]],
"4.2": ["Aqueous solutions of silver nitrate and sodium chloride are mixed, and a white precipitate forms.", [
  ["Write the net ionic equation for the reaction.", "Earns the point for Ag⁺(aq) + Cl⁻(aq) → AgCl(s)."],
  ["Identify the spectator ions.", "Earns the point for Na⁺ and NO₃⁻."],
  ["Explain why spectator ions are left out of the net ionic equation.", "Earns the point for explaining that they don't change during the reaction; they remain dissolved as ions before and after."]
]],
"4.3": ["Propane (C₃H₈) burns in oxygen to produce carbon dioxide and water.", [
  ["Write the balanced equation for the complete combustion of propane.", "Earns the point for C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O."],
  ["Explain how a balanced equation shows conservation of mass.", "Earns the point for explaining that the same number of each type of atom appears on both sides, so mass is conserved."],
  ["Calculate how many moles of O₂ are needed to burn 2.0 mol of propane.", "Earns the point for 10. mol O₂."]
]],
"4.4": ["Consider melting ice, burning wood, and boiling water.", [
  ["Identify which process is a chemical change.", "Earns the point for burning wood."],
  ["Explain why boiling water is a physical change.", "Earns the point for explaining that only intermolecular forces are overcome; the water molecules (covalent bonds) remain intact."],
  ["Describe one example of a change involving bond breaking that is hard to classify as purely physical or chemical.", "Earns the point for describing dissolving an ionic compound in water (ionic bonds broken, but ions only separate) or similar valid example."]
]],
"4.5": ["Hydrogen and oxygen react: 2 H₂ + O₂ → 2 H₂O. A student reacts 10.0 g H₂ (2.02 g/mol) with 64.0 g O₂ (32.00 g/mol).", [
  ["Identify the limiting reactant, with work.", "Earns the point for O₂ (4.95 mol H₂ would need 2.48 mol O₂; only 2.00 mol O₂ available)."],
  ["Calculate the mass of water produced.", "Earns the point for 72.1 g H₂O (2.00 mol O₂ → 4.00 mol H₂O × 18.02 g/mol). Accept 72 g."],
  ["Calculate the mass of excess reactant remaining.", "Earns the point for about 1.9 g H₂ (4.95 − 4.00 = 0.95 mol × 2.02 g/mol). Accept 1.9–2.0 g."]
]],
"4.6": ["A 25.0 mL sample of HCl is titrated with 0.100 M NaOH. The equivalence point is reached at 30.0 mL of NaOH.", [
  ["Calculate the moles of NaOH added at the equivalence point.", "Earns the point for 3.00 × 10⁻³ mol."],
  ["Calculate the concentration of the HCl.", "Earns the point for 0.120 M."],
  ["Describe what the equivalence point represents.", "Earns the point for describing that the moles of added base equal the moles of acid originally present (stoichiometric amounts)."]
]],
"4.7": ["Consider the reactions: (1) Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s); (2) HCl + NaOH → NaCl + H₂O; (3) Pb²⁺ + 2 I⁻ → PbI₂(s).", [
  ["Identify the type of each reaction.", "Earns the point for (1) redox, (2) acid-base (neutralization), (3) precipitation. All three needed."],
  ["Explain how you identified reaction (1) as a redox reaction.", "Earns the point for explaining that oxidation numbers change: Zn from 0 to +2 and Cu from +2 to 0 (electrons transferred)."],
  ["Explain why combustion of methane is classified as a redox reaction.", "Earns the point for explaining that carbon is oxidized (−4 to +4) and oxygen is reduced (0 to −2)."]
]],
"4.8": ["Ammonia reacts with water: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻.", [
  ["Identify the Brønsted-Lowry acid and base on the reactant side.", "Earns the point for H₂O as the acid (proton donor) and NH₃ as the base (proton acceptor). Both needed."],
  ["Identify one conjugate acid-base pair.", "Earns the point for NH₃/NH₄⁺ or H₂O/OH⁻."],
  ["Explain why water is described as amphoteric.", "Earns the point for explaining that water can act as either an acid (donating H⁺) or a base (accepting H⁺)."]
]],
"4.9": ["Permanganate reacts with iron(II) in acidic solution: MnO₄⁻ + 5 Fe²⁺ + 8 H⁺ → Mn²⁺ + 5 Fe³⁺ + 4 H₂O.", [
  ["Determine the oxidation number of Mn in MnO₄⁻.", "Earns the point for +7."],
  ["Identify the species oxidized and the species reduced.", "Earns the point for Fe²⁺ oxidized and MnO₄⁻ (Mn) reduced. Both needed."],
  ["Write the oxidation half-reaction.", "Earns the point for Fe²⁺ → Fe³⁺ + e⁻ (or multiplied by 5)."]
]],
"5.1": ["A student studies how quickly marble chips (CaCO₃) react with hydrochloric acid.", [
  ["Describe one way to measure the rate of this reaction.", "Earns the point for describing measuring volume of CO₂ gas produced over time, mass loss over time, or change in concentration of acid over time."],
  ["Predict and explain the effect of using powdered CaCO₃ instead of chips.", "Earns the point for predicting a faster rate because greater surface area allows more collisions."],
  ["Explain why increasing the HCl concentration increases the rate.", "Earns the point for explaining that more particles per volume means more frequent collisions."]
]],
"5.2": ["For the reaction A + B → C: Exp. 1: [A] = 0.10 M, [B] = 0.10 M, rate = 2.0 × 10⁻³ M/s. Exp. 2: [A] = 0.20 M, [B] = 0.10 M, rate = 8.0 × 10⁻³ M/s. Exp. 3: [A] = 0.10 M, [B] = 0.20 M, rate = 4.0 × 10⁻³ M/s.", [
  ["Determine the order of the reaction with respect to A, with justification.", "Earns the point for second order: doubling [A] (Exp. 1→2) quadruples the rate."],
  ["Write the rate law.", "Earns the point for rate = k[A]²[B]."],
  ["Calculate the rate constant k, with units.", "Earns the point for 2.0 M⁻²s⁻¹ (2.0 × 10⁻³ / (0.10² × 0.10))."]
]],
"5.3": ["A first-order reaction has a half-life of 20.0 minutes. A sample starts with 80.0 g of reactant.", [
  ["Calculate the mass of reactant remaining after 60.0 minutes.", "Earns the point for 10.0 g (three half-lives)."],
  ["Calculate the rate constant.", "Earns the point for 0.0347 min⁻¹ (k = 0.693 / 20.0)."],
  ["Identify the plot that gives a straight line for a first-order reaction.", "Earns the point for ln[A] versus time (slope = −k)."]
]],
"5.4": ["Consider the elementary step 2 NO₂ → N₂O₄.", [
  ["Write the rate law for this elementary step.", "Earns the point for rate = k[NO₂]²."],
  ["Identify the molecularity of the step.", "Earns the point for bimolecular."],
  ["Explain why termolecular elementary steps are rare.", "Earns the point for explaining that it's very unlikely for three particles to collide at the same time with correct orientation and enough energy."]
]],
"5.5": ["Reactions occur when particles collide.", [
  ["Identify two requirements for a collision to result in a reaction.", "Earns the point for sufficient energy (≥ activation energy) and correct orientation. Both needed."],
  ["Explain why increasing temperature increases reaction rate.", "Earns the point for explaining that more particles have energy above the activation energy, and collisions are more frequent."],
  ["Describe how a Maxwell-Boltzmann distribution shows the effect of temperature on the fraction of particles able to react.", "Earns the point for describing that at higher temperature, a larger area under the curve lies above the activation energy."]
]],
"5.6": ["An energy profile shows reactants at 50 kJ, a transition state at 120 kJ, and products at 20 kJ.", [
  ["Calculate the activation energy of the forward reaction.", "Earns the point for 70 kJ."],
  ["Calculate ΔH for the reaction and state whether it is exothermic or endothermic.", "Earns the point for −30 kJ, exothermic."],
  ["Calculate the activation energy of the reverse reaction.", "Earns the point for 100 kJ."]
]],
"5.7": ["Proposed mechanism: Step 1 (slow): NO₂ + NO₂ → NO₃ + NO. Step 2 (fast): NO₃ + CO → NO₂ + CO₂.", [
  ["Write the overall reaction.", "Earns the point for NO₂ + CO → NO + CO₂."],
  ["Identify the intermediate.", "Earns the point for NO₃."],
  ["Write the rate law predicted by this mechanism.", "Earns the point for rate = k[NO₂]² (from the slow step)."]
]],
"5.8": ["The experimental rate law for 2 NO + O₂ → 2 NO₂ is rate = k[NO]²[O₂].", [
  ["Explain why the rate law cannot be assumed from the overall equation.", "Earns the point for explaining that most reactions occur in multiple steps; rate laws must be determined experimentally or from the slow step of a mechanism."],
  ["Identify the step that determines the rate law in a mechanism.", "Earns the point for the slow (rate-determining) step."],
  ["Describe what makes a mechanism consistent with experimental data.", "Earns the point for describing that the steps add up to the overall reaction and the predicted rate law matches the experimental rate law."]
]],
"5.9": ["Mechanism for 2 NO + O₂ → 2 NO₂: Step 1 (fast equilibrium): 2 NO ⇌ N₂O₂. Step 2 (slow): N₂O₂ + O₂ → 2 NO₂.", [
  ["Write the rate law for the slow step.", "Earns the point for rate = k₂[N₂O₂][O₂]."],
  ["Explain why [N₂O₂] must be replaced in the rate law.", "Earns the point for explaining that N₂O₂ is an intermediate whose concentration can't be measured, so the rate law must be expressed using reactants."],
  ["Derive the overall rate law in terms of reactants.", "Earns the point for rate = k[NO]²[O₂], using [N₂O₂] = K[NO]² from the fast equilibrium."]
]],
"5.10": ["An energy profile for a two-step reaction shows two peaks; the first peak is higher than the second.", [
  ["Identify what the valley between the two peaks represents.", "Earns the point for an intermediate."],
  ["Identify which step is rate-determining, and justify.", "Earns the point for the first step, because it has the higher activation energy."],
  ["Describe how the profile would change if a catalyst were added.", "Earns the point for describing lower peaks (lower activation energy) with the same reactant and product energies (ΔH unchanged)."]
]],
"5.11": ["Hydrogen peroxide decomposes slowly, but adding MnO₂ or the enzyme catalase speeds it up.", [
  ["Explain how a catalyst increases reaction rate.", "Earns the point for explaining that it provides an alternative pathway with a lower activation energy."],
  ["Identify whether MnO₂ is a homogeneous or heterogeneous catalyst, and justify.", "Earns the point for heterogeneous, because it is a solid in a different phase than the aqueous reactant."],
  ["Explain why a catalyst does not appear in the overall balanced equation.", "Earns the point for explaining that it is consumed in one step and regenerated in a later step, so it's not used up."]
]],
"6.1": ["When NH₄NO₃ dissolves in water, the solution becomes cold.", [
  ["Identify whether dissolving NH₄NO₃ is exothermic or endothermic.", "Earns the point for endothermic."],
  ["Describe the direction of heat flow in this process.", "Earns the point for describing that heat flows from the surroundings (water) into the system (dissolving process)."],
  ["Explain the energy changes in terms of bonds/attractions broken and formed.", "Earns the point for explaining that more energy is required to break the ionic lattice and water-water attractions than is released by forming ion-dipole attractions."]
]],
"6.2": ["An energy diagram shows products at lower energy than reactants.", [
  ["Identify the sign of ΔH.", "Earns the point for negative (exothermic)."],
  ["Describe what happens to the temperature of the surroundings.", "Earns the point for describing that the temperature increases because energy is released."],
  ["Explain the relationship between bond energies and an exothermic reaction.", "Earns the point for explaining that more energy is released forming bonds in products than is absorbed breaking bonds in reactants."]
]],
"6.3": ["A hot piece of metal is placed in cool water in an insulated container.", [
  ["Describe the direction of heat transfer.", "Earns the point for describing heat flowing from the hotter metal to the cooler water."],
  ["Describe when heat transfer stops.", "Earns the point for describing that it stops when both reach the same temperature (thermal equilibrium)."],
  ["Explain the relationship between heat lost by the metal and heat gained by the water.", "Earns the point for explaining that they are equal in magnitude (q_metal = −q_water), by conservation of energy."]
]],
"6.4": ["A 100.0 g piece of metal at 90.0°C is placed in 100.0 g of water at 20.0°C. The final temperature is 25.0°C. (c_water = 4.18 J/g·°C)", [
  ["Calculate the heat gained by the water.", "Earns the point for 2,090 J (100.0 × 4.18 × 5.0)."],
  ["Calculate the specific heat of the metal.", "Earns the point for 0.322 J/g·°C (2,090 ÷ (100.0 × 65.0)). Accept 0.32."],
  ["Explain one assumption made in this calculation.", "Earns the point for explaining that no heat is lost to the surroundings or container (heat lost by metal = heat gained by water)."]
]],
"6.5": ["Ice at 0°C is melted. (ΔH_fus = 6.01 kJ/mol; molar mass of H₂O = 18.02 g/mol)", [
  ["Calculate the energy needed to melt 36.0 g of ice.", "Earns the point for 12.0 kJ (2.00 mol × 6.01 kJ/mol)."],
  ["Explain why temperature stays constant while ice melts.", "Earns the point for explaining that added energy is used to overcome intermolecular attractions (hydrogen bonds), not to increase kinetic energy."],
  ["Explain why ΔH_vap is much larger than ΔH_fus for water.", "Earns the point for explaining that vaporization requires completely separating molecules (overcoming nearly all IMFs), while melting only partially disrupts them."]
]],
"6.6": ["CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l), ΔH = −890. kJ/mol.", [
  ["Calculate the heat released when 32.0 g of CH₄ (16.04 g/mol) burns.", "Earns the point for about 1,780 kJ released (2.00 mol × 890)."],
  ["Predict ΔH for 2 CO₂ + 4 H₂O → 2 CH₄ + 4 O₂.", "Earns the point for +1,780 kJ (reversed and doubled)."],
  ["Explain why ΔH depends on the physical states of products.", "Earns the point for explaining that phase changes involve energy; e.g., forming liquid water releases more energy than forming water vapor."]
]],
"6.7": ["H₂ + Cl₂ → 2 HCl. Bond enthalpies: H–H 436 kJ/mol, Cl–Cl 242 kJ/mol, H–Cl 431 kJ/mol.", [
  ["Calculate ΔH for the reaction.", "Earns the point for −184 kJ/mol ((436 + 242) − 2(431))."],
  ["Explain why breaking bonds requires energy.", "Earns the point for explaining that atoms in a bond are attracted to each other; energy is needed to overcome the attraction."],
  ["Identify whether the reaction is exothermic or endothermic.", "Earns the point for exothermic."]
]],
"6.8": ["ΔH_f°: CH₄(g) = −74.8 kJ/mol, CO₂(g) = −393.5 kJ/mol, H₂O(l) = −285.8 kJ/mol.", [
  ["Identify the standard enthalpy of formation of O₂(g).", "Earns the point for 0 kJ/mol (element in its standard state)."],
  ["Calculate ΔH° for CH₄ + 2 O₂ → CO₂ + 2 H₂O(l).", "Earns the point for −890.3 kJ/mol."],
  ["Describe the meaning of a standard enthalpy of formation.", "Earns the point for describing the enthalpy change when 1 mole of a compound forms from its elements in their standard states."]
]],
"6.9": ["Given: C(s) + O₂(g) → CO₂(g), ΔH = −393.5 kJ; CO(g) + ½ O₂(g) → CO₂(g), ΔH = −283.0 kJ.", [
  ["Calculate ΔH for C(s) + ½ O₂(g) → CO(g).", "Earns the point for −110.5 kJ."],
  ["Describe how you manipulated the equations.", "Earns the point for describing reversing the second equation (changing its sign) and adding it to the first."],
  ["Explain why Hess's law works.", "Earns the point for explaining that enthalpy is a state function; the total change depends only on initial and final states, not the path."]
]],
"7.1": ["N₂O₄(g) ⇌ 2 NO₂(g) reaches equilibrium in a sealed flask.", [
  ["Describe what is true about the rates of the forward and reverse reactions at equilibrium.", "Earns the point for stating they are equal."],
  ["Describe what is true about the concentrations at equilibrium.", "Earns the point for stating they stay constant (not necessarily equal)."],
  ["Explain why equilibrium is described as dynamic.", "Earns the point for explaining that both reactions continue to occur at the same rate even though concentrations don't change."]
]],
"7.2": ["A reaction mixture has Q = 0.50 and K = 2.0.", [
  ["Predict the direction the reaction will proceed.", "Earns the point for forward (toward products)."],
  ["Justify your prediction.", "Earns the point for explaining that Q < K, so the ratio of products to reactants must increase to reach equilibrium."],
  ["Describe what happens if Q = K.", "Earns the point for describing that the system is at equilibrium and no net change occurs."]
]],
"7.3": ["N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g).", [
  ["Write the equilibrium constant expression Kc.", "Earns the point for Kc = [NH₃]² / ([N₂][H₂]³)."],
  ["Explain why pure solids and liquids are left out of K expressions.", "Earns the point for explaining that their concentrations (activities) are constant and don't change."],
  ["Write the K expression for CaCO₃(s) ⇌ CaO(s) + CO₂(g).", "Earns the point for K = [CO₂] (or Kp = P_CO₂)."]
]],
"7.4": ["For N₂O₄ ⇌ 2 NO₂ at a certain temperature, equilibrium concentrations are [N₂O₄] = 0.0400 M and [NO₂] = 0.0200 M.", [
  ["Calculate Kc.", "Earns the point for 0.0100 (0.0200² ÷ 0.0400)."],
  ["Identify whether reactants or products are favored at this temperature.", "Earns the point for reactants (K < 1)."],
  ["Predict the value of Kc for 2 NO₂ ⇌ N₂O₄.", "Earns the point for 100. (1/K)."]
]],
"7.5": ["Reaction X has K = 5 × 10¹⁵. Reaction Y has K = 3 × 10⁻¹².", [
  ["Identify which reaction strongly favors products.", "Earns the point for Reaction X."],
  ["Describe the composition of the equilibrium mixture for Reaction Y.", "Earns the point for describing mostly reactants with very little product."],
  ["Explain whether a large K means a reaction is fast.", "Earns the point for explaining that no: K describes the extent (thermodynamics), not the rate (kinetics)."]
]],
"7.6": ["For A ⇌ 2 B, K = 4.0.", [
  ["Calculate K for 2 B ⇌ A.", "Earns the point for 0.25."],
  ["Calculate K for 2 A ⇌ 4 B.", "Earns the point for 16."],
  ["Describe how K changes when two reactions are added.", "Earns the point for describing that the K values are multiplied."]
]],
"7.7": ["H₂(g) + I₂(g) ⇌ 2 HI(g), K = 64 at a certain temperature. Initially [H₂] = [I₂] = 0.100 M and no HI is present.", [
  ["Set up the ICE table equilibrium expression.", "Earns the point for 64 = (2x)² / ((0.100 − x)(0.100 − x)) or equivalent."],
  ["Calculate the equilibrium concentration of HI.", "Earns the point for 0.160 M (x = 0.0800)."],
  ["Calculate the equilibrium concentration of H₂.", "Earns the point for 0.020 M."]
]],
"7.8": ["For A₂(g) ⇌ 2 A(g) in a 1.0 L container, a particle diagram at equilibrium shows 2 A₂ molecules and 4 A atoms. Each particle represents 0.10 mol.", [
  ["Calculate [A₂] and [A] at equilibrium.", "Earns the point for [A₂] = 0.20 M and [A] = 0.40 M."],
  ["Calculate K.", "Earns the point for 0.80 (0.40² ÷ 0.20)."],
  ["Explain how a particle diagram could show that the system is not at equilibrium.", "Earns the point for explaining that if the ratio of particles gives Q ≠ K (or the numbers keep changing over time), the system isn't at equilibrium."]
]],
"7.9": ["N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), ΔH = −92 kJ.", [
  ["Predict the effect of adding N₂ on the amount of NH₃.", "Earns the point for more NH₃ (shift right)."],
  ["Predict the effect of increasing temperature on K, and explain.", "Earns the point for K decreases, because the forward reaction is exothermic, so raising temperature shifts toward reactants."],
  ["Predict the effect of decreasing the container volume, and explain.", "Earns the point for a shift right (more NH₃) because there are fewer moles of gas on the product side (2 vs. 4)."]
]],
"7.10": ["A system at equilibrium is disturbed by adding more reactant.", [
  ["Describe how Q compares to K immediately after the disturbance.", "Earns the point for Q < K."],
  ["Explain how the system responds.", "Earns the point for explaining that the forward reaction runs faster than the reverse until Q = K again."],
  ["Describe whether the value of K changes after adding reactant.", "Earns the point for describing that K doesn't change (only temperature changes K)."]
]],
"7.11": ["AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq), Ksp = 1.8 × 10⁻¹⁰.", [
  ["Write the Ksp expression.", "Earns the point for Ksp = [Ag⁺][Cl⁻]."],
  ["Calculate the molar solubility of AgCl.", "Earns the point for 1.3 × 10⁻⁵ M."],
  ["Write the Ksp expression for CaF₂ in terms of molar solubility s.", "Earns the point for Ksp = 4s³."]
]],
"7.12": ["Solubility of AgCl (Ksp = 1.8 × 10⁻¹⁰) is compared in pure water and in 0.10 M NaCl.", [
  ["Calculate the molar solubility of AgCl in 0.10 M NaCl.", "Earns the point for 1.8 × 10⁻⁹ M."],
  ["Explain why solubility decreases in NaCl solution.", "Earns the point for explaining the common-ion effect: added Cl⁻ shifts the equilibrium left."],
  ["Predict whether AgCl would be more or less soluble in 0.10 M NaNO₃ than in 0.10 M NaCl, and justify.", "Earns the point for more soluble in NaNO₃ because it contains no common ion (Ag⁺ or Cl⁻)."]
]],
"7.13": ["Mg(OH)₂ is only slightly soluble in water, but it dissolves in acid.", [
  ["Write the dissolution equation for Mg(OH)₂.", "Earns the point for Mg(OH)₂(s) ⇌ Mg²⁺(aq) + 2 OH⁻(aq)."],
  ["Explain why Mg(OH)₂ is more soluble in acidic solution.", "Earns the point for explaining that H⁺ reacts with OH⁻ to form water, removing OH⁻ and shifting the equilibrium right."],
  ["Predict whether AgCl's solubility depends strongly on pH, and justify.", "Earns the point for predicting no/little effect because Cl⁻ is the conjugate base of a strong acid and does not react with H⁺."]
]],
"7.14": ["NH₄NO₃ dissolves in water spontaneously even though the process is endothermic.", [
  ["Identify the sign of ΔS for dissolving NH₄NO₃.", "Earns the point for positive."],
  ["Explain why the dissolution is thermodynamically favorable.", "Earns the point for explaining that the entropy increase makes TΔS larger than ΔH, so ΔG = ΔH − TΔS is negative."],
  ["Explain the particle-level reason ΔS is positive.", "Earns the point for explaining that ions in the solid lattice become dispersed in solution, increasing the number of arrangements (disorder)."]
]],
"8.1": ["At 25°C, Kw = 1.0 × 10⁻¹⁴. A solution has [H₃O⁺] = 1.0 × 10⁻³ M.", [
  ["Calculate the pH of the solution.", "Earns the point for pH 3.00."],
  ["Calculate [OH⁻] in the solution.", "Earns the point for 1.0 × 10⁻¹¹ M."],
  ["Explain why the pH of pure water is 7.00 at 25°C.", "Earns the point for explaining that in pure water [H₃O⁺] = [OH⁻] = 1.0 × 10⁻⁷ M (from Kw)."]
]],
"8.2": ["Consider 0.0100 M HCl and 0.0010 M NaOH.", [
  ["Calculate the pH of the HCl solution.", "Earns the point for pH 2.00."],
  ["Calculate the pH of the NaOH solution.", "Earns the point for pH 11.00."],
  ["Predict the pH of 0.0100 M HCl after it is diluted by a factor of 10.", "Earns the point for pH 3.00."]
]],
"8.3": ["Acetic acid has Ka = 1.8 × 10⁻⁵. A solution is 0.10 M acetic acid.", [
  ["Calculate [H₃O⁺].", "Earns the point for 1.3 × 10⁻³ M (√(1.8 × 10⁻⁶))."],
  ["Calculate the pH.", "Earns the point for 2.87 (accept 2.9)."],
  ["Calculate the percent ionization.", "Earns the point for about 1.3%."]
]],
"8.4": ["A buffer contains acetic acid and sodium acetate.", [
  ["Write the net ionic equation for the reaction when HCl is added.", "Earns the point for CH₃COO⁻ + H⁺ (or H₃O⁺) → CH₃COOH (+ H₂O)."],
  ["Write the net ionic equation for the reaction when NaOH is added.", "Earns the point for CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O."],
  ["Explain why the pH changes only slightly.", "Earns the point for explaining that the added acid or base is consumed by the buffer components, converting strong acid/base into weak ones."]
]],
"8.5": ["Acetic acid (a weak acid) is titrated with NaOH (a strong base).", [
  ["Predict whether the pH at the equivalence point is above, below, or equal to 7, and explain.", "Earns the point for above 7 because acetate (conjugate base) reacts with water to produce OH⁻."],
  ["Describe the pH at the half-equivalence point.", "Earns the point for describing pH = pKa of the acid."],
  ["Explain how to choose an indicator for this titration.", "Earns the point for explaining that the indicator's pKa (color change range) should be near the pH at the equivalence point."]
]],
"8.6": ["Consider HClO and HClO₄; also HF and HCl.", [
  ["Identify which is the stronger acid: HClO or HClO₄.", "Earns the point for HClO₄."],
  ["Explain why HClO₄ is stronger.", "Earns the point for explaining that more electronegative O atoms pull electron density from the O–H bond and stabilize the conjugate base through delocalization."],
  ["Explain why HF is a weaker acid than HCl.", "Earns the point for explaining that the H–F bond is much stronger/shorter than H–Cl, so HF releases H⁺ less easily."]
]],
"8.7": ["A weak acid HA has pKa = 4.74.", [
  ["Identify whether HA or A⁻ predominates at pH 2.00.", "Earns the point for HA (pH < pKa)."],
  ["Identify whether HA or A⁻ predominates at pH 7.00.", "Earns the point for A⁻ (pH > pKa)."],
  ["Describe what is true when pH = pKa.", "Earns the point for describing that [HA] = [A⁻]."]
]],
"8.8": ["A student wants to make a buffer with pH 9.2.", [
  ["Choose between acetic acid (pKa 4.74) and ammonium (pKa 9.25) as the weak acid, and justify.", "Earns the point for ammonium/ammonia because its pKa is closest to 9.2."],
  ["Describe the ratio of conjugate base to acid that gives maximum buffering capacity.", "Earns the point for describing 1:1 (equal concentrations)."],
  ["Explain why a buffer cannot be made from a strong acid and its conjugate base.", "Earns the point for explaining that the conjugate base of a strong acid is negligibly basic, so it cannot neutralize added acid."]
]],
"8.9": ["A buffer is 0.10 M acetic acid (pKa = 4.74) and 0.20 M sodium acetate.", [
  ["Write the Henderson-Hasselbalch equation.", "Earns the point for pH = pKa + log([A⁻]/[HA])."],
  ["Calculate the pH of the buffer.", "Earns the point for 5.04."],
  ["Predict whether the pH would increase or decrease if more acetic acid were added.", "Earns the point for decrease (ratio [A⁻]/[HA] decreases)."]
]],
"8.10": ["Buffer 1 is 1.0 M acetic acid and 1.0 M acetate. Buffer 2 is 0.10 M acetic acid and 0.10 M acetate.", [
  ["Compare the pH of the two buffers.", "Earns the point for stating they have the same pH (4.74) because the ratio is the same."],
  ["Identify which buffer has the greater buffer capacity.", "Earns the point for Buffer 1."],
  ["Explain your answer to part B.", "Earns the point for explaining that Buffer 1 contains more moles of acid and base to neutralize added acid or base."]
]],
"9.1": ["Predict the sign of ΔS for each process.", [
  ["Predict the sign of ΔS for H₂O(l) → H₂O(g), and justify.", "Earns the point for positive because gas particles are far more dispersed than liquid particles."],
  ["Predict the sign of ΔS for 2 SO₂(g) + O₂(g) → 2 SO₃(g), and justify.", "Earns the point for negative because moles of gas decrease (3 → 2)."],
  ["Explain what entropy measures.", "Earns the point for explaining the dispersal of matter and energy/number of possible arrangements (microstates)."]
]],
"9.2": ["S° values (J/mol·K): N₂(g) 191.6, H₂(g) 130.7, NH₃(g) 192.5. Reaction: N₂ + 3 H₂ → 2 NH₃.", [
  ["Calculate ΔS° for the reaction.", "Earns the point for −198.7 J/K·mol (2(192.5) − [191.6 + 3(130.7)])."],
  ["Explain why the sign of ΔS° makes sense.", "Earns the point for explaining fewer moles of gas in the products (4 → 2)."],
  ["Explain why S° of an element in its standard state is not zero.", "Earns the point for explaining that absolute entropy is zero only for a perfect crystal at 0 K; at 298 K particles have motion and disorder."]
]],
"9.3": ["For N₂ + 3 H₂ → 2 NH₃, ΔH° = −92.2 kJ/mol and ΔS° = −198.7 J/K·mol.", [
  ["Calculate ΔG° at 298 K.", "Earns the point for about −33.0 kJ/mol (−92.2 − 298 × (−0.1987))."],
  ["Identify whether the reaction is thermodynamically favorable at 298 K.", "Earns the point for yes (ΔG° < 0)."],
  ["Calculate the temperature above which the reaction is not favorable.", "Earns the point for about 464 K (ΔH/ΔS)."]
]],
"9.4": ["The conversion of diamond to graphite has ΔG° < 0 at room temperature, but diamonds do not visibly change.", [
  ["Explain why diamonds do not change into graphite at room temperature.", "Earns the point for explaining that the reaction has a very high activation energy, so it is extremely slow (kinetically controlled)."],
  ["Describe the difference between thermodynamic favorability and rate.", "Earns the point for describing that ΔG tells whether a reaction can happen; the rate depends on activation energy."],
  ["Identify one way to make a thermodynamically favorable but slow reaction occur faster.", "Earns the point for identifying adding a catalyst or increasing temperature."]
]],
"9.5": ["A reaction has ΔG° = −10.0 kJ/mol at 298 K. (R = 8.314 J/mol·K)", [
  ["Calculate K.", "Earns the point for about 57 (ln K = 10,000 / (8.314 × 298) = 4.04)."],
  ["Explain the relationship between the sign of ΔG° and the size of K.", "Earns the point for explaining ΔG° < 0 means K > 1; ΔG° > 0 means K < 1."],
  ["Predict the value of ΔG° for a reaction with K = 1.", "Earns the point for 0."]
]],
"9.6": ["Glucose + phosphate → glucose-6-phosphate, ΔG° = +13.8 kJ/mol. ATP → ADP + phosphate, ΔG° = −30.5 kJ/mol.", [
  ["Calculate ΔG° for the coupled reaction glucose + ATP → glucose-6-phosphate + ADP.", "Earns the point for −16.7 kJ/mol."],
  ["Explain how coupling makes an unfavorable reaction proceed.", "Earns the point for explaining that the favorable reaction's free energy release drives the unfavorable one; the combined ΔG° is negative."],
  ["Describe one other way to drive an unfavorable reaction.", "Earns the point for describing using light energy (photosynthesis), electricity (electrolysis), or removing products continuously."]
]],
"9.7": ["A galvanic cell uses Zn/Zn²⁺ (E° = −0.76 V) and Cu/Cu²⁺ (E° = +0.34 V).", [
  ["Identify the anode and write its half-reaction.", "Earns the point for zinc: Zn → Zn²⁺ + 2e⁻."],
  ["Calculate the standard cell potential.", "Earns the point for 1.10 V."],
  ["Describe the purpose of the salt bridge.", "Earns the point for describing that it allows ions to move to balance charge, completing the circuit."]
]],
"9.8": ["The Zn/Cu cell has E° = 1.10 V. (F = 96,485 C/mol)", [
  ["Calculate ΔG° for the cell reaction.", "Earns the point for −212 kJ/mol (−2 × 96,485 × 1.10)."],
  ["Explain how the sign of E° relates to favorability.", "Earns the point for explaining that positive E° means negative ΔG° and a favorable reaction."],
  ["Predict whether K is greater or less than 1.", "Earns the point for greater than 1."]
]],
"9.9": ["The Zn/Cu cell runs for a long time, so [Zn²⁺] increases and [Cu²⁺] decreases.", [
  ["Predict whether the cell potential increases or decreases, and explain.", "Earns the point for decreases because Q = [Zn²⁺]/[Cu²⁺] increases."],
  ["Describe the cell potential when the reaction reaches equilibrium.", "Earns the point for describing E = 0 (dead battery)."],
  ["Describe how to increase the potential of a Zn/Cu cell under nonstandard conditions.", "Earns the point for describing increasing [Cu²⁺] or decreasing [Zn²⁺]."]
]],
"9.10": ["A current of 2.00 A passes through a Cu²⁺ solution for 965 s. (F = 96,485 C/mol; Cu = 63.55 g/mol)", [
  ["Calculate the charge passed.", "Earns the point for 1,930 C."],
  ["Calculate the moles of electrons.", "Earns the point for 0.0200 mol e⁻."],
  ["Calculate the mass of copper deposited.", "Earns the point for 0.636 g (0.0100 mol Cu). Accept 0.635–0.64 g."]
]]
};
