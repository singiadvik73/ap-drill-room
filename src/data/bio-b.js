// AP Biology — Units 5–8
AP_DATA.bio.units.push(
{ n: 5, name: "Heredity", weight: "8–11%", topics: [
  ["5.1", "Meiosis", [
    ["In humans (2n = 46), how many chromosomes are in each cell produced by meiosis?", "23", ["46", "92", "12"], "Meiosis halves the chromosome number to make haploid gametes."],
    ["Homologous chromosomes separate during", "anaphase I", ["anaphase II", "mitotic anaphase", "prophase II"], "Meiosis I separates homologs. Meiosis II separates sister chromatids, much like mitosis."],
    ["Which event occurs in meiosis but not in mitosis?", "Synapsis of homologous chromosomes", ["Separation of sister chromatids", "Formation of a spindle", "Breakdown of the nuclear envelope"], "Homologs pair up to form tetrads in prophase I."],
    ["A cell at the end of meiosis I is", "haploid, but each chromosome still has two sister chromatids", ["diploid with unreplicated chromosomes", "haploid with single-chromatid chromosomes", "tetraploid"], "Sister chromatids don't separate until meiosis II."],
    ["Meiosis produces", "four genetically distinct haploid cells", ["two identical diploid cells", "four identical diploid cells", "two genetically distinct diploid cells"], "Two divisions after one round of DNA replication, with genetic reshuffling."]
  ]],
  ["5.2", "Meiosis and Genetic Diversity", [
    ["Crossing over occurs during", "prophase I, between non-sister chromatids of homologous chromosomes", ["anaphase II, between sister chromatids", "metaphase of mitosis", "S phase"], "Crossing over produces recombinant chromosomes."],
    ["Ignoring crossing over, how many different combinations of chromosomes can a human (n = 23) gamete receive through independent assortment?", "2²³ (about 8.4 million)", ["23", "46", "23²"], "Each homologous pair lines up independently at metaphase I, giving 2ⁿ combinations."],
    ["Random fertilization increases genetic variation because", "any of millions of possible sperm can fuse with any of millions of possible eggs", ["gametes are genetically identical", "fertilization doubles DNA content twice", "only one sperm type exists"], "(8.4 million)² is more than 70 trillion combinations, even before crossing over."],
    ["Failure of homologous chromosomes to separate in meiosis I is called", "nondisjunction", ["crossing over", "independent assortment", "synapsis"], "Nondisjunction produces gametes with extra or missing chromosomes."],
    ["Why is sexual reproduction advantageous in a changing environment?", "It produces offspring with new combinations of alleles, some of which may survive new conditions", ["It produces genetically identical offspring", "It is faster than asexual reproduction", "It eliminates mutations"], "Variation is the raw material for natural selection."]
  ]],
  ["5.3", "Mendelian Genetics", [
    ["Two heterozygous pea plants (Pp × Pp) are crossed. P (purple) is dominant to p (white). The expected phenotypic ratio is", "3 purple : 1 white", ["1 purple : 1 white", "1 : 2 : 1", "All purple"], "Genotypes are 1 PP : 2 Pp : 1 pp, so 3/4 show the dominant phenotype."],
    ["AaBb × AaBb (independent assortment). What fraction of offspring will be aabb?", "1/16", ["1/4", "9/16", "3/16"], "(1/4)(1/4) = 1/16, using the product rule."],
    ["AaBbCc × AaBbCc. What is the probability of an AABBCC offspring?", "1/64", ["1/8", "1/16", "1/27"], "(1/4)³ = 1/64."],
    ["A test cross is used to determine an individual's genotype by crossing it with", "a homozygous recessive individual", ["a homozygous dominant individual", "a heterozygous individual", "an identical clone"], "If any offspring show the recessive phenotype, the unknown parent is heterozygous."],
    ["In a chi-square test with 2 phenotypic classes, the degrees of freedom and critical value at p = 0.05 are", "df = 1, critical value 3.84", ["df = 2, critical value 5.99", "df = 1, critical value 5.99", "df = 2, critical value 3.84"], "df = number of categories − 1. If χ² > 3.84, reject the null hypothesis."],
    ["Two unaffected parents have an affected child. The trait is most likely", "autosomal recessive, with both parents heterozygous carriers", ["autosomal dominant", "Y-linked", "caused by mitochondrial DNA from the father"], "A recessive trait can skip generations when carriers have children together."]
  ]],
  ["5.4", "Non-Mendelian Genetics", [
    ["Crossing red and white snapdragons produces pink offspring. Crossing two pinks gives 1 red : 2 pink : 1 white. This is", "incomplete dominance", ["codominance", "sex linkage", "epistasis"], "The heterozygote shows an intermediate phenotype."],
    ["A person with type AB blood expresses both A and B antigens. This is", "codominance", ["incomplete dominance", "polygenic inheritance", "linkage"], "Both alleles are fully expressed in the heterozygote."],
    ["A carrier woman (XᴮXᵇ) has children with a man with normal color vision (XᴮY). What fraction of their sons are expected to be color-blind?", "1/2", ["1/4", "0", "All"], "Sons get their X from their mother, and she passes Xᵇ half the time."],
    ["Genes A and B show 12% recombinant offspring. This suggests they are", "linked, about 12 map units apart on the same chromosome", ["on different chromosomes", "the same gene", "assorting independently"], "Unlinked genes produce about 50% recombinants. Recombination frequency estimates distance."],
    ["A disease caused by a mitochondrial DNA mutation is passed", "from the mother to all of her children", ["only from father to sons", "equally from both parents", "only to daughters"], "Mitochondria are inherited through the egg's cytoplasm."],
    ["Human height shows continuous variation in a bell-shaped distribution. This is most consistent with", "polygenic inheritance", ["a single gene with complete dominance", "codominance of two alleles", "Y-linked inheritance"], "Many genes, plus the environment, each contribute a small effect."]
  ]],
  ["5.5", "Environmental Effects on Phenotype", [
    ["Hydrangeas with the same genotype produce blue flowers in acidic soil and pink flowers in basic soil. This shows", "the environment can affect how a genotype is expressed", ["soil pH changes the plant's DNA", "flower color is sex-linked", "the plants are different species"], "This is phenotypic plasticity."],
    ["Himalayan rabbits have dark fur on their ears, nose, and feet. The best explanation is", "a temperature-sensitive enzyme for pigment that works only in cooler body regions", ["those regions carry different genes", "mutations happen only in the extremities", "the dark fur is caused by dirt"], "Same genes, different expression depending on temperature."],
    ["People with phenylketonuria (PKU) can develop normally if they follow a low-phenylalanine diet. This shows", "a genetic disorder's phenotype can be modified by the environment", ["PKU is caused by diet", "the diet repairs the mutated gene", "PKU is not inherited"], "Genotype sets the possibilities. Environment affects the outcome."],
    ["In many turtle species, the incubation temperature of eggs determines the sex of the hatchlings. This is an example of", "environmental influence on phenotype", ["X-linked inheritance", "nondisjunction", "incomplete dominance"], "Temperature-dependent sex determination."]
  ]],
  ["5.6", "Chromosomal Inheritance", [
    ["Down syndrome most commonly results from", "nondisjunction leading to three copies of chromosome 21", ["a point mutation on chromosome 21", "a missing X chromosome", "crossing over between X and Y"], "Trisomy 21 is a type of aneuploidy."],
    ["A person with Klinefelter syndrome has which karyotype?", "47, XXY", ["45, X", "47, XYY", "46, XX"], "An extra X in a male. Turner syndrome is 45, X."],
    ["Thomas Morgan's fruit fly experiments with white eyes provided evidence that", "genes are located on chromosomes (the chromosomal theory of inheritance)", ["DNA is the genetic material", "genes blend together", "acquired traits are inherited"], "The inheritance pattern of white eyes followed the X chromosome."],
    ["A karyotype can be used to detect", "abnormal chromosome number or large structural changes", ["single-base mutations", "gene expression levels", "the sequence of a gene"], "Karyotypes show whole chromosomes, not DNA sequences."],
    ["Why are X-linked recessive disorders more common in males?", "Males have only one X, so a single recessive allele is expressed", ["Males have two X chromosomes", "The Y chromosome carries the dominant allele", "Females cannot inherit X-linked alleles"], "Males are hemizygous for X-linked genes."]
  ]]
]},
{ n: 6, name: "Gene Expression and Regulation", weight: "12–16%", topics: [
  ["6.1", "DNA and RNA Structure", [
    ["Hershey and Chase used ³²P and ³⁵S to label phage. They found ³²P inside infected bacteria, which showed that", "DNA, not protein, is the genetic material", ["protein is the genetic material", "RNA is the genetic material of all organisms", "bacteria have no DNA"], "Phosphorus labels DNA and sulfur labels protein. Only DNA entered the bacterial cells."],
    ["Compared with eukaryotic chromosomes, a typical prokaryotic chromosome is", "circular and not wrapped around histones in the same way", ["linear with telomeres", "enclosed in a nucleus", "made of RNA"], "Prokaryotes usually have one circular chromosome, and many also carry plasmids."],
    ["Plasmids are", "small, circular DNA molecules separate from the main chromosome", ["membrane-bound organelles", "RNA molecules used in translation", "proteins that package DNA"], "Plasmids often carry genes such as antibiotic resistance and are used in biotechnology."],
    ["In eukaryotes, DNA is packaged by wrapping around", "histone proteins, forming nucleosomes", ["ribosomes", "tRNA", "microtubules"], "How tightly DNA is packed affects whether genes can be accessed."],
    ["Griffith found that heat-killed virulent bacteria could make harmless bacteria virulent. This process is called", "transformation", ["transduction", "conjugation", "translation"], "The harmless bacteria took up genetic material from the killed cells."]
  ]],
  ["6.2", "Replication", [
    ["Meselson and Stahl grew E. coli in ¹⁵N, then switched them to ¹⁴N. After two rounds of replication, the DNA would be", "half hybrid (¹⁵N/¹⁴N) and half light (¹⁴N/¹⁴N)", ["all hybrid", "all heavy", "one-quarter heavy, three-quarters light"], "This result supports semiconservative replication."],
    ["DNA polymerase can add nucleotides only to", "the 3′ end of an existing strand", ["the 5′ end of an existing strand", "either end", "RNA strands only"], "That's why new DNA is always synthesized 5′→3′."],
    ["Okazaki fragments are formed on the", "lagging strand, because it is made discontinuously away from the replication fork", ["leading strand", "template strand only", "mRNA"], "The lagging strand runs the opposite way from fork movement."],
    ["Which enzyme unwinds the double helix at the replication fork?", "Helicase", ["Ligase", "Primase", "Topoisomerase"], "Helicase breaks the hydrogen bonds between bases."],
    ["DNA ligase", "joins Okazaki fragments by forming phosphodiester bonds", ["unwinds DNA", "lays down RNA primers", "proofreads mismatched bases"], "Ligase seals the nicks in the sugar-phosphate backbone."],
    ["DNA polymerase needs a primer because it cannot start a new strand. The primer is made by", "primase, and it is made of RNA", ["ligase, and it is made of DNA", "helicase, and it is made of protein", "topoisomerase, and it is made of DNA"], "The RNA primer is later replaced with DNA."]
  ]],
  ["6.3", "Transcription and RNA Processing", [
    ["A DNA template strand reads 3′-TAC GGA TTC-5′. What is the mRNA sequence?", "5′-AUG CCU AAG-3′", ["5′-UAC GGA UUC-3′", "5′-ATG CCT AAG-3′", "3′-AUG CCU AAG-5′"], "mRNA is complementary and antiparallel to the template, with U in place of T."],
    ["Which modifications happen to eukaryotic pre-mRNA before it leaves the nucleus?", "Addition of a 5′ cap and a poly-A tail, and removal of introns", ["Removal of exons and addition of a 3′ cap", "Replacement of uracil with thymine", "Addition of amino acids"], "Processing protects the mRNA, helps it export, and helps ribosomes recognize it."],
    ["Alternative splicing allows", "one gene to code for multiple different proteins", ["one protein to be coded by many genes", "introns to be translated", "DNA to be copied into RNA faster"], "Different combinations of exons are kept in the mature mRNA."],
    ["RNA polymerase binds to a region of DNA called the", "promoter", ["terminator codon", "operator only", "anticodon"], "In eukaryotes, transcription factors help RNA polymerase bind the promoter."],
    ["During transcription, RNA is synthesized in which direction?", "5′ to 3′", ["3′ to 5′", "Both directions at once", "N- to C-terminus"], "RNA polymerase adds nucleotides to the 3′ end."]
  ]],
  ["6.4", "Translation", [
    ["The mRNA codon 5′-AUG-3′ pairs with which tRNA anticodon?", "3′-UAC-5′", ["5′-UAC-3′", "3′-TAC-5′", "3′-AUG-5′"], "Codon and anticodon are complementary and antiparallel."],
    ["The fact that almost all organisms use the same genetic code is evidence of", "common ancestry", ["convergent evolution", "horizontal gene transfer only", "spontaneous generation"], "The shared code points to a single origin."],
    ["Several codons can code for the same amino acid. This is called", "redundancy (degeneracy) of the genetic code", ["ambiguity", "universality", "frameshifting"], "Redundancy is why many single-base substitutions are silent."],
    ["In prokaryotes, translation can begin before transcription ends because", "prokaryotes have no nuclear envelope separating the two processes", ["prokaryotic mRNA has introns", "prokaryotes lack ribosomes", "prokaryotic DNA is single-stranded"], "Transcription and translation are coupled in the cytoplasm."],
    ["Translation ends when", "a stop codon enters the A site and a release factor binds", ["the ribosome reaches the 5′ cap", "a tRNA carrying methionine enters", "the poly-A tail is translated"], "The stop codons are UAA, UAG, and UGA."],
    ["Retroviruses such as HIV use reverse transcriptase to", "make DNA from an RNA template", ["make RNA from a DNA template", "make protein from DNA directly", "make RNA from protein"], "The viral DNA can then be integrated into the host genome."]
  ]],
  ["6.5", "Regulation of Gene Expression", [
    ["In the lac operon, when lactose is present,", "allolactose binds the repressor, releasing it from the operator so genes are transcribed", ["the repressor binds more tightly to the operator", "the genes are permanently deleted", "RNA polymerase is destroyed"], "The lac operon is inducible and turns on when lactose is available."],
    ["The trp operon is a repressible operon, meaning", "high tryptophan activates the repressor and turns the operon off", ["tryptophan induces transcription", "it is always off", "it has no repressor"], "The cell stops making tryptophan when it already has plenty."],
    ["Histone acetylation generally", "loosens chromatin and increases transcription", ["condenses chromatin and silences genes", "changes the DNA sequence", "stops translation"], "Acetyl groups neutralize histone charges, so DNA is held less tightly."],
    ["DNA methylation of a gene's promoter usually", "reduces transcription of that gene", ["increases transcription", "causes a frameshift mutation", "adds introns"], "Methylation is an epigenetic mark that can be inherited through cell divisions."],
    ["MicroRNAs (miRNAs) regulate gene expression by", "binding complementary mRNA and blocking translation or causing mRNA degradation", ["adding amino acids to proteins", "binding promoters to start transcription", "replicating DNA"], "This is post-transcriptional regulation."],
    ["Enhancers are DNA regions that", "bind activator proteins that increase transcription, even from far away", ["code for enzymes", "are always next to the start codon", "only exist in prokaryotes"], "DNA bending brings activators into contact with the transcription machinery."]
  ]],
  ["6.6", "Gene Expression and Cell Specialization", [
    ["A liver cell and a nerve cell from the same person differ in structure and function mainly because they", "express different sets of genes", ["contain different genes", "have different numbers of chromosomes", "use different genetic codes"], "Almost all somatic cells have the same genome but regulate it differently."],
    ["A specific combination of transcription factors in a cell determines", "which genes are expressed, which helps define the cell type", ["the DNA sequence of the cell", "the number of mitochondria", "the genetic code"], "Combinatorial control allows many cell types to develop."],
    ["Homeotic (Hox) genes are important in development because they", "control the body plan by regulating other genes", ["make structural proteins in muscle", "replicate DNA", "produce ATP"], "Mutations in Hox genes can cause body parts to grow in the wrong places."],
    ["Stem cells differ from differentiated cells in that stem cells", "can still give rise to multiple cell types", ["have fewer genes", "cannot divide", "have already committed to one fate"], "As cells differentiate, more genes become permanently silenced."]
  ]],
  ["6.7", "Mutations", [
    ["A single-base substitution changes a codon from UAC (Tyr) to UAG (stop). This is a", "nonsense mutation", ["silent mutation", "missense mutation", "frameshift mutation"], "An early stop codon produces a shortened, usually nonfunctional protein."],
    ["Which mutation is most likely to severely disrupt a protein?", "Insertion of one nucleotide near the start of the coding sequence", ["A substitution in the third base of a codon that doesn't change the amino acid", "Deletion of three nucleotides near the end of the gene", "A substitution in an intron"], "A frameshift near the beginning changes every codon after it."],
    ["Bacteria can take up DNA from their environment. This form of horizontal gene transfer is", "transformation", ["conjugation", "transduction", "meiosis"], "Conjugation uses a pilus. Transduction uses a virus."],
    ["Antibiotic resistance genes often spread between bacterial species through", "horizontal gene transfer of plasmids", ["sexual reproduction", "meiosis", "vertical transmission only"], "Conjugation can pass resistance plasmids between species."],
    ["A mutation that changes one amino acid to another with similar chemical properties is most likely to have", "little or no effect on protein function", ["a severe effect every time", "a frameshift effect", "a nonsense effect"], "Conservative substitutions often keep the protein's shape."],
    ["Why are mutations important for evolution?", "They are the original source of new alleles and genetic variation", ["They always increase fitness", "They are directed by the environment", "They occur only in response to need"], "Mutations are random. Selection then acts on the variation they create."]
  ]],
  ["6.8", "Biotechnology", [
    ["In gel electrophoresis, DNA fragments move toward the positive electrode because", "DNA's phosphate groups are negatively charged", ["DNA is positively charged", "the gel pulls on nitrogen bases", "DNA is nonpolar"], "Smaller fragments travel farther through the gel."],
    ["A gel shows three bands: 500 bp, 1,200 bp, and 3,000 bp. Which band traveled farthest from the wells?", "500 bp", ["1,200 bp", "3,000 bp", "They all moved the same distance"], "Short fragments move through the gel pores faster."],
    ["The three steps of each PCR cycle, in order, are", "denaturation (~95 °C), annealing of primers (~55 °C), extension by Taq polymerase (~72 °C)", ["annealing, denaturation, extension", "extension, denaturation, annealing", "transcription, translation, replication"], "Each cycle roughly doubles the target DNA."],
    ["Starting with one DNA molecule, how many copies does PCR produce after 10 cycles, ideally?", "1,024", ["20", "100", "10"], "2¹⁰ = 1,024."],
    ["Restriction enzymes are useful in making recombinant DNA because they", "cut DNA at specific sequences, often leaving sticky ends that can pair with other DNA cut by the same enzyme", ["join DNA fragments", "copy DNA", "translate mRNA"], "Ligase then seals the joined fragments."],
    ["After inserting a plasmid with an ampicillin-resistance gene into bacteria, scientists grow them on ampicillin plates. The purpose is to", "select for bacteria that took up the plasmid", ["kill bacteria that took up the plasmid", "increase the mutation rate", "cause conjugation"], "Only transformed cells survive on the antibiotic."]
  ]]
]},
{ n: 7, name: "Natural Selection", weight: "13–20%", topics: [
  ["7.1", "Introduction to Natural Selection", [
    ["Which statement best describes natural selection?", "Individuals with heritable traits suited to their environment tend to survive and reproduce more", ["Individuals change their traits to meet their needs", "All individuals in a population reproduce equally", "Traits acquired during life are passed on"], "Selection acts on existing heritable variation and changes allele frequencies over generations."],
    ["The smallest unit that can evolve is", "a population", ["an individual", "a cell", "a gene"], "Individuals are selected, but only populations evolve."],
    ["Darwin's reasoning about natural selection was influenced by the observation that", "populations produce more offspring than resources can support", ["all offspring survive", "individuals can change species during their lifetime", "the environment never changes"], "Competition for limited resources leads to differential survival."],
    ["Evolutionary fitness is measured by", "an individual's reproductive success relative to others in the population", ["physical strength", "lifespan", "body size"], "Fitness means passing on genes to the next generation."]
  ]],
  ["7.2", "Natural Selection", [
    ["Human birth weights cluster around an intermediate value because very small and very large babies have lower survival. This is", "stabilizing selection", ["directional selection", "disruptive selection", "genetic drift"], "Selection favors the middle of the range and reduces variation."],
    ["After a drought, Galápagos finches with deeper beaks survived better because they could crack larger, harder seeds. This is", "directional selection", ["stabilizing selection", "disruptive selection", "sexual selection"], "The population's average shifted toward one extreme."],
    ["In a population, both small and large seed-eating birds survive better than medium-sized ones, because only small and large seeds are available. This is", "disruptive selection", ["stabilizing selection", "directional selection", "gene flow"], "Selection favors both extremes. This can lead to speciation."],
    ["During the Industrial Revolution, dark peppered moths increased in soot-covered areas. This occurred because", "dark moths were less visible to predators on darkened trees and survived to reproduce more", ["light moths turned dark in response to soot", "soot caused mutations for dark color", "birds preferred dark moths"], "The environment selected among variation that already existed."],
    ["Male peacocks have elaborate tails that attract females but make them easier for predators to catch. This trait is maintained by", "sexual selection", ["stabilizing selection for survival", "genetic drift", "artificial selection"], "Mating success can outweigh survival costs."],
    ["Which is required for natural selection to change a population?", "Heritable variation in traits that affect reproductive success", ["Mutations that arise because the organism needs them", "An unchanging environment", "Identical individuals"], "Without heritable variation, there's nothing for selection to act on."]
  ]],
  ["7.3", "Artificial Selection", [
    ["Broccoli, cabbage, kale, and cauliflower all came from wild mustard. This is an example of", "artificial selection", ["natural selection", "genetic drift", "gene flow"], "Humans selected plants with different traits to breed."],
    ["Artificial selection is similar to natural selection because both", "act on existing heritable variation and change allele frequencies", ["are directed by humans", "create new mutations on demand", "always increase fitness in the wild"], "The difference is who or what is doing the selecting."],
    ["Many dog breeds have health problems, such as hip dysplasia. This is best explained by", "artificial selection for appearance traits, which reduced genetic diversity and increased harmful alleles", ["natural selection for disease", "high rates of gene flow", "mutations caused by domestication"], "Selecting for one trait can bring along linked harmful traits and lead to inbreeding."],
    ["Dairy cattle bred for high milk production over many generations illustrate that", "selection can change a population's traits substantially over time", ["acquired traits are inherited", "variation is not heritable", "selection only works in nature"], "The same process drives natural selection over longer periods."]
  ]],
  ["7.4", "Population Genetics", [
    ["A storm randomly kills most of a small beetle population, and the survivors' allele frequencies differ from the original population's. This is", "a bottleneck effect (genetic drift)", ["natural selection", "gene flow", "sexual selection"], "Chance events change allele frequencies, especially in small populations."],
    ["A few individuals colonize an island, and the new population has allele frequencies unlike the source population. This is", "the founder effect", ["the bottleneck effect", "gene flow", "stabilizing selection"], "For example, some genetic disorders are unusually common in isolated founder populations."],
    ["Genetic drift has the greatest effect on allele frequencies in", "small populations", ["large populations", "populations with high gene flow", "populations in Hardy-Weinberg equilibrium"], "Random sampling error is larger when the sample is small."],
    ["Pollen carried by wind between two plant populations tends to", "make the populations more genetically similar", ["make the populations more different", "cause a bottleneck", "reduce overall genetic variation within each population"], "Gene flow moves alleles between populations."],
    ["Cheetahs have very low genetic diversity. This is most likely due to", "a past population bottleneck", ["high gene flow", "high mutation rates", "disruptive selection"], "Low diversity leaves them vulnerable to disease and environmental change."]
  ]],
  ["7.5", "Hardy-Weinberg Equilibrium", [
    ["In a population in Hardy-Weinberg equilibrium, 16% of individuals show the recessive phenotype. What is the frequency of the dominant allele (p)?", "0.6", ["0.4", "0.84", "0.16"], "q² = 0.16, so q = 0.4 and p = 1 − 0.4 = 0.6."],
    ["Using the same population (q² = 0.16), what percentage of individuals are heterozygous?", "48%", ["24%", "36%", "84%"], "2pq = 2(0.6)(0.4) = 0.48."],
    ["A recessive disorder affects 1 in 10,000 people. About what fraction of the population are carriers?", "About 2% (≈ 1 in 50)", ["About 0.01%", "About 1%", "About 50%"], "q² = 0.0001, so q = 0.01 and p ≈ 0.99. 2pq ≈ 0.0198."],
    ["Which condition is required for Hardy-Weinberg equilibrium?", "Random mating", ["Small population size", "Natural selection", "Gene flow"], "The conditions are a large population, no mutation, no migration, random mating, and no selection."],
    ["If a population's allele frequencies change significantly over generations, you can conclude that", "the population is evolving because at least one Hardy-Weinberg condition is not met", ["the population is in equilibrium", "mutation is impossible", "the population is infinitely large"], "Hardy-Weinberg is a null model. A departure from it means evolution is happening."]
  ]],
  ["7.6", "Evidence of Evolution", [
    ["The forelimbs of humans, cats, whales, and bats have the same bone arrangement but different functions. These are", "homologous structures, evidence of common ancestry", ["analogous structures from convergent evolution", "vestigial structures", "unrelated structures"], "Similar structure from a shared ancestor, adapted for different uses."],
    ["The wings of bats and the wings of insects are", "analogous structures resulting from convergent evolution", ["homologous structures", "vestigial structures", "evidence that bats and insects share a recent ancestor"], "Similar function evolved independently."],
    ["Radiometric dating of fossils is useful because it", "estimates the absolute age of rock layers and the fossils in them", ["shows DNA sequences of extinct organisms", "determines an organism's diet", "tells only relative order"], "It uses the known half-lives of radioactive isotopes."],
    ["Comparing the amino acid sequence of cytochrome c among species shows that humans and chimps differ by 0 amino acids and humans and yeast by 44. This supports", "a more recent common ancestor for humans and chimps than for humans and yeast", ["that yeast evolved from humans", "that cytochrome c has no function", "that chimps and yeast are closely related"], "Fewer molecular differences mean a more recent divergence."],
    ["Whales have small pelvic bones that don't support hind limbs. These are", "vestigial structures", ["analogous structures", "new adaptations for swimming", "evidence against evolution"], "They are remnants of structures that were functional in ancestors."]
  ]],
  ["7.7", "Common Ancestry", [
    ["Which features are shared by all eukaryotes and support their common ancestry?", "Membrane-bound organelles, linear chromosomes, and genes containing introns", ["Cell walls made of peptidoglycan", "Chloroplasts", "Circular chromosomes with no histones"], "Shared complex features point to one common eukaryotic ancestor."],
    ["Which of the following is found in all living organisms, supporting a common ancestor?", "DNA as genetic material and a nearly universal genetic code", ["A nucleus", "Mitochondria", "Chlorophyll"], "Core molecular machinery is conserved across all life."],
    ["Similar metabolic pathways, such as glycolysis, found across all domains of life suggest", "these pathways evolved early and were kept from a common ancestor", ["each domain evolved glycolysis independently", "glycolysis is recent", "glycolysis requires oxygen"], "Glycolysis doesn't need O₂, which fits an ancient origin."],
    ["Ribosomal RNA sequences are used to compare distantly related organisms because rRNA", "is found in all organisms and changes slowly", ["changes very quickly", "is only found in eukaryotes", "has no function"], "Carl Woese used rRNA to identify the three domains."]
  ]],
  ["7.8", "Continuing Evolution", [
    ["A new flu vaccine is needed every year mostly because", "influenza viruses mutate rapidly, changing their surface proteins", ["humans lose their immune systems annually", "vaccines expire", "the virus reproduces sexually"], "Fast evolution lets the virus escape immunity from previous years."],
    ["HIV patients are given combinations of several drugs because", "it is less likely a virus will have mutations that make it resistant to all the drugs at once", ["each drug alone is always effective", "HIV cannot mutate", "combinations stop all mutation"], "Resistant variants are selected when only one drug is used."],
    ["Overuse of antibiotics has led to more antibiotic-resistant bacteria because", "antibiotics kill susceptible bacteria, leaving resistant ones to reproduce", ["antibiotics cause bacteria to develop resistance on purpose", "bacteria learn to avoid antibiotics", "resistant bacteria are created by the drug"], "Selection acts on pre-existing resistant variants."],
    ["Insects exposed to the same pesticide for many generations often become resistant. This shows that", "evolution is ongoing and can be observed in short time periods", ["evolution only happened in the distant past", "pesticides mutate genes on purpose", "the insects are learning"], "Organisms with short generation times evolve quickly."]
  ]],
  ["7.9", "Phylogeny", [
    ["On a phylogenetic tree, a node (branch point) represents", "the most recent common ancestor of the lineages that branch from it", ["an extinct species with no descendants", "the present day", "a mutation"], "Relatedness is determined by how recently two groups share an ancestor."],
    ["A cladogram shows ((A, B), C). Which statement is correct?", "A and B share a more recent common ancestor with each other than either does with C", ["A is more closely related to C than to B", "C is the ancestor of A and B", "A evolved from B"], "Groups that share the most recent node are most closely related."],
    ["An outgroup in a phylogenetic analysis is", "a group known to have diverged before the others being studied", ["the most recently evolved species", "the group with the most derived traits", "a group not related to the others at all"], "It helps identify ancestral versus derived characters."],
    ["Shared derived characters are used to build cladograms because they", "arose in a common ancestor and were passed to its descendants", ["are present in all organisms", "evolved independently many times", "are always vestigial"], "Ancestral traits don't separate groups. Derived traits do."],
    ["The principle of parsimony states that the best phylogenetic tree is the one that", "requires the fewest evolutionary changes", ["has the most branches", "includes the most species", "is based only on fossils"], "The simplest explanation is preferred."],
    ["Trees based on DNA sequences are often considered more reliable than trees based only on morphology because", "similar body forms can arise through convergent evolution, while DNA gives many independent characters", ["morphology never changes", "DNA does not mutate", "fossils cannot be dated"], "Molecular data reduces misleading analogies."]
  ]],
  ["7.10", "Speciation", [
    ["Two frog species live in the same pond but breed in different months. This is", "temporal isolation, a prezygotic barrier", ["habitat isolation", "hybrid sterility", "mechanical isolation"], "Timing differences prevent mating."],
    ["A horse and a donkey produce a sterile mule. This is", "a postzygotic barrier (reduced hybrid fertility)", ["a prezygotic barrier", "behavioral isolation", "gametic isolation"], "A hybrid forms but can't reproduce."],
    ["A canyon forms and splits a squirrel population in two. Over time, the two groups become separate species. This is", "allopatric speciation", ["sympatric speciation", "polyploidy", "gene flow"], "Geographic separation stops gene flow."],
    ["Sympatric speciation in plants often happens through", "polyploidy, where an error in cell division doubles the chromosome number", ["geographic separation", "gene flow", "stabilizing selection"], "Polyploid offspring can't produce fertile hybrids with the parent species."],
    ["The fossil record shows long periods of little change broken by short periods of rapid change. This pattern is called", "punctuated equilibrium", ["gradualism", "Hardy-Weinberg equilibrium", "convergent evolution"], "Gradualism predicts slow, steady change."],
    ["A single ancestral species rapidly diversifies into many species that fill different niches, like Hawaiian honeycreepers. This is", "adaptive radiation", ["convergent evolution", "genetic drift", "stabilizing selection"], "It often happens after colonizing new habitats or after mass extinctions."]
  ]],
  ["7.11", "Variations in Populations", [
    ["Why was the Irish potato famine so devastating?", "Most potatoes were genetically identical clones, so one pathogen could destroy the whole crop", ["Potatoes had high genetic diversity", "The pathogen only affected wild potatoes", "Potatoes reproduce sexually"], "Low genetic diversity makes a population vulnerable to disease."],
    ["Individuals heterozygous for the sickle-cell allele are more resistant to malaria. In malaria regions, this keeps the allele in the population through", "heterozygote advantage", ["directional selection against the allele", "genetic drift only", "gene flow only"], "A balancing mechanism keeps both alleles in the population."],
    ["A population with high genetic diversity is more likely to", "survive environmental changes because some individuals may have beneficial traits", ["go extinct", "have no mutations", "be in Hardy-Weinberg equilibrium permanently"], "Diversity increases the chance that some individuals can adapt."],
    ["Cavendish bananas are propagated as clones. Scientists worry about them because", "a single disease could wipe out the crop since they have almost no genetic variation", ["they reproduce too fast", "they have too much genetic variation", "they cannot be infected"], "This repeats the risk seen in the Irish potato famine."]
  ]],
  ["7.12", "Origins of Life on Earth", [
    ["The Miller-Urey experiment showed that", "organic molecules such as amino acids could form from inorganic molecules under conditions thought to resemble early Earth", ["life can form spontaneously from nonliving material in a few days", "DNA was the first genetic material", "the early atmosphere was rich in oxygen"], "Electric sparks in a mixture of gases produced amino acids."],
    ["The RNA world hypothesis proposes that RNA was the first genetic material because RNA", "can store information and also act as a catalyst (ribozyme)", ["is more stable than DNA", "cannot self-replicate", "is found only in viruses"], "It can do both jobs of DNA and protein."],
    ["Earth formed about 4.6 billion years ago. The earliest evidence of life dates to about", "3.5–3.9 billion years ago", ["500 million years ago", "10,000 years ago", "4.6 billion years ago"], "Stromatolites and chemical signatures give evidence of early microbial life."],
    ["Protocells formed from lipid vesicles would have been an important step toward life because they", "created an internal environment separate from the surroundings", ["contained mitochondria", "carried out photosynthesis", "had a nucleus"], "Compartments let chemical reactions concentrate and eventually be inherited."]
  ]]
]},
{ n: 8, name: "Ecology", weight: "10–15%", topics: [
  ["8.1", "Responses to the Environment", [
    ["A plant grows toward light because auxin builds up on its shaded side and causes cell elongation there. This is", "phototropism", ["photoperiodism", "gravitropism", "thigmotropism"], "Differential growth bends the shoot toward the light."],
    ["Honeybees perform a waggle dance to communicate the location of food. This is an example of", "communication behavior that increases fitness", ["a tropism", "kinesis only", "learned imprinting"], "Organisms exchange information to coordinate their behavior."],
    ["A woodlouse moves faster in dry areas and slower in humid ones, so it ends up spending more time in humid areas. This is", "kinesis", ["taxis", "phototropism", "migration"], "Kinesis is a change in the speed of movement in response to a stimulus, not in its direction."],
    ["A ground squirrel gives an alarm call that warns relatives but puts itself at risk. This behavior can be explained by", "kin selection, which increases the survival of shared genes", ["group selection only", "competition", "genetic drift"], "Helping relatives spreads copies of the helper's own alleles."],
    ["Many plants flower based on the length of night. This response is called", "photoperiodism", ["phototropism", "circadian rhythm only", "gravitropism"], "Phytochrome pigments detect day length."]
  ]],
  ["8.2", "Energy Flow Through Ecosystems", [
    ["Producers in an ecosystem capture 10,000 kcal. About how much energy reaches tertiary consumers?", "10 kcal", ["1,000 kcal", "100 kcal", "1 kcal"], "About 10% passes to each level: 10,000 → 1,000 → 100 → 10."],
    ["Why is only about 10% of energy transferred between trophic levels?", "Most energy is lost as heat from metabolism or is not consumed or absorbed", ["Energy is destroyed at each level", "Organisms store all energy as fat", "Producers keep all the energy"], "Energy flows through an ecosystem and is not recycled."],
    ["Compared with ectotherms, endotherms", "use more energy to maintain body temperature, so less energy goes to growth", ["use less energy", "don't need food", "get heat mainly from the environment"], "This is why mice need far more food per gram than lizards."],
    ["Net primary productivity (NPP) is", "gross primary productivity minus the energy producers use in respiration", ["total solar energy reaching Earth", "energy consumed by herbivores", "gross productivity plus respiration"], "NPP is the energy available to consumers."],
    ["Which biogeochemical cycle has no significant atmospheric component?", "Phosphorus cycle", ["Carbon cycle", "Nitrogen cycle", "Water cycle"], "Phosphorus cycles mainly through rocks, soil, water, and organisms."],
    ["Nitrogen-fixing bacteria convert", "atmospheric N₂ into ammonia (NH₃) that plants can use", ["ammonia into N₂", "nitrates into proteins directly", "CO₂ into glucose"], "Most organisms can't use N₂ directly."]
  ]],
  ["8.3", "Population Ecology", [
    ["A population of 400 grows exponentially with r = 0.05 per year. What is dN/dt?", "20 individuals per year", ["8,000 individuals per year", "400 individuals per year", "0.05 individuals per year"], "dN/dt = rN = 0.05 × 400 = 20."],
    ["A population has N = 1,000, rmax = 0.2, and K = 1,500. Using the logistic model, the growth rate is about", "67 individuals per time unit", ["200 individuals per time unit", "300 individuals per time unit", "0 individuals per time unit"], "dN/dt = rN(K − N)/K = 0.2 × 1,000 × (500/1,500) ≈ 66.7."],
    ["In logistic growth, the population grows fastest when N is", "half of the carrying capacity (K/2)", ["near zero", "equal to K", "greater than K"], "At K/2 there are many reproducing individuals and there is still room to grow."],
    ["A J-shaped growth curve indicates", "exponential growth with unlimited resources", ["logistic growth at carrying capacity", "a declining population", "a population at equilibrium"], "This is rarely sustained in nature."],
    ["An S-shaped (sigmoid) growth curve levels off because", "limited resources slow growth as the population approaches carrying capacity", ["the population stops reproducing completely", "birth rate increases", "immigration increases"], "Birth rate falls and death rate rises as N approaches K."]
  ]],
  ["8.4", "Effect of Density of Populations", [
    ["Which is a density-dependent limiting factor?", "Spread of an infectious disease", ["A hurricane", "A forest fire caused by lightning", "An unusually cold winter"], "Disease spreads more easily in dense populations."],
    ["A severe frost kills 80% of an insect population no matter how dense it is. The frost is a", "density-independent factor", ["density-dependent factor", "carrying capacity", "biotic factor"], "Its effect doesn't depend on population size."],
    ["As a deer population increases, the amount of food per individual decreases and birth rates drop. This shows", "density-dependent regulation through competition", ["density-independent regulation", "exponential growth", "mutualism"], "Intraspecific competition increases with density."],
    ["Snowshoe hare and lynx populations rise and fall in linked cycles. This pattern is best explained by", "predator-prey interactions acting as density-dependent factors", ["density-independent weather events alone", "mutualism", "commensalism"], "Changes in the number of prey drive changes in the number of predators, with a lag."]
  ]],
  ["8.5", "Community Ecology", [
    ["A community has three species with 5, 5, and 10 individuals. What is Simpson's diversity index (D = 1 − Σ(n/N)²)?", "0.625", ["0.375", "0.5", "0.75"], "N = 20. Σ(n/N)² = 0.0625 + 0.0625 + 0.25 = 0.375. 1 − 0.375 = 0.625."],
    ["Oxpeckers eat ticks off rhinos, and both species benefit. This relationship is", "mutualism", ["commensalism", "parasitism", "competition"], "In mutualism, both species benefit (+/+)."],
    ["Barnacles attach to whales, benefiting from transport while the whale is unaffected. This is", "commensalism", ["mutualism", "parasitism", "predation"], "In commensalism, one species benefits and the other is unaffected (+/0)."],
    ["Two species of warblers feed in different parts of the same tree. This is an example of", "resource partitioning, which reduces competition", ["competitive exclusion", "parasitism", "mutualism"], "Dividing resources lets similar species coexist."],
    ["The competitive exclusion principle states that", "two species cannot share exactly the same niche indefinitely in the same place", ["all species compete equally", "predators always eliminate prey", "mutualists always coexist"], "One species will outcompete the other unless their niches differ."],
    ["When sea otters were removed from kelp forests, sea urchin populations exploded and kelp forests collapsed. Sea otters are", "a keystone species", ["a producer", "an invasive species", "a decomposer"], "Their effect is large compared with their abundance. This is a trophic cascade."]
  ]],
  ["8.6", "Biodiversity", [
    ["Ecosystems with greater biodiversity tend to", "be more resilient and recover better from disturbances", ["be less stable", "have fewer species interactions", "recover more slowly from disturbances"], "Redundancy in roles buffers the ecosystem against losses."],
    ["Removing which organisms would most likely have the greatest effect on an ecosystem?", "Producers", ["A tertiary consumer that is rare", "One of many decomposer species", "A species with many close competitors"], "All energy enters the food web through producers."],
    ["Why does genetic diversity within a species matter for conservation?", "It increases the chance that some individuals can survive new diseases or environmental changes", ["It reduces reproductive rates", "It prevents natural selection", "It lowers fitness"], "Low genetic diversity makes species vulnerable."],
    ["Loss of a keystone species usually causes", "large changes in community structure and a decline in diversity", ["no change in the community", "an increase in all species", "only changes in abiotic factors"], "Keystone species hold community structure in place."]
  ]],
  ["8.7", "Disruptions to Ecosystems", [
    ["Fertilizer runoff into a lake causes algal blooms, then fish die-offs. The fish die mainly because", "decomposers use up dissolved oxygen as they break down dead algae", ["the algae are toxic to fish", "fertilizer poisons fish directly", "sunlight increases"], "This is eutrophication, which can create hypoxic 'dead zones.'"],
    ["Invasive species often spread rapidly because they", "lack natural predators, pathogens, or competitors in the new environment", ["have lower reproductive rates", "are always larger than native species", "cannot compete with native species"], "Examples include kudzu, zebra mussels, and cane toads."],
    ["DDT concentrations were much higher in eagles than in fish or plankton. This is", "biomagnification", ["eutrophication", "primary succession", "carrying capacity"], "Persistent toxins accumulate up the food chain."],
    ["Ecological succession on bare rock after a glacier retreats, starting with lichens, is", "primary succession", ["secondary succession", "eutrophication", "biomagnification"], "Secondary succession happens where soil remains, such as after a fire."],
    ["Rising global temperatures are causing some species' ranges to shift toward the poles. This is an example of", "a human-caused disruption changing species distributions", ["a density-dependent factor", "a keystone effect", "primary succession"], "Climate change alters habitats faster than many species can adapt."],
    ["Which human activity most directly reduces biodiversity worldwide?", "Habitat destruction", ["Planting native species", "Protecting wetlands", "Reducing pesticide use"], "Habitat loss is the leading cause of species decline."]
  ]]
]}
);
