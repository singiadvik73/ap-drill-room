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
    ["Which statement from the Declaration of Independence best reflects social contract theory?", "Governments derive their powers from the consent of the governed", ["All men are created equal and endowed with certain unalienable rights", "He has refused his Assent to Laws", "We hold these truths to be self-evident, that all men are created equal"], "The social contract holds that government authority comes from the people's consent."],
    ["A state constitution says voters may recall any elected official by petition. This most directly reflects", "popular sovereignty", ["limited government", "separation of powers", "federalism"], "Popular sovereignty means ultimate power rests with the people."],
    ["John Locke's influence on the Declaration of Independence is most evident in the idea that people may", "alter or abolish a government that violates their rights", ["rely on a strong hereditary monarch to protect their order and property", "ignore laws they find inconvenient", "choose their religion freely without interference from the state"], "Locke argued people can overthrow governments that break the social contract."],
    ["Limited government is best illustrated by a constitutional provision that", "prohibits Congress from passing ex post facto laws", ["lets the president veto bills", "sets the size of the House", "allows each state to decide how to run its own elections"], "Limits on government power protect individual rights."]
  ]],
  ["1.2", "Types of Democracy", [
    ["A city lets residents vote directly on how to spend part of its budget. This is an example of", "participatory democracy", ["pluralist democracy", "elite democracy by trained experts", "representative democracy only"], "Participatory democracy emphasizes broad, direct citizen participation."],
    ["Supporters of the pluralist model would point to which as evidence for their view?", "Competing interest groups shaping a farm bill", ["The Electoral College choosing the president", "A statewide referendum on taxes", "Senators serving six-year terms"], "Pluralism sees policy as the result of group competition."],
    ["Which feature of the original Constitution best reflects the elite model of democracy?", "Senators chosen by state legislatures", ["The House elected directly by the voters", "The First Amendment's protections", "Two-year House terms"], "Indirect selection filtered popular influence through elites."],
    ["Read the excerpt. Brutus is warning that", "a large republic cannot represent the diverse interests of its people", ["the states should be abolished", "a large republic will control the dangers of factions", "the president should be stronger"], "Anti-Federalists favored small republics close to the people.", { t: "source", text: "In a large extended country, it is impossible to have a representation, possessing the sentiments, and of integrity, to declare the minds of the people, without having it so numerous and unwieldy, as to be subject in great measure to the inconveniency of a democratic government.", cite: "Brutus No. 1, 1787" }]
  ]],
  ["1.3", "Government Power and Individual Rights", [
    ["In Federalist No. 10, Madison argued that the best way to control factions is to", "extend the republic so no faction can dominate", ["ban political parties and interest groups entirely", "rely on direct democracy", "give the states more power over national policy"], "A large republic with many factions prevents any one from taking over."],
    ["Read the excerpt. Madison is describing the purpose of", "separation of powers and checks and balances", ["federalism only", "judicial review", "the Bill of Rights and its protections for individuals"], "Each branch can resist encroachments by the others.", { t: "source", text: "Ambition must be made to counteract ambition... If men were angels, no government would be necessary... You must first enable the government to control the governed; and in the next place oblige it to control itself.", cite: "James Madison, Federalist No. 51, 1788" }],
    ["Brutus No. 1 warned that the necessary and proper clause and taxing power would", "let the national government absorb the states", ["weaken the national government too much", "protect small states", "prevent any taxation"], "Anti-Federalists feared a consolidated national government."],
    ["Which argument would an Anti-Federalist most likely make?", "A large republic cannot represent the people well", ["Factions are best controlled in a large, extended republic", "Energy in the executive is essential to good government", "The judiciary is the least dangerous branch"], "Anti-Federalists argued representatives would be too distant from citizens."]
  ]],
  ["1.4", "Challenges of the Articles of Confederation", [
    ["Under the Articles of Confederation, Congress could not force states to pay their share of expenses because it lacked", "the power to tax", ["the power to declare war", "the power to make treaties", "a legislative branch"], "Congress could only request funds from the states."],
    ["Shays' Rebellion most directly convinced leaders that", "a stronger national government was needed", ["the Articles were working well enough", "states should secede", "slavery should end"], "The national government could not raise forces to stop the uprising."],
    ["Amending the Articles of Confederation required", "unanimous approval of the states", ["a two-thirds vote in both houses of Congress", "approval by the president", "a national referendum"], "Unanimity made change almost impossible."],
    ["Which problem under the Articles was solved by the Constitution's commerce clause?", "States imposing tariffs on one another", ["The lack of a national court", "Weak executive leadership", "Unequal representation of states"], "Congress gained power to regulate interstate commerce."]
  ]],
  ["1.5", "Ratification of the U.S. Constitution", [
    ["The Great Compromise resolved a conflict between", "large and small states over representation", ["Northern and Southern states over slavery and trade", "Federalists and Anti-Federalists", "the president and Congress over war powers"], "It created a population-based House and an equal Senate."],
    ["Which constitutional provision was a compromise over slavery?", "The Three-Fifths Compromise", ["The necessary and proper clause", "The supremacy clause", "The Great Compromise"], "It counted enslaved people as three-fifths for representation and taxes."],
    ["Article V's amendment process reflects the framers' desire for", "change that is possible but difficult", ["frequent and easy constitutional change", "no changes to the Constitution once it was ratified", "presidential control of amendments"], "Supermajorities are required to propose and ratify."],
    ["The Electoral College was created partly as a compromise between", "election by Congress and by popular vote", ["the House and the Senate", "federal and state courts", "Federalists and Anti-Federalists"], "It balanced concerns about direct popular election."]
  ]],
  ["1.6", "Principles of American Government", [
    ["The Senate's power to reject a president's treaty is an example of", "checks and balances", ["federalism", "judicial review", "popular sovereignty"], "One branch limits another."],
    ["Read the excerpt. Madison argues that", "concentrating all powers in the same hands is the definition of tyranny", ["the states should hold all power", "the judiciary is the weakest of the three branches and needs protection", "factions should be eliminated"], "This supports separation of powers.", { t: "source", text: "The accumulation of all powers, legislative, executive, and judiciary, in the same hands, whether of one, a few, or many... may justly be pronounced the very definition of tyranny.", cite: "James Madison, Federalist No. 47, 1788" }],
    ["Federalist No. 51 argues that separation of powers works because", "each branch has the means and motive to resist the others", ["the judiciary has final control over both the other branches", "states can override federal law", "the people vote on every law"], "'Ambition must be made to counteract ambition.'"],
    ["Which is an example of Congress checking the judiciary?", "Proposing an amendment to overturn a ruling", ["Vetoing a bill passed by the House of Representatives", "Issuing an executive order to reverse a ruling", "Declaring a law unconstitutional"], "Amendments can reverse the Court's constitutional interpretations."]
  ]],
  ["1.7", "Relationship Between the States and Federal Government", [
    ["Congress withholds highway funds from states that don't set the drinking age at 21. This is an example of", "conditions of aid", ["a mandate with full funding", "a block grant", "revenue sharing"], "Federal money is tied to state compliance (South Dakota v. Dole)."],
    ["A state prefers a block grant over a categorical grant because block grants", "give states more discretion", ["come with stricter rules", "are always larger", "can only fund education"], "Block grants cover broad areas with fewer strings."],
    ["An unfunded mandate is a federal requirement that", "states must follow without federal money", ["states may ignore if they choose", "comes with generous federal funding attached", "only applies to large cities and counties"], "States must pay to comply."],
    ["Which power is reserved to the states?", "Establishing local governments", ["Coining money", "Declaring war", "Regulating interstate commerce"], "The Tenth Amendment reserves unlisted powers to states."]
  ]],
  ["1.8", "Constitutional Interpretations of Federalism", [
    ["McCulloch v. Maryland (1819) strengthened federal power by upholding", "implied powers and national supremacy", ["states' power to tax federal agencies", "the Tenth Amendment's limits", "dual federalism"], "Congress could create a bank, and states could not tax it."],
    ["In United States v. Lopez (1995), the Court ruled that Congress", "exceeded its commerce power", ["could regulate guns near schools", "could tax state governments", "had implied powers"], "Gun possession near schools was not economic activity."],
    ["A federal law is challenged as exceeding Congress's authority to regulate trade between states. The Court will most likely consider the", "commerce clause", ["full faith and credit clause", "establishment clause", "privileges and immunities clause"], "Many federal powers rest on the commerce clause."],
    ["Which is an example of Congress using the necessary and proper clause?", "Creating a national bank", ["Declaring war on another nation", "Admitting new states", "Coining and printing money"], "The bank helped carry out enumerated powers."]
  ]],
  ["1.9", "Federalism in Action", [
    ["States that legalize marijuana despite federal law illustrate", "tension between state and federal authority", ["cooperative federalism", "the full faith and credit clause in action", "judicial review"], "States act under reserved powers while federal law says otherwise."],
    ["The Affordable Care Act's expansion of Medicaid was limited by the Supreme Court because", "Congress couldn't coerce states by threatening existing funds", ["the Tenth Amendment barred Congress from regulating health care", "states have no role in Medicaid", "the law was passed by executive order"], "NFIB v. Sebelius (2012) limited coercive conditions."],
    ["Cooperative federalism is best described as", "national and state governments sharing policy work", ["states and the national government acting separately", "states controlling foreign policy and trade agreements", "the national government abolishing states"], "Often called 'marble cake' federalism."],
    ["Devolution refers to", "shifting power from the federal government to the states", ["expanding federal regulatory power over the states' programs", "creating new states", "courts striking down laws"], "Examples include welfare reform in 1996."]
  ]]
]},
{ n: 2, name: "Interactions Among Branches of Government", weight: "25–36%", topics: [
  ["2.1", "Congress: The Senate and the House of Representatives", [
    ["Only the Senate has the power to", "confirm presidential appointments", ["originate revenue bills", "impeach officials", "elect the president in a tie"], "The House originates revenue bills and impeaches."],
    ["Which difference between the House and Senate makes the Senate less responsive to short-term public opinion?", "Six-year staggered terms", ["Larger membership", "Revenue bill origination", "District-based elections"], "Longer terms insulate senators from immediate pressure."],
    ["If no presidential candidate wins a majority of electoral votes, the president is chosen by", "the House, with one vote per state delegation", ["the Senate, by a simple majority vote of all senators", "the Supreme Court, by majority vote of the justices", "a national runoff"], "The Twelfth Amendment sets this process."],
    ["The House's power to originate revenue bills reflects the framers' view that", "taxation should start with the body closest to the people", ["the Senate has more expertise in writing tax laws than the House", "states should control taxes", "the president should propose taxes"], "House members face voters every two years."]
  ]],
  ["2.2", "Structures, Powers, and Functions of Congress", [
    ["A bill passes the House but stalls in the Senate because 41 senators won't vote to end debate. This shows the impact of", "the filibuster", ["the discharge petition", "a pocket veto", "the Rules Committee"], "Cloture requires 60 votes."],
    ["The House Rules Committee is powerful because it", "sets terms of debate for most bills", ["confirms judges", "writes the federal budget by itself", "elects the Speaker"], "It controls time limits and amendments."],
    ["A discharge petition allows the House to", "force a bill out of committee", ["end a filibuster in the Senate", "override a presidential veto", "remove a Speaker"], "A majority of members must sign."],
    ["Which is an example of 'pork barrel' spending?", "Funding for a bridge in a member's district", ["A national defense appropriation for new aircraft", "Social Security payments", "A tax cut for all citizens"], "Pork directs federal money to local projects."]
  ]],
  ["2.3", "Congressional Behavior", [
    ["A senator votes against a bill she supports because most voters in her state oppose it. She is acting as a", "delegate", ["trustee", "politico", "partisan"], "Delegates follow constituents' wishes."],
    ["Gerrymandering most directly affects Congress by", "creating safe seats that reduce competition", ["increasing third-party representation", "ending incumbency advantage", "eliminating partisanship"], "Safe districts can encourage partisan behavior."],
    ["Divided government is most likely to result in", "gridlock", ["faster passage of bills", "stronger party unity", "fewer vetoes"], "Different parties controlling branches often slows legislation."],
    ["In Baker v. Carr (1962), the Supreme Court ruled that", "redistricting cases can be heard by federal courts", ["partisan gerrymandering is always unconstitutional", "states must redraw their districts after every election", "Congress must redistrict every year"], "It led to 'one person, one vote.'"]
  ]],
  ["2.4", "Roles and Powers of the President", [
    ["A president signs an agreement with another country without seeking Senate approval. This is", "an executive agreement", ["a treaty", "a signing statement", "an executive order"], "Executive agreements don't need Senate ratification."],
    ["Which is an informal power of the president?", "Issuing executive orders", ["Vetoing bills", "Granting pardons", "Serving as commander in chief"], "Executive orders are not listed in the Constitution."],
    ["The president's power as commander in chief allows him to", "direct military operations", ["declare war on foreign nations", "raise an army", "fund and equip the military"], "Congress declares war and funds the military."],
    ["Read the excerpt. Hamilton is arguing for", "a single, energetic executive", ["a plural council of three executives", "a weak president", "abolishing the presidency"], "He believed one president acts with decision, speed, and accountability.", { t: "source", text: "Energy in the executive is a leading character in the definition of good government... Decision, activity, secrecy, and dispatch will generally characterize the proceedings of one man in a much more eminent degree than the proceedings of any greater number.", cite: "Alexander Hamilton, Federalist No. 70, 1788" }]
  ]],
  ["2.5", "Checks on the Presidency", [
    ["Congress can check the president's appointment power through", "Senate confirmation", ["a pocket veto", "judicial review", "executive privilege"], "The Senate must confirm major appointments."],
    ["The Twenty-Second Amendment weakens a second-term president mainly by", "making the president a 'lame duck'", ["limiting veto power", "removing the power to appoint judges", "reducing the president's salary"], "Term limits reduce influence late in a second term."],
    ["If Congress refuses to fund a program the president supports, Congress is using its", "power of the purse", ["advice and consent", "impeachment power", "oversight of courts"], "Congress controls spending."],
    ["Impeachment requires", "a House majority to charge and a two-thirds Senate vote to remove", ["a two-thirds House vote to charge and a Senate majority to remove", "a Supreme Court ruling", "a national referendum"], "The House impeaches; the Senate tries."]
  ]],
  ["2.6", "Expansion of Presidential Power", [
    ["The War Powers Resolution (1973) requires the president to", "notify Congress within 48 hours of deploying troops", ["get a declaration of war from Congress first", "withdraw troops within 10 days", "consult the Supreme Court"], "Troops must be withdrawn within 60 days without authorization."],
    ["In Federalist No. 70, Hamilton argued for", "a single, energetic executive", ["a council of three executives", "a weak executive", "a parliamentary system"], "Unity enables decisive action."],
    ["Presidents use signing statements to", "state how they will interpret a law", ["veto specific parts of a bill they sign", "appoint judges", "declare war without asking Congress"], "They signal how the executive will enforce a law."],
    ["The growth of presidential power in the 20th century is best explained by", "crises that demanded quick national action", ["constitutional amendments expanding it", "Supreme Court rulings abolishing checks", "the decline of Congress's powers"], "Wars and the Depression increased reliance on the executive."]
  ]],
  ["2.7", "Presidential Communication", [
    ["A president gives a televised address urging citizens to contact Congress about a bill. This is an example of", "using the bully pulpit", ["a formal legislative power", "executive privilege", "an executive agreement"], "Presidents use visibility to pressure Congress."],
    ["Modern presidents use social media mainly to", "communicate directly with the public", ["issue binding executive orders to agencies", "negotiate treaties", "appoint federal judges to the courts"], "It bypasses traditional media."],
    ["The State of the Union address is required by the Constitution and is used to", "set a legislative agenda", ["declare war", "confirm appointments", "veto bills"], "The president outlines policy priorities."],
    ["A president's approval rating most affects", "the ability to persuade Congress", ["the power to veto bills passed by Congress", "the length of the term", "the number of justices"], "Popular presidents have more leverage."]
  ]],
  ["2.8", "The Judicial Branch", [
    ["Marbury v. Madison (1803) is significant because it established", "judicial review", ["national supremacy", "the right to counsel", "separate but equal"], "The Court can strike down unconstitutional laws."],
    ["Federalist No. 78 argued that the judiciary is the 'least dangerous' branch because it", "has neither the sword nor the purse", ["can veto laws", "controls the military and the budget", "is elected directly by the people"], "It relies on judgment, not force or money."],
    ["Life tenure for federal judges is intended to", "protect judicial independence", ["make judges more responsive to voters", "limit the president's power", "reduce the Court's size"], "Judges can decide without fear of losing their jobs."],
    ["Which case type goes directly to the Supreme Court under original jurisdiction?", "A dispute between two states", ["An appeal of a criminal conviction", "A civil suit between citizens", "A federal agency ruling"], "Original jurisdiction covers disputes between states."]
  ]],
  ["2.9", "Legitimacy of the Judicial Branch", [
    ["When the Court follows an earlier ruling in a similar case, it is applying", "stare decisis", ["judicial activism", "original jurisdiction", "judicial restraint only"], "Stare decisis means following precedent."],
    ["A justice who votes to overturn a long-standing precedent to protect a minority's rights is most likely practicing", "judicial activism", ["judicial restraint", "stare decisis", "strict constructionism"], "Activism involves a willingness to change law."],
    ["Brown v. Board (1954) overturning Plessy v. Ferguson shows that", "precedents can be reversed", ["the Court never changes its rulings", "Congress controls the Court", "states can ignore the Court"], "The Court can depart from stare decisis."],
    ["The Court's legitimacy depends largely on", "public acceptance of its rulings", ["its own power to enforce its laws", "control of the budget", "election of justices by the voters"], "The Court relies on other branches and the public to follow its decisions."]
  ]],
  ["2.10", "The Court in Action", [
    ["A justice agrees with the majority's outcome but for different reasons. She writes a", "concurring opinion", ["dissenting opinion", "majority opinion", "writ of certiorari"], "Concurring opinions agree with the result but give other reasoning."],
    ["The Supreme Court agrees to hear a case by granting a", "writ of certiorari", ["writ of habeas corpus", "amicus brief", "discharge petition"], "Four justices must agree (rule of four)."],
    ["A dissenting opinion can matter because it", "may shape future rulings", ["becomes binding law", "overturns the majority", "is enforced by Congress"], "Dissents can influence later courts."],
    ["Interest groups file amicus curiae briefs to", "influence the Court's decision", ["appeal a lower court's ruling themselves", "nominate justices", "enforce the Court's rulings"], "They present arguments as 'friends of the court.'"]
  ]],
  ["2.11", "Checks on the Judicial Branch", [
    ["Congress can limit the Supreme Court's influence by", "changing the Court's appellate jurisdiction", ["vetoing its decisions", "removing justices for unpopular rulings", "reducing justices' salaries"], "Congress can alter which cases federal courts hear."],
    ["Presidents shape the judiciary most directly by", "nominating judges who share their views", ["overturning court decisions by executive order", "setting the Court's agenda", "enforcing only some rulings"], "Appointments have long-term impact."],
    ["The Twenty-Sixth Amendment was passed after Oregon v. Mitchell. This illustrates that", "amendments can overturn Court interpretations", ["Congress can veto the Court", "the Supreme Court can amend the Constitution", "states can ignore rulings"], "The amendment secured voting at 18 in all elections."],
    ["A state refuses to enforce a Supreme Court ruling. This shows a limit on the Court's power because it", "depends on others to enforce its rulings", ["cannot hear cases involving state laws", "has no judicial review", "is elected by states"], "The Court lacks enforcement power."]
  ]],
  ["2.12", "The Bureaucracy", [
    ["The Environmental Protection Agency writing air-quality standards is an example of the bureaucracy", "implementing laws through rule-making", ["declaring laws passed by Congress unconstitutional", "passing new legislation without Congress", "issuing presidential vetoes"], "Agencies write regulations to carry out laws."],
    ["An iron triangle consists of", "an agency, a congressional committee, and an interest group", ["the three branches of government", "the president, the Senate, and the Supreme Court", "the parties and the media"], "They form mutually beneficial relationships."],
    ["The Pendleton Act (1883) replaced the spoils system with", "a merit-based civil service", ["presidential appointments for all jobs", "elected bureaucrats", "term limits for agencies"], "Hiring was based on qualifications."],
    ["Issue networks differ from iron triangles because they", "include a broader, shifting set of participants", ["exclude interest groups from all policymaking", "involve only Congress", "are created by law"], "Experts, media, and groups all participate."]
  ]],
  ["2.13", "Discretionary and Rule-Making Authority", [
    ["Congress passes a law directing an agency to ensure 'safe workplaces' without detail. The agency's authority to decide the specifics is", "discretionary authority", ["judicial review", "the power of the purse", "executive privilege"], "Agencies use expertise to fill in details."],
    ["Congress delegates rule-making to agencies mainly because agencies", "have technical expertise", ["are elected by the people", "can overturn court decisions", "control the budget"], "Complex policy requires specialists."],
    ["Before a federal agency issues a major rule, it usually must", "publish it and allow public comment", ["get approval from the Supreme Court", "pass it through Congress", "hold a national vote"], "The Administrative Procedure Act requires notice and comment."],
    ["Which is an example of an agency's rule-making authority?", "The FDA setting food labeling rules", ["Congress passing a budget for the agency", "The president vetoing a bill from Congress", "A court striking down a law"], "Agencies make rules with the force of law."]
  ]],
  ["2.14", "Holding the Bureaucracy Accountable", [
    ["A congressional committee holds hearings to question an agency head about spending. This is", "congressional oversight", ["judicial review", "executive privilege", "a filibuster"], "Congress monitors agencies."],
    ["Congress can hold the bureaucracy accountable by", "cutting an agency's budget", ["appointing agency heads", "firing civil servants", "issuing executive orders to agencies"], "The power of the purse is a key check."],
    ["The president holds the bureaucracy accountable by", "appointing and removing agency heads", ["confirming appointees", "writing the appropriations bills", "ruling on regulations"], "Presidents direct executive agencies."],
    ["Courts can hold agencies accountable by", "ruling that an agency exceeded its authority", ["cutting agency funding", "appointing new agency leaders to replace current ones", "passing new laws to replace the agency's rules"], "Judicial review applies to agency actions."]
  ]],
  ["2.15", "Policy and the Branches of Government", [
    ["A law passed by Congress, signed by the president, implemented by an agency, and interpreted by a court shows", "all three branches shape policy", ["only Congress makes policy", "courts control agencies", "agencies write laws"], "Policymaking involves all branches."],
    ["Interest groups influence bureaucratic policy by", "commenting during rule-making", ["voting on regulations", "appointing agency heads directly", "vetoing rules"], "Groups submit comments and lobby agencies."],
    ["Divided government can make policymaking harder because", "the branches are controlled by different parties", ["the Supreme Court must approve all new laws first", "agencies stop working until a budget passes", "the president cannot veto"], "Partisan differences can cause gridlock."],
    ["The table shows party control of government. In which year was there divided government?", "2019", ["2009", "2017", "2021"], "In 2019, Republicans held the presidency and Senate while Democrats controlled the House.", { t: "table", title: "Party control of the federal government", head: ["Year", "President", "Senate", "House"], rows: [["2009", "Democrat", "Democrat", "Democrat"], ["2017", "Republican", "Republican", "Republican"], ["2019", "Republican", "Republican", "Democrat"], ["2021", "Democrat", "Democrat (tie broken by VP)", "Democrat"]] }]
  ]]
]}
);
