// AP Biology — Units 1–4. Question format: [stem, correct, [distractors], explanation]. Options are shuffled at runtime.
window.AP_DATA = window.AP_DATA || {};
AP_DATA.bio = {
  id: "bio",
  name: "AP Biology",
  short: "Bio",
  blurb: "Molecules to ecosystems: the chemistry, cells, heredity, evolution, and ecology of living systems.",
  exam: "Exam: 60 MCQ (90 min) + 6 FRQ (90 min)",
  units: []
};
AP_DATA.bio.units.push(
{ n: 1, name: "Chemistry of Life", weight: "8–11%", topics: [
  ["1.1", "Structure of Water and Hydrogen Bonding", [
    ["Water moves up a narrow glass tube higher than it would in a wide tube. Which property best explains this?", "Adhesion to the glass plus cohesion", ["Water's high specific heat", "Water's low density as a solid", "Hydrophobic interactions with glass"], "Water adheres to polar glass and cohesion pulls more water up (capillary action)."],
    ["Coastal cities have milder temperatures than inland cities at the same latitude mainly because water", "has a high specific heat", ["is less dense as ice", "is a universal solvent", "has high surface tension"], "Oceans absorb and release large amounts of heat with small temperature changes."],
    ["Sweating cools the body because", "evaporation breaks hydrogen bonds, absorbing heat", ["sweat's low specific heat lets it absorb body heat quickly", "water is nonpolar, so sweat holds heat on the skin's surface", "cohesion traps heat in sweat"], "Evaporative cooling uses heat energy to break hydrogen bonds."],
    ["Which substance would dissolve best in water?", "NaCl", ["Vegetable oil", "Wax", "Cholesterol"], "Ionic compounds interact with polar water molecules; nonpolar lipids don't."],
    ["If water molecules were nonpolar, which would most likely happen?", "Ice would be denser than liquid water", ["Water would have a higher boiling point", "Salt would dissolve more easily", "Surface tension would increase"], "Without hydrogen bonds, ice wouldn't form an open lattice."],
    ["A water strider stays on the surface of a pond because of", "surface tension from cohesion", ["adhesion to the insect's legs", "the high specific heat of water", "water's low density at the surface"], "Hydrogen bonds among surface molecules resist breaking."]
  ]],
  ["1.2", "Elements of Life", [
    ["A plant is grown in soil lacking phosphorus. Which molecule would it have the most trouble making?", "DNA", ["Starch", "Cellulose", "Glucose"], "Nucleic acids contain phosphate groups; carbohydrates contain only C, H, O."],
    ["Radioactive sulfur (³⁵S) fed to cells would label", "proteins", ["DNA", "phospholipids", "carbohydrates"], "Sulfur is found in some amino acids (cysteine, methionine)."],
    ["Nitrogen from fertilizer is incorporated into which molecules in plants?", "Proteins and nucleic acids", ["Glucose and starch", "Fatty acids only", "Cellulose and lignin in walls"], "Amino acids and nitrogenous bases contain nitrogen."],
    ["Which element is found in both nucleic acids and phospholipids but not in carbohydrates?", "Phosphorus", ["Carbon", "Oxygen", "Hydrogen"], "Both contain phosphate groups."],
    ["Carbon is central to biological molecules mainly because it", "forms four covalent bonds", ["is the most abundant element on Earth", "forms ionic bonds easily", "has a full outer shell of electrons"], "Four bonds allow chains, rings, and branches."]
  ]],
  ["1.3", "Introduction to Biological Macromolecules", [
    ["When two amino acids join, which is also produced?", "Water", ["Carbon dioxide", "Oxygen", "ATP"], "Dehydration synthesis releases a water molecule."],
    ["Digestive enzymes break down starch by", "hydrolysis, adding water", ["dehydration synthesis reactions", "phosphorylation", "oxidation"], "Water is used to break glycosidic bonds."],
    ["A polymer of 50 glucose monomers is formed by dehydration synthesis. How many water molecules are released?", "49", ["50", "51", "25"], "Each bond between two monomers releases one water molecule."],
    ["Which reaction would a cell use to build a protein?", "Dehydration synthesis", ["Hydrolysis of the monomers", "Glycolysis", "Denaturation of monomers"], "Peptide bonds form by removing water."],
    ["Why do organisms need enzymes to digest polymers even though hydrolysis releases energy?", "Hydrolysis is too slow without a catalyst", ["Hydrolysis absorbs energy", "Polymers can't be broken down without adding ATP first", "Enzymes supply water"], "Enzymes lower activation energy."]
  ]],
  ["1.4", "Properties of Biological Macromolecules", [
    ["Which linkage joins the monomers of DNA?", "Phosphodiester bonds", ["Peptide bonds", "Glycosidic bonds", "Hydrogen bonds only"], "Sugar-phosphate backbones use phosphodiester bonds."],
    ["Saturated fats are solid at room temperature because their fatty acids", "have no double bonds and pack tightly", ["have many double bonds that kink the chains", "are hydrophilic", "are shorter than unsaturated fatty acids"], "Straight chains pack closely."],
    ["In a phospholipid bilayer, the hydrophobic tails", "face inward, away from water", ["face the water on both sides", "form hydrogen bonds with water", "attach to proteins only"], "Tails avoid water; heads face water."],
    ["New nucleotides are added to which end of a growing DNA strand?", "The 3′ end", ["The 5′ end", "Either end", "The middle"], "Polymerases extend from the 3′ hydroxyl."],
    ["Which macromolecule is made from glycerol and fatty acids?", "Triglycerides", ["Proteins and amino acids", "Nucleic acids", "Polysaccharides"], "Fats are glycerol with three fatty acids."]
  ]],
  ["1.5", "Structure and Function of Biological Macromolecules", [
    ["A mutation changes a hydrophobic amino acid in a protein's interior to a charged one. The most likely effect is", "the protein misfolds", ["the protein folds faster", "no change in shape", "the protein gains a new function"], "Charged residues in the hydrophobic core disrupt folding."],
    ["Which level of protein structure is formed by hydrogen bonds between backbone atoms?", "Secondary", ["Primary", "Tertiary", "Quaternary"], "Alpha helices and beta sheets."],
    ["Hemoglobin has four polypeptide chains. This describes its", "quaternary structure", ["primary structure of chains", "secondary structure only", "tertiary structure"], "Multiple subunits = quaternary."],
    ["Disulfide bridges in a protein form between which amino acids?", "Cysteines", ["Glycines", "Prolines", "Alanines"], "Cysteine R groups contain sulfur."],
    ["Heating an enzyme to 90°C destroys its function by disrupting", "the bonds that hold its 3D shape", ["its peptide bonds", "its primary structure", "its amino acid sequence and peptide bonds"], "Denaturation disrupts H-bonds and other interactions, not peptide bonds."],
    ["Cellulose and starch are both glucose polymers, but humans can digest only starch because", "the glycosidic linkages differ", ["cellulose contains nitrogen atoms", "starch is a protein, not a carbohydrate", "cellulose is a lipid"], "Human enzymes can't break cellulose's beta linkages."]
  ]],
  ["1.6", "Nucleic Acids", [
    ["A DNA sample is 30% adenine. What percentage is guanine?", "20%", ["30%", "40%", "70%"], "A = T = 30%, so G + C = 40%, and G = 20%."],
    ["Which feature distinguishes RNA from DNA?", "Ribose sugar and uracil", ["Deoxyribose and thymine", "A double helix", "Phosphodiester bonds"], "RNA has ribose and uracil instead of deoxyribose and thymine."],
    ["The two strands of DNA are described as antiparallel because they", "run in opposite 5′→3′ directions", ["are identical in sequence", "never pair with each other", "contain different sugars"], "One runs 5′→3′, the other 3′→5′."],
    ["Which DNA segment would need the highest temperature to separate its strands?", "One rich in G–C pairs", ["One rich in A–T pairs", "One with only adenine", "One with only thymine"], "G–C pairs have three hydrogen bonds."],
    ["Purines pair with pyrimidines in DNA, which keeps", "the helix a uniform width", ["the strands identical", "the sugars from bonding together", "the bases hydrophilic"], "A purine–pyrimidine pair always spans the same distance."]
  ]]
]},
{ n: 2, name: "Cell Structure and Function", weight: "10–13%", topics: [
  ["2.1", "Cell Structure: Subcellular Components", [
    ["A cell has abundant rough ER and Golgi. It most likely specializes in", "secreting proteins", ["storing lipids", "detoxifying drugs", "making ATP"], "Secreted proteins are made on rough ER and processed in the Golgi."],
    ["Which organelle would be most abundant in liver cells that detoxify alcohol?", "Smooth ER", ["Rough ER", "Chloroplasts", "Central vacuoles"], "Smooth ER contains detoxifying enzymes."],
    ["Ribosomes are found in both prokaryotes and eukaryotes because", "all cells must make proteins", ["ribosomes are membrane-bound", "prokaryotes evolved from eukaryotes", "ribosomes store the cell's DNA"], "Protein synthesis is universal."],
    ["A defect in lysosomes would most likely cause", "buildup of undigested materials", ["failure to make ATP", "loss of the cell wall", "failure of DNA replication in S phase"], "Lysosomes break down macromolecules."],
    ["Which structure is found in plant cells but not animal cells?", "Cell wall", ["Mitochondria", "Ribosomes", "Golgi complex"], "Plant cells have cellulose cell walls."],
    ["The nuclear envelope's pores allow", "mRNA to leave the nucleus", ["DNA to leave the nucleus", "ribosomes to make DNA", "lipids to enter freely"], "mRNA exits to be translated in the cytoplasm."]
  ]],
  ["2.2", "Cell Structure and Function", [
    ["The folded inner membrane of mitochondria increases ATP production because it", "provides more surface for electron transport", ["stores more glucose for glycolysis inside the matrix", "holds more copies of mitochondrial DNA for replication", "blocks proton flow"], "Cristae hold electron transport chains and ATP synthase."],
    ["Thylakoid membranes in chloroplasts are the site of", "the light-dependent reactions", ["the Calvin cycle's carbon fixation", "glycolysis", "the Krebs cycle"], "Photosystems and ATP synthase are in thylakoids."],
    ["The central vacuole of a plant cell helps the plant stay upright by", "maintaining turgor pressure", ["storing starch", "making structural proteins for walls", "producing ATP for the cell wall"], "A full vacuole presses against the cell wall."],
    ["Microtubules are important in cell division because they", "form the spindle that separates chromosomes", ["store genetic information for the daughter cells", "make ATP", "digest waste"], "Spindle fibers move chromosomes."],
    ["A cell's Golgi complex is damaged. Which process is most affected?", "Modifying and packaging proteins for export", ["DNA replication in the nucleus", "Glycolysis", "Transcription"], "The Golgi processes and ships proteins."]
  ]],
  ["2.3", "Cell Size", [
    ["A cube-shaped cell is 2 µm on each side. What is its surface-area-to-volume ratio?", "3 : 1", ["6 : 1", "2 : 1", "1 : 3"], "Surface area 24 µm², volume 8 µm³."],
    ["As a cell grows larger, its surface-area-to-volume ratio", "decreases", ["increases", "stays the same", "doubles each time"], "Volume grows faster than surface area."],
    ["Microvilli on intestinal cells increase", "surface area for absorption", ["cell volume", "the number of nuclei per cell", "ATP production"], "More membrane means more absorption."],
    ["Why are most cells microscopic?", "Diffusion is efficient only over short distances", ["Large cells can't make DNA", "Membranes can't grow beyond a fixed size in any cell", "Larger cells can't make enough ribosomes to survive"], "A high SA:V ratio supports exchange."],
    ["Which cell would exchange materials most efficiently?", "A small, flattened cell", ["A large, spherical cell", "A large, cube-shaped cell", "A cell with no membrane folds"], "Flattening increases SA:V."]
  ]],
  ["2.4", "Plasma Membranes", [
    ["At colder temperatures, some organisms increase unsaturated fatty acids in membranes to", "keep the membrane fluid", ["make it more rigid", "reduce the protein content", "block diffusion"], "Kinks from double bonds prevent tight packing."],
    ["Cholesterol in animal membranes", "buffers membrane fluidity", ["transports glucose across the membrane", "forms ion channels", "stores energy for the membrane"], "It reduces fluidity at high temperatures and prevents solidifying at low temperatures."],
    ["Glycoproteins on the cell surface mainly function in", "cell recognition", ["energy storage", "DNA replication", "protein synthesis"], "They act as identification tags."],
    ["An integral membrane protein has a region rich in hydrophobic amino acids. That region most likely", "spans the lipid bilayer", ["faces the cytoplasm", "binds water on both surfaces", "attaches to the cell wall"], "Hydrophobic regions interact with fatty acid tails."],
    ["The fluid mosaic model describes membranes as", "a flexible bilayer with embedded proteins", ["a rigid sheet of proteins with no lipids", "a single lipid layer", "a carbohydrate wall"], "Components move laterally."]
  ]],
  ["2.5", "Membrane Permeability", [
    ["Which molecule crosses a phospholipid bilayer most easily without help?", "O₂", ["Na⁺", "Glucose", "H₂O through aquaporins only"], "Small nonpolar molecules diffuse through."],
    ["Ions can't cross the bilayer directly because", "they are charged and repelled by the hydrophobic core", ["they are too large", "they are nonpolar", "they bind tightly to cholesterol inside the lipid bilayer"], "Charge prevents passage through the lipid interior."],
    ["A membrane is selectively permeable because it", "lets some substances cross but not others", ["lets all small substances cross freely", "blocks all substances", "only allows water"], "Size, charge, and polarity matter."],
    ["Steroid hormones can pass through membranes because they are", "nonpolar lipids", ["large protein molecules", "charged ions and salts", "polar sugars"], "They dissolve in the lipid bilayer."]
  ]],
  ["2.6", "Membrane Transport", [
    ["The sodium–potassium pump moves ions against their gradients using", "ATP", ["diffusion", "osmosis", "aquaporins in the membrane"], "It's active transport."],
    ["A drug blocks ATP production. Which process would stop first?", "The sodium–potassium pump", ["Diffusion of O₂", "Osmosis", "Facilitated diffusion of glucose"], "Active transport requires ATP."],
    ["Secondary active transport uses", "an ion gradient to move another substance", ["ATP directly on each molecule that is moved", "no energy at all", "vesicles that carry each molecule across the membrane"], "Example: Na⁺-glucose cotransport."],
    ["Which moves a substance from low to high concentration?", "Active transport", ["Simple diffusion", "Facilitated diffusion", "Osmosis"], "Moving against the gradient requires energy."],
    ["A cell maintains high K⁺ inside and high Na⁺ outside. This gradient is maintained mainly by", "the sodium–potassium pump", ["osmosis", "aquaporins", "exocytosis"], "The pump constantly restores the gradients."]
  ]],
  ["2.7", "Facilitated Diffusion", [
    ["Glucose enters red blood cells through GLUT1 carriers down its concentration gradient. This is", "facilitated diffusion", ["primary active transport", "simple diffusion", "endocytosis through vesicles"], "A carrier helps, but no energy is used."],
    ["The rate of facilitated diffusion levels off at high solute concentrations because", "the transport proteins are saturated", ["ATP runs out", "the membrane becomes rigid at high concentration", "diffusion stops"], "There are a limited number of carriers."],
    ["Aquaporins increase the rate of", "osmosis", ["active transport", "ion pumping", "endocytosis"], "They are water channels."],
    ["Gated ion channels open in response to", "specific signals", ["ATP hydrolysis", "cell division signals", "DNA replication finishing"], "Examples include voltage or ligand gating."]
  ]],
  ["2.8", "Tonicity and Osmoregulation", [
    ["A cell with 0.2 M solute is placed in 0.5 M solution. Water will move", "out of the cell", ["into the cell", "in and out equally", "nowhere"], "Water moves toward higher solute concentration."],
    ["A plant cell in distilled water becomes", "turgid", ["plasmolyzed", "flaccid", "crenated"], "Water enters, and the wall resists bursting."],
    ["Freshwater protists use contractile vacuoles to", "pump out excess water", ["store food", "make ATP for swimming", "take in salt from the water"], "Their environment is hypotonic."],
    ["The water potential of a solution with solute potential −0.6 MPa and pressure potential 0 is", "−0.6 MPa", ["+0.6 MPa", "0 MPa", "−1.2 MPa"], "Ψ = Ψs + Ψp."],
    ["Adding solute to a solution makes its water potential", "more negative", ["more positive", "unchanged", "zero"], "Solutes lower water potential."],
    ["Red blood cells placed in a hypotonic solution will", "swell and may burst", ["shrink", "stay the same size", "become turgid"], "Animal cells lack walls."]
  ]],
  ["2.9", "Mechanisms of Transport", [
    ["White blood cells engulf bacteria by", "phagocytosis", ["pinocytosis", "exocytosis", "facilitated diffusion"], "'Cell eating.'"],
    ["Neurons release neurotransmitters by", "exocytosis", ["endocytosis", "osmosis", "diffusion through channels"], "Vesicles fuse with the membrane."],
    ["Receptor-mediated endocytosis is important because it", "brings in specific molecules like cholesterol", ["releases hormones from the cell into the blood", "pumps ions", "makes ATP from molecules brought in from outside the cell"], "Receptors select specific ligands."],
    ["Endocytosis and exocytosis both require", "energy and vesicles", ["no energy", "only channels", "only diffusion through channels"], "Vesicle formation uses ATP."]
  ]],
  ["2.10", "Cell Compartmentalization", [
    ["Compartmentalization benefits eukaryotic cells mainly by", "separating incompatible reactions", ["removing the need for ATP in most reactions", "eliminating membranes", "shrinking the cell to save energy"], "Different conditions can exist in different organelles."],
    ["Lysosomes keep their enzymes contained because the enzymes", "could digest the cell", ["need light", "are too large to leave", "are inactive"], "They work at low pH inside lysosomes."],
    ["Prokaryotes carry out cellular respiration on their", "plasma membrane", ["mitochondria and chloroplasts", "chloroplasts", "nuclear membrane"], "They lack membrane-bound organelles."],
    ["Which is an advantage of the nucleus?", "Separating transcription from translation", ["Making ATP faster in the cytoplasm of the cell", "Storing lipids", "Digesting food"], "It allows RNA processing before translation."]
  ]],
  ["2.11", "Origins of Cell Compartmentalization", [
    ["Which evidence supports the endosymbiotic origin of mitochondria?", "They have their own circular DNA", ["They make proteins for the nucleus", "They lack membranes", "They are found in all prokaryotes"], "Their DNA resembles bacterial DNA."],
    ["Mitochondrial ribosomes resemble", "bacterial ribosomes", ["eukaryotic cytoplasmic ribosomes", "viral capsid proteins", "Golgi vesicles"], "They are 70S, like prokaryotic ribosomes."],
    ["Chloroplasts have two membranes, which suggests", "they were engulfed by another cell", ["they formed from the nucleus", "they are made of cellulose", "they came from viruses"], "The outer membrane came from the host."],
    ["Mitochondria reproduce by", "a process like binary fission", ["mitosis", "meiosis", "budding off the endoplasmic reticulum"], "They divide independently of the cell."]
  ]]
]},
{ n: 3, name: "Cellular Energetics", weight: "12–16%", topics: [
  ["3.1", "Enzyme Structure", [
    ["A competitive inhibitor binds", "the active site", ["an allosteric site", "the reaction's product", "the substrate"], "It competes with substrate for the active site."],
    ["Adding more substrate can overcome", "competitive inhibition", ["noncompetitive inhibition", "denaturation", "irreversible inhibition"], "High substrate outcompetes the inhibitor."],
    ["An allosteric inhibitor changes the enzyme's", "shape, altering the active site", ["amino acid sequence permanently", "primary structure", "substrate"], "Binding elsewhere changes the active site's shape."],
    ["Enzymes are specific because", "the active site fits particular substrates", ["they react with any molecule that reaches them", "they are made of lipids", "they use ATP"], "Shape and chemistry match the substrate."]
  ]],
  ["3.2", "Enzyme Catalysis", [
    ["Enzymes speed up reactions by", "lowering activation energy", ["raising the temperature of the cell", "changing the reaction's ΔG", "adding energy"], "They stabilize the transition state."],
    ["An enzyme changes which of these?", "The reaction rate", ["The equilibrium constant", "ΔG of the reaction", "The products formed"], "Enzymes don't change thermodynamics."],
    ["On an energy diagram, adding an enzyme lowers", "the peak (activation energy)", ["the energy of the reactants", "the energy of products", "ΔG"], "Only the transition state energy is lowered."],
    ["Which statement about enzymes is true?", "They are not used up in reactions", ["They are consumed in reactions", "They only work in digestion", "They increase ΔG"], "Enzymes are reused."]
  ]],
  ["3.3", "Environmental Impacts on Enzyme Function", [
    ["An enzyme from a hot spring bacterium works best at 80°C. At 37°C, its activity would likely be", "lower", ["higher", "the same", "zero because it's denatured"], "Below the optimum, molecules move more slowly."],
    ["Pepsin works best at pH 2. In the small intestine (pH 8), pepsin would", "lose activity", ["work faster", "become a lipase", "digest fats"], "pH changes alter charges and shape."],
    ["Raising temperature from 20°C to 30°C usually increases enzyme activity because", "molecules collide more often", ["the enzyme denatures", "ΔG of the reaction decreases", "the active site changes shape"], "Kinetic energy increases collisions."],
    ["Adding salt can reduce enzyme activity by", "disrupting ionic bonds in the enzyme", ["adding more substrate to the solution", "lowering temperature", "increasing ATP"], "Ionic interactions help maintain shape."],
    ["A cofactor like Mg²⁺ is needed because it", "helps the enzyme function", ["replaces the enzyme's substrate", "denatures the enzyme", "is a product of the reaction"], "Cofactors assist catalysis."],
    ["Increasing enzyme concentration with excess substrate will", "increase the reaction rate", ["decrease the reaction rate", "not change the rate", "stop the reaction"], "More active sites are available."]
  ]],
  ["3.4", "Cellular Energy", [
    ["ATP hydrolysis powers cellular work mainly by", "phosphorylating other molecules", ["releasing heat that other molecules absorb", "adding electrons", "making glucose"], "Transferring phosphate changes shape or reactivity."],
    ["An endergonic reaction", "requires an input of free energy", ["releases free energy on its own", "occurs spontaneously", "has a negative ΔG"], "ΔG is positive."],
    ["Cells couple reactions so that", "exergonic reactions drive endergonic ones", ["no energy is used by either reaction at all", "all of their reactions are endergonic ones", "ATP is never used"], "Energy coupling makes unfavorable reactions possible."],
    ["Organisms need a constant energy input because", "energy is lost as heat in transformations", ["energy is created in cells from nothing each day", "matter is lost", "entropy decreases"], "The second law of thermodynamics."]
  ]],
  ["3.5", "Photosynthesis", [
    ["In photosynthesis, the oxygen released comes from", "water", ["carbon dioxide", "glucose", "ATP"], "Water is split in photosystem II."],
    ["A plant in green light produces little O₂ because chlorophyll", "reflects green light", ["absorbs green light best", "only works in darkness", "needs blue light only"], "Green light isn't absorbed well."],
    ["The Calvin cycle uses ATP and NADPH to", "fix CO₂ into sugar", ["split water molecules", "make oxygen", "pump protons across membranes"], "Energy from the light reactions builds carbohydrates."],
    ["A herbicide blocks electron flow in photosystem II. The Calvin cycle would", "slow down from lack of ATP and NADPH", ["speed up", "produce more oxygen than it did before", "be unaffected"], "The Calvin cycle depends on light-reaction products."],
    ["Proton gradients in chloroplasts are built across the", "thylakoid membrane", ["outer membrane", "cell wall", "nuclear envelope"], "Protons accumulate in the thylakoid space."],
    ["If CO₂ levels drop, which would accumulate?", "RuBP", ["G3P", "Oxygen", "Glucose"], "RuBP can't be carboxylated without CO₂."]
  ]],
  ["3.6", "Cellular Respiration", [
    ["Cyanide blocks the last protein complex of the electron transport chain. Which stops?", "The proton gradient and most ATP production", ["Glycolysis only, since it occurs in the cytoplasm", "The Calvin cycle and all carbon fixation in the cell", "DNA replication"], "Without electron flow, protons aren't pumped."],
    ["Oxygen's role in aerobic respiration is to", "accept electrons at the end of the chain", ["make glucose", "split water", "pump protons directly into the mitochondrial matrix"], "O₂ is reduced to water."],
    ["Glycolysis occurs in the", "cytoplasm", ["mitochondrial matrix", "inner mitochondrial membrane", "nucleus"], "It doesn't require oxygen."],
    ["Fermentation allows glycolysis to continue by", "regenerating NAD⁺", ["making more ATP than respiration", "using oxygen", "producing CO₂ only"], "NAD⁺ is needed for glycolysis."],
    ["An uncoupler makes the inner mitochondrial membrane leaky to protons. The result is", "less ATP and more heat", ["more ATP from glucose", "no electron flow at all", "more glucose"], "Energy is released as heat instead of used by ATP synthase."],
    ["Most ATP in aerobic respiration is made by", "oxidative phosphorylation", ["glycolysis", "the citric acid (Krebs) cycle", "fermentation"], "ATP synthase uses the proton gradient."]
  ]],
  ["3.7", "Fitness", [
    ["Fitness in biology refers to", "reproductive success", ["physical strength", "lifespan", "body size"], "Passing on genes matters."],
    ["Variation in enzyme structure among individuals can affect fitness because it", "changes how well metabolism works in an environment", ["always lowers survival and reproduction in every environment", "stops reproduction", "prevents mutation and keeps every enzyme exactly the same"], "Enzymes suited to conditions help survival."],
    ["Organisms in hot deserts often have enzymes that", "remain stable at high temperatures", ["denature easily", "work only at 0°C", "lack active sites entirely"], "Selection favors heat-stable enzymes."],
    ["A population's genetic variation in metabolism increases its chance to", "survive environmental change", ["avoid all harmful mutations forever", "stop evolving", "become identical"], "Some individuals may cope better."]
  ]]
]},
{ n: 4, name: "Cell Communication and Cell Cycle", weight: "10–15%", topics: [
  ["4.1", "Cell Communication", [
    ["A signal released by a cell that affects only nearby cells is an example of", "paracrine signaling", ["endocrine hormone signaling", "direct contact through gap junctions", "synaptic signaling only"], "Local regulators act on nearby target cells."],
    ["Insulin travels through the blood to reach target cells. This is", "endocrine signaling", ["paracrine signaling nearby", "autocrine signaling", "juxtacrine signaling"], "Hormones travel long distances."],
    ["Only certain cells respond to a hormone because only they have", "the matching receptor", ["the hormone's gene", "extra mitochondria", "a nucleus"], "Receptors determine response."],
    ["Plasmodesmata in plants allow", "direct exchange of signals between adjacent cells", ["hormones to travel long distances through the blood", "DNA to leave the nucleus", "cells to divide"], "They connect cytoplasms."],
    ["Immune cells recognize each other through surface molecules. This is", "cell-to-cell contact signaling", ["endocrine signaling through blood", "hormone signaling through the blood", "synaptic signaling"], "Surface molecules interact directly."]
  ]],
  ["4.2", "Introduction to Signal Transduction", [
    ["The three stages of cell signaling in order are", "reception, transduction, response", ["transduction, reception, response", "response, reception, transduction", "reception, response, transduction"], "The signal binds, is relayed, then causes a response."],
    ["Epinephrine binds a receptor on the cell surface rather than entering the cell because it is", "hydrophilic", ["hydrophobic", "a steroid", "too small"], "Polar signals can't cross the membrane."],
    ["Testosterone binds receptors inside the cell because it is", "a nonpolar steroid", ["a large protein", "an ion", "a polysaccharide"], "Lipid-soluble hormones cross membranes."],
    ["A mutation prevents a receptor from binding its ligand. The cell will", "not respond to that signal", ["respond more strongly", "respond to all signals equally", "divide constantly"], "Reception is required."],
    ["A single ligand can cause different responses in different cells because", "the cells have different pathways", ["the ligand changes shape", "all cells have the same pathways", "receptors are identical"], "Different proteins downstream lead to different responses."]
  ]],
  ["4.3", "Signal Transduction", [
    ["cAMP acts in signaling pathways as a", "second messenger", ["receptor", "ligand for receptors", "transcription factor"], "It relays signals inside the cell."],
    ["Protein kinases pass signals along by", "adding phosphate groups to proteins", ["removing phosphate groups from proteins", "binding DNA", "making cAMP"], "Phosphorylation activates or inactivates proteins."],
    ["A phosphatase inhibitor would most likely", "keep a signaling pathway active longer", ["stop the pathway at the receptor immediately", "destroy the receptor protein on the cell surface", "block ligand binding"], "Phosphatases turn pathways off."],
    ["Signal amplification occurs because", "each activated protein activates many others", ["receptors bind many ligands at once", "ATP is made", "the nucleus copies signals"], "Cascades multiply the signal."],
    ["G protein–coupled receptors activate G proteins by causing them to", "exchange GDP for GTP", ["hydrolyze ATP", "bind DNA", "open ion channels only"], "GTP-bound G proteins are active."]
  ]],
  ["4.4", "Changes in Signal Transduction Pathways", [
    ["A mutation locks the Ras protein in its active form. The cell would likely", "divide uncontrollably", ["stop dividing permanently", "undergo apoptosis", "stop responding to all signals"], "Growth signaling stays on."],
    ["Cholera toxin keeps G proteins active in intestinal cells, causing", "excess secretion of water and salt", ["reduced cAMP", "cell death", "slower digestion of fats and proteins"], "High cAMP causes fluid loss."],
    ["A drug blocks a receptor's binding site. This drug acts as", "an antagonist", ["an agonist", "a second messenger", "a protein kinase"], "Antagonists block signaling."],
    ["Mutations in signaling pathways can cause cancer when they", "activate growth signals without a ligand", ["prevent all cell division permanently", "block DNA replication", "increase apoptosis"], "Uncontrolled signaling leads to proliferation."]
  ]],
  ["4.5", "Feedback", [
    ["When body temperature rises, sweating increases to lower it. This is", "negative feedback", ["positive feedback", "signal amplification", "no feedback"], "The response counteracts the change."],
    ["During childbirth, oxytocin causes contractions, which trigger more oxytocin. This is", "positive feedback", ["negative feedback", "homeostasis", "an antagonist"], "The response amplifies the stimulus."],
    ["After a meal, insulin lowers blood glucose. This helps maintain", "homeostasis", ["positive feedback", "fruit ripening", "blood clotting"], "Negative feedback keeps glucose stable."],
    ["Fruit ripening, where ethylene triggers more ethylene release, is an example of", "positive feedback", ["negative feedback", "homeostasis", "thermoregulation"], "Ethylene production amplifies itself."],
    ["A person with type 1 diabetes can't regulate blood glucose because", "their pancreas makes little insulin", ["their cells have too many receptors", "glucagon is missing", "blood glucose is always low"], "Beta cells are destroyed."]
  ]],
  ["4.6", "Cell Cycle", [
    ["DNA is replicated during which phase?", "S phase", ["G₁ phase of interphase", "G₂", "M phase"], "S stands for synthesis."],
    ["A cell has 20 chromosomes at the end of G₁. How many chromatids does it have at the end of S?", "40", ["20", "10", "80"], "Each chromosome is copied into two sister chromatids."],
    ["Sister chromatids separate during", "anaphase", ["prophase", "metaphase", "telophase"], "They're pulled to opposite poles."],
    ["A drug that prevents spindle formation would stop cells in", "metaphase", ["G₁", "S phase of interphase", "G₂"], "Chromosomes can't align or separate."],
    ["In a root tip, 90 of 100 cells are in interphase. This suggests", "interphase takes most of the cell cycle", ["mitosis takes most of the cycle", "cells rarely divide", "the cells are dead"], "Time spent in a phase is proportional to cells in it."],
    ["Cells that permanently stop dividing, such as neurons, enter", "G₀", ["S phase", "anaphase", "G₂"], "G₀ is a resting state."]
  ]],
  ["4.7", "Regulation of Cell Cycle", [
    ["Cyclin-dependent kinases (CDKs) are active only when", "bound to cyclins", ["cyclins are destroyed", "DNA is damaged", "the cell is in G₀"], "Cyclin levels control CDK activity."],
    ["The protein p53 helps prevent cancer by", "halting the cycle when DNA is damaged", ["speeding up cell division after repair", "making cyclins", "copying DNA"], "It can trigger repair or apoptosis."],
    ["A mutation that inactivates p53 would most likely lead to", "cells with damaged DNA continuing to divide", ["cells stopping division in every tissue permanently", "more apoptosis of cells that carry damaged DNA", "fewer mutations"], "Damaged cells are no longer stopped."],
    ["Proto-oncogenes become oncogenes when mutations", "make them overactive", ["inactivate them entirely", "delete them", "slow the cycle"], "Oncogenes promote excessive division."],
    ["Growth factors stimulate cell division by", "binding receptors that activate cell-cycle pathways", ["damaging DNA so that the cell must repair itself first", "blocking cyclins from binding cyclin-dependent kinases", "stopping mitosis"], "They trigger signaling cascades."],
    ["Apoptosis is important because it", "removes damaged or unneeded cells", ["makes cells divide faster during growth", "copies DNA", "creates new cells"], "Programmed cell death protects the organism."]
  ]]
]}
);
