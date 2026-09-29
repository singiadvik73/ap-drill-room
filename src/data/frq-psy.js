// AP Psychology: free-response questions, one per CED topic (Claude version only).
// Each topic: [stimulus, [[part prompt, rubric], ...]]. Every part is worth 1 point; Claude grades only against the rubric.
// Like the AP exam, parts ask students to apply a concept to the scenario: a definition alone does not earn the point.
window.AP_FRQ = window.AP_FRQ || {};
AP_FRQ.psy = {
"1.1": ["Researchers compare identical twins raised apart with fraternal twins raised together to study the causes of differences in intelligence and personality.", [
  ["Explain why identical twins raised apart are especially useful for studying the role of heredity.", "Earns the point for explaining that they share (nearly) all their genes but grew up in different environments, so their similarities are likely due to genetics."],
  ["The researchers report that a trait has a heritability of 0.6. Explain one limitation of what this number tells us.", "Earns the point for explaining that heritability describes the proportion of variation in a group due to genes, so it can't say how much of one individual's trait comes from genes, OR that heritability can change when environments change."],
  ["Explain how epigenetics could make identical twins raised apart become less similar over time.", "Earns the point for explaining that different environments/experiences (stress, diet, toxins) can turn genes on or off (e.g., by methylation) without changing DNA, so the twins' genes are expressed differently."]
]],
"1.2": ["Maya is hiking when she sees a snake. Her heart races and she jumps back before she realizes what happened. Ten minutes later, she has calmed down and continues hiking.", [
  ["Explain how Maya's sympathetic nervous system is involved in her reaction to the snake.", "Earns the point for explaining that the sympathetic nervous system triggered fight-or-flight arousal: faster heart rate, faster breathing, adrenaline release, preparing her to escape."],
  ["Explain how Maya's parasympathetic nervous system is involved as she calms down.", "Earns the point for explaining that the parasympathetic system returns her body to a resting state: slowing heart rate and breathing, conserving energy."],
  ["Explain how the speed of Maya's jump could involve a pathway that does not require conscious processing in the cortex.", "Earns the point for explaining a fast pathway that bypasses conscious processing: a spinal reflex (sensory neuron → interneuron in spinal cord → motor neuron), or a fast route through the thalamus to the amygdala that triggers a response before the cortex recognizes the snake."]
]],
"1.3": ["When Leo touches a hot stove, a message travels along his neurons and he pulls his hand away. His doctor says Leo has a condition that damaged the myelin on some of his neurons.", [
  ["Explain the role of the action potential in sending the message about the hot stove.", "Earns the point for explaining that when the neuron is stimulated past its threshold, an electrical impulse (action potential) travels down the axon toward the terminal buttons."],
  ["Explain how the all-or-none principle applies when Leo touches a very hot stove versus a warm stove.", "Earns the point for explaining that each neuron fires at full strength or not at all; a hotter stove causes more neurons to fire and/or a faster firing rate, not a bigger action potential."],
  ["Explain how damaged myelin could affect Leo's reaction to the stove.", "Earns the point for explaining that myelin speeds up transmission of impulses, so damage slows the message and Leo would react more slowly (or signals may be disrupted)."]
]],
"1.4": ["Jordan drinks several cups of coffee each day to stay alert. After surgery, Jordan's friend takes an opioid painkiller prescribed by a doctor.", [
  ["Explain how caffeine affects Jordan's nervous system.", "Earns the point for explaining that caffeine is a stimulant that increases nervous system activity/alertness (e.g., by blocking adenosine receptors that normally promote sleepiness)."],
  ["Explain how the opioid reduces the friend's pain, using the concept of an agonist.", "Earns the point for explaining that opioids are agonists that mimic endorphins, binding to the same receptors and producing pain relief."],
  ["Jordan notices that one cup of coffee no longer has much effect. Explain this using the concept of tolerance.", "Earns the point for explaining that with repeated use, the brain adapts, so Jordan needs more caffeine to get the same effect."]
]],
"1.5": ["After a stroke in the left hemisphere of his brain, Mr. Garcia can understand what people say but struggles to produce words. His right hand is also weak. After months of therapy, he regains some speech.", [
  ["Identify the brain area most likely damaged, based on his speech symptoms, and explain.", "Earns the point for Broca's area (left frontal lobe), because it controls speech production while comprehension (Wernicke's area) is intact."],
  ["Explain why a stroke in the left hemisphere weakened Mr. Garcia's right hand.", "Earns the point for explaining contralateral control: the motor cortex in the left hemisphere controls movement on the right side of the body."],
  ["Explain how neuroplasticity could account for his partial recovery.", "Earns the point for explaining that the brain can reorganize, forming new connections so other areas take over some lost functions."]
]],
"1.6": ["Sam, a high school student, stays up until 2 a.m. most nights on his phone, sleeps in late on weekends, and has trouble concentrating in class.", [
  ["Explain how Sam's sleep schedule could disrupt his circadian rhythm.", "Earns the point for explaining that irregular sleep times and late light exposure (screen light suppressing melatonin) throw off his roughly 24-hour biological clock, making him alert at night and tired during the day."],
  ["Explain how missing REM sleep could affect Sam's performance in school.", "Earns the point for explaining that REM sleep is linked to memory consolidation/learning, so losing it could impair remembering what he studied (or mood/attention)."],
  ["Explain how one theory of why we sleep relates to Sam's trouble concentrating.", "Earns the point for applying a theory to Sam: restoration (brain and body don't recover), memory consolidation (learning isn't stored), or cognitive development/brain maintenance."]
]],
"1.7": ["Nina walks into a room with a strong perfume smell. After a few minutes, she no longer notices it. Later, she walks from a sunny street into a dark movie theater and can barely see at first.", [
  ["Explain Nina's experience with the perfume using sensory adaptation.", "Earns the point for explaining that her smell receptors reduced their response to the constant, unchanging stimulus, so she stopped noticing it."],
  ["Explain the role of rods in Nina's vision after several minutes in the dark theater.", "Earns the point for explaining that rods, which are sensitive to dim light, gradually adjust (dark adaptation), letting her see in low light (in black and white/gray)."],
  ["Explain how the absolute threshold relates to whether Nina can detect a very faint smell.", "Earns the point for explaining that she will detect it only if the stimulus is at or above the minimum intensity needed to detect it 50% of the time."]
]],
"2.1": ["Priya reads a note in her friend's messy handwriting. She can make out the words because she knows the note is about their weekend plans.", [
  ["Explain how top-down processing helps Priya read the note.", "Earns the point for explaining that she uses expectations/prior knowledge of the context (weekend plans) to interpret unclear letters."],
  ["Explain how a Gestalt principle could help Priya see a word even when some letters are missing strokes.", "Earns the point for applying a principle, e.g., closure (filling in gaps to see complete letters), proximity (grouping letters close together into words), or continuity."],
  ["Explain how perceptual set could lead Priya to misread a word.", "Earns the point for explaining that her expectations could make her perceive the word she expects to see even if the note says something else."]
]],
"2.2": ["Lina meets a quiet man in a suit who reads financial newspapers. She assumes he is a banker rather than a teacher, even though there are many more teachers than bankers.", [
  ["Explain how the representativeness heuristic influenced Lina's judgment.", "Earns the point for explaining that she judged by how closely he matched her prototype/stereotype of a banker, ignoring base rates (there are more teachers)."],
  ["Explain how the availability heuristic could lead Lina to overestimate how dangerous flying is after seeing news coverage of a plane crash.", "Earns the point for explaining that vivid, easily recalled examples make the event seem more common/likely than it is."],
  ["Explain how confirmation bias could keep Lina believing the man is a banker.", "Earns the point for explaining that she might notice information that supports her belief and ignore or dismiss evidence that he's a teacher."]
]],
"2.3": ["Carlos reads a history textbook, keeping dates in mind while he figures out the order of events. The next day he remembers the facts, and he can still type quickly without looking at the keyboard.", [
  ["Explain how Carlos uses working memory while reading.", "Earns the point for explaining that he actively holds and manipulates information (dates, order of events) in a limited, temporary workspace."],
  ["Explain the difference between the memory of the history facts and his typing skill, using explicit and implicit memory.", "Earns the point for explaining that history facts are explicit (declarative, consciously recalled) while typing is implicit (procedural, performed without conscious recall)."],
  ["Explain the role of the hippocampus in Carlos remembering the facts the next day.", "Earns the point for explaining that the hippocampus helps form and consolidate new explicit memories for long-term storage."]
]],
"2.4": ["Maria studies Spanish vocabulary by thinking about how each word relates to her own life. Her friend Dana simply repeats each word aloud.", [
  ["Explain why Maria will likely remember more words than Dana, using levels of processing.", "Earns the point for explaining that Maria uses deep (semantic) processing of meaning, while Dana uses shallow processing (sound/repetition), and deeper processing leads to better retention."],
  ["Explain how the self-reference effect applies to Maria's strategy.", "Earns the point for explaining that information related to oneself is encoded more richly and remembered better."],
  ["Explain how Dana could use a mnemonic device to improve her memory of the words.", "Earns the point for applying a specific mnemonic (method of loci, acronym, peg-word, chunking, keyword/imagery) to learning the vocabulary."]
]],
"2.5": ["Jake cannot remember anything from his third birthday party, but he remembers how to ride a bike even though he hasn't ridden in years.", [
  ["Explain why Jake cannot remember his third birthday, using infantile amnesia.", "Earns the point for explaining that memories from before about age 3–4 are rarely retained, because the hippocampus/brain areas for storing explicit memories and language weren't mature."],
  ["Explain why Jake still remembers how to ride a bike.", "Earns the point for explaining that bike riding is procedural (implicit) memory, which is durable and stored differently (e.g., cerebellum/basal ganglia)."],
  ["Explain how long-term potentiation is involved when Jake first learns to ride.", "Earns the point for explaining that repeated practice strengthens synaptic connections (neurons fire together more efficiently), forming the memory."]
]],
"2.6": ["Emma forgets an answer during a test in a different room, but later remembers it when she returns to the classroom where she studied. On multiple-choice questions, she does much better than on fill-in-the-blank questions.", [
  ["Explain Emma's experience of remembering in the classroom, using context-dependent memory.", "Earns the point for explaining that being in the same environment where she encoded the information provides retrieval cues."],
  ["Explain why Emma does better on multiple-choice questions, using recall and recognition.", "Earns the point for explaining that multiple choice uses recognition (identifying the answer from options), which is easier than recall (retrieving without cues) required for fill-in-the-blank."],
  ["Emma studies a list of 20 terms. Explain which terms she is most likely to remember, using the serial position effect.", "Earns the point for explaining that she'll best remember terms at the beginning (primacy) and end (recency) of the list."]
]],
"2.7": ["After moving, Ava learns a new phone number. Now she cannot remember her old number. Later, a police officer asks a witness how fast a car was going when it 'smashed' into another car, and the witness remembers broken glass that wasn't there.", [
  ["Explain Ava's difficulty remembering her old number, using retroactive interference.", "Earns the point for explaining that the newly learned number disrupts retrieval of the old number."],
  ["Explain how proactive interference could affect Ava when she first tries to recall her new number.", "Earns the point for explaining that the old number interferes with recalling the new one (e.g., she dials the old number)."],
  ["Explain the witness's memory of broken glass, using the misinformation effect.", "Earns the point for explaining that the misleading word 'smashed' after the event altered the memory, leading to false details."]
]],
"2.8": ["A school uses one intelligence test to place students in advanced programs. The test gives very different scores when the same students take it two weeks apart.", [
  ["Explain what the result suggests about the test's reliability.", "Earns the point for explaining that the test has low reliability because it doesn't produce consistent scores for the same people."],
  ["Explain why a test must be valid to be used for placement.", "Earns the point for explaining that it must actually measure the ability it claims to (or predict success in the program); otherwise students could be misplaced."],
  ["Explain how stereotype threat could lower some students' scores.", "Earns the point for explaining that students worried about confirming a negative stereotype about their group may feel anxious and perform worse."]
]],
"3.1": ["A researcher tests the same group of children's memory at ages 5, 10, and 15. Another researcher tests 5-, 10-, and 15-year-olds all at once.", [
  ["Identify the design used by the first researcher and explain one advantage.", "Earns the point for longitudinal study, with an advantage: shows change within the same individuals over time/controls for cohort differences."],
  ["Identify the design used by the second researcher and explain one advantage.", "Earns the point for cross-sectional study, with an advantage: quicker, cheaper, no participant dropout."],
  ["Explain how cohort effects could affect the second researcher's results.", "Earns the point for explaining that differences between age groups could be due to growing up at different times (e.g., technology, schooling) rather than age."]
]],
"3.2": ["A newborn turns its head toward a touch on the cheek. Years later, the child experiences puberty at age 12.", [
  ["Identify the newborn reflex described and explain its purpose.", "Earns the point for the rooting reflex, which helps the infant find the nipple to feed."],
  ["Explain how maturation influences when children learn to walk.", "Earns the point for explaining that walking depends on biological growth (nervous system, muscles) that unfolds on a timetable; practice can't make it happen much earlier."],
  ["Explain how the prefrontal cortex's development could affect the child's decisions as a teenager.", "Earns the point for explaining that the prefrontal cortex (judgment, impulse control) matures into the mid-20s, so teens may be more impulsive or risk-taking."]
]],
"3.3": ["Four-year-old Riley insists that only girls can be doctors' helpers because that's what she saw on TV. Her parents praise her for playing with dolls.", [
  ["Explain how social learning theory accounts for Riley's view.", "Earns the point for explaining that Riley learned gender behavior by observing models (TV, parents) and being reinforced (praise)."],
  ["Explain how gender schema theory accounts for Riley's view.", "Earns the point for explaining that Riley has developed a mental framework for what boys and girls do, and uses it to organize her perceptions."],
  ["Explain one biological influence on gender development.", "Earns the point for explaining an influence such as sex hormones (e.g., prenatal testosterone) or sex chromosomes (XX/XY) affecting development."]
]],
"3.4": ["Lucas, age 4, believes a tall thin glass holds more juice than a short wide glass with the same amount. His older sister helps him solve a puzzle he couldn't solve alone.", [
  ["Identify Lucas's stage in Piaget's theory and explain how his belief shows it.", "Earns the point for preoperational stage, because he lacks conservation (doesn't understand quantity stays the same when shape changes)."],
  ["Explain how Lucas's sister's help reflects Vygotsky's zone of proximal development.", "Earns the point for explaining that the puzzle is within the range Lucas can do with help but not alone; her scaffolding allows him to succeed."],
  ["Explain how Lucas will think differently in Piaget's concrete operational stage.", "Earns the point for explaining he'll understand conservation and think logically about concrete events."]
]],
"3.5": ["A toddler says 'I goed to the park' and 'two mouses.' Her parents speak to her often.", [
  ["Explain the toddler's errors using overgeneralization.", "Earns the point for explaining that she applies regular grammar rules (-ed, -s) to irregular words."],
  ["Explain how the errors support Chomsky's theory of language acquisition.", "Earns the point for explaining that she's not imitating (adults don't say 'goed'); she's applying rules, suggesting an innate ability to learn grammar."],
  ["Explain how the parents' behavior supports a learning perspective on language.", "Earns the point for explaining that hearing and imitating language, and being reinforced, helps children learn words."]
]],
"3.6": ["In a strange situation study, a toddler explores while her mother is present, becomes upset when she leaves, and is quickly comforted when she returns. Her 16-year-old brother is trying out different styles and friend groups.", [
  ["Identify the toddler's attachment style and explain.", "Earns the point for secure attachment because she explores with mom as a safe base, is distressed by separation, and is comforted at reunion."],
  ["Explain how Harlow's research relates to the toddler's attachment.", "Earns the point for explaining that Harlow's monkeys preferred the soft cloth mother, showing attachment is based on contact comfort, not just feeding."],
  ["Explain the brother's behavior using Erikson's identity vs. role confusion stage.", "Earns the point for explaining that adolescents explore roles to form a stable sense of self."]
]],
"3.7": ["Every time Ana opens a can of food, her dog hears the can opener and gets fed. Now the dog salivates when it hears the can opener.", [
  ["Identify the unconditioned stimulus and unconditioned response.", "Earns the point for US = food and UR = salivation to food. Both needed."],
  ["Identify the conditioned stimulus and conditioned response.", "Earns the point for CS = can opener sound and CR = salivation to the sound. Both needed."],
  ["Explain what would happen if Ana used the can opener many times without feeding the dog.", "Earns the point for explaining extinction: salivation to the sound would weaken and stop."]
]],
"3.8": ["A teacher gives students a sticker each time they turn in homework. Another teacher lets students skip a quiz if they participate every day.", [
  ["Identify the type of consequence used by the first teacher and explain.", "Earns the point for positive reinforcement because something desirable is added to increase homework."],
  ["Identify the type of consequence used by the second teacher and explain.", "Earns the point for negative reinforcement because something undesirable (quiz) is removed to increase participation."],
  ["Explain why a variable-ratio schedule would make students keep participating even when rewards stop.", "Earns the point for explaining that unpredictable reinforcement produces high, steady responding and resistance to extinction."]
]],
"3.9": ["Children watch an adult hit a Bobo doll and later hit the doll themselves. A rat wanders a maze without food and later runs it quickly once food is added.", [
  ["Explain the children's behavior using observational learning.", "Earns the point for explaining that they learned by watching and imitating a model."],
  ["Explain the rat's behavior using latent learning.", "Earns the point for explaining that the rat formed a cognitive map without reinforcement, showing it only once there was a reason (food)."],
  ["Explain how mirror neurons may be involved in the children's behavior.", "Earns the point for explaining that mirror neurons fire both when doing and when watching an action, possibly helping imitation."]
]],
"4.1": ["Tom thinks a classmate failed a test because she is lazy. When Tom fails a test, he blames the unfair questions.", [
  ["Explain Tom's judgment of his classmate using the fundamental attribution error.", "Earns the point for explaining that he overestimates personality (laziness) and underestimates situational factors."],
  ["Explain Tom's explanation for his own failure using the self-serving bias.", "Earns the point for explaining that he blames external factors for failure to protect self-esteem."],
  ["Explain how the just-world phenomenon could affect Tom's view of people who are poor.", "Earns the point for explaining he may believe they deserve their situation because the world is fair."]
]],
"4.2": ["Alex buys a sports drink after seeing a famous athlete endorse it. Later, Alex, who values health, feels uncomfortable after drinking three sugary drinks a day.", [
  ["Explain Alex's purchase using the peripheral route to persuasion.", "Earns the point for explaining that he was persuaded by a surface cue (celebrity) rather than evidence."],
  ["Explain Alex's discomfort using cognitive dissonance.", "Earns the point for explaining that his behavior conflicts with his belief, causing tension."],
  ["Explain one way Alex could reduce this discomfort.", "Earns the point for explaining changing the behavior (drinking less) or changing the belief/attitude (justifying the drinks)."]
]],
"4.3": ["In a class discussion, students agree with an obviously wrong answer because everyone else does. In a group project, some students do less work.", [
  ["Explain the discussion behavior using conformity.", "Earns the point for explaining that students changed their behavior to match the group due to social pressure."],
  ["Explain the group project behavior using social loafing.", "Earns the point for explaining that people exert less effort when their individual effort is not evaluated."],
  ["Explain how groupthink could affect the group's final project.", "Earns the point for explaining that desire for harmony may stop members from voicing doubts, leading to poor decisions."]
]],
"4.4": ["Kenji moves from the U.S. to Japan. He adjusts to Japanese norms but still celebrates American holidays.", [
  ["Explain Kenji's adjustment using acculturation.", "Earns the point for explaining that he adapts to a new culture while keeping parts of his original culture."],
  ["Explain how collectivism could affect Kenji's experience at work in Japan.", "Earns the point for explaining that group goals and harmony may be prioritized over personal achievement."],
  ["Explain how ethnocentrism could affect Kenji's view of Japanese customs.", "Earns the point for explaining he might judge Japanese customs as inferior by U.S. standards."]
]],
"4.5": ["A psychologist uses a self-report questionnaire to assess a client's personality. Another uses the Rorschach inkblot test.", [
  ["Explain one strength of the questionnaire.", "Earns the point for explaining it is standardized, quick, and objectively scored."],
  ["Explain one weakness of the questionnaire.", "Earns the point for explaining clients may respond dishonestly or in socially desirable ways."],
  ["Explain the reasoning behind using the Rorschach test.", "Earns the point for explaining that ambiguous stimuli are thought to reveal unconscious thoughts or feelings (though reliability/validity is weak)."]
]],
"4.6": ["A student who was bullied as a child has no memory of it. Another student's parents accept her no matter what grades she earns.", [
  ["Explain the first student's lack of memory using repression.", "Earns the point for explaining the defense mechanism of pushing painful memories into the unconscious."],
  ["Explain how the parents' behavior reflects unconditional positive regard.", "Earns the point for explaining acceptance without conditions promotes healthy self-concept."],
  ["Explain how Maslow's hierarchy of needs relates to self-actualization.", "Earns the point for explaining that after lower needs are met, people strive to fulfill their potential."]
]],
"4.7": ["Kara believes her grades depend on how hard she studies. She is organized, responsible, and dependable.", [
  ["Explain Kara's belief using internal locus of control.", "Earns the point for explaining that she believes she controls outcomes."],
  ["Explain which Big Five trait Kara shows most.", "Earns the point for conscientiousness."],
  ["Explain how self-efficacy could influence Kara's studying.", "Earns the point for explaining that belief in her ability motivates her to persist and succeed."]
]],
"4.8": ["Jaden studies to earn money from his parents for good grades. His sister studies because she loves learning.", [
  ["Explain Jaden's motivation using extrinsic motivation.", "Earns the point for explaining he's motivated by external rewards."],
  ["Explain the sister's motivation using intrinsic motivation.", "Earns the point for explaining she's motivated by internal satisfaction."],
  ["Explain how the Yerkes-Dodson law predicts test performance if Jaden is very anxious.", "Earns the point for explaining that too much arousal lowers performance, especially on complex tasks."]
]],
"4.9": ["Before a big test, Zoe's heart pounds. She interprets her feeling as excitement rather than fear.", [
  ["Explain Zoe's emotion using the two-factor theory.", "Earns the point for explaining that emotion results from arousal plus cognitive labeling."],
  ["Explain how the James-Lange theory would explain Zoe's emotion.", "Earns the point for explaining that she feels emotion because she notices her body's arousal (heart pounding)."],
  ["Explain how the facial feedback hypothesis could help Zoe feel calmer.", "Earns the point for explaining that smiling or relaxing her face could make her feel more positive."]
]],
"5.1": ["During exam week, Sophia sleeps little, feels overwhelmed, and catches a cold. She makes a study plan to reduce stress.", [
  ["Explain Sophia's illness using the effects of stress on the immune system.", "Earns the point for explaining that chronic stress suppresses the immune system, making illness more likely."],
  ["Explain which stage of the general adaptation syndrome Sophia is in.", "Earns the point for resistance or exhaustion, with explanation (prolonged stress wearing down resources)."],
  ["Explain Sophia's study plan using problem-focused coping.", "Earns the point for explaining that she addresses the stressor directly."]
]],
"5.2": ["Marcus writes in a gratitude journal every night and feels happier. His friend recovered quickly after a sports injury.", [
  ["Explain how Marcus's journaling relates to positive psychology.", "Earns the point for explaining that positive psychology studies strengths and practices that increase well-being."],
  ["Explain the friend's recovery using resilience.", "Earns the point for explaining the ability to recover from adversity."],
  ["Explain one factor that increases subjective well-being.", "Earns the point for explaining factors like strong relationships, gratitude, exercise, or meaningful activities."]
]],
"5.3": ["A clinician uses the DSM-5-TR to diagnose a patient. The patient worries that a diagnosis will change how others treat him.", [
  ["Explain the purpose of the DSM-5-TR.", "Earns the point for explaining that it provides standardized criteria for diagnosing disorders."],
  ["Explain the patient's worry using the concept of labeling/stigma.", "Earns the point for explaining that a diagnosis could lead others to view him through stereotypes."],
  ["Explain the biopsychosocial approach to understanding his disorder.", "Earns the point for explaining that biological, psychological, and social-cultural factors combine to influence disorders."]
]],
"5.4": ["For three weeks, Lucia has felt sad nearly every day, lost interest in activities, and felt tired. Her cousin hears voices that others cannot hear.", [
  ["Identify the disorder Lucia's symptoms suggest and explain.", "Earns the point for major depressive disorder, due to persistent sadness, loss of interest, and fatigue for at least two weeks."],
  ["Identify the cousin's symptom and a disorder associated with it.", "Earns the point for auditory hallucinations, associated with schizophrenia."],
  ["Explain one biological factor that could contribute to Lucia's disorder.", "Earns the point for explaining genetics, neurotransmitter imbalance (serotonin/norepinephrine), or brain activity differences."]
]],
"5.5": ["A therapist helps a patient identify and challenge irrational thoughts. Another patient with a fear of dogs is gradually exposed to dogs.", [
  ["Identify the type of therapy used with the first patient and explain.", "Earns the point for cognitive (or cognitive-behavioral) therapy, which changes irrational thinking."],
  ["Explain how exposure therapy helps the second patient.", "Earns the point for explaining that gradual exposure reduces fear through habituation/extinction."],
  ["Explain one biomedical treatment for depression.", "Earns the point for explaining medication (SSRIs), ECT, or TMS and how it works."]
]]
};
