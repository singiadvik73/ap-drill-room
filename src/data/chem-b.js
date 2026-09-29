// AP Chemistry — Units 5–9. Question format: [stem, correct, [distractors], explanation, figure?]
AP_DATA.chem.units.push(
{ n: 5, name: "Kinetics", weight: "7–9%", topics: [
  ["5.1", "Reaction Rates", [
    ["For 2 N₂O₅ → 4 NO₂ + O₂, N₂O₅ is consumed at 0.020 M/s. At what rate is O₂ formed?", "0.010 M/s", ["0.040 M/s", "0.020 M/s", "0.0050 M/s"], "O₂ forms at half the rate N₂O₅ is consumed (1 : 2)."],
    ["For the same reaction, 2 N₂O₅ → 4 NO₂ + O₂, at what rate is NO₂ formed?", "0.040 M/s", ["0.010 M/s", "0.020 M/s", "0.080 M/s"], "NO₂ forms twice as fast as N₂O₅ is consumed (4 : 2)."],
    ["The graph shows the concentration of a reactant over time. What happens to the reaction rate as time goes on?", "It decreases as the reactant is used up", ["It increases as products build up", "It stays constant the whole time", "It drops to zero after the first step"], "The curve's slope gets less steep as the reactant is used up, so the rate slows.", { t: "line", title: "Reactant concentration over time", x: { min: 0, max: 100, ticks: [0, 20, 40, 60, 80, 100], label: "Time (s)" }, y: { min: 0, max: 1, ticks: [0, 0.25, 0.5, 0.75, 1], label: "[A] (M)" }, series: [{ name: "[A]", pts: [[0, 1], [10, 0.71], [20, 0.5], [30, 0.35], [40, 0.25], [50, 0.18], [60, 0.125], [70, 0.088], [80, 0.063], [90, 0.044], [100, 0.031]] }] }],
    ["Which change would NOT increase the rate of Zn(s) + 2 HCl(aq) → ZnCl₂(aq) + H₂(g)?", "Using larger pieces of zinc", ["Using more concentrated HCl", "Warming the acid", "Grinding the zinc into powder"], "Larger pieces have less surface area, which reduces the rate."]
  ]],
  ["5.2", "Introduction to Rate Law", [
    ["Use the data to find the rate law for A + B → C.", "Rate = k[A]²", ["Rate = k[A][B]", "Rate = k[A]", "Rate = k[A]²[B]"], "Doubling [A] (trials 1→2) quadruples the rate, so second order in A. Doubling [B] (1→3) doesn't change the rate, so zero order in B.", { t: "table", title: "Initial rate data", head: ["Trial", "[A] (M)", "[B] (M)", "Initial rate (M/s)"], rows: [["1", "0.10", "0.10", "2.0 × 10⁻³"], ["2", "0.20", "0.10", "8.0 × 10⁻³"], ["3", "0.10", "0.20", "2.0 × 10⁻³"]] }],
    ["Rate = k[A][B]². If [A] doubles and [B] triples, by what factor does the rate change?", "18", ["12", "6", "36"], "2 × 3² = 18."],
    ["What are the units of k for a rate law of the form rate = k[A]², with rate in M/s?", "M⁻¹ s⁻¹", ["s⁻¹", "M s⁻¹", "M⁻² s⁻¹"], "M/s = k · M², so k has units M⁻¹ s⁻¹."],
    ["When [A] is doubled with all else constant, the rate does not change. What is the order with respect to A?", "Zero", ["First", "Second", "One-half"], "2ⁿ = 1 only when n = 0."]
  ]],
  ["5.3", "Concentration Changes Over Time", [
    ["A first-order reaction has k = 0.0231 min⁻¹. What is its half-life?", "30.0 min", ["43.3 min", "0.0115 min", "15.0 min"], "t½ = 0.693/k = 30.0 min."],
    ["A first-order reactant starts at 0.800 M. What is its concentration after three half-lives?", "0.100 M", ["0.267 M", "0.200 M", "0.0500 M"], "0.800 → 0.400 → 0.200 → 0.100."],
    ["Which plot gives a straight line for a second-order reaction?", "1/[A] vs. time", ["ln[A] vs. time", "[A] vs. time", "[A]² vs. time"], "The second-order integrated rate law is 1/[A] = kt + 1/[A]₀."],
    ["For a zero-order reaction, how does the half-life change as the reaction proceeds?", "It gets shorter", ["It stays the same", "It gets longer", "It becomes zero"], "t½ = [A]₀/2k, so as the concentration drops, each successive half-life is shorter."]
  ]],
  ["5.4", "Elementary Reactions", [
    ["What is the rate law for the elementary step NO + O₃ → NO₂ + O₂?", "Rate = k[NO][O₃]", ["Rate = k[NO₂][O₂]", "Rate = k[NO]²", "Rate = k[O₃]"], "For an elementary step, the exponents equal the coefficients of the reactants."],
    ["What is the rate law for the elementary step 2 NO₂ → N₂O₄?", "Rate = k[NO₂]²", ["Rate = k[NO₂]", "Rate = k[N₂O₄]", "Rate = k[NO₂]²[N₂O₄]"], "Two NO₂ molecules collide, so the step is second order in NO₂."],
    ["What is the molecularity of the elementary step O₃ → O₂ + O?", "Unimolecular", ["Bimolecular", "Termolecular", "Zero-molecular"], "Only one reactant molecule is involved."],
    ["Why can't the rate law for 2 H₂ + 2 NO → N₂ + 2 H₂O be written from its coefficients?", "It is not a single elementary step", ["It is an endothermic reaction", "It has too many products", "Its reactants are both gases"], "Overall reactions usually occur in several steps; the rate law must come from experiment or the mechanism."]
  ]],
  ["5.5", "Collision Model", [
    ["Raising the temperature from 300 K to 310 K nearly doubles a reaction's rate. What is the main reason?", "More collisions exceed the activation energy", ["The collision frequency doubles", "The activation energy decreases", "The molecules become larger"], "A small temperature increase greatly increases the fraction of molecules with enough energy; collision frequency rises only slightly."],
    ["Why don't all collisions with enough energy lead to a reaction?", "Some have the wrong orientation", ["Some molecules are catalysts", "Some collisions are too slow", "Some molecules are products"], "Molecules must collide in the right orientation for bonds to break and form."],
    ["How does increasing the concentration of a reactant increase the rate?", "More collisions happen per second", ["Each collision has more energy", "The activation energy decreases", "The equilibrium constant increases"], "More particles per volume means more frequent collisions, not more energetic ones."],
    ["How does a catalyst increase the fraction of molecules that can react?", "It lowers Ea below more molecules' energies", ["It gives molecules more kinetic energy", "It shifts the speed distribution right", "It raises the temperature of the reactants"], "The energy distribution is unchanged, but the threshold (Ea) is lower."]
  ]],
  ["5.6", "Reaction Energy Profile", [
    ["The energy profile shows a reaction. What is its activation energy for the forward reaction?", "About 80 kJ/mol", ["About 30 kJ/mol", "About 50 kJ/mol", "About 110 kJ/mol"], "Eₐ is the difference between the peak (110) and the reactants (30): 80 kJ/mol.", { t: "line", title: "Reaction energy profile", x: { min: 0, max: 10, ticks: [0, 5, 10], label: "Reaction progress" }, y: { min: 0, max: 120, ticks: [0, 30, 60, 90, 120], label: "Potential energy (kJ/mol)" }, series: [{ name: "Energy", pts: [[0, 30], [2, 30], [3, 45], [4, 85], [5, 110], [6, 85], [7, 30], [8, 5], [10, 5]] }] }],
    ["In the same energy profile, the reaction is", "exothermic, with ΔH ≈ −25 kJ/mol", ["endothermic, with ΔH ≈ +25 kJ/mol", "exothermic, with ΔH ≈ −80 kJ/mol", "endothermic, with ΔH ≈ +105 kJ/mol"], "Products at 5 kJ/mol are below reactants at 30, so ΔH ≈ −25 kJ/mol.", { t: "line", title: "Reaction energy profile", x: { min: 0, max: 10, ticks: [0, 5, 10], label: "Reaction progress" }, y: { min: 0, max: 120, ticks: [0, 30, 60, 90, 120], label: "Potential energy (kJ/mol)" }, series: [{ name: "Energy", pts: [[0, 30], [2, 30], [3, 45], [4, 85], [5, 110], [6, 85], [7, 30], [8, 5], [10, 5]] }] }],
    ["A reaction has Ea = 50 kJ/mol for the forward reaction and ΔH = −30 kJ/mol. What is Ea for the reverse reaction?", "80 kJ/mol", ["20 kJ/mol", "50 kJ/mol", "30 kJ/mol"], "Ea(reverse) = Ea(forward) − ΔH = 50 − (−30) = 80."],
    ["Which statement about the transition state in an energy profile is true?", "It is at the maximum and can't be isolated", ["It is at a minimum and can be isolated", "It is the same as a reaction intermediate", "It has lower energy than the reactants"], "The transition state is the highest-energy arrangement along the path and exists only fleetingly."]
  ]],
  ["5.7", "Introduction to Reaction Mechanisms", [
    ["Mechanism: Cl₂ ⇌ 2 Cl (fast); Cl + CHCl₃ → HCl + CCl₃ (slow); CCl₃ + Cl → CCl₄ (fast). Which species are intermediates?", "Cl and CCl₃", ["Cl₂ and CHCl₃", "HCl and CCl₄", "Cl only"], "Cl and CCl₃ are formed in one step and consumed in a later step."],
    ["What is the overall reaction for the mechanism Cl₂ ⇌ 2 Cl; Cl + CHCl₃ → HCl + CCl₃; CCl₃ + Cl → CCl₄?", "Cl₂ + CHCl₃ → HCl + CCl₄", ["2 Cl + CHCl₃ → HCl + CCl₄", "Cl₂ + CHCl₃ → 2 HCl + CCl₃", "Cl + CHCl₃ → HCl + CCl₃"], "Adding the steps and canceling the intermediates (2 Cl and CCl₃)."],
    ["Mechanism: O₃ + NO → NO₂ + O₂; NO₂ + O → NO + O₂. What is NO?", "A catalyst", ["An intermediate", "A product", "A reactant"], "NO is consumed in step 1 and regenerated in step 2."],
    ["In the same mechanism (O₃ + NO → NO₂ + O₂; NO₂ + O → NO + O₂), what is NO₂?", "An intermediate", ["A catalyst", "A product", "A reactant"], "NO₂ is formed in step 1 and consumed in step 2."]
  ]],
  ["5.8", "Reaction Mechanism and Rate Law", [
    ["Mechanism: NO₂ + NO₂ → NO₃ + NO (slow); NO₃ + CO → NO₂ + CO₂ (fast). What rate law does it predict?", "Rate = k[NO₂]²", ["Rate = k[NO₂][CO]", "Rate = k[NO₃][CO]", "Rate = k[NO₂]²[CO]"], "The slow first step determines the rate law."],
    ["For 2 H₂ + 2 NO → N₂ + 2 H₂O, the experimental rate law is rate = k[H₂][NO]². Which mechanism is consistent?", "Fast 2 NO ⇌ N₂O₂; slow N₂O₂ + H₂", ["Slow 2 NO → N₂O₂; fast N₂O₂ + H₂", "Slow NO + H₂ → HNO + H; fast steps", "One slow step: 2 H₂ + 2 NO"], "With the fast equilibrium, [N₂O₂] = K[NO]², so the slow step's rate is k[NO]²[H₂]."],
    ["A proposed mechanism's slow first step is A + B → I. The experimental rate law is rate = k[A]². What can you conclude?", "The mechanism is not correct", ["The mechanism is correct", "B must be a catalyst", "I must be a reactant"], "The slow step would give rate = k[A][B], which doesn't match the data."],
    ["Mechanism: A ⇌ 2 B (fast, equilibrium constant K); B + C → D (slow). What is the rate law in terms of reactants?", "Rate = k[A]^½[C]", ["Rate = k[B][C]", "Rate = k[A][C]", "Rate = k[A]²[C]"], "[B]² = K[A], so [B] = (K[A])^½, and rate = k₂[B][C]."]
  ]],
  ["5.9", "Steady-State Approximation", [
    ["Mechanism: NO + Br₂ ⇌ NOBr₂ (fast); NOBr₂ + NO → 2 NOBr (slow). What is the rate law?", "Rate = k[NO]²[Br₂]", ["Rate = k[NOBr₂][NO]", "Rate = k[NO][Br₂]", "Rate = k[NO]²"], "[NOBr₂] = K[NO][Br₂], so rate = k₂K[NO]²[Br₂]."],
    ["Why is an intermediate's concentration replaced when writing the final rate law?", "It can't be measured or controlled", ["It is always zero", "It is a catalyst", "It is always in excess"], "Rate laws are written in terms of species whose concentrations can be set and measured."],
    ["Mechanism: 2 A ⇌ A₂ (fast); A₂ + B → P (slow). What is the rate law?", "Rate = k[A]²[B]", ["Rate = k[A₂][B]", "Rate = k[A][B]", "Rate = k[A]²"], "[A₂] = K[A]², so rate = k₂K[A]²[B]."],
    ["For a mechanism with a fast pre-equilibrium (constant K) followed by a slow step (rate constant k₂), K doubles while k₂ stays the same. What happens to the observed rate constant?", "It doubles", ["It halves", "It stays the same", "It quadruples"], "The observed rate constant is k₂K."]
  ]],
  ["5.10", "Multistep Reaction Energy Profile", [
    ["An energy profile has three peaks with two valleys between them. How many intermediates are there?", "2", ["3", "1", "5"], "Each valley between peaks is an intermediate; three peaks mean three steps."],
    ["Step 1 has Ea = 40 kJ/mol, step 2 has Ea = 85 kJ/mol, and step 3 has Ea = 20 kJ/mol. Which is rate-determining?", "Step 2", ["Step 1", "Step 3", "All steps equally"], "The step with the highest activation energy is the slowest."],
    ["Reactants are at 100 kJ, the intermediate at 130 kJ, products at 60 kJ, and the two peaks at 170 kJ and 150 kJ. What is Ea for the second step?", "20 kJ", ["50 kJ", "70 kJ", "90 kJ"], "Step 2 starts at the intermediate (130) and goes to the second peak (150)."],
    ["In the same profile (reactants 100, peak 170, intermediate 130, peak 150, products 60 kJ), which step is rate-determining?", "Step 1", ["Step 2", "Both equally", "Neither"], "Step 1's Ea is 70 kJ; step 2's is 20 kJ."]
  ]],
  ["5.11", "Catalysis", [
    ["A catalyst lowers the forward activation energy of a reaction by 20 kJ/mol. What happens to the reverse activation energy?", "It is lowered by 20 kJ/mol", ["It is raised by 20 kJ/mol", "It is unchanged", "It is lowered by 40 kJ/mol"], "ΔH is unchanged, so both activation energies drop by the same amount."],
    ["In an enzyme-catalyzed reaction, the rate levels off as substrate concentration increases. Why?", "The active sites become saturated", ["The enzyme is used up", "The substrate becomes a catalyst", "The activation energy increases"], "Once every active site is occupied, adding substrate can't speed things up."],
    ["Why does powdering a solid catalyst increase the rate?", "More active sites are exposed", ["It lowers ΔH", "It raises the temperature", "It increases K"], "Heterogeneous catalysis happens on the surface, so more surface means more sites."],
    ["How does a catalyst affect a reaction at equilibrium?", "Equilibrium is reached faster, same K", ["More products form at equilibrium", "K increases", "The equilibrium shifts to reactants"], "A catalyst speeds up both directions equally."]
  ]]
]},
{ n: 6, name: "Thermochemistry", weight: "7–9%", topics: [
  ["6.1", "Endothermic and Exothermic Processes", [
    ["When CaCl₂ dissolves in water, the solution warms. What is the sign of q for the dissolving process?", "Negative", ["Positive", "Zero", "It depends on the amount"], "Energy leaves the system (dissolving) and goes into the surroundings (water)."],
    ["Which process is endothermic?", "Melting ice", ["Freezing water", "Condensing steam", "Burning methane"], "Melting requires energy to overcome intermolecular forces."],
    ["An instant hand warmer gets hot as iron reacts with oxygen. Which way does energy flow?", "From the system to the surroundings", ["From the surroundings to the system", "No energy flows", "It flows both ways equally"], "The reaction is exothermic, releasing energy to your hand."],
    ["Which step is always endothermic?", "Breaking a chemical bond", ["Forming a chemical bond", "Condensing a gas", "Freezing a liquid"], "Energy is always required to separate bonded atoms."]
  ]],
  ["6.2", "Energy Diagrams", [
    ["A reaction has ΔH = +50 kJ. On an energy diagram, how do the products compare with the reactants?", "Products are 50 kJ higher", ["Products are 50 kJ lower", "They are at the same level", "Products are at the peak"], "Positive ΔH means the products have more energy."],
    ["An energy diagram shows reactants at 20 kJ and products at −40 kJ. What is ΔH?", "−60 kJ", ["+60 kJ", "−20 kJ", "−40 kJ"], "ΔH = −40 − 20 = −60 kJ."],
    ["In an exothermic reaction, which is more stable?", "The products", ["The reactants", "The transition state", "They are equally stable"], "Lower energy means more stable."],
    ["A reaction has ΔH = −60 kJ. What is ΔH for the reverse reaction?", "+60 kJ", ["−60 kJ", "0 kJ", "+120 kJ"], "Reversing a reaction changes the sign of ΔH."]
  ]],
  ["6.3", "Heat Transfer and Thermal Equilibrium", [
    ["50.0 g of water at 80.0°C is mixed with 50.0 g of water at 20.0°C. What is the final temperature?", "50.0°C", ["60.0°C", "40.0°C", "55.0°C"], "Equal masses of the same substance meet at the average temperature."],
    ["100. g of water at 80.0°C is mixed with 50.0 g of water at 20.0°C. What is the final temperature?", "60.0°C", ["50.0°C", "40.0°C", "70.0°C"], "(100 × 80 + 50 × 20) ÷ 150 = 60.0°C."],
    ["Equal masses of copper (c = 0.385 J/g·°C) and water (c = 4.18 J/g·°C) absorb the same heat. Which has the larger temperature change?", "Copper", ["Water", "They are equal", "It depends on the heat"], "ΔT = q/(mc), so the smaller specific heat gives the larger ΔT."],
    ["A hot metal is placed in water in an insulated cup. Which statement is true?", "Heat lost by metal = heat gained by water", ["Both reach the metal's starting temperature", "The water's ΔT equals the metal's ΔT", "Heat flows until both have the same energy"], "Energy is conserved: q(metal) = −q(water). They end at the same temperature, not the same energy."]
  ]],
  ["6.4", "Heat Capacity and Calorimetry", [
    ["50.0 mL of 1.0 M HCl and 50.0 mL of 1.0 M NaOH are mixed, and the temperature rises 6.7°C. Assume 100. g of solution and c = 4.18 J/g·°C. What is ΔH per mole of water formed?", "−56 kJ/mol", ["−2.8 kJ/mol", "+56 kJ/mol", "−28 kJ/mol"], "q = 100. × 4.18 × 6.7 = 2,800 J released. 0.050 mol H₂O formed: −2.8 kJ ÷ 0.050 mol = −56 kJ/mol."],
    ["The table shows specific heats. If equal masses of each absorb the same heat, which has the largest temperature increase?", "Copper", ["Water", "Aluminum", "Iron"], "ΔT = q/(mc). The smallest specific heat (copper) gives the biggest temperature change.", { t: "table", title: "Specific heat capacities", head: ["Substance", "Specific heat (J/(g·°C))"], rows: [["Water", "4.18"], ["Aluminum", "0.90"], ["Iron", "0.45"], ["Copper", "0.39"]] }],
    ["A 25.0 g metal at 95.0°C is put in 100.0 g of water at 22.0°C. The final temperature is 24.0°C. What is the metal's specific heat?", "0.471 J/g·°C", ["0.458 J/g·°C", "2.12 J/g·°C", "0.118 J/g·°C"], "q(water) = 100.0 × 4.18 × 2.0 = 836 J. c = 836 ÷ (25.0 × 71.0) = 0.471."],
    ["In a coffee-cup calorimeter, some heat from an exothermic reaction escapes to the air. How does this affect the calculated ΔH?", "Its magnitude is too small", ["Its magnitude is too large", "Its sign changes", "It is unaffected"], "The measured temperature rise is smaller than it should be, so less heat is calculated."]
  ]],
  ["6.5", "Energy of Phase Changes", [
    ["The heating curve shows water being heated at a steady rate. During the flat segment at 100°C, the added energy is used to", "separate molecules from each other", ["raise the average kinetic energy", "break covalent O–H bonds in water", "raise the temperature of the liquid"], "During a phase change the temperature stays constant because energy goes into separating molecules.", { t: "line", title: "Heating curve of water", x: { min: 0, max: 60, ticks: [0, 10, 20, 30, 40, 50, 60], label: "Time (min)" }, y: { min: -20, max: 120, ticks: [-20, 0, 20, 40, 60, 80, 100, 120], label: "Temperature (°C)" }, series: [{ name: "Water", pts: [[0, -20], [2, 0], [8, 0], [18, 100], [48, 100], [52, 120]] }] }],
    ["How much energy converts 18.0 g of ice at 0°C into water at 25.0°C? (ΔH_fus = 6.01 kJ/mol; c = 4.18 J/g·°C)", "7.89 kJ", ["6.01 kJ", "1.88 kJ", "4.13 kJ"], "Melting: 1.00 mol × 6.01 = 6.01 kJ. Warming: 18.0 × 4.18 × 25.0 = 1.88 kJ. Total 7.89 kJ."],
    ["Why is a burn from steam at 100°C more severe than one from water at 100°C?", "Steam releases ΔH_vap as it condenses", ["Steam is hotter than water at 100°C", "Steam has a higher specific heat", "Water absorbs heat from the skin"], "Condensing releases a large amount of energy (40.7 kJ/mol) before the water even starts cooling."],
    ["How much energy is released when 36.0 g of steam condenses at 100°C? (ΔH_vap = 40.7 kJ/mol)", "81.4 kJ", ["40.7 kJ", "12.0 kJ", "163 kJ"], "36.0 g = 2.00 mol, and 2.00 × 40.7 = 81.4 kJ."]
  ]],
  ["6.6", "Introduction to Enthalpy of Reaction", [
    ["2 H₂(g) + O₂(g) → 2 H₂O(l), ΔH = −572 kJ. How much heat is released when 4.04 g of H₂ (2.02 g/mol) burns?", "572 kJ", ["1,144 kJ", "286 kJ", "2,310 kJ"], "4.04 g = 2.00 mol H₂, which is exactly the amount in the equation as written."],
    ["For A → 2 B, ΔH = +40 kJ. What is ΔH for 4 B → 2 A?", "−80 kJ", ["+80 kJ", "−40 kJ", "−20 kJ"], "Reverse (−40) and double (×2)."],
    ["Compared with burning methane to form H₂O(l), burning it to form H₂O(g) releases", "less heat", ["more heat", "the same heat", "no heat"], "Forming liquid water also releases the heat of condensation."],
    ["CH₄ + 2 O₂ → CO₂ + 2 H₂O, ΔH = −890 kJ/mol. How much heat is released when 8.0 g of CH₄ (16.0 g/mol) burns?", "445 kJ", ["890 kJ", "7,120 kJ", "111 kJ"], "8.0 g = 0.50 mol, and 0.50 × 890 = 445 kJ."]
  ]],
  ["6.7", "Bond Enthalpies", [
    ["Use bond enthalpies to estimate ΔH for CH₄ + 2 O₂ → CO₂ + 2 H₂O(g). (C–H 413, O=O 498, C=O 799, O–H 463 kJ/mol)", "−802 kJ", ["+802 kJ", "−1,650 kJ", "−404 kJ"], "Broken: 4(413) + 2(498) = 2,648. Formed: 2(799) + 4(463) = 3,450. ΔH = 2,648 − 3,450 = −802 kJ."],
    ["Estimate ΔH for N₂ + 3 H₂ → 2 NH₃. (N≡N 945, H–H 436, N–H 391 kJ/mol)", "−93 kJ", ["+93 kJ", "−2,346 kJ", "−484 kJ"], "Broken: 945 + 3(436) = 2,253. Formed: 6(391) = 2,346. ΔH = −93 kJ."],
    ["Why do bond-enthalpy estimates differ from values found using enthalpies of formation?", "Bond enthalpies are averages", ["Bond enthalpies ignore products", "Bond enthalpies are always positive", "Enthalpies of formation are estimates"], "A bond's strength varies from molecule to molecule; tables list average values for gases."],
    ["Breaking 1 mol of C–H bonds requires 413 kJ. What happens when 1 mol of C–H bonds forms?", "413 kJ is released", ["413 kJ is absorbed", "826 kJ is released", "No energy change"], "Bond formation releases the same energy that bond breaking requires."]
  ]],
  ["6.8", "Enthalpy of Formation", [
    ["Which substance has a standard enthalpy of formation of zero?", "O₂(g)", ["O₃(g)", "H₂O(l)", "O(g)"], "Only an element in its standard state (O₂ gas) has ΔH°f = 0."],
    ["Use the table to find ΔH° for CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l).", "−890 kJ", ["−607 kJ", "−1,040 kJ", "+890 kJ"], "ΔH° = [−394 + 2(−286)] − [−75 + 0] = −966 + 75 = −891 ≈ −890 kJ.", { t: "table", title: "Standard enthalpies of formation", head: ["Substance", "ΔH°f (kJ/mol)"], rows: [["CH₄(g)", "−75"], ["CO₂(g)", "−394"], ["H₂O(l)", "−286"], ["O₂(g)", "0"]] }],
    ["Use ΔH°f values (NH₃ −46, NO +90, H₂O(g) −242 kJ/mol) to find ΔH° for 4 NH₃ + 5 O₂ → 4 NO + 6 H₂O(g).", "−908 kJ", ["−1,092 kJ", "+908 kJ", "−106 kJ"], "[4(90) + 6(−242)] − [4(−46)] = −1,092 + 184 = −908 kJ."],
    ["Which equation represents the standard enthalpy of formation of liquid water?", "H₂(g) + ½ O₂(g) → H₂O(l)", ["2 H₂(g) + O₂(g) → 2 H₂O(l)", "H₂O(g) → H₂O(l)", "2 H(g) + O(g) → H₂O(l)"], "It must form exactly 1 mol of product from elements in their standard states."]
  ]],
  ["6.9", "Hess's Law", [
    ["Given C + O₂ → CO₂ (−394 kJ), H₂ + ½ O₂ → H₂O(l) (−286 kJ), and CH₄ + 2 O₂ → CO₂ + 2 H₂O(l) (−890 kJ), what is ΔH°f of CH₄?", "−76 kJ", ["+76 kJ", "−1,570 kJ", "−218 kJ"], "−394 + 2(−286) − (−890) = −76 kJ."],
    ["An equation with ΔH = +25 kJ is reversed and multiplied by 3. What is the new ΔH?", "−75 kJ", ["+75 kJ", "−25 kJ", "+22 kJ"], "Reversing changes the sign; multiplying by 3 triples it."],
    ["Given 2 S + 3 O₂ → 2 SO₃ (−790 kJ) and S + O₂ → SO₂ (−297 kJ), what is ΔH for 2 SO₂ + O₂ → 2 SO₃?", "−196 kJ", ["−493 kJ", "−1,384 kJ", "+196 kJ"], "−790 − 2(−297) = −196 kJ."],
    ["Given N₂ + 2 O₂ → 2 NO₂ (+68 kJ) and N₂ + O₂ → 2 NO (+180 kJ), what is ΔH for 2 NO + O₂ → 2 NO₂?", "−112 kJ", ["+248 kJ", "+112 kJ", "−248 kJ"], "68 − 180 = −112 kJ."]
  ]]
]},
{ n: 7, name: "Equilibrium", weight: "7–9%", topics: [
  ["7.1", "Introduction to Equilibrium", [
    ["A sealed flask of N₂O₄ ⇌ 2 NO₂ has a constant color. Which statement is true?", "The forward and reverse rates are equal", ["The forward and reverse reactions stopped", "[N₂O₄] and [NO₂] are equal", "All the N₂O₄ has turned into NO₂"], "Equilibrium is dynamic: both reactions continue at equal rates, so concentrations stay constant."],
    ["The graph shows concentrations for A ⇌ B over time. When is equilibrium reached?", "At about 40 s, when both curves level off", ["At about 15 s, when the lines cross", "At 0 s, when the reaction begins", "At about 60 s, when [A] reaches zero"], "Crossing lines only mean equal concentrations. Equilibrium is when both curves level off.", { t: "line", title: "Concentrations for A ⇌ B", x: { min: 0, max: 80, ticks: [0, 20, 40, 60, 80], label: "Time (s)" }, y: { min: 0, max: 1, ticks: [0, 0.25, 0.5, 0.75, 1], label: "Concentration (M)" }, series: [{ name: "[A]", pts: [[0, 1], [5, 0.72], [10, 0.54], [15, 0.43], [20, 0.36], [30, 0.3], [40, 0.28], [60, 0.28], [80, 0.28]] }, { name: "[B]", pts: [[0, 0], [5, 0.28], [10, 0.46], [15, 0.57], [20, 0.64], [30, 0.7], [40, 0.72], [60, 0.72], [80, 0.72]], k: 2 }] }],
    ["A flask initially contains only NO₂. What happens as the system approaches equilibrium (2 NO₂ ⇌ N₂O₄)?", "Some NO₂ forms N₂O₄ until rates are equal", ["Nothing, since no N₂O₄ is present", "All the NO₂ turns into N₂O₄", "NO₂ decomposes into N₂ and O₂"], "Equilibrium can be approached from either direction."],
    ["Solid AgCl made with radioactive ³⁶Cl is added to a saturated AgCl solution. Later, ³⁶Cl is found dissolved in the solution. What does this show?", "Dissolving and precipitating both continue", ["The solution was not saturated", "The solid is reacting with water", "Radioactive Cl⁻ is more soluble"], "At equilibrium, ions keep leaving and rejoining the solid at equal rates."]
  ]],
  ["7.2", "Direction of Reversible Reactions", [
    ["A reaction mixture has Q = 5.0, and K = 2.0. Which way will the reaction proceed?", "Toward reactants", ["Toward products", "It is at equilibrium", "It cannot be predicted"], "Q > K means there are too many products, so the reverse reaction dominates."],
    ["N₂ + 3 H₂ ⇌ 2 NH₃, K = 0.50. A mixture has [N₂] = [H₂] = [NH₃] = 1.0 M. Which way does it shift?", "Toward reactants, since Q > K", ["Toward products, since Q < K", "Toward products, since Q > K", "It is at equilibrium, since Q = K"], "Q = 1.0²/(1.0 × 1.0³) = 1.0, which is greater than 0.50."],
    ["What happens in a mixture where Q = K?", "No net change occurs", ["Only the forward reaction occurs", "Only the reverse reaction occurs", "The reaction speeds up"], "The system is already at equilibrium."],
    ["A flask initially contains only reactants. What is Q, and which way does the reaction go?", "Q = 0; toward products", ["Q = 0; toward reactants", "Q = K; no change", "Q is infinite; toward reactants"], "With no products, the numerator of Q is zero, so Q < K."]
  ]],
  ["7.3", "Reaction Quotient and Equilibrium Constant", [
    ["What is Kc for 2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g)?", "[SO₃]² / ([SO₂]²[O₂])", ["[SO₃] / ([SO₂][O₂])", "[SO₂]²[O₂] / [SO₃]²", "2[SO₃] / (2[SO₂] + [O₂])"], "Products over reactants, each raised to its coefficient."],
    ["What is Kp for CaCO₃(s) ⇌ CaO(s) + CO₂(g)?", "P(CO₂)", ["P(CO₂) × [CaO] / [CaCO₃]", "1 / P(CO₂)", "[CaO] / [CaCO₃]"], "Pure solids are left out of equilibrium expressions."],
    ["For H₂ + I₂ ⇌ 2 HI, [H₂] = 0.10 M, [I₂] = 0.20 M, and [HI] = 0.40 M. What is Q?", "8.0", ["20", "0.125", "4.0"], "Q = 0.40² / (0.10 × 0.20) = 0.16/0.020 = 8.0."],
    ["What is Kc for NH₄Cl(s) ⇌ NH₃(g) + HCl(g)?", "[NH₃][HCl]", ["[NH₃][HCl] / [NH₄Cl]", "1 / ([NH₃][HCl])", "[NH₄Cl] / ([NH₃][HCl])"], "The solid is omitted."]
  ]],
  ["7.4", "Calculating the Equilibrium Constant", [
    ["For PCl₅ ⇌ PCl₃ + Cl₂, the equilibrium concentrations are [PCl₅] = 0.20 M, [PCl₃] = 0.10 M, and [Cl₂] = 0.10 M. What is Kc?", "0.050", ["20", "0.50", "1.0"], "(0.10)(0.10)/0.20 = 0.050."],
    ["1.00 mol of A is placed in a 1.00 L flask: A ⇌ 2 B. At equilibrium, [B] = 0.40 M. What is K?", "0.20", ["0.50", "0.40", "0.16"], "Forming 0.40 M B uses 0.20 M A, leaving 0.80 M. K = 0.40²/0.80 = 0.20."],
    ["For 2 NO₂(g) ⇌ N₂O₄(g), the equilibrium pressures are P(NO₂) = 0.50 atm and P(N₂O₄) = 0.25 atm. What is Kp?", "1.0", ["0.50", "2.0", "0.25"], "Kp = 0.25 / 0.50² = 1.0."],
    ["H₂ + I₂ ⇌ 2 HI starts with 0.50 M H₂ and 0.50 M I₂. At equilibrium, [HI] = 0.80 M. What is K?", "64", ["16", "8.0", "32"], "Forming 0.80 M HI uses 0.40 M each, leaving 0.10 M. K = 0.80² / (0.10 × 0.10) = 64."]
  ]],
  ["7.5", "Magnitude of the Equilibrium Constant", [
    ["A reaction has K = 1 × 10⁻¹⁰. What is true of the equilibrium mixture?", "It is mostly reactants", ["It is mostly products", "It has equal amounts of each", "It has no reactants left"], "A very small K strongly favors reactants."],
    ["A reaction has K = 1 × 10⁸ but is barely observed at room temperature. What best explains this?", "It has a very high activation energy", ["Its K is actually small", "It is endothermic", "It is at equilibrium already"], "K describes how far a reaction goes, not how fast."],
    ["Reaction 1 has K = 1 × 10⁵ and Reaction 2 has K = 1 × 10⁻³. Which goes further toward products?", "Reaction 1", ["Reaction 2", "They go equally far", "It depends on the rates"], "A larger K means a larger ratio of products to reactants at equilibrium."],
    ["What does K ≈ 1 indicate about an equilibrium mixture?", "Similar amounts of reactants and products", ["The reaction has stopped", "The reaction is very fast", "Only products are present"], "Neither side is strongly favored."]
  ]],
  ["7.6", "Properties of the Equilibrium Constant", [
    ["For H₂ + I₂ ⇌ 2 HI, K = 50. What is K for HI ⇌ ½ H₂ + ½ I₂?", "0.14", ["0.020", "7.1", "25"], "Reverse (1/50 = 0.020), then take the square root for halving: √0.020 = 0.14."],
    ["A ⇌ B has K₁ = 2, and B ⇌ C has K₂ = 3. What is K for A ⇌ C?", "6", ["5", "1.5", "0.67"], "When reactions are added, their K values are multiplied."],
    ["A ⇌ B has K = 4. What is K for 2 A ⇌ 2 B?", "16", ["8", "4", "2"], "Doubling the coefficients squares K."],
    ["A reaction has K = 4.0 × 10⁻³. What is K for the reverse reaction?", "250", ["−4.0 × 10⁻³", "4.0 × 10³", "2.5 × 10⁻²"], "K(reverse) = 1/K = 1/(4.0 × 10⁻³) = 250."]
  ]],
  ["7.7", "Calculating Equilibrium Concentrations", [
    ["A ⇌ B + C has K = 1.0 × 10⁻⁴, with [A]₀ = 0.10 M. What is [B] at equilibrium?", "3.2 × 10⁻³ M", ["1.0 × 10⁻⁵ M", "1.0 × 10⁻² M", "3.2 × 10⁻² M"], "x²/0.10 = 1.0 × 10⁻⁴, so x² = 1.0 × 10⁻⁵ and x = 3.2 × 10⁻³ M."],
    ["H₂ + I₂ ⇌ 2 HI, K = 49. Starting with 1.00 M H₂ and 1.00 M I₂, what is [HI] at equilibrium?", "1.56 M", ["0.778 M", "1.75 M", "0.222 M"], "(2x)²/(1 − x)² = 49, so 2x/(1 − x) = 7, giving x = 0.778 and [HI] = 2x = 1.56 M."],
    ["When is it valid to assume x is small compared with the initial concentration?", "When K is very small relative to it", ["When K is greater than 1", "When the reaction is exothermic", "When the products are gases"], "If K is small, little reactant is used, so x is negligible (typically under 5%)."],
    ["N₂O₄ ⇌ 2 NO₂, K = 0.36, starting with 0.10 M N₂O₄. What is [NO₂] at equilibrium?", "0.120 M", ["0.060 M", "0.190 M", "0.095 M"], "4x²/(0.10 − x) = 0.36 gives 4x² + 0.36x − 0.036 = 0, so x = 0.060 and [NO₂] = 2x = 0.120 M."]
  ]],
  ["7.8", "Representations of Equilibrium", [
    ["For A₂ ⇌ 2 A in a 1.0 L box, each particle represents 0.10 mol. At equilibrium the box shows 3 A₂ and 6 A. What is K?", "1.2", ["2.0", "0.50", "0.60"], "[A₂] = 0.30 M and [A] = 0.60 M. K = 0.60²/0.30 = 1.2."],
    ["Two particle diagrams taken 10 minutes apart show the same number of each kind of particle. What can you conclude?", "The system is at equilibrium", ["The reaction has stopped", "K equals 1", "There are no reactants left"], "Constant amounts over time indicate equilibrium (the reactions still continue)."],
    ["For X ⇌ Y with K = 3, an equilibrium box contains 12 particles. How many are Y?", "9", ["6", "3", "4"], "[Y]/[X] = 3, so Y is 3/4 of 12 particles."],
    ["For X ⇌ Y with K = 3, a box contains 5 Y and 7 X. What happens next?", "More Y forms", ["More X forms", "No change occurs", "All X becomes Y"], "Q = 5/7 < 3, so the forward reaction dominates."]
  ]],
  ["7.9", "Introduction to Le Châtelier's Principle", [
    ["For N₂ + 3 H₂ ⇌ 2 NH₃ (ΔH < 0), which change increases the equilibrium amount of NH₃?", "Compressing the container", ["Raising the temperature", "Adding a catalyst", "Removing some N₂"], "Smaller volume favors the side with fewer gas moles (2 vs. 4)."],
    ["Helium is added to an equilibrium mixture at constant volume. What happens?", "No shift occurs", ["It shifts toward fewer gas moles", "It shifts toward more gas moles", "K increases"], "The partial pressures of the reacting gases don't change."],
    ["For CO + 3 H₂ ⇌ CH₄ + H₂O (ΔH < 0), what happens when the temperature is raised?", "K decreases; it shifts left", ["K increases; it shifts right", "K is unchanged; it shifts left", "K decreases; it shifts right"], "For an exothermic reaction, heat acts like a product, so raising T lowers K."],
    ["Fe³⁺ + SCN⁻ ⇌ FeSCN²⁺ (red). Adding Ag⁺ precipitates AgSCN. What happens to the red color?", "It fades", ["It deepens", "It doesn't change", "It turns blue"], "Removing SCN⁻ shifts the equilibrium left, using up FeSCN²⁺."]
  ]],
  ["7.10", "Reaction Quotient and Le Châtelier's Principle", [
    ["N₂ is added to N₂ + 3 H₂ ⇌ 2 NH₃ at equilibrium. How do Q and K compare right after?", "Q < K", ["Q > K", "Q = K", "K decreases"], "Adding a reactant increases the denominator of Q."],
    ["The volume of an N₂O₄ ⇌ 2 NO₂ mixture at equilibrium is doubled. Which way does it shift, and why?", "Toward NO₂, since Q < K", ["Toward N₂O₄, since Q > K", "Toward NO₂, since Q > K", "No shift, since Q = K"], "Halving each concentration makes Q = (x/2)²/(y/2) = half of K."],
    ["Water is added to Fe³⁺ + SCN⁻ ⇌ FeSCN²⁺ at equilibrium, doubling the volume. Which way does it shift?", "Toward Fe³⁺ and SCN⁻", ["Toward FeSCN²⁺", "No shift", "It depends on the temperature"], "Dilution makes Q = 2K (two particles in the denominator, one in the numerator), so it shifts left."],
    ["The temperature of an endothermic reaction at equilibrium is raised. What happens?", "K increases, so it shifts right", ["K decreases, so it shifts left", "K is unchanged, so no shift", "K increases, so it shifts left"], "Heat acts like a reactant; the new K is larger than Q."]
  ]],
  ["7.11", "Introduction to Solubility Equilibria", [
    ["The molar solubility of PbI₂ is 1.5 × 10⁻³ M. What is its Ksp?", "1.4 × 10⁻⁸", ["2.3 × 10⁻⁶", "3.4 × 10⁻⁹", "4.5 × 10⁻⁶"], "Ksp = s(2s)² = 4s³ = 4(1.5 × 10⁻³)³ = 1.35 × 10⁻⁸."],
    ["CaF₂ has Ksp = 4.0 × 10⁻¹¹. What is its molar solubility?", "2.2 × 10⁻⁴ M", ["6.3 × 10⁻⁶ M", "3.4 × 10⁻⁴ M", "1.0 × 10⁻¹¹ M"], "4s³ = 4.0 × 10⁻¹¹, so s³ = 1.0 × 10⁻¹¹ and s = 2.2 × 10⁻⁴. Using s² gives 6.3 × 10⁻⁶."],
    ["Which salt has the greatest molar solubility in water? (Ksp: AgCl 1.8 × 10⁻¹⁰, Ag₂CrO₄ 1.1 × 10⁻¹², AgBr 5.0 × 10⁻¹³, AgI 8.3 × 10⁻¹⁷)", "Ag₂CrO₄", ["AgCl", "AgBr", "AgI"], "Ag₂CrO₄: s = (Ksp/4)^(1/3) ≈ 6.5 × 10⁻⁵ M. AgCl: s = √Ksp ≈ 1.3 × 10⁻⁵ M. Ksp values can't be compared directly for different formulas."],
    ["Equal volumes of 2.0 × 10⁻⁴ M AgNO₃ and 2.0 × 10⁻⁴ M NaCl are mixed. Does AgCl (Ksp = 1.8 × 10⁻¹⁰) precipitate?", "Yes, since Q > Ksp", ["No, since Q < Ksp", "No, since the ions are too dilute", "Yes, since Q = Ksp"], "After mixing, each ion is 1.0 × 10⁻⁴ M, so Q = 1.0 × 10⁻⁸, which is greater than Ksp."]
  ]],
  ["7.12", "Common-Ion Effect", [
    ["PbCl₂ has Ksp = 1.7 × 10⁻⁵. What is its molar solubility in 0.10 M NaCl?", "1.7 × 10⁻³ M", ["1.6 × 10⁻² M", "1.7 × 10⁻⁴ M", "4.1 × 10⁻³ M"], "Ksp = s(0.10)², so s = 1.7 × 10⁻⁵ / 0.010 = 1.7 × 10⁻³ M."],
    ["In which solution is AgCl least soluble?", "0.10 M CaCl₂", ["0.10 M NaCl", "0.10 M NaNO₃", "Pure water"], "0.10 M CaCl₂ has 0.20 M Cl⁻, the most common ion."],
    ["NaF is added to a saturated solution of CaF₂. What happens to [Ca²⁺]?", "It decreases", ["It increases", "It stays the same", "It doubles"], "Extra F⁻ shifts CaF₂ ⇌ Ca²⁺ + 2 F⁻ to the left, precipitating CaF₂."],
    ["How does the Ksp of AgCl in 0.10 M NaCl compare with its Ksp in pure water?", "It is the same", ["It is smaller", "It is larger", "It is zero"], "Ksp depends only on temperature; the solubility changes, not Ksp."]
  ]],
  ["7.13", "pH and Solubility", [
    ["Which salt becomes more soluble when acid is added?", "CaCO₃", ["AgCl", "KNO₃", "NaCl"], "CO₃²⁻ is the conjugate base of a weak acid and reacts with H⁺, pulling the equilibrium toward dissolving."],
    ["Mg(OH)₂ has Ksp = 5.6 × 10⁻¹². What is its molar solubility in a solution buffered at pH 10.00?", "5.6 × 10⁻⁴ M", ["5.6 × 10⁻⁸ M", "1.1 × 10⁻⁴ M", "5.6 × 10⁻² M"], "[OH⁻] = 1.0 × 10⁻⁴, so s = Ksp/[OH⁻]² = 5.6 × 10⁻¹²/1.0 × 10⁻⁸."],
    ["NaOH is added to a saturated solution of Mg(OH)₂. What happens to the solubility of Mg(OH)₂?", "It decreases", ["It increases", "It stays the same", "It doubles"], "OH⁻ is a common ion."],
    ["Why is CaF₂ more soluble in acidic solution than in pure water?", "F⁻ reacts with H⁺ to form HF", ["Ca²⁺ reacts with H⁺ to form CaH⁺", "Acid raises the value of Ksp", "Acid increases the temperature"], "F⁻ is the conjugate base of a weak acid, so H⁺ removes it and shifts the equilibrium right."]
  ]],
  ["7.14", "Free Energy of Dissolution", [
    ["NH₄NO₃ dissolves spontaneously, and the solution gets cold. What are the signs of ΔH and ΔS for dissolving?", "ΔH > 0, ΔS > 0", ["ΔH < 0, ΔS > 0", "ΔH > 0, ΔS < 0", "ΔH < 0, ΔS < 0"], "It is endothermic (cold) yet favorable, so the entropy increase must drive it."],
    ["What is the sign of ΔS when a gas such as CO₂ dissolves in water?", "Negative", ["Positive", "Zero", "It depends on pressure"], "Gas molecules lose freedom of motion when confined in solution."],
    ["A salt dissolves with ΔH = +15 kJ/mol and ΔS = +50 J/mol·K. When is dissolving favorable?", "Above 300 K", ["Below 300 K", "At all temperatures", "At no temperature"], "ΔG < 0 when T > ΔH/ΔS = 15,000/50 = 300 K."],
    ["A solid dissolves exothermically, and ΔS for dissolving is positive. When is dissolving favorable?", "At all temperatures", ["Only at high temperatures", "Only at low temperatures", "At no temperature"], "ΔH < 0 and ΔS > 0 make ΔG negative at every temperature."]
  ]]
]},
{ n: 8, name: "Acids and Bases", weight: "11–15%", topics: [
  ["8.1", "Introduction to Acids and Bases", [
    ["What is the pH of 0.0050 M HNO₃?", "2.30", ["5.00", "2.00", "11.70"], "HNO₃ is a strong acid: −log(0.0050) = 2.30."],
    ["At 50°C, Kw = 5.5 × 10⁻¹⁴. What is the pH of pure water at 50°C, and is it acidic, basic, or neutral?", "6.63; neutral", ["7.00; neutral", "6.63; acidic", "7.37; basic"], "[H₃O⁺] = √(5.5 × 10⁻¹⁴) = 2.3 × 10⁻⁷, pH = 6.63. [H₃O⁺] still equals [OH⁻], so it is neutral."],
    ["A solution has pH 3.40 at 25°C. What is [OH⁻]?", "2.5 × 10⁻¹¹ M", ["4.0 × 10⁻⁴ M", "3.4 × 10⁻¹¹ M", "1.1 × 10⁻¹⁰ M"], "pOH = 10.60, so [OH⁻] = 10⁻¹⁰·⁶ = 2.5 × 10⁻¹¹ M."],
    ["A solution has [H₃O⁺] = 4.0 × 10⁻⁹ M. What are its pH and character?", "8.40; basic", ["8.40; acidic", "5.60; acidic", "9.00; basic"], "pH = −log(4.0 × 10⁻⁹) = 8.40, above 7."]
  ]],
  ["8.2", "pH and pOH of Strong Acids and Bases", [
    ["What is the pH of 0.020 M Ba(OH)₂?", "12.60", ["12.30", "1.40", "1.70"], "Each Ba(OH)₂ gives 2 OH⁻: [OH⁻] = 0.040 M, pOH = 1.40, pH = 12.60."],
    ["50.0 mL of 0.10 M HCl is mixed with 50.0 mL of 0.060 M NaOH. What is the pH?", "1.70", ["1.00", "1.22", "2.00"], "Excess H⁺ = 0.0050 − 0.0030 = 0.0020 mol in 0.100 L = 0.020 M."],
    ["HCl with pH 3.0 is diluted by a factor of 100. What is the new pH?", "5.0", ["3.0", "1.0", "6.0"], "[H⁺] drops from 10⁻³ to 10⁻⁵ M."],
    ["What is the pH of 1.0 × 10⁻⁸ M HCl at 25°C?", "Slightly less than 7", ["8.00", "Exactly 7.00", "6.00"], "The acid is so dilute that water's own H⁺ (10⁻⁷ M) dominates; adding a little acid makes it slightly acidic, not basic."]
  ]],
  ["8.3", "Weak Acid and Base Equilibria", [
    ["What is the pH of 0.20 M HF (Ka = 6.8 × 10⁻⁴)?", "1.93", ["0.70", "3.17", "3.87"], "[H⁺] = √(6.8 × 10⁻⁴ × 0.20) = 0.0117 M, pH = 1.93. Treating HF as strong gives 0.70."],
    ["A 0.10 M solution of a weak acid has pH 3.00. What is Ka?", "1.0 × 10⁻⁵", ["1.0 × 10⁻³", "1.0 × 10⁻⁴", "1.0 × 10⁻⁶"], "[H⁺] = 1.0 × 10⁻³, so Ka = (1.0 × 10⁻³)²/0.10."],
    ["What is the pH of 0.10 M NH₃ (Kb = 1.8 × 10⁻⁵)?", "11.13", ["2.87", "13.00", "8.87"], "[OH⁻] = √(1.8 × 10⁻⁶) = 1.34 × 10⁻³, pOH = 2.87, pH = 11.13."],
    ["A weak acid solution is diluted tenfold. What happens to its percent ionization?", "It increases", ["It decreases", "It stays the same", "It becomes 100%"], "Dilution shifts HA ⇌ H⁺ + A⁻ toward more particles, so a larger fraction ionizes (though [H⁺] falls)."]
  ]],
  ["8.4", "Acid-Base Reactions and Buffers", [
    ["0.10 mol of acetic acid (pKa 4.74) is mixed with 0.050 mol of NaOH in water. What is the pH?", "4.74", ["7.00", "2.87", "9.26"], "Half the acid is converted to acetate, so [HA] = [A⁻] and pH = pKa."],
    ["Which mixture forms a buffer?", "HNO₂ + NaNO₂", ["HCl + NaCl", "NaOH + NaCl", "HNO₃ + NaNO₃"], "A buffer needs a weak acid and its conjugate base."],
    ["Equal moles of NH₃ and HCl are mixed. What is the pH of the resulting solution?", "Below 7", ["Exactly 7", "Above 7", "Equal to the pKb"], "The product NH₄⁺ is a weak acid."],
    ["0.010 mol of HCl is added to a buffer containing 0.10 mol CH₃COOH and 0.10 mol CH₃COO⁻ (pKa 4.74). What is the new pH?", "4.65", ["4.83", "2.00", "4.74"], "Acetate becomes 0.09 mol and acid 0.11 mol: 4.74 + log(0.09/0.11) = 4.65."]
  ]],
  ["8.5", "Acid-Base Titrations", [
    ["The titration curve shows a weak acid titrated with NaOH. What is the pKa of the acid?", "About 4.7", ["About 8.7", "About 7.0", "About 2.9"], "At half the equivalence volume (12.5 mL), pH = pKa ≈ 4.7.", { t: "line", title: "Titration of 25.0 mL weak acid with 0.10 M NaOH", x: { min: 0, max: 40, ticks: [0, 5, 10, 15, 20, 25, 30, 35, 40], label: "Volume of NaOH added (mL)" }, y: { min: 0, max: 14, ticks: [0, 2, 4, 6, 8, 10, 12, 14], label: "pH" }, series: [{ name: "pH", pts: [[0, 2.9], [2.5, 3.8], [5, 4.1], [7.5, 4.4], [10, 4.6], [12.5, 4.7], [15, 4.9], [17.5, 5.1], [20, 5.3], [22.5, 5.7], [24, 6.1], [24.9, 7.1], [25, 8.7], [25.1, 10.3], [26, 11.3], [30, 12.0], [35, 12.2], [40, 12.4]] }] }],
    ["In the same titration, why is the pH at the equivalence point above 7?", "The conjugate base makes OH⁻ with water", ["Excess NaOH remains in the flask", "The weak acid is not fully used up", "Na⁺ ions make OH⁻ with water"], "At equivalence, only A⁻ remains, and it is a weak base.", { t: "line", title: "Titration of 25.0 mL weak acid with 0.10 M NaOH", x: { min: 0, max: 40, ticks: [0, 5, 10, 15, 20, 25, 30, 35, 40], label: "Volume of NaOH added (mL)" }, y: { min: 0, max: 14, ticks: [0, 2, 4, 6, 8, 10, 12, 14], label: "pH" }, series: [{ name: "pH", pts: [[0, 2.9], [2.5, 3.8], [5, 4.1], [7.5, 4.4], [10, 4.6], [12.5, 4.7], [15, 4.9], [17.5, 5.1], [20, 5.3], [22.5, 5.7], [24, 6.1], [24.9, 7.1], [25, 8.7], [25.1, 10.3], [26, 11.3], [30, 12.0], [35, 12.2], [40, 12.4]] }] }],
    ["25.0 mL of 0.10 M acetic acid (pKa 4.74) is titrated with 0.10 M NaOH. What is the pH after 12.5 mL of NaOH is added?", "4.74", ["7.00", "2.87", "8.72"], "12.5 mL is the half-equivalence point, where pH = pKa."],
    ["A diprotic acid reaches its first equivalence point after 15.0 mL of NaOH. When is the second equivalence point?", "30.0 mL", ["22.5 mL", "15.0 mL", "45.0 mL"], "Each proton needs the same amount of base, so the second point is at twice the volume."]
  ]],
  ["8.6", "Molecular Structure of Acids and Bases", [
    ["Which is the strongest acid?", "HClO₄", ["HClO₃", "HClO₂", "HClO"], "More oxygen atoms pull electron density away and stabilize the conjugate base."],
    ["Which hydrogen halide is the strongest acid in water?", "HI", ["HBr", "HCl", "HF"], "The H–I bond is the weakest, so H⁺ is released most easily."],
    ["Why is CCl₃COOH a much stronger acid than CH₃COOH?", "Cl atoms stabilize the conjugate base", ["It has more hydrogen atoms", "Its O–H bond is stronger", "It forms hydrogen bonds with water"], "Electronegative Cl atoms withdraw electron density and spread out the negative charge on the anion."],
    ["Which is the stronger acid, H₂S or H₂O?", "H₂S", ["H₂O", "They are equally strong", "It cannot be determined"], "The H–S bond is longer and weaker than the H–O bond."]
  ]],
  ["8.7", "pH and pKa", [
    ["An acid with pKa 6.5 is in a solution at pH 8.5. What is the ratio [A⁻]/[HA]?", "100", ["0.01", "2", "10"], "pH − pKa = 2, so [A⁻]/[HA] = 10²."],
    ["An indicator (pKa 9.3) is placed in a solution at pH 5.0. Which form predominates?", "HIn, the acid form", ["In⁻, the base form", "Equal amounts of each", "Neither form"], "pH is well below pKa, so the protonated form dominates."],
    ["An amino acid's carboxyl group has pKa 2.3. At pH 7.4, it is mostly", "deprotonated (–COO⁻)", ["protonated (–COOH)", "half protonated", "fully neutral"], "pH is far above pKa."],
    ["At pH = pKa − 1, what fraction of an acid is in the protonated form (HA)?", "About 91%", ["50%", "About 9%", "10%"], "[HA]/[A⁻] = 10, so HA is 10/11 ≈ 91%."]
  ]],
  ["8.8", "Properties of Buffers", [
    ["Which acid–base pair is the best choice for a buffer at pH 7.2?", "H₂PO₄⁻/HPO₄²⁻ (pKa 7.2)", ["CH₃COOH/CH₃COO⁻ (pKa 4.7)", "NH₄⁺/NH₃ (pKa 9.3)", "HCO₃⁻/CO₃²⁻ (pKa 10.3)"], "The best buffer has a pKa close to the target pH."],
    ["Over about what pH range is a buffer with pKa 5.0 effective?", "4.0 to 6.0", ["5.0 to 7.0", "3.0 to 5.0", "0 to 14"], "Buffers work best within about pKa ± 1."],
    ["A small amount of NaOH is added to a buffer. What happens to the pH?", "It rises slightly", ["It rises sharply", "It falls slightly", "It does not change"], "The weak acid neutralizes most of the OH⁻, so the pH changes only a little."],
    ["Why is a solution of 0.10 M HCl and 0.10 M NaCl not a buffer?", "Cl⁻ is too weak a base", ["HCl is a weak acid", "Na⁺ reacts with water", "It has too little acid"], "Cl⁻ can't neutralize added acid, so there is no reservoir of base."]
  ]],
  ["8.9", "Henderson-Hasselbalch Equation", [
    ["What is the pH of a solution that is 0.30 M HA and 0.10 M NaA (pKa 4.20)?", "3.72", ["4.68", "4.20", "3.20"], "pH = 4.20 + log(0.10/0.30) = 4.20 − 0.48."],
    ["What ratio [A⁻]/[HA] gives pH 5.00 for an acid with pKa 4.74?", "1.8", ["0.55", "0.26", "2.6"], "log(ratio) = 0.26, so the ratio = 10^0.26 = 1.8."],
    ["A buffer contains 0.20 mol NH₃ and 0.10 mol NH₄Cl (pKa of NH₄⁺ = 9.26). What is its pH?", "9.56", ["8.96", "9.26", "4.74"], "pH = 9.26 + log(0.20/0.10) = 9.26 + 0.30."],
    ["0.020 mol of NaOH is added to a buffer with 0.10 mol HA and 0.10 mol A⁻ (pKa 5.00). What is the new pH?", "5.18", ["4.82", "5.00", "5.30"], "HA becomes 0.08 mol and A⁻ 0.12 mol: 5.00 + log(0.12/0.08) = 5.18."]
  ]],
  ["8.10", "Buffer Capacity", [
    ["Which buffer has the greatest buffer capacity?", "1.0 M HA / 1.0 M A⁻", ["0.10 M HA / 0.10 M A⁻", "1.0 M HA / 0.10 M A⁻", "0.50 M HA / 0.50 M A⁻"], "Capacity depends on the amounts of both components; the most concentrated equal-ratio buffer resists best."],
    ["A buffer contains 0.10 mol HA and 0.10 mol A⁻. About how much NaOH can it absorb before its capacity is exceeded?", "0.10 mol", ["0.20 mol", "0.050 mol", "0.010 mol"], "Once all 0.10 mol HA is used up, there is no acid left to neutralize more OH⁻."],
    ["A buffer has 0.20 mol A⁻ and 0.050 mol HA. Which does it resist better?", "Added strong acid", ["Added strong base", "Both equally", "Neither"], "It has more base (A⁻) to neutralize added acid."],
    ["0.15 mol of HCl is added to a buffer with 0.10 mol A⁻ and 0.10 mol HA. What happens to the pH?", "It drops sharply", ["It barely changes", "It rises", "It equals pKa"], "Only 0.10 mol of A⁻ can react; the extra 0.05 mol of strong acid lowers the pH a lot."]
  ]]
]},
{ n: 9, name: "Applications of Thermodynamics", weight: "7–9%", topics: [
  ["9.1", "Introduction to Entropy", [
    ["Which process has ΔS < 0?", "2 H₂(g) + O₂(g) → 2 H₂O(l)", ["H₂O(l) → H₂O(g)", "CaCO₃(s) → CaO(s) + CO₂(g)", "NaCl(s) → Na⁺(aq) + Cl⁻(aq)"], "Three moles of gas become liquid, greatly reducing dispersal."],
    ["Which has the highest standard molar entropy?", "C₂H₅OH(g)", ["C₂H₅OH(l)", "CH₄(g)", "Ne(g)"], "A gas has higher entropy than a liquid, and a larger, more complex molecule has more ways to move."],
    ["What is the sign of ΔS for CaCO₃(s) → CaO(s) + CO₂(g)?", "Positive", ["Negative", "Zero", "It depends on T"], "A gas forms from a solid."],
    ["Why does standard molar entropy increase with molecular complexity (for example, CH₄ < C₂H₆ < C₃H₈)?", "More ways to vibrate and rotate", ["Bigger molecules move faster", "Bigger molecules have less mass", "Bonds store entropy directly"], "More atoms mean more ways to distribute energy."]
  ]],
  ["9.2", "Absolute Entropy and Entropy Change", [
    ["Use the table to find ΔS° for N₂(g) + 3 H₂(g) → 2 NH₃(g).", "−199 J/K", ["+199 J/K", "−2 J/K", "+389 J/K"], "ΔS° = 2(193) − [192 + 3(131)] = 386 − 585 = −199 J/K.", { t: "table", title: "Standard molar entropies", head: ["Substance", "S° (J/(mol·K))"], rows: [["N₂(g)", "192"], ["H₂(g)", "131"], ["NH₃(g)", "193"]] }],
    ["Use S° values (SO₂ 248, O₂ 205, SO₃ 257 J/mol·K) to find ΔS° for 2 SO₂ + O₂ → 2 SO₃.", "−187 J/K", ["+187 J/K", "−196 J/K", "−9 J/K"], "2(257) − [2(248) + 205] = 514 − 701 = −187 J/K."],
    ["S° for H₂O(l) is 70 J/mol·K and for H₂O(g) is 189 J/mol·K. What is ΔS° for vaporizing 1 mol of water?", "+119 J/K", ["−119 J/K", "+259 J/K", "+189 J/K"], "189 − 70 = +119 J/K."],
    ["Which has an absolute entropy of zero?", "A perfect crystal at 0 K", ["An element at 298 K", "Any solid at 0°C", "A pure gas at 1 atm"], "The third law of thermodynamics."]
  ]],
  ["9.3", "Gibbs Free Energy and Thermodynamic Favorability", [
    ["A reaction has ΔH = +40 kJ and ΔS = +100 J/K. When is it favorable?", "Above 400 K", ["Below 400 K", "At all temperatures", "At no temperature"], "ΔG < 0 when T > ΔH/ΔS = 40,000/100."],
    ["A reaction has ΔH = −50 kJ and ΔS = +20 J/K. When is it favorable?", "At all temperatures", ["Only above 2,500 K", "Only below 2,500 K", "At no temperature"], "Both terms make ΔG negative."],
    ["ΔH° = −92.2 kJ and ΔS° = −198.7 J/K. What is ΔG° at 298 K?", "−33.0 kJ", ["−151 kJ", "+33.0 kJ", "+59,100 kJ"], "ΔG = −92.2 − (298)(−0.1987) = −33.0 kJ. Forgetting to convert J to kJ gives +59,100."],
    ["A reaction has ΔG° > 0 at 298 K. What is true of K at 298 K?", "K < 1", ["K > 1", "K = 1", "K = 0"], "ΔG° = −RT ln K, so a positive ΔG° means ln K < 0."]
  ]],
  ["9.4", "Thermodynamic and Kinetic Control", [
    ["Diamond → graphite has ΔG° < 0, but diamonds last for centuries. Why?", "The activation energy is very high", ["ΔG° becomes positive in air", "Diamond has greater entropy", "The reaction is at equilibrium"], "The reaction is thermodynamically favorable but kinetically extremely slow."],
    ["Gasoline and oxygen don't react at room temperature until a spark is applied. The reaction is", "favorable but kinetically controlled", ["unfavorable until it is sparked", "at equilibrium before the spark", "endothermic and entropy-driven"], "ΔG is very negative, but the activation energy must be supplied first."],
    ["A catalyst is added to a slow reaction with ΔG° = −200 kJ. What changes?", "The rate increases; ΔG° is unchanged", ["ΔG° becomes more negative", "K increases", "The rate and ΔG° both change"], "A catalyst affects only the pathway and rate."],
    ["Which quantity does a catalyst change?", "Activation energy", ["ΔG°", "K", "ΔH"], "Thermodynamic quantities are unaffected by a catalyst."]
  ]],
  ["9.5", "Free Energy and Equilibrium", [
    ["A reaction has ΔG° = +5.70 kJ/mol at 298 K. What is K? (R = 8.314 J/mol·K)", "0.10", ["10", "1.0", "0.0023"], "ln K = −5,700/(8.314 × 298) = −2.30, so K = 0.10."],
    ["A reaction has K = 1.0 × 10⁵ at 298 K. What is ΔG°?", "−28.5 kJ", ["+28.5 kJ", "−12.4 kJ", "−2.85 kJ"], "ΔG° = −(8.314)(298)(ln 10⁵) = −28,500 J. Using log instead of ln gives −12.4 kJ."],
    ["What is true at equilibrium?", "ΔG = 0 and Q = K", ["ΔG° = 0 and K = 1", "ΔG = ΔG°", "ΔG < 0 and Q < K"], "At equilibrium there is no driving force, so ΔG = 0; ΔG° is generally not zero."],
    ["A reaction mixture has Q < K. What is the sign of ΔG?", "Negative", ["Positive", "Zero", "It depends on ΔH"], "ΔG = RT ln(Q/K), which is negative when Q < K."]
  ]],
  ["9.6", "Coupled Reactions", [
    ["A reaction with ΔG° = +20 kJ is coupled to one with ΔG° = −35 kJ. What is ΔG° for the combined process?", "−15 kJ", ["+55 kJ", "−55 kJ", "+15 kJ"], "ΔG° values add: 20 + (−35)."],
    ["Cu₂S → 2 Cu + S has ΔG° = +86 kJ. It is coupled with S + O₂ → SO₂ (ΔG° = −300 kJ). What is ΔG° for Cu₂S + O₂ → 2 Cu + SO₂?", "−214 kJ", ["+386 kJ", "−386 kJ", "+214 kJ"], "86 + (−300) = −214 kJ."],
    ["Why can a favorable reaction drive an unfavorable one?", "They share a species, so their ΔG values add", ["The favorable one lowers the activation energy", "The unfavorable one becomes exothermic", "Coupling increases K for each reaction"], "When the reactions are combined into one overall process, the total ΔG is negative."],
    ["What supplies the energy that drives the thermodynamically unfavorable reactions of photosynthesis?", "Light", ["Heat from the soil", "A catalyst", "Entropy of the leaf"], "Absorbed photons provide the free energy."]
  ]],
  ["9.7", "Galvanic (Voltaic) and Electrolytic Cells", [
    ["A galvanic cell uses Ag⁺/Ag (E° = +0.80 V) and Zn²⁺/Zn (E° = −0.76 V). What is E°cell?", "1.56 V", ["0.04 V", "2.36 V", "0.84 V"], "0.80 − (−0.76) = 1.56 V. Doubling the Ag potential (2.36 V) is a common error; E° doesn't depend on coefficients."],
    ["In the Ag/Zn cell, in which direction do electrons flow in the external wire?", "From Zn to Ag", ["From Ag to Zn", "Through the salt bridge", "Both ways equally"], "Zn is oxidized at the anode and electrons travel to the cathode."],
    ["In a galvanic cell, which way do anions in the salt bridge move?", "Toward the anode", ["Toward the cathode", "They do not move", "Into the wire"], "The anode compartment gains positive ions as the metal is oxidized, so anions move in to balance the charge."],
    ["In an electrolytic cell, what happens at the cathode?", "Reduction; it is negative", ["Oxidation; it is negative", "Reduction; it is positive", "Oxidation; it is positive"], "Reduction always happens at the cathode; in electrolysis, the power source makes it negative."]
  ]],
  ["9.8", "Cell Potential and Free Energy", [
    ["Use the table to find E°cell for Zn + Cu²⁺ → Zn²⁺ + Cu.", "+1.10 V", ["+0.42 V", "−1.10 V", "−0.42 V"], "E°cell = E°(cathode) − E°(anode) = 0.34 − (−0.76) = +1.10 V.", { t: "table", title: "Standard reduction potentials at 25°C", head: ["Half-reaction", "E° (V)"], rows: [["Cu²⁺ + 2e⁻ → Cu", "+0.34"], ["2H⁺ + 2e⁻ → H₂", "0.00"], ["Zn²⁺ + 2e⁻ → Zn", "−0.76"]] }],
    ["The Ag/Zn cell has E° = 1.56 V with n = 2. What is ΔG°? (F = 96,485 C/mol)", "−301 kJ", ["−151 kJ", "+301 kJ", "−0.301 kJ"], "ΔG° = −nFE° = −2 × 96,485 × 1.56 = −301,000 J."],
    ["A cell has E°cell > 0. What must be true of K?", "K > 1", ["K < 1", "K = 1", "K = 0"], "Positive E° means negative ΔG°, which means K > 1."],
    ["A redox reaction has E° = −0.20 V as written. Which is true?", "It is not favorable; ΔG° > 0", ["It is favorable; ΔG° < 0", "It is at equilibrium; ΔG° = 0", "It is favorable; ΔG° > 0"], "A negative E° gives a positive ΔG°."]
  ]],
  ["9.9", "Cell Potential Under Nonstandard Conditions", [
    ["For the Zn/Cu cell (E° = 1.10 V), [Zn²⁺] = 1.0 M and [Cu²⁺] = 0.010 M. What is E?", "1.04 V", ["1.16 V", "1.10 V", "0.98 V"], "E = 1.10 − (0.0592/2) log(1.0/0.010) = 1.10 − 0.059 = 1.04 V."],
    ["A cell has Cu | Cu²⁺ (0.010 M) || Cu²⁺ (1.0 M) | Cu. Which is true?", "E° = 0, but E > 0", ["E° = 0 and E = 0", "E° > 0 and E = 0", "E° = 0.34 V"], "Both half-cells are the same, so E° = 0, but the concentration difference produces a voltage."],
    ["A battery is 'dead.' What is true?", "Q = K and E = 0", ["Q = 0 and E = E°", "K = 0 and E > 0", "Q > K and E > 0"], "The reaction has reached equilibrium, so there is no driving force."],
    ["In a Zn/Cu cell, [Zn²⁺] is increased. What happens to E?", "It decreases", ["It increases", "It stays the same", "It becomes E°"], "Zn²⁺ is a product, so increasing it raises Q and lowers E."]
  ]],
  ["9.10", "Electrolysis and Faraday's Law", [
    ["How long must a 2.00 A current run to deposit 1.00 g of Ag (107.9 g/mol) from Ag⁺? (F = 96,485 C/mol)", "447 s", ["894 s", "224 s", "48.3 s"], "0.00927 mol Ag needs 0.00927 mol e⁻ = 894 C. 894 C ÷ 2.00 A = 447 s."],
    ["What mass of Al (26.98 g/mol) is produced from Al³⁺ by a 3.00 A current for 1.00 h?", "1.01 g", ["3.02 g", "0.336 g", "60.4 g"], "10,800 C ÷ 96,485 = 0.112 mol e⁻. ÷ 3 = 0.0373 mol Al = 1.01 g."],
    ["The same current passes through Ag⁺ and Cu²⁺ cells in series. How do the moles of metal deposited compare?", "Twice as many moles of Ag", ["Twice as many moles of Cu", "Equal moles of each", "Equal masses of each"], "Ag⁺ needs 1 electron per atom and Cu²⁺ needs 2."],
    ["During electrolysis of molten NaCl, what forms at the anode?", "Cl₂ gas", ["Na metal", "H₂ gas", "O₂ gas"], "Oxidation occurs at the anode: 2 Cl⁻ → Cl₂ + 2 e⁻."]
  ]]
]}
);
