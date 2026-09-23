// Figure-based questions, part 2: one for every topic that had none, so every CED topic has at least one.
// Same format as visuals.js: [courseId, topicCode, [stem, correct, [wrong x3], explanation, figure]]
window.AP_VIS = window.AP_VIS || [];
(function(){
const V = (c, code, q) => AP_VIS.push([c, code, q]);
const R = n => Math.round(n * 1000) / 1000;
const curve = (f, a, b, n = 60) => Array.from({ length: n + 1 }, (_, i) => { const x = a + (b - a) * i / n; return [R(x), R(f(x))]; });
const range = (a, b, s) => { const o = []; for (let v = a; v <= b + 1e-9; v += s) o.push(R(v)); return o; };
const seeded = seed => () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const logistic = (x, mid, k) => 1 / (1 + Math.exp(-(x - mid) * k));

/* ======================= AP BIOLOGY ======================= */

V("bio", "1.2", ["The table shows which elements are found in four biological molecules. Which molecule is most likely a nucleic acid?", "Molecule Y", ["Molecule W", "Molecule X", "Molecule Z"],
  "Nucleic acids contain C, H, O, N (in the bases) and P (in the sugar-phosphate backbone). X, with sulfur and no phosphorus, fits a protein. W fits a carbohydrate.",
  { t: "table", title: "Elements present in four molecules", head: ["Molecule", "C", "H", "O", "N", "P", "S"], rows: [["W", "✓", "✓", "✓", "", "", ""], ["X", "✓", "✓", "✓", "✓", "", "✓"], ["Y", "✓", "✓", "✓", "✓", "✓", ""], ["Z", "✓", "✓", "✓", "", "", ""]] }]);

V("bio", "1.3", ["In the reaction shown, what is X, and what type of reaction is it?", "X is water, and the reaction is dehydration synthesis",
  ["X is water, and the reaction is hydrolysis", "X is oxygen, and the reaction is cellular respiration", "X is ATP, and the reaction is phosphorylation"],
  "Joining two monomers with a covalent bond removes an –OH from one and an –H from the other, releasing H₂O. Hydrolysis is the reverse: it uses water to break the bond.",
  { t: "flow", title: "Formation of the disaccharide maltose", steps: ["Glucose + Glucose", "Maltose + X"] }]);

V("bio", "1.4", ["The table shows the melting points of four 18-carbon fatty acids. Which explanation best accounts for the trend?", "Each additional C=C double bond adds a kink that keeps the tails from packing tightly, so less energy is needed to melt them",
  ["Double bonds make fatty acids more polar, so they dissolve in water", "Unsaturated fatty acids have more hydrogen atoms, which weakens them", "Longer carbon chains melt at lower temperatures"],
  "All four have 18 carbons, so chain length isn't the difference. More double bonds mean more bends and weaker interactions between tails, which is why oils rich in unsaturated fats are liquid at room temperature.",
  { t: "table", title: "Melting points of 18-carbon fatty acids (approximate)", head: ["Fatty acid", "C=C double bonds", "Melting point (°C)"], rows: [["Stearic acid", "0", "69"], ["Oleic acid", "1", "13"], ["Linoleic acid", "2", "−5"], ["α-Linolenic acid", "3", "−11"]] }]);

V("bio", "1.5", ["The table shows how four single amino acid substitutions affect an enzyme. Which best explains the result for mutation B?", "Placing a charged R group in the hydrophobic core disrupts the interactions that hold the tertiary structure together",
  ["Any change in primary structure destroys all enzyme activity", "Mutation B added a peptide bond to the enzyme", "Mutation B changed the enzyme's DNA into RNA"],
  "Nonpolar R groups cluster in the protein's interior. A charged residue there is energetically unfavorable, so the protein misfolds. Surface changes between similar residues (A, C) have little effect.",
  { t: "table", title: "Activity of enzyme variants", head: ["Mutation", "Change and location", "Activity (% of normal)"], rows: [["A", "Polar → polar, on the surface", "98"], ["B", "Nonpolar → charged, in the hydrophobic core", "5"], ["C", "Near the C-terminal end, far from the active site", "95"], ["D", "Glycine → proline inside an α-helix", "40"]] }]);

V("bio", "2.2", ["The graph compares organelle abundance in three cell types. Cell B is most likely a", "heart muscle cell, which needs large amounts of ATP",
  ["pancreatic cell that secretes digestive enzymes", "white blood cell that digests bacteria", "plant root cell that stores starch"],
  "Cell B has by far the most mitochondria, which supply ATP for constant contraction. Cell A (lots of rough ER) fits a protein-secreting cell, and Cell C (lots of lysosomes) fits a phagocyte.",
  { t: "bar", title: "Relative abundance of organelles (illustrative)", cats: ["Rough ER", "Mitochondria", "Lysosomes"], y: { min: 0, max: 10, ticks: [0, 2, 4, 6, 8, 10], label: "Relative abundance" },
    series: [{ name: "Cell A", vals: [9, 4, 2] }, { name: "Cell B", vals: [2, 9.5, 2] }, { name: "Cell C", vals: [3, 4, 9] }] }]);

V("bio", "2.4", ["The graph shows membrane fluidity across a range of temperatures for membranes with and without cholesterol. Which conclusion is best supported?", "Cholesterol reduces changes in fluidity, keeping the membrane less fluid at high temperatures and more fluid at low temperatures",
  ["Cholesterol makes the membrane more fluid at every temperature", "Cholesterol has no effect on membrane fluidity", "Membranes without cholesterol cannot change fluidity"],
  "The curve with cholesterol is flatter: it's more fluid than the other membrane when cold and less fluid when hot. Cholesterol buffers the membrane against temperature swings.",
  { t: "line", title: "Membrane fluidity vs. temperature", x: { min: 0, max: 50, ticks: range(0, 50, 10), label: "Temperature (°C)" }, y: { min: 0, max: 100, ticks: range(0, 100, 25), label: "Relative fluidity" },
    series: [{ name: "Without cholesterol", pts: curve(x => 5 + 90 * logistic(x, 25, 0.28), 0, 50) }, { name: "With cholesterol", pts: curve(x => 28 + 45 * logistic(x, 25, 0.12), 0, 50), k: 2, dash: true }] }]);

V("bio", "2.5", ["The graph shows how readily substances cross an artificial phospholipid bilayer with no proteins. Which conclusion is best supported?", "Small nonpolar molecules cross most easily, while ions and large polar molecules barely cross",
  ["Ions cross the bilayer faster than gases do", "Glucose crosses faster than water because it is larger", "All substances cross at the same rate"],
  "The hydrophobic core lets O₂ and CO₂ through easily. Water crosses slowly, and glucose and Na⁺ hardly cross at all, which is why cells need channels and carriers.",
  { t: "bar", title: "Relative permeability of a pure phospholipid bilayer (illustrative)", cats: ["O₂", "CO₂", "Ethanol", "H₂O", "Glucose", "Na⁺"], y: { min: 0, max: 100, ticks: range(0, 100, 25), label: "Relative permeability" },
    series: [{ name: "Permeability", vals: [100, 92, 60, 15, 1, 0.2] }] }]);

V("bio", "2.6", ["Based on the ion concentrations shown, moving K⁺ from outside the cell to inside requires", "active transport, because K⁺ is moving against its concentration gradient",
  ["simple diffusion, because K⁺ is small", "facilitated diffusion down the concentration gradient", "osmosis, because water carries K⁺ in"],
  "K⁺ is about 28 times more concentrated inside (140 vs. 5 mM), so moving it in goes uphill. The Na⁺/K⁺ pump uses ATP to do this.",
  { t: "table", title: "Typical ion concentrations in a mammalian cell (approximate)", head: ["Ion", "Inside cell (mM)", "Outside cell (mM)"], rows: [["Na⁺", "12", "145"], ["K⁺", "140", "5"]] }]);

V("bio", "2.9", ["Intestinal cells were taking up glucose through sodium–glucose cotransporters. At minute 10, ouabain, which blocks the Na⁺/K⁺ pump, was added. What best explains the result?", "Without the pump, the Na⁺ gradient that powers the cotransporter runs down, so glucose uptake slows",
  ["Ouabain directly blocks glucose from binding the cotransporter", "Glucose uptake needs ATP from the cotransporter itself", "Ouabain increases the Na⁺ gradient, which slows glucose uptake"],
  "This is secondary active transport: the cotransporter uses the Na⁺ gradient that the pump builds with ATP. Stop the pump and the gradient, and then glucose uptake, fades.",
  { t: "line", title: "Glucose uptake by intestinal cells", x: { min: 0, max: 30, ticks: range(0, 30, 5), label: "Time (min)" }, y: { min: 0, max: 100, ticks: range(0, 100, 25), label: "Glucose uptake rate (%)" },
    vlines: [{ x: 10, l: "Ouabain added" }], series: [{ name: "Uptake", pts: curve(x => x < 10 ? 95 : 10 + 85 * Math.exp(-(x - 10) / 4), 0, 30) }] }]);

V("bio", "2.10", ["The graph shows the activity of a lysosomal enzyme at different pH values. How does compartmentalization protect the cell?", "If a lysosome leaks, its enzymes are much less active at the cytosol's pH of about 7.2",
  ["The enzymes work best in the cytosol", "The enzymes digest the lysosome membrane at pH 5", "Compartments make enzymes work at every pH equally"],
  "The enzyme is most active near pH 5, the lysosome's internal pH, and nearly inactive at 7.2. Keeping the acidic environment inside a membrane limits accidental damage to the cell.",
  { t: "line", title: "Activity of a lysosomal enzyme vs. pH", x: { min: 3, max: 9, ticks: range(3, 9, 1), label: "pH" }, y: { min: 0, max: 100, ticks: range(0, 100, 25), label: "Relative activity (%)" },
    vlines: [{ x: 7.2, l: "Cytosol" }], series: [{ name: "Activity", pts: curve(x => 100 * Math.exp(-((x - 4.8) ** 2) / (2 * 0.8 ** 2)), 3, 9, 80) }] }]);

V("bio", "2.11", ["Which conclusion is best supported by the comparison in the table?", "Mitochondria resemble bacteria, supporting the idea that they came from an engulfed prokaryote",
  ["Mitochondria evolved from the nucleus", "Bacteria evolved from mitochondria", "Mitochondria are made by the endoplasmic reticulum"],
  "Circular DNA, bacteria-like 70S ribosomes, and division by fission are all shared with bacteria. This is key evidence for endosymbiotic theory.",
  { t: "table", title: "Comparing mitochondria, bacteria, and the eukaryotic nucleus", head: ["Feature", "Mitochondria", "Bacteria", "Eukaryotic nucleus / cytosol"], rows: [["DNA shape", "Circular", "Circular", "Linear"], ["Ribosome type", "70S-like", "70S", "80S"], ["How it divides", "Fission", "Binary fission", "Mitosis"], ["Membranes", "Double", "Single (plasma membrane)", "Double (nuclear envelope)"]] }]);

V("bio", "3.1", ["An enzyme was tested with its normal substrate S and three similar molecules. Which explanation best accounts for the results?", "The active site's shape and charge fit S closely, so even small changes in the molecule reduce binding",
  ["The enzyme binds all molecules equally, but S reacts faster", "S′ and S″ are larger, so they are too heavy to react", "The enzyme is used up by S, so it cannot react with the others"],
  "Enzyme specificity comes from the active site's three-dimensional shape and chemical properties. A mirror-image molecule or one with a different charge doesn't fit.",
  { t: "bar", title: "Enzyme activity with four similar molecules (illustrative)", cats: ["S (normal)", "S′ (extra –CH₃)", "S″ (mirror image)", "S‴ (opposite charge)"], y: { min: 0, max: 100, ticks: range(0, 100, 25), label: "Relative activity (%)" }, values: true,
    series: [{ name: "Activity", vals: [100, 12, 0, 3] }] }]);

V("bio", "3.4", ["Using the ΔG values in the table, what is the free-energy change when glutamine synthesis is coupled to ATP hydrolysis?", "About −16.3 kJ/mol, so the coupled reaction is spontaneous",
  ["About +44.7 kJ/mol, so the coupled reaction is not spontaneous", "About +14.2 kJ/mol, because ATP doesn't change the reaction", "About −30.5 kJ/mol, because only ATP's ΔG counts"],
  "Coupled ΔG = +14.2 + (−30.5) = −16.3 kJ/mol. Pairing an endergonic reaction with ATP hydrolysis makes the overall process exergonic.",
  { t: "table", title: "Standard free-energy changes", head: ["Reaction", "ΔG (kJ/mol)"], rows: [["Glutamate + NH₃ → Glutamine", "+14.2"], ["ATP + H₂O → ADP + Pᵢ", "−30.5"]] }]);

V("bio", "3.7", ["Two strains of a bacterium have different versions of a key enzyme. A population containing both strains is more likely to survive a shift in temperature because", "each enzyme version works best at a different temperature, so one strain can keep growing if conditions change",
  ["the two enzymes combine into a single enzyme that works at all temperatures", "strain 1 grows faster at every temperature", "enzymes don't affect growth rate"],
  "Molecular variation widens the range of conditions a population can tolerate. Strain 1 does best near 30 °C and strain 2 near 40 °C.",
  { t: "line", title: "Growth rate of two bacterial strains", x: { min: 15, max: 55, ticks: range(15, 55, 5), label: "Temperature (°C)" }, y: { min: 0, max: 1.2, ticks: [0, 0.4, 0.8, 1.2], label: "Growth rate (divisions/hour)" },
    series: [{ name: "Strain 1", pts: curve(x => Math.exp(-((x - 30) ** 2) / (2 * 5 ** 2)), 15, 55) }, { name: "Strain 2", pts: curve(x => 0.95 * Math.exp(-((x - 40) ** 2) / (2 * 5 ** 2)), 15, 55), k: 2, dash: true }] }]);

V("bio", "4.1", ["Which signal in the table is an example of quorum sensing?", "Signal W", ["Signal X", "Signal Y", "Signal Z"],
  "Quorum sensing uses molecules that bacteria secrete. Once they build up past a threshold (a high population density), the bacteria change their gene expression together. X is endocrine, Y is synaptic, and Z is direct contact.",
  { t: "table", title: "Four cell-signaling examples", head: ["Signal", "How it works"], rows: [["W", "Secreted by bacteria; builds up as the population grows and triggers bioluminescence"], ["X", "Released by the pancreas; travels in the blood to liver and muscle cells"], ["Y", "Released into a synaptic cleft; binds receptors on the next neuron"], ["Z", "Small molecules pass directly between adjacent heart cells through gap junctions"]] }]);

V("bio", "4.2", ["In the diagram of cell signaling, step X is best described as", "transduction, in which the signal is relayed and amplified inside the cell, often by second messengers and kinases",
  ["reception, in which the ligand binds the receptor", "the response, in which gene expression changes", "transcription of the ligand's gene"],
  "Cell signaling has three stages: reception (the ligand binds), transduction (relay and amplification), and the response.",
  { t: "flow", title: "The three stages of cell signaling", steps: ["Ligand binds receptor", "X", "Cellular response"] }]);

V("bio", "4.4", ["Intestinal cells were treated with cholera toxin, with and without a drug that blocks adenylyl cyclase. What do the results suggest?", "Cholera toxin raises cAMP by acting upstream of adenylyl cyclase, which is needed for the effect",
  ["Cholera toxin makes cAMP directly without adenylyl cyclase", "Cholera toxin lowers cAMP levels", "The drug increases cAMP production"],
  "Toxin alone raises cAMP about 12-fold, but blocking adenylyl cyclase prevents the rise. The toxin keeps a G protein active, which keeps adenylyl cyclase switched on.",
  { t: "bar", title: "cAMP in intestinal cells (relative)", cats: ["Control", "Cholera toxin", "Toxin + AC blocker"], y: { min: 0, max: 14, ticks: [0, 4, 8, 12], label: "cAMP (relative to control)" }, values: true,
    series: [{ name: "cAMP", vals: [1, 12, 1.4] }] }]);

V("bio", "5.1", ["The graph shows DNA content per cell as a cell goes through meiosis. During which interval do homologous chromosomes separate?", "Interval III", ["Interval I", "Interval II", "Interval IV"],
  "DNA doubles in S phase (II). In meiosis I (III), homologs separate and each cell drops from 4 to 2 units. In meiosis II (IV), sister chromatids separate, down to 1 unit.",
  { t: "line", title: "DNA per cell during meiosis", bands: [{ from: 0, to: 6, l: "I" }, { from: 6, to: 12, l: "II" }, { from: 12, to: 18, l: "III" }, { from: 18, to: 24, l: "IV" }],
    x: { min: 0, max: 26, label: "Time" }, y: { min: 0, max: 5, ticks: [0, 1, 2, 3, 4], label: "DNA per cell (units)" },
    series: [{ name: "DNA", pts: [[0, 2], [6, 2], [12, 4], [18, 4], [18, 2], [24, 2], [24, 1], [26, 1]] }] }]);

V("bio", "5.2", ["The table shows how many chromosome combinations independent assortment can produce in gametes. What is the missing value for humans (n = 23)?", "About 8.4 million (2²³)", ["46", "23 × 2 = 46 thousand", "529 (23²)"],
  "Each homologous pair lines up independently at metaphase I, giving 2ⁿ possible combinations. For n = 23, that's 8,388,608, before crossing over adds even more.",
  { t: "table", title: "Possible chromosome combinations from independent assortment", head: ["Haploid number (n)", "Combinations"], rows: [["2", "4"], ["3", "8"], ["4", "16"], ["23 (human)", "?"]] }]);

V("bio", "5.5", ["Hydrangeas from the same clone, so genetically identical, were grown in soils of different pH. What do the results show?", "The environment can change how a genotype is expressed (phenotypic plasticity)",
  ["Soil pH causes mutations in flower-color genes", "Flower color in hydrangeas is sex-linked", "The plants must have had different genotypes"],
  "Identical genotypes produced different phenotypes. Soil pH affects how available aluminum is, which changes flower pigments.",
  { t: "bar", title: "Flower color of cloned hydrangeas by soil pH", cats: ["pH 5.0", "pH 6.0", "pH 7.0"], y: { min: 0, max: 100, ticks: range(0, 100, 25), label: "Plants with each color (%)" },
    series: [{ name: "Blue", vals: [90, 45, 10] }, { name: "Pink", vals: [10, 55, 90], k: 2 }] }]);

V("bio", "5.6", ["Based on the karyotype summaries, which individual most likely has Turner syndrome?", "Individual D", ["Individual A", "Individual B", "Individual C"],
  "Turner syndrome is 45,X: a single X and no second sex chromosome. B has trisomy 21 (Down syndrome) and C is XXY (Klinefelter syndrome).",
  { t: "table", title: "Karyotype summaries", head: ["Individual", "Sex chromosomes", "Copies of chromosome 21", "Total chromosomes"], rows: [["A", "XX", "2", "46"], ["B", "XY", "3", "47"], ["C", "XXY", "2", "47"], ["D", "X", "2", "45"]] }]);

V("bio", "6.1", ["In a Hershey–Chase-style experiment, phages labeled with ³⁵S or ³²P infected bacteria, which were then separated from the phage coats. Which conclusion is supported?", "DNA, labeled with ³²P, entered the bacteria, so DNA is the genetic material",
  ["Protein, labeled with ³⁵S, entered the bacteria, so protein is the genetic material", "Neither label entered the bacteria", "Both labels entered equally, so both are genetic material"],
  "Most ³²P ended up with the bacteria (the pellet), while most ³⁵S stayed with the empty phage coats (the supernatant). Sulfur labels protein and phosphorus labels DNA.",
  { t: "table", title: "Where the radioactive label ended up (approximate)", head: ["Label", "With bacteria (pellet)", "With phage coats (supernatant)"], rows: [["³⁵S (protein)", "20%", "80%"], ["³²P (DNA)", "70%", "30%"]] }]);

V("bio", "6.3", ["The diagram shows a eukaryotic pre-mRNA. Which mature mRNA could result from alternative splicing?", "5′ cap – Exon 1 – Exon 3 – poly-A tail",
  ["Exon 1 – Intron – Exon 2", "Exon 3 – Exon 2 – Exon 1", "5′ cap – Intron – Intron – poly-A tail"],
  "Splicing removes introns and can skip exons, but the exons that remain stay in their original order. The cap and tail are kept.",
  { t: "flow", title: "A pre-mRNA transcript", strip: true, steps: [{ l: "5′ cap", w: 0.8 }, { l: "Exon 1", w: 1.2 }, { l: "Intron", s: "removed", w: 1 }, { l: "Exon 2", w: 1.2 }, { l: "Intron", s: "removed", w: 1 }, { l: "Exon 3", w: 1.2 }, { l: "Poly-A tail", w: 1 }] }]);

V("bio", "6.4", ["Using the codon table, what polypeptide does the mRNA 5′-AUG GGC UUU UAA-3′ code for?", "Met – Gly – Phe", ["Met – Gly – Phe – Stop – Phe", "Phe – Gly – Met", "Met – Phe – Gly"],
  "Ribosomes read codons 5′→3′ from the start codon: AUG (Met), GGC (Gly), UUU (Phe), then UAA, a stop codon that ends translation. The stop codon doesn't add an amino acid.",
  { t: "table", title: "Part of the genetic code", head: ["Codon", "Amino acid"], rows: [["AUG", "Methionine (Met), start"], ["GGC", "Glycine (Gly)"], ["GGA", "Glycine (Gly)"], ["UUU", "Phenylalanine (Phe)"], ["UUC", "Phenylalanine (Phe)"], ["UAA", "Stop"]] }]);

V("bio", "6.6", ["The table shows whether four genes are expressed in three cell types from the same person. Which conclusion is best supported?", "The cells have the same genes but express different sets of them, which gives each cell type its function",
  ["Each cell type has different genes in its nucleus", "Neurons have lost the albumin gene", "Only liver cells can make ATP synthase"],
  "ATP synthase, a housekeeping gene, is on in all three, while specialized genes are on in only one. Differences in gene regulation, not in genes, create cell types.",
  { t: "table", title: "Gene expression in three cell types (✓ = expressed)", head: ["Gene", "Liver cell", "Muscle cell", "Neuron"], rows: [["Albumin", "✓", "", ""], ["Myosin (muscle form)", "", "✓", ""], ["Neurotransmitter synthase", "", "", "✓"], ["ATP synthase", "✓", "✓", "✓"]] }]);

V("bio", "6.7", ["Which mutant mRNA is a nonsense mutation, one that creates a premature stop codon?", "Mutant 2", ["Mutant 1", "Mutant 3", "Mutant 4"],
  "In Mutant 2, GGA (Gly) became UGA, a stop codon, so translation ends early. Mutant 1 is silent (UUU and UUC both code for Phe), Mutant 4 is missense (Gly → Arg), and Mutant 3 is a frameshift from a deleted base, which changes every codon after it.",
  { t: "table", title: "The start of an mRNA and four mutants", head: ["Version", "Codons (5′ → 3′)"], rows: [["Original", "AUG · UUC · GGA · UAC · …"], ["Mutant 1", "AUG · UUU · GGA · UAC · …"], ["Mutant 2", "AUG · UUC · UGA · UAC · …"], ["Mutant 3", "AUG · UCG · GAU · AC…"], ["Mutant 4", "AUG · UUC · AGA · UAC · …"]] }]);

V("bio", "7.1", ["The graph compares offspring produced by a population of frogs with the number that survive to adulthood. Which of Darwin's observations does it illustrate?", "Organisms produce more offspring than the environment can support, which leads to competition",
  ["All offspring survive to reproduce", "Populations grow exponentially forever", "Traits acquired during life are passed on"],
  "Far more eggs hatch than can survive. Because resources are limited, individuals compete, and those with favorable heritable traits are more likely to survive and reproduce.",
  { t: "bar", title: "Offspring produced vs. surviving to adulthood (illustrative)", cats: ["Gen 1", "Gen 2", "Gen 3", "Gen 4"], y: { min: 0, max: 1000, ticks: range(0, 1000, 250), label: "Number of frogs" },
    series: [{ name: "Offspring produced", vals: [950, 1000, 980, 990] }, { name: "Survived to adulthood", vals: [48, 52, 50, 49], k: 2 }] }]);

V("bio", "7.3", ["The graph shows average oil content of corn kernels in two lines selectively bred for high or low oil over many generations. Which conclusion is best supported?", "Selection on heritable variation changed the trait far beyond its original range",
  ["Selection can only change a trait for a few generations", "The environment alone caused the change", "Both lines stayed near the starting value"],
  "This is based on a real long-term experiment in Illinois. Choosing parents with high or low oil each generation kept shifting the averages in opposite directions.",
  { t: "line", title: "Corn kernel oil content under artificial selection (approximate)", x: { min: 0, max: 100, ticks: range(0, 100, 20), label: "Generations of selection" }, y: { min: 0, max: 22, ticks: [0, 5, 10, 15, 20], label: "Oil content (%)" },
    series: [{ name: "Selected for high oil", pts: curve(x => 4.7 + 15.5 * (x / 100) ** 0.9, 0, 100) }, { name: "Selected for low oil", pts: curve(x => 1 + 3.7 * Math.exp(-x / 18), 0, 100), k: 2, dash: true }] }]);

const drift = (seed, n2) => { const r = seeded(seed); let p = 0.5; const pts = [[0, 0.5]]; for (let g = 1; g <= 40; g++) { if (p > 0 && p < 1) { let c = 0; for (let i = 0; i < n2; i++) if (r() < p) c++; p = c / n2; } pts.push([g, R(p)]); } return pts; };
V("bio", "7.4", ["Each line shows the frequency of one allele over 40 generations in a different small population (20 individuals) with no selection. What best explains the pattern?", "Genetic drift: random chance changes allele frequencies, and in small populations alleles can be lost or become fixed",
  ["Natural selection favoring the allele in every population", "Gene flow making all populations identical", "Hardy-Weinberg equilibrium keeping frequencies constant"],
  "All populations started at 0.5, then wandered randomly in different directions. Some reached 0 (lost) or 1 (fixed). That's the signature of drift, which is strongest in small populations.",
  { t: "line", title: "Allele frequency in four small populations (simulated)", x: { min: 0, max: 40, ticks: range(0, 40, 10), label: "Generation" }, y: { min: 0, max: 1, ticks: [0, 0.25, 0.5, 0.75, 1], label: "Allele frequency" },
    series: [{ name: "Population 1", pts: drift(11, 40) }, { name: "Population 2", pts: drift(29, 40), k: 2 }, { name: "Population 3", pts: drift(53, 40), k: 3 }, { name: "Population 4", pts: drift(97, 40), k: 4, dash: true }] }]);

V("bio", "7.7", ["Which feature in the table best supports the idea that all living organisms share a common ancestor?", "Ribosomes that translate a nearly universal genetic code",
  ["A nucleus", "Mitochondria", "Membrane-bound organelles"],
  "Only ribosomes and the genetic code appear in every group, including bacteria and archaea. The nucleus and organelles are shared only by eukaryotes.",
  { t: "table", title: "Features of four organisms (✓ = present)", head: ["Feature", "Bacterium", "Archaeon", "Yeast", "Human"], rows: [["Ribosomes + near-universal genetic code", "✓", "✓", "✓", "✓"], ["DNA as genetic material", "✓", "✓", "✓", "✓"], ["Nucleus", "", "", "✓", "✓"], ["Mitochondria", "", "", "✓", "✓"]] }]);

V("bio", "7.10", ["The diagram shows how one population became two species. This process is", "allopatric speciation", ["sympatric speciation", "artificial selection", "gene flow"],
  "A geographic barrier split the population and stopped gene flow. Drift and different selection pressures then built up reproductive isolation.",
  { t: "flow", title: "From one population to two species", steps: ["One squirrel population", "A canyon forms and splits it", "No gene flow for many generations", "Different mutations, drift, and selection", "Can no longer interbreed"] }]);

V("bio", "7.11", ["A new disease reached two populations of the same plant. Which best explains the difference in outcomes?", "The genetically diverse population included some resistant individuals that survived and reproduced",
  ["The clonal population reproduced faster", "The disease can only infect clones", "Genetic diversity has no effect on survival"],
  "In a clonal population, every individual shares the same susceptibility. Variation gives natural selection something to act on, which is why the Irish potato famine was so severe.",
  { t: "line", title: "Surviving plants after a disease arrives", x: { min: 0, max: 10, ticks: range(0, 10, 2), label: "Years after disease arrived" }, y: { min: 0, max: 100, ticks: range(0, 100, 25), label: "Plants surviving (% of original)" },
    vlines: [{ x: 1, l: "Disease arrives" }],
    series: [{ name: "Genetically diverse population", pts: curve(x => x < 1 ? 100 : 55 + 45 * Math.exp(-(x - 1) * 1.4) + (x > 3 ? (x - 3) * 3.5 : 0), 0, 10) }, { name: "Clonal population", pts: curve(x => x < 1 ? 100 : 2 + 98 * Math.exp(-(x - 1) * 1.6), 0, 10), k: 2, dash: true }] }]);

V("bio", "7.12", ["The table summarizes the Miller–Urey experiment. What did it demonstrate?", "Organic molecules such as amino acids can form from inorganic molecules under conditions thought to resemble early Earth",
  ["Living cells can form in a few days", "Early Earth's atmosphere was rich in oxygen", "DNA was the first genetic material"],
  "Energy from sparks acting on simple gases produced amino acids. It supported the idea that life's building blocks could form without living things.",
  { t: "table", title: "The Miller–Urey experiment (1953)", head: ["Part", "Details"], rows: [["Starting gases", "CH₄, NH₃, H₂, H₂O"], ["Energy source", "Electric sparks (simulated lightning)"], ["After about 1 week", "Amino acids detected, including glycine and alanine"]] }]);

V("bio", "8.1", ["Oat seedlings were lit from one side after the treatments shown. What conclusion do the results support?", "The tip of the shoot detects light and controls bending",
  ["The base of the shoot detects light", "Seedlings bend away from light", "Covering any part of the shoot stops bending"],
  "Bending stopped only when the tip was covered or removed. Covering the base had no effect. This matches Darwin's experiments, and we now know the tip sends auxin down the shaded side.",
  { t: "bar", title: "Bending toward light after each treatment", cats: ["Untreated", "Tip covered", "Tip removed", "Base covered"], y: { min: 0, max: 40, ticks: [0, 10, 20, 30, 40], label: "Bending toward light (degrees)" }, values: true,
    series: [{ name: "Bending", vals: [30, 0, 0, 30] }] }]);

/* ======================= AP HUMAN GEOGRAPHY ======================= */

V("hug", "1.2", ["A geographer is studying a city. Which data source in the table is qualitative?", "Source B", ["Source A", "Source C", "Source D"],
  "Qualitative data describes perceptions, meanings, and experiences, as in interviews. Satellite measurements, census counts, and GPS tracks are quantitative.",
  { t: "table", title: "Four data sources for a city study", head: ["Source", "What it collects"], rows: [["A", "Satellite images measuring tree cover in each neighborhood"], ["B", "Interviews about how safe residents feel walking at night"], ["C", "Census counts of households and median income"], ["D", "GPS tracks of commuters' routes"]] }]);

const snowMap = (() => {
  const r = seeded(42); let s = "";
  for (let x = 30; x <= 490; x += 92) s += `<line x1="${x}" x2="${x}" y1="12" y2="248" class="d-thin"/>`;
  for (let y = 12; y <= 248; y += 59) s += `<line x1="30" x2="490" y1="${y}" y2="${y}" class="d-thin"/>`;
  const pumps = { A: [85, 60], B: [262, 140], C: [430, 210] };
  for (let i = 0; i < 70; i++) { const a = r() * Math.PI * 2, d = Math.pow(r(), 0.8) * 95; s += `<rect x="${R(262 + Math.cos(a) * d * 1.3 - 2.5)}" y="${R(140 + Math.sin(a) * d * 0.8 - 2.5)}" width="5" height="5" class="mark"/>`; }
  for (let i = 0; i < 6; i++) s += `<rect x="${R(40 + r() * 440)}" y="${R(20 + r() * 220)}" width="5" height="5" class="mark"/>`;
  Object.entries(pumps).forEach(([k, [x, y]]) => { s += `<circle cx="${x}" cy="${y}" r="9" fill="${"var(--s2)"}"/><text x="${x}" y="${y}" dy="0.35em" text-anchor="middle" style="fill:#fff;font:700 11px var(--sans)">${k}</text>`; });
  return s;
})();
V("hug", "1.3", ["The map shows deaths during a cholera outbreak (squares) and three water pumps (A, B, C). Which conclusion is best supported?", "Pump B is the most likely source, because deaths cluster around it",
  ["Pump A is the most likely source", "Deaths are spread evenly, so water isn't involved", "Pump C is the most likely source"],
  "This mirrors John Snow's 1854 map of London. Mapping cases revealed a cluster around one pump, and removing its handle helped end the outbreak. It's a classic example of geographic data informing a decision.",
  { t: "svg", title: "Cholera deaths and water pumps (based on Snow's 1854 map)", w: 520, h: 260, svg: snowMap }]);

V("hug", "1.5", ["The graph shows the surface area of the Aral Sea after rivers feeding it were diverted to irrigate cotton. It is an example of", "human modification of the environment with major unintended consequences",
  ["environmental determinism", "a natural climate cycle unrelated to human activity", "sustainable water management"],
  "Soviet irrigation projects diverted the Amu Darya and Syr Darya rivers. The sea shrank drastically, which hurt fishing, raised salinity, and caused dust storms.",
  { t: "line", title: "Surface area of the Aral Sea (approximate)", x: { min: 1960, max: 2015, ticks: range(1960, 2010, 10), label: "Year" }, y: { min: 0, max: 70, ticks: range(0, 70, 10), label: "Area (thousand km²)" },
    series: [{ name: "Area", pts: [[1960, 68], [1970, 60], [1980, 51], [1987, 41], [1995, 30], [2000, 24], [2005, 17], [2010, 14], [2014, 8]], dots: true }] }]);

V("hug", "1.7", ["The diagram shows where a regional newspaper is delivered. What kind of region does it show?", "A functional (nodal) region organized around a central city",
  ["A formal region defined by one shared characteristic", "A perceptual region based on people's feelings", "A physical region defined by landforms"],
  "Functional regions are defined by connections to a node, here the newspaper's home city. Ties weaken with distance.",
  { t: "web", title: "Newspaper delivery routes from Riverton", h: 280, nodes: [{ id: "c", l: "Riverton (newspaper HQ)", x: 50, y: 50 }, { id: "a", l: "Oak Hill", x: 16, y: 16 }, { id: "b", l: "Millbrook", x: 84, y: 16 }, { id: "d", l: "Cedar Falls", x: 14, y: 84 }, { id: "e", l: "Pine Grove", x: 86, y: 84 }, { id: "f", l: "Lakeview", x: 50, y: 92 }],
    edges: [["c", "a"], ["c", "b"], ["c", "d"], ["c", "e"], ["c", "f"]] }]);

V("hug", "2.1", ["Based on the table, which country has the highest physiological density?", "Egypt", ["Netherlands", "Canada", "They are all about equal"],
  "Physiological density is people per unit of arable land. Egypt's roughly 110 million people depend on about 3% of its land along the Nile, which gives about 3,700 people per km² of farmland.",
  { t: "table", title: "Population and land (approximate)", head: ["Country", "Population", "Land area (km²)", "Arable land"], rows: [["Egypt", "110 million", "1,000,000", "3%"], ["Netherlands", "18 million", "41,500", "25%"], ["Canada", "40 million", "9,000,000", "4%"]] }]);

V("hug", "2.2", ["The graph shows arable land per person worldwide. What is a likely consequence of this trend?", "More pressure to raise yields on existing farmland through intensive agriculture",
  ["Food production must be falling everywhere", "Farmland per person is rising", "Population is shrinking"],
  "As population grows faster than farmland expands, each hectare must feed more people. That encourages intensification (fertilizer, irrigation, high-yield seeds) or expansion into forests.",
  { t: "line", title: "Arable land per person, world (approximate)", x: { min: 1960, max: 2020, ticks: range(1960, 2020, 10), label: "Year" }, y: { min: 0, max: 0.4, ticks: [0, 0.1, 0.2, 0.3, 0.4], label: "Hectares per person" },
    series: [{ name: "Arable land per person", pts: [[1961, 0.37], [1970, 0.33], [1980, 0.28], [1990, 0.24], [2000, 0.22], [2010, 0.2], [2020, 0.18]], dots: true }] }]);

V("hug", "2.7", ["The graph shows China's total fertility rate (TFR). Which statement is best supported?", "Fertility had already fallen sharply before the one-child policy began in 1979, and relaxing the policy did not bring it back up",
  ["The one-child policy caused TFR to rise", "TFR increased sharply after the two-child policy in 2016", "China's TFR has stayed constant since 1950"],
  "TFR fell from about 6 to under 3 in the 1970s under earlier campaigns. After 2016, it kept falling as urbanization, costs, and changing norms mattered more than the rules.",
  { t: "line", title: "Total fertility rate in China (approximate)", x: { min: 1950, max: 2022, ticks: range(1950, 2020, 10), label: "Year" }, y: { min: 0, max: 7, ticks: range(0, 7, 1), label: "Children per woman" },
    vlines: [{ x: 1979, l: "One-child policy" }, { x: 2016, l: "Two-child" }],
    series: [{ name: "TFR", pts: [[1950, 5.8], [1960, 5.7], [1965, 6.3], [1970, 5.8], [1975, 3.6], [1980, 2.7], [1990, 2.4], [2000, 1.6], [2010, 1.6], [2016, 1.8], [2020, 1.3], [2022, 1.1]], dots: true }] }]);

V("hug", "2.8", ["The scatterplot compares women's secondary school completion with total fertility rate in a sample of countries. Which relationship does it show?", "Countries where more women complete secondary school tend to have lower fertility",
  ["More education for women is linked to higher fertility", "There is no relationship", "Fertility only changes when men's education changes"],
  "Education delays marriage and childbearing, expands job opportunities, and improves knowledge of family planning and child health, all of which lower fertility.",
  { t: "scatter", title: "Women's education vs. fertility (illustrative sample)", x: { min: 0, max: 100, ticks: range(0, 100, 20), label: "Women completing secondary school (%)" }, y: { min: 0, max: 7, ticks: range(0, 7, 1), label: "Total fertility rate" },
    pts: [[5, 6.6], [10, 6.0], [18, 5.2], [25, 4.6], [35, 3.8], [45, 3.0], [55, 2.6], [65, 2.2], [75, 1.9], [85, 1.7], [92, 1.6], [96, 1.5]] }]);

V("hug", "2.11", ["Which person in the table is an internally displaced person (IDP)?", "Person C", ["Person A", "Person B", "Person D"],
  "IDPs are forced from their homes but stay inside their own country. Person A crossed a border fleeing war (a refugee), B moved voluntarily for work, and D practices transhumance.",
  { t: "table", title: "Four people who moved", head: ["Person", "Situation"], rows: [["A", "Fled civil war and crossed into a neighboring country"], ["B", "Moved to another country for a better-paying job"], ["C", "Forced from home by a flood; now lives in a camp in another region of the same country"], ["D", "Moves livestock between mountain and valley pastures each season"]] }]);

V("hug", "3.1", ["Which item in the table is a nonmaterial culture trait?", "A belief that elders should make family decisions", ["Adobe houses", "Rice-based dishes", "Traditional wool clothing"],
  "Material culture is the physical things a group makes and uses. Nonmaterial culture is beliefs, values, language, and customs.",
  { t: "table", title: "Culture traits observed in one community", head: ["Trait", "Description"], rows: [["Housing", "Adobe houses with flat roofs"], ["Food", "Rice-based dishes"], ["Clothing", "Traditional wool clothing"], ["Values", "A belief that elders should make family decisions"]] }]);

V("hug", "3.2", ["The timeline shows the groups that shaped one place's landscape. Which concept does it illustrate?", "Sequent occupance", ["Environmental determinism", "Distance decay", "Time-space compression"],
  "Each group left marks on the cultural landscape (mission buildings, ranch boundaries, street grids) that build up in layers over time.",
  { t: "flow", title: "Groups that shaped San Antonio, Texas", steps: ["Coahuiltecan settlements", "Spanish missions (1700s)", "Mexican ranches (1820s)", "American railroad city (1880s)", "Modern metro area"] }]);

V("hug", "3.3", ["The map shows the percentage of residents who speak Spanish at home in counties of a U.S. state that borders Mexico (the southern border is at the bottom). Which explanation best fits the pattern?", "Proximity to Mexico and a long history of Spanish-speaking settlement and migration",
  ["Environmental determinism causes Spanish to be spoken in hot places", "Random distribution with no spatial pattern", "Recent migration only from Europe"],
  "Spanish speakers are concentrated near the border, which reflects Spanish and Mexican settlement history, continued migration, and chain migration into established communities.",
  { t: "choro", title: "Residents speaking Spanish at home, by county (illustrative)", legend: ["Under 10%", "10–25%", "25–45%", "45–70%", "Over 70%"],
    panels: [{ grid: [[0, 0, 0, 1, 0, 0, 0], [0, 1, 1, 1, 1, 0, 0], [1, 1, 2, 2, 1, 1, 1], [2, 2, 3, 2, 2, 2, 1], [3, 3, 4, 3, 3, 2, 2], [4, 4, 4, 4, 3, 3, null]] }] }]);

V("hug", "3.5", ["The graph shows how many African countries have each European language as an official language. What best explains the pattern?", "The legacy of European colonialism, which brought colonizers' languages into government and schools",
  ["Recent migration from Europe to Africa", "Contagious diffusion through social media", "The spread of Islam across North Africa"],
  "Colonial powers imposed their languages for administration and education. After independence, many states kept them as official languages that cut across local language groups.",
  { t: "bar", title: "African countries with each language as an official language (approximate)", cats: ["English", "French", "Portuguese", "Spanish"], y: { min: 0, max: 30, ticks: [0, 10, 20, 30], label: "Number of countries" }, values: true,
    series: [{ name: "Countries", vals: [24, 21, 6, 1] }] }]);

V("hug", "3.6", ["The graph shows the share of the world's population using the internet. How has this trend most affected cultural diffusion?", "It has sped up the diffusion of popular culture through time-space compression",
  ["It has stopped cultural diffusion", "It has made relocation diffusion the only type", "It has increased distance decay"],
  "The internet lets music, memes, and trends spread across the globe in days. Reduced friction of distance speeds contagious and hierarchical diffusion.",
  { t: "line", title: "Internet users as a share of world population (approximate)", x: { min: 2000, max: 2024, ticks: range(2000, 2020, 5), label: "Year" }, y: { min: 0, max: 80, ticks: range(0, 80, 20), label: "Share of people (%)" },
    series: [{ name: "Internet users", pts: [[2000, 7], [2005, 16], [2010, 29], [2015, 40], [2020, 60], [2023, 67]], dots: true }] }]);

V("hug", "3.8", ["About 40% of the world's roughly 7,000 languages are endangered. Which process most contributes to this?", "Cultural convergence, as younger generations adopt dominant languages for school, work, and media",
  ["Cultural divergence strengthening minority languages", "Environmental determinism", "Increasing isolation of rural communities"],
  "Globalization and assimilation pressure speakers to shift to national and global languages. When children stop learning a language, it becomes endangered.",
  { t: "sectors", title: "Status of the world's ~7,000 languages (approximate)", center: "~7,000", wedges: [{ l: "Endangered|about 40%", a: 144, k: 2 }, { l: "Not endangered|about 60%", a: 216, k: 1 }] }]);

V("hug", "4.1", ["Which description in the table is a multistate nation?", "Description D", ["Description A", "Description B", "Description C"],
  "A multistate nation is one nation spread across two or more states, as with Koreans. A is a nation-state, B is a stateless nation (like the Kurds), and C is a multinational state.",
  { t: "table", title: "Four political-geography situations", head: ["", "Description"], rows: [["A", "One state; nearly all residents share one ethnicity and language"], ["B", "About 30 million people sharing a culture, spread across four states, with no state of their own"], ["C", "One state containing more than 100 ethnic groups, several with their own republics"], ["D", "One ethnic group whose homeland is divided between two neighboring states"]] }]);

V("hug", "4.2", ["The graph shows the number of UN member states. What best explains the sharp increase between about 1955 and 1970?", "Decolonization in Africa and Asia created many new independent states",
  ["The breakup of the Soviet Union", "The formation of the European Union", "World War I peace treaties"],
  "Dozens of former colonies became independent, including 17 African states in 1960 alone. The later jump around 1991 came from the breakup of the USSR and Yugoslavia.",
  { t: "line", title: "Number of UN member states", x: { min: 1945, max: 2020, ticks: range(1945, 2015, 10), label: "Year" }, y: { min: 0, max: 200, ticks: range(0, 200, 50), label: "Member states" },
    series: [{ name: "Members", pts: [[1945, 51], [1955, 76], [1960, 99], [1965, 117], [1970, 127], [1980, 154], [1990, 159], [1993, 184], [2000, 189], [2011, 193], [2020, 193]], dots: true }] }]);

V("hug", "4.3", ["Country A claims Region X, which lies inside Country B, because most of its residents are ethnically A. This is an example of", "irredentism", ["devolution", "supranationalism", "balkanization of Country A"],
  "Irredentism is a state trying to take territory in another state where people of its own ethnicity live. It is a common source of territorial conflict.",
  { t: "svg", title: "Region X and its population", w: 520, h: 230,
    svg: `<rect x="20" y="20" width="230" height="190" class="d-fill"/><rect x="250" y="20" width="250" height="190" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.25"/><path d="M250 60 L360 50 L380 130 L330 180 L250 170 Z" class="d-water"/><text x="135" y="118" text-anchor="middle" class="lbl">Country A</text><text x="440" y="118" text-anchor="middle" class="lbl">Country B</text><text x="312" y="105" text-anchor="middle" class="lbl" font-weight="600">Region X</text><text x="312" y="125" text-anchor="middle" class="lbl-muted">70% ethnic A</text>` }]);

const bSvg = {
  a: `<rect x="8" y="8" width="204" height="144" class="d-fill"/><line x1="8" y1="70" x2="212" y2="70" class="d-ln" stroke-dasharray="6 4" stroke-width="2.5"/><text x="110" y="45" text-anchor="middle" class="lbl-muted">State 1</text><text x="110" y="110" text-anchor="middle" class="lbl-muted">State 2</text>`,
  b: `<rect x="8" y="8" width="204" height="144" class="d-fill"/><path d="M110 8 C 80 45, 140 80, 100 115 S 120 145, 110 152" style="fill:none;stroke:var(--s1);stroke-opacity:.75;stroke-width:7"/><text x="50" y="80" text-anchor="middle" class="lbl-muted">State 1</text><text x="170" y="80" text-anchor="middle" class="lbl-muted">State 2</text>`,
  c: `<rect x="8" y="8" width="204" height="144" class="d-fill"/><path d="M8 60 L60 50 L85 85 L130 70 L150 110 L212 100" class="d-ln" stroke-dasharray="6 4" stroke-width="2.5"/><text x="90" y="35" text-anchor="middle" class="lbl-muted">Group 1 (State 1)</text><text x="120" y="135" text-anchor="middle" class="lbl-muted">Group 2 (State 2)</text>`
};
V("hug", "4.4", ["Which boundary in the figure is a geometric boundary?", "Boundary 1", ["Boundary 2", "Boundary 3", "None of them"],
  "Geometric boundaries follow straight lines, often latitude or longitude, like the 49th parallel between the U.S. and Canada. Boundary 2 follows a river (a physical boundary), and Boundary 3 follows the line between two ethnic groups.",
  { t: "panels", title: "Three international boundaries (dashed lines and river)", items: [{ t: "svg", title: "Boundary 1", w: 220, h: 160, svg: bSvg.a }, { t: "svg", title: "Boundary 2", w: 220, h: 160, svg: bSvg.b }, { t: "svg", title: "Boundary 3", w: 220, h: 160, svg: bSvg.c }] }]);

V("hug", "4.7", ["Based on the table, which country has a federal system of government?", "Country A", ["Country B", "Both", "Neither"],
  "In a federal state, power is constitutionally shared between national and regional governments, and regions have their own legislatures. In a unitary state (B), the central government holds most power.",
  { t: "table", title: "How two countries divide power", head: ["", "Country A", "Country B"], rows: [["Regions have their own elected legislatures", "Yes", "No"], ["Constitution guarantees regional powers", "Yes", "No"], ["Central government can abolish regions", "No", "Yes"]] }]);

V("hug", "4.8", ["The graph shows GDP per person in three regions of one country, as a percentage of the national average. Which devolutionary pressure does it suggest?", "Resentment in the wealthy North over tax money transferred to poorer regions",
  ["A shared language that unifies all regions", "Physical isolation of the North", "A strong national sports team"],
  "Economic differences can drive devolution. Richer regions may push for autonomy to keep more of their tax revenue, as seen in Catalonia and northern Italy.",
  { t: "bar", title: "GDP per person by region (% of national average, illustrative)", cats: ["North", "Center", "South"], y: { min: 0, max: 150, ticks: [0, 50, 100, 150], label: "% of national average" }, values: true, hlines: [{ y: 100 }],
    series: [{ name: "GDP per person", vals: [135, 100, 65] }] }]);

V("hug", "4.9", ["The graph shows the number of European Union member states. What does the drop after 2019 represent?", "The United Kingdom leaving the EU (Brexit) to regain national sovereignty",
  ["Decolonization of European colonies", "The founding of NATO", "The breakup of the Soviet Union"],
  "The EU grew from 6 founding members to 28 as states gave up some sovereignty for economic and political integration (supranationalism). Brexit in 2020 was the first departure.",
  { t: "line", title: "Number of EU (and predecessor) member states", x: { min: 1955, max: 2025, ticks: range(1955, 2025, 10), label: "Year" }, y: { min: 0, max: 30, ticks: [0, 10, 20, 30], label: "Member states" },
    series: [{ name: "Members", pts: [[1958, 6], [1972, 6], [1973, 9], [1980, 9], [1981, 10], [1985, 10], [1986, 12], [1994, 12], [1995, 15], [2003, 15], [2004, 25], [2006, 25], [2007, 27], [2012, 27], [2013, 28], [2019, 28], [2020, 27], [2024, 27]] }] }]);

V("hug", "4.10", ["The graph shows the main languages spoken in Belgium. How has this pattern affected the Belgian state?", "The language divide is a centrifugal force that led Belgium to shift power to its regions (federalism)",
  ["It is a centripetal force that unified Belgium under one language", "It caused Belgium to join a larger state", "It had no political effect"],
  "Dutch-speaking Flanders and French-speaking Wallonia have different identities and economies. Tensions pushed Belgium from a unitary state to a federal one with strong regional governments.",
  { t: "bar", title: "Main languages in Belgium (approximate share of population)", cats: ["Dutch (Flemish)", "French", "German"], y: { min: 0, max: 70, ticks: [0, 20, 40, 60], label: "Share of population (%)" }, values: true,
    series: [{ name: "Speakers", vals: [59, 40, 1] }] }]);

V("hug", "5.1", ["Which farm in the table is practicing intensive agriculture?", "Farm A", ["Farm B", "Farm C", "Farms B and C"],
  "Intensive agriculture puts large amounts of labor or capital into small areas to get high output per hectare, like wet rice farming. Farms B and C use huge areas with few inputs per hectare.",
  { t: "table", title: "Three farms (illustrative)", head: ["Farm", "Area", "Labor per hectare", "Output per hectare"], rows: [["A: wet rice paddy", "1 hectare", "Very high", "Very high"], ["B: cattle ranch", "5,000 hectares", "Very low", "Low"], ["C: grain farm", "2,000 hectares", "Low (machines)", "Moderate"]] }]);

V("hug", "5.3", ["Using the table, which pair of crops was domesticated in the Americas and later spread to Afro-Eurasia through the Columbian Exchange?", "Maize and potatoes", ["Wheat and barley", "Rice and millet", "Wheat and rice"],
  "Maize comes from Mesoamerica and potatoes from the Andes. After 1492, both became staple crops across Europe, Africa, and Asia.",
  { t: "table", title: "Agricultural hearths and early crops", head: ["Hearth", "Crops domesticated"], rows: [["Fertile Crescent (Southwest Asia)", "Wheat, barley, lentils"], ["East Asia", "Rice, millet, soybeans"], ["Mesoamerica", "Maize, beans, squash"], ["Andes", "Potatoes, quinoa"]] }]);

V("hug", "5.4", ["The graph shows the share of U.S. workers employed in farming. What best explains the change?", "Mechanization and other advances from the Second Agricultural Revolution let fewer farmers produce more food, freeing workers for factories and cities",
  ["A decline in food production", "The Green Revolution in the 1990s", "Environmental determinism"],
  "Seed drills, mechanical reapers, tractors, and better breeding raised output per worker. Surplus labor moved to industrial jobs, which fueled urbanization.",
  { t: "line", title: "Share of U.S. workers in agriculture (approximate)", x: { min: 1840, max: 2000, ticks: range(1840, 2000, 20), label: "Year" }, y: { min: 0, max: 80, ticks: range(0, 80, 20), label: "Share of workforce (%)" },
    series: [{ name: "Farm workers", pts: [[1840, 69], [1870, 53], [1900, 38], [1930, 21], [1950, 12], [1970, 4], [2000, 2]], dots: true }] }]);

V("hug", "5.6", ["Which region in the table is best suited to Mediterranean agriculture (olives, grapes, citrus)?", "Region A", ["Region B", "Region C", "Region D"],
  "Mediterranean agriculture fits hot, dry summers and mild, wet winters, as in California, Chile, and southern Europe. B fits nomadic herding, C fits plantations or shifting cultivation, and D fits commercial grain.",
  { t: "table", title: "Four climate regions", head: ["Region", "Climate"], rows: [["A", "Hot, dry summers; mild, rainy winters"], ["B", "Very dry year-round with sparse grass"], ["C", "Hot and humid all year with heavy rain"], ["D", "Flat interior with cold winters and warm, moderately rainy summers"]] }]);

V("hug", "5.7", ["The diagram shows how chocolate reaches a consumer. What concept does it illustrate?", "A global commodity chain in which most of the value is added after the raw crop leaves the farm",
  ["Subsistence agriculture", "Von Thünen's model", "Relocation diffusion"],
  "Cacao is grown mostly in West Africa, but processing, branding, and retail, where most of the price is captured, happen largely in wealthier countries.",
  { t: "flow", title: "From cacao farm to chocolate bar", steps: ["Cacao farmer (Côte d'Ivoire)", "Exporter", "Processor (Netherlands)", "Chocolate manufacturer", "Retailer", "Consumer"] }]);

V("hug", "5.9", ["Country Z earns most of its export income from coffee. Based on the graph, what risk does Country Z face?", "Its economy is vulnerable because coffee prices swing widely on the world market",
  ["Coffee prices only rise over time", "It controls the world price of coffee", "It has a diversified economy"],
  "Depending on one or a few commodity exports ties a country's income to volatile global prices. A price crash can cut earnings, jobs, and government revenue at once.",
  { t: "line", title: "World coffee price (illustrative index)", x: { min: 2000, max: 2024, ticks: range(2000, 2020, 5), label: "Year" }, y: { min: 0, max: 200, ticks: range(0, 200, 50), label: "Price index" },
    series: [{ name: "Coffee price", pts: [[2000, 90], [2002, 45], [2005, 80], [2008, 110], [2011, 190], [2013, 95], [2014, 130], [2016, 105], [2019, 80], [2021, 130], [2022, 170], [2023, 120], [2024, 180]], dots: true }] }]);

V("hug", "5.10", ["The graph shows yearly deforestation in the Brazilian Amazon. What has been the leading direct cause of this forest loss?", "Clearing land for cattle pasture and commercial crops such as soy",
  ["Urban sprawl from Rio de Janeiro", "Natural wildfires unrelated to people", "Terracing for rice farming"],
  "Cattle ranching accounts for most cleared land, with soy and logging also important. Loss rose again after 2012 as enforcement weakened, then fell in 2023.",
  { t: "line", title: "Yearly forest loss in the Brazilian Amazon (approximate)", x: { min: 2004, max: 2023, ticks: range(2004, 2022, 3), label: "Year" }, y: { min: 0, max: 30000, ticks: range(0, 30000, 10000), label: "Area cleared (km²)" },
    series: [{ name: "Deforestation", pts: [[2004, 27772], [2006, 14286], [2008, 12911], [2010, 7000], [2012, 4571], [2014, 5012], [2016, 7893], [2019, 10129], [2021, 13038], [2022, 11594], [2023, 9001]], dots: true }] }]);

V("hug", "5.11", ["The graph shows the water needed to produce 1 kg of different foods. What challenge does rising global meat consumption create?", "Greater pressure on water and land resources, because meat takes far more water per kilogram",
  ["Less water use, because meat needs little irrigation", "No change in resource use", "A decline in feed-grain demand"],
  "Beef needs roughly 15,000 liters per kilogram, mostly to grow feed, versus a few hundred for vegetables. Growing meat demand strains water and farmland.",
  { t: "bar", title: "Water needed per kilogram of food (approximate)", cats: ["Beef", "Chicken", "Wheat", "Vegetables"], y: { min: 0, max: 16000, ticks: [0, 4000, 8000, 12000, 16000], label: "Liters of water" }, values: true,
    series: [{ name: "Water", vals: [15400, 4300, 1800, 300] }] }]);

V("hug", "5.12", ["The graph compares women's share of the agricultural workforce with their share of agricultural landholders. What does it suggest?", "Women do a large share of farm work but control far less farmland, which limits their access to credit and decisions",
  ["Women own most farmland worldwide", "Women do little agricultural work", "Land ownership is equal between men and women"],
  "Legal and customary barriers often keep land titles with men, even where women grow much of the food. Secure land rights help women farmers invest and borrow.",
  { t: "bar", title: "Women in agriculture, low- and middle-income countries (approximate)", cats: ["Share of farm workforce", "Share of landholders"], y: { min: 0, max: 50, ticks: [0, 10, 20, 30, 40, 50], label: "Women (%)" }, values: true,
    series: [{ name: "Women", vals: [43, 15] }] }]);

V("hug", "6.1", ["According to the graph, about when did more than half the world's people begin living in urban areas?", "Around 2007–2010", ["Around 1950", "Around 1980", "It hasn't happened yet"],
  "The world passed 50% urban around 2007, according to the UN. The share keeps rising and is projected to reach about 68% by 2050, mostly from growth in Africa and Asia.",
  { t: "line", title: "Share of world population living in cities (approximate; 2030–2050 projected)", x: { min: 1950, max: 2050, ticks: range(1950, 2050, 20), label: "Year" }, y: { min: 0, max: 80, ticks: range(0, 80, 20), label: "Urban share (%)" },
    hlines: [{ y: 50, l: "50%" }], series: [{ name: "Urban share", pts: [[1950, 30], [1970, 37], [1990, 43], [2007, 50], [2020, 56], [2030, 60], [2050, 68]], dots: true }] }]);

V("hug", "6.3", ["The diagram shows major financial and airline connections among six cities. Which city is highest in the world city hierarchy?", "London", ["Lagos", "Mumbai", "São Paulo"],
  "World cities are ranked by how connected they are in global networks, not by population. London connects directly to every other city shown.",
  { t: "web", title: "Major financial and air links among six cities (illustrative)", h: 290, nodes: [{ id: "l", l: "London", x: 45, y: 40 }, { id: "n", l: "New York", x: 14, y: 22 }, { id: "t", l: "Tokyo", x: 86, y: 22 }, { id: "s", l: "São Paulo", x: 16, y: 82 }, { id: "g", l: "Lagos", x: 50, y: 88 }, { id: "m", l: "Mumbai", x: 84, y: 76 }],
    edges: [["l", "n"], ["l", "t"], ["l", "s"], ["l", "g"], ["l", "m"], ["n", "t"], ["n", "s"], ["t", "m"]] }]);

V("hug", "6.7", ["Based on the table, Neighborhood B is most likely", "an informal (squatter) settlement that grew faster than the city could build infrastructure",
  ["a wealthy gated suburb", "the central business district", "a planned new town"],
  "Informal settlements often lack piped water, sanitation, and legal electricity, because they're built on land without official plans or services.",
  { t: "table", title: "Households with basic services (%)", head: ["Service", "Neighborhood A", "Neighborhood B"], rows: [["Piped water", "99", "40"], ["Sewer or toilet facilities", "98", "25"], ["Electricity", "100", "60"]] }]);

V("hug", "6.8", ["The graph compares transportation fuel use per person in five cities. Which conclusion best supports smart-growth planning?", "Denser cities with good transit use far less transportation fuel per person",
  ["Low-density cities use less fuel", "Density has no relationship to fuel use", "Hong Kong uses the most fuel because it is the densest"],
  "Compact, transit-rich cities shorten trips and make walking and transit practical. This classic comparison supports smart growth and New Urbanism.",
  { t: "bar", title: "Transportation fuel use per person (approximate, 1990s data)", cats: ["Houston", "Los Angeles", "Toronto", "London", "Hong Kong"], y: { min: 0, max: 80, ticks: [0, 20, 40, 60, 80], label: "Gigajoules per person per year" }, values: true,
    series: [{ name: "Fuel use", vals: [74, 62, 34, 12, 3] }] }]);

V("hug", "6.9", ["The map shows median household income by census tract, with the CBD in the center. Which urban model does the pattern most resemble?", "The Burgess concentric zone model", ["The Hoyt sector model", "The multiple nuclei model", "The Latin American city model"],
  "Income rises in rings moving out from the center, the core idea of Burgess's concentric zones. A Hoyt pattern would show wedges instead.",
  { t: "choro", title: "Median household income by census tract (illustrative)", legend: ["Lowest", "Low", "Middle", "High", "Highest"],
    panels: [{ grid: [[4, 4, 4, 4, 4, 4, 4], [4, 3, 3, 3, 3, 3, 4], [4, 3, 1, 1, 1, 3, 4], [4, 3, 1, 0, 1, 3, 4], [4, 3, 1, 1, 1, 3, 4], [4, 3, 3, 3, 3, 3, 4], [4, 4, 4, 4, 4, 4, 4]], outline: [[3, 3, 1, 1]] }] }]);

V("hug", "6.10", ["The graph shows the population of Detroit, Michigan. Which processes best explain the trend?", "Deindustrialization of the auto industry and suburbanization, including white flight",
  ["Rapid industrial growth", "Gentrification of the whole city", "A rising birth rate"],
  "As auto jobs automated and moved away and highways and discrimination pushed white families to suburbs, Detroit lost nearly two-thirds of its population, leaving vacant housing and a smaller tax base.",
  { t: "line", title: "Population of Detroit (approximate)", x: { min: 1950, max: 2020, ticks: range(1950, 2020, 10), label: "Year" }, y: { min: 0, max: 2, ticks: [0, 0.5, 1, 1.5, 2], label: "Population (millions)" },
    series: [{ name: "Population", pts: [[1950, 1.85], [1960, 1.67], [1970, 1.51], [1980, 1.2], [1990, 1.03], [2000, 0.95], [2010, 0.71], [2020, 0.64]], dots: true }] }]);

V("hug", "6.11", ["The graph shows afternoon air temperature across a city on a summer day. What does it illustrate?", "An urban heat island, with pavement and buildings holding heat and green space cooling the area around it",
  ["Temperatures are highest in rural farmland", "Parks are the hottest part of the city", "Cities are cooler than their surroundings"],
  "Downtown is about 3 °C warmer than the countryside, and the park dips back down. Trees, green roofs, and reflective surfaces help cool cities.",
  { t: "line", title: "Afternoon temperature across a city (illustrative)", x: { min: 0, max: 10, label: "Rural → Suburbs → Downtown → Park → Suburbs → Rural" }, y: { min: 28, max: 35, ticks: [28, 30, 32, 34], label: "Air temperature (°C)" },
    series: [{ name: "Temperature", pts: [[0, 30], [1.5, 30.3], [3, 31.6], [4.2, 33.2], [5, 31.6], [5.8, 33], [7, 31.8], [8.5, 30.4], [10, 30]] }],
    marks: [{ x: 5, y: 31.6, l: "Park", dx: 8, dy: 18 }] }]);

V("hug", "7.1", ["The graph shows coal production in Great Britain. How is this connected to Britain being the first country to industrialize?", "Abundant coal powered steam engines, ironworks, and railways, fueling industrial growth",
  ["Britain had no coal and relied on imported oil", "Coal production fell during the Industrial Revolution", "Coal was used only for home heating"],
  "Britain's coal and iron deposits, plus capital from trade and colonies, let factories and steam power expand rapidly after 1750.",
  { t: "line", title: "Coal production in Great Britain (approximate)", x: { min: 1700, max: 1913, ticks: range(1700, 1900, 50), label: "Year" }, y: { min: 0, max: 300, ticks: range(0, 300, 100), label: "Million tonnes per year" },
    series: [{ name: "Coal output", pts: [[1700, 3], [1750, 5], [1800, 11], [1830, 30], [1850, 60], [1870, 110], [1900, 225], [1913, 287]], dots: true }] }]);

V("hug", "7.4", ["The scatterplot compares the Human Development Index (HDI) with the Gender Inequality Index (GII). Which statement is best supported?", "Countries with higher human development generally have less gender inequality",
  ["Higher HDI is linked to more gender inequality", "There is no relationship", "Gender inequality only exists in high-HDI countries"],
  "A lower GII means more equality. As education, health, and income rise, women's political representation, education, and labor-force participation tend to improve.",
  { t: "scatter", title: "HDI vs. Gender Inequality Index (illustrative sample)", x: { min: 0.4, max: 1, ticks: [0.4, 0.6, 0.8, 1], label: "Human Development Index" }, y: { min: 0, max: 0.8, ticks: [0, 0.2, 0.4, 0.6, 0.8], label: "Gender Inequality Index (higher = less equal)" },
    pts: [[0.42, 0.64], [0.48, 0.6], [0.53, 0.55], [0.58, 0.52], [0.63, 0.47], [0.7, 0.42], [0.74, 0.35], [0.79, 0.28], [0.84, 0.2], [0.88, 0.12], [0.92, 0.07], [0.95, 0.04]] }]);

V("hug", "7.8", ["The graph shows global installed solar power capacity. How does this trend support sustainable development?", "It expands energy access while cutting greenhouse gas emissions from electricity",
  ["It increases dependence on fossil fuels", "Solar power is a nonrenewable resource", "It only benefits countries with no sunlight"],
  "Renewables let economies grow without the pollution of coal or oil, which supports UN Sustainable Development Goals on clean energy (SDG 7) and climate (SDG 13).",
  { t: "line", title: "Global solar power capacity (approximate)", x: { min: 2010, max: 2023, ticks: range(2010, 2022, 3), label: "Year" }, y: { min: 0, max: 1500, ticks: range(0, 1500, 500), label: "Capacity (gigawatts)" },
    series: [{ name: "Solar capacity", pts: [[2010, 40], [2012, 100], [2014, 180], [2016, 300], [2018, 490], [2020, 720], [2022, 1060], [2023, 1420]], dots: true }] }]);
})();
