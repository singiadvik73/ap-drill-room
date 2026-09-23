// Figure-based (stimulus) questions. Each entry: [courseId, topicCode, [stem, correct, [wrong x3], explanation, figure]]
// Figures are data specs drawn by the app (line, bar, scatter, pyramid, table, tree, gel, pedigree, web, rings, sectors, flow, compartments, choro, svg, panels).
window.AP_VIS = window.AP_VIS || [];
(function(){
const V = (c, code, q) => AP_VIS.push([c, code, q]);
const R = n => Math.round(n * 1000) / 1000;
const curve = (f, a, b, n = 60) => Array.from({ length: n + 1 }, (_, i) => { const x = a + (b - a) * i / n; return [R(x), R(f(x))]; });
const bell = (x, mu, sd) => Math.exp(-((x - mu) ** 2) / (2 * sd * sd));
const range = (a, b, s) => { const o = []; for (let v = a; v <= b + 1e-9; v += s) o.push(R(v)); return o; };
const energy = (s, p, e) => curve(x => s + (e - s) / (1 + Math.exp(-(x - 5) * 1.6)) + (p - (s + e) / 2) * bell(x, 5, 1.1), 0, 10, 80);

/* ======================= AP BIOLOGY ======================= */

// 1.1 specific heat
V("bio", "1.1", ["Equal masses of water and ethanol were heated at the same rate. Which property of water best explains the difference between the two curves?",
  "Water has a higher specific heat, because added energy must first break hydrogen bonds between water molecules",
  ["Water has a lower density than ethanol", "Water molecules are nonpolar, so they absorb heat slowly", "Ethanol forms more hydrogen bonds than water does"],
  "Water's temperature rises more slowly for the same energy input because much of the energy goes into disrupting hydrogen bonds. Ethanol levels off at about 78 °C because it begins to boil.",
  { t: "line", title: "Temperature of water and ethanol during heating", x: { min: 0, max: 10, ticks: range(0, 10, 2), label: "Time heating (min)" }, y: { min: 20, max: 90, ticks: range(20, 90, 10), label: "Temperature (°C)" },
    series: [{ name: "Water", pts: [[0, 20], [10, 60]] }, { name: "Ethanol", pts: [[0, 20], [8.47, 78], [10, 78]], k: 2 }] }]);

// 1.6 base composition
const baseTbl = { t: "table", title: "Nitrogenous base composition of four DNA samples (%)", head: ["Sample", "A", "G", "C", "T"], rows: [["1", "30", "20", "20", "30"], ["2", "15", "35", "35", "15"], ["3", "25", "30", "18", "27"], ["4", "22", "28", "28", "22"]] };
V("bio", "1.6", ["Based on the data, which sample is most likely single-stranded?", "Sample 3", ["Sample 1", "Sample 2", "Sample 4"],
  "In double-stranded DNA, A = T and G = C because of complementary base pairing. Only Sample 3 breaks this rule (A 25 ≠ T 27, G 30 ≠ C 18).", baseTbl]);
V("bio", "1.6", ["Which double-stranded sample would require the highest temperature to separate its two strands?", "Sample 2", ["Sample 1", "Sample 4", "Sample 3"],
  "Sample 2 is 70% G + C. G–C pairs form three hydrogen bonds, versus two for A–T, so G–C-rich DNA is more stable.", baseTbl]);

// 2.1 secretory pathway
V("bio", "2.1", ["The diagram shows the pathway of a protein that will be secreted from a cell. Which organelle is represented by X?", "Golgi complex", ["Smooth endoplasmic reticulum", "Lysosome", "Nucleolus"],
  "Proteins made on the rough ER travel in vesicles to the Golgi, where they are modified and packaged, then leave by exocytosis.",
  { t: "flow", title: "Secretory pathway", steps: ["Ribosomes on rough ER", "Transport vesicle", "X", "Secretory vesicle", "Plasma membrane (exocytosis)"] }]);

// 2.3 SA:V table
V("bio", "2.3", ["The table shows measurements for three cube-shaped cells. What is the missing surface area-to-volume ratio for the 4 µm cell?", "1.5 : 1", ["4 : 1", "3 : 1", "0.67 : 1"],
  "SA:V = 96 ÷ 64 = 1.5. As a cell gets larger, its SA:V ratio falls, so larger cells exchange materials less efficiently.",
  { t: "table", title: "Dimensions of model cube cells", head: ["Side length (µm)", "Surface area (µm²)", "Volume (µm³)", "SA : V"], rows: [["1", "6", "1", "6 : 1"], ["2", "24", "8", "3 : 1"], ["4", "96", "64", "?"]] }]);

// 2.7 saturation
V("bio", "2.7", ["The graph shows the rate at which two solutes enter a cell. Which explanation best accounts for the shape of the curve for Solute B?", "Solute B moves through carrier proteins, and the rate levels off once all carriers are occupied",
  ["Solute B diffuses directly through the phospholipid bilayer", "Solute B requires no membrane proteins at any concentration", "The cell stops producing ATP at high concentrations of Solute B"],
  "Carrier-mediated (facilitated) transport saturates because there are only so many carriers. Simple diffusion (Solute A) keeps increasing in proportion to the concentration gradient.",
  { t: "line", title: "Rate of solute uptake vs. external concentration", x: { min: 0, max: 10, ticks: range(0, 10, 2), label: "External solute concentration (mM)" }, y: { min: 0, max: 10, ticks: range(0, 10, 2), label: "Rate of uptake (relative)" },
    series: [{ name: "Solute A", pts: [[0, 0], [10, 9]] }, { name: "Solute B", pts: curve(x => 8 * x / (1.2 + x), 0, 10), k: 2 }] }]);

// 2.8 compartments
V("bio", "2.8", ["The two sides of the container are separated by a membrane permeable to water but not to sucrose. Which outcome is expected?", "Net movement of water from side 1 to side 2, raising the water level on side 2",
  ["Net movement of sucrose from side 2 to side 1", "Net movement of water from side 2 to side 1", "No net movement of water, because the membrane blocks sucrose"],
  "Side 2 has the higher solute concentration and lower (more negative) water potential. Water moves by osmosis toward it.",
  { t: "compartments", title: "U-shaped container at the start of the experiment", left: { label: "Side 1: 0.2 M sucrose", dots: 9 }, right: { label: "Side 2: 0.5 M sucrose", dots: 22 }, membrane: "Membrane permeable to water, not sucrose", solute: "Sucrose molecule" }]);

// 2.8 potato cores
V("bio", "2.8", ["Potato cores were soaked in sucrose solutions for 24 hours. Based on the graph, the solute concentration of the potato cells is closest to", "0.35 M sucrose", ["0.0 M sucrose", "0.6 M sucrose", "1.0 M sucrose"],
  "The line crosses 0% mass change at about 0.35 M. At that concentration there is no net water movement, so the water potentials inside and outside are equal.",
  { t: "line", title: "Percent change in mass of potato cores", x: { min: 0, max: 1, ticks: [0, 0.2, 0.4, 0.6, 0.8, 1], label: "Sucrose concentration (M)" }, y: { min: -30, max: 25, ticks: [-30, -20, -10, 0, 10, 20], label: "Change in mass (%)" },
    hlines: [{ y: 0 }], series: [{ name: "Potato cores", pts: [[0, 20], [0.2, 9], [0.4, -2.5], [0.6, -12], [0.8, -19], [1, -24]], dots: true }] }]);

// 3.2 energy diagram
const enz = { t: "line", title: "Free energy during a chemical reaction", x: { min: 0, max: 10, label: "Progress of reaction" }, y: { min: 0, max: 10, label: "Free energy (G)" },
  series: [{ name: "Without enzyme", pts: energy(5, 9, 2) }, { name: "With enzyme", pts: energy(5, 6.4, 2), k: 2, dash: true }] };
V("bio", "3.2", ["Which statement is best supported by the energy diagram?", "The enzyme lowers the activation energy, but the overall free-energy change of the reaction is the same",
  ["The enzyme makes the reaction release more free energy", "The enzyme raises the energy of the reactants", "The enzyme turns an endergonic reaction into an exergonic one"],
  "Both curves start and end at the same free energy (same ΔG). Only the peak, the activation energy, is lower with the enzyme.", enz]);
V("bio", "3.2", ["The reaction shown in the diagram is best described as", "exergonic, because the products have less free energy than the reactants",
  ["endergonic, because energy must be added to reach the peak", "endergonic, because the products have more free energy than the reactants", "at equilibrium, because an enzyme is present"],
  "ΔG is negative (the products are lower than the reactants), so the reaction is exergonic. Even exergonic reactions need some activation energy.", enz]);

// 3.3 temperature optima
V("bio", "3.3", ["The graph shows the activity of two enzymes across a range of temperatures. Enzyme Y was most likely isolated from", "a bacterium living in a hot spring",
  ["human muscle tissue", "a fish living in Arctic waters", "a plant living in a temperate forest"],
  "Enzyme Y has its optimum near 75 °C. Organisms adapted to hot environments have enzymes whose structures stay stable at high temperatures.",
  { t: "line", title: "Enzyme activity vs. temperature", x: { min: 0, max: 100, ticks: range(0, 100, 20), label: "Temperature (°C)" }, y: { min: 0, max: 100, ticks: range(0, 100, 25), label: "Relative activity (%)" },
    series: [{ name: "Enzyme X", pts: curve(x => x <= 37 ? 100 * bell(x, 37, 14) : Math.max(0, 100 * bell(x, 37, 7)), 0, 100, 100) }, { name: "Enzyme Y", pts: curve(x => x <= 75 ? 100 * bell(x, 75, 20) : Math.max(0, 100 * bell(x, 75, 7)), 0, 100, 100), k: 2 }] }]);

// 3.3 inhibitors
V("bio", "3.3", ["The graph shows reaction rate with no inhibitor and with two different inhibitors, P and Q. Which conclusion is best supported?", "P is a competitive inhibitor and Q is a noncompetitive inhibitor",
  ["P is a noncompetitive inhibitor and Q is a competitive inhibitor", "Both P and Q are competitive inhibitors", "Neither inhibitor affects the enzyme at high substrate concentration"],
  "With P, the rate approaches the uninhibited maximum as substrate increases, because substrate outcompetes the inhibitor. Q lowers the maximum rate no matter how much substrate is added, which means it binds somewhere other than the active site.",
  { t: "line", title: "Reaction rate vs. substrate concentration", x: { min: 0, max: 40, ticks: range(0, 40, 10), label: "Substrate concentration (mM)" }, y: { min: 0, max: 10, ticks: range(0, 10, 2), label: "Reaction rate (µmol/min)" },
    series: [{ name: "No inhibitor", pts: curve(x => 10 * x / (2 + x), 0, 40) }, { name: "Inhibitor P", pts: curve(x => 10 * x / (8 + x), 0, 40), k: 2, dash: true }, { name: "Inhibitor Q", pts: curve(x => 5 * x / (2 + x), 0, 40), k: 3 }] }]);

// 3.5 absorption spectrum
V("bio", "3.5", ["Based on the absorption spectra, light of which wavelength would drive the least photosynthesis in a plant that has only these two pigments?", "550 nm", ["430 nm", "450 nm", "660 nm"],
  "Both chlorophylls absorb very little green light (around 500–600 nm). Light that isn't absorbed can't power the light reactions.",
  { t: "line", title: "Absorption spectra of chlorophyll a and chlorophyll b", x: { min: 400, max: 700, ticks: range(400, 700, 50), label: "Wavelength (nm)" }, y: { min: 0, max: 1, ticks: [0, 0.25, 0.5, 0.75, 1], label: "Relative absorbance" },
    series: [{ name: "Chlorophyll a", pts: curve(x => 0.03 + 0.95 * bell(x, 430, 14) + 0.75 * bell(x, 662, 12) + 0.12 * bell(x, 615, 20), 400, 700, 120) }, { name: "Chlorophyll b", pts: curve(x => 0.03 + 0.97 * bell(x, 455, 13) + 0.55 * bell(x, 642, 11), 400, 700, 120), k: 2, dash: true }] }]);

// 3.6 respirometer
const resp = { t: "line", title: "Cumulative O₂ consumed by peas in a respirometer", x: { min: 0, max: 20, ticks: range(0, 20, 5), label: "Time (min)" }, y: { min: 0, max: 1, ticks: [0, 0.2, 0.4, 0.6, 0.8, 1], label: "O₂ consumed (mL)" },
  series: [{ name: "Germinating, 25 °C", pts: [[0, 0], [5, 0.22], [10, 0.45], [15, 0.67], [20, 0.9]], dots: true }, { name: "Germinating, 10 °C", pts: [[0, 0], [5, 0.1], [10, 0.2], [15, 0.3], [20, 0.4]], dots: true, k: 2 }, { name: "Dry (non-germinating), 25 °C", pts: [[0, 0], [5, 0.02], [10, 0.05], [15, 0.07], [20, 0.1]], dots: true, k: 3 }] };
V("bio", "3.6", ["Which conclusion is best supported by the data?", "Germinating peas respire faster than dry peas, and their respiration rate increases with temperature",
  ["Dry peas respire faster than germinating peas", "Temperature has no effect on the respiration rate of germinating peas", "Germinating peas at 10 °C are not carrying out cellular respiration"],
  "The steeper slopes show higher O₂ consumption. Germinating seeds are metabolically active, and warmer temperatures speed up enzyme-driven reactions.", resp]);
V("bio", "3.6", ["What is the rate of O₂ consumption for germinating peas at 25 °C?", "About 0.045 mL/min", ["About 0.9 mL/min", "About 0.02 mL/min", "About 0.005 mL/min"],
  "Rate = slope = 0.9 mL ÷ 20 min = 0.045 mL/min.", resp]);

// 4.3 epinephrine pathway
V("bio", "4.3", ["The diagram shows the epinephrine signaling pathway in liver cells. Molecule X is best described as a", "second messenger (cAMP) that activates protein kinase A",
  ["ligand that binds the receptor on the cell surface", "transcription factor that binds DNA", "phosphatase that ends the response"],
  "Adenylyl cyclase converts ATP to cAMP. cAMP relays the signal inside the cell by activating protein kinase A, which starts a phosphorylation cascade.",
  { t: "flow", title: "Epinephrine signal transduction pathway", steps: ["Epinephrine", "G protein-coupled receptor", "G protein", "Adenylyl cyclase", "X", "Protein kinase A", "Glycogen phosphorylase", "Glucose released"] }]);

// 4.5 glucose after meal
V("bio", "4.5", ["The graph shows blood glucose in a healthy person after a meal. The decrease between 30 and 120 minutes is mainly caused by", "insulin release, which increases glucose uptake by cells: negative feedback",
  ["glucagon release, which stimulates glycogen breakdown", "positive feedback that amplifies glucose levels", "epinephrine release from the adrenal glands"],
  "Rising glucose triggers insulin release from beta cells. Insulin causes cells to take up glucose and store it as glycogen, bringing levels back toward the set point.",
  { t: "line", title: "Blood glucose after a meal", x: { min: 0, max: 180, ticks: range(0, 180, 30), label: "Time after meal (min)" }, y: { min: 60, max: 180, ticks: range(60, 180, 30), label: "Blood glucose (mg/dL)" },
    vlines: [{ x: 0, l: "Meal" }], series: [{ name: "Blood glucose", pts: [[0, 90], [15, 125], [30, 150], [45, 148], [60, 138], [90, 114], [120, 95], [150, 88], [180, 90]], dots: true }] }]);

// 4.6 DNA content
V("bio", "4.6", ["The graph shows the amount of DNA per cell over one cell cycle. During which interval does S phase occur?", "Interval II", ["Interval I", "Interval III", "Interval IV"],
  "DNA content doubles from 1× to 2× during S phase, when DNA replicates. It stays at 2× through G2 (III) and mitosis (IV), then halves at cytokinesis.",
  { t: "line", title: "DNA content per cell during the cell cycle", bands: [{ from: 0, to: 10, l: "I" }, { from: 10, to: 18, l: "II" }, { from: 18, to: 22, l: "III" }, { from: 22, to: 24, l: "IV" }],
    x: { min: 0, max: 26, ticks: range(0, 24, 4), label: "Time (hours)" }, y: { min: 0, max: 2.5, ticks: [0, 1, 2], label: "DNA per cell (relative)" },
    series: [{ name: "DNA content", pts: [[0, 1], [10, 1], [18, 2], [24, 2], [24, 1], [26, 1]] }] }]);

// 4.7 cyclin / MPF
V("bio", "4.7", ["Based on the graph, MPF (cyclin–CDK) activity peaks", "when cyclin concentration is highest, triggering entry into mitosis", ["when cyclin concentration is lowest", "during G1, when the cell is growing", "at a constant level throughout the cycle"],
  "CDK levels stay constant, but CDK is active only when bound to cyclin. As cyclin builds up, MPF activity rises and pushes the cell into M phase. Cyclin is then degraded, and MPF activity falls.",
  { t: "line", title: "Cyclin concentration and MPF activity over two cell cycles", bands: [{ from: 0, to: 7.5, l: "Interphase" }, { from: 7.5, to: 9.5, l: "M" }, { from: 9.5, to: 17.5, l: "Interphase" }, { from: 17.5, to: 19.5, l: "M" }],
    x: { min: 0, max: 20, label: "Time" }, y: { min: 0, max: 1.1, ticks: [0, 0.5, 1], label: "Relative level" },
    series: [{ name: "Cyclin concentration", pts: [[0, 0.1], [8, 1], [9, 0.1], [10, 0.1], [18, 1], [19, 0.1], [20, 0.1]] }, { name: "MPF activity", pts: [[0, 0.05], [7, 0.05], [8, 1], [9, 0.05], [17, 0.05], [18, 1], [19, 0.05], [20, 0.05]], k: 2, dash: true }] }]);

// 5.3 chi-square
V("bio", "5.3", ["A student predicts a 3:1 ratio for a cross of two heterozygous plants and collects the data shown. Which is the correct chi-square value and conclusion? (Critical value at p = 0.05, df = 1, is 3.84.)", "χ² ≈ 1.33, so the student fails to reject the null hypothesis of a 3:1 ratio",
  ["χ² ≈ 1.33, so the student rejects the null hypothesis", "χ² ≈ 6.67, so the student rejects the null hypothesis", "χ² ≈ 0.33, so the data prove the 3:1 hypothesis is correct"],
  "Expected counts are 300 : 100. χ² = (290 − 300)²/300 + (110 − 100)²/100 = 0.33 + 1.00 = 1.33. That is less than 3.84, so the difference could be due to chance.",
  { t: "table", title: "Offspring of a monohybrid cross (Pp × Pp)", head: ["Phenotype", "Observed", "Expected"], rows: [["Purple", "290", "?"], ["White", "110", "?"], ["Total", "400", "400"]] }]);

// 5.3 autosomal recessive pedigree
V("bio", "5.3", ["Which mode of inheritance is most consistent with this pedigree?", "Autosomal recessive", ["Autosomal dominant", "X-linked recessive", "Y-linked"],
  "Two unaffected parents have an affected daughter. A dominant trait would show in a parent. An X-linked recessive daughter would need an affected father. Y-linked traits never appear in females.",
  { t: "pedigree", title: "Pedigree of a family with a rare trait", people: [{ x: 1, y: 0, s: "m" }, { x: 3, y: 0, s: "f" }, { x: 0.5, y: 1, s: "m" }, { x: 2, y: 1, s: "f", a: 1 }, { x: 3.5, y: 1, s: "m" }],
    fams: [{ p: [0, 1], c: [2, 3, 4] }] }]);

// 5.4 X-linked pedigree
V("bio", "5.4", ["Which inheritance pattern is most likely for the trait in this pedigree?", "X-linked recessive", ["Autosomal dominant", "Y-linked", "Mitochondrial"],
  "Only males are affected, and the trait passes from an unaffected mother (a carrier) to her sons. It skips a generation through daughters, which is the X-linked recessive pattern. It isn't Y-linked because affected II-1 got the trait from his mother, not his unaffected father.",
  { t: "pedigree", title: "Three-generation pedigree", people: [
      { x: 1.5, y: 0, s: "m", n: "I-1" }, { x: 3.5, y: 0, s: "f", n: "I-2" },
      { x: 0.5, y: 1, s: "m", a: 1, n: "II-1" }, { x: 3.2, y: 1, s: "f", n: "II-3" }, { x: 1.8, y: 1, s: "m", n: "II-2" },
      { x: 3, y: 2, s: "m", a: 1, n: "III-1" }, { x: 4, y: 2, s: "f", n: "III-2" }, { x: 5, y: 2, s: "m", n: "III-3" }, { x: 4.8, y: 1, s: "m", n: "II-4" }],
    fams: [{ p: [0, 1], c: [2, 3, 4] }, { p: [3, 8], c: [5, 6, 7] }] }]);

// 5.4 linkage map
V("bio", "5.4", ["Recombination frequencies between three linked genes are shown. What is the order of the genes on the chromosome?", "A – B – C", ["A – C – B", "B – A – C", "The order cannot be determined from these data"],
  "A–C has the largest distance (20 map units), so A and C are at the ends. 8 + 12 = 20, which places B between them.",
  { t: "table", title: "Recombination frequencies from test crosses", head: ["Gene pair", "Recombination frequency"], rows: [["A and B", "8%"], ["B and C", "12%"], ["A and C", "20%"]] }]);

// 6.2 Meselson–Stahl
V("bio", "6.2", ["E. coli grown in ¹⁵N were moved to ¹⁴N medium, and their DNA was centrifuged after each generation. The Generation 1 result rules out which model?", "Conservative replication, which would give one heavy band and one light band instead of a single hybrid band",
  ["Semiconservative replication, which predicts a single hybrid band", "Dispersive replication, which predicts a single hybrid band", "All models, because only one band appears"],
  "After one generation, every DNA molecule has intermediate density. Conservative replication would keep the original heavy molecule intact, so that model is ruled out. Generation 2 (hybrid + light) then rules out dispersive.",
  { t: "gel", title: "DNA bands after density-gradient centrifugation", linear: true, h: 260, lanes: [{ name: "Gen 0", bands: [0.78] }, { name: "Gen 1", bands: [0.5] }, { name: "Gen 2", bands: [0.5, 0.22] }],
    refs: [{ v: 0.22, l: "Light (¹⁴N)" }, { v: 0.5, l: "Hybrid" }, { v: 0.78, l: "Heavy (¹⁵N)" }] }]);

// 6.5 lac operon
V("bio", "6.5", ["The diagram shows the lac operon. When lactose is absent, the repressor binds region X. Region X is the", "operator, where the bound repressor blocks RNA polymerase from transcribing the genes",
  ["promoter, where the repressor recruits RNA polymerase", "lacZ gene, which codes for the repressor", "terminator, which ends translation"],
  "The operator lies between the promoter and the structural genes. When allolactose binds the repressor, it releases the operator and transcription proceeds.",
  { t: "flow", title: "The lac operon (E. coli)", strip: true, steps: [{ l: "lacI", s: "repressor gene", w: 1.1 }, { l: "Promoter", w: 1 }, { l: "X", x: 1, w: 0.7 }, { l: "lacZ", s: "β-galactosidase", w: 1.6 }, { l: "lacY", s: "permease", w: 1.2 }, { l: "lacA", s: "transacetylase", w: 1.2 }] }]);

// 6.8 gel forensic
V("bio", "6.8", ["DNA from a crime scene and three suspects was cut with the same restriction enzyme and run on a gel. Which suspect's DNA matches the crime scene sample?", "Suspect 2", ["Suspect 1", "Suspect 3", "None of the suspects"],
  "Suspect 2's bands (3,000, 1,200, and 600 bp) line up with every crime scene band. Suspect 1 has a 1,500 bp band instead of 1,200, and Suspect 3 differs at two bands.",
  { t: "gel", title: "Restriction fragments (bp)", ladderLabels: true, min: 200, max: 6500, lanes: [{ name: "Ladder", ladder: true, bands: [5000, 3000, 2000, 1000, 500, 250] }, { name: "Scene", bands: [3000, 1200, 600] }, { name: "Susp. 1", bands: [3000, 1500, 600] }, { name: "Susp. 2", bands: [3000, 1200, 600] }, { name: "Susp. 3", bands: [2500, 1200, 400] }] }]);
V("bio", "6.8", ["The unknown sample produced one band. Using the ladder, the size of this fragment is closest to", "1,500 bp", ["500 bp", "2,500 bp", "4,000 bp"],
  "The band lies about halfway between the 2,000 bp and 1,000 bp ladder bands. Distance traveled is proportional to the log of fragment size, so it is about 1,400–1,500 bp.",
  { t: "gel", title: "Gel with DNA ladder (bp)", ladderLabels: true, min: 200, max: 6500, lanes: [{ name: "Ladder", ladder: true, bands: [5000, 3000, 2000, 1000, 500, 250] }, { name: "Unknown", bands: [1450] }] }]);

// 7.2 directional (finches)
V("bio", "7.2", ["The histogram shows beak depth in a finch population before and after a drought that left mainly large, hard seeds. This is an example of", "directional selection",
  ["stabilizing selection", "disruptive selection", "genetic drift"],
  "The whole distribution shifted toward deeper beaks. Birds with deeper beaks could crack the remaining hard seeds and left more offspring.",
  { t: "bar", title: "Beak depth distribution in a finch population", cats: ["7", "8", "9", "10", "11", "12"], x: { label: "Beak depth (mm)" }, y: { min: 0, max: 35, ticks: range(0, 35, 5), label: "Number of birds" },
    series: [{ name: "Before drought", vals: [5, 15, 30, 28, 15, 7] }, { name: "After drought (offspring)", vals: [2, 6, 18, 30, 28, 16], k: 2 }] }]);
V("bio", "7.2", ["The histogram shows a trait in a population before and after many generations in a new environment. Which type of selection is shown?", "Disruptive selection", ["Directional selection", "Stabilizing selection", "Sexual selection only"],
  "Individuals at both extremes increased while intermediates decreased, giving a two-peaked distribution. Disruptive selection can lead to speciation.",
  { t: "bar", title: "Distribution of body size", cats: ["1", "2", "3", "4", "5", "6", "7"], x: { label: "Body size class" }, y: { min: 0, max: 35, ticks: range(0, 35, 5), label: "Number of individuals" },
    series: [{ name: "Original population", vals: [4, 12, 25, 30, 20, 7, 2] }, { name: "After selection", vals: [10, 19, 9, 4, 9, 18, 9], k: 2 }] }]);

// 7.5 genotype counts
const hw = { t: "table", title: "Genotypes in a population of 1,000 flowers", head: ["Genotype", "AA", "Aa", "aa"], rows: [["Number of individuals", "360", "480", "160"]] };
V("bio", "7.5", ["Based on the data, what is the frequency of allele a?", "0.4", ["0.16", "0.6", "0.48"],
  "Total alleles = 2,000. a alleles = 480 (from Aa) + 2 × 160 (from aa) = 800. 800 ÷ 2,000 = 0.4.", hw]);
V("bio", "7.5", ["Is this population in Hardy-Weinberg equilibrium for this gene?", "Yes. With p = 0.6 and q = 0.4, the expected counts are 360 AA, 480 Aa, and 160 aa, which match the observed counts",
  ["No, because the population contains heterozygotes", "No, because p does not equal q", "It can't be determined without the phenotypes"],
  "Expected: p² = 0.36, 2pq = 0.48, q² = 0.16, times 1,000. These match exactly, so there is no evidence of evolution at this locus.", hw]);

// 7.6 cytochrome c
V("bio", "7.6", ["The table shows the number of amino acid differences between human cytochrome c and that of other organisms. Which conclusion is best supported?", "Humans share a more recent common ancestor with cows than with pigeons",
  ["Humans evolved from rhesus monkeys", "Yeast is more closely related to humans than wheat is", "Pigeons and bullfrogs are identical in cytochrome c"],
  "Fewer differences suggest more recent divergence. Cows (10) differ less than pigeons (12), and far less than yeast (42). The data show relatedness, not that one living species evolved from another.",
  { t: "table", title: "Amino acid differences in cytochrome c compared with humans", head: ["Organism", "Differences"], rows: [["Chimpanzee", "0"], ["Rhesus monkey", "1"], ["Rabbit", "9"], ["Cow", "10"], ["Pigeon", "12"], ["Bullfrog", "20"], ["Fruit fly", "24"], ["Wheat", "37"], ["Yeast", "42"]], note: "" }]);

// 7.8 antibiotic resistance
V("bio", "7.8", ["An antibiotic was added to a bacterial culture at generation 10. What best explains the change in the percentage of resistant bacteria?", "The antibiotic killed susceptible bacteria, so the resistant ones that already existed survived and reproduced",
  ["The antibiotic caused bacteria to mutate so they could survive", "Bacteria learned to break down the antibiotic", "Resistant bacteria migrated into the culture after generation 10"],
  "A few resistant cells were present before the antibiotic was added (about 1%). The antibiotic acted as a selective pressure, so their descendants took over the population.",
  { t: "line", title: "Antibiotic-resistant cells in a bacterial population", x: { min: 0, max: 40, ticks: range(0, 40, 10), label: "Generation" }, y: { min: 0, max: 100, ticks: range(0, 100, 25), label: "Resistant cells (%)" },
    vlines: [{ x: 10, l: "Antibiotic added" }], series: [{ name: "Resistant", pts: curve(x => x < 10 ? 1 : 1 + 97 / (1 + Math.exp(-(x - 18) * 0.55)) - 97 / (1 + Math.exp(8 * 0.55)), 0, 40, 80) }] }]);

// 7.9 primate tree
V("bio", "7.9", ["Based on the phylogenetic tree, which statement is correct?", "Humans and chimpanzees are equally closely related to gorillas",
  ["Chimpanzees are more closely related to gorillas than humans are", "Orangutans are more closely related to gorillas than chimpanzees are", "Gibbons are the ancestors of the other four groups"],
  "The gorilla lineage branches from the node that is the common ancestor of the human + chimpanzee clade. Both humans and chimps share that same most recent common ancestor with gorillas.",
  { t: "tree", title: "Phylogeny of the apes", root: [[[["Human", "Chimpanzee"], "Gorilla"], "Orangutan"], "Gibbon"] }]);
V("bio", "7.9", ["The cladogram shows where traits first appeared. Which statement is supported?", "Frogs have jaws and four limbs but do not produce amniotic eggs",
  ["Sharks have four limbs", "Lampreys and sharks share the trait of jaws", "Lizards lack jaws"],
  "A trait is shared by every group that branches after the point where it appears. Frogs come after jaws and four limbs but before the amniotic egg.",
  { t: "tree", title: "Cladogram of selected vertebrates", root: ["Lamprey", { l: "Jaws", c: ["Shark", { l: "Four limbs", c: ["Frog", { l: "Amniotic egg", c: ["Lizard", "Human"] }] }] }] }]);

// 8.2 energy table
V("bio", "8.2", ["Based on the energy data for this ecosystem, about how much energy is available to secondary consumers?", "200 kcal/m²/yr", ["2,000 kcal/m²/yr", "20 kcal/m²/yr", "1,000 kcal/m²/yr"],
  "Only about 10% of energy passes to the next trophic level: 2,000 × 0.10 = 200. The rest is lost mostly as heat from metabolism.",
  { t: "table", title: "Energy available at each trophic level", head: ["Trophic level", "Energy (kcal/m²/yr)"], rows: [["Producers", "20,000"], ["Primary consumers", "2,000"], ["Secondary consumers", "?"], ["Tertiary consumers", "20"]] }]);

// 8.3 logistic points
V("bio", "8.3", ["At which labeled point is the population growing fastest (greatest dN/dt)?", "B", ["A", "C", "D"],
  "In logistic growth, dN/dt = rN(K − N)/K is greatest at N = K/2 (point B, about 500). At A there are few individuals reproducing. At C and D, limited resources slow growth.",
  { t: "line", title: "Logistic growth of a population", x: { min: 0, max: 30, ticks: range(0, 30, 5), label: "Time (days)" }, y: { min: 0, max: 1200, ticks: range(0, 1200, 200), label: "Population size (N)" },
    hlines: [{ y: 1000, l: "K = 1,000" }], series: [{ name: "Population", pts: curve(x => 1000 / (1 + 99 * Math.exp(-0.35 * x)), 0, 30) }],
    marks: [{ x: 5, y: R(1000 / (1 + 99 * Math.exp(-1.75))), l: "A", dx: -8 }, { x: 13.13, y: 500, l: "B", dx: -8 }, { x: 20, y: R(1000 / (1 + 99 * Math.exp(-7))), l: "C", dx: -8, dy: 18 }, { x: 28, y: R(1000 / (1 + 99 * Math.exp(-9.8))), l: "D", dx: 0, dy: 20 }] }]);

// 8.4 hare & lynx
V("bio", "8.4", ["The graph shows population sizes of snowshoe hares and lynx over time. Which explanation best accounts for the pattern?", "Lynx numbers rise after hare numbers rise because more prey supports more predators, then fall after predation reduces the hare population",
  ["The two populations change independently of each other", "Lynx populations peak before hare populations because lynx control hare reproduction directly", "Both populations are regulated only by density-independent factors like weather"],
  "The lynx peaks follow the hare peaks. Predator–prey interactions are density-dependent: food availability limits the predators, and predation limits the prey.",
  { t: "line", title: "Hare and lynx populations", x: { min: 0, max: 40, ticks: range(0, 40, 10), label: "Years" }, y: { min: 0, max: 160, ticks: range(0, 160, 40), label: "Population (thousands)" },
    series: [{ name: "Snowshoe hare", pts: curve(x => 75 + 65 * Math.sin(2 * Math.PI * x / 10), 0, 40, 160) }, { name: "Lynx", pts: curve(x => 30 + 22 * Math.sin(2 * Math.PI * (x - 2) / 10), 0, 40, 160), k: 2, dash: true }] }]);

// 8.5 food web
const web = { t: "web", title: "A grassland food web (arrows show the direction of energy flow)", h: 320, nodes: [
    { id: "g", l: "Grass", x: 22, y: 90 }, { id: "s", l: "Shrubs", x: 70, y: 90 },
    { id: "gh", l: "Grasshopper", x: 12, y: 60 }, { id: "m", l: "Mouse", x: 45, y: 60 }, { id: "r", l: "Rabbit", x: 82, y: 60 },
    { id: "sn", l: "Snake", x: 28, y: 33 }, { id: "f", l: "Fox", x: 78, y: 30 }, { id: "h", l: "Hawk", x: 48, y: 9 }],
  edges: [["g", "gh"], ["g", "m"], ["g", "r"], ["s", "r"], ["s", "m"], ["gh", "m"], ["m", "sn"], ["m", "h"], ["m", "f"], ["r", "f"], ["r", "h"], ["sn", "h"]] };
V("bio", "8.5", ["In this food web, which organism acts as both a primary and a secondary consumer?", "Mouse", ["Rabbit", "Grasshopper", "Snake"],
  "Mice eat grass and shrubs (primary consumer) and also eat grasshoppers (secondary consumer). Rabbits and grasshoppers eat only plants.", web]);
V("bio", "8.5", ["If snakes were removed from this food web, what would most likely happen first?", "The mouse population would increase", ["The grass population would increase", "The hawk population would increase", "The grasshopper population would stop changing"],
  "Snakes prey on mice. Removing a predator releases its prey, so mice increase at first. That may then reduce grass and grasshoppers.", web]);

// 8.6 diversity plots
V("bio", "8.6", ["Two plots each contain 100 plants of the same four species. Which plot has greater biodiversity, and why?", "Plot A, because the species are more evenly represented",
  ["Plot B, because one species is dominant", "Both are equal, because they have the same species richness", "Plot B, because it has more individuals of species 1"],
  "Richness is the same (4 species), but Plot A is perfectly even. Simpson's index: A = 1 − 4(0.25²) = 0.75, and B = 1 − (0.85² + 3 × 0.05²) ≈ 0.27.",
  { t: "table", title: "Number of individuals of each species", head: ["", "Species 1", "Species 2", "Species 3", "Species 4"], rows: [["Plot A", "25", "25", "25", "25"], ["Plot B", "85", "5", "5", "5"]] }]);

// 8.7 eutrophication
V("bio", "8.7", ["Fertilizer runoff entered a lake on day 0. Why does dissolved oxygen fall sharply after about day 12?", "Algae die, and decomposers use up oxygen as they break down the dead algae",
  ["Algae consume oxygen during photosynthesis", "Fertilizer chemically reacts with oxygen", "Fish populations increase and consume all the oxygen"],
  "Nutrients cause an algal bloom. When the algae die, aerobic decomposition consumes dissolved O₂, creating hypoxic conditions (eutrophication).",
  { t: "line", title: "Changes in a lake after fertilizer runoff", x: { min: 0, max: 30, ticks: range(0, 30, 5), label: "Days after runoff" }, y: { min: 0, max: 100, ticks: range(0, 100, 25), label: "Relative level (% of maximum)" },
    series: [{ name: "Algae biomass", pts: curve(x => 10 + 90 * bell(x, 11, 4.5), 0, 30) }, { name: "Dissolved oxygen", pts: curve(x => x < 12 ? 80 + 15 * bell(x, 9, 3) : 89.1 - 74 * (1 - Math.exp(-(x - 12) / 3)) + (x > 22 ? (x - 22) * 2 : 0), 0, 30), k: 2, dash: true }] }]);

/* ======================= AP HUMAN GEOGRAPHY ======================= */

// 1.1 map types: choropleth
V("hug", "1.1", ["What type of map is shown?", "Choropleth map", ["Dot density map", "Isoline map", "Cartogram"],
  "Each area is shaded by a data value (a rate or percentage). A cartogram distorts area size, and an isoline map connects points of equal value.",
  { t: "choro", title: "Percent of residents age 65 or older, by county", legend: ["Under 12%", "12–15%", "15–18%", "18–21%", "Over 21%"],
    panels: [{ grid: [[1, 1, 2, 3, 4, 4, null], [0, 1, 2, 2, 3, 4, 4], [0, 0, 1, 2, 3, 3, 4], [null, 0, 1, 1, 2, 3, 3], [null, 0, 0, 1, 2, 2, null]] }] }]);

// 1.4 distance decay
V("hug", "1.4", ["The graph shows where customers of a store live. Which concept does it best illustrate?", "Distance decay", ["Time-space compression", "Environmental determinism", "Sequent occupance"],
  "Interaction declines as distance increases. Most customers come from nearby, and far fewer travel from 30–50 km away.",
  { t: "line", title: "Where a grocery store's customers live", x: { min: 0, max: 50, ticks: range(0, 50, 10), label: "Distance from store (km)" }, y: { min: 0, max: 40, ticks: range(0, 40, 10), label: "Share of customers (%)" },
    series: [{ name: "Customers", pts: [[2.5, 36], [7.5, 22], [12.5, 14], [17.5, 9], [22.5, 6], [27.5, 4.5], [32.5, 3.3], [37.5, 2.5], [42.5, 1.6], [47.5, 1.1]], dots: true }] }]);

// 1.6 scale panels
V("hug", "1.6", ["The two maps show the same unemployment data for one region. What do the maps best illustrate?", "Showing data at a broader scale can hide variation that appears at a more local scale",
  ["State-level data is always more accurate than county-level data", "Unemployment is evenly distributed within each state", "The scale of analysis does not affect the patterns you see"],
  "Map A averages each state (outlined blocks), so each state looks uniform. Map B shows sharp county-level contrasts inside those same states.",
  { t: "choro", title: "Unemployment rate", legend: ["Under 3%", "3–4%", "4–5%", "5–6%", "Over 6%"],
    panels: [{ title: "Map A: by state", grid: [[2, 2, 2, 1, 1, 1], [2, 2, 2, 1, 1, 1], [2, 2, 2, 1, 1, 1], [3, 3, 3, 2, 2, 2], [3, 3, 3, 2, 2, 2], [3, 3, 3, 2, 2, 2]], outline: [[0, 0, 3, 3], [0, 3, 3, 3], [3, 0, 3, 3], [3, 3, 3, 3]] },
      { title: "Map B: by county", grid: [[0, 1, 4, 0, 1, 1], [1, 4, 4, 0, 0, 3], [0, 3, 2, 1, 0, 2], [4, 4, 1, 3, 0, 1], [3, 4, 0, 4, 2, 0], [2, 3, 4, 3, 2, 1]], outline: [[0, 0, 3, 3], [0, 3, 3, 3], [3, 0, 3, 3], [3, 3, 3, 3]] }] }]);

// 2.3 pyramids
const AGES = ["0–4", "5–9", "10–14", "15–19", "20–24", "25–29", "30–34", "35–39", "40–44", "45–49", "50–54", "55–59", "60–64", "65–69", "70–74", "75–79", "80+"];
const expansive = { t: "pyramid", title: "Population pyramid, Country A", ages: AGES, max: 10, ticks: [0, 5, 10],
  m: [9.4, 8.0, 6.8, 5.6, 4.5, 3.7, 3.0, 2.4, 1.9, 1.5, 1.2, 0.9, 0.7, 0.5, 0.3, 0.2, 0.1], f: [9.1, 7.8, 6.6, 5.5, 4.5, 3.8, 3.1, 2.5, 2.0, 1.6, 1.3, 1.0, 0.8, 0.6, 0.4, 0.2, 0.1] };
V("hug", "2.3", ["Country A's population pyramid is most characteristic of which stage of the Demographic Transition Model?", "Stage 2", ["Stage 1", "Stage 4", "Stage 5"],
  "A very wide base narrowing sharply toward the top shows high birth rates and a young population, with death rates already falling. That combination produces rapid growth, the mark of Stage 2 (e.g., Niger).", expansive]);
V("hug", "2.3", ["Which challenge is Country A most likely to face in the next 20 years?", "Providing enough schools, jobs, and housing for a large young population",
  ["Funding pensions for a large elderly population", "A shrinking labor force", "Natural decrease in population"],
  "Nearly half the population is under 15, so demand for education and, later, jobs will surge. This is the youthful dependency challenge.", expansive]);
V("hug", "2.9", ["Country B's pyramid suggests which policy response is most likely?", "Pronatalist incentives and increased immigration to expand the workforce",
  ["Antinatalist policies to reduce birth rates", "Building many new primary schools", "Restricting immigration to protect jobs"],
  "A narrow base with a top-heavy shape means low fertility and an aging population, as in Japan. Governments respond with incentives to have children and by bringing in workers from abroad.",
  { t: "pyramid", title: "Population pyramid, Country B", ages: AGES, max: 6, ticks: [0, 3, 6],
    m: [1.8, 2.0, 2.2, 2.3, 2.4, 2.5, 2.7, 3.0, 3.4, 3.9, 3.4, 3.1, 3.0, 3.3, 3.4, 2.4, 2.6], f: [1.7, 1.9, 2.1, 2.2, 2.3, 2.4, 2.6, 2.9, 3.3, 3.8, 3.4, 3.2, 3.1, 3.6, 4.0, 3.2, 5.4] }]);
V("hug", "2.12", ["Country C's population pyramid shows a large bulge of males aged 20–44. What is the most likely explanation?", "Large-scale immigration of male workers for jobs in construction and the oil industry",
  ["A recent baby boom", "A war that killed many young women", "High female emigration"],
  "Gulf states such as Qatar and the UAE recruit many male guest workers. This skews the sex ratio and creates a bulge in working ages that births alone can't explain.",
  { t: "pyramid", title: "Population pyramid, Country C", ages: ["0–4", "5–9", "10–14", "15–19", "20–24", "25–29", "30–34", "35–39", "40–44", "45–49", "50–54", "55–59", "60–64", "65+"], max: 14, ticks: [0, 7, 14],
    m: [3.5, 3.3, 2.8, 2.8, 8.0, 12.0, 11.0, 8.0, 5.5, 4.0, 2.8, 1.8, 1.0, 0.7], f: [3.3, 3.1, 2.6, 2.0, 2.0, 2.8, 3.0, 2.4, 1.6, 1.1, 0.8, 0.5, 0.3, 0.3] }]);

// 2.4 country table
const demo = { t: "table", title: "Demographic data for four countries", head: ["Country", "CBR (per 1,000)", "CDR (per 1,000)", "TFR", "IMR (per 1,000)"],
  rows: [["A", "38", "8", "5.2", "55"], ["B", "11", "10", "1.4", "3"], ["C", "18", "6", "2.2", "15"], ["D", "8", "12", "1.3", "2"]] };
V("hug", "2.4", ["Which country is experiencing natural decrease?", "Country D", ["Country A", "Country B", "Country C"],
  "Natural decrease happens when deaths exceed births. For D, CBR 8 − CDR 12 = −4 per 1,000, or −0.4%.", demo]);
V("hug", "2.4", ["What is the rate of natural increase (RNI) for Country A?", "3.0%", ["30%", "4.6%", "0.3%"],
  "RNI = (CBR − CDR) ÷ 10 = (38 − 8) ÷ 10 = 3.0% per year. At that rate the population would double in about 23 years (70 ÷ 3).", demo]);

// 2.5 DTM
const dtm = { t: "line", title: "The Demographic Transition Model", bands: [{ from: 0, to: 20, l: "Stage 1" }, { from: 20, to: 40, l: "Stage 2" }, { from: 40, to: 60, l: "Stage 3" }, { from: 60, to: 80, l: "Stage 4" }, { from: 80, to: 100, l: "Stage 5" }],
  x: { min: 0, max: 100, label: "Time" }, y: { min: 0, max: 50, ticks: range(0, 50, 10), label: "Rate per 1,000 people" },
  series: [{ name: "Crude birth rate", pts: curve(x => x < 80 ? 40 - 29 / (1 + Math.exp(-(x - 52) / 5)) + (x < 20 ? 1.2 * Math.sin(x / 2) : 0) : 11.1 - (x - 80) * 0.12, 0, 100, 120) },
    { name: "Crude death rate", pts: curve(x => x < 20 ? 35.4 + 3 * Math.sin(x * 1.3) * (20 - x) / 20 : x < 80 ? 10 + 27 / (1 + Math.exp((x - 31) / 4)) : 10 + (x - 80) * 0.1, 0, 100, 120), k: 2, dash: true }] };
V("hug", "2.5", ["In which stage of the model is the rate of natural increase highest?", "Late Stage 2", ["Stage 1", "Stage 4", "Stage 5"],
  "The gap between birth rate and death rate is widest at the end of Stage 2. Death rates have fallen with better food and medicine, but birth rates are still high.", dtm]);
V("hug", "2.5", ["What distinguishes Stage 5 from Stage 4 in the model?", "The death rate rises above the birth rate, producing natural decrease",
  ["Birth rates rise sharply", "Death rates fall sharply because of medical advances", "Both rates become high and unstable"],
  "In Stage 5, very low fertility and an aging population push deaths above births. Italy and Japan are examples.", dtm]);

// 2.6 Malthus
V("hug", "2.6", ["According to the model shown, what happens after year 25?", "Population grows faster than food supply, leading to shortages and 'checks' such as famine",
  ["Food supply grows faster than population", "Population and food supply grow at the same rate", "Population stops growing entirely"],
  "Malthus argued that population grows geometrically (1, 2, 4, 8…) while food grows arithmetically (1, 2, 3, 4…). Critics note he didn't foresee advances like the Green Revolution.",
  { t: "line", title: "Malthus's model of population and food supply", x: { min: 0, max: 100, ticks: range(0, 100, 25), label: "Years" }, y: { min: 0, max: 16, ticks: [0, 4, 8, 12, 16], label: "Relative amount" },
    series: [{ name: "Population (geometric)", pts: curve(x => Math.pow(2, x / 25), 0, 100) }, { name: "Food supply (arithmetic)", pts: [[0, 1], [100, 5]], k: 2, dash: true }] }]);

// 2.10 gravity
V("hug", "2.10", ["Using the gravity model (interaction ∝ population₁ × population₂ ÷ distance), which pair of cities should have the most interaction?", "B and C", ["A and B", "A and C", "A and D"],
  "B–C: (1 × 4) ÷ 50 = 0.08. A–D: (2 × 0.5) ÷ 20 = 0.05. A–B and A–C are both 0.02.",
  { t: "table", title: "City populations and distances", head: ["City pair", "Population 1 (millions)", "Population 2 (millions)", "Distance (km)"], rows: [["A and B", "2", "1", "100"], ["A and C", "2", "4", "400"], ["B and C", "1", "4", "50"], ["A and D", "2", "0.5", "20"]] }]);

// 3.4 hierarchical diffusion
V("hug", "3.4", ["The diagram shows how a new fashion trend spread. Which type of diffusion does it show?", "Hierarchical diffusion", ["Contagious diffusion", "Relocation diffusion", "Stimulus diffusion"],
  "The trend moved from the largest, most connected city to regional cities and then to small towns, skipping nearby places lower in the hierarchy.",
  { t: "web", title: "Spread of a fashion trend", h: 260, nodes: [{ id: "a", l: "Global city", x: 50, y: 12 }, { id: "b", l: "Regional city 1", x: 25, y: 48 }, { id: "c", l: "Regional city 2", x: 75, y: 48 },
      { id: "d", l: "Town", x: 10, y: 86 }, { id: "e", l: "Town", x: 36, y: 86 }, { id: "f", l: "Town", x: 64, y: 86 }, { id: "g", l: "Town", x: 90, y: 86 }],
    edges: [["a", "b"], ["a", "c"], ["b", "d"], ["b", "e"], ["c", "f"], ["c", "g"]] }]);

// 3.7 language tree
V("hug", "3.7", ["Based on the language tree, which statement is best supported?", "English and Hindi share a distant common ancestor, Proto-Indo-European",
  ["English is more closely related to French than to German", "Spanish descended from Portuguese", "Hindi and Bengali belong to the Romance branch"],
  "All the languages shown descend from Proto-Indo-European, the root of the tree. English groups with German and Dutch (Germanic). Spanish and Portuguese are sister languages; neither comes from the other.",
  { t: "tree", title: "Part of the Indo-European language family", root: [{ l: "Germanic", c: ["English", ["German", "Dutch"]] }, { l: "Romance", c: [["Spanish", "Portuguese"], "French", "Italian"] }, { l: "Indo-Iranian", c: ["Hindi", "Bengali"] }] }]);

// 3.7 religion bar
V("hug", "3.7", ["The graph shows the approximate share of the world's population in major religious groups. Which group shown is an ethnic religion?", "Hinduism", ["Christianity", "Islam", "Buddhism"],
  "Hinduism is mostly concentrated in South Asia and does not actively seek converts. Christianity, Islam, and Buddhism are universalizing religions.",
  { t: "bar", title: "World population by religious group (approx. %)", cats: ["Christian", "Muslim", "Unaffiliated", "Hindu", "Buddhist", "Folk"], y: { min: 0, max: 35, ticks: range(0, 35, 5), label: "Share of world population (%)" }, values: true,
    series: [{ name: "Share", vals: [31, 24, 16, 15, 7, 6] }] }]);

// 4.5 maritime zones
V("hug", "4.5", ["According to UNCLOS, what right does a coastal state have in zone X?", "Exclusive rights to fish and extract resources, while other countries' ships may still pass through",
  ["Full sovereignty, identical to its land territory", "No special rights; zone X is international waters", "The right to block all foreign ships from entering"],
  "Zone X is the Exclusive Economic Zone (up to 200 nautical miles). The state controls resources there, but navigation and overflight remain open to others.",
  { t: "flow", title: "Maritime zones under the UN Convention on the Law of the Sea", strip: true, steps: [{ l: "Land", w: 0.8 }, { l: "Territorial sea", s: "0–12 nm", w: 1.1 }, { l: "Contiguous zone", s: "12–24 nm", w: 1.1 }, { l: "X", s: "to 200 nm", x: 1, w: 2.2 }, { l: "High seas", w: 1.3 }] }]);

// 4.6 gerrymandering
V("hug", "4.6", ["Party A won about 60% of the statewide vote but only 2 of 5 districts. Which redistricting technique best explains the result?", "Packing Party A voters into Districts 1 and 2 and spreading the rest thinly across the other districts",
  ["Reapportionment after the census", "Drawing compact, equal districts", "Majority-minority districting required by law"],
  "Party A's voters are concentrated in two districts it wins by huge margins, wasting votes (packing). Its remaining voters are split so it narrowly loses Districts 3–5 (cracking).",
  { t: "bar", title: "Party A's vote share by congressional district", cats: ["District 1", "District 2", "District 3", "District 4", "District 5"], y: { min: 0, max: 100, ticks: range(0, 100, 25), label: "Party A vote share (%)" }, values: true, hlines: [{ y: 50 }],
    series: [{ name: "Party A", vals: [88, 85, 44, 43, 42] }], note: "Dashed line marks 50%." }]);

// 5.2 survey systems
const surveySvg = {
  a: `<rect x="10" y="10" width="200" height="140" class="d-fill"/>` + [50, 90, 130, 170].map(x => `<line x1="${x}" x2="${x}" y1="10" y2="150" class="d-ln"/>`).join("") + [45, 80, 115].map(y => `<line x1="10" x2="210" y1="${y}" y2="${y}" class="d-ln"/>`).join(""),
  b: `<rect x="10" y="10" width="200" height="140" class="d-fill"/><path d="M10 138 C 60 128, 120 148, 210 132 L210 150 L10 150 Z" class="d-water"/>` + [26, 42, 58, 74, 90, 106, 122, 138, 154, 170, 186].map(x => `<line x1="${x}" x2="${x}" y1="10" y2="${136 + Math.round(4 * Math.sin(x / 20))}" class="d-ln"/>`).join(""),
  c: `<rect x="10" y="10" width="200" height="140" class="d-fill"/><path d="M40 10 C 60 60, 30 100, 70 150" style="fill:none;stroke:var(--s1);stroke-opacity:.75;stroke-width:5"/><path d="M10 70 L55 64 L100 88 L128 40 L128 10 M100 88 L118 150 M128 40 L210 58 M160 52 L150 110 L210 118 M150 110 L118 150" class="d-ln"/>` + [[140, 30], [175, 90], [85, 125]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" class="d-thin"/>`).join("")
};
V("hug", "5.2", ["Which survey pattern is typical of French settlement along the St. Lawrence River in Quebec and in Louisiana?", "Pattern B, long lots", ["Pattern A, township and range", "Pattern C, metes and bounds", "None of the patterns shown"],
  "The long-lot system divides land into narrow strips running back from a river, so each farm has water access. Pattern A is the U.S. rectangular survey, and Pattern C uses natural features such as streams and trees.",
  { t: "panels", title: "Three rural land survey patterns", items: [{ t: "svg", title: "Pattern A", w: 220, h: 160, svg: surveySvg.a }, { t: "svg", title: "Pattern B", w: 220, h: 160, svg: surveySvg.b }, { t: "svg", title: "Pattern C", w: 220, h: 160, svg: surveySvg.c }] }]);

// 5.5 India wheat yields
V("hug", "5.5", ["What best explains the change in wheat yields in India shown on the graph?", "Adoption of high-yield seed varieties, fertilizers, and irrigation during the Green Revolution",
  ["The spread of shifting cultivation", "Reduced use of chemical inputs", "A decline in the number of farmers"],
  "Yields were nearly flat until the mid-1960s, then climbed steeply as Green Revolution technologies spread, especially in Punjab and Haryana.",
  { t: "line", title: "Average wheat yield in India (approximate)", x: { min: 1950, max: 2000, ticks: range(1950, 2000, 10), label: "Year" }, y: { min: 0, max: 3, ticks: [0, 1, 2, 3], label: "Yield (tonnes per hectare)" },
    vlines: [{ x: 1966, l: "High-yield wheat introduced" }], series: [{ name: "Yield", pts: [[1950, 0.66], [1955, 0.7], [1960, 0.85], [1965, 0.83], [1970, 1.2], [1975, 1.3], [1980, 1.44], [1985, 1.87], [1990, 2.12], [1995, 2.56], [2000, 2.78]], dots: true }] }]);

// 5.8 von Thünen
const vonThunen = { t: "rings", title: "Von Thünen's model of agricultural land use", rings: ["Market", "A", "B", "C", "D"] };
V("hug", "5.8", ["In von Thünen's original model, which ring represents forestry?", "B", ["A", "C", "D"],
  "The rings, moving outward, are market gardening and dairy (A), forestry (B), grain and field crops (C), and ranching (D). Wood was heavy and costly to haul but needed in the city for fuel and building.", vonThunen]);
V("hug", "5.8", ["Which activity would von Thünen place in ring D, and why?", "Ranching, because it needs large amounts of cheap land and animals can walk to market",
  ["Dairy, because milk is perishable", "Market gardening, because vegetables need to reach the city quickly", "Forestry, because wood is bulky"],
  "Land rent falls with distance from the market, so the most land-extensive activity with the lowest transport cost per unit of value ends up farthest out.", vonThunen]);

// 6.2 urbanization by region
V("hug", "6.2", ["Which statement is best supported by the graph?", "Africa and Asia are the least urbanized regions, so most future urban growth is expected there",
  ["Europe is the most urbanized region in the world", "Asia is more urbanized than Latin America", "All regions have nearly the same level of urbanization"],
  "About 43% of Africa's population and 50% of Asia's live in cities, compared with more than 80% in North America and Latin America. Rapid rural-to-urban migration is ongoing in both regions.",
  { t: "bar", title: "Urban population as a share of total population (approx.)", cats: ["N. America", "Latin Am.", "Europe", "Oceania", "Asia", "Africa"], y: { min: 0, max: 100, ticks: range(0, 100, 25), label: "Urban population (%)" }, values: true,
    series: [{ name: "Urban share", vals: [82, 81, 74, 68, 50, 43] }] }]);

// 6.4 rank-size
V("hug", "6.4", ["The graphs show the five largest cities in two countries. Which statement is correct?", "Country Y has a primate city; Country X follows the rank-size rule",
  ["Country X has a primate city; Country Y follows the rank-size rule", "Both countries follow the rank-size rule", "Both countries have primate cities"],
  "In Country X, the nth city is about 1/n the size of the largest (12, 6, 4, 3, 2.4). In Country Y, the largest city is six times bigger than the second, which is a primate city pattern.",
  { t: "panels", title: "Populations of the five largest cities (millions)", items: [
      { t: "bar", title: "Country X", h: 240, cats: ["1", "2", "3", "4", "5"], y: { min: 0, max: 12, ticks: [0, 4, 8, 12] }, values: true, series: [{ name: "X", vals: [12, 6, 4, 3, 2.4] }] },
      { t: "bar", title: "Country Y", h: 240, cats: ["1", "2", "3", "4", "5"], y: { min: 0, max: 12, ticks: [0, 4, 8, 12] }, values: true, series: [{ name: "Y", vals: [12, 2, 1.6, 1.2, 1] }] }] }]);

// 6.5 Burgess
V("hug", "6.5", ["In the Burgess concentric zone model shown, what is found in zone 2?", "The zone of transition, with industry and deteriorating housing", ["High-income commuter homes", "Middle-class single-family housing", "The central business district"],
  "Zone 1 is the CBD, zone 2 is the zone in transition, zone 3 is working-class homes, zone 4 is middle-class residences, and zone 5 is the commuter zone. Income generally rises with distance from the center.",
  { t: "rings", title: "Concentric zone model", rings: ["1", "2", "3", "4", "5"], key: ["1 = CBD", "2 = ?", "3 = Working-class housing", "4 = Middle-class housing", "5 = Commuter zone"] }]);

// 6.5 Hoyt
V("hug", "6.5", ["The urban model shown is the", "Hoyt sector model", ["Burgess concentric zone model", "Harris and Ullman multiple nuclei model", "Griffin-Ford Latin American city model"],
  "Hoyt described land uses extending outward from the CBD in wedges, often along transportation routes, with high-income housing forming its own sector.",
  { t: "sectors", title: "A model of urban land use", wedges: [{ l: "Low-income|housing", a: 55, k: 2 }, { l: "Industry and|transportation", a: 45, k: 3 }, { l: "Low-income|housing", a: 60, k: 2 }, { l: "Middle-income|housing", a: 80, k: 1 }, { l: "High-income|housing", a: 55, k: 4 }, { l: "Middle-income|housing", a: 65, k: 1 }] }]);

// 6.6 bid-rent
const bidRent = { t: "line", title: "Bid-rent curves", x: { min: 0, max: 20, ticks: range(0, 20, 4), label: "Distance from CBD (km)" }, y: { min: 0, max: 100, ticks: range(0, 100, 20), label: "Rent willing to pay ($/m²)" },
  series: [{ name: "Commercial", pts: [[0, 100], [5, 0]] }, { name: "Industrial", pts: [[0, 60], [11, 0]], k: 2 }, { name: "Residential", pts: [[0, 35], [18, 0]], k: 3, dash: true }] };
V("hug", "6.6", ["According to bid-rent theory and the graph, which land use would occupy land 4 km from the CBD?", "Industrial", ["Commercial", "Residential", "Agricultural"],
  "Land goes to the highest bidder. At 4 km, industrial users would pay about $38/m², more than residential (about $27) or commercial (about $20).", bidRent]);
V("hug", "6.6", ["Why does the commercial curve have the steepest slope?", "Businesses value accessibility highly and will pay the most for central locations, but their willingness falls quickly with distance",
  ["Commercial land is always cheaper than residential land", "Businesses prefer locations far from the CBD", "Residential users value accessibility more than businesses"],
  "Retail and offices depend on foot traffic and accessibility, so central sites are worth far more to them than to other users.", bidRent]);

// 7.2 employment by sector
V("hug", "7.2", ["Which country is most likely the most economically developed?", "Country C", ["Country A", "Country B", "All three are equally developed"],
  "Developed economies have most workers in the tertiary (service) sector and very few in the primary sector. Country C has 80% tertiary and 2% primary.",
  { t: "bar", title: "Share of employment by economic sector", cats: ["Country A", "Country B", "Country C"], y: { min: 0, max: 100, ticks: range(0, 100, 25), label: "Share of workforce (%)" },
    series: [{ name: "Primary", vals: [60, 30, 2] }, { name: "Secondary", vals: [15, 30, 18], k: 2 }, { name: "Tertiary", vals: [25, 40, 80], k: 3 }] }]);

// 7.3 scatter GNI vs TFR
V("hug", "7.3", ["The scatterplot compares income and fertility for a sample of countries. Which relationship does it show?", "As GNI per capita increases, total fertility rate generally decreases",
  ["As GNI per capita increases, total fertility rate increases", "There is no relationship between income and fertility", "Only countries with high income have fertility above replacement"],
  "Higher-income countries tend to have more education and employment for women, better access to contraception, and lower infant mortality, all of which lower fertility.",
  { t: "scatter", title: "GNI per capita vs. total fertility rate (illustrative sample)", x: { min: 0, max: 70, ticks: range(0, 70, 10), label: "GNI per capita (thousands of US$)" }, y: { min: 0, max: 7, ticks: range(0, 7, 1), label: "Total fertility rate" },
    pts: [[1.2, 6.7], [2.1, 5.0], [2.5, 4.4], [4, 3.6], [6, 2.7], [8, 2.3], [12, 1.8], [16, 1.7], [25, 1.5], [35, 1.6], [45, 1.8], [55, 1.7], [65, 1.6]] }]);

// 7.3 HDI table
V("hug", "7.3", ["Based on the table, Country B most likely has", "a large share of its workforce in the primary sector and a high infant mortality rate",
  ["a mostly tertiary economy and very low fertility", "the highest Human Development Index of the three", "a larger GNI per capita than Country C"],
  "Low life expectancy, few years of schooling, and low income all point to a less developed country. Such countries typically have more agricultural workers and higher infant mortality.",
  { t: "table", title: "Human Development Index indicators", head: ["Country", "Life expectancy (yrs)", "Mean years of schooling", "GNI per capita (US$)", "HDI"], rows: [["A", "82", "13.4", "50,000", "0.94"], ["B", "64", "4.9", "2,300", "0.55"], ["C", "75", "8.5", "14,000", "0.77"]] }]);

// 7.5 Rostow
V("hug", "7.5", ["In Rostow's stages of economic growth, what happens during stage X?", "Takeoff: rapid growth concentrated in a few manufacturing industries",
  ["High mass consumption of durable goods", "Subsistence agriculture with limited technology", "Widespread diffusion of technology across the whole economy"],
  "Takeoff comes after the preconditions stage: a few leading industries (often textiles or manufacturing) grow quickly, and investment rises. Critics call the model Eurocentric.",
  { t: "flow", title: "Rostow's stages of economic growth", steps: ["Traditional society", "Preconditions for takeoff", "X", "Drive to maturity", "High mass consumption"] }]);

// 7.6 comparative advantage
V("hug", "7.6", ["Based on the table, which specialization would benefit both countries through trade?", "Country A should specialize in wheat, and Country B in cloth",
  ["Country A should produce both goods, because it is more productive in both", "Country A should specialize in cloth, and Country B in wheat", "Neither country should trade"],
  "Opportunity cost of 1 m of cloth: 2 t of wheat in A (6 ÷ 3), but only 1 t in B (2 ÷ 2). B has the comparative advantage in cloth and A in wheat, even though A has the absolute advantage in both.",
  { t: "table", title: "Output per worker per day", head: ["Country", "Wheat (tonnes)", "Cloth (meters)"], rows: [["A", "6", "3"], ["B", "2", "2"]] }]);

// 7.7 US manufacturing
V("hug", "7.7", ["Which process best explains the trend in U.S. manufacturing employment after 1980?", "Deindustrialization driven by automation and the offshoring of factory jobs to lower-wage countries",
  ["Rapid industrialization in the Rust Belt", "Growth of the primary sector", "A decline in U.S. manufacturing output to zero"],
  "Manufacturing jobs fell from about 19 million to about 12 million as factories automated and production moved abroad. U.S. manufacturing output did not collapse; it now takes fewer workers.",
  { t: "line", title: "U.S. manufacturing employment (approximate)", x: { min: 1970, max: 2020, ticks: range(1970, 2020, 10), label: "Year" }, y: { min: 0, max: 20, ticks: range(0, 20, 5), label: "Workers (millions)" },
    series: [{ name: "Manufacturing jobs", pts: [[1970, 17.8], [1979, 19.4], [1985, 17.8], [1990, 17.7], [1995, 17.2], [2000, 17.3], [2005, 14.2], [2010, 11.5], [2015, 12.3], [2019, 12.8]], dots: true }] }]);
})();
