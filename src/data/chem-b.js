// AP Chemistry — Units 5–9. Question format: [stem, correct, [distractors], explanation, figure?]
AP_DATA.chem.units.push(
{ n: 5, name: "Kinetics", weight: "7–9%", topics: [
  ["5.1", "Reaction Rates", [
    ["Which change usually increases the rate of a reaction between a solid and a solution?", "Grinding the solid into a powder", ["Using larger pieces of the solid", "Diluting the solution", "Cooling the mixture"], "More surface area means more particles exposed for collisions."],
    ["For 2 N₂O₅ → 4 NO₂ + O₂, if N₂O₅ is consumed at 0.020 M/s, at what rate is NO₂ formed?", "0.040 M/s", ["0.020 M/s", "0.010 M/s", "0.080 M/s"], "NO₂ forms twice as fast as N₂O₅ is used (4 : 2 ratio)."],
    ["The graph shows the concentration of a reactant over time. What happens to the reaction rate as time goes on?", "It decreases, because the reactant concentration falls", ["It increases", "It stays constant", "It drops to zero right away"], "The curve's slope gets less steep as the reactant is used up, so the rate slows.", { t: "line", title: "Reactant concentration over time", x: { min: 0, max: 100, ticks: [0, 20, 40, 60, 80, 100], label: "Time (s)" }, y: { min: 0, max: 1, ticks: [0, 0.25, 0.5, 0.75, 1], label: "[A] (M)" }, series: [{ name: "[A]", pts: [[0, 1], [10, 0.71], [20, 0.5], [30, 0.35], [40, 0.25], [50, 0.18], [60, 0.125], [70, 0.088], [80, 0.063], [90, 0.044], [100, 0.031]] }] }],
    ["Which method could be used to measure the rate of CaCO₃(s) + 2 HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)?", "Measuring the volume of CO₂ collected over time", ["Measuring the color of the solution", "Measuring the mass of HCl added once", "Measuring the final temperature only"], "The rate can be followed by tracking any reactant or product that changes measurably over time."]
  ]],
  ["5.2", "Introduction to Rate Law", [
    ["Use the data to find the rate law for A + B → C.", "Rate = k[A]²", ["Rate = k[A][B]", "Rate = k[A]", "Rate = k[A]²[B]"], "Doubling [A] (trials 1→2) quadruples the rate, so second order in A. Doubling [B] (1→3) doesn't change the rate, so zero order in B.", { t: "table", title: "Initial rate data", head: ["Trial", "[A] (M)", "[B] (M)", "Initial rate (M/s)"], rows: [["1", "0.10", "0.10", "2.0 × 10⁻³"], ["2", "0.20", "0.10", "8.0 × 10⁻³"], ["3", "0.10", "0.20", "2.0 × 10⁻³"]] }],
    ["A reaction has the rate law Rate = k[X][Y]. What is the overall order?", "2", ["1", "0", "3"], "Add the exponents: 1 + 1 = 2."],
    ["What are the units of k for a first-order reaction?", "s⁻¹", ["M/s", "M⁻¹ s⁻¹", "M⁻² s⁻¹"], "Rate (M/s) = k × [A] (M), so k has units of 1/s."],
    ["For Rate = k[NO]²[O₂], if [NO] is tripled and [O₂] stays the same, the rate", "increases by a factor of 9", ["triples", "increases by a factor of 6", "does not change"], "The rate depends on [NO] squared: 3² = 9."]
  ]],
  ["5.3", "Concentration Changes Over Time", [
    ["A first-order reaction has a half-life of 10 minutes. What fraction of the reactant remains after 30 minutes?", "1/8", ["1/3", "1/6", "1/4"], "30 minutes is 3 half-lives: (1/2)³ = 1/8."],
    ["For a first-order reaction, which plot gives a straight line?", "ln[A] versus time", ["[A] versus time", "1/[A] versus time", "[A]² versus time"], "The integrated rate law ln[A] = −kt + ln[A]₀ is linear, with slope −k."],
    ["A plot of 1/[A] versus time is a straight line with a positive slope. What is the order of the reaction?", "Second order", ["Zero order", "First order", "Third order"], "For second-order reactions, 1/[A] = kt + 1/[A]₀."],
    ["Radioactive decay is first order. The half-life of a first-order reaction", "does not depend on the starting concentration", ["doubles as the concentration halves", "depends on the amount of product", "gets shorter as the reaction goes on"], "t½ = 0.693/k, which is independent of [A]₀."]
  ]],
  ["5.4", "Elementary Reactions", [
    ["What is the rate law for the elementary step 2 NO₂ → NO₃ + NO?", "Rate = k[NO₂]²", ["Rate = k[NO₂]", "Rate = k[NO₃][NO]", "It cannot be written without experimental data"], "For an elementary step, the exponents equal the coefficients (molecularity)."],
    ["The elementary step A + B → C is described as", "bimolecular", ["unimolecular", "termolecular", "zero order"], "Two particles collide in this step."],
    ["Why can't the rate law for an overall reaction be written from its balanced equation?", "The overall reaction may happen in several steps, and the slowest step controls the rate", ["Balanced equations are often wrong", "Rate laws only depend on temperature", "Products always appear in the rate law"], "Only elementary steps can be written directly from coefficients."],
    ["Termolecular elementary steps are rare because", "three particles colliding at the same time with the right orientation is very unlikely", ["they release too much energy", "they have no activation energy", "they only happen in solids"], "Simultaneous three-body collisions are improbable."]
  ]],
  ["5.5", "Collision Model", [
    ["According to collision theory, a collision leads to a reaction only if the particles", "collide with enough energy and the correct orientation", ["are the same size", "are moving slowly", "collide with each other twice"], "Both the activation energy requirement and proper orientation must be met."],
    ["Raising the temperature speeds up most reactions mainly because", "a larger fraction of collisions have energy equal to or above the activation energy", ["the activation energy decreases", "the particles get bigger", "the reaction becomes exothermic"], "At higher T, more particles are in the high-energy tail of the distribution."],
    ["Increasing the concentration of a reactant increases the rate because", "collisions happen more often", ["the activation energy decreases", "each collision has more energy", "the temperature rises"], "More particles per volume means more frequent collisions."],
    ["The shaded region under a Maxwell–Boltzmann curve to the right of Eₐ represents", "the fraction of particles with enough energy to react", ["the activation energy", "the total energy of the system", "the particles that have already reacted"], "Only these particles can overcome the energy barrier when they collide."]
  ]],
  ["5.6", "Reaction Energy Profile", [
    ["The energy profile shows a reaction. What is its activation energy for the forward reaction?", "About 80 kJ/mol", ["About 30 kJ/mol", "About 50 kJ/mol", "About 110 kJ/mol"], "Eₐ is the difference between the peak (110) and the reactants (30): 80 kJ/mol.", { t: "line", title: "Reaction energy profile", x: { min: 0, max: 10, ticks: [0, 5, 10], label: "Reaction progress" }, y: { min: 0, max: 120, ticks: [0, 30, 60, 90, 120], label: "Potential energy (kJ/mol)" }, series: [{ name: "Energy", pts: [[0, 30], [2, 30], [3, 45], [4, 85], [5, 110], [6, 85], [7, 30], [8, 5], [10, 5]] }] }],
    ["In the same energy profile, the reaction is", "exothermic, because the products are lower in energy than the reactants", ["endothermic", "neither exothermic nor endothermic", "impossible to classify"], "Products at 5 kJ/mol are below reactants at 30, so ΔH ≈ −25 kJ/mol.", { t: "line", title: "Reaction energy profile", x: { min: 0, max: 10, ticks: [0, 5, 10], label: "Reaction progress" }, y: { min: 0, max: 120, ticks: [0, 30, 60, 90, 120], label: "Potential energy (kJ/mol)" }, series: [{ name: "Energy", pts: [[0, 30], [2, 30], [3, 45], [4, 85], [5, 110], [6, 85], [7, 30], [8, 5], [10, 5]] }] }],
    ["The peak of a reaction energy profile corresponds to", "the transition state (activated complex)", ["the products", "an intermediate that can be isolated", "the reactants"], "The transition state is the highest-energy arrangement along the path."],
    ["For an endothermic reaction, how does the activation energy of the reverse reaction compare with that of the forward reaction?", "It is smaller", ["It is larger", "They are equal", "The reverse reaction has no activation energy"], "Eₐ(reverse) = Eₐ(forward) − ΔH. With ΔH > 0, the reverse barrier is smaller."]
  ]],
  ["5.7", "Introduction to Reaction Mechanisms", [
    ["Consider the mechanism: Step 1: NO₂ + NO₂ → NO₃ + NO; Step 2: NO₃ + CO → NO₂ + CO₂. Which species is an intermediate?", "NO₃", ["NO₂", "CO", "CO₂"], "NO₃ is made in step 1 and used up in step 2, so it doesn't appear in the overall reaction."],
    ["What is the overall reaction for the mechanism: Step 1: NO₂ + NO₂ → NO₃ + NO; Step 2: NO₃ + CO → NO₂ + CO₂?", "NO₂ + CO → NO + CO₂", ["2 NO₂ + CO → NO₃ + CO₂", "NO₃ + CO → NO + CO₂", "NO₂ + NO₂ + CO → 2 NO + CO₂"], "Add the steps and cancel species on both sides (one NO₂ and the NO₃)."],
    ["How is a catalyst different from an intermediate in a mechanism?", "A catalyst is used in an early step and made again later; an intermediate is made and then used up", ["They are the same thing", "A catalyst appears in the overall equation", "An intermediate speeds up the reaction"], "Catalysts are present at the start and end; intermediates appear only during the reaction."],
    ["A proposed mechanism is acceptable if", "its steps add up to the overall reaction and it agrees with the experimental rate law", ["it has only one step", "it contains no intermediates", "every step is fast"], "Mechanisms can't be proven, only shown to be consistent with the evidence."]
  ]],
  ["5.8", "Reaction Mechanism and Rate Law", [
    ["A mechanism has a slow first step: NO₂ + NO₂ → NO₃ + NO, followed by a fast step. What rate law does it predict?", "Rate = k[NO₂]²", ["Rate = k[NO₂][CO]", "Rate = k[NO₃][CO]", "Rate = k[CO]"], "The slow (rate-determining) step controls the rate, and its rate law comes from its molecularity."],
    ["The rate-determining step in a mechanism is", "the slowest step", ["the fastest step", "always the last step", "the step with the smallest activation energy"], "The overall rate can't be faster than its slowest step."],
    ["The experimental rate law for 2 NO + O₂ → 2 NO₂ is Rate = k[NO]²[O₂]. Which single elementary step would agree with it?", "2 NO + O₂ → 2 NO₂", ["NO + O₂ → NO₃", "NO + NO → N₂O₂ (as the only step)", "O₂ → 2 O"], "A termolecular step with these coefficients gives Rate = k[NO]²[O₂], though multistep mechanisms can also agree."],
    ["If a mechanism's rate-determining step is the second step, the rate law may include", "reactants from a fast equilibrium step before it", ["only products", "only the catalyst", "no concentrations at all"], "An intermediate in the slow step is replaced using the equilibrium of the earlier fast step."]
  ]],
  ["5.9", "Steady-State Approximation", [
    ["The steady-state approximation assumes that", "the concentration of an intermediate stays roughly constant because it forms and is used at the same rate", ["all reactants are used up immediately", "the reaction is at equilibrium overall", "the catalyst is consumed"], "It lets you express an intermediate's concentration using reactant concentrations."],
    ["Mechanism: Step 1 (fast, reversible): 2 NO ⇌ N₂O₂; Step 2 (slow): N₂O₂ + O₂ → 2 NO₂. What is the rate law?", "Rate = k[NO]²[O₂]", ["Rate = k[N₂O₂][O₂]", "Rate = k[NO][O₂]", "Rate = k[NO]²"], "Rate = k₂[N₂O₂][O₂]. From the fast equilibrium, [N₂O₂] = K[NO]², so Rate = k[NO]²[O₂]."],
    ["Why can't an intermediate's concentration appear in the final rate law?", "Intermediates can't be measured or controlled like reactants", ["Intermediates don't exist", "Intermediates are always products", "Intermediates have zero concentration"], "Rate laws are written in terms of species that can be measured and adjusted."],
    ["In a fast pre-equilibrium followed by a slow step, the fast step", "reaches equilibrium, so its forward and reverse rates are equal", ["controls the overall rate", "has a very high activation energy", "only goes in reverse"], "Setting forward and reverse rates equal gives an expression for the intermediate."]
  ]],
  ["5.10", "Multistep Reaction Energy Profile", [
    ["An energy profile for a two-step reaction has two peaks. The valley between them represents", "an intermediate", ["the transition state", "the products", "the catalyst"], "Intermediates sit in local energy minima between transition states."],
    ["In a two-step energy profile, the first peak is much higher than the second. Which step is rate-determining?", "The first step", ["The second step", "Both equally", "Neither"], "The step with the highest activation energy (tallest barrier from its starting point) is slowest."],
    ["How many transition states does a three-step mechanism have?", "3", ["1", "2", "4"], "Each elementary step has its own transition state (peak)."],
    ["The overall ΔH of a multistep reaction is shown on its energy profile by", "the difference in energy between the starting reactants and the final products", ["the height of the tallest peak", "the energy of the intermediate", "the number of peaks"], "ΔH depends only on the start and end, not the path."]
  ]],
  ["5.11", "Catalysis", [
    ["A catalyst speeds up a reaction by", "providing a different pathway with a lower activation energy", ["raising the temperature", "increasing ΔH", "shifting the equilibrium toward products"], "A catalyst lowers Eₐ for both the forward and reverse reactions."],
    ["How does adding a catalyst affect ΔH for a reaction?", "It does not change ΔH", ["It makes ΔH more negative", "It makes ΔH more positive", "It makes ΔH zero"], "ΔH depends only on reactants and products, which a catalyst doesn't change."],
    ["Enzymes are biological catalysts that work by", "binding substrates at an active site and stabilizing the transition state", ["being used up in the reaction", "raising the body's temperature", "changing the products"], "Enzymes lower the activation energy and are regenerated."],
    ["A heterogeneous catalyst, such as platinum in a car's catalytic converter, is one that", "is in a different phase from the reactants", ["is in the same phase as the reactants", "is consumed in the reaction", "changes the equilibrium constant"], "Gas molecules adsorb onto the solid metal surface, where bonds weaken and react."]
  ]]
]},
{ n: 6, name: "Thermochemistry", weight: "7–9%", topics: [
  ["6.1", "Endothermic and Exothermic Processes", [
    ["When NH₄NO₃ dissolves in water, the solution gets colder. The process is", "endothermic, absorbing heat from the surroundings", ["exothermic", "neither", "a chemical reaction that releases energy"], "The system takes in heat from the water, so the water's temperature drops."],
    ["Which process is exothermic?", "Water vapor condensing into liquid", ["Ice melting", "Water evaporating", "Dry ice subliming"], "Forming intermolecular attractions releases energy."],
    ["For an exothermic reaction, the sign of ΔH is", "negative", ["positive", "zero", "undefined"], "The system loses heat to the surroundings, so ΔH < 0."],
    ["Breaking a chemical bond is always", "endothermic", ["exothermic", "neither", "exothermic for single bonds only"], "Energy must be added to separate bonded atoms; energy is released when bonds form."]
  ]],
  ["6.2", "Energy Diagrams", [
    ["On an energy diagram of an endothermic reaction, the products are", "higher in energy than the reactants", ["lower in energy than the reactants", "at the same energy as the reactants", "above the transition state"], "The system gains energy, so the products end up higher."],
    ["An energy diagram shows reactants at 200 kJ and products at 150 kJ. What is ΔH?", "−50 kJ", ["+50 kJ", "+350 kJ", "−350 kJ"], "ΔH = products − reactants = 150 − 200 = −50 kJ."],
    ["What does the difference in height between reactants and products on an energy diagram represent?", "ΔH, the enthalpy change", ["The activation energy", "The rate constant", "The entropy change"], "Activation energy is measured from the reactants to the peak."],
    ["On an energy diagram, adding a catalyst would", "lower the peak but not change the reactant or product levels", ["raise the product level", "lower the reactant level", "remove the peak"], "Catalysts change the path, not the starting and ending energies."]
  ]],
  ["6.3", "Heat Transfer and Thermal Equilibrium", [
    ["A hot piece of metal is placed in cool water in an insulated cup. What happens?", "Heat flows from the metal to the water until they reach the same temperature", ["Cold flows from the water into the metal", "The metal gets hotter", "Heat flows until the water is hotter than the metal"], "Energy moves from higher to lower temperature until thermal equilibrium."],
    ["At thermal equilibrium, the metal and the water have the same", "temperature", ["heat energy", "mass", "specific heat"], "Equal temperature, not equal energy, defines thermal equilibrium."],
    ["In an insulated system, the heat lost by a hot object equals", "the heat gained by the colder object", ["zero", "twice the heat gained", "its temperature change"], "Energy is conserved: q(lost) = −q(gained)."],
    ["At the particle level, heat transfer between two objects in contact happens through", "collisions between particles, which transfer kinetic energy", ["the exchange of atoms", "chemical reactions", "light only"], "Faster particles in the hot object pass energy to slower particles in the cold one."]
  ]],
  ["6.4", "Heat Capacity and Calorimetry", [
    ["How much heat is needed to raise 50.0 g of water by 10.0°C? (c = 4.18 J/(g·°C))", "2,090 J", ["209 J", "418 J", "20,900 J"], "q = mcΔT = (50.0)(4.18)(10.0) = 2,090 J."],
    ["The table shows specific heats. If equal masses of each absorb the same heat, which has the largest temperature increase?", "Copper", ["Water", "Aluminum", "Iron"], "ΔT = q/(mc). The smallest specific heat (copper) gives the biggest temperature change.", { t: "table", title: "Specific heat capacities", head: ["Substance", "Specific heat (J/(g·°C))"], rows: [["Water", "4.18"], ["Aluminum", "0.90"], ["Iron", "0.45"], ["Copper", "0.39"]] }],
    ["In a coffee-cup calorimeter, a reaction makes 100. g of solution warm by 5.0°C. What is ΔH for the reaction as run? (c = 4.18 J/(g·°C))", "About −2.1 kJ", ["About +2.1 kJ", "About −21 kJ", "About +0.50 kJ"], "q(solution) = (100.)(4.18)(5.0) = 2,090 J absorbed by the solution, so the reaction released 2.1 kJ: q(rxn) ≈ −2.1 kJ."],
    ["If some heat escapes from a calorimeter during an exothermic reaction, the calculated magnitude of ΔH will be", "too small", ["too large", "unchanged", "the wrong sign"], "The measured temperature rise is smaller than it should be."]
  ]],
  ["6.5", "Energy of Phase Changes", [
    ["The heating curve shows water being heated at a steady rate. During the flat segment at 100°C, the added energy is used to", "overcome intermolecular forces as the liquid turns to gas", ["raise the temperature of the liquid", "break covalent O–H bonds", "increase the particles' kinetic energy"], "During a phase change the temperature stays constant because energy goes into separating molecules.", { t: "line", title: "Heating curve of water", x: { min: 0, max: 60, ticks: [0, 10, 20, 30, 40, 50, 60], label: "Time (min)" }, y: { min: -20, max: 120, ticks: [-20, 0, 20, 40, 60, 80, 100, 120], label: "Temperature (°C)" }, series: [{ name: "Water", pts: [[0, -20], [2, 0], [8, 0], [18, 100], [48, 100], [52, 120]] }] }],
    ["How much energy is needed to melt 36.0 g of ice at 0°C? (ΔH_fus = 6.01 kJ/mol)", "12.0 kJ", ["6.01 kJ", "216 kJ", "3.01 kJ"], "36.0 g ÷ 18.0 g/mol = 2.00 mol × 6.01 kJ/mol = 12.0 kJ."],
    ["For water, ΔH_vap (40.7 kJ/mol) is much larger than ΔH_fus (6.01 kJ/mol) because", "vaporizing requires separating molecules completely, while melting only loosens them", ["gases have more covalent bonds", "melting breaks O–H bonds", "the boiling point is higher"], "Nearly all hydrogen bonds must be overcome to form a gas."],
    ["A steam burn at 100°C is usually worse than a burn from water at 100°C because", "steam releases its heat of vaporization when it condenses on the skin", ["steam is hotter", "steam has a higher specific heat", "water absorbs heat from the skin"], "Condensation is exothermic and adds a large amount of extra energy."]
  ]],
  ["6.6", "Introduction to Enthalpy of Reaction", [
    ["For 2 H₂(g) + O₂(g) → 2 H₂O(l), ΔH = −572 kJ. What is ΔH for making 1 mol of H₂O(l)?", "−286 kJ", ["−572 kJ", "−1,144 kJ", "+286 kJ"], "Halving the equation halves ΔH."],
    ["If ΔH for A → B is +40 kJ, what is ΔH for B → A?", "−40 kJ", ["+40 kJ", "0 kJ", "+80 kJ"], "Reversing a reaction changes the sign of ΔH."],
    ["CH₄ + 2 O₂ → CO₂ + 2 H₂O has ΔH = −890 kJ. How much heat is released when 8.0 g of CH₄ (0.50 mol) burns?", "445 kJ", ["890 kJ", "1,780 kJ", "111 kJ"], "0.50 mol × 890 kJ/mol = 445 kJ released."],
    ["Enthalpy of reaction (ΔH) is the heat exchanged", "at constant pressure", ["at constant volume only", "only for gases", "at absolute zero"], "ΔH = q at constant pressure, as in an open coffee-cup calorimeter."]
  ]],
  ["6.7", "Bond Enthalpies", [
    ["Using bond enthalpies, estimate ΔH for H₂ + Cl₂ → 2 HCl. (H–H 436, Cl–Cl 242, H–Cl 431 kJ/mol)", "−184 kJ", ["+184 kJ", "−247 kJ", "+247 kJ"], "ΔH = bonds broken − bonds formed = (436 + 242) − 2(431) = 678 − 862 = −184 kJ."],
    ["A reaction is exothermic when", "the bonds formed are stronger overall than the bonds broken", ["more bonds are broken than formed", "the bonds broken are stronger overall", "no bonds are broken"], "Forming strong bonds releases more energy than it takes to break the weaker ones."],
    ["Why are ΔH values from bond enthalpies only estimates?", "Bond enthalpies are averages over many different molecules", ["Bond enthalpies are always wrong", "They ignore the products", "They only work for ionic compounds"], "The exact strength of a bond depends on its molecular environment."],
    ["Which bond requires the most energy to break?", "C≡O in carbon monoxide", ["C–O single bond", "C=O double bond", "H–H"], "Triple bonds are the strongest; the C≡O bond in CO is among the strongest known (about 1,072 kJ/mol)."]
  ]],
  ["6.8", "Enthalpy of Formation", [
    ["What is the standard enthalpy of formation of O₂(g)?", "0 kJ/mol", ["−286 kJ/mol", "+498 kJ/mol", "It depends on temperature only"], "Elements in their standard states have ΔH°f = 0."],
    ["Use the table to find ΔH° for CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l).", "−890 kJ", ["−607 kJ", "−1,040 kJ", "+890 kJ"], "ΔH° = [−394 + 2(−286)] − [−75 + 0] = −966 + 75 = −891 ≈ −890 kJ.", { t: "table", title: "Standard enthalpies of formation", head: ["Substance", "ΔH°f (kJ/mol)"], rows: [["CH₄(g)", "−75"], ["CO₂(g)", "−394"], ["H₂O(l)", "−286"], ["O₂(g)", "0"]] }],
    ["Which equation represents the standard enthalpy of formation of H₂O(l)?", "H₂(g) + ½ O₂(g) → H₂O(l)", ["2 H₂(g) + O₂(g) → 2 H₂O(l)", "H₂O(g) → H₂O(l)", "2 H(g) + O(g) → H₂O(l)"], "A formation reaction makes 1 mol of the compound from its elements in their standard states."],
    ["ΔH°rxn is calculated from enthalpies of formation as", "Σ ΔH°f(products) − Σ ΔH°f(reactants)", ["Σ ΔH°f(reactants) − Σ ΔH°f(products)", "Σ ΔH°f(products) + Σ ΔH°f(reactants)", "the ΔH°f of the largest product"], "Multiply each ΔH°f by its coefficient, then subtract reactants from products."]
  ]],
  ["6.9", "Hess's Law", [
    ["Given C + O₂ → CO₂ (ΔH = −394 kJ) and CO + ½ O₂ → CO₂ (ΔH = −283 kJ), what is ΔH for C + ½ O₂ → CO?", "−111 kJ", ["−677 kJ", "+111 kJ", "−283 kJ"], "Keep the first reaction and reverse the second: −394 + 283 = −111 kJ."],
    ["Hess's law works because enthalpy is", "a state function that depends only on the start and end states", ["a path function", "always negative", "measured only at constant volume"], "Any series of steps from the same reactants to the same products has the same total ΔH."],
    ["If a reaction is multiplied by 3, its ΔH is", "multiplied by 3", ["unchanged", "divided by 3", "reversed in sign"], "ΔH scales with the amounts in the equation."],
    ["Given A → B (ΔH = +20 kJ) and B → C (ΔH = −50 kJ), what is ΔH for A → C?", "−30 kJ", ["+70 kJ", "−70 kJ", "+30 kJ"], "Add the steps: +20 + (−50) = −30 kJ."]
  ]]
]},
{ n: 7, name: "Equilibrium", weight: "7–9%", topics: [
  ["7.1", "Introduction to Equilibrium", [
    ["At equilibrium, which statement is true?", "The forward and reverse reaction rates are equal", ["The reactions have stopped", "Reactant and product concentrations are equal", "Only products remain"], "Equilibrium is dynamic: both reactions keep going at equal rates, so concentrations stay constant."],
    ["The graph shows concentrations for A ⇌ B over time. When is equilibrium reached?", "At about 40 s, when both concentrations stop changing", ["At 0 s", "At about 15 s, when the lines cross", "It is never reached"], "Crossing lines only mean equal concentrations. Equilibrium is when both curves level off.", { t: "line", title: "Concentrations for A ⇌ B", x: { min: 0, max: 80, ticks: [0, 20, 40, 60, 80], label: "Time (s)" }, y: { min: 0, max: 1, ticks: [0, 0.25, 0.5, 0.75, 1], label: "Concentration (M)" }, series: [{ name: "[A]", pts: [[0, 1], [5, 0.72], [10, 0.54], [15, 0.43], [20, 0.36], [30, 0.3], [40, 0.28], [60, 0.28], [80, 0.28]] }, { name: "[B]", pts: [[0, 0], [5, 0.28], [10, 0.46], [15, 0.57], [20, 0.64], [30, 0.7], [40, 0.72], [60, 0.72], [80, 0.72]], k: 2 }] }],
    ["A closed bottle of soda has CO₂ in the gas above the liquid and dissolved in it. At equilibrium,", "CO₂ molecules leave and enter the solution at equal rates", ["no CO₂ molecules move between phases", "all the CO₂ is dissolved", "all the CO₂ is in the gas"], "Physical changes like dissolving can also reach dynamic equilibrium."],
    ["Which describes a system that has NOT yet reached equilibrium?", "The concentration of a product is still increasing", ["The concentrations are constant", "The forward and reverse rates are equal", "The color of the mixture stays the same"], "Changing concentrations mean one direction is still faster."]
  ]],
  ["7.2", "Direction of Reversible Reactions", [
    ["For a reaction at equilibrium, adding more reactant causes the forward rate to", "increase at first, until a new equilibrium is reached", ["decrease", "stop", "equal zero"], "More reactant means more collisions and a faster forward reaction until the rates equalize again."],
    ["If Q < K, the reaction will", "proceed forward, making more products", ["proceed in reverse", "be at equilibrium", "stop"], "The ratio of products to reactants is too small, so the reaction shifts right."],
    ["When a reaction starts with only products, it will", "run in reverse until equilibrium is reached", ["stay the same", "run forward", "make more products"], "Equilibrium can be reached from either direction."],
    ["At equilibrium, the rate of the forward reaction", "equals the rate of the reverse reaction", ["is zero", "is greater than the reverse rate", "is less than the reverse rate"], "Equal rates mean no net change."]
  ]],
  ["7.3", "Reaction Quotient and Equilibrium Constant", [
    ["What is the equilibrium expression for N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g)?", "K = [NH₃]² / ([N₂][H₂]³)", ["K = [N₂][H₂]³ / [NH₃]²", "K = 2[NH₃] / ([N₂] + 3[H₂])", "K = [NH₃] / ([N₂][H₂])"], "Products over reactants, each raised to its coefficient."],
    ["For CaCO₃(s) ⇌ CaO(s) + CO₂(g), the equilibrium expression is", "K = [CO₂]", ["K = [CaO][CO₂] / [CaCO₃]", "K = [CaCO₃] / [CaO]", "K = 1"], "Pure solids (and pure liquids) are left out of equilibrium expressions."],
    ["For a reaction, K = 4.0 and Q = 10. Which way does the reaction shift?", "Toward reactants (to the left)", ["Toward products (to the right)", "It is already at equilibrium", "It cannot be determined"], "Q > K means too much product, so the reverse reaction is favored."],
    ["For 2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g), what is the expression for Kp?", "Kp = (P_SO₃)² / ((P_SO₂)² · P_O₂)", ["Kp = (P_SO₂)² · P_O₂ / (P_SO₃)²", "Kp = P_SO₃ / (P_SO₂ · P_O₂)", "Kp = 2P_SO₃ / (2P_SO₂ + P_O₂)"], "Kp uses partial pressures in place of concentrations."]
  ]],
  ["7.4", "Calculating the Equilibrium Constant", [
    ["At equilibrium, [H₂] = 0.10 M, [I₂] = 0.10 M, and [HI] = 0.80 M for H₂ + I₂ ⇌ 2 HI. What is K?", "64", ["8.0", "80", "0.016"], "K = (0.80)² / (0.10)(0.10) = 0.64 / 0.010 = 64."],
    ["For A(g) ⇌ 2 B(g), 1.0 mol A is placed in a 1.0 L flask. At equilibrium, [B] = 0.40 M. What is K?", "0.20", ["0.40", "0.27", "0.50"], "Forming 0.40 M B uses 0.20 M A, leaving 0.80 M A. K = (0.40)² / 0.80 = 0.20."],
    ["For PCl₅ ⇌ PCl₃ + Cl₂, the equilibrium concentrations are all 0.50 M. What is K?", "0.50", ["1.0", "0.25", "2.0"], "K = (0.50)(0.50) / 0.50 = 0.50."],
    ["In an ICE table, the \"C\" row shows", "the changes in concentration, related by the reaction's coefficients", ["the final concentrations", "the equilibrium constant", "the catalyst's concentration"], "Initial, Change, Equilibrium: changes follow the stoichiometric ratios."]
  ]],
  ["7.5", "Magnitude of the Equilibrium Constant", [
    ["A reaction with K = 1 × 10¹⁵ at equilibrium contains", "mostly products", ["mostly reactants", "equal amounts of reactants and products", "no products"], "A very large K means the ratio of products to reactants is huge."],
    ["A reaction with K = 2 × 10⁻⁸ at equilibrium contains", "mostly reactants", ["mostly products", "equal amounts", "only products"], "A very small K means very little product forms."],
    ["Which K value describes a reaction with significant amounts of both reactants and products at equilibrium?", "K = 2.5", ["K = 1 × 10⁻²⁰", "K = 1 × 10²⁰", "K = 5 × 10⁻¹²"], "K near 1 means neither side is strongly favored."],
    ["Does a large K mean the reaction happens quickly?", "No; K tells how far a reaction goes, not how fast", ["Yes, always", "Only for gases", "Only at high temperature"], "Speed depends on kinetics (activation energy), not on K."]
  ]],
  ["7.6", "Properties of the Equilibrium Constant", [
    ["For A ⇌ B, K = 4.0. What is K for B ⇌ A?", "0.25", ["4.0", "−4.0", "16"], "Reversing a reaction gives K' = 1/K."],
    ["For A ⇌ B, K = 3.0. What is K for 2 A ⇌ 2 B?", "9.0", ["6.0", "3.0", "1.5"], "Multiplying a reaction by n raises K to the nth power: 3.0² = 9.0."],
    ["If reaction 1 has K₁ and reaction 2 has K₂, the K for the sum of the two reactions is", "K₁ × K₂", ["K₁ + K₂", "K₁ − K₂", "K₁ / K₂"], "Adding reactions multiplies their equilibrium constants."],
    ["The value of K for a reaction changes only when", "the temperature changes", ["reactant is added", "pressure is increased", "a catalyst is added"], "Concentration and pressure changes shift the position, not K itself."]
  ]],
  ["7.7", "Calculating Equilibrium Concentrations", [
    ["For A ⇌ B, K = 3.0. If you start with 1.0 M A and no B, what is [B] at equilibrium?", "0.75 M", ["0.25 M", "1.0 M", "3.0 M"], "x / (1.0 − x) = 3.0 → x = 3.0 − 3.0x → x = 0.75 M."],
    ["For HA ⇌ H⁺ + A⁻ with a small K, the \"x is small\" approximation is used because", "so little HA dissociates that its concentration barely changes", ["x is always zero", "K is large", "HA is a strong acid"], "If x is less than about 5% of the initial value, 0.10 − x ≈ 0.10."],
    ["For H₂ + I₂ ⇌ 2 HI with K = 49, starting with 1.0 M each of H₂ and I₂ and no HI, what is [HI] at equilibrium?", "About 1.56 M", ["About 0.78 M", "About 7.0 M", "About 0.22 M"], "(2x)² / (1.0 − x)² = 49 → 2x / (1.0 − x) = 7 → x = 0.78, so [HI] = 2x ≈ 1.56 M."],
    ["For N₂O₄ ⇌ 2 NO₂, K is small. Starting with only N₂O₄, the equilibrium mixture will have", "mostly N₂O₄ with a small amount of NO₂", ["mostly NO₂", "equal amounts", "no N₂O₄"], "Small K favors the reactant side."]
  ]],
  ["7.8", "Representations of Equilibrium", [
    ["A particle diagram of A ⇌ B at equilibrium shows 6 A and 2 B particles in 1 L. What is K?", "1/3", ["3", "2", "6"], "K = [B]/[A] = 2/6 = 1/3."],
    ["Two diagrams of the same system taken a minute apart show the same numbers of each particle. This suggests", "the system is at equilibrium", ["the reaction has stopped", "no reaction ever occurred", "K is zero"], "Constant composition over time is a sign of equilibrium (though reactions continue)."],
    ["A diagram for 2 A ⇌ A₂ shows 4 A and 2 A₂ particles in 1 L. What is K?", "0.125", ["0.5", "2", "8"], "K = [A₂]/[A]² = 2 / 16 = 0.125."],
    ["If a diagram shows the reaction mixture has Q greater than K, the next diagram should show", "fewer product particles and more reactant particles", ["more product particles", "no change", "only products"], "Q > K, so the system shifts toward reactants."]
  ]],
  ["7.9", "Introduction to Le Châtelier's Principle", [
    ["For N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), what happens when the volume of the container is decreased?", "The equilibrium shifts right, toward fewer moles of gas", ["It shifts left", "Nothing changes", "K increases"], "Higher pressure favors the side with fewer gas molecules (2 vs. 4)."],
    ["For an exothermic reaction at equilibrium, raising the temperature", "shifts the equilibrium toward reactants and decreases K", ["shifts it toward products and increases K", "has no effect", "shifts it toward products without changing K"], "Treat heat as a product; adding heat pushes the reaction left and lowers K."],
    ["For Fe³⁺ + SCN⁻ ⇌ FeSCN²⁺ (red), what happens when more SCN⁻ is added?", "The solution becomes a deeper red", ["The red color fades", "No change", "A precipitate always forms"], "Adding a reactant shifts the equilibrium right, making more FeSCN²⁺."],
    ["How does adding a catalyst affect a system at equilibrium?", "It has no effect on the equilibrium position", ["It shifts it toward products", "It shifts it toward reactants", "It changes K"], "A catalyst speeds up both directions equally."]
  ]],
  ["7.10", "Reaction Quotient and Le Châtelier's Principle", [
    ["After removing some product from a system at equilibrium, Q is", "less than K, so the reaction shifts forward", ["greater than K, so it shifts in reverse", "equal to K", "zero"], "Less product lowers Q below K."],
    ["Adding an inert gas like argon at constant volume to an equilibrium gas mixture", "does not shift the equilibrium", ["shifts it toward fewer moles", "shifts it toward more moles", "changes K"], "The partial pressures of the reacting gases don't change, so Q still equals K."],
    ["For H₂(g) + I₂(g) ⇌ 2 HI(g), doubling the pressure by halving the volume", "does not shift the equilibrium", ["shifts it right", "shifts it left", "doubles K"], "Both sides have 2 moles of gas, so Q doesn't change."],
    ["Diluting the aqueous equilibrium A(aq) ⇌ 2 B(aq) with water shifts it", "to the right, toward more dissolved particles", ["to the left", "not at all", "toward a precipitate"], "Dilution lowers Q (because [B] is squared), so the reaction shifts right."]
  ]],
  ["7.11", "Introduction to Solubility Equilibria", [
    ["What is the Ksp expression for PbI₂?", "Ksp = [Pb²⁺][I⁻]²", ["Ksp = [Pb²⁺][I⁻]", "Ksp = [PbI₂]", "Ksp = [Pb²⁺][2I⁻]"], "PbI₂(s) ⇌ Pb²⁺ + 2 I⁻. The solid is left out."],
    ["The molar solubility of AgCl is s. What is Ksp in terms of s?", "s²", ["2s²", "4s³", "s"], "Ksp = [Ag⁺][Cl⁻] = (s)(s) = s²."],
    ["For CaF₂, Ksp = 4s³. If Ksp = 4.0 × 10⁻¹¹, what is its molar solubility?", "2.2 × 10⁻⁴ M", ["1.0 × 10⁻¹¹ M", "6.3 × 10⁻⁶ M", "4.0 × 10⁻¹¹ M"], "s³ = 1.0 × 10⁻¹¹ → s ≈ 2.2 × 10⁻⁴ M."],
    ["A precipitate forms when mixing two solutions if", "Q is greater than Ksp", ["Q is less than Ksp", "Q equals zero", "Ksp is large"], "The ion product exceeds what the solution can hold, so solid forms until Q = Ksp."]
  ]],
  ["7.12", "Common-Ion Effect", [
    ["How does the solubility of AgCl in 0.10 M NaCl compare with its solubility in pure water?", "It is lower", ["It is higher", "It is the same", "AgCl becomes infinitely soluble"], "The added Cl⁻ shifts AgCl(s) ⇌ Ag⁺ + Cl⁻ to the left."],
    ["The Ksp of AgCl is 1.8 × 10⁻¹⁰. What is its molar solubility in 0.10 M NaCl?", "1.8 × 10⁻⁹ M", ["1.3 × 10⁻⁵ M", "1.8 × 10⁻¹⁰ M", "0.10 M"], "Ksp = s(0.10) → s = 1.8 × 10⁻⁹ M."],
    ["Adding Na₂SO₄ to a saturated BaSO₄ solution will", "cause more BaSO₄ to precipitate", ["dissolve more BaSO₄", "have no effect", "raise Ksp"], "The common ion SO₄²⁻ pushes the equilibrium toward the solid."],
    ["Does the common-ion effect change the Ksp value?", "No; Ksp depends only on temperature", ["Yes, it lowers Ksp", "Yes, it raises Ksp", "Only for sulfates"], "The position shifts, but the constant stays the same."]
  ]],
  ["7.13", "pH and Solubility", [
    ["Why is Mg(OH)₂ more soluble in acidic solution than in water?", "H⁺ removes OH⁻, which shifts the dissolving equilibrium to the right", ["Acid adds more OH⁻", "Mg²⁺ reacts with H⁺", "Acid raises the Ksp"], "Mg(OH)₂(s) ⇌ Mg²⁺ + 2 OH⁻; removing OH⁻ pulls the equilibrium forward."],
    ["Which salt's solubility would increase the most when the pH is lowered?", "CaCO₃", ["NaCl", "AgCl", "KNO₃"], "CO₃²⁻ is a base that reacts with H⁺. Cl⁻ and NO₃⁻ are too weakly basic to be affected."],
    ["Acid rain damages marble statues (CaCO₃) because", "H⁺ reacts with carbonate, dissolving the marble", ["acid adds Ca²⁺ ions", "CaCO₃ is a strong acid", "acid lowers the temperature"], "CaCO₃ + 2 H⁺ → Ca²⁺ + H₂O + CO₂."],
    ["The solubility of AgCl is not noticeably affected by pH because", "Cl⁻ is the conjugate base of a strong acid and doesn't react with H⁺", ["AgCl is very soluble", "Ag⁺ reacts with OH⁻ only", "AgCl is a gas"], "Anions of strong acids are negligible bases."]
  ]],
  ["7.14", "Free Energy of Dissolution", [
    ["Dissolving NH₄NO₃ in water is endothermic but still happens on its own because", "the large increase in entropy makes ΔG negative", ["ΔH is negative", "the entropy decreases", "ΔG is positive"], "ΔG = ΔH − TΔS. A large positive ΔS can outweigh a positive ΔH."],
    ["Dissolving an ionic solid involves which energy changes?", "Breaking the lattice (endothermic) and hydrating the ions (exothermic)", ["Only forming bonds", "Only breaking bonds", "Breaking covalent bonds in water"], "Whether dissolving is endothermic or exothermic depends on which term is larger."],
    ["A salt has a very small Ksp. For its dissolution, ΔG° is", "positive", ["negative", "zero", "always −1"], "ΔG° = −RT ln K. When K < 1, ln K < 0, so ΔG° > 0."],
    ["Why does entropy usually increase when a solid dissolves?", "The ions or molecules become spread out and can move freely in solution", ["The solution becomes more ordered", "Water molecules freeze", "Particles bond together"], "More possible arrangements means higher entropy (though ordering of water around ions can reduce this)."]
  ]]
]},
{ n: 8, name: "Acids and Bases", weight: "11–15%", topics: [
  ["8.1", "Introduction to Acids and Bases", [
    ["What is the pH of a solution with [H₃O⁺] = 1.0 × 10⁻³ M?", "3.00", ["−3.00", "11.00", "1.00"], "pH = −log(1.0 × 10⁻³) = 3.00."],
    ["At 25°C, what is [OH⁻] in a solution with [H₃O⁺] = 1.0 × 10⁻⁴ M?", "1.0 × 10⁻¹⁰ M", ["1.0 × 10⁻⁴ M", "1.0 × 10⁻⁷ M", "1.0 × 10⁴ M"], "Kw = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴, so [OH⁻] = 1.0 × 10⁻¹⁰ M."],
    ["At 25°C, pH + pOH equals", "14", ["7", "0", "1"], "pKw = 14.00 at 25°C."],
    ["The ionization of water is endothermic. At 50°C, pure water has a pH", "below 7 but is still neutral", ["of exactly 7", "above 7", "below 7 and is acidic"], "Kw increases with temperature, so [H₃O⁺] rises, but it still equals [OH⁻], so the water is neutral."]
  ]],
  ["8.2", "pH and pOH of Strong Acids and Bases", [
    ["What is the pH of 0.010 M HCl?", "2.00", ["1.00", "12.00", "0.010"], "HCl ionizes completely: [H₃O⁺] = 0.010 M, pH = 2.00."],
    ["What is the pH of 0.0010 M NaOH at 25°C?", "11.00", ["3.00", "10.00", "7.00"], "[OH⁻] = 1.0 × 10⁻³, pOH = 3.00, pH = 14.00 − 3.00 = 11.00."],
    ["What is the pH of 0.050 M Ba(OH)₂ at 25°C?", "13.00", ["12.70", "1.00", "11.00"], "Each Ba(OH)₂ gives 2 OH⁻: [OH⁻] = 0.10 M, pOH = 1.00, pH = 13.00."],
    ["Which is a strong acid?", "HNO₃", ["HF", "CH₃COOH", "H₂CO₃"], "The common strong acids are HCl, HBr, HI, HNO₃, H₂SO₄, and HClO₄."]
  ]],
  ["8.3", "Weak Acid and Base Equilibria", [
    ["What is the approximate pH of 0.10 M acetic acid? (Ka = 1.8 × 10⁻⁵)", "2.87", ["1.00", "4.74", "5.74"], "[H⁺] = √(Ka·C) = √(1.8 × 10⁻⁶) ≈ 1.34 × 10⁻³ M, pH ≈ 2.87."],
    ["What is Ka for a weak acid HA if a 0.10 M solution has pH 3.00?", "1.0 × 10⁻⁵", ["1.0 × 10⁻³", "1.0 × 10⁻⁶", "0.010"], "[H⁺] = [A⁻] = 1.0 × 10⁻³; Ka = (1.0 × 10⁻³)² / 0.10 ≈ 1.0 × 10⁻⁵."],
    ["For a weak base B, the relationship between Ka of BH⁺ and Kb of B at 25°C is", "Ka × Kb = 1.0 × 10⁻¹⁴", ["Ka + Kb = 14", "Ka = Kb", "Ka / Kb = 1"], "Conjugate pairs: Ka·Kb = Kw."],
    ["Diluting a weak acid solution causes its percent ionization to", "increase", ["decrease", "stay the same", "drop to zero"], "Dilution shifts HA ⇌ H⁺ + A⁻ toward more particles, so a larger fraction ionizes."]
  ]],
  ["8.4", "Acid-Base Reactions and Buffers", [
    ["Which mixture makes a buffer?", "CH₃COOH and CH₃COONa", ["HCl and NaCl", "NaOH and NaCl", "HNO₃ and KNO₃"], "A buffer needs a weak acid and its conjugate base (or a weak base and its conjugate acid)."],
    ["Mixing equal moles of HCl and NH₃ gives a solution that is", "slightly acidic, because NH₄⁺ is a weak acid", ["neutral", "basic", "a buffer"], "The product NH₄⁺ donates H⁺ to water."],
    ["When a small amount of strong acid is added to an acetate buffer, the H⁺ reacts with", "CH₃COO⁻ to form CH₃COOH", ["CH₃COOH to form CH₃COO⁻", "water to form OH⁻", "Na⁺"], "The conjugate base absorbs added acid, so the pH changes very little."],
    ["Mixing 0.10 mol CH₃COOH with 0.05 mol NaOH gives", "a buffer with equal moles of CH₃COOH and CH₃COO⁻", ["a strongly basic solution", "a solution of only CH₃COO⁻", "pure water"], "Half the acid is neutralized, leaving 0.05 mol of each."]
  ]],
  ["8.5", "Acid-Base Titrations", [
    ["The titration curve shows a weak acid titrated with NaOH. What is the pKa of the acid?", "About 4.7", ["About 8.7", "About 7.0", "About 2.9"], "At half the equivalence volume (12.5 mL), pH = pKa ≈ 4.7.", { t: "line", title: "Titration of 25.0 mL weak acid with 0.10 M NaOH", x: { min: 0, max: 40, ticks: [0, 5, 10, 15, 20, 25, 30, 35, 40], label: "Volume of NaOH added (mL)" }, y: { min: 0, max: 14, ticks: [0, 2, 4, 6, 8, 10, 12, 14], label: "pH" }, series: [{ name: "pH", pts: [[0, 2.9], [2.5, 3.8], [5, 4.1], [7.5, 4.4], [10, 4.6], [12.5, 4.7], [15, 4.9], [17.5, 5.1], [20, 5.3], [22.5, 5.7], [24, 6.1], [24.9, 7.1], [25, 8.7], [25.1, 10.3], [26, 11.3], [30, 12.0], [35, 12.2], [40, 12.4]] }] }],
    ["In the same titration, why is the pH at the equivalence point above 7?", "The conjugate base of the weak acid reacts with water to make OH⁻", ["Excess NaOH is present", "The acid is strong", "Water has a pH above 7"], "At equivalence, only A⁻ remains, and it is a weak base.", { t: "line", title: "Titration of 25.0 mL weak acid with 0.10 M NaOH", x: { min: 0, max: 40, ticks: [0, 5, 10, 15, 20, 25, 30, 35, 40], label: "Volume of NaOH added (mL)" }, y: { min: 0, max: 14, ticks: [0, 2, 4, 6, 8, 10, 12, 14], label: "pH" }, series: [{ name: "pH", pts: [[0, 2.9], [2.5, 3.8], [5, 4.1], [7.5, 4.4], [10, 4.6], [12.5, 4.7], [15, 4.9], [17.5, 5.1], [20, 5.3], [22.5, 5.7], [24, 6.1], [24.9, 7.1], [25, 8.7], [25.1, 10.3], [26, 11.3], [30, 12.0], [35, 12.2], [40, 12.4]] }] }],
    ["Which indicator is best for titrating a strong acid with a strong base?", "Bromothymol blue (color change around pH 6–7.6)", ["Methyl orange (pH 3.1–4.4)", "Alizarin yellow (pH 10–12)", "Thymol blue (pH 1.2–2.8)"], "The equivalence point is at pH 7, so the indicator should change color near 7."],
    ["What is the pH at the equivalence point when a weak base (NH₃) is titrated with HCl?", "Below 7", ["Exactly 7", "Above 7", "Exactly 14"], "The product NH₄⁺ is a weak acid."]
  ]],
  ["8.6", "Molecular Structure of Acids and Bases", [
    ["Which acid is strongest?", "HClO₄", ["HClO", "HClO₂", "HClO₃"], "More oxygen atoms pull electron density away from the O–H bond and stabilize the conjugate base."],
    ["Why is HI a stronger acid than HF?", "The H–I bond is longer and weaker, so it breaks more easily", ["I is more electronegative than F", "HF has more protons", "HI forms hydrogen bonds"], "Down a group, bond strength decides acid strength more than electronegativity does."],
    ["Chloroacetic acid (ClCH₂COOH) is stronger than acetic acid because", "the electronegative Cl pulls electron density and stabilizes the conjugate base", ["Cl donates electrons", "it has more hydrogen atoms", "it has a lower molar mass"], "Electron-withdrawing groups spread out the negative charge on the carboxylate."],
    ["Which is the strongest base?", "CH₃COO⁻", ["Cl⁻", "NO₃⁻", "I⁻"], "The weaker the acid, the stronger its conjugate base. Acetic acid is weak; HCl, HNO₃, and HI are strong."]
  ]],
  ["8.7", "pH and pKa", [
    ["When the pH of a solution equals the pKa of a weak acid,", "[HA] = [A⁻]", ["[HA] > [A⁻]", "[HA] < [A⁻]", "the acid is fully ionized"], "At pH = pKa, the acid is exactly half ionized."],
    ["A weak acid has pKa = 5.0. At pH 7.0, which form mostly exists?", "A⁻, the conjugate base", ["HA, the acid", "Equal amounts", "Neither"], "When pH > pKa, the deprotonated form is favored (here by a ratio of 100 : 1)."],
    ["At pH 3.0, an acid with pKa 5.0 is mostly", "protonated (HA)", ["deprotonated (A⁻)", "equal HA and A⁻", "completely ionized"], "When pH < pKa, the protonated form dominates."],
    ["An indicator changes color near its pKa because", "that's where the ratio of its two colored forms changes most", ["it decomposes there", "the solution becomes neutral", "the indicator becomes a strong acid"], "Indicators are weak acids whose HIn and In⁻ forms have different colors."]
  ]],
  ["8.8", "Properties of Buffers", [
    ["A buffer resists pH changes because it contains", "both a species that reacts with added acid and a species that reacts with added base", ["only a strong acid", "only water", "a catalyst"], "The weak acid neutralizes added OH⁻ and the conjugate base neutralizes added H⁺."],
    ["When NaOH is added to a buffer of HF and F⁻, the OH⁻ reacts with", "HF to form F⁻ and H₂O", ["F⁻ to form HF", "Na⁺", "H₂O to form H₃O⁺"], "HF + OH⁻ → F⁻ + H₂O. The pH rises only slightly."],
    ["Diluting a buffer with water (without adding acid or base) changes its pH", "very little, because the ratio of [A⁻]/[HA] stays the same", ["greatly", "to exactly 7", "to 14"], "pH depends on the ratio, which dilution doesn't change."],
    ["Human blood is buffered mainly by", "the carbonic acid / bicarbonate system", ["hydrochloric acid", "sodium chloride", "glucose"], "H₂CO₃ / HCO₃⁻ keeps blood pH near 7.4."]
  ]],
  ["8.9", "Henderson-Hasselbalch Equation", [
    ["A buffer has 0.20 M CH₃COOH and 0.20 M CH₃COO⁻ (pKa 4.74). What is its pH?", "4.74", ["2.37", "7.00", "9.26"], "pH = pKa + log(1) = 4.74."],
    ["A buffer has [A⁻] = 0.10 M and [HA] = 1.0 M, with pKa = 5.0. What is the pH?", "4.0", ["6.0", "5.0", "3.0"], "pH = 5.0 + log(0.10 / 1.0) = 5.0 − 1.0 = 4.0."],
    ["To make a buffer with pH 9.3, which pair is best?", "NH₄⁺ / NH₃ (pKa of NH₄⁺ = 9.25)", ["CH₃COOH / CH₃COO⁻ (pKa 4.74)", "HF / F⁻ (pKa 3.17)", "H₂PO₄⁻ / HPO₄²⁻ (pKa 7.21)"], "Choose a weak acid whose pKa is close to the target pH."],
    ["According to Henderson–Hasselbalch, doubling [A⁻] while keeping [HA] the same raises the pH by", "about 0.30", ["1.0", "2.0", "0.50"], "log 2 ≈ 0.30."]
  ]],
  ["8.10", "Buffer Capacity", [
    ["Which buffer has the greatest capacity to absorb added acid?", "1.0 M HA / 1.0 M A⁻", ["0.10 M HA / 0.10 M A⁻", "0.010 M HA / 0.010 M A⁻", "1.0 M HA / 0.010 M A⁻"], "Higher concentrations of both components, with plenty of A⁻, can neutralize more acid."],
    ["A buffer has much more HA than A⁻. It is better at resisting", "added base than added acid", ["added acid than added base", "both equally", "neither"], "The large amount of HA can neutralize a lot of OH⁻, but the small amount of A⁻ runs out quickly with H⁺."],
    ["A buffer is most effective when", "[HA] and [A⁻] are equal and large", ["[HA] is zero", "the pH is far from pKa", "the buffer is very dilute"], "Equal amounts give equal capacity in both directions."],
    ["Buffer capacity is exceeded when", "the added acid or base uses up nearly all of one buffer component", ["the pH equals the pKa", "the buffer is diluted slightly", "the temperature rises by 1°C"], "After that, the pH changes sharply."]
  ]]
]},
{ n: 9, name: "Applications of Thermodynamics", weight: "7–9%", topics: [
  ["9.1", "Introduction to Entropy", [
    ["Which process has a positive ΔS?", "Ice melting", ["Water freezing", "Steam condensing", "2 H₂(g) + O₂(g) → 2 H₂O(l)"], "Melting gives particles more freedom of motion and more possible arrangements."],
    ["Which reaction shows a decrease in entropy?", "N₂(g) + 3 H₂(g) → 2 NH₃(g)", ["CaCO₃(s) → CaO(s) + CO₂(g)", "2 H₂O₂(l) → 2 H₂O(l) + O₂(g)", "NH₄Cl(s) → NH₃(g) + HCl(g)"], "4 moles of gas become 2, so there are fewer ways to arrange the particles."],
    ["Which has the highest molar entropy at 25°C?", "CO₂(g)", ["H₂O(l)", "NaCl(s)", "C(diamond)"], "Gases have far more freedom of motion than liquids and solids."],
    ["Entropy is best described as a measure of", "how energy and matter are dispersed among possible arrangements", ["the heat content of a system", "the speed of a reaction", "the strength of bonds"], "More possible microstates means higher entropy."]
  ]],
  ["9.2", "Absolute Entropy and Entropy Change", [
    ["Use the table to find ΔS° for N₂(g) + 3 H₂(g) → 2 NH₃(g).", "−199 J/K", ["+199 J/K", "−2 J/K", "+389 J/K"], "ΔS° = 2(193) − [192 + 3(131)] = 386 − 585 = −199 J/K.", { t: "table", title: "Standard molar entropies", head: ["Substance", "S° (J/(mol·K))"], rows: [["N₂(g)", "192"], ["H₂(g)", "131"], ["NH₃(g)", "193"]] }],
    ["The standard molar entropy of an element in its standard state is", "greater than zero", ["zero", "negative", "the same for all elements"], "Unlike ΔH°f, absolute entropies are positive at temperatures above 0 K."],
    ["Which substance has the greater molar entropy, and why: CH₄(g) or C₂H₆(g)?", "C₂H₆, because it has more atoms and more ways to vibrate and rotate", ["CH₄, because it is smaller", "They are equal", "CH₄, because it has more hydrogen atoms per carbon"], "More complex molecules have more possible microstates."],
    ["ΔS° for a reaction is calculated as", "Σ S°(products) − Σ S°(reactants)", ["Σ S°(reactants) − Σ S°(products)", "ΔH° / T only", "zero for all reactions"], "Multiply each S° by its coefficient."]
  ]],
  ["9.3", "Gibbs Free Energy and Thermodynamic Favorability", [
    ["A reaction has ΔH = −100 kJ and ΔS = +50 J/K. It is thermodynamically favored", "at all temperatures", ["at no temperatures", "only at high temperatures", "only at low temperatures"], "ΔG = ΔH − TΔS is negative when ΔH < 0 and ΔS > 0, at any T."],
    ["A reaction has ΔH = +50 kJ and ΔS = +100 J/K. Above what temperature is it favored?", "500 K", ["50 K", "0.5 K", "5,000 K"], "ΔG = 0 when T = ΔH/ΔS = 50,000 J ÷ 100 J/K = 500 K. Above that, ΔG < 0."],
    ["A reaction with ΔH < 0 and ΔS < 0 is favored", "at low temperatures", ["at high temperatures", "at all temperatures", "at no temperature"], "The negative ΔH wins when T is small enough that −TΔS stays small."],
    ["Calculate ΔG° at 298 K for a reaction with ΔH° = −92 kJ and ΔS° = −199 J/K.", "About −33 kJ", ["About +33 kJ", "About −151 kJ", "About +59 kJ"], "ΔG° = −92 − (298)(−0.199) = −92 + 59.3 ≈ −33 kJ."]
  ]],
  ["9.4", "Thermodynamic and Kinetic Control", [
    ["Diamond turning into graphite has ΔG° < 0, but diamonds last for millions of years because", "the reaction has a very high activation energy", ["ΔG° is actually positive", "graphite is less stable", "diamond is a gas"], "Thermodynamically favored does not mean fast. This reaction is under kinetic control."],
    ["A mixture of H₂ and O₂ can sit unchanged for years until a spark is added. This shows that", "a favored reaction can be slow because of a large activation energy", ["the reaction is not favored", "the spark changes ΔG", "H₂ and O₂ don't react"], "The spark supplies the energy to get over the barrier."],
    ["Thermodynamic favorability (ΔG < 0) tells you", "whether products are favored at equilibrium, not how fast the reaction is", ["how fast the reaction happens", "the activation energy", "the rate constant"], "ΔG and K relate to extent; kinetics relates to speed."],
    ["Which change would speed up a thermodynamically favored but slow reaction without changing ΔG?", "Adding a catalyst", ["Changing the products", "Changing ΔH", "Removing all the reactants"], "Catalysts lower Eₐ, not ΔG."]
  ]],
  ["9.5", "Free Energy and Equilibrium", [
    ["If ΔG° for a reaction is negative, then K is", "greater than 1", ["less than 1", "equal to 1", "zero"], "ΔG° = −RT ln K; ΔG° < 0 means ln K > 0."],
    ["At equilibrium, ΔG (not ΔG°) equals", "zero", ["ΔG°", "−RT", "K"], "At equilibrium there is no driving force in either direction."],
    ["A reaction has K = 1.0 at 298 K. What is ΔG°?", "0 kJ/mol", ["−8.3 kJ/mol", "+8.3 kJ/mol", "+298 kJ/mol"], "ln(1) = 0, so ΔG° = 0."],
    ["A reaction has ΔG° = +10 kJ/mol. Which is true?", "K < 1, so reactants are favored at equilibrium", ["K > 1", "K = 1", "The reaction goes to completion"], "Positive ΔG° gives a negative ln K."]
  ]],
  ["9.6", "Coupled Reactions", [
    ["Cells drive unfavorable reactions by coupling them with", "ATP hydrolysis, which has a large negative ΔG", ["reactions with positive ΔG", "heating the cell", "adding more water"], "If the total ΔG of the coupled reactions is negative, the combined process is favored."],
    ["Reaction 1 has ΔG° = +20 kJ; reaction 2 has ΔG° = −30 kJ. If coupled (added), the overall ΔG° is", "−10 kJ, so the combined process is favored", ["+50 kJ", "−50 kJ", "+10 kJ"], "Free energies of added reactions add."],
    ["Iron is extracted from Fe₂O₃ by reacting it with carbon (as CO). Why does this work when Fe₂O₃ alone doesn't decompose?", "The very favorable formation of CO₂ makes the overall reaction favored", ["Carbon lowers the activation energy only", "Fe₂O₃ is unstable", "The reaction absorbs light"], "Coupling Fe₂O₃ decomposition to carbon's oxidation gives an overall negative ΔG."],
    ["An external current forcing an electrolytic cell to run is another example of", "driving a thermodynamically unfavored reaction with an outside source of energy", ["a spontaneous reaction", "a catalyst", "an equilibrium"], "Electrical work supplies the free energy needed."]
  ]],
  ["9.7", "Galvanic (Voltaic) and Electrolytic Cells", [
    ["In the galvanic cell Zn | Zn²⁺ || Cu²⁺ | Cu, where does oxidation occur?", "At the zinc anode", ["At the copper cathode", "In the salt bridge", "At both electrodes"], "Zn → Zn²⁺ + 2e⁻ at the anode; Cu²⁺ is reduced at the cathode."],
    ["In a galvanic cell, electrons flow through the wire from", "the anode to the cathode", ["the cathode to the anode", "the salt bridge to the anode", "both electrodes to the salt bridge"], "Electrons leave where oxidation happens and go to where reduction happens."],
    ["The salt bridge in a galvanic cell", "lets ions move to keep each half-cell electrically neutral", ["carries electrons between the electrodes", "is where oxidation happens", "provides reactants"], "Without it, charge would build up and the current would stop."],
    ["An electrolytic cell differs from a galvanic cell because it", "uses an external power source to drive a nonspontaneous reaction", ["produces electricity from a spontaneous reaction", "has no anode", "has no cathode"], "Electrolytic cells have ΔG > 0 and need energy input."]
  ]],
  ["9.8", "Cell Potential and Free Energy", [
    ["Use the table to find E°cell for Zn + Cu²⁺ → Zn²⁺ + Cu.", "+1.10 V", ["+0.42 V", "−1.10 V", "−0.42 V"], "E°cell = E°(cathode) − E°(anode) = 0.34 − (−0.76) = +1.10 V.", { t: "table", title: "Standard reduction potentials at 25°C", head: ["Half-reaction", "E° (V)"], rows: [["Cu²⁺ + 2e⁻ → Cu", "+0.34"], ["2H⁺ + 2e⁻ → H₂", "0.00"], ["Zn²⁺ + 2e⁻ → Zn", "−0.76"]] }],
    ["A cell has a positive E°cell. Its ΔG° is", "negative, so the reaction is thermodynamically favored", ["positive", "zero", "impossible to know"], "ΔG° = −nFE°; positive E gives negative ΔG."],
    ["What is ΔG° for a reaction with n = 2 and E° = +1.10 V? (F = 96,485 C/mol)", "About −212 kJ", ["About −106 kJ", "About +212 kJ", "About −2.2 kJ"], "ΔG° = −(2)(96,485)(1.10) ≈ −212,000 J = −212 kJ."],
    ["Which metal is the best reducing agent: Zn (E° = −0.76 V), Cu (E° = +0.34 V), or Ag (E° = +0.80 V)?", "Zn", ["Cu", "Ag", "They are equal"], "The metal with the most negative reduction potential is most easily oxidized."]
  ]],
  ["9.9", "Cell Potential Under Nonstandard Conditions", [
    ["In a Zn/Cu cell, raising [Cu²⁺] above 1 M will", "increase the cell potential", ["decrease the cell potential", "not change it", "reverse the reaction"], "Q = [Zn²⁺]/[Cu²⁺] gets smaller, so E = E° − (RT/nF) ln Q gets larger."],
    ["As a galvanic cell runs down, its voltage drops because", "Q increases toward K", ["E° decreases", "the electrodes get heavier", "the salt bridge makes more ions"], "When Q = K, the cell is at equilibrium and E = 0 (a \"dead\" battery)."],
    ["For a cell reaction at equilibrium, E_cell equals", "0 V", ["E°", "1.00 V", "−E°"], "No net reaction means no driving force."],
    ["A concentration cell has the same metal and ion in both half-cells at different concentrations. It produces a voltage because", "the system moves to make the concentrations equal", ["E° is large", "the metals are different", "one electrode is a catalyst"], "E° = 0, but Q ≠ 1, so E ≠ 0 until the concentrations are the same."]
  ]],
  ["9.10", "Electrolysis and Faraday's Law", [
    ["How many moles of electrons are needed to plate 1.0 mol of Cu from Cu²⁺?", "2.0 mol", ["1.0 mol", "0.5 mol", "4.0 mol"], "Cu²⁺ + 2e⁻ → Cu."],
    ["A current of 2.00 A runs for 965 s. How many moles of electrons pass through? (F = 96,485 C/mol)", "0.0200 mol", ["0.0100 mol", "2.00 mol", "1,930 mol"], "q = It = 2.00 × 965 = 1,930 C; 1,930 ÷ 96,485 ≈ 0.0200 mol e⁻."],
    ["In the electrolysis of molten NaCl, what forms at the cathode?", "Sodium metal", ["Chlorine gas", "Hydrogen gas", "Oxygen gas"], "Reduction happens at the cathode: Na⁺ + e⁻ → Na."],
    ["If the current in an electroplating process is doubled for the same time, the mass of metal plated", "doubles", ["halves", "stays the same", "quadruples"], "Mass plated is proportional to the charge passed, q = It."]
  ]]
]}
);
