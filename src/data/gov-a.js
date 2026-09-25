// AP United States Government and Politics — Units 1–2. Question format: [stem, correct, [distractors], explanation, figure?]
// Excerpts from founding documents are public domain.
window.AP_DATA = window.AP_DATA || {};
AP_DATA.gov = {
  id: "gov",
  name: "AP United States Government and Politics",
  short: "Gov",
  blurb: "How American government works: the Constitution, the three branches, civil liberties and rights, public opinion, and participation.",
  exam: "Exam: 55 MCQ (80 min) + 4 FRQ: concept application, quantitative analysis, SCOTUS comparison, argument essay (100 min)",
  units: []
};
AP_DATA.gov.units.push(
{ n: 1, name: "Foundations of American Democracy", weight: "15–22%", topics: [
  ["1.1", "Ideals of Democracy", [
    ["John Locke's idea of natural rights most directly influenced which document?", "The Declaration of Independence", ["The Articles of Confederation", "The Federalist Papers only", "Brutus No. 1"], "Jefferson's \"unalienable rights\" to life, liberty, and the pursuit of happiness echo Locke."],
    ["Social contract theory holds that", "people consent to be governed in exchange for the protection of their rights", ["kings rule by divine right", "government should have unlimited power", "states are more important than people"], "If government breaks the contract, the people may change it."],
    ["Popular sovereignty means that", "the government's power comes from the people", ["the most popular person rules", "the states hold all power", "the courts are supreme"], "The Constitution begins \"We the People.\""],
    ["Limited government is the idea that", "government power is restricted to protect individual rights", ["government has no power", "only the president can make laws", "states can ignore federal law"], "The Constitution lists and limits government powers."]
  ]],
  ["1.2", "Types of Democracy", [
    ["Participatory democracy emphasizes", "broad participation by citizens in politics and civil society", ["rule by elites", "interest groups competing", "only elected officials making decisions"], "Town meetings and ballot initiatives are examples."],
    ["Pluralist democracy emphasizes", "group-based activism by citizens with common interests", ["rule by a small wealthy group", "direct voting on every law", "one-party rule"], "Many groups compete for influence."],
    ["Elite democracy emphasizes", "limited participation, with educated or wealthy people making decisions", ["mass participation", "interest group competition", "direct democracy"], "The Electoral College is sometimes cited as an example."],
    ["Read the excerpt. Brutus is warning that", "a large republic cannot represent the diverse interests of its people", ["the states should be abolished", "a large republic will control factions", "the president should be stronger"], "Anti-Federalists favored small republics close to the people.", { t: "source", text: "In a large extended country, it is impossible to have a representation, possessing the sentiments, and of integrity, to declare the minds of the people, without having it so numerous and unwieldy, as to be subject in great measure to the inconveniency of a democratic government.", cite: "Brutus No. 1, 1787" }]
  ]],
  ["1.3", "Government Power and Individual Rights", [
    ["In Federalist No. 10, Madison argues that the best way to control factions is", "a large republic, where many factions compete", ["banning factions", "direct democracy", "a strong monarchy"], "Removing the causes of faction would destroy liberty, so he controlled their effects."],
    ["Read the excerpt. Madison is describing the purpose of", "separation of powers and checks and balances", ["federalism only", "judicial review", "the Bill of Rights"], "Each branch can resist encroachments by the others.", { t: "source", text: "Ambition must be made to counteract ambition... If men were angels, no government would be necessary... You must first enable the government to control the governed; and in the next place oblige it to control itself.", cite: "James Madison, Federalist No. 51, 1788" }],
    ["The Bill of Rights was added mainly in response to concerns from", "the Anti-Federalists", ["the Federalists", "the British", "the Supreme Court"], "They feared the new government would threaten individual liberties."],
    ["The tension between majority rule and minority rights is addressed in the Constitution by", "protections like the Bill of Rights and an independent judiciary", ["letting the majority decide everything", "abolishing elections", "giving states total power"], "Some rights can't be taken away by majority vote."]
  ]],
  ["1.4", "Challenges of the Articles of Confederation", [
    ["Under the Articles of Confederation, Congress could not", "levy taxes or regulate interstate commerce", ["declare war", "make treaties", "exist at all"], "It depended on states for money."],
    ["Shays' Rebellion showed the need for", "a stronger national government", ["a weaker national government", "a king", "more state power"], "Congress couldn't raise an army to stop it."],
    ["Amending the Articles required", "unanimous approval of the states", ["a majority of Congress", "the president's approval", "two-thirds of the states"], "This made change nearly impossible."],
    ["The Articles gave each state", "one vote in Congress regardless of population", ["votes based on population", "two senators", "no representation"], "Large states resented this."]
  ]],
  ["1.5", "Ratification of the U.S. Constitution", [
    ["The Great Compromise resolved the dispute over", "representation of large and small states in Congress", ["slavery", "the presidency", "taxes on imports"], "It created a bicameral legislature."],
    ["The Three-Fifths Compromise concerned", "how enslaved people would be counted for representation and taxation", ["the size of the Senate", "presidential terms", "the Bill of Rights"], "It increased Southern representation."],
    ["The Electoral College was a compromise between", "election of the president by Congress and by popular vote", ["the House and the Senate", "the states and the courts", "Federalists and the British"], "Delegates distrusted direct popular election."],
    ["Article V allows the Constitution to be amended, most commonly by", "a two-thirds vote of both houses of Congress and ratification by three-fourths of the states", ["a simple majority of Congress", "the president alone", "a national referendum"], "The process is difficult on purpose."]
  ]],
  ["1.6", "Principles of American Government", [
    ["The president's power to veto bills is an example of", "checks and balances", ["federalism", "judicial review", "popular sovereignty"], "The executive checks the legislature."],
    ["Read the excerpt. Madison argues that", "concentrating all powers in the same hands is the definition of tyranny", ["the states should hold all power", "the judiciary is the weakest branch", "factions should be eliminated"], "This supports separation of powers.", { t: "source", text: "The accumulation of all powers, legislative, executive, and judiciary, in the same hands, whether of one, a few, or many... may justly be pronounced the very definition of tyranny.", cite: "James Madison, Federalist No. 47, 1788" }],
    ["The Senate's power to confirm Supreme Court justices is a check on", "the president", ["the House", "the states", "interest groups"], "The president nominates; the Senate confirms."],
    ["Congress can override a presidential veto with", "a two-thirds vote in both houses", ["a simple majority in the House", "a three-fourths vote of the states", "a Supreme Court ruling"], "Overrides are rare."]
  ]],
  ["1.7", "Relationship Between the States and Federal Government", [
    ["Powers held by both the national and state governments, such as taxing, are called", "concurrent powers", ["reserved powers", "exclusive powers", "implied powers"], "Both levels can tax and borrow."],
    ["The Tenth Amendment reserves to the states", "powers not delegated to the national government", ["the power to declare war", "the power to coin money", "all powers of taxation"], "Examples include education and police powers."],
    ["Categorical grants", "come with specific conditions on how the money must be spent", ["can be used however the state wants", "are loans", "go only to cities"], "Block grants give states more flexibility."],
    ["An unfunded mandate is", "a federal requirement on states without money to carry it out", ["a grant with no conditions", "a state tax", "a Supreme Court ruling"], "The ADA's requirements are often cited."]
  ]],
  ["1.8", "Constitutional Interpretations of Federalism", [
    ["In McCulloch v. Maryland (1819), the Supreme Court ruled that", "Congress has implied powers and states cannot tax the federal government", ["states can tax the national bank", "the national bank was unconstitutional", "the Tenth Amendment gives states supremacy"], "It relied on the necessary and proper clause and the supremacy clause."],
    ["In United States v. Lopez (1995), the Court ruled that", "Congress exceeded its commerce clause power by banning guns near schools", ["Congress can regulate anything related to commerce", "states cannot regulate guns", "schools must allow guns"], "It limited federal power."],
    ["The necessary and proper (elastic) clause allows Congress to", "make laws needed to carry out its enumerated powers", ["do anything it wants", "override the Bill of Rights", "appoint judges"], "It's the basis for implied powers."],
    ["The supremacy clause states that", "the Constitution and federal laws are the supreme law of the land", ["state laws override federal laws", "the president is supreme", "treaties are not binding"], "Conflicting state laws are invalid."]
  ]],
  ["1.9", "Federalism in Action", [
    ["States legalizing marijuana despite federal law is an example of", "tension between state and federal policy in a federal system", ["unitary government", "judicial review", "the supremacy clause being ignored by courts"], "Federalism lets states experiment, sometimes creating conflict."],
    ["When Congress required states to raise the drinking age to 21 to receive highway funds, it used", "conditions on federal grants", ["an executive order", "a Supreme Court ruling", "a constitutional amendment"], "South Dakota v. Dole (1987) upheld this."],
    ["One advantage of federalism is that", "states can serve as \"laboratories\" for new policies", ["all laws are the same nationwide", "the federal government has all power", "states cannot make laws"], "Successful state policies can spread."],
    ["Devolution refers to", "shifting power from the national government to the states", ["increasing national power", "abolishing states", "the Supreme Court's power"], "Block grants are one tool of devolution."]
  ]]
]},
{ n: 2, name: "Interactions Among Branches of Government", weight: "25–36%", topics: [
  ["2.1", "Congress: The Senate and the House of Representatives", [
    ["Senators serve terms of", "six years", ["two years", "four years", "life"], "One-third of the Senate is elected every two years."],
    ["Representation in the House of Representatives is based on", "state population", ["equal representation for each state", "land area", "wealth"], "Seats are reapportioned after each census."],
    ["The Senate has the exclusive power to", "ratify treaties and confirm appointments", ["start revenue bills", "impeach officials", "elect the president in a tie"], "The House starts revenue bills and impeaches."],
    ["The House has the exclusive power to", "bring articles of impeachment", ["try impeachments", "ratify treaties", "confirm judges"], "The Senate holds the trial."]
  ]],
  ["2.2", "Structures, Powers, and Functions of Congress", [
    ["A filibuster is", "a tactic in the Senate to delay or block a vote by extended debate", ["a House rule limiting debate", "a presidential veto", "a type of committee"], "Cloture requires 60 votes."],
    ["The House Rules Committee", "sets the terms of debate for bills on the House floor", ["writes the budget", "confirms judges", "runs the Senate"], "It's powerful because it controls the agenda."],
    ["Most of the detailed work on bills in Congress is done in", "standing committees", ["the full chamber", "the Supreme Court", "the White House"], "Committees hold hearings and mark up bills."],
    ["Mandatory spending, such as Social Security, differs from discretionary spending because it", "is required by existing laws and is not set each year in appropriations", ["is decided by the president alone", "is always smaller", "goes only to the military"], "Mandatory spending is the largest part of the federal budget."]
  ]],
  ["2.3", "Congressional Behavior", [
    ["A member of Congress who votes based on what constituents want is acting as a", "delegate", ["trustee", "politico", "lobbyist"], "Trustees use their own judgment."],
    ["Gerrymandering is", "drawing district lines to favor one party or group", ["reapportioning seats after the census", "a type of filibuster", "voting against your party"], "It can reduce competitive elections."],
    ["In Baker v. Carr (1962), the Supreme Court ruled that", "courts can hear cases on redistricting, leading to \"one person, one vote\"", ["gerrymandering is always legal", "districts don't need equal population", "only states can decide redistricting"], "It made redistricting a justiciable question."],
    ["In Shaw v. Reno (1993), the Court ruled that", "district lines drawn mainly based on race must meet strict scrutiny", ["race must be the main factor in drawing districts", "gerrymandering is unconstitutional in all cases", "districts must be square"], "An oddly shaped majority-minority district was challenged."]
  ]],
  ["2.4", "Roles and Powers of the President", [
    ["The president's formal powers include", "vetoing bills and commanding the armed forces", ["declaring war", "passing laws", "ratifying treaties"], "Congress declares war and the Senate ratifies treaties."],
    ["An executive agreement differs from a treaty because it", "does not require Senate ratification", ["requires two-thirds of the Senate", "must be approved by the Supreme Court", "is permanent"], "Presidents use them increasingly."],
    ["A signing statement is", "a president's written comments on how they will interpret or enforce a law", ["a veto", "a treaty", "a court ruling"], "It's an informal power."],
    ["Read the excerpt. Hamilton is arguing for", "a single, energetic executive", ["a plural executive council", "a weak president", "abolishing the presidency"], "He believed one president acts with decision, speed, and accountability.", { t: "source", text: "Energy in the executive is a leading character in the definition of good government... Decision, activity, secrecy, and dispatch will generally characterize the proceedings of one man in a much more eminent degree than the proceedings of any greater number.", cite: "Alexander Hamilton, Federalist No. 70, 1788" }]
  ]],
  ["2.5", "Checks on the Presidency", [
    ["Which is a check Congress has on the president?", "Overriding a veto", ["Issuing executive orders", "Pardoning criminals", "Appointing ambassadors"], "Congress can also refuse funding and impeach."],
    ["The 22nd Amendment", "limits the president to two elected terms", ["gave women the vote", "created the vice presidency", "allows unlimited terms"], "It was passed after FDR's four elections."],
    ["The Senate can check the president's foreign policy by", "refusing to ratify treaties", ["issuing executive orders", "commanding the military", "vetoing bills"], "Treaties need a two-thirds vote."],
    ["The War Powers Resolution requires the president to", "notify Congress within 48 hours of sending troops and withdraw them within 60–90 days without authorization", ["get Supreme Court approval for war", "never use troops abroad", "declare war formally"], "Presidents have often questioned it."]
  ]],
  ["2.6", "Expansion of Presidential Power", [
    ["Presidents have expanded their power mainly through", "executive orders and interpretations of Article II", ["constitutional amendments", "Supreme Court appointments only", "abolishing Congress"], "Presidents claim broad authority as chief executive."],
    ["The \"bully pulpit\" refers to", "the president's use of public attention to push their agenda", ["a veto", "a court ruling", "a treaty"], "Theodore Roosevelt coined the term."],
    ["Critics of expanding presidential power argue that it", "upsets the balance of power among the branches", ["strengthens Congress", "has no effect", "is required by the Constitution"], "They warn of an \"imperial presidency.\""],
    ["Executive orders", "have the force of law but can be overturned by courts or later presidents", ["are permanent laws", "require Senate approval", "can't be challenged"], "They direct how the executive branch operates."]
  ]],
  ["2.7", "Presidential Communication", [
    ["The State of the Union address allows the president to", "set a policy agenda before Congress and the public", ["pass laws directly", "appoint judges", "declare war"], "It's required by the Constitution."],
    ["Modern presidents use social media to", "communicate directly with the public without the filter of traditional media", ["pass bills", "avoid all communication", "replace Congress"], "It changed how presidents build support."],
    ["Presidents are more successful passing their agenda when", "they have high approval ratings and their party controls Congress", ["they have low approval", "Congress is controlled by the other party", "they avoid the media"], "Public support gives them leverage."],
    ["Going public is a strategy in which the president", "appeals directly to citizens to pressure Congress", ["negotiates in secret", "vetoes every bill", "resigns"], "It can bypass congressional leaders."]
  ]],
  ["2.8", "The Judicial Branch", [
    ["In Federalist No. 78, Hamilton argued that the judiciary", "is the least dangerous branch because it has neither force nor will, only judgment", ["is the most powerful branch", "should be elected", "should serve short terms"], "Life terms protect judicial independence."],
    ["Marbury v. Madison (1803) established", "judicial review", ["the national bank", "separate but equal", "the right to counsel"], "The Court can strike down unconstitutional laws."],
    ["Federal judges serve", "during good behavior, which usually means for life", ["four-year terms", "ten-year terms", "until age 60"], "This protects them from political pressure."],
    ["The Supreme Court has original jurisdiction in cases", "involving ambassadors and those in which a state is a party", ["about all crimes", "about traffic violations", "appealed from state courts"], "Most cases reach it on appeal."]
  ]],
  ["2.9", "Legitimacy of the Judicial Branch", [
    ["Stare decisis means", "following precedent from earlier decisions", ["overturning past decisions", "the Court's power of judicial review", "deciding only new cases"], "It provides stability and predictability."],
    ["A justice who believes the Court should rarely overturn laws made by elected branches supports", "judicial restraint", ["judicial activism", "strict scrutiny", "original jurisdiction"], "Activism favors striking down laws to protect rights."],
    ["Brown v. Board of Education (1954), which overturned Plessy v. Ferguson, shows that", "the Court sometimes departs from precedent", ["precedent can never change", "the Court must follow Congress", "segregation was upheld"], "Social science evidence helped the Court reverse course."],
    ["The Court's legitimacy depends largely on", "public acceptance of its rulings, since it cannot enforce them itself", ["its army", "its control of the budget", "its elections"], "It relies on the executive to enforce decisions."]
  ]],
  ["2.10", "The Court in Action", [
    ["A writ of certiorari is", "an order from the Supreme Court to review a lower court's case", ["a presidential veto", "a jury verdict", "a congressional subpoena"], "Four justices must agree to grant it."],
    ["A concurring opinion is written by a justice who", "agrees with the majority's decision but for different reasons", ["disagrees with the majority", "writes for the majority", "did not hear the case"], "Dissenting opinions disagree with the outcome."],
    ["Amicus curiae briefs are submitted by", "interest groups and others who are not parties to the case", ["the president only", "the defendant only", "the jury"], "\"Friend of the court\" briefs offer arguments."],
    ["Why are dissenting opinions important?", "They may shape future decisions and reversals", ["They become law", "They overturn the majority", "They must be followed by lower courts"], "Some later become majority views."]
  ]],
  ["2.11", "Checks on the Judicial Branch", [
    ["Congress can respond to a Supreme Court ruling it disagrees with by", "passing a new law or proposing a constitutional amendment", ["firing the justices", "ignoring the ruling legally", "vetoing the decision"], "Amendments can overturn constitutional rulings."],
    ["The president checks the judiciary by", "nominating federal judges", ["overturning court decisions", "removing judges at will", "voting on cases"], "Senate confirmation is required."],
    ["The Senate checks the judiciary by", "confirming or rejecting judicial nominees", ["hearing appeals", "writing opinions", "setting judges' salaries lower during their terms"], "Confirmation fights have become intense."],
    ["Which limits the Court's power?", "It relies on the executive branch to enforce its rulings", ["It has its own police force", "It can make laws", "It can veto bills"], "Jackson's refusal to enforce Worcester v. Georgia is a famous example."]
  ]],
  ["2.12", "The Bureaucracy", [
    ["The federal bureaucracy is made up mostly of", "executive branch departments and agencies", ["members of Congress", "federal judges", "state governors"], "Examples include the EPA and the Department of Education."],
    ["An \"iron triangle\" is a relationship among", "congressional committees, bureaucratic agencies, and interest groups", ["the three branches", "the president, the Senate, and the courts", "voters, parties, and media"], "They cooperate on policy in a specific area."],
    ["The Pendleton Act (1883) created", "a merit-based civil service system", ["the spoils system", "the cabinet", "independent regulatory commissions"], "It reduced patronage."],
    ["Independent regulatory agencies, like the Federal Communications Commission (FCC),", "make and enforce rules for specific industries", ["are part of Congress", "are courts", "have no power"], "They're designed to be somewhat insulated from politics."]
  ]],
  ["2.13", "Discretionary and Rule-Making Authority", [
    ["Discretionary authority allows bureaucratic agencies to", "decide how to carry out laws passed by Congress", ["pass new laws", "overturn court decisions", "elect officials"], "Congress often writes broad laws."],
    ["The EPA setting specific limits on air pollution is an example of", "rule-making authority", ["judicial review", "a presidential veto", "a filibuster"], "Agencies write detailed regulations."],
    ["Bureaucrats have discretion partly because", "Congress lacks the expertise and time to write detailed rules", ["the Constitution requires it explicitly", "judges write the rules", "states demand it"], "Delegation relies on agency expertise."],
    ["Before an agency finalizes a new rule, it usually must", "publish the proposed rule and allow public comment", ["get a constitutional amendment", "hold a national referendum", "get Supreme Court approval"], "This is required by the Administrative Procedure Act."]
  ]],
  ["2.14", "Holding the Bureaucracy Accountable", [
    ["Congress holds the bureaucracy accountable through", "oversight hearings and control of funding", ["vetoing agency rules directly", "firing all civil servants", "judicial review"], "Committees can investigate agencies."],
    ["The president can hold the bureaucracy accountable by", "appointing agency leaders and issuing executive orders", ["passing budget laws", "ruling on cases", "impeaching bureaucrats"], "Political appointees direct agencies."],
    ["The courts can check the bureaucracy by", "ruling that agency actions exceed their legal authority", ["setting agency budgets", "appointing agency heads", "writing regulations"], "Lawsuits challenge regulations."],
    ["Whistleblower protections are meant to", "protect employees who report wrongdoing in agencies", ["punish all bureaucrats", "hide agency mistakes", "reduce oversight"], "They encourage accountability."]
  ]],
  ["2.15", "Policy and the Branches of Government", [
    ["Divided government occurs when", "one party controls the presidency and the other controls at least one house of Congress", ["one party controls everything", "the courts are divided", "there are three parties"], "It can lead to gridlock."],
    ["Gridlock is most likely when", "the branches are controlled by different parties with opposing goals", ["one party controls all branches", "the public agrees on issues", "the president has high approval"], "Checks and balances slow policy change."],
    ["Lame-duck periods, after an election but before new officials take office, can make it", "harder for outgoing officials to pass their agenda", ["easier to pass constitutional amendments", "impossible to veto bills", "illegal to pass laws"], "Outgoing officials have less influence."],
    ["The table shows party control of government. In which year was there divided government?", "2019", ["2009", "2017", "2021"], "In 2019, Republicans held the presidency and Senate while Democrats controlled the House.", { t: "table", title: "Party control of the federal government", head: ["Year", "President", "Senate", "House"], rows: [["2009", "Democrat", "Democrat", "Democrat"], ["2017", "Republican", "Republican", "Republican"], ["2019", "Republican", "Republican", "Democrat"], ["2021", "Democrat", "Democrat (tie broken by VP)", "Democrat"]] }]
  ]]
]}
);
