// AP Psychology — Units 1–5 (2024 course framework). Question format: [stem, correct, [distractors], explanation, figure?]
window.AP_DATA = window.AP_DATA || {};
AP_DATA.psy = {
  id: "psy",
  name: "AP Psychology",
  short: "Psych",
  blurb: "The science of behavior and mental processes: the brain, cognition, development, learning, social behavior, personality, and health.",
  exam: "Exam: 75 MCQ (90 min) + 2 FRQ: article analysis and evidence-based question (70 min)",
  units: []
};
AP_DATA.psy.units.push(
{ n: 1, name: "Biological Bases of Behavior", weight: "15–25%", topics: [
  ["1.1", "Interaction of Heredity and Environment", [
    ["Identical twins raised in different homes have more similar personalities than fraternal twins raised together. This finding suggests that personality is", "influenced by heredity", ["determined only by environment", "unrelated to genes", "caused by birth order"], "Identical twins share nearly all their genes; similarity despite different homes points to a genetic influence."],
    ["Heritability refers to", "the proportion of variation in a trait among individuals in a population that can be attributed to genes", ["how much of one person's trait is caused by genes", "whether a trait is present at birth", "the number of genes involved in a trait"], "Heritability describes differences within a group, not a single individual."],
    ["Adoption studies help separate the effects of nature and nurture by comparing adopted children with", "both their biological and their adoptive parents", ["only their siblings", "children in other countries", "only their teachers"], "Similarity to biological parents suggests genes; similarity to adoptive parents suggests environment."],
    ["Evolutionary psychologists would most likely explain a widespread fear of snakes as", "a trait that helped ancestors survive and reproduce", ["a result of watching movies", "a learned response to punishment", "a sign of a disorder"], "Natural selection favors traits that aided survival."],
    ["Epigenetics studies how", "environmental factors can turn genes on or off without changing the DNA sequence", ["genes are copied during cell division", "traits are inherited only from mothers", "chromosomes are counted"], "Experiences such as stress or diet can affect gene expression."],
    ["A researcher finds that height has high heritability in a population. Which statement is true?", "Environment, such as nutrition, can still affect height", ["Height cannot be changed by the environment", "Every person's height is 90% genetic", "Height is not influenced by genes"], "High heritability does not mean environment has no effect."]
  ]],
  ["1.2", "Overview of the Nervous System", [
    ["The central nervous system consists of", "the brain and spinal cord", ["the brain and sensory nerves", "the somatic and autonomic systems", "all the nerves in the body"], "Everything else is the peripheral nervous system."],
    ["Which division of the nervous system prepares the body for \"fight or flight\"?", "Sympathetic", ["Parasympathetic", "Somatic", "Central"], "It speeds the heart rate, dilates the pupils, and slows digestion."],
    ["After a scare, your heart rate slows and digestion resumes. Which division is most active?", "Parasympathetic", ["Sympathetic", "Somatic", "Central"], "The parasympathetic division calms the body (\"rest and digest\")."],
    ["Voluntary movement of skeletal muscles is controlled by the", "somatic nervous system", ["autonomic nervous system", "parasympathetic nervous system", "endocrine system"], "The somatic system carries commands to muscles and sensory input from them."],
    ["A reflex, like pulling your hand from a hot stove, is fast because", "the spinal cord processes it before the signal reaches the brain", ["the brain reacts first", "it uses hormones", "it involves the parasympathetic system"], "Sensory, interneurons, and motor neurons in the spinal cord form a reflex arc."],
    ["The endocrine system differs from the nervous system because it", "communicates through hormones carried in the blood, which is slower", ["uses electrical signals only", "is part of the central nervous system", "has no effect on behavior"], "Hormones such as adrenaline travel through the bloodstream."]
  ]],
  ["1.3", "The Neuron and Neural Firing", [
    ["Which part of a neuron receives messages from other neurons?", "Dendrites", ["Axon terminals", "Myelin sheath", "Axon"], "Dendrites are branching fibers that receive incoming signals."],
    ["The graph shows the electrical charge inside a neuron during an action potential. What causes the rapid rise at point B?", "Sodium ions rushing into the neuron", ["Potassium ions rushing into the neuron", "Neurotransmitters leaving the neuron", "The myelin sheath breaking down"], "When the threshold is reached, Na⁺ channels open and positive ions flood in (depolarization).", { t: "line", title: "Membrane potential during an action potential", x: { min: 0, max: 5, ticks: [0, 1, 2, 3, 4, 5], label: "Time (ms)" }, y: { min: -90, max: 50, ticks: [-90, -70, -55, -30, 0, 30], label: "Membrane potential (mV)" }, series: [{ name: "Charge", pts: [[0, -70], [0.8, -70], [1, -55], [1.2, 0], [1.4, 35], [1.8, 0], [2.2, -70], [2.6, -85], [3.5, -72], [5, -70]] }], marks: [{ x: 0.4, y: -70, l: "A" }, { x: 1.2, y: 0, l: "B", dx: -10 }, { x: 2.6, y: -85, l: "C", dy: 18 }] }],
    ["The all-or-none principle means that", "a neuron either fires at full strength or not at all", ["stronger stimuli produce stronger action potentials", "all neurons fire at the same time", "neurons fire only when asleep"], "Intensity is signaled by firing more often, not by larger action potentials."],
    ["The myelin sheath", "speeds up the transmission of neural impulses", ["receives neurotransmitters", "produces hormones", "stops neurons from firing"], "Signals jump between gaps in the myelin."],
    ["Multiple sclerosis damages the myelin sheath. A likely symptom is", "slowed or disrupted communication between the brain and muscles", ["faster reflexes", "improved memory", "no change in movement"], "Without myelin, signals travel slowly or break down."],
    ["After neurotransmitters cross the synapse, reuptake is", "the reabsorption of excess neurotransmitter by the sending neuron", ["the release of neurotransmitter", "the firing of the receiving neuron", "the growth of new dendrites"], "Reuptake ends the signal and recycles the chemical."]
  ]],
  ["1.4", "Influence of Drugs on Neural Firing", [
    ["A drug that mimics a neurotransmitter and activates its receptors is called", "an agonist", ["an antagonist", "a reuptake inhibitor only", "a hormone"], "Agonists produce effects similar to the natural neurotransmitter."],
    ["Selective serotonin reuptake inhibitors (SSRIs) relieve depression by", "blocking reuptake so serotonin stays in the synapse longer", ["destroying serotonin", "blocking serotonin receptors", "producing dopamine"], "More serotonin remains available to the receiving neuron."],
    ["Which is classified as a depressant?", "Alcohol", ["Caffeine", "Cocaine", "LSD"], "Depressants slow neural activity and body functions."],
    ["A person who needs larger and larger doses of a drug to feel the same effect has developed", "tolerance", ["withdrawal", "addiction only", "an agonist"], "The brain adapts to the drug's presence."],
    ["Uncomfortable symptoms after stopping a drug are called", "withdrawal", ["tolerance", "reuptake", "a placebo effect"], "Withdrawal shows the body has adapted to the drug."],
    ["Curare blocks acetylcholine receptors at muscles, causing paralysis. It acts as", "an antagonist", ["an agonist", "a stimulant", "a reuptake inhibitor"], "It prevents the neurotransmitter from binding and acting."]
  ]],
  ["1.5", "The Brain", [
    ["Damage to Broca's area would most likely cause difficulty", "producing speech", ["understanding speech", "seeing colors", "keeping balance"], "Broca's area, in the left frontal lobe, controls speech production."],
    ["Which brain structure is most involved in forming new explicit memories?", "Hippocampus", ["Cerebellum", "Medulla", "Occipital lobe"], "Patients with hippocampal damage, like H.M., can't form new long-term explicit memories."],
    ["The cerebellum is most involved in", "coordinating movement and balance", ["regulating hunger", "processing vision", "producing language"], "It also plays a role in procedural memory."],
    ["Which lobe contains the primary visual cortex?", "Occipital", ["Temporal", "Parietal", "Frontal"], "The occipital lobe is at the back of the brain."],
    ["The amygdala is most associated with", "emotion, especially fear and aggression", ["breathing", "hearing", "fine motor skills"], "It's part of the limbic system."],
    ["A researcher wants to see which brain areas are most active while someone reads. Which method is best?", "fMRI", ["EEG only", "Lesioning", "CT scan"], "fMRI shows brain activity by measuring blood flow; CT shows structure only."]
  ]],
  ["1.6", "Sleep", [
    ["During which sleep stage do most vivid dreams occur?", "REM sleep", ["NREM-1", "NREM-2", "NREM-3"], "REM (rapid eye movement) sleep is linked with vivid, story-like dreams."],
    ["Circadian rhythms are", "biological cycles that repeat about every 24 hours", ["90-minute sleep cycles", "dreams that recur", "brain waves during REM"], "They're regulated by the suprachiasmatic nucleus and influenced by light."],
    ["Sleep apnea is a disorder in which a person", "repeatedly stops breathing during sleep", ["falls asleep suddenly during the day", "acts out dreams", "cannot fall asleep"], "Breathing pauses cause frequent brief awakenings."],
    ["Narcolepsy is characterized by", "sudden, uncontrollable episodes of sleep, sometimes entering REM directly", ["difficulty falling asleep", "sleepwalking", "night terrors in children"], "People may slip into REM sleep at inappropriate times."],
    ["Deep NREM-3 sleep is marked by", "slow delta waves", ["alpha waves", "rapid eye movements", "sleep spindles only"], "Delta waves are large and slow; the sleeper is hard to wake."],
    ["The activation-synthesis theory proposes that dreams", "are the brain's attempt to make sense of random neural activity", ["reveal hidden desires", "help consolidate memories only", "are messages from the environment"], "The cortex weaves random brainstem signals into a story."]
  ]],
  ["1.7", "Sensation", [
    ["The minimum stimulation needed to detect a stimulus 50% of the time is the", "absolute threshold", ["difference threshold", "just-noticeable difference", "sensory adaptation"], "It's the lowest level at which a stimulus is detected half the time."],
    ["Weber's law states that", "the just-noticeable difference is a constant proportion of the original stimulus", ["all stimuli are detected equally", "thresholds are the same for everyone", "stronger stimuli are always noticed less"], "Example: 1 extra pound is noticed with 10 lb but not 100 lb."],
    ["After a few minutes in a room, you no longer notice the smell of paint. This is", "sensory adaptation", ["transduction", "the absolute threshold", "selective attention"], "Receptors respond less to an unchanging stimulus."],
    ["The rods in the retina are especially important for", "seeing in dim light", ["seeing color", "seeing fine detail", "hearing"], "Rods are sensitive to low light; cones handle color and detail."],
    ["Transduction is the process of", "converting physical energy into neural signals", ["sending signals to the thalamus", "interpreting sensations", "adapting to smells"], "Sensory receptors transduce light, sound waves, and pressure."],
    ["Damage to the hair cells of the cochlea causes", "sensorineural hearing loss", ["conduction hearing loss", "color blindness", "loss of balance only"], "Conduction hearing loss involves the eardrum or middle-ear bones."]
  ]]
]},
{ n: 2, name: "Cognition", weight: "15–25%", topics: [
  ["2.1", "Perception", [
    ["Recognizing a word even though some letters are blurry, because you know the language, is an example of", "top-down processing", ["bottom-up processing", "sensory adaptation", "transduction"], "Expectations and knowledge guide interpretation."],
    ["A perceptual set is", "a mental predisposition to perceive one thing and not another", ["the set of all sensory receptors", "a group of neurons", "a type of illusion"], "Expectations, culture, and emotions shape perception."],
    ["Which is a monocular depth cue?", "Linear perspective", ["Retinal disparity", "Convergence", "Binocular vision"], "Monocular cues work with one eye; parallel lines seeming to meet in the distance is linear perspective."],
    ["Failing to notice a person in a gorilla suit while counting basketball passes is an example of", "inattentional blindness", ["change blindness", "sensory adaptation", "the cocktail party effect"], "Focused attention can make us miss obvious stimuli."],
    ["Perceiving a door as a rectangle even when it's partly open and forms a trapezoid on the retina is", "shape constancy", ["size constancy", "closure", "figure-ground"], "We perceive familiar objects as having a constant shape."],
    ["The Gestalt principle of closure means we tend to", "fill in gaps to see complete, whole objects", ["group nearby items together", "group similar items together", "see continuous patterns"], "An incomplete circle is still seen as a circle."]
  ]],
  ["2.2", "Thinking, Problem-Solving, Judgments, and Decision-Making", [
    ["An algorithm differs from a heuristic because an algorithm", "is a step-by-step procedure that guarantees a solution", ["is a mental shortcut", "always works faster", "relies on intuition"], "Heuristics are faster but can lead to errors."],
    ["After seeing news reports of plane crashes, a person overestimates the chance of dying in one. This is the", "availability heuristic", ["representativeness heuristic", "confirmation bias", "framing effect"], "Easily recalled examples seem more common."],
    ["Only searching for information that supports what you already believe is", "confirmation bias", ["functional fixedness", "belief perseverance", "hindsight bias"], "We favor evidence that agrees with our views."],
    ["Being unable to think of using a coin as a screwdriver shows", "functional fixedness", ["mental set", "insight", "the availability heuristic"], "We see objects only in their usual functions."],
    ["A food labeled \"90% fat-free\" is preferred over one labeled \"10% fat.\" This shows the", "framing effect", ["anchoring effect", "gambler's fallacy", "sunk-cost fallacy"], "How information is presented changes decisions."],
    ["Divergent thinking is most important for", "creativity, generating many possible solutions", ["finding the single correct answer on a test", "memorizing facts", "reflexes"], "Convergent thinking narrows to one answer."]
  ]],
  ["2.3", "Introduction to Memory", [
    ["Which memory system holds information for only a second or two?", "Sensory memory", ["Short-term memory", "Long-term memory", "Implicit memory"], "Iconic (visual) memory lasts a fraction of a second; echoic lasts a few seconds."],
    ["The capacity of short-term memory is often described as about", "7 ± 2 items", ["1 item", "Unlimited items", "100 items"], "George Miller's classic estimate; chunking can stretch it."],
    ["Knowing how to ride a bike without thinking about it is an example of", "implicit (procedural) memory", ["episodic memory", "semantic memory", "sensory memory"], "Implicit memories are expressed through performance rather than conscious recall."],
    ["Remembering your 10th birthday party is an example of", "episodic memory", ["semantic memory", "procedural memory", "prospective memory"], "Episodic memories are personal experiences tied to a time and place."],
    ["Working memory differs from the older idea of short-term memory because it emphasizes", "active processing and manipulation of information", ["permanent storage", "unconscious memories", "sensory input only"], "It includes a central executive, phonological loop, and visuospatial sketchpad."],
    ["Knowing that Paris is the capital of France is", "semantic memory", ["episodic memory", "procedural memory", "iconic memory"], "Semantic memory is general knowledge and facts."]
  ]],
  ["2.4", "Encoding Memories", [
    ["Which encoding method usually leads to the best recall?", "Thinking about the meaning of information (deep processing)", ["Noticing the font a word is printed in", "Counting the letters in a word", "Repeating a word without thinking about it"], "Semantic encoding creates stronger memories than shallow processing."],
    ["Remembering a phone number by grouping it as 555-867-5309 is", "chunking", ["the method of loci", "maintenance rehearsal", "priming"], "Grouping items into meaningful units increases what STM can hold."],
    ["Relating new material to your own life improves memory because of the", "self-reference effect", ["serial position effect", "misinformation effect", "testing effect"], "Information connected to the self is processed more deeply."],
    ["Spacing study sessions over several days instead of cramming leads to", "better long-term retention (the spacing effect)", ["worse retention", "no difference", "more interference"], "Distributed practice beats massed practice."],
    ["The method of loci is a mnemonic that", "links items to be remembered with locations in a familiar place", ["uses the first letter of each word", "repeats items out loud", "groups items by color"], "It uses visual imagery and spatial memory."],
    ["Encoding that happens with little effort, such as remembering where you sat in class, is called", "automatic processing", ["effortful processing", "deep processing", "elaborative rehearsal"], "Space, time, and frequency are often encoded automatically."]
  ]],
  ["2.5", "Storing Memories", [
    ["Long-term potentiation (LTP) refers to", "the strengthening of synapses through repeated use", ["the loss of neurons with age", "a type of amnesia", "the capacity of sensory memory"], "LTP is thought to be a neural basis for learning and memory."],
    ["Patient H.M. could not form new explicit memories after surgery removed parts of his", "hippocampus", ["cerebellum", "occipital lobe", "amygdala only"], "He still learned new procedural skills, showing memory systems are separate."],
    ["The inability to form new memories after an injury is", "anterograde amnesia", ["retrograde amnesia", "infantile amnesia", "source amnesia"], "Retrograde amnesia is losing memories from before the injury."],
    ["Memory consolidation is the process by which", "memories become stable in long-term storage, often during sleep", ["memories are retrieved", "sensory memories fade", "new memories interfere with old ones"], "The hippocampus replays experiences to help consolidate them."],
    ["Strong emotional events are often remembered vividly because", "stress hormones and the amygdala boost memory formation", ["they are processed shallowly", "they skip long-term memory", "they are stored in sensory memory"], "These are sometimes called flashbulb memories, though they can still be inaccurate."],
    ["Which structure is most involved in storing procedural (implicit) motor memories?", "Cerebellum", ["Hippocampus", "Prefrontal cortex only", "Thalamus"], "The cerebellum and basal ganglia support skills and conditioning."]
  ]],
  ["2.6", "Retrieving Memories", [
    ["A fill-in-the-blank test requires", "recall", ["recognition", "relearning", "priming"], "Recall means retrieving information without cues from answer choices."],
    ["The graph shows the percentage of words recalled by list position. The high recall at the start and end of the list is called the", "serial position effect", ["spacing effect", "misinformation effect", "testing effect"], "Early items benefit from rehearsal (primacy); the last items are still in short-term memory (recency).", { t: "line", title: "Recall by position in a 15-word list", x: { min: 1, max: 15, ticks: [1, 3, 5, 7, 9, 11, 13, 15], label: "Position in list" }, y: { min: 0, max: 100, ticks: [0, 20, 40, 60, 80, 100], label: "Words recalled (%)" }, series: [{ name: "Recall", pts: [[1, 72], [2, 60], [3, 50], [4, 42], [5, 38], [6, 35], [7, 34], [8, 33], [9, 34], [10, 36], [11, 40], [12, 50], [13, 62], [14, 76], [15, 85]], dots: true }] }],
    ["Divers who learn words underwater recall them best underwater. This shows", "context-dependent memory", ["state-dependent memory", "mood-congruent memory", "retroactive interference"], "Being in the same setting provides retrieval cues."],
    ["Remembering happy memories more easily when you're in a good mood is", "mood-congruent memory", ["context-dependent memory", "the testing effect", "chunking"], "Your current mood serves as a retrieval cue."],
    ["Taking practice tests improves later memory more than rereading. This is the", "testing effect (retrieval practice)", ["serial position effect", "spacing effect", "self-reference effect"], "Retrieving information strengthens the memory."],
    ["Relearning something you studied long ago takes less time than learning it the first time. This shows that", "some memory was retained even if it couldn't be recalled", ["the memory was completely lost", "relearning always fails", "recall is the most sensitive measure"], "Ebbinghaus used savings in relearning to measure retention."]
  ]],
  ["2.7", "Forgetting and Other Memory Challenges", [
    ["The graph shows how much of a list of nonsense syllables people retained over time. What does it show?", "Most forgetting happens soon after learning, then the rate of forgetting levels off", ["Forgetting happens at a steady rate", "Nothing is forgotten after the first day", "Memory improves over time"], "This is Ebbinghaus's forgetting curve.", { t: "line", title: "Retention over time (Ebbinghaus)", x: { min: 0, max: 30, ticks: [0, 5, 10, 15, 20, 25, 30], label: "Days since learning" }, y: { min: 0, max: 100, ticks: [0, 20, 40, 60, 80, 100], label: "Retention (%)" }, series: [{ name: "Retention", pts: [[0, 100], [0.04, 58], [1, 34], [2, 28], [6, 25], [30, 21]], dots: true }] }],
    ["Learning a new phone number makes it hard to remember your old one. This is", "retroactive interference", ["proactive interference", "repression", "encoding failure"], "New information interferes with recalling old information."],
    ["Your old locker combination keeps coming to mind when you try to recall your new one. This is", "proactive interference", ["retroactive interference", "the misinformation effect", "source amnesia"], "Old information interferes with new learning."],
    ["In Loftus's studies, people who heard \"smashed\" rather than \"hit\" were more likely to remember broken glass that wasn't there. This shows the", "misinformation effect", ["serial position effect", "spacing effect", "tip-of-the-tongue phenomenon"], "Misleading information after an event can distort memory."],
    ["Not being able to recall the color of a penny's letters, because you never paid attention to them, is", "encoding failure", ["retrieval failure", "proactive interference", "storage decay"], "The information never entered long-term memory."],
    ["Remembering a fact but attributing it to the wrong source is", "source amnesia (source misattribution)", ["anterograde amnesia", "retroactive interference", "chunking"], "It helps explain false memories and déjà vu."]
  ]],
  ["2.8", "Intelligence and Achievement", [
    ["IQ scores are standardized so that the average is 100 and the standard deviation is 15. About what percent of people score between 85 and 115?", "About 68%", ["About 95%", "About 50%", "About 34%"], "In a normal distribution, about 68% of scores fall within one standard deviation of the mean."],
    ["A test that gives consistent results when taken twice has high", "reliability", ["validity", "standardization", "achievement"], "Reliability is consistency; validity is measuring what it claims to measure."],
    ["A test that predicts future college grades well has high", "predictive validity", ["test-retest reliability", "split-half reliability", "face value only"], "It accurately forecasts the behavior it's designed to predict."],
    ["Fluid intelligence tends to", "decline with age, while crystallized intelligence remains stable or grows", ["increase throughout life", "stay the same as crystallized", "appear only in adulthood"], "Fluid intelligence is quick reasoning; crystallized is accumulated knowledge."],
    ["Stereotype threat refers to", "worse performance caused by worry about confirming a negative stereotype", ["a stereotype that is always true", "a type of intelligence test", "a genetic difference"], "Anxiety about stereotypes can lower test scores."],
    ["A test measuring what a student has already learned in chemistry is", "an achievement test", ["an aptitude test", "an intelligence test", "a personality test"], "Aptitude tests predict future ability to learn."]
  ]]
]},
{ n: 3, name: "Development and Learning", weight: "15–25%", topics: [
  ["3.1", "Themes and Methods in Developmental Psychology", [
    ["A researcher compares 5-, 10-, and 15-year-olds at the same time. This is", "a cross-sectional study", ["a longitudinal study", "a case study", "an experiment"], "Cross-sectional studies compare different age groups at one point in time."],
    ["A researcher follows the same group of children from age 5 to age 15. This is", "a longitudinal study", ["a cross-sectional study", "naturalistic observation only", "a meta-analysis"], "Longitudinal studies track the same people over time."],
    ["A weakness of cross-sectional studies is that", "differences may reflect the era people grew up in rather than age (cohort effects)", ["they take many years", "participants drop out", "they study only one person"], "Different generations had different experiences."],
    ["The debate over whether development happens in gradual steps or distinct stages is the", "continuity versus discontinuity (stages) issue", ["nature versus nurture issue", "stability versus change issue", "reliability versus validity issue"], "Stage theorists like Piaget emphasize discontinuity."],
    ["A critical period is", "a time when certain experiences must happen for normal development", ["a stage of adulthood", "a type of study", "the period of old age"], "Example: imprinting in ducklings."],
    ["A disadvantage of longitudinal studies is that", "they are time-consuming and participants may drop out", ["they have cohort effects", "they only compare different people", "they never show change"], "Attrition can bias results."]
  ]],
  ["3.2", "Physical Development Across the Lifespan", [
    ["Teratogens are", "harmful agents, such as alcohol, that can damage a developing embryo or fetus", ["reflexes in newborns", "hormones released at puberty", "genes for growth"], "Fetal alcohol syndrome is caused by prenatal alcohol exposure."],
    ["A newborn turns its head toward a touch on the cheek. This is the", "rooting reflex", ["grasping reflex", "Moro reflex", "sucking reflex"], "It helps the baby find the nipple."],
    ["During adolescence, which brain area is among the last to fully mature?", "The prefrontal cortex", ["The brainstem", "The cerebellum", "The occipital lobe"], "It supports judgment and impulse control and keeps developing into the mid-20s."],
    ["Menarche refers to", "a girl's first menstrual period", ["the end of menstruation", "the growth spurt in boys", "the first words of a baby"], "It marks a key point in female puberty."],
    ["Physical abilities such as muscle strength and reaction time typically", "peak in early adulthood and gradually decline", ["peak in childhood", "improve throughout life", "decline only after age 90"], "Regular exercise can slow the decline."],
    ["Maturation refers to", "biological growth processes that unfold in a set sequence", ["learning from experience only", "cognitive stages", "social development"], "For example, most babies sit before they crawl and crawl before they walk."]
  ]],
  ["3.3", "Gender and Sexual Orientation", [
    ["Gender roles are", "a culture's expected behaviors for people based on their perceived sex", ["biological traits", "chromosomes", "reflexes"], "They vary across cultures and over time."],
    ["Social learning theory explains gender typing mainly through", "observing and imitating others and being rewarded or punished", ["genes alone", "hormones alone", "brain lesions"], "Children learn gender-related behaviors from models."],
    ["Gender identity is", "a person's sense of being male, female, or another gender", ["the same as biological sex", "a person's sexual orientation", "a gender role"], "It may or may not match the sex assigned at birth."],
    ["Research on sexual orientation suggests it is", "influenced by biological factors and not a choice", ["caused only by parenting", "easily changed by therapy", "determined by birth order alone"], "Evidence points to genetic and prenatal influences."],
    ["Gender schema theory suggests that children", "form mental concepts of gender that shape how they see the world", ["have no understanding of gender", "learn gender only in adulthood", "inherit gender roles"], "They then adjust their behavior to fit these schemas."],
    ["Androgyny refers to", "showing a mix of traditionally masculine and feminine traits", ["having no gender", "a hormone", "a sexual orientation"], "Some research links it to greater adaptability."]
  ]],
  ["3.4", "Cognitive Development Across the Lifespan", [
    ["According to Piaget, an infant who searches for a toy hidden under a blanket has developed", "object permanence", ["conservation", "egocentrism", "abstract reasoning"], "This develops during the sensorimotor stage."],
    ["A child says a tall, thin glass has more juice than a short, wide one with the same amount. The child lacks", "conservation", ["object permanence", "theory of mind", "a schema"], "This is typical of the preoperational stage."],
    ["Using abstract, hypothetical reasoning is typical of which Piagetian stage?", "Formal operational", ["Concrete operational", "Preoperational", "Sensorimotor"], "It begins around age 12."],
    ["Vygotsky's zone of proximal development is", "the range of tasks a child can do with help but not alone", ["the stage when children learn language", "a brain area", "the age when puberty starts"], "Scaffolding helps children through this zone."],
    ["Adapting an existing schema to fit new information (\"not all four-legged animals are dogs\") is", "accommodation", ["assimilation", "conservation", "egocentrism"], "Assimilation fits new experiences into existing schemas without changing them."],
    ["Theory of mind is", "the ability to understand that others have their own thoughts and beliefs", ["object permanence", "abstract thinking", "memory for faces"], "False-belief tasks show it develops around ages 4–5."]
  ]],
  ["3.5", "Communication and Language Development", [
    ["The smallest unit of sound in a language is a", "phoneme", ["morpheme", "grammar", "syntax"], "Morphemes are the smallest units of meaning."],
    ["A child says \"I goed to the store.\" This error shows", "overgeneralization of a grammar rule", ["a phoneme error", "telegraphic speech", "babbling"], "The child applies the regular past-tense rule to an irregular verb."],
    ["\"Want milk\" is an example of", "telegraphic speech", ["babbling", "overgeneralization", "a phoneme"], "Two-word speech omits less important words."],
    ["Chomsky argued that humans have", "an inborn capacity for learning grammar", ["no biological basis for language", "language learned only by reinforcement", "a critical period only for reading"], "He called it a language acquisition device."],
    ["Morphemes are", "the smallest units that carry meaning, like the \"-s\" in \"dogs\"", ["individual sounds", "rules for word order", "words with three syllables"], "\"Dogs\" has two morphemes: dog + -s."],
    ["The rules for combining words into grammatically correct sentences are called", "syntax", ["semantics", "phonemes", "pragmatics"], "Semantics is meaning; syntax is structure."]
  ]],
  ["3.6", "Social-Emotional Development Across the Lifespan", [
    ["In Ainsworth's strange situation, a securely attached infant typically", "is upset when the caregiver leaves and is comforted when they return", ["ignores the caregiver completely", "stays upset after the caregiver returns", "shows no reaction to strangers"], "Secure attachment reflects responsive caregiving."],
    ["Harlow's monkeys preferred a soft cloth mother to a wire mother with food. This showed", "contact comfort is important for attachment", ["food is the basis of attachment", "monkeys prefer wire", "attachment is not important"], "Comfort mattered more than nourishment."],
    ["According to Erikson, the main challenge of adolescence is", "identity versus role confusion", ["trust versus mistrust", "intimacy versus isolation", "integrity versus despair"], "Teens try out different roles to form a sense of self."],
    ["Parents who are demanding but also responsive and explain their rules are", "authoritative", ["authoritarian", "permissive", "neglectful"], "Authoritative parenting is linked with positive outcomes in many studies."],
    ["Parents who set strict rules and expect obedience without explanation are", "authoritarian", ["authoritative", "permissive", "uninvolved"], "\"Because I said so.\""],
    ["According to Erikson, older adults reflecting on their lives face", "integrity versus despair", ["generativity versus stagnation", "industry versus inferiority", "identity versus role confusion"], "They ask whether their life has been meaningful."]
  ]],
  ["3.7", "Classical Conditioning", [
    ["In Pavlov's experiment, before conditioning, the food was the", "unconditioned stimulus", ["conditioned stimulus", "neutral stimulus", "conditioned response"], "Food naturally causes salivation without learning."],
    ["A dog salivates to a bell after it has been paired with food. The salivation to the bell is the", "conditioned response", ["unconditioned response", "unconditioned stimulus", "neutral stimulus"], "It's a learned response to a formerly neutral stimulus."],
    ["If the bell is presented many times without food, salivation gradually stops. This is", "extinction", ["spontaneous recovery", "generalization", "acquisition"], "The CS no longer predicts the US."],
    ["After extinction, the dog salivates to the bell again after a rest. This is", "spontaneous recovery", ["discrimination", "extinction", "shaping"], "The conditioned response reappears weakly after a pause."],
    ["Little Albert feared a white rat and then also feared a white rabbit. This shows", "stimulus generalization", ["stimulus discrimination", "extinction", "negative reinforcement"], "Similar stimuli trigger the conditioned response."],
    ["Getting sick after eating a food and then avoiding it, even after one pairing, is", "taste aversion", ["operant conditioning", "habituation", "latent learning"], "Garcia showed some associations are learned easily because of biological preparedness."]
  ]],
  ["3.8", "Operant Conditioning", [
    ["Taking away a teen's phone for breaking curfew, to reduce the behavior, is", "negative punishment", ["negative reinforcement", "positive punishment", "positive reinforcement"], "Removing something desirable to decrease a behavior."],
    ["Putting on a seat belt to stop a car's annoying beeping is", "negative reinforcement", ["positive reinforcement", "negative punishment", "positive punishment"], "Removing an unpleasant stimulus increases the behavior."],
    ["Which reinforcement schedule produces behavior most resistant to extinction?", "Variable ratio", ["Fixed ratio", "Fixed interval", "Continuous reinforcement"], "Slot machines use it: rewards come after an unpredictable number of responses."],
    ["Getting paid every two weeks is an example of which schedule?", "Fixed interval", ["Variable interval", "Fixed ratio", "Variable ratio"], "Reinforcement comes after a set amount of time."],
    ["Rewarding closer and closer approximations to a desired behavior is", "shaping", ["chaining", "extinction", "generalization"], "Skinner used shaping to train complex behaviors."],
    ["Money is an example of a", "secondary (conditioned) reinforcer", ["primary reinforcer", "punisher", "neutral stimulus"], "It's valuable because it's linked to primary reinforcers like food."]
  ]],
  ["3.9", "Social, Cognitive, and Neurological Factors in Learning", [
    ["In Bandura's Bobo doll study, children who watched an adult hit a doll were more likely to", "imitate the aggressive behavior", ["avoid the doll", "show no change", "comfort the doll"], "This showed observational learning."],
    ["Tolman's rats explored a maze without rewards but ran it quickly once food was added. This showed", "latent learning (cognitive maps)", ["classical conditioning", "shaping", "habituation"], "Learning can happen without reinforcement and appear later."],
    ["Mirror neurons are thought to", "fire both when doing an action and when watching someone else do it", ["control only reflexes", "store long-term memories", "regulate hormones"], "They may support imitation and empathy."],
    ["Learned helplessness occurs when", "repeated uncontrollable bad events lead someone to stop trying", ["a behavior is rewarded", "a stimulus is paired with food", "a person imitates a model"], "Seligman linked it to depression."],
    ["Insight learning, like Köhler's chimps stacking boxes to reach bananas, involves", "a sudden realization of a solution", ["trial and error only", "classical conditioning", "reinforcement schedules"], "The solution appears all at once."],
    ["Having an internal locus of control means believing that", "you control your own outcomes", ["outside forces control your life", "you have no control", "luck determines success"], "It's linked with persistence and achievement."]
  ]]
]},
{ n: 4, name: "Social Psychology and Personality", weight: "15–25%", topics: [
  ["4.1", "Attribution Theory and Person Perception", [
    ["Assuming a driver who cuts you off is a rude person, rather than considering that they might be rushing to a hospital, is", "the fundamental attribution error", ["the self-serving bias", "the actor-observer bias", "the false consensus effect"], "We overestimate personality and underestimate situations when judging others."],
    ["Taking credit for your successes but blaming bad luck for your failures is", "self-serving bias", ["fundamental attribution error", "confirmation bias", "the just-world phenomenon"], "It protects self-esteem."],
    ["Believing that people get what they deserve is the", "just-world phenomenon", ["halo effect", "mere-exposure effect", "false consensus effect"], "It can lead to blaming victims."],
    ["A teacher expects a student to do well, treats them differently, and the student does do well. This is", "a self-fulfilling prophecy", ["the bystander effect", "cognitive dissonance", "deindividuation"], "Expectations influence behavior in ways that make them come true."],
    ["Explaining your own behavior by the situation but others' behavior by their traits is the", "actor-observer bias", ["self-serving bias", "halo effect", "foot-in-the-door technique"], "We see our situation more clearly than others'."],
    ["Social comparison refers to", "judging your own abilities by comparing yourself with others", ["comparing two groups in an experiment", "conformity", "a type of attribution"], "Upward comparison can lower satisfaction."]
  ]],
  ["4.2", "Attitude Formation and Attitude Change", [
    ["A person who smokes but knows it's unhealthy feels uncomfortable and decides the risks are exaggerated. This illustrates", "cognitive dissonance", ["the fundamental attribution error", "groupthink", "social facilitation"], "People change beliefs to reduce tension between actions and attitudes."],
    ["Agreeing to a small request makes people more likely to agree to a larger one later. This is the", "foot-in-the-door technique", ["door-in-the-face technique", "central route to persuasion", "mere-exposure effect"], "Starting small builds commitment."],
    ["Persuasion through careful arguments and evidence, aimed at people who think carefully, is the", "central route", ["peripheral route", "foot-in-the-door", "halo effect"], "The peripheral route relies on cues like attractiveness or celebrity."],
    ["An ad using a popular celebrity instead of facts about the product uses the", "peripheral route to persuasion", ["central route", "cognitive dissonance", "reciprocity norm only"], "Superficial cues can change attitudes, usually briefly."],
    ["Asking for a huge favor that is refused, then asking for a smaller one, is the", "door-in-the-face technique", ["foot-in-the-door technique", "low-ball technique", "central route"], "The second request seems reasonable by comparison."],
    ["Liking something more simply because you've seen it often is the", "mere-exposure effect", ["halo effect", "just-world phenomenon", "social loafing"], "Familiarity tends to increase liking."]
  ]],
  ["4.3", "Psychology of Groups", [
    ["In Asch's line experiments, many participants gave obviously wrong answers because", "they conformed to the group", ["they couldn't see the lines", "they were ordered to by an authority", "they were paid more"], "Normative social influence pushes people to fit in."],
    ["In Milgram's study, most participants", "continued to give what they believed were strong shocks when told to by the experimenter", ["refused to give any shocks", "stopped at the first protest", "gave shocks only to strangers"], "It showed the power of obedience to authority."],
    ["People are less likely to help in an emergency when many others are present. This is the", "bystander effect", ["social facilitation", "groupthink", "foot-in-the-door effect"], "Responsibility is diffused among the bystanders."],
    ["People working in a group project put in less effort than when working alone. This is", "social loafing", ["social facilitation", "group polarization", "deindividuation"], "Individual effort is less noticeable in the group."],
    ["A close-knit group ignores warnings and makes a bad decision to keep harmony. This is", "groupthink", ["group polarization", "social loafing", "the bystander effect"], "The desire for agreement overrides realistic thinking."],
    ["Performing a well-practiced skill better in front of an audience is", "social facilitation", ["social loafing", "deindividuation", "conformity"], "Audiences boost performance on easy or well-learned tasks and can hurt it on hard ones."]
  ]],
  ["4.4", "Psychology of Culture", [
    ["Cultures that value personal goals and independence are described as", "individualist", ["collectivist", "ethnocentric", "conformist"], "Collectivist cultures emphasize group goals and interdependence."],
    ["Judging other cultures by the standards of your own is", "ethnocentrism", ["acculturation", "multiculturalism", "social facilitation"], "It can lead to prejudice."],
    ["Favoring members of your own group is called", "in-group bias", ["out-group homogeneity", "the halo effect", "social loafing"], "People tend to see their own group more positively."],
    ["Believing that members of other groups are \"all alike\" is", "the out-group homogeneity effect", ["in-group bias", "deindividuation", "the self-serving bias"], "We see more variety in our own group."],
    ["The process of adapting to a new culture while keeping some of one's original culture is", "acculturation", ["ethnocentrism", "assimilation only", "conformity"], "Immigrants may integrate, assimilate, separate, or become marginalized."],
    ["Sherif's Robbers Cave study found that hostility between two groups of boys was reduced most by", "working together toward superordinate goals", ["more competition", "separating the groups", "punishing both groups"], "Shared goals that required cooperation reduced conflict."]
  ]],
  ["4.5", "Introduction to Personality", [
    ["Personality refers to", "a person's characteristic pattern of thinking, feeling, and acting", ["a person's intelligence", "a temporary mood", "a person's physical traits"], "Theories try to explain these consistent patterns."],
    ["A personality test that asks hundreds of true-false questions and compares answers to those of groups is", "an objective (self-report) inventory, like the MMPI", ["a projective test", "a case study", "an intelligence test"], "The MMPI is empirically derived."],
    ["The Rorschach inkblot test is an example of", "a projective test", ["an objective test", "an achievement test", "a structured interview"], "People are thought to project inner feelings onto ambiguous images."],
    ["A common criticism of projective tests is that they", "have low reliability and validity", ["are too objective", "are too short", "measure only intelligence"], "Different scorers may interpret responses differently."],
    ["The Barnum effect is", "accepting vague, general personality descriptions as accurate for yourself", ["a defense mechanism", "a Big Five trait", "a projective test"], "It explains why horoscopes seem accurate."],
    ["Which approach to personality focuses on measurable, stable traits?", "The trait approach", ["The psychodynamic approach", "The humanistic approach", "The behaviorist approach"], "It describes personality rather than explaining its origins."]
  ]],
  ["4.6", "Psychodynamic and Humanistic Theories of Personality", [
    ["According to Freud, the part of personality that operates on the pleasure principle is the", "id", ["ego", "superego", "self-concept"], "The id seeks immediate gratification."],
    ["A person who is angry at their boss yells at their dog. This defense mechanism is", "displacement", ["projection", "sublimation", "denial"], "Feelings are redirected toward a safer target."],
    ["Accusing others of feelings you have yourself is", "projection", ["repression", "rationalization", "regression"], "It disguises one's own threatening impulses."],
    ["Carl Rogers said healthy growth requires", "unconditional positive regard", ["a strong superego", "punishment for mistakes", "strict conditioning"], "Acceptance without conditions helps people grow."],
    ["Maslow's highest need in his original hierarchy is", "self-actualization", ["esteem", "belonging", "safety"], "It means reaching one's full potential."],
    ["A criticism of humanistic theories is that their concepts are", "vague and hard to test", ["too focused on biology", "too negative about people", "based only on animal research"], "Terms like self-actualization are hard to measure."]
  ]],
  ["4.7", "Social-Cognitive and Trait Theories of Personality", [
    ["Which Big Five trait describes being organized, careful, and dependable?", "Conscientiousness", ["Openness", "Agreeableness", "Extraversion"], "The Big Five are openness, conscientiousness, extraversion, agreeableness, and neuroticism."],
    ["Bandura's reciprocal determinism states that", "behavior, thoughts and personal factors, and environment all influence each other", ["personality is fixed at birth", "the unconscious drives behavior", "traits alone determine behavior"], "Each factor affects the others."],
    ["Self-efficacy is", "belief in your ability to succeed at a task", ["how much you like yourself", "your intelligence", "a Big Five trait"], "It influences which challenges people take on."],
    ["Someone who is anxious, moody, and easily upset scores high in", "neuroticism", ["agreeableness", "openness", "conscientiousness"], "Neuroticism is also called emotional instability."],
    ["A strength of the Big Five model is that its traits", "are fairly stable over time and appear across many cultures", ["explain the causes of all behavior", "are based on dreams", "change completely each year"], "Research finds similar factors worldwide."],
    ["The person-situation controversy asks", "whether behavior is more consistent across situations or more shaped by each situation", ["whether personality is inherited", "whether dreams have meaning", "whether IQ is fixed"], "Traits predict average behavior better than any single act."]
  ]],
  ["4.8", "Motivation", [
    ["Drive-reduction theory proposes that", "physiological needs create drives that push us to restore balance (homeostasis)", ["we seek optimal arousal", "emotions follow body changes", "we are motivated by rewards only"], "Hunger drives eating, which reduces the drive."],
    ["The Yerkes–Dodson law states that performance is best at", "a moderate level of arousal, depending on the task's difficulty", ["the lowest arousal", "the highest arousal", "zero stress"], "Difficult tasks are best with lower arousal; easy tasks with higher arousal."],
    ["Doing a puzzle just because it's fun is an example of", "intrinsic motivation", ["extrinsic motivation", "drive reduction", "a primary drive"], "The activity itself is rewarding."],
    ["The overjustification effect occurs when", "rewarding an activity someone already enjoys reduces their intrinsic motivation", ["a reward always increases motivation", "people work harder for less pay", "a drive is reduced"], "Extrinsic rewards can undermine intrinsic interest."],
    ["The hormone that signals hunger is", "ghrelin", ["leptin", "insulin", "melatonin"], "Leptin signals fullness over the longer term."],
    ["Self-determination theory says people are motivated by needs for", "competence, autonomy, and relatedness", ["food, water, and shelter only", "money and status", "fear and anxiety"], "Meeting these needs boosts intrinsic motivation."]
  ]],
  ["4.9", "Emotion", [
    ["The James–Lange theory proposes that", "we feel emotion after noticing our body's physiological response", ["emotion and arousal happen at the same time", "emotion needs arousal plus a cognitive label", "emotions are only learned"], "\"I tremble, so I'm afraid.\""],
    ["The Schachter–Singer two-factor theory says emotions require", "physical arousal and a cognitive label", ["only physical arousal", "only thoughts", "facial expressions only"], "We interpret arousal based on the situation."],
    ["The Cannon–Bard theory proposes that", "physiological arousal and the emotional experience happen at the same time", ["emotions follow body changes", "arousal must be labeled first", "emotions don't involve the body"], "The thalamus sends signals to both the cortex and the body at once."],
    ["Ekman's research found that", "some facial expressions of emotion are recognized across cultures", ["no emotions are universal", "expressions are entirely learned", "only Western cultures smile"], "Happiness, sadness, fear, anger, surprise, and disgust are widely recognized."],
    ["Holding a pen in your teeth, which forces a smile, can make cartoons seem funnier. This supports the", "facial-feedback hypothesis", ["Cannon–Bard theory", "Yerkes–Dodson law", "drive-reduction theory"], "Facial expressions can influence emotional experience."],
    ["Display rules are", "cultural norms about when and how emotions should be expressed", ["universal facial expressions", "brain structures for emotion", "stages of grief"], "They explain cultural differences in emotional expression."]
  ]]
]},
{ n: 5, name: "Mental and Physical Health", weight: "15–25%", topics: [
  ["5.1", "Introduction to Health Psychology", [
    ["Selye's general adaptation syndrome describes the body's response to stress in which order?", "Alarm, resistance, exhaustion", ["Resistance, alarm, exhaustion", "Exhaustion, alarm, resistance", "Alarm, exhaustion, recovery"], "Long-term stress can deplete the body's resources."],
    ["Problem-focused coping involves", "trying to change the situation causing stress", ["managing your emotional reaction", "ignoring the stressor", "denying the problem"], "Emotion-focused coping deals with feelings instead."],
    ["Chronic stress can weaken the immune system because", "stress hormones like cortisol suppress immune responses", ["stress increases white blood cells permanently", "stress has no effect on the body", "stress lowers heart rate"], "Stressed people often get sick more easily."],
    ["A conflict between two attractive options (two great colleges) is", "an approach-approach conflict", ["an avoidance-avoidance conflict", "an approach-avoidance conflict", "a double approach-avoidance conflict"], "Both choices are desirable."],
    ["Everyday hassles, like traffic and lost keys, can", "add up to affect health more than people expect", ["never affect health", "only matter in childhood", "only cause positive stress"], "Small, frequent stressors accumulate."],
    ["The tend-and-befriend response describes", "responding to stress by seeking social support and caring for others", ["fighting or fleeing only", "freezing in place", "ignoring the stressor"], "It's an alternative to fight-or-flight, often linked to oxytocin."]
  ]],
  ["5.2", "Positive Psychology", [
    ["Positive psychology focuses on", "human strengths and flourishing", ["only mental disorders", "brain damage", "unconscious conflicts"], "It studies well-being, virtues, and resilience."],
    ["Returning to your usual level of happiness soon after a big positive or negative event is called the", "adaptation-level phenomenon (hedonic treadmill)", ["relative deprivation principle", "Yerkes–Dodson law", "overjustification effect"], "People adapt to new circumstances."],
    ["Feeling worse off because you compare yourself with people who have more is", "relative deprivation", ["the adaptation-level phenomenon", "learned helplessness", "self-efficacy"], "Satisfaction depends on comparison."],
    ["Being fully absorbed in a challenging activity that matches your skills is called", "flow", ["resilience", "catharsis", "burnout"], "Csikszentmihalyi described flow as focused, rewarding engagement."],
    ["Resilience is", "the ability to adapt and recover from adversity", ["a type of intelligence test", "a Big Five trait", "a defense mechanism"], "Supportive relationships help build it."],
    ["Practicing gratitude, such as writing down things you're thankful for, has been linked to", "greater well-being", ["more stress", "lower self-esteem", "worse sleep"], "Positive psychology interventions can boost happiness."]
  ]],
  ["5.3", "Explaining and Classifying Psychological Disorders", [
    ["The DSM (Diagnostic and Statistical Manual of Mental Disorders) is used to", "classify and diagnose psychological disorders by symptoms", ["explain the causes of all disorders", "treat disorders with drugs", "measure intelligence"], "It gives diagnostic criteria, not causes."],
    ["The biopsychosocial model explains disorders as resulting from", "the interaction of biological, psychological, and sociocultural factors", ["biological factors only", "unconscious conflicts only", "learning only"], "Most disorders have multiple causes."],
    ["The diathesis-stress model proposes that", "a predisposition combined with stressful events can lead to a disorder", ["stress alone always causes disorders", "genes alone determine disorders", "disorders are always learned"], "Vulnerability plus environment triggers the disorder."],
    ["Behavior is usually considered a psychological disorder when it is", "dysfunctional or maladaptive and causes significant distress or impairment", ["unusual in any way", "different from one's own behavior", "found only in children"], "Deviation alone is not enough."],
    ["A criticism of diagnostic labels is that they can", "create stigma and bias how people are seen", ["always help treatment", "never be changed", "only apply to adults"], "Rosenhan's study raised concerns about the power of labels."],
    ["Which perspective would explain depression mainly as the result of negative thought patterns?", "Cognitive", ["Biological", "Psychodynamic", "Humanistic"], "Beck described a negative triad of thoughts about self, world, and future."]
  ]],
  ["5.4", "Selection of Categories of Psychological Disorders", [
    ["Persistent, excessive worry about many things for at least six months describes", "generalized anxiety disorder", ["panic disorder", "specific phobia", "obsessive-compulsive disorder"], "The worry is hard to control and not tied to one trigger."],
    ["Repeated unwanted thoughts and ritual behaviors like constant hand-washing suggest", "obsessive-compulsive disorder", ["bipolar disorder", "schizophrenia", "dissociative identity disorder"], "Compulsions are performed to reduce anxiety from obsessions."],
    ["Alternating between depression and manic episodes is characteristic of", "bipolar disorder", ["major depressive disorder", "generalized anxiety disorder", "schizophrenia"], "Mania involves elevated mood, energy, and impulsivity."],
    ["Hallucinations and delusions are positive symptoms of", "schizophrenia", ["dissociative identity disorder", "OCD", "panic disorder"], "Positive symptoms are added behaviors; negative symptoms are absent behaviors, like flat affect."],
    ["Nightmares, flashbacks, and avoidance of reminders after a traumatic event suggest", "post-traumatic stress disorder (PTSD)", ["generalized anxiety disorder", "bipolar disorder", "antisocial personality disorder"], "Symptoms last more than a month after the trauma."],
    ["A pattern of disregard for others' rights and a lack of remorse is characteristic of", "antisocial personality disorder", ["avoidant personality disorder", "borderline personality disorder", "schizophrenia"], "It's a personality disorder beginning in adolescence or early adulthood."]
  ]],
  ["5.5", "Treatment of Psychological Disorders", [
    ["Systematic desensitization, often used for phobias, pairs", "relaxation with gradually more anxiety-provoking situations", ["punishment with fears", "free association with dreams", "drugs with electric shock"], "It's a behavior therapy based on counterconditioning."],
    ["Cognitive-behavioral therapy (CBT) focuses on", "changing negative thoughts and behaviors", ["uncovering unconscious conflicts", "providing unconditional positive regard only", "medication only"], "CBT is one of the best-supported therapies."],
    ["A therapist who reflects clients' feelings and offers unconditional positive regard practices", "person-centered (humanistic) therapy", ["psychoanalysis", "behavior therapy", "biomedical therapy"], "Rogers developed this approach."],
    ["Antipsychotic drugs like those used for schizophrenia often work by", "blocking dopamine receptors", ["increasing serotonin reuptake", "increasing GABA only", "blocking acetylcholine"], "They reduce positive symptoms like hallucinations."],
    ["Lithium is most commonly used to treat", "bipolar disorder", ["schizophrenia", "specific phobias", "ADHD"], "It's a mood stabilizer."],
    ["Meta-analyses of psychotherapy outcomes generally find that", "therapy helps many people more than no treatment", ["therapy never helps", "all therapies are harmful", "only medication works"], "The therapeutic alliance is an important factor across approaches."]
  ]]
]}
);
