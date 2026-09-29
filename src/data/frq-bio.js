// AP Biology: free-response questions, one per CED topic (Claude version only).
// Each topic: [stimulus, [[part prompt, rubric], ...]]. Every part is worth 1 point; Claude grades only against the rubric.
window.AP_FRQ = window.AP_FRQ || {};
AP_FRQ.bio = {
"1.1": ["Water striders can walk on the surface of a pond. In winter, the pond's surface freezes, but fish survive in the liquid water below the ice.", [
  ["Describe the type of bond that forms between adjacent water molecules.", "Earns the point for describing hydrogen bonds: attractions between the partially positive hydrogen of one water molecule and the partially negative oxygen of another (due to water's polarity)."],
  ["Explain how hydrogen bonding allows water striders to walk on water.", "Earns the point for explaining that hydrogen bonds between surface water molecules create cohesion/surface tension strong enough to support the insect's weight."],
  ["Explain why ice floats and how this helps fish survive winter.", "Earns the point for explaining that in ice, hydrogen bonds hold molecules in a spaced-out lattice, making ice less dense than liquid water, so ice floats and insulates the water below, keeping it from freezing solid."]
]],
"1.2": ["A researcher grows two groups of plants. Group 1 receives complete fertilizer. Group 2 receives fertilizer lacking nitrogen. After three weeks, Group 2 plants are small and yellow.", [
  ["Identify two types of biological macromolecules that require nitrogen.", "Earns the point for identifying two of: proteins (amino acids), nucleic acids (DNA/RNA), ATP/nucleotides. Chlorophyll is acceptable as a nitrogen-containing molecule if paired with a correct macromolecule."],
  ["Identify one biological molecule that contains phosphorus.", "Earns the point for identifying nucleic acids (DNA/RNA), ATP, or phospholipids."],
  ["Explain why the Group 2 plants grew poorly.", "Earns the point for explaining that without nitrogen the plants cannot make enough proteins (enzymes) and/or nucleic acids needed for growth, or cannot make chlorophyll (yellow leaves), so growth is limited."]
]],
"1.3": ["A student models how monomers join to form polymers and how polymers are broken down in digestion.", [
  ["Identify the type of reaction that joins two monomers.", "Earns the point for identifying dehydration synthesis (condensation), which releases a water molecule."],
  ["Describe what happens during hydrolysis.", "Earns the point for describing that water is added to break the covalent bond between monomers, splitting a polymer into smaller units."],
  ["Explain why digestive enzymes are needed to break down polymers in food.", "Earns the point for explaining that hydrolysis reactions occur too slowly on their own; enzymes lower activation energy so polymers are broken into monomers fast enough to be absorbed and used."]
]],
"1.4": ["Proteins, carbohydrates, lipids, and nucleic acids differ in their monomers and in the bonds that link them.", [
  ["Identify the monomer of proteins and the bond that links these monomers.", "Earns the point for identifying amino acids joined by peptide bonds. Both needed."],
  ["Describe the directionality of a DNA strand.", "Earns the point for describing that a strand has a 5′ end (phosphate) and a 3′ end (hydroxyl), and that nucleotides are added to the 3′ end; the two strands are antiparallel."],
  ["Explain how the structure of a phospholipid allows it to form a membrane bilayer.", "Earns the point for explaining that phospholipids have a hydrophilic (polar) phosphate head and hydrophobic (nonpolar) fatty acid tails, so in water the tails face inward away from water and heads face out, forming a bilayer."]
]],
"1.5": ["A mutation changes one amino acid in an enzyme's active site from a nonpolar amino acid (valine) to a charged amino acid (glutamate).", [
  ["Identify the level of protein structure determined by the order of amino acids.", "Earns the point for identifying primary structure."],
  ["Describe how R-group interactions determine tertiary structure.", "Earns the point for describing that interactions among R groups (hydrophobic interactions, hydrogen bonds, ionic bonds, disulfide bridges) fold the polypeptide into a specific 3D shape."],
  ["Predict and explain the effect of the mutation on enzyme function.", "Earns the point for predicting reduced or lost function and explaining that the charged R group changes the active site's shape or chemical properties, so the substrate no longer binds properly."]
]],
"1.6": ["DNA and RNA are both nucleic acids but differ in structure.", [
  ["Identify one structural difference between DNA and RNA.", "Earns the point for identifying one: DNA has deoxyribose vs. RNA ribose; DNA uses thymine vs. RNA uracil; DNA is usually double-stranded vs. RNA single-stranded."],
  ["Describe the base-pairing rules in DNA.", "Earns the point for describing adenine pairs with thymine and guanine pairs with cytosine (purine with pyrimidine), held by hydrogen bonds."],
  ["Explain why a DNA segment with more G–C pairs requires more energy to separate.", "Earns the point for explaining that G–C pairs are held by three hydrogen bonds while A–T pairs have two, so more hydrogen bonds must be broken."]
]],
"2.1": ["Pancreatic cells secrete large amounts of the protein insulin.", [
  ["Identify the organelle where insulin is synthesized.", "Earns the point for identifying ribosomes, specifically on the rough endoplasmic reticulum."],
  ["Describe the role of the Golgi complex in insulin secretion.", "Earns the point for describing that the Golgi modifies, sorts, and packages proteins into vesicles for secretion."],
  ["Predict and explain the effect on insulin secretion if a drug disrupted vesicle transport.", "Earns the point for predicting less/no insulin secreted and explaining that insulin must travel in vesicles from the ER to the Golgi and to the plasma membrane for exocytosis."]
]],
"2.2": ["Mitochondria have a highly folded inner membrane. Chloroplasts contain stacks of thylakoids.", [
  ["Identify the name of the folds of the inner mitochondrial membrane.", "Earns the point for identifying cristae."],
  ["Describe how the folding of the inner mitochondrial membrane benefits the cell.", "Earns the point for describing that folds increase surface area for more electron transport chains and ATP synthase, so more ATP is made."],
  ["Explain one way the structure of chloroplasts supports their function.", "Earns the point for explaining that thylakoid membranes contain pigments/photosystems and increase surface area for light reactions, or that thylakoids create a compartment for a proton gradient used to make ATP."]
]],
"2.3": ["Cell A is a cube 1 µm on each side. Cell B is a cube 3 µm on each side.", [
  ["Calculate the surface-area-to-volume ratio of Cell A.", "Earns the point for 6:1 (surface area 6 µm², volume 1 µm³)."],
  ["Calculate the surface-area-to-volume ratio of Cell B.", "Earns the point for 2:1 (surface area 54 µm², volume 27 µm³)."],
  ["Explain which cell would exchange materials with its environment more efficiently and why.", "Earns the point for explaining that Cell A is more efficient because its higher SA:V ratio gives more membrane per unit volume for diffusion of nutrients and wastes."]
]],
"2.4": ["The plasma membrane is described by the fluid mosaic model.", [
  ["Identify one component of the plasma membrane other than phospholipids.", "Earns the point for identifying proteins (integral/peripheral), cholesterol, glycoproteins, or glycolipids/carbohydrates."],
  ["Describe the role of cholesterol in animal cell membranes.", "Earns the point for describing that cholesterol regulates fluidity: reducing fluidity at high temperatures and preventing tight packing at low temperatures."],
  ["Explain why integral membrane proteins have hydrophobic regions.", "Earns the point for explaining that the region spanning the membrane contacts the hydrophobic fatty acid tails, so hydrophobic amino acids stabilize the protein in the bilayer."]
]],
"2.5": ["Oxygen and carbon dioxide cross the plasma membrane easily, but glucose and ions do not.", [
  ["Identify a property of oxygen that allows it to cross the membrane directly.", "Earns the point for identifying that it is small and nonpolar."],
  ["Describe why ions cannot pass directly through the phospholipid bilayer.", "Earns the point for describing that ions are charged and cannot pass through the hydrophobic interior of the bilayer."],
  ["Explain how cells allow polar molecules like glucose to enter.", "Earns the point for explaining that transport proteins (channels or carriers, e.g., GLUT transporters) provide a hydrophilic pathway across the membrane."]
]],
"2.6": ["The sodium-potassium pump moves 3 Na⁺ out of the cell and 2 K⁺ into the cell.", [
  ["Identify whether this is passive or active transport.", "Earns the point for identifying active transport."],
  ["Describe the energy source used by the pump.", "Earns the point for describing ATP hydrolysis (phosphorylation of the pump)."],
  ["Explain why the pump requires energy.", "Earns the point for explaining that it moves Na⁺ and K⁺ against their concentration (electrochemical) gradients, from low to high concentration."]
]],
"2.7": ["Aquaporins are channel proteins in the membranes of kidney cells.", [
  ["Identify the molecule that moves through aquaporins.", "Earns the point for identifying water."],
  ["Describe how facilitated diffusion differs from active transport.", "Earns the point for describing that facilitated diffusion moves substances down their concentration gradient through proteins without using energy, while active transport moves against the gradient using energy."],
  ["Predict the effect on water reabsorption if a kidney cell produced more aquaporins, and explain.", "Earns the point for predicting increased water reabsorption and explaining that more channels allow more water to move by osmosis out of the filtrate, producing more concentrated urine."]
]],
"2.8": ["Red blood cells are placed in three solutions: A (0.9% NaCl), B (distilled water), and C (5% NaCl).", [
  ["Identify which solution is hypotonic to the red blood cells.", "Earns the point for identifying solution B (distilled water)."],
  ["Predict what happens to red blood cells in solution C.", "Earns the point for predicting they shrink/shrivel (crenate) because water leaves the cells."],
  ["Explain why plant cells do not burst in distilled water.", "Earns the point for explaining that the cell wall resists expansion, creating turgor pressure that stops more water from entering."]
]],
"2.9": ["White blood cells engulf bacteria. Nerve cells release neurotransmitters into synapses.", [
  ["Identify the process white blood cells use to engulf bacteria.", "Earns the point for identifying phagocytosis (a form of endocytosis)."],
  ["Describe exocytosis.", "Earns the point for describing vesicles fusing with the plasma membrane to release contents outside the cell."],
  ["Explain why endocytosis and exocytosis require energy.", "Earns the point for explaining that forming vesicles, moving them (cytoskeleton/motor proteins), and reshaping the membrane requires ATP."]
]],
"2.10": ["Eukaryotic cells contain membrane-bound organelles such as lysosomes, while prokaryotic cells do not.", [
  ["Identify one benefit of compartmentalization in eukaryotic cells.", "Earns the point for identifying a benefit: separating incompatible reactions, concentrating enzymes and substrates, specialized environments (e.g., acidic lysosome), increased surface area for reactions."],
  ["Describe why lysosomal enzymes are kept inside lysosomes.", "Earns the point for describing that lysosomal hydrolytic enzymes would digest the cell's own components if released; they work best at the lysosome's acidic pH."],
  ["Explain how prokaryotes carry out processes without membrane-bound organelles.", "Earns the point for explaining that prokaryotes use the plasma membrane (e.g., for electron transport/ATP synthesis) and cytoplasm regions to carry out reactions."]
]],
"2.11": ["Mitochondria and chloroplasts have their own circular DNA and ribosomes similar to those of bacteria.", [
  ["Identify the theory that explains the origin of mitochondria and chloroplasts.", "Earns the point for identifying endosymbiotic theory (endosymbiosis)."],
  ["Describe one piece of evidence supporting this theory.", "Earns the point for describing one: circular DNA, bacteria-like (70S) ribosomes, double membranes, reproduction by binary fission, similar size to bacteria."],
  ["Explain how the double membrane of mitochondria supports the theory.", "Earns the point for explaining that an ancestral cell engulfed a prokaryote by endocytosis, so the outer membrane came from the host's membrane and the inner membrane from the prokaryote."]
]],
"3.1": ["An enzyme's active site binds a specific substrate. A competitive inhibitor has a shape similar to the substrate.", [
  ["Describe the relationship between the active site and the substrate.", "Earns the point for describing that the active site's shape and chemical properties are complementary to the substrate so it binds specifically (induced fit)."],
  ["Describe how a competitive inhibitor reduces enzyme activity.", "Earns the point for describing that it binds the active site, blocking the substrate from binding."],
  ["Explain how adding more substrate affects a reaction with a competitive inhibitor.", "Earns the point for explaining that high substrate concentration outcompetes the inhibitor for the active site, restoring the reaction rate (Vmax can be reached)."]
]],
"3.2": ["An energy diagram shows a reaction with and without an enzyme.", [
  ["Identify what an enzyme changes on an energy diagram.", "Earns the point for identifying that it lowers the activation energy."],
  ["Describe whether the enzyme changes the overall free energy change (ΔG) of the reaction.", "Earns the point for describing that ΔG stays the same; enzymes don't change reactant or product energy."],
  ["Explain how lowering activation energy increases reaction rate.", "Earns the point for explaining that more molecules have enough energy to reach the transition state, so more react per unit time."]
]],
"3.3": ["The activity of an enzyme from human stomach cells was measured at pH values from 1 to 9. Activity peaked at pH 2.", [
  ["Identify the optimal pH of this enzyme.", "Earns the point for identifying pH 2."],
  ["Predict the enzyme's activity at pH 8 and explain.", "Earns the point for predicting very low/no activity and explaining that pH far from the optimum changes the ionization of R groups, altering or denaturing the active site."],
  ["Explain why enzyme activity decreases at very high temperatures.", "Earns the point for explaining that high temperature disrupts hydrogen bonds and other interactions, denaturing the enzyme so the active site loses its shape."]
]],
"3.4": ["Cells couple the hydrolysis of ATP to reactions that would not occur on their own.", [
  ["Identify whether ATP hydrolysis is exergonic or endergonic.", "Earns the point for identifying exergonic (releases free energy, negative ΔG)."],
  ["Describe energy coupling.", "Earns the point for describing that the energy released by an exergonic reaction (ATP hydrolysis) is used to drive an endergonic reaction, often by phosphorylating a molecule."],
  ["Explain why organisms need a constant input of energy.", "Earns the point for explaining that living systems are highly ordered and must perform work; energy is lost as heat in every transformation (second law of thermodynamics), so energy must be continually supplied."]
]],
"3.5": ["A student measures oxygen production by aquatic plants under red, green, and blue light.", [
  ["Identify the location of the light-dependent reactions.", "Earns the point for identifying the thylakoid membranes of the chloroplast."],
  ["Predict which color of light will produce the least oxygen and explain.", "Earns the point for predicting green light and explaining that chlorophyll reflects green light and absorbs little of it."],
  ["Explain how the light reactions provide energy to the Calvin cycle.", "Earns the point for explaining that the light reactions make ATP and NADPH, which provide energy and electrons to fix CO₂ into sugar in the Calvin cycle."]
]],
"3.6": ["Cyanide blocks the final protein complex of the electron transport chain in mitochondria.", [
  ["Identify the final electron acceptor in aerobic cellular respiration.", "Earns the point for identifying oxygen (O₂), which forms water."],
  ["Describe how the electron transport chain creates a proton gradient.", "Earns the point for describing that electrons flowing through the chain release energy used to pump H⁺ from the matrix into the intermembrane space."],
  ["Explain why cyanide poisoning stops most ATP production.", "Earns the point for explaining that electron flow stops, so protons are no longer pumped, the gradient disappears, and ATP synthase can't make ATP by chemiosmosis."]
]],
"3.7": ["Two populations of the same fish species live in lakes with different temperatures. Fish in the colder lake have enzyme variants that work best at lower temperatures.", [
  ["Define fitness in biological terms.", "Earns the point for defining fitness as an organism's ability to survive and reproduce, passing genes to the next generation."],
  ["Describe how variation in enzyme structure could affect fitness.", "Earns the point for describing that enzymes that work efficiently in the local temperature allow better metabolism, energy production, and survival/reproduction."],
  ["Explain how natural selection could lead to the enzyme differences between the two lakes.", "Earns the point for explaining that in each lake, individuals with enzyme variants suited to that temperature survived and reproduced more, so those alleles increased in frequency over generations."]
]],
"4.1": ["Cells communicate by direct contact, local signaling, and long-distance signaling.", [
  ["Identify one example of long-distance cell signaling.", "Earns the point for identifying hormones (endocrine signaling), e.g., insulin, adrenaline, estrogen."],
  ["Describe paracrine signaling.", "Earns the point for describing that a cell releases a local signal molecule that affects nearby target cells."],
  ["Explain why only certain cells respond to a hormone in the blood.", "Earns the point for explaining that only target cells have the specific receptor that binds that hormone."]
]],
"4.2": ["Epinephrine binds a G-protein-coupled receptor on liver cells, which leads to the breakdown of glycogen.", [
  ["Identify the three stages of cell signaling.", "Earns the point for identifying reception, transduction, and response. All three needed."],
  ["Describe the role of the receptor.", "Earns the point for describing that the receptor binds the signal (ligand) specifically and changes shape, activating the pathway inside the cell."],
  ["Explain why epinephrine does not need to enter the cell to cause a response.", "Earns the point for explaining that epinephrine binds a membrane receptor, and the signal is relayed inside through transduction (second messengers), so the ligand itself never enters."]
]],
"4.3": ["In a signaling pathway, one activated receptor activates many G proteins, and each activates many enzymes that make cAMP.", [
  ["Identify cAMP's role in the pathway.", "Earns the point for identifying cAMP as a second messenger."],
  ["Describe signal amplification.", "Earns the point for describing that each step activates many molecules at the next step, so a small signal produces a large response."],
  ["Explain the role of protein kinases in signal transduction.", "Earns the point for explaining that kinases phosphorylate (add phosphate groups to) other proteins, activating or inactivating them in a phosphorylation cascade."]
]],
"4.4": ["A mutation causes a Ras protein to stay permanently in its active (GTP-bound) form.", [
  ["Predict the effect of this mutation on the signaling pathway.", "Earns the point for predicting the pathway is always on (signals continuously even without the growth factor)."],
  ["Explain how this mutation could lead to cancer.", "Earns the point for explaining that constant signaling stimulates the cell to divide uncontrollably."],
  ["Describe one way a drug could block this pathway's effects.", "Earns the point for describing a way: inhibiting a downstream kinase, blocking Ras activity, blocking the receptor or downstream effectors, or inhibiting the transcription factor—with a link to reduced signaling."]
]],
"4.5": ["After a meal, blood glucose rises and the pancreas releases insulin. During childbirth, oxytocin causes contractions, which cause more oxytocin release.", [
  ["Identify the type of feedback that regulates blood glucose.", "Earns the point for identifying negative feedback."],
  ["Describe how insulin returns blood glucose to normal.", "Earns the point for describing that insulin causes cells to take up glucose and the liver to store it as glycogen, lowering blood glucose."],
  ["Explain why the oxytocin example is positive feedback.", "Earns the point for explaining that the response (contractions) amplifies the stimulus (more oxytocin), increasing the change until birth occurs."]
]],
"4.6": ["A student observes onion root tip cells and counts 80 in interphase, 12 in prophase, 4 in metaphase, 2 in anaphase, and 2 in telophase.", [
  ["Calculate the percentage of cells in mitosis.", "Earns the point for 20% (20 of 100 cells)."],
  ["Describe what happens during the S phase of interphase.", "Earns the point for describing that DNA is replicated (chromosomes duplicated into sister chromatids)."],
  ["Explain what the data suggest about the relative length of interphase.", "Earns the point for explaining that most cells are in interphase, so interphase takes up most of the cell cycle."]
]],
"4.7": ["Cyclins and cyclin-dependent kinases (CDKs) control progression through the cell cycle. The protein p53 halts the cycle when DNA is damaged.", [
  ["Describe how cyclins regulate CDKs.", "Earns the point for describing that CDKs are only active when bound to cyclins; cyclin levels rise and fall, turning CDKs on and off."],
  ["Identify one cell cycle checkpoint.", "Earns the point for identifying G1 checkpoint, G2 checkpoint, or M (spindle) checkpoint."],
  ["Explain how a mutation that inactivates p53 could lead to cancer.", "Earns the point for explaining that cells with damaged DNA would no longer be stopped or undergo apoptosis, so mutations accumulate and cells divide uncontrollably."]
]],
"5.1": ["A diploid cell with 2n = 8 undergoes meiosis.", [
  ["Identify the number of chromosomes in each cell at the end of meiosis II.", "Earns the point for identifying 4 chromosomes (n = 4)."],
  ["Describe what happens during meiosis I that reduces the chromosome number.", "Earns the point for describing homologous chromosomes pairing and separating into different cells."],
  ["Explain one difference between the outcomes of mitosis and meiosis.", "Earns the point for explaining a difference: mitosis makes 2 identical diploid cells; meiosis makes 4 genetically different haploid cells (gametes)."]
]],
"5.2": ["Siblings from the same parents are not genetically identical (except identical twins).", [
  ["Identify one process in meiosis that creates genetic variation.", "Earns the point for identifying crossing over or independent assortment."],
  ["Describe how crossing over creates new combinations of alleles.", "Earns the point for describing that homologous chromosomes exchange segments during prophase I, making chromatids with new combinations of alleles."],
  ["Explain how random fertilization adds to genetic diversity.", "Earns the point for explaining that any sperm can fuse with any egg, so the number of possible zygote combinations is multiplied."]
]],
"5.3": ["In pea plants, purple flowers (P) are dominant to white (p). Two heterozygous plants are crossed.", [
  ["Identify the expected phenotypic ratio of the offspring.", "Earns the point for 3 purple : 1 white."],
  ["Calculate the probability that an offspring is homozygous recessive.", "Earns the point for 1/4 (25%)."],
  ["Describe how a testcross can determine the genotype of a purple-flowered plant.", "Earns the point for describing crossing the plant with a white (pp) plant: all purple offspring means PP; about half white means Pp."]
]],
"5.4": ["In a cross of red and white snapdragons, all F1 offspring are pink. In humans, hemophilia is more common in males.", [
  ["Identify the inheritance pattern shown by the snapdragons.", "Earns the point for identifying incomplete dominance."],
  ["Explain why hemophilia is more common in males.", "Earns the point for explaining that the gene is X-linked recessive, and males have only one X chromosome, so one recessive allele causes the condition."],
  ["Describe how linked genes affect expected offspring ratios.", "Earns the point for describing that genes close together on the same chromosome tend to be inherited together, so offspring ratios differ from independent assortment; recombinants occur only through crossing over."]
]],
"5.5": ["Hydrangea flowers are blue in acidic soil and pink in alkaline soil. Himalayan rabbits have dark fur only on their cooler extremities.", [
  ["Describe how the hydrangea example shows environmental effects on phenotype.", "Earns the point for describing that plants with the same genotype produce different flower colors depending on soil pH."],
  ["Explain the fur pattern of Himalayan rabbits.", "Earns the point for explaining that the enzyme producing dark pigment is temperature-sensitive and only functions in cooler body regions."],
  ["Describe one example of phenotypic plasticity in humans.", "Earns the point for describing a valid example: height affected by nutrition, skin darkening with sun exposure, muscle growth with exercise, PKU symptoms prevented by diet."]
]],
"5.6": ["A karyotype of a person shows three copies of chromosome 21.", [
  ["Identify the condition shown by this karyotype.", "Earns the point for identifying Down syndrome (trisomy 21)."],
  ["Describe the error in meiosis that causes this condition.", "Earns the point for describing nondisjunction: homologous chromosomes or sister chromatids fail to separate."],
  ["Explain how nondisjunction produces a gamete with an extra chromosome.", "Earns the point for explaining that when chromosomes fail to separate, one gamete receives both copies (n+1); if it fuses with a normal gamete, the zygote has three copies."]
]],
"6.1": ["Griffith, Avery, and Hershey and Chase performed experiments to identify the genetic material.", [
  ["Identify the molecule found to be the genetic material.", "Earns the point for identifying DNA."],
  ["Describe how Hershey and Chase's experiment showed this.", "Earns the point for describing that they labeled phage DNA with radioactive phosphorus and protein with radioactive sulfur; the radioactive phosphorus (DNA) entered bacteria, showing DNA is the genetic material."],
  ["Explain one difference between prokaryotic and eukaryotic chromosomes.", "Earns the point for explaining that prokaryotes usually have one circular chromosome in the nucleoid (plus plasmids), while eukaryotes have multiple linear chromosomes in a nucleus wrapped around histones."]
]],
"6.2": ["During DNA replication, the two strands are copied differently: one continuously and one in short pieces.", [
  ["Identify the enzyme that unwinds the DNA double helix.", "Earns the point for identifying helicase."],
  ["Describe why the lagging strand is made in fragments.", "Earns the point for describing that DNA polymerase only adds nucleotides to the 3′ end (synthesizes 5′→3′); the lagging strand runs the opposite direction, so it is made in Okazaki fragments."],
  ["Explain why DNA replication is called semiconservative.", "Earns the point for explaining that each new DNA molecule has one original (parental) strand and one newly made strand."]
]],
"6.3": ["A eukaryotic gene is transcribed into pre-mRNA, which is processed before leaving the nucleus.", [
  ["Identify the enzyme that performs transcription.", "Earns the point for identifying RNA polymerase."],
  ["Describe two modifications made to pre-mRNA.", "Earns the point for describing two of: adding a 5′ cap, adding a poly-A tail, splicing out introns. Both needed."],
  ["Explain how alternative splicing allows one gene to code for more than one protein.", "Earns the point for explaining that different combinations of exons are kept, producing different mRNAs and therefore different proteins."]
]],
"6.4": ["An mRNA segment reads 5′-AUG-GCA-UUU-UAA-3′.", [
  ["Identify the number of amino acids coded by this mRNA.", "Earns the point for 3 (AUG, GCA, UUU; UAA is a stop codon)."],
  ["Describe the role of tRNA in translation.", "Earns the point for describing that tRNA carries a specific amino acid and its anticodon pairs with the mRNA codon, adding the right amino acid."],
  ["Explain why the genetic code is described as nearly universal and what that suggests.", "Earns the point for explaining that almost all organisms use the same codons for the same amino acids, suggesting common ancestry (and allowing genes to be expressed in other organisms)."]
]],
"6.5": ["In E. coli, the lac operon is transcribed only when lactose is present.", [
  ["Identify the role of the repressor protein in the lac operon.", "Earns the point for identifying that the repressor binds the operator and blocks RNA polymerase, stopping transcription."],
  ["Describe how lactose turns on the operon.", "Earns the point for describing that lactose (allolactose) binds the repressor, changing its shape so it releases the operator, allowing transcription."],
  ["Explain one way eukaryotes regulate transcription.", "Earns the point for explaining a mechanism: transcription factors binding enhancers/promoters; DNA methylation; histone acetylation/deacetylation changing chromatin accessibility."]
]],
"6.6": ["A nerve cell and a muscle cell in the same person have the same DNA but make different proteins.", [
  ["Describe why the nerve and muscle cells have the same DNA.", "Earns the point for describing that both came from the same fertilized egg by mitosis, which copies DNA identically."],
  ["Explain how the cells can make different proteins.", "Earns the point for explaining differential gene expression: different sets of genes are turned on in each cell type due to different transcription factors/regulation."],
  ["Identify one molecular signal involved in cell differentiation.", "Earns the point for identifying transcription factors, cell-signaling molecules/growth factors, morphogens, or microRNAs."]
]],
"6.7": ["A single base substitution changes a codon from GAG to GTG in the β-globin gene, causing sickle cell disease.", [
  ["Identify the type of mutation.", "Earns the point for identifying a point mutation (substitution), specifically a missense mutation."],
  ["Describe how this mutation affects the protein.", "Earns the point for describing that one amino acid (glutamic acid) is replaced by another (valine), changing hemoglobin's properties so it clumps and distorts red blood cells."],
  ["Explain why a frameshift mutation usually has a larger effect than a substitution.", "Earns the point for explaining that inserting or deleting bases shifts the reading frame, changing every codon after it and often creating an early stop codon."]
]],
"6.8": ["Scientists insert the human insulin gene into a bacterial plasmid, and the bacteria produce human insulin.", [
  ["Identify the enzyme used to cut the plasmid and the gene.", "Earns the point for identifying restriction enzymes (and DNA ligase to join them, optional)."],
  ["Describe how gel electrophoresis separates DNA fragments.", "Earns the point for describing that DNA (negatively charged) moves toward the positive electrode through a gel; smaller fragments move farther."],
  ["Explain why bacteria can produce a human protein.", "Earns the point for explaining that the genetic code is universal, so bacterial ribosomes read the human gene's codons the same way. (If the answer mentions introns, it should say cDNA is used.)"]
]],
"7.1": ["Darwin observed that finches on different Galápagos islands had different beak shapes.", [
  ["Identify one condition required for natural selection.", "Earns the point for identifying heritable variation, overproduction of offspring, competition/struggle for survival, or differential reproductive success."],
  ["Describe how natural selection could produce different beak shapes on different islands.", "Earns the point for describing that each island had different food sources; birds with beaks suited to the local food survived and reproduced more, so beak shapes changed over generations."],
  ["Explain why individuals do not evolve, but populations do.", "Earns the point for explaining that an individual's genes don't change; evolution is a change in allele frequencies in a population over generations."]
]],
"7.2": ["Peppered moths in England shifted from mostly light-colored to mostly dark-colored during the Industrial Revolution, when tree bark darkened from soot.", [
  ["Identify the selective pressure acting on the moths.", "Earns the point for identifying predation by birds (camouflage on the bark)."],
  ["Describe how the frequency of dark moths changed and why.", "Earns the point for describing that dark moths increased because they were better camouflaged on dark bark, survived predation, and reproduced more."],
  ["Predict what happened after pollution controls cleaned the trees, and explain.", "Earns the point for predicting light moths increased again because they became better camouflaged on clean bark."]
]],
"7.3": ["Dog breeds such as Chihuahuas and Great Danes were produced from wolves by humans.", [
  ["Identify the process that produced dog breeds.", "Earns the point for identifying artificial selection (selective breeding)."],
  ["Describe one difference between artificial and natural selection.", "Earns the point for describing that humans choose which traits are passed on in artificial selection, while the environment determines survival and reproduction in natural selection."],
  ["Explain one risk of intense artificial selection in dog breeds.", "Earns the point for explaining reduced genetic diversity/inbreeding leading to more inherited diseases or vulnerability."]
]],
"7.4": ["A small group of 20 birds is blown to an island. Their descendants have different allele frequencies than the mainland population.", [
  ["Identify the evolutionary mechanism illustrated.", "Earns the point for identifying genetic drift, specifically the founder effect."],
  ["Describe why genetic drift has a greater effect on small populations.", "Earns the point for describing that chance events can change allele frequencies a lot when few individuals are present; alleles can be lost or fixed quickly."],
  ["Explain how gene flow could reduce differences between the island and mainland populations.", "Earns the point for explaining that migration between populations moves alleles, making allele frequencies more similar."]
]],
"7.5": ["In a population of 1,000 flowers, 90 have white flowers (recessive, aa). Assume Hardy-Weinberg equilibrium.", [
  ["Calculate q, the frequency of the recessive allele.", "Earns the point for q = 0.3 (q² = 0.09)."],
  ["Calculate the expected number of heterozygous flowers.", "Earns the point for 420 (2pq = 2 × 0.7 × 0.3 = 0.42; 0.42 × 1,000). Accept 0.42 if clearly stated as frequency AND number given or implied."],
  ["Identify one condition required for Hardy-Weinberg equilibrium.", "Earns the point for identifying one: no mutations, random mating, no natural selection, large population (no genetic drift), no gene flow."]
]],
"7.6": ["Human arms, whale flippers, and bat wings share the same pattern of bones.", [
  ["Identify the term for these structures.", "Earns the point for identifying homologous structures."],
  ["Describe what homologous structures suggest about these organisms.", "Earns the point for describing that they suggest common ancestry: inherited from a shared ancestor and modified for different functions."],
  ["Explain how molecular evidence can support evolutionary relationships.", "Earns the point for explaining that more closely related species share more similar DNA or protein (amino acid) sequences because they diverged more recently."]
]],
"7.7": ["All eukaryotes share membrane-bound organelles, linear chromosomes, and introns in genes.", [
  ["Describe what these shared features suggest.", "Earns the point for describing that they suggest all eukaryotes descended from a common ancestor."],
  ["Identify one feature shared by all living organisms.", "Earns the point for identifying DNA as genetic material, the universal genetic code, ribosomes, plasma membranes, ATP, or core metabolic pathways like glycolysis."],
  ["Explain why a feature shared by all organisms is evidence of common ancestry.", "Earns the point for explaining that it's unlikely such a specific feature evolved independently in every lineage; it was inherited from a single ancestor."]
]],
"7.8": ["Bacteria resistant to antibiotics are increasing. Some insect populations have evolved resistance to pesticides.", [
  ["Describe how antibiotic resistance increases in a bacterial population.", "Earns the point for describing that antibiotics kill susceptible bacteria; resistant ones (existing mutations) survive and reproduce, so resistance increases."],
  ["Explain why finishing a full course of antibiotics is recommended.", "Earns the point for explaining that stopping early may leave the most resistant bacteria alive to multiply and spread."],
  ["Explain why evolution happens quickly in bacteria.", "Earns the point for explaining that bacteria have short generation times and large populations, and can share genes (horizontal gene transfer), so beneficial mutations spread quickly."]
]],
"7.9": ["A cladogram shows lampreys branching first, then sharks, then frogs, then lizards and mammals.", [
  ["Identify which organism is the outgroup.", "Earns the point for identifying the lamprey."],
  ["Describe what a shared derived character is.", "Earns the point for describing a trait that evolved in a common ancestor and is shared by its descendants, but not by earlier-branching groups (e.g., jaws, lungs, amnion)."],
  ["Explain which two organisms are most closely related and how the cladogram shows this.", "Earns the point for explaining that lizards and mammals are most closely related because they share the most recent common ancestor (last branching point)."]
]],
"7.10": ["Two populations of squirrels on opposite rims of the Grand Canyon can no longer interbreed.", [
  ["Identify the type of speciation shown.", "Earns the point for identifying allopatric speciation (geographic isolation)."],
  ["Describe one prezygotic reproductive barrier.", "Earns the point for describing a barrier: habitat, temporal, behavioral, mechanical, or gametic isolation, with a brief description."],
  ["Explain how geographic isolation can lead to speciation.", "Earns the point for explaining that separated populations have no gene flow; mutation, drift, and different selection change allele frequencies independently until they can't interbreed."]
]],
"7.11": ["Cheetahs have very low genetic diversity. A disease killed many cheetahs in one population.", [
  ["Describe why low genetic diversity is a risk.", "Earns the point for describing that the population is less likely to have individuals with traits to survive new diseases or environmental changes."],
  ["Explain how a bottleneck event can reduce genetic diversity.", "Earns the point for explaining that a drastic reduction in population size leaves only a few individuals whose alleles represent a small, random sample of the original gene pool."],
  ["Describe one way conservationists could increase genetic diversity in a population.", "Earns the point for describing moving individuals from other populations (gene flow), captive breeding with unrelated individuals, or protecting habitat to increase population size."]
]],
"7.12": ["In the Miller-Urey experiment, a mixture of gases and electric sparks produced amino acids.", [
  ["Describe what the Miller-Urey experiment showed.", "Earns the point for describing that organic molecules (amino acids) can form from inorganic molecules under conditions thought to mimic early Earth."],
  ["Describe the RNA world hypothesis.", "Earns the point for describing that RNA was likely the first genetic material because it can store information and act as a catalyst (ribozymes)."],
  ["Explain one piece of evidence supporting the RNA world hypothesis.", "Earns the point for explaining that ribozymes can catalyze reactions (including in ribosomes, where rRNA catalyzes peptide bonds), showing RNA can do both jobs."]
]],
"8.1": ["Birds migrate south as day length shortens. Plants bend toward light.", [
  ["Identify the type of plant response when plants bend toward light.", "Earns the point for identifying phototropism."],
  ["Describe how day length can trigger migration.", "Earns the point for describing that birds detect changes in photoperiod, which triggers hormonal changes leading to migratory behavior."],
  ["Explain how responding to environmental cues increases fitness.", "Earns the point for explaining that responding appropriately (e.g., migrating before winter, reaching light for photosynthesis) improves survival and reproduction."]
]],
"8.2": ["In a grassland, grass has 10,000 kcal of energy. Grasshoppers eat the grass, and mice eat grasshoppers.", [
  ["Calculate the energy available to mice, assuming 10% transfer efficiency.", "Earns the point for 100 kcal (10,000 → 1,000 → 100)."],
  ["Describe why energy transfer between trophic levels is inefficient.", "Earns the point for describing that most energy is lost as heat from cellular respiration or not consumed/digested."],
  ["Explain why food chains rarely have more than four or five trophic levels.", "Earns the point for explaining that so little energy remains at higher levels that it can't support another population."]
]],
"8.3": ["A population of deer grows quickly and then levels off at about 500 individuals.", [
  ["Identify the growth model shown.", "Earns the point for identifying logistic growth."],
  ["Describe what the carrying capacity represents.", "Earns the point for describing the maximum population size the environment can sustain given resources."],
  ["Explain why the population's growth rate slows as it approaches 500.", "Earns the point for explaining that resources become limited and competition increases, so birth rates fall and/or death rates rise."]
]],
"8.4": ["In a crowded population of rabbits, disease spreads quickly and food runs out. A drought kills rabbits regardless of population size.", [
  ["Identify one density-dependent limiting factor.", "Earns the point for identifying disease, competition for food, predation, or waste accumulation."],
  ["Identify the drought as density-dependent or density-independent and justify.", "Earns the point for identifying density-independent because it affects the population regardless of its size."],
  ["Explain why disease is density-dependent.", "Earns the point for explaining that at higher density, individuals contact each other more often, so disease spreads faster."]
]],
"8.5": ["Clownfish live among sea anemones, gaining protection, while cleaning the anemone. Tapeworms live in the intestines of mammals.", [
  ["Identify the type of relationship between clownfish and anemones.", "Earns the point for identifying mutualism."],
  ["Identify the relationship between tapeworms and their hosts.", "Earns the point for identifying parasitism."],
  ["Explain the competitive exclusion principle.", "Earns the point for explaining that two species competing for the exact same limited resources can't coexist; one will outcompete and eliminate the other, or they will partition resources."]
]],
"8.6": ["Sea otters eat sea urchins, which graze on kelp. When otters were hunted, urchins increased and kelp forests disappeared.", [
  ["Identify the role of sea otters in this ecosystem.", "Earns the point for identifying keystone species."],
  ["Describe how removing otters affected the kelp forest.", "Earns the point for describing that urchin populations grew without predators and overgrazed kelp."],
  ["Explain why ecosystems with higher biodiversity are often more resilient.", "Earns the point for explaining that more species means more roles are covered; if one species declines, others can fill its role, so the ecosystem recovers from disturbance better."]
]],
"8.7": ["Zebra mussels, an invasive species, spread through the Great Lakes, outcompeting native mussels.", [
  ["Define invasive species.", "Earns the point for defining a non-native species introduced to an area that spreads and harms native species or ecosystems."],
  ["Describe one reason invasive species are often successful.", "Earns the point for describing a reason: lack of natural predators, parasites, or diseases; high reproductive rates; broad diet/habitat."],
  ["Explain one human activity that disrupts ecosystems, and describe its effect.", "Earns the point for explaining a human activity (habitat destruction, pollution, climate change, overharvesting, introducing species) and its effect on ecosystems or biodiversity."]
]]
};
