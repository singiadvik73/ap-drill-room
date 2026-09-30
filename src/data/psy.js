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
    ["Identical twins raised apart have very similar IQ scores. This most supports the role of", "heredity", ["the shared environment", "cohort effects", "the placebo effect"], "They share genes but not environments."],
    ["A trait with a heritability of 0.7 in a population means that", "70% of the variation in that group is linked to genes", ["70% of each individual person's trait comes from their genes", "the trait can't be changed by any environmental influence", "the environment has no effect"], "Heritability describes groups, not individuals."],
    ["Adopted children resembling their biological parents in temperament more than their adoptive parents supports", "a genetic influence", ["an environmental influence", "a cohort effect", "the placebo effect"], "Adoption studies separate genes and environment."],
    ["Epigenetics studies how", "environments turn genes on or off", ["DNA sequences mutate across generations", "genes are inherited", "twins are born"], "Gene expression changes without DNA changes."],
    ["Evolutionary psychologists would explain a fear of snakes as", "an adaptation that helped ancestors survive", ["a phobia learned only through classical conditioning", "a random preference with no connection to survival", "a cultural tradition"], "Traits that aided survival were passed on."],
    ["Fraternal twins share about what percentage of their genes?", "50%", ["100%", "25%", "0%"], "Like ordinary siblings."]
  ]],
  ["1.2", "Overview of the Nervous System", [
    ["When you touch a hot stove and pull away before feeling pain, the response is controlled by", "a spinal reflex", ["the cerebral cortex", "the endocrine system", "the hippocampus"], "Interneurons in the spinal cord trigger the response."],
    ["The part of the nervous system that calms the body after stress is the", "parasympathetic nervous system", ["sympathetic nervous system", "somatic nervous system", "central nervous system"], "It conserves energy."],
    ["Your heart races before a test. Which system is active?", "Sympathetic nervous system", ["Parasympathetic nervous system", "Somatic nervous system", "Central nervous system only"], "Fight-or-flight arousal."],
    ["The somatic nervous system controls", "voluntary movements of skeletal muscles", ["heart rate", "digestion", "hormone release from the endocrine glands"], "Part of the peripheral nervous system."],
    ["The endocrine system differs from the nervous system because it", "sends messages more slowly through hormones", ["uses faster electrical signals only", "controls only reflexes", "works faster"], "Hormones travel in the blood."],
    ["Sensory neurons carry information", "from the body to the central nervous system", ["from the brain out to the muscles of the body", "between interneurons only", "from the brain directly to the body's glands"], "Afferent neurons."]
  ]],
  ["1.3", "The Neuron and Neural Firing", [
    ["An action potential occurs when a neuron", "reaches its threshold", ["is at resting potential", "is in its refractory period", "releases hormones"], "All-or-none firing."],
    ["The graph shows the electrical charge inside a neuron during an action potential. What causes the rapid rise at point B?", "Sodium ions rushing into the neuron", ["Potassium ions rushing into the neuron", "Neurotransmitters leaving the neuron", "The myelin sheath breaking down"], "When the threshold is reached, Na⁺ channels open and positive ions flood in (depolarization).", { t: "line", title: "Membrane potential during an action potential", x: { min: 0, max: 5, ticks: [0, 1, 2, 3, 4, 5], label: "Time (ms)" }, y: { min: -90, max: 50, ticks: [-90, -70, -55, -30, 0, 30], label: "Membrane potential (mV)" }, series: [{ name: "Charge", pts: [[0, -70], [0.8, -70], [1, -55], [1.2, 0], [1.4, 35], [1.8, 0], [2.2, -70], [2.6, -85], [3.5, -72], [5, -70]] }], marks: [{ x: 0.4, y: -70, l: "A" }, { x: 1.2, y: 0, l: "B", dx: -10 }, { x: 2.6, y: -85, l: "C", dy: 18 }] }],
    ["A strong stimulus makes a neuron fire", "more often, not more strongly", ["more strongly, not more often", "less often", "without neurotransmitters"], "The all-or-none principle."],
    ["Multiple sclerosis damages the myelin sheath, which causes", "slower neural transmission", ["faster neural transmission", "more neurotransmitters", "no effect"], "Myelin speeds impulses."],
    ["Reuptake refers to", "neurotransmitters being reabsorbed by the sending neuron", ["neurotransmitters binding to receptors on the next neuron", "an action potential starting", "hormone release"], "It ends the signal."],
    ["An inhibitory neurotransmitter such as GABA", "makes a neuron less likely to fire", ["makes a neuron more likely to fire", "creates myelin", "blocks reuptake"], "It calms neural activity."]
  ]],
  ["1.4", "Influence of Drugs on Neural Firing", [
    ["Morphine relieves pain by mimicking endorphins. Morphine is an", "agonist", ["antagonist", "reuptake inhibitor", "depressant only"], "It activates the same receptors."],
    ["A drug that blocks acetylcholine receptors, causing paralysis, is an", "antagonist", ["agonist", "stimulant", "hallucinogen"], "It prevents the neurotransmitter from acting."],
    ["SSRIs treat depression by", "blocking the reuptake of serotonin", ["blocking serotonin receptors", "destroying serotonin", "increasing dopamine only"], "More serotonin remains in the synapse."],
    ["Alcohol is classified as a", "depressant", ["stimulant", "hallucinogen", "opioid painkiller"], "It slows nervous system activity."],
    ["Needing more of a drug to get the same effect is", "tolerance", ["withdrawal", "addiction", "dependence only"], "The brain adapts."],
    ["Discomfort after stopping a drug is called", "withdrawal", ["tolerance", "reuptake", "sensitization"], "Symptoms occur when use stops."]
  ]],
  ["1.5", "The Brain", [
    ["A patient can understand speech but has trouble producing words. Damage is most likely in", "Broca's area", ["Wernicke's area", "the occipital lobe", "the cerebellum"], "Broca's area controls speech production."],
    ["A patient speaks fluently but makes little sense and can't understand others. The damage is likely in", "Wernicke's area", ["Broca's area", "the motor cortex", "the hypothalamus"], "Wernicke's area handles comprehension."],
    ["Damage to the occipital lobe would most likely impair", "vision", ["hearing", "balance", "speech production"], "The visual cortex is there."],
    ["The hippocampus is most involved in", "forming new explicit memories", ["regulating hunger", "coordinating balance and movement", "processing vision"], "Damage causes anterograde amnesia."],
    ["After a stroke, other brain areas take over lost functions. This is", "neuroplasticity", ["brain lateralization", "myelination", "neurotransmitter reuptake"], "The brain reorganizes."],
    ["A split-brain patient sees an object only in the left visual field and can't name it because", "language is usually in the left hemisphere", ["the right hemisphere controls speech", "the corpus callosum is intact", "vision is in the frontal lobe"], "The right hemisphere receives the image but can't speak."]
  ]],
  ["1.6", "Sleep", [
    ["Most dreaming occurs during", "REM sleep", ["NREM stage 1", "NREM stage 3", "the hypnagogic state"], "REM is linked to vivid dreams."],
    ["Deep, slow-wave sleep occurs in", "NREM stage 3", ["REM sleep", "NREM stage 1", "wakefulness"], "Delta waves dominate."],
    ["A person who suddenly falls into REM sleep during the day may have", "narcolepsy", ["insomnia", "sleep apnea", "night terrors"], "Uncontrollable sleep attacks."],
    ["Loud snoring and pauses in breathing during sleep suggest", "sleep apnea", ["narcolepsy", "insomnia", "REM rebound"], "Breathing repeatedly stops."],
    ["After several nights of missing REM sleep, people show", "REM rebound", ["no REM sleep", "narcolepsy", "insomnia"], "More REM when sleep resumes."],
    ["The activation-synthesis theory says dreams", "result from the brain making sense of random neural activity", ["reveal unconscious wishes", "exist only to help consolidate each day's new memories", "predict the future"], "Proposed by Hobson and McCarley."]
  ]],
  ["1.7", "Sensation", [
    ["After a few minutes in a room with a ticking clock, you no longer notice it. This is", "sensory adaptation", ["absolute threshold of sensation", "selective attention", "transduction"], "Receptors respond less to constant stimuli."],
    ["The smallest change in weight you can notice 50% of the time is the", "difference threshold", ["absolute threshold", "signal detection point", "sensory adaptation"], "Also called the just-noticeable difference."],
    ["Weber's law states that the just-noticeable difference", "is a constant proportion of the original stimulus", ["is always the same amount", "depends only on attention", "gets smaller as the stimulus gets stronger"], "Bigger stimuli need bigger changes."],
    ["Cones in the retina are responsible for", "color vision and fine detail", ["night vision", "peripheral vision in dim light", "hearing"], "Rods detect dim light."],
    ["Converting light energy into neural signals is", "transduction", ["adaptation", "accommodation", "perception"], "Receptors transduce stimuli."],
    ["You notice your name in a noisy room. This shows", "selective attention", ["sensory adaptation", "absolute threshold", "change blindness"], "The cocktail party effect."]
  ]]
]},
{ n: 2, name: "Cognition", weight: "15–25%", topics: [
  ["2.1", "Perception", [
    ["Seeing a triangle in a drawing made of three separate dots shows the Gestalt principle of", "closure", ["proximity", "similarity", "continuity"], "The mind fills in gaps."],
    ["Expecting to see a friend, you mistake a stranger for them. This is", "perceptual set", ["bottom-up processing", "sensory adaptation", "closure"], "Expectations shape perception."],
    ["Reading messy handwriting by using context is", "top-down processing", ["bottom-up processing", "sensory adaptation", "feature detection by neurons"], "Knowledge guides interpretation."],
    ["Railroad tracks appearing to converge in the distance is the depth cue of", "linear perspective", ["interposition", "retinal disparity cues", "relative size"], "A monocular cue."],
    ["The difference between the images seen by each eye provides the cue of", "retinal disparity", ["linear perspective", "interposition", "texture gradient"], "A binocular cue."],
    ["A door looks rectangular even when it's opening at an angle. This is", "shape constancy", ["size constancy", "closure", "perceptual set"], "We perceive objects as unchanging."]
  ]],
  ["2.2", "Thinking, Problem-Solving, Judgments, and Decision-Making", [
    ["Judging that a quiet, bookish man is a librarian rather than a farmer uses the", "representativeness heuristic", ["availability heuristic in action", "anchoring effect", "framing effect on the decision"], "Matching a stereotype, ignoring base rates."],
    ["After seeing plane crashes on the news, you think flying is more dangerous than driving. This is the", "availability heuristic", ["representativeness heuristic", "confirmation bias", "functional fixedness"], "Vivid examples come to mind easily."],
    ["Not thinking to use a coin as a screwdriver shows", "functional fixedness", ["mental set", "confirmation bias", "overconfidence"], "Seeing objects only in their usual function."],
    ["Looking only for evidence that supports your belief is", "confirmation bias", ["hindsight bias", "belief perseverance", "framing"], "Ignoring contradicting evidence."],
    ["People prefer a surgery with a '90% survival rate' over one with a '10% death rate.' This shows", "framing", ["anchoring", "availability", "belief perseverance"], "The same facts presented differently."],
    ["Saying 'I knew it all along' after an event is", "hindsight bias", ["confirmation bias", "overconfidence", "the availability heuristic"], "Outcomes seem predictable after the fact."]
  ]],
  ["2.3", "Introduction to Memory", [
    ["Repeating a phone number to keep it in mind uses", "maintenance rehearsal", ["elaborative rehearsal", "chunking", "the method of loci"], "It keeps information in short-term memory."],
    ["Memory for how to ride a bike is", "procedural memory", ["episodic memory recall", "semantic memory", "sensory memory storage"], "An implicit skill memory."],
    ["Remembering your 10th birthday party is", "episodic memory", ["semantic memory", "procedural memory", "implicit memory"], "Personal experiences."],
    ["Knowing that Paris is the capital of France is", "semantic memory", ["episodic memory", "procedural memory", "iconic memory"], "General knowledge."],
    ["The brief visual memory lasting a fraction of a second is", "iconic memory", ["echoic memory", "working memory", "long-term memory"], "Visual sensory memory."],
    ["The central executive in working memory", "directs attention and coordinates information", ["stores long-term memories permanently", "holds sounds only", "holds images only"], "Baddeley's model."]
  ]],
  ["2.4", "Encoding Memories", [
    ["Relating new vocabulary to your own life improves memory because of", "the self-reference effect", ["the spacing effect of practice", "the testing effect", "the serial position effect"], "Self-relevant information is encoded deeply."],
    ["Studying over several days instead of cramming uses", "the spacing effect", ["massed practice", "the primacy effect", "chunking"], "Distributed practice improves retention."],
    ["Remembering 1-4-9-2-1-7-7-6 as 1492 and 1776 is", "chunking", ["rehearsal", "the method of loci", "encoding specificity"], "Grouping into meaningful units."],
    ["Thinking about a word's meaning instead of its sound leads to", "deeper processing and better recall", ["shallow processing and faster recall", "worse recall", "sensory memory"], "Levels of processing theory."],
    ["Imagining items placed along a familiar route is the", "method of loci", ["peg-word method", "chunking", "spacing effect"], "A mnemonic device."],
    ["Taking practice quizzes improves memory because of", "the testing effect", ["the spacing effect", "state-dependent memory", "proactive interference"], "Retrieval strengthens memories."]
  ]],
  ["2.5", "Storing Memories", [
    ["Long-term potentiation is", "strengthening of synapses through repeated firing", ["the gradual loss of unused old memories over time", "brief sensory storage", "memory for skills only"], "A biological basis for learning."],
    ["Few people remember events before age 3 because of", "infantile amnesia", ["retrograde amnesia", "proactive interference", "repression"], "Brain systems for memory were immature."],
    ["Explicit memories are processed mainly in the", "hippocampus", ["cerebellum", "amygdala region", "occipital lobe"], "It helps form new explicit memories."],
    ["The cerebellum is especially important for", "implicit procedural memories", ["episodic memories", "semantic facts", "emotional (fear) memories"], "Motor skills and conditioning."],
    ["Emotional memories, such as fear, are strongly linked to the", "amygdala", ["hippocampus", "cerebellum", "thalamus"], "It tags memories with emotion."],
    ["Memory consolidation during sleep helps", "stabilize new memories", ["erase old memories", "block learning", "create new false memories"], "Sleep strengthens memories."]
  ]],
  ["2.6", "Retrieving Memories", [
    ["Remembering better when tested in the same room where you studied shows", "context-dependent memory", ["state-dependent memory", "mood-congruent memory", "the spacing effect"], "The environment provides cues."],
    ["The graph shows the percentage of words recalled by list position. The high recall at the start and end of the list is called the", "serial position effect", ["spacing effect in study", "the misinformation effect", "testing effect"], "Early items benefit from rehearsal (primacy); the last items are still in short-term memory (recency).", { t: "line", title: "Recall by position in a 15-word list", x: { min: 1, max: 15, ticks: [1, 3, 5, 7, 9, 11, 13, 15], label: "Position in list" }, y: { min: 0, max: 100, ticks: [0, 20, 40, 60, 80, 100], label: "Words recalled (%)" }, series: [{ name: "Recall", pts: [[1, 72], [2, 60], [3, 50], [4, 42], [5, 38], [6, 35], [7, 34], [8, 33], [9, 34], [10, 36], [11, 40], [12, 50], [13, 62], [14, 76], [15, 85]], dots: true }] }],
    ["Recalling sad memories more easily when sad is", "mood-congruent memory", ["context-dependent memory", "state-dependent memory", "the serial position effect"], "Mood cues memories that match it."],
    ["Multiple-choice questions test", "recognition", ["recall", "relearning", "rehearsal"], "Identifying the right answer from options."],
    ["You remember the first and last items on a list best. This is the", "serial position effect", ["spacing effect", "testing effect", "the self-reference effect"], "Primacy and recency."],
    ["Relearning material faster the second time shows", "information was retained", ["the material was forgotten completely", "recall failed", "encoding failed"], "Ebbinghaus's savings."]
  ]],
  ["2.7", "Forgetting and Other Memory Challenges", [
    ["The graph shows how much of a list of nonsense syllables people retained over time. What does it show?", "Most forgetting happens soon after learning, then the rate of forgetting levels off", ["Forgetting happens at a steady rate", "Forgetting happens at a steady rate for the whole month after learning", "Memory improves over time"], "This is Ebbinghaus's forgetting curve.", { t: "line", title: "Retention over time (Ebbinghaus)", x: { min: 0, max: 30, ticks: [0, 5, 10, 15, 20, 25, 30], label: "Days since learning" }, y: { min: 0, max: 100, ticks: [0, 20, 40, 60, 80, 100], label: "Retention (%)" }, series: [{ name: "Retention", pts: [[0, 100], [0.04, 58], [1, 34], [2, 28], [6, 25], [30, 21]], dots: true }] }],
    ["Learning a new locker combination makes it hard to recall the old one. This is", "retroactive interference", ["proactive interference at work", "repression", "source amnesia"], "New learning disrupts old memories."],
    ["Old French vocabulary interferes with learning Spanish. This is", "proactive interference", ["retroactive interference", "motivated forgetting", "encoding failure at learning"], "Old learning disrupts new."],
    ["A witness remembers a stop sign as a yield sign after a misleading question. This is", "the misinformation effect", ["repression", "proactive interference", "infantile amnesia"], "Post-event information alters memory."],
    ["Forgetting where you heard a fact, but remembering the fact, is", "source amnesia", ["retroactive interference", "anterograde amnesia", "encoding failure"], "Misattributing the source."],
    ["After brain injury, a person can't form new memories. This is", "anterograde amnesia", ["retrograde amnesia only", "infantile amnesia", "source amnesia"], "New memories aren't stored."]
  ]],
  ["2.8", "Intelligence and Achievement", [
    ["A test gives consistent scores when taken twice. It has high", "reliability", ["validity", "standardization", "predictive validity only"], "Consistency."],
    ["A test that accurately predicts college grades has high", "predictive validity", ["reliability only", "content validity only", "standardization"], "It predicts future performance."],
    ["Gardner's theory of multiple intelligences includes", "musical and interpersonal intelligence", ["only verbal and math ability", "a single general intelligence (g)", "fluid intelligence only"], "Eight types of intelligence."],
    ["Fluid intelligence refers to", "the ability to solve new problems quickly", ["accumulated knowledge and vocabulary from school", "vocabulary and general knowledge gained over time", "emotional skills"], "It tends to decline with age."],
    ["Worry about confirming a negative group stereotype lowering test scores is", "stereotype threat", ["the Flynn effect", "a growth mindset", "test bias"], "Anxiety affects performance."],
    ["The rise in average IQ scores over generations is the", "Flynn effect", ["stereotype threat", "g factor", "normal curve"], "Scores have increased over time."]
  ]]
]},
{ n: 3, name: "Development and Learning", weight: "15–25%", topics: [
  ["3.1", "Themes and Methods in Developmental Psychology", [
    ["A researcher tests the same children at ages 5, 10, and 15. This design is", "longitudinal", ["cross-sectional", "a case study", "naturalistic observation"], "The same people over time."],
    ["Comparing 20-, 40-, and 60-year-olds at one time is", "cross-sectional", ["longitudinal", "a case study", "a controlled experiment"], "Different ages at once."],
    ["Differences between age groups caused by growing up in different eras are", "cohort effects", ["maturation effects", "critical periods", "placebo effects"], "A weakness of cross-sectional designs."],
    ["A drawback of longitudinal studies is", "participant dropout over time", ["cohort effects", "short duration", "cohort effects across groups"], "Attrition can bias results."],
    ["The idea that development occurs in distinct stages reflects", "discontinuity", ["continuity", "nature over nurture", "stability over time"], "Piaget proposed stages."],
    ["A critical period is a time when", "certain experiences are needed for normal development", ["development stops", "learning of any kind becomes impossible for the child", "memory declines"], "Example: language exposure."]
  ]],
  ["3.2", "Physical Development Across the Lifespan", [
    ["A newborn turns toward a touch on the cheek. This is the", "rooting reflex", ["grasping reflex", "Moro reflex", "sucking reflex"], "It helps find food."],
    ["Walking develops at a similar age across cultures mainly because of", "maturation", ["imitation", "reinforcement", "culture"], "Biological growth."],
    ["The prefrontal cortex matures into the mid-20s, which may explain teens'", "greater risk-taking", ["better working memory", "slower physical reflexes", "stronger vision"], "Judgment and impulse control develop later."],
    ["Teratogens are", "substances that harm prenatal development", ["genes that influence prenatal intelligence", "hormones in puberty", "reflexes"], "Examples: alcohol, drugs."],
    ["Fetal alcohol syndrome results from", "alcohol use during pregnancy", ["genetic mutation", "poor nutrition during pregnancy", "maternal age"], "Alcohol is a teratogen."],
    ["Menarche refers to", "a girl's first menstrual period", ["the end of puberty", "the first growth spurt of puberty", "menopause and the end of fertility"], "A sign of puberty."]
  ]],
  ["3.3", "Gender and Sexual Orientation", [
    ["A child learning gender roles by watching and imitating parents reflects", "social learning theory", ["gender schema theory", "evolutionary theory", "psychoanalytic theory"], "Observation and reinforcement."],
    ["A child organizing the world into 'boy things' and 'girl things' reflects", "gender schema theory", ["social learning theory", "operant conditioning", "classical conditioning"], "Mental frameworks for gender."],
    ["Gender identity refers to", "a person's sense of being male, female, or another gender", ["the biological sex a person was assigned at birth only", "sexual orientation", "gender roles"], "Internal sense of gender."],
    ["Sexual orientation refers to", "the gender(s) a person is attracted to", ["a person's internal gender identity", "gender roles", "biological sex"], "Enduring attraction."],
    ["Prenatal hormones such as testosterone can influence", "sex differentiation", ["IQ only", "handedness and IQ only", "eye color"], "Hormones shape development."],
    ["Gender roles are", "expectations for how people of a gender should behave", ["biological traits linked to sex chromosomes", "chromosomes", "orientation"], "They vary across cultures."]
  ]],
  ["3.4", "Cognitive Development Across the Lifespan", [
    ["A 4-year-old thinks a tall glass holds more juice than a wide glass with the same amount. She lacks", "conservation", ["object permanence", "abstract reasoning", "a theory of mind"], "Preoperational stage."],
    ["A baby searches for a toy hidden under a blanket. The baby has developed", "object permanence", ["conservation", "egocentric thinking", "theory of mind"], "Sensorimotor stage."],
    ["A teenager reasons about hypothetical situations. This reflects the", "formal operational stage", ["concrete operational stage", "preoperational stage", "sensorimotor stage"], "Abstract thinking."],
    ["A child can solve a puzzle only with a parent's help. This task is in the child's", "zone of proximal development", ["schema", "critical period", "stage of formal operations"], "Vygotsky's concept."],
    ["Changing an existing schema to fit new information is", "accommodation", ["simple assimilation", "conservation", "egocentrism"], "Piaget's term."],
    ["Understanding that others have different beliefs is", "theory of mind", ["object permanence", "conservation", "assimilation"], "Develops in the preschool years."]
  ]],
  ["3.5", "Communication and Language Development", [
    ["A toddler says 'I goed to the store.' This is", "overgeneralization", ["telegraphic speech", "babbling", "a phoneme"], "Applying grammar rules too broadly."],
    ["'Want cookie' is an example of", "telegraphic speech", ["babbling", "overgeneralization", "syntax errors only"], "Two-word stage."],
    ["Chomsky argued that children are born with", "an innate capacity for grammar", ["no language ability", "a full vocabulary", "only the ability to imitate adults"], "Universal grammar."],
    ["The smallest unit of sound in a language is a", "phoneme", ["morpheme", "syntax rule", "semantics"], "Example: the 'b' sound."],
    ["The smallest unit of meaning in a language is a", "morpheme", ["phoneme", "syntax", "pragmatics"], "Example: '-ed' in 'walked.'"],
    ["Babies babbling sounds from all languages around 4 months supports", "a universal capacity for language", ["learning only through imitation", "a critical period ending at birth", "no innate ability"], "Babbling is similar across cultures."]
  ]],
  ["3.6", "Social-Emotional Development Across the Lifespan", [
    ["A toddler explores confidently with mom present and is comforted when she returns. This is", "secure attachment", ["avoidant attachment", "anxious-ambivalent attachment", "disorganized attachment"], "Ainsworth's Strange Situation."],
    ["Harlow's monkeys preferred a cloth mother over a wire mother with food, showing the importance of", "contact comfort", ["feeding", "imprinting", "reinforcement"], "Comfort mattered more than food."],
    ["A teenager trying different identities is in Erikson's stage of", "identity vs. role confusion", ["intimacy vs. isolation", "trust vs. mistrust", "industry vs. inferiority crisis"], "Adolescence."],
    ["Parents who are warm but set clear rules use", "authoritative parenting", ["authoritarian parenting", "permissive parenting", "neglectful parenting"], "Linked to positive outcomes."],
    ["Ducklings following the first moving object they see shows", "imprinting", ["contact comfort", "secure attachment", "assimilation"], "Lorenz's research."],
    ["An older adult reflecting on life with satisfaction is resolving", "integrity vs. despair", ["generativity vs. stagnation", "intimacy vs. isolation", "trust vs. mistrust"], "Erikson's final stage."]
  ]],
  ["3.7", "Classical Conditioning", [
    ["A dog salivates at a bell after it's paired with food. The bell is the", "conditioned stimulus", ["unconditioned stimulus", "conditioned response", "unconditioned response"], "It was neutral before pairing."],
    ["In Little Albert's case, the loud noise was the", "unconditioned stimulus", ["conditioned stimulus", "neutral stimulus", "conditioned response"], "It naturally caused fear."],
    ["If a bell is repeatedly presented without food, salivation stops. This is", "extinction", ["spontaneous recovery", "stimulus generalization", "stimulus discrimination"], "The CR fades."],
    ["After extinction, salivation returns briefly after a rest. This is", "spontaneous recovery", ["higher-order conditioning", "acquisition", "stimulus discrimination training"], "The CR reappears."],
    ["A child afraid of one dog becomes afraid of all dogs. This is", "stimulus generalization", ["discrimination", "extinction", "acquisition"], "Similar stimuli trigger the CR."],
    ["Getting sick after eating a food and then avoiding it shows", "taste aversion", ["operant conditioning", "latent learning", "insight"], "Garcia's research: one trial can be enough."]
  ]],
  ["3.8", "Operant Conditioning", [
    ["A child gets a sticker for cleaning her room and cleans more often. This is", "positive reinforcement", ["negative reinforcement", "positive punishment", "negative punishment"], "Adding something pleasant increases behavior."],
    ["Taking aspirin to remove a headache, and doing so more often, is", "negative reinforcement", ["positive reinforcement", "negative punishment", "positive punishment"], "Removing something unpleasant increases behavior."],
    ["Taking away a teen's phone for breaking curfew is", "negative punishment", ["positive punishment", "negative reinforcement", "positive reinforcement"], "Removing something pleasant decreases behavior."],
    ["Slot machines pay off after an unpredictable number of plays. This is a", "variable-ratio schedule", ["fixed-ratio schedule of pay", "fixed-interval schedule", "variable-interval schedule"], "Produces high, steady responding."],
    ["Getting paid every two weeks is a", "fixed-interval schedule", ["fixed-ratio schedule", "variable-ratio schedule", "variable-interval schedule"], "Reinforcement after a set time."],
    ["Rewarding successive approximations of a behavior is", "shaping", ["chaining", "extinction", "generalization"], "Used to train complex behaviors."]
  ]],
  ["3.9", "Social, Cognitive, and Neurological Factors in Learning", [
    ["Children imitating an adult hitting a Bobo doll shows", "observational learning", ["classical conditioning", "insight learning", "latent learning of failure"], "Bandura's research."],
    ["A rat explores a maze without reward and later runs it quickly when food appears. This is", "latent learning", ["insight learning", "observational learning", "shaping"], "Tolman's cognitive maps."],
    ["A chimp suddenly stacks boxes to reach a banana. This is", "insight learning", ["latent learning of helplessness", "trial and error", "shaping"], "Köhler's research."],
    ["Believing that trying won't help after repeated failures is", "learned helplessness", ["latent learning in children", "insight into failure", "self-efficacy"], "Seligman's research."],
    ["Mirror neurons may help explain", "imitation and empathy", ["classical conditioning", "long-term memory", "color vision"], "They fire when watching or doing an action."],
    ["Bandura found that children were less likely to imitate aggression when the model was", "punished", ["rewarded", "ignored", "an adult"], "Vicarious punishment reduces imitation."]
  ]]
]},
{ n: 4, name: "Social Psychology and Personality", weight: "15–25%", topics: [
  ["4.1", "Attribution Theory and Person Perception", [
    ["Assuming a coworker is late because she's lazy, not because of traffic, is the", "fundamental attribution error", ["self-serving bias", "actor-observer bias", "the just-world phenomenon"], "Overemphasizing personality in others."],
    ["Taking credit for a win but blaming the referee for a loss is the", "self-serving bias", ["fundamental attribution error", "false consensus effect", "halo effect"], "Protecting self-esteem."],
    ["Believing victims of misfortune must have deserved it reflects the", "just-world phenomenon", ["halo effect", "self-fulfilling prophecy", "false consensus effect"], "The belief that the world is fair."],
    ["A teacher expects a student to do well, treats her differently, and she does well. This is a", "self-fulfilling prophecy", ["halo effect", "just-world phenomenon", "attribution error"], "Expectations cause the outcome."],
    ["Assuming an attractive person is also kind and smart is the", "halo effect", ["self-serving bias", "false consensus effect", "mere exposure effect"], "One positive trait colors others."],
    ["People in collectivist cultures are less likely to make the fundamental attribution error because they", "focus more on situational factors", ["focus more on stable personality traits", "don't judge others", "ignore context"], "Culture shapes attributions."]
  ]],
  ["4.2", "Attitude Formation and Attitude Change", [
    ["A smoker who knows smoking is harmful feels uncomfortable and says 'It helps my stress.' This reduces", "cognitive dissonance", ["the halo effect", "groupthink pressure", "the foot-in-the-door effect"], "Justifying behavior to reduce tension."],
    ["Agreeing to a small request and then a larger one shows the", "foot-in-the-door phenomenon", ["the door-in-the-face technique", "the mere exposure effect", "central route"], "Small commitments increase compliance."],
    ["Refusing a huge request and then agreeing to a smaller one shows the", "door-in-the-face technique", ["foot-in-the-door phenomenon", "mere exposure effect", "halo effect of the singer"], "The second request seems reasonable."],
    ["A voter persuaded by detailed policy arguments used the", "central route to persuasion", ["peripheral route", "mere exposure effect", "halo effect"], "Careful thinking about content."],
    ["Liking a song more after hearing it many times is the", "mere exposure effect", ["cognitive dissonance reduction", "halo effect", "reciprocity norm"], "Familiarity breeds liking."],
    ["Being persuaded by a celebrity's appearance rather than facts is the", "peripheral route to persuasion", ["central route", "the reduction of cognitive dissonance", "foot-in-the-door"], "Superficial cues."]
  ]],
  ["4.3", "Psychology of Groups", [
    ["Participants in Asch's study gave wrong answers to match the group. This is", "conformity", ["obedience", "social loafing by musicians", "groupthink"], "Changing behavior to fit the group."],
    ["Participants in Milgram's study gave shocks when told to by an experimenter. This shows", "obedience to authority", ["conformity", "deindividuation", "social facilitation"], "Following orders."],
    ["Group members putting in less effort because their work isn't measured is", "social loafing", ["social facilitation", "groupthink", "deindividuation"], "Less individual accountability."],
    ["An expert pianist plays better in front of an audience. This is", "social facilitation", ["social loafing", "deindividuation", "group polarization effect"], "Audiences improve well-learned tasks."],
    ["People losing self-awareness in a masked crowd is", "deindividuation", ["social facilitation", "conformity", "the bystander effect"], "Anonymity reduces restraint."],
    ["Fewer people help in an emergency when many others are present. This is the", "bystander effect", ["social loafing", "groupthink", "obedience"], "Diffusion of responsibility."]
  ]],
  ["4.4", "Psychology of Culture", [
    ["Valuing group harmony over personal goals is typical of", "collectivist cultures", ["individualist cultures", "all cultures equally", "no cultures"], "Common in East Asia."],
    ["Judging another culture's customs as strange by your own standards is", "ethnocentrism", ["cultural relativism", "acculturation", "full assimilation"], "Seeing your culture as the norm."],
    ["An immigrant adapting to a new culture while keeping her own is", "acculturation", ["assimilation", "ethnocentrism", "deindividuation"], "Blending cultures."],
    ["Unfavorable attitudes toward a group are", "prejudice", ["discrimination", "stereotypes", "ingroup bias"], "Discrimination is behavior."],
    ["Favoring members of your own group is", "ingroup bias", ["outgroup homogeneity", "scapegoating", "the false consensus effect"], "'Us vs. them.'"],
    ["Believing members of other groups are all alike is", "outgroup homogeneity bias", ["ingroup bias", "the false consensus effect", "prejudice only"], "Seeing 'them' as all the same."]
  ]],
  ["4.5", "Introduction to Personality", [
    ["The Minnesota Multiphasic Personality Inventory (MMPI) is a", "self-report inventory", ["projective test", "case study", "behavioral observation"], "Objective questionnaire."],
    ["The Rorschach inkblot test is a", "projective test", ["self-report inventory", "structured interview", "IQ test"], "Reveals unconscious thoughts."],
    ["A weakness of self-report personality tests is", "people may answer to look good", ["scoring is subjective", "they take hours to score", "they have no norms"], "Social desirability bias."],
    ["A criticism of projective tests is", "low reliability and validity", ["they're too objective", "they're too short to be useful", "they use standardized scoring"], "Interpretations vary."],
    ["The Big Five traits are measured mainly through", "self-report inventories", ["inkblot tests", "dream analysis", "projective inkblot tests"], "Trait theorists use questionnaires."],
    ["A personality test that gives the same results over time has high", "reliability", ["validity", "projection", "standardization only"], "Consistency."]
  ]],
  ["4.6", "Psychodynamic and Humanistic Theories of Personality", [
    ["A man who is angry at his boss yells at his dog. This defense mechanism is", "displacement", ["projection of anger", "repression", "sublimation of anger"], "Redirecting feelings to a safer target."],
    ["Someone who dislikes a coworker claims the coworker dislikes them. This is", "projection", ["displacement", "denial", "reaction formation"], "Attributing your feelings to others."],
    ["Channeling aggressive impulses into boxing is", "sublimation", ["displacement", "regression", "denial"], "Acceptable outlets."],
    ["Acting overly kind to someone you dislike is", "reaction formation", ["projection", "rationalization", "sublimation"], "Doing the opposite of true feelings."],
    ["Rogers believed healthy development requires", "unconditional positive regard", ["strict discipline", "resolving the Oedipus complex", "a strong superego"], "Acceptance without conditions."],
    ["Maslow's highest need, fulfilling one's potential, is", "self-actualization", ["esteem", "love and belongingness", "safety"], "Top of the hierarchy."]
  ]],
  ["4.7", "Social-Cognitive and Trait Theories of Personality", [
    ["A student who believes she can succeed if she studies has high", "self-efficacy", ["external locus of control", "neuroticism", "learned helplessness"], "Belief in one's ability."],
    ["Believing that luck determines your grades reflects an", "external locus of control", ["internal locus of control", "high self-efficacy", "growth mindset"], "Outcomes seen as outside your control."],
    ["An organized, dependable person scores high in", "conscientiousness", ["openness to experience", "extraversion", "agreeableness and warmth"], "A Big Five trait."],
    ["Someone who often feels anxious and moody scores high in", "neuroticism", ["agreeableness", "conscientiousness", "extraversion"], "Emotional instability."],
    ["Bandura's reciprocal determinism states that behavior, personal factors, and environment", "all influence one another", ["are unrelated", "are fixed at birth", "depend only on inherited genes"], "A social-cognitive view."],
    ["A person who loves trying new foods and ideas scores high in", "openness to experience", ["neuroticism", "conscientiousness", "introversion"], "Curiosity and creativity."]
  ]],
  ["4.8", "Motivation", [
    ["Studying because you enjoy the subject is", "intrinsic motivation", ["extrinsic motivation", "drive reduction", "incentive theory of motivation"], "Internal satisfaction."],
    ["Studying only to earn money from parents is", "extrinsic motivation", ["intrinsic motivation", "self-actualization", "homeostasis"], "External rewards."],
    ["Drinking water to reduce thirst reflects", "drive-reduction theory", ["arousal theory of motivation", "incentive theory of motivation", "instinct theory"], "Restoring homeostasis."],
    ["Performing best at a moderate level of arousal reflects the", "Yerkes-Dodson law", ["James-Lange theory", "drive-reduction theory", "overjustification effect"], "Too much or too little arousal hurts performance."],
    ["Rewarding kids for reading they already enjoy, then seeing interest drop, is the", "overjustification effect", ["Yerkes-Dodson law of arousal", "self-efficacy", "drive reduction"], "External rewards can undermine intrinsic motivation."],
    ["Damage to the lateral hypothalamus in rats causes them to", "stop eating", ["overeat", "sleep more", "become aggressive"], "It signals hunger."]
  ]],
  ["4.9", "Emotion", [
    ["The theory that emotions come from noticing body changes (we feel afraid because we tremble) is", "the James-Lange theory", ["the Cannon-Bard theory", "the Schachter-Singer two-factor theory", "the facial feedback hypothesis"], "Physiology comes first."],
    ["The theory that arousal and emotion happen at the same time is", "the Cannon-Bard theory", ["the James-Lange theory", "the two-factor theory", "cognitive appraisal theory"], "Simultaneous response."],
    ["Schachter and Singer's two-factor theory says emotion requires", "arousal plus a cognitive label", ["arousal only", "a label only", "facial expressions and posture only"], "We interpret arousal."],
    ["Smiling making you feel happier supports the", "facial feedback hypothesis", ["Cannon-Bard theory", "James-Lange theory only", "two-factor theory"], "Expressions influence feelings."],
    ["Basic facial expressions like happiness are recognized across cultures, suggesting they are", "universal", ["learned only", "culture-specific", "random"], "Ekman's research."],
    ["Display rules are", "cultural norms about showing emotions", ["universal facial expressions of emotion", "brain structures that control facial muscles", "types of arousal"], "They vary by culture."]
  ]]
]},
{ n: 5, name: "Mental and Physical Health", weight: "15–25%", topics: [
  ["5.1", "Introduction to Health Psychology", [
    ["Alarm, resistance, and exhaustion are stages of", "the general adaptation syndrome", ["grief", "sleep", "Piaget's stage theory of stress"], "Selye's stress model."],
    ["Chronic stress weakens health by", "suppressing the immune system", ["strengthening the immune system", "lowering cortisol", "increasing sleep"], "Prolonged cortisol release."],
    ["Making a study plan to handle exam stress is", "problem-focused coping", ["emotion-focused coping", "denial", "learned helplessness"], "Addressing the stressor."],
    ["Talking with friends to feel better about a stressor you can't change is", "emotion-focused coping", ["problem-focused coping", "avoidance", "sublimation"], "Managing emotional reactions."],
    ["Type A personalities are linked to", "higher risk of heart disease", ["lower stress", "more relaxation", "fewer health problems overall"], "Hostility and time urgency."],
    ["Daily hassles such as traffic can", "add up to significant stress", ["reduce overall stress levels", "have no effect", "only affect children and teens"], "Small stressors accumulate."]
  ]],
  ["5.2", "Positive Psychology", [
    ["Positive psychology focuses on", "strengths and well-being", ["mental illness only", "unconscious childhood conflicts", "conditioning"], "Seligman founded it."],
    ["Writing in a gratitude journal is linked to", "increased happiness", ["more anxiety", "lower well-being", "no change"], "Gratitude boosts well-being."],
    ["Being fully absorbed in a challenging task is called", "flow", ["resilience", "learned helplessness", "adaptation"], "Csikszentmihalyi's concept."],
    ["Returning to a baseline level of happiness after good or bad events is the", "adaptation-level phenomenon", ["flow state", "the overjustification effect", "facial feedback"], "People adapt to changes."],
    ["Recovering well from adversity is", "resilience", ["neuroticism", "learned helplessness", "denial"], "Bouncing back."],
    ["Which is most strongly linked to happiness?", "Close relationships", ["Great wealth", "Physical attractiveness", "Age and life stage"], "Social connection matters most."]
  ]],
  ["5.3", "Explaining and Classifying Psychological Disorders", [
    ["The DSM-5-TR is used to", "diagnose psychological disorders", ["treat disorders with medication", "measure intelligence", "study sleep"], "It lists diagnostic criteria."],
    ["The biopsychosocial approach explains disorders as", "a mix of biological, psychological, and social factors", ["caused only by genes", "caused only by traumatic events experienced in early childhood", "caused by demons"], "Multiple influences."],
    ["The diathesis-stress model says disorders develop when", "a predisposition meets stressful events", ["stress alone is present, without any vulnerability", "genes alone are present", "no stress occurs"], "Vulnerability plus stress."],
    ["A criticism of diagnostic labels is that they can", "lead to stigma", ["improve treatment always", "remove all bias", "cure disorders"], "Labels affect perceptions."],
    ["Behavior is considered disordered when it is", "deviant, distressful, and dysfunctional", ["unusual only", "common in the general population", "chosen freely"], "The 3 Ds."],
    ["Rosenhan's study, in which healthy people were admitted to hospitals, showed", "the power of diagnostic labels", ["that all of the patients were truly ill", "that hospitals never err", "that disorders are rare in hospitals"], "Labels shaped how staff saw them."]
  ]],
  ["5.4", "Selection of Categories of Psychological Disorders", [
    ["Persistent sadness and loss of interest for more than two weeks suggests", "major depressive disorder", ["bipolar disorder", "generalized anxiety disorder (GAD)", "schizophrenia"], "Core symptoms of depression."],
    ["Alternating between depression and mania suggests", "bipolar disorder", ["major depressive disorder", "OCD", "PTSD"], "Mood swings between extremes."],
    ["Hearing voices that others don't hear is a", "hallucination", ["delusion", "compulsion", "phobia"], "A positive symptom of schizophrenia."],
    ["Repeated handwashing to reduce anxiety about germs is a symptom of", "obsessive-compulsive disorder", ["generalized anxiety disorder", "PTSD", "panic disorder"], "Obsessions and compulsions."],
    ["Flashbacks and nightmares after combat suggest", "PTSD", ["OCD", "specific phobia", "bipolar disorder"], "Trauma-related disorder."],
    ["Sudden episodes of intense fear with a racing heart suggest", "panic disorder", ["generalized anxiety disorder", "specific phobia", "schizophrenia"], "Unexpected panic attacks."]
  ]],
  ["5.5", "Treatment of Psychological Disorders", [
    ["A therapist helps a client identify and change irrational thoughts. This is", "cognitive therapy", ["psychoanalysis", "person-centered therapy", "systematic desensitization"], "Changing thinking patterns."],
    ["Gradually exposing a client to feared situations while relaxing is", "systematic desensitization", ["aversion therapy with rewards", "free association", "token economy with rewards"], "A behavioral therapy."],
    ["A therapist who listens with empathy and unconditional positive regard uses", "person-centered therapy", ["cognitive-behavioral therapy", "psychoanalysis", "behavior therapy"], "Rogers's humanistic approach."],
    ["Psychoanalysts use free association to", "uncover unconscious conflicts", ["change irrational thoughts", "reward behavior", "prescribe medication"], "Freud's method."],
    ["SSRIs are commonly prescribed for", "depression", ["schizophrenia", "ADHD only", "insomnia only"], "They increase serotonin."],
    ["A hospital ward rewarding patients with tokens for good behavior uses a", "token economy", ["systematic desensitization", "free association", "cognitive therapy"], "Operant conditioning."]
  ]]
]}
);
