// AP United States History: free-response questions (SAQ style), one per CED topic (Claude version only).
// Each topic: [stimulus, [[part prompt, rubric], ...]]. Every part is worth 1 point; Claude grades only against the rubric.
// Like APUSH SAQs, a part earns its point for specific, accurate historical evidence; vague generalities do not.
window.AP_FRQ = window.AP_FRQ || {};
AP_FRQ.ush = {
"1.1": ["Answer the following about North America before and during early European contact (1491–1607).", [
  ["Identify one way Native American societies adapted to their environments before 1492.", "Earns the point for a specific adaptation, e.g., maize cultivation spreading into the Southwest and Mississippi Valley; Pueblo irrigation; Great Plains/Great Basin mobile hunting-gathering; Pacific Northwest fishing villages; Northeast mixed agriculture and hunting."],
  ["Describe one motive for European exploration of the Americas in the 1400s–1500s.", "Earns the point for describing a motive: new sources of wealth (gold, silver), a sea route to Asian trade, spreading Christianity, national power/rivalry."],
  ["Explain one effect of early contact on Native American populations.", "Earns the point for explaining disease (smallpox) causing population collapse, conquest and labor exploitation, or changes from new animals (horses)."]
]],
"1.2": ["Answer the following about Native American societies before European contact.", [
  ["Identify one Native American society and its economic basis.", "Earns the point for a correct match, e.g., Pueblo—maize farming with irrigation; Iroquois—maize, beans, squash plus hunting; Chinook—fishing; Plains peoples—hunting."],
  ["Describe how the spread of maize cultivation affected Native American societies.", "Earns the point for describing that it supported larger populations, permanent villages, and social complexity (e.g., Cahokia, Pueblo)."],
  ["Explain one difference between Native societies in the Northeast and those in the Great Basin.", "Earns the point for explaining a difference: Northeast groups farmed and lived in villages (e.g., longhouses), while Great Basin groups were mobile hunter-gatherers due to dry conditions."]
]],
"1.3": ["Answer the following about European exploration in the Americas.", [
  ["Identify one European nation that explored the Americas before 1607.", "Earns the point for Spain, Portugal, France, England, or the Netherlands."],
  ["Describe one technological development that made exploration possible.", "Earns the point for describing the caravel, astrolabe, magnetic compass, improved maps, or sternpost rudder."],
  ["Explain how competition among European states encouraged exploration.", "Earns the point for explaining that rivalries for wealth, trade routes, and territory pushed states to sponsor voyages (e.g., Spain after Portugal's Africa route)."]
]],
"1.4": ["Answer the following about the Columbian Exchange and Spanish conquest.", [
  ["Identify one crop or animal that moved from Europe to the Americas.", "Earns the point for horses, cattle, pigs, sheep, wheat, sugarcane, or other valid example."],
  ["Describe one way the Spanish conquered Native American empires.", "Earns the point for describing alliances with Native rivals, superior weapons (steel, guns, horses), or disease weakening empires (e.g., Cortés and the Aztec)."],
  ["Explain one effect of American silver or crops on Europe.", "Earns the point for explaining that silver enriched Spain and caused inflation, or that American crops (potatoes, maize) increased European food supplies and population."]
]],
"1.5": ["Answer the following about labor and caste in the Spanish colonial system.", [
  ["Identify the encomienda system.", "Earns the point for identifying it as a Spanish grant allowing colonists to demand labor/tribute from Native people in exchange for supposed protection and Christian instruction."],
  ["Describe the casta system.", "Earns the point for describing a racial hierarchy with Spanish-born at the top, followed by mixed-race people, Native people, and enslaved Africans."],
  ["Explain one reason the Spanish turned to enslaved Africans for labor.", "Earns the point for explaining that Native populations declined from disease and abuse, and debates (e.g., Las Casas) criticized Native enslavement."]
]],
"1.6": ["Answer the following about cultural interactions among Europeans, Native Americans, and Africans.", [
  ["Identify one debate among Europeans about the treatment of Native Americans.", "Earns the point for the Valladolid debate (Las Casas vs. Sepúlveda), or debates over Native humanity and forced labor."],
  ["Describe one way Native Americans resisted European efforts to change their beliefs.", "Earns the point for describing keeping traditional religious practices, blending with Christianity, or revolting (e.g., later Pueblo Revolt)."],
  ["Explain one example of cultural blending in the Spanish colonies.", "Earns the point for explaining a blend: the Virgin of Guadalupe, mestizo culture, blended foods, languages, or religious practices."]
]],
"1.7": ["Answer the following causation question about 1491–1607.", [
  ["Identify one cause of Spanish colonization of the Americas.", "Earns the point for the search for gold/silver, religious conversion, or national power."],
  ["Describe one effect of Spanish colonization on Native American societies.", "Earns the point for describing population decline, forced labor, loss of land, or conversion efforts."],
  ["Explain one effect of Spanish colonization on Europe or Africa.", "Earns the point for explaining American wealth shifting European power, inflation, or the growth of the transatlantic slave trade."]
]],
"2.1": ["Answer the following about the context of colonization, 1607–1754.", [
  ["Identify one European power besides Britain that colonized North America in this period.", "Earns the point for Spain, France, or the Netherlands."],
  ["Describe one difference between French and British colonization.", "Earns the point for describing that the French focused on fur trade with few settlers and alliances with Native peoples, while the British sent many settlers and took land for farming."],
  ["Explain one reason the British colonies grew faster in population than New France.", "Earns the point for explaining that Britain encouraged family migration, religious refugees, and farming settlement, while France sent few settlers."]
]],
"2.2": ["Answer the following about European colonization, 1607–1754.", [
  ["Identify one motive for English colonization.", "Earns the point for economic opportunity, religious freedom (Puritans, Quakers), or national rivalry."],
  ["Describe the role of tobacco in the Chesapeake colonies.", "Earns the point for describing that tobacco became the cash crop that made Virginia profitable and drove demand for land and labor."],
  ["Explain one difference between the founding of Massachusetts Bay and Virginia.", "Earns the point for explaining that Massachusetts was founded by Puritan families for religious reasons, while Virginia was founded by a joint-stock company for profit with mostly young men."]
]],
"2.3": ["Answer the following about regions of the British colonies.", [
  ["Identify one characteristic of the New England colonies.", "Earns the point for small farms, town meetings, Puritan religion, trade/shipbuilding, or high literacy."],
  ["Describe one characteristic of the middle colonies.", "Earns the point for describing religious and ethnic diversity, grain exports ('breadbasket'), or cities like Philadelphia and New York."],
  ["Explain one reason the Southern colonies relied on enslaved labor.", "Earns the point for explaining that labor-intensive cash crops (tobacco, rice, indigo) required large workforces, and indentured servants became less available."]
]],
"2.4": ["Answer the following about transatlantic trade, 1607–1754.", [
  ["Identify one good exported from the British colonies.", "Earns the point for tobacco, rice, indigo, timber, fish, furs, or grain."],
  ["Describe mercantilism.", "Earns the point for describing a policy where colonies supplied raw materials and bought manufactured goods from the mother country to increase national wealth."],
  ["Explain one way the Navigation Acts affected the colonies.", "Earns the point for explaining that they required trade through England/English ships, restricting colonial trade and encouraging smuggling."]
]],
"2.5": ["Answer the following about interactions between American Indians and Europeans, 1607–1754.", [
  ["Identify one conflict between colonists and American Indians.", "Earns the point for Metacom's (King Philip's) War, Pequot War, Powhatan wars, Bacon's Rebellion, or the Pueblo Revolt."],
  ["Describe one cause of Metacom's War.", "Earns the point for describing colonial expansion onto Native land, pressure to adopt English ways/Christianity, or legal disputes."],
  ["Explain one way the Pueblo Revolt affected Spanish policy.", "Earns the point for explaining that when the Spanish returned, they allowed more tolerance of Native religious practices and reduced forced labor."]
]],
"2.6": ["Answer the following about slavery in the British colonies.", [
  ["Identify one way slavery differed between the Chesapeake and South Carolina.", "Earns the point for identifying larger rice plantations and enslaved majority in South Carolina, versus smaller tobacco farms in the Chesapeake."],
  ["Describe one way enslaved Africans resisted slavery.", "Earns the point for describing work slowdowns, running away, maintaining cultural traditions, or rebellion (e.g., Stono Rebellion 1739)."],
  ["Explain how colonial laws made slavery hereditary and race-based.", "Earns the point for explaining that laws (e.g., Virginia 1662) declared children followed the status of the mother, and slave codes defined enslaved people by race."]
]],
"2.7": ["Answer the following about colonial society and culture.", [
  ["Identify the Great Awakening.", "Earns the point for identifying a religious revival in the 1730s–1740s featuring emotional preaching (Jonathan Edwards, George Whitefield)."],
  ["Describe one effect of the Enlightenment on the colonies.", "Earns the point for describing that ideas of reason and natural rights influenced colonists (e.g., Benjamin Franklin)."],
  ["Explain one way the Great Awakening challenged traditional authority.", "Earns the point for explaining that it encouraged individuals to question established ministers and churches, leading to new denominations."]
]],
"2.8": ["Answer the following comparison question about Period 2.", [
  ["Identify one similarity between the Spanish and British colonies.", "Earns the point for a similarity, e.g., both used coerced labor, both took Native land, both sought wealth."],
  ["Describe one difference between Spanish and British colonies.", "Earns the point for describing that the Spanish colonies had a caste system and conversion missions, while British colonies had more self-government and settler families."],
  ["Explain one reason for the difference in part B.", "Earns the point for explaining a reason, e.g., Spanish crown control vs. British salutary neglect, or different goals (conversion vs. settlement)."]
]],
"3.1": ["Answer the following about the context of Period 3 (1754–1800).", [
  ["Identify one development that increased tension between Britain and its colonies after 1763.", "Earns the point for new taxes (Stamp Act, Townshend Acts), Proclamation of 1763, or stationing troops."],
  ["Describe one way the colonies developed a shared identity by 1775.", "Earns the point for describing shared resistance (Committees of Correspondence), Enlightenment ideas, or economic ties."],
  ["Explain one reason Britain changed its policy toward the colonies after 1763.", "Earns the point for explaining war debt from the Seven Years' War and cost of defending territory."]
]],
"3.2": ["Answer the following about the Seven Years' War (French and Indian War).", [
  ["Identify one cause of the Seven Years' War in North America.", "Earns the point for competition over the Ohio River Valley between Britain and France."],
  ["Describe one result of the war for Native Americans.", "Earns the point for describing loss of French allies, Pontiac's Rebellion, or more settler encroachment."],
  ["Explain how the Proclamation of 1763 angered colonists.", "Earns the point for explaining that it barred settlement west of the Appalachians, which colonists felt they had earned."]
]],
"3.3": ["Answer the following about 'taxation without representation.'", [
  ["Identify one British tax on the colonies.", "Earns the point for the Sugar Act, Stamp Act, Townshend Acts, or Tea Act."],
  ["Describe one colonial response to the Stamp Act.", "Earns the point for describing boycotts, the Stamp Act Congress, protests, or Sons of Liberty actions."],
  ["Explain why colonists objected to taxation by Parliament.", "Earns the point for explaining that colonists had no representatives in Parliament, so they believed taxes violated their rights as Englishmen."]
]],
"3.4": ["Answer the following about the philosophical foundations of the American Revolution.", [
  ["Identify one Enlightenment thinker who influenced the Revolution.", "Earns the point for John Locke, Montesquieu, Rousseau, or Thomas Paine."],
  ["Describe the argument of Thomas Paine's Common Sense.", "Earns the point for describing that it argued for independence and against monarchy in plain language."],
  ["Explain how the Declaration of Independence reflects Locke's ideas.", "Earns the point for explaining natural rights (life, liberty, pursuit of happiness) and the right to overthrow a government that violates them."]
]],
"3.5": ["Answer the following about the American Revolution.", [
  ["Identify one advantage the Patriots had in the war.", "Earns the point for fighting on home ground, strong leaders, or French alliance."],
  ["Describe the significance of the Battle of Saratoga.", "Earns the point for describing that the American victory convinced France to ally with the United States."],
  ["Explain one way foreign assistance helped the Patriots win.", "Earns the point for explaining French troops, navy (Yorktown), money, and supplies."]
]],
"3.6": ["Answer the following about the influence of revolutionary ideals.", [
  ["Identify one group that sought greater rights after the Revolution.", "Earns the point for women, enslaved people, free Black Americans, or Native Americans."],
  ["Describe the idea of republican motherhood.", "Earns the point for describing that women had a role in raising virtuous citizens, supporting female education."],
  ["Explain one way revolutionary ideals influenced slavery in the North.", "Earns the point for explaining that northern states began gradual emancipation."]
]],
"3.7": ["Answer the following about the Articles of Confederation.", [
  ["Identify one weakness of the Articles.", "Earns the point for no power to tax, no executive, no regulation of trade, or unanimous consent for amendments."],
  ["Describe Shays' Rebellion.", "Earns the point for describing a 1786–87 uprising of Massachusetts farmers against debt and taxes."],
  ["Explain one achievement of the government under the Articles.", "Earns the point for explaining the Northwest Ordinance (1787) setting up territorial government and banning slavery in the Northwest."]
]],
"3.8": ["Answer the following about the Constitutional Convention and ratification.", [
  ["Identify the Great Compromise.", "Earns the point for identifying a bicameral Congress with representation by population in the House and equal representation in the Senate."],
  ["Describe the Three-Fifths Compromise.", "Earns the point for describing counting three-fifths of the enslaved population for representation and taxation."],
  ["Explain one argument made by Anti-Federalists.", "Earns the point for explaining fear of a strong central government and demands for a bill of rights."]
]],
"3.9": ["Answer the following about the Constitution.", [
  ["Identify one principle of the Constitution.", "Earns the point for separation of powers, checks and balances, federalism, or popular sovereignty."],
  ["Describe how federalism divides power.", "Earns the point for describing that powers are divided between national and state governments."],
  ["Explain the purpose of the Bill of Rights.", "Earns the point for explaining that it protected individual rights and addressed Anti-Federalist concerns."]
]],
"3.10": ["Answer the following about shaping a new republic.", [
  ["Identify one part of Alexander Hamilton's financial plan.", "Earns the point for assuming state debts, creating a national bank, tariffs, or excise taxes."],
  ["Describe the Whiskey Rebellion.", "Earns the point for describing a 1794 protest by western farmers against a whiskey tax, suppressed by federal troops."],
  ["Explain one reason the first political parties formed.", "Earns the point for explaining disagreements over Hamilton's plans, the national bank, or foreign policy (France vs. Britain)."]
]],
"3.11": ["Answer the following about developing an American identity.", [
  ["Identify one example of an emerging American culture after independence.", "Earns the point for Noah Webster's dictionary, national symbols, American literature, or civic festivals."],
  ["Describe one way Americans promoted national unity.", "Earns the point for describing celebrations of the Revolution, education, or shared political ideals."],
  ["Explain one way regional differences challenged national identity.", "Earns the point for explaining differences in economy, slavery, or politics between North and South."]
]],
"3.12": ["Answer the following about movement in the early republic.", [
  ["Identify one cause of westward migration after 1783.", "Earns the point for land availability, the Northwest Ordinance, or economic opportunity."],
  ["Describe one conflict between settlers and Native Americans in this period.", "Earns the point for describing the Northwest Indian War, Battle of Fallen Timbers, or Treaty of Greenville."],
  ["Explain the significance of the Treaty of Greenville (1795).", "Earns the point for explaining that Native nations ceded much of Ohio to the United States."]
]],
"3.13": ["Answer the following continuity and change question about Period 3.", [
  ["Identify one change in government from 1754 to 1800.", "Earns the point for independence, the Constitution, or a republican government."],
  ["Describe one continuity in American society from 1754 to 1800.", "Earns the point for describing the continuation of slavery, limited women's rights, or elite political leadership."],
  ["Explain one reason for the change identified in part A.", "Earns the point for explaining colonial resistance to British taxation, Enlightenment ideas, or weaknesses of the Articles."]
]],
"4.1": ["Answer the following about the context of Period 4 (1800–1848).", [
  ["Identify one development that expanded democracy in this period.", "Earns the point for elimination of property requirements for white male voting, rise of mass political parties, or national conventions."],
  ["Describe one economic change in this period.", "Earns the point for describing the Market Revolution: factories, canals, railroads, or commercial farming."],
  ["Explain one way sectional differences grew in this period.", "Earns the point for explaining North industrializing vs. South relying on cotton and slavery."]
]],
"4.2": ["Answer the following about the rise of political parties and the era of Jefferson.", [
  ["Identify one difference between Federalists and Democratic-Republicans.", "Earns the point for strong central government and national bank (Federalists) vs. states' rights and agrarian vision (Democratic-Republicans)."],
  ["Describe the significance of Marbury v. Madison.", "Earns the point for describing that it established judicial review."],
  ["Explain how the Louisiana Purchase challenged Jefferson's beliefs.", "Earns the point for explaining that it required broad interpretation of the Constitution, which Jefferson normally opposed."]
]],
"4.3": ["Answer the following about politics and regional interests.", [
  ["Identify the Missouri Compromise.", "Earns the point for identifying the 1820 agreement admitting Missouri as a slave state and Maine as free, banning slavery north of 36°30′ in the Louisiana Territory."],
  ["Describe Henry Clay's American System.", "Earns the point for describing tariffs, a national bank, and internal improvements."],
  ["Explain one reason the South opposed high tariffs.", "Earns the point for explaining that tariffs raised prices of manufactured goods and hurt cotton exports."]
]],
"4.4": ["Answer the following about America on the world stage, 1800–1848.", [
  ["Identify one cause of the War of 1812.", "Earns the point for impressment, trade restrictions, or British support for Native resistance."],
  ["Describe the Monroe Doctrine.", "Earns the point for describing the policy warning Europe against new colonization in the Americas."],
  ["Explain one result of the War of 1812.", "Earns the point for explaining rising nationalism, decline of Federalists, or weakened Native resistance."]
]],
"4.5": ["Answer the following about the Market Revolution: industrialization.", [
  ["Identify one invention that transformed the economy.", "Earns the point for the cotton gin, steamboat, telegraph, or interchangeable parts."],
  ["Describe the Lowell system.", "Earns the point for describing textile mills employing young women in dormitories."],
  ["Explain one way the Erie Canal affected the economy.", "Earns the point for explaining that it lowered shipping costs and linked the Midwest with New York."]
]],
"4.6": ["Answer the following about the Market Revolution: society and culture.", [
  ["Identify one change in women's roles during the Market Revolution.", "Earns the point for factory work or the cult of domesticity."],
  ["Describe one effect of the Market Revolution on the middle class.", "Earns the point for describing growth of white-collar jobs, separation of home and work, or consumer goods."],
  ["Explain one reason immigration increased in this period.", "Earns the point for explaining the Irish potato famine, German political unrest, or jobs in industry."]
]],
"4.7": ["Answer the following about expanding democracy.", [
  ["Identify one change in voting rights in this period.", "Earns the point for removal of property requirements for white men."],
  ["Describe the election of 1828.", "Earns the point for describing Andrew Jackson's victory and mass participation."],
  ["Explain one group excluded from democratic expansion.", "Earns the point for explaining women, African Americans, or Native Americans."]
]],
"4.8": ["Answer the following about Jackson and federal power.", [
  ["Identify the Indian Removal Act.", "Earns the point for identifying the 1830 law forcing Native nations west of the Mississippi."],
  ["Describe the Nullification Crisis.", "Earns the point for describing South Carolina's attempt to nullify federal tariffs and Jackson's response (Force Bill)."],
  ["Explain Jackson's opposition to the Second Bank of the United States.", "Earns the point for explaining he viewed it as unconstitutional and favoring elites."]
]],
"4.9": ["Answer the following about the development of an American culture, 1800–1848.", [
  ["Identify one American artistic or literary movement of this period.", "Earns the point for identifying Transcendentalism (Emerson, Thoreau), the Hudson River School of painting (Thomas Cole), or American Romantic literature (Cooper, Irving, Hawthorne, Poe)."],
  ["Describe one central idea of Transcendentalism.", "Earns the point for describing an idea: truth is found through intuition and nature rather than tradition; self-reliance and individualism; resisting unjust laws (Thoreau's civil disobedience)."],
  ["Explain how one cultural development of this period reflected a desire to create a distinct national identity.", "Earns the point for explaining a link, e.g., Hudson River School celebrating American landscapes as uniquely grand; writers using American settings and themes (frontier in Cooper); Noah Webster's American spelling; celebrating democracy and the common man."]
]],
"4.10": ["Answer the following about the Second Great Awakening.", [
  ["Identify one leader or new religious group associated with the Second Great Awakening.", "Earns the point for Charles Grandison Finney, Lyman Beecher, Methodist or Baptist growth, camp meeting revivalists, or new groups like the Mormons (Joseph Smith) or Shakers."],
  ["Describe one way the Second Great Awakening's message differed from earlier Calvinist teaching.", "Earns the point for describing that it stressed free will and that individuals could choose salvation and improve themselves, rather than predestination."],
  ["Explain how the Second Great Awakening contributed to one reform movement.", "Earns the point for explaining that belief in perfecting individuals and society motivated reform, with a specific movement: abolition (slavery as sin), temperance, women's rights, prison or asylum reform (Dorothea Dix), or education."]
]],
"4.11": ["Answer the following about reform movements, 1820–1848.", [
  ["Identify one reform movement of this period and one leader of it.", "Earns the point for a correct pairing, e.g., abolition—William Lloyd Garrison or Frederick Douglass; women's rights—Elizabeth Cady Stanton or Lucretia Mott; asylum reform—Dorothea Dix; public education—Horace Mann; temperance—American Temperance Society."],
  ["Describe the significance of the Seneca Falls Convention (1848).", "Earns the point for describing that it was the first major women's rights convention and issued the Declaration of Sentiments, modeled on the Declaration of Independence, demanding rights including suffrage."],
  ["Explain one reason reformers had limited success before 1848.", "Earns the point for explaining a reason: opposition from those who benefited (e.g., slaveholders), divisions among reformers (e.g., over women's role in abolition), cultural norms about women's roles, or lack of political power (women couldn't vote)."]
]],
"4.12": ["Answer the following about African Americans in the early republic.", [
  ["Identify one institution free African Americans built in the North.", "Earns the point for the African Methodist Episcopal (AME) Church (Richard Allen), Black schools, mutual aid societies, newspapers (Freedom's Journal), or antislavery organizations."],
  ["Describe one slave rebellion or conspiracy in this period.", "Earns the point for describing Nat Turner's Rebellion (1831, Virginia), Denmark Vesey's conspiracy (1822, Charleston), or Gabriel's conspiracy (1800, Richmond), with an accurate detail."],
  ["Explain one way Southern states responded to slave rebellions.", "Earns the point for explaining stricter slave codes: banning teaching enslaved people to read, restricting gatherings and movement, limiting manumission, or increasing patrols."]
]],
"4.13": ["Answer the following about Southern society, 1800–1848.", [
  ["Identify the crop that dominated the Southern economy by the 1830s and one invention that made it profitable.", "Earns the point for cotton AND the cotton gin (Eli Whitney, 1793). Both needed."],
  ["Describe the structure of white Southern society.", "Earns the point for describing a small planter elite owning most enslaved people and dominating politics, a large class of yeoman farmers who owned few or no enslaved people, and poor whites."],
  ["Explain why many non-slaveholding white Southerners supported slavery.", "Earns the point for explaining that they hoped to own enslaved people someday, depended economically on the cotton economy, or benefited from racial hierarchy that raised their social status above Black people."]
]],
"4.14": ["Answer the following causation question about 1800–1848.", [
  ["Identify one cause of the Market Revolution.", "Earns the point for a cause: transportation improvements (canals like the Erie Canal, turnpikes, steamboats, early railroads), inventions (interchangeable parts, cotton gin), or government support (Supreme Court rulings like Gibbons v. Ogden, tariffs)."],
  ["Describe one effect of the Market Revolution on the Northern economy.", "Earns the point for describing growth of factories and wage labor, commercial farming for distant markets, growth of cities, or regional specialization (Northeast manufacturing, Midwest grain)."],
  ["Explain how the Market Revolution contributed to sectional differences between North and South.", "Earns the point for explaining that the North industrialized and urbanized with free labor while the South's economy grew more dependent on cotton and slavery, creating different economic interests (e.g., tariffs, expansion of slavery)."]
]],
"5.1": ["Answer the following about the context of Period 5 (1844–1877).", [
  ["Identify one development in the 1840s that renewed debate over slavery.", "Earns the point for the annexation of Texas, the Mexican-American War and Mexican Cession, or the Wilmot Proviso."],
  ["Describe one way the Civil War increased the power of the federal government.", "Earns the point for describing conscription, a national income tax, national banking system/greenbacks, the Emancipation Proclamation, or the Reconstruction Amendments."],
  ["Explain one goal of Reconstruction and whether it was achieved by 1877.", "Earns the point for explaining a goal (reunifying the nation, protecting freedpeople's rights, rebuilding the South) and accurately assessing it (e.g., the Union was restored, but protections for freedpeople were largely abandoned by 1877)."]
]],
"5.2": ["Answer the following about Manifest Destiny.", [
  ["Identify the idea of Manifest Destiny.", "Earns the point for identifying the belief that the United States was destined by God to expand across North America, spreading democracy and its institutions."],
  ["Describe one territorial acquisition made between 1844 and 1853.", "Earns the point for describing the annexation of Texas (1845), the Oregon Territory compromise with Britain (1846, 49th parallel), the Mexican Cession (1848), or the Gadsden Purchase (1853)."],
  ["Explain one economic motive for westward expansion in this period.", "Earns the point for explaining desire for farmland, the California Gold Rush (1849), Pacific ports for Asian trade, or expanding cotton and slavery into new lands."]
]],
"5.3": ["Answer the following about the Mexican-American War (1846–1848).", [
  ["Identify one cause of the Mexican-American War.", "Earns the point for the U.S. annexation of Texas, the border dispute (Rio Grande vs. Nueces River), or President Polk's desire for California and the Southwest."],
  ["Describe one term of the Treaty of Guadalupe Hidalgo.", "Earns the point for describing that Mexico ceded California and the Southwest (Mexican Cession) and recognized the Rio Grande border, in exchange for $15 million."],
  ["Explain how the war intensified sectional conflict.", "Earns the point for explaining that it reopened the question of slavery in new territories, e.g., the Wilmot Proviso (which passed the House but failed in the Senate) proposed banning slavery in land taken from Mexico."]
]],
"5.4": ["Answer the following about the Compromise of 1850.", [
  ["Identify one provision of the Compromise of 1850.", "Earns the point for California admitted as a free state, a stronger Fugitive Slave Act, popular sovereignty in Utah and New Mexico territories, or ending the slave trade (not slavery) in Washington, D.C."],
  ["Describe the Fugitive Slave Act of 1850.", "Earns the point for describing that it required Northerners to help capture escaped enslaved people, denied accused fugitives a jury trial, and penalized those who helped them."],
  ["Explain one Northern reaction to the Fugitive Slave Act.", "Earns the point for explaining increased antislavery sentiment, personal liberty laws, resistance/rescues of fugitives, growth of the Underground Railroad, or the publication of Uncle Tom's Cabin (1852)."]
]],
"5.5": ["Answer the following about regional differences in the 1850s.", [
  ["Identify one economic difference between the North and South in the 1850s.", "Earns the point for the North's industrial, free-labor, urban economy vs. the South's agricultural, cotton-based economy relying on enslaved labor; or differences in railroads, immigration, or manufacturing."],
  ["Describe the free-labor ideology of many Northerners.", "Earns the point for describing the belief that free men could rise through hard work to own property, and that slavery degraded labor and blocked opportunity for white workers in the West."],
  ["Explain how Uncle Tom's Cabin affected sectional tension.", "Earns the point for explaining that Harriet Beecher Stowe's novel portrayed slavery's cruelty, turned many Northerners against slavery, and angered Southerners who saw it as unfair propaganda."]
]],
"5.6": ["Answer the following about the failure of compromise, 1854–1859.", [
  ["Identify the main provision of the Kansas-Nebraska Act (1854).", "Earns the point for identifying that it let settlers of Kansas and Nebraska decide slavery by popular sovereignty, effectively repealing the Missouri Compromise line."],
  ["Describe one effect of the Kansas-Nebraska Act.", "Earns the point for describing 'Bleeding Kansas' violence between pro- and antislavery settlers, the collapse of the Whig Party, or the formation of the Republican Party."],
  ["Explain the significance of the Dred Scott v. Sandford decision (1857).", "Earns the point for explaining that the Court ruled Black Americans were not citizens and that Congress could not ban slavery in the territories, which angered Northerners and weakened compromise."]
]],
"5.7": ["Answer the following about the election of 1860 and secession.", [
  ["Identify the winner of the election of 1860 and his party.", "Earns the point for Abraham Lincoln, Republican Party. Both needed."],
  ["Describe the Republican Party's position on slavery in 1860.", "Earns the point for describing opposition to the expansion of slavery into the western territories (not immediate abolition where it existed)."],
  ["Explain why Lincoln's election led Southern states to secede.", "Earns the point for explaining that Southern leaders feared a president elected without Southern votes would threaten slavery and their political power, so seven Deep South states seceded before his inauguration."]
]],
"5.8": ["Answer the following about military conflict in the Civil War.", [
  ["Identify one advantage the Union had over the Confederacy.", "Earns the point for a larger population, more factories, more railroads, a navy, or a stronger financial system."],
  ["Describe the significance of the Battle of Gettysburg or the capture of Vicksburg (1863).", "Earns the point for describing Gettysburg ending Lee's last major invasion of the North, or Vicksburg giving the Union control of the Mississippi River and splitting the Confederacy."],
  ["Explain one reason the Union won the Civil War.", "Earns the point for explaining superior resources and industry, the naval blockade (Anaconda Plan), emancipation weakening the South and adding Black soldiers, total war tactics (Sherman), or Confederacy's failure to win foreign recognition."]
]],
"5.9": ["Answer the following about government policies during the Civil War.", [
  ["Identify the Emancipation Proclamation and its limits.", "Earns the point for identifying Lincoln's 1863 order freeing enslaved people in areas in rebellion, AND a limit: it didn't apply to border states or Union-held areas."],
  ["Describe one economic policy passed by Congress during the war.", "Earns the point for describing the Homestead Act (free western land), Pacific Railway Act (transcontinental railroad), Morrill Land-Grant Act (colleges), national banking acts, or protective tariffs."],
  ["Explain one effect of the Emancipation Proclamation on the war.", "Earns the point for explaining that it made ending slavery a Union war aim, discouraged Britain and France from supporting the Confederacy, or allowed Black men to enlist in the Union army."]
]],
"5.10": ["Answer the following about Reconstruction.", [
  ["Identify one of the Reconstruction amendments and what it did.", "Earns the point for the 13th (abolished slavery), 14th (citizenship and equal protection), or 15th (voting regardless of race) with a correct description."],
  ["Describe one difference between presidential and congressional (Radical) Reconstruction.", "Earns the point for describing that Johnson's plan was lenient toward former Confederates, while Radical Republicans required military occupation, the 14th Amendment, and Black male suffrage for readmission."],
  ["Explain one way freedpeople acted to shape their own lives during Reconstruction.", "Earns the point for explaining reuniting families, founding churches and schools, seeking land, voting and holding office (e.g., Hiram Revels), or negotiating labor contracts."]
]],
"5.11": ["Answer the following about the failure of Reconstruction.", [
  ["Identify one method white Southerners used to limit African American rights during Reconstruction.", "Earns the point for Black Codes, violence and intimidation (Ku Klux Klan), or sharecropping/debt peonage."],
  ["Describe the Compromise of 1877.", "Earns the point for describing the deal settling the disputed 1876 election: Rutherford B. Hayes became president and federal troops were withdrawn from the South."],
  ["Explain one reason Northern support for Reconstruction declined.", "Earns the point for explaining Northern fatigue, the Panic of 1873 turning attention to the economy, racism, corruption scandals, or Supreme Court decisions narrowing the 14th Amendment."]
]],
"5.12": ["Answer the following comparison question about 1844–1877.", [
  ["Identify one similarity between arguments made by Northern and Southern leaders in the 1850s.", "Earns the point for a valid similarity, e.g., both claimed to defend the Constitution and liberty, both appealed to the Founders, or both tried compromise to preserve the Union."],
  ["Describe one difference between Northern and Southern views of slavery's expansion.", "Earns the point for describing that many Northerners wanted to keep slavery out of the territories (free soil), while Southern leaders insisted on the right to take enslaved people into all territories."],
  ["Explain one reason these differences made compromise harder by 1860.", "Earns the point for explaining that events (Kansas-Nebraska, Dred Scott, John Brown's raid) hardened views; sectional parties replaced national ones; each side saw the other as a threat to its way of life."]
]],
"6.1": ["Answer the following about the context of Period 6 (1865–1898).", [
  ["Identify one development that transformed the U.S. economy in this period.", "Earns the point for industrialization, the transcontinental railroad/railroad network, the rise of big business (steel, oil), or new technologies (electricity, telephone)."],
  ["Describe one social change caused by industrialization.", "Earns the point for describing rapid urbanization, immigration from Southern and Eastern Europe, growing gaps between rich and poor, or a new middle class."],
  ["Explain one reason Americans debated the role of government in this period.", "Earns the point for explaining conflicts over regulating monopolies and railroads, protecting workers, currency (gold vs. silver), or political corruption."]
]],
"6.2": ["Answer the following about the economic development of the West, 1865–1898.", [
  ["Identify one industry that drew settlers to the West.", "Earns the point for mining (gold/silver), cattle ranching, commercial farming (wheat), or railroads."],
  ["Describe the role of the federal government in developing the West.", "Earns the point for describing land grants to railroads, the Homestead Act, military campaigns against Native nations, or the Morrill Act."],
  ["Explain one challenge Western farmers faced in the late 1800s.", "Earns the point for explaining falling crop prices, high railroad shipping rates, debt, drought, or reliance on distant markets."]
]],
"6.3": ["Answer the following about the social and cultural development of the West.", [
  ["Identify the Dawes Act (1887).", "Earns the point for identifying the law that divided reservation land into individual allotments and sold 'surplus' land to settlers."],
  ["Describe the goal of assimilation policies toward Native Americans.", "Earns the point for describing efforts to replace Native cultures with white American culture: boarding schools (Carlisle), Christianity, English, individual farming."],
  ["Explain one Native American response to U.S. expansion.", "Earns the point for explaining armed resistance (Little Bighorn, 1876), the Ghost Dance movement (ending at Wounded Knee, 1890), or adaptation/negotiation."]
]],
"6.4": ["Answer the following about the 'New South.'", [
  ["Identify one goal of New South advocates such as Henry Grady.", "Earns the point for industrializing the South (textile mills, iron, tobacco) and diversifying its economy."],
  ["Describe sharecropping.", "Earns the point for describing a system where families farmed a landowner's land for a share of the crop, often trapping them in debt."],
  ["Explain the significance of Plessy v. Ferguson (1896).", "Earns the point for explaining that the Court upheld racial segregation under 'separate but equal,' legitimizing Jim Crow laws."]
]],
"6.5": ["Answer the following about technological innovation, 1865–1898.", [
  ["Identify one major technological innovation of this period.", "Earns the point for the telephone (Bell), electric light and power (Edison), Bessemer steel process, refrigerated railcars, or the typewriter."],
  ["Describe one way new technology changed industry.", "Earns the point for describing mass production, cheaper steel for railroads and skyscrapers, national markets via railroads, or faster communication for business."],
  ["Explain one way new technology changed urban life.", "Earns the point for explaining electric streetcars enabling suburbs, skyscrapers, electric lighting, or department stores."]
]],
"6.6": ["Answer the following about the rise of industrial capitalism.", [
  ["Identify one industrialist and the industry he dominated.", "Earns the point for a correct pairing: Andrew Carnegie—steel; John D. Rockefeller—oil; J.P. Morgan—banking/finance; Cornelius Vanderbilt—railroads."],
  ["Describe vertical or horizontal integration.", "Earns the point for describing vertical integration (controlling every stage of production, e.g., Carnegie) or horizontal integration (buying competitors in the same industry, e.g., Rockefeller's Standard Oil)."],
  ["Explain one criticism of big business in this period.", "Earns the point for explaining monopolies raising prices, exploitation of workers, political corruption/influence, or growing inequality."]
]],
"6.7": ["Answer the following about labor in the Gilded Age.", [
  ["Identify one labor union of this period.", "Earns the point for the Knights of Labor, the American Federation of Labor (AFL), or the American Railway Union."],
  ["Describe one major strike of this period.", "Earns the point for describing the Great Railroad Strike (1877), Haymarket (1886), Homestead (1892), or Pullman (1894) with an accurate detail."],
  ["Explain one reason labor unions had limited success.", "Earns the point for explaining government use of troops/injunctions against strikes, public fear of radicalism after Haymarket, divisions among workers (skill, race, ethnicity), or employers hiring replacement workers."]
]],
"6.8": ["Answer the following about immigration and migration, 1865–1898.", [
  ["Identify one region that was a major source of 'new immigrants' after 1880.", "Earns the point for Southern Europe (e.g., Italy) or Eastern Europe (e.g., Russia, Poland, Austria-Hungary); also accept China/Asia for the West Coast."],
  ["Describe one reason immigrants came to the United States.", "Earns the point for describing industrial jobs, escaping poverty, or escaping religious persecution (e.g., Jewish people fleeing pogroms)."],
  ["Explain one challenge immigrants faced in American cities.", "Earns the point for explaining crowded tenements, low-wage dangerous jobs, nativism/discrimination, or language barriers."]
]],
"6.9": ["Answer the following about responses to immigration.", [
  ["Identify the Chinese Exclusion Act (1882).", "Earns the point for identifying the first federal law banning immigration of a specific ethnic group (Chinese laborers)."],
  ["Describe nativist arguments against immigration.", "Earns the point for describing claims that immigrants took jobs, lowered wages, brought crime or radical ideas, or threatened Protestant American culture."],
  ["Explain how settlement houses such as Hull House helped immigrants.", "Earns the point for explaining that Jane Addams's Hull House and others offered English classes, childcare, job training, and health services to help immigrants adjust."]
]],
"6.10": ["Answer the following about the development of the middle class.", [
  ["Identify one new type of middle-class job created by industrialization.", "Earns the point for clerks, managers, salespeople, accountants, or professionals such as engineers."],
  ["Describe one new leisure activity popular in this period.", "Earns the point for describing spectator sports (baseball), vaudeville, amusement parks (Coney Island), or department store shopping."],
  ["Explain one way the growing middle class changed American society.", "Earns the point for explaining growth of consumer culture, suburbs, more women's clubs and reform activity, or higher education."]
]],
"6.11": ["Answer the following about reform in the Gilded Age.", [
  ["Identify the Social Gospel movement.", "Earns the point for identifying the effort by Protestant ministers to apply Christian ethics to social problems like poverty and urban conditions."],
  ["Describe one goal of women reformers in this period.", "Earns the point for describing women's suffrage (NAWSA), temperance (WCTU), or improving conditions for the urban poor."],
  ["Explain how Andrew Carnegie's 'Gospel of Wealth' differed from Social Darwinism.", "Earns the point for explaining that Carnegie argued the rich had a duty to use their wealth for public good (libraries, education), while Social Darwinism held the poor were unfit and the government shouldn't help."]
]],
"6.12": ["Answer the following about controversies over the role of government in the Gilded Age.", [
  ["Identify laissez-faire economics.", "Earns the point for identifying the belief that government should not interfere in the economy or regulate business."],
  ["Describe Social Darwinism.", "Earns the point for describing applying 'survival of the fittest' to society to argue that the wealthy deserved success and the poor their poverty."],
  ["Explain the purpose and one limitation of the Interstate Commerce Act (1887) or the Sherman Antitrust Act (1890).", "Earns the point for explaining the purpose (regulating railroads / banning monopolies and trusts) AND a limitation (weak enforcement; courts used Sherman Act against unions)."]
]],
"6.13": ["Answer the following about politics in the Gilded Age.", [
  ["Identify the Populist (People's) Party.", "Earns the point for identifying the third party formed in the 1890s mainly by farmers (from Farmers' Alliances)."],
  ["Describe one demand of the Omaha Platform (1892).", "Earns the point for describing free coinage of silver, a graduated income tax, government ownership of railroads/telegraphs, direct election of senators, or an 8-hour day."],
  ["Explain the significance of the election of 1896.", "Earns the point for explaining that William Jennings Bryan (Democrat/Populist, free silver) lost to William McKinley (Republican, gold standard), leading to the decline of the Populist Party and Republican dominance."]
]],
"6.14": ["Answer the following continuity and change question about 1865–1898.", [
  ["Identify one major change in the U.S. economy from 1865 to 1898.", "Earns the point for industrialization, growth of big business/corporations, a national railroad network, or urbanization."],
  ["Describe one continuity in the treatment of African Americans from 1865 to 1898.", "Earns the point for describing continued economic dependence (sharecropping), racial violence, disenfranchisement, or segregation (Jim Crow)."],
  ["Explain one cause of the economic change identified in part A.", "Earns the point for explaining new technologies, abundant natural resources, immigrant labor, government support (land grants, tariffs), or investment capital."]
]],
"7.1": ["Answer the following about the context of Period 7 (1890–1945).", [
  ["Identify one development that increased U.S. power abroad in this period.", "Earns the point for acquiring overseas territories (Philippines, Hawaii, Puerto Rico), the Panama Canal, or participation in World War I or II."],
  ["Describe one domestic reform movement of this period.", "Earns the point for describing Progressivism (regulating business, political reform) or the New Deal (relief, recovery, reform)."],
  ["Explain one way the Great Depression changed Americans' expectations of government.", "Earns the point for explaining that people came to expect the federal government to provide relief, regulate the economy, and offer a safety net (Social Security)."]
]],
"7.2": ["Answer the following about debates over imperialism, 1890–1945.", [
  ["Identify one argument used to support U.S. imperialism.", "Earns the point for new markets for goods, naval bases/coaling stations (Mahan), spreading Christianity/'civilization', or competing with European powers."],
  ["Describe one argument made by anti-imperialists.", "Earns the point for describing that colonies violated self-government and the Declaration of Independence, would bring non-white peoples into the nation (racist argument), or would be costly (Anti-Imperialist League, Mark Twain)."],
  ["Explain one U.S. action in Latin America in the early 1900s.", "Earns the point for explaining the Roosevelt Corollary, building the Panama Canal, Dollar Diplomacy, or military interventions (e.g., Nicaragua, Haiti)."]
]],
"7.3": ["Answer the following about the Spanish-American War (1898).", [
  ["Identify one cause of the Spanish-American War.", "Earns the point for the explosion of the USS Maine, yellow journalism, sympathy for Cuban independence, or economic interests in Cuba."],
  ["Describe one territorial result of the war.", "Earns the point for describing the U.S. acquiring the Philippines, Guam, and Puerto Rico, and Cuba becoming a protectorate (Platt Amendment)."],
  ["Explain one consequence of U.S. control of the Philippines.", "Earns the point for explaining the Philippine-American War (1899–1902), debates over imperialism, or U.S. presence in Asia."]
]],
"7.4": ["Answer the following about the Progressives.", [
  ["Identify one Progressive reform at the federal level.", "Earns the point for the Meat Inspection Act, Pure Food and Drug Act, trust-busting, Federal Reserve Act, 16th Amendment (income tax), or 17th Amendment (direct election of senators)."],
  ["Describe the role of muckrakers.", "Earns the point for describing journalists who exposed corruption and abuses (e.g., Upton Sinclair's The Jungle, Ida Tarbell on Standard Oil, Jacob Riis on tenements)."],
  ["Explain one limitation of the Progressive movement.", "Earns the point for explaining that most Progressives ignored or supported racial segregation, or that some reforms were weakly enforced."]
]],
"7.5": ["Answer the following about World War I: military and diplomacy.", [
  ["Identify one reason the United States entered World War I in 1917.", "Earns the point for Germany's unrestricted submarine warfare (e.g., sinking of the Lusitania and U.S. ships), the Zimmermann Telegram, or economic ties with the Allies."],
  ["Describe Woodrow Wilson's Fourteen Points.", "Earns the point for describing his peace plan including self-determination, freedom of the seas, free trade, arms reduction, and a League of Nations."],
  ["Explain why the U.S. Senate rejected the Treaty of Versailles.", "Earns the point for explaining that senators (e.g., Henry Cabot Lodge) feared the League of Nations would drag the U.S. into foreign wars and limit Congress's power."]
]],
"7.6": ["Answer the following about the World War I home front.", [
  ["Identify one government action to mobilize the economy or public opinion.", "Earns the point for the War Industries Board, Liberty Bonds, the Committee on Public Information (propaganda), or the draft (Selective Service Act)."],
  ["Describe the Great Migration during World War I.", "Earns the point for describing African Americans moving from the rural South to Northern cities for industrial jobs and to escape Jim Crow."],
  ["Explain one way civil liberties were restricted during the war.", "Earns the point for explaining the Espionage and Sedition Acts punishing antiwar speech (e.g., Schenck v. U.S., Eugene Debs's imprisonment)."]
]],
"7.7": ["Answer the following about 1920s innovations in communication and technology.", [
  ["Identify one technological innovation that became widespread in the 1920s.", "Earns the point for the automobile (Model T), radio, motion pictures, or household electrical appliances."],
  ["Describe one effect of the automobile on American life.", "Earns the point for describing suburban growth, new industries (roads, gas stations), more personal freedom and travel, or changes to dating and leisure."],
  ["Explain one way mass media changed American culture.", "Earns the point for explaining that radio and movies created a shared national culture, celebrities, and advertising-driven consumerism."]
]],
"7.8": ["Answer the following about 1920s cultural and political controversies.", [
  ["Identify the issue at the center of the Scopes Trial (1925).", "Earns the point for teaching evolution in public schools vs. religious fundamentalism."],
  ["Describe the Harlem Renaissance.", "Earns the point for describing a flowering of African American literature, art, and music (e.g., Langston Hughes, Zora Neale Hurston, jazz) celebrating Black identity."],
  ["Explain one example of nativism in the 1920s.", "Earns the point for explaining immigration quotas (Emergency Quota Act, 1921; Immigration Act of 1924), the revived Ku Klux Klan, or the Sacco and Vanzetti case."]
]],
"7.9": ["Answer the following about the Great Depression.", [
  ["Identify one cause of the Great Depression.", "Earns the point for the 1929 stock market crash, bank failures, overproduction/underconsumption, unequal wealth distribution, easy credit, or high tariffs (Smoot-Hawley)."],
  ["Describe one effect of the Depression on Americans.", "Earns the point for describing massive unemployment (~25%), Hoovervilles, farm foreclosures, the Dust Bowl migration, or bread lines."],
  ["Explain President Hoover's approach to the Depression.", "Earns the point for explaining that he favored voluntary cooperation and limited federal action (e.g., Reconstruction Finance Corporation) and opposed direct relief, which many saw as inadequate."]
]],
"7.10": ["Answer the following about the New Deal.", [
  ["Identify one New Deal program and its purpose.", "Earns the point for a correct pairing, e.g., CCC (jobs for young men), WPA (public works jobs), Social Security (pensions/unemployment insurance), FDIC (insured bank deposits), SEC (regulated stock market), TVA (dams/electricity)."],
  ["Describe one way the New Deal changed the role of the federal government.", "Earns the point for describing that the government took responsibility for economic security, regulated banks and markets, or protected labor rights (Wagner Act)."],
  ["Explain one criticism of the New Deal.", "Earns the point for explaining conservatives' view that it expanded government too much or threatened free enterprise, OR critics like Huey Long saying it didn't go far enough, OR FDR's court-packing plan."]
]],
"7.11": ["Answer the following about interwar foreign policy.", [
  ["Identify the purpose of the Neutrality Acts of the 1930s.", "Earns the point for keeping the U.S. out of foreign wars (banning arms sales and loans to nations at war)."],
  ["Describe one reason many Americans favored isolationism in the 1930s.", "Earns the point for describing disillusionment with World War I, the Nye Committee's claims about arms makers, or focus on the Depression."],
  ["Explain how the Lend-Lease Act (1941) shifted U.S. policy.", "Earns the point for explaining that it let the U.S. lend or lease war supplies to Britain (and later the USSR), moving away from neutrality toward supporting the Allies."]
]],
"7.12": ["Answer the following about World War II mobilization.", [
  ["Identify one way the government mobilized the economy for World War II.", "Earns the point for converting factories to war production, rationing, war bonds, wage and price controls, or the War Production Board."],
  ["Describe one change for women during the war.", "Earns the point for describing women entering factory and defense jobs ('Rosie the Riveter') or serving in auxiliary military units."],
  ["Explain the internment of Japanese Americans.", "Earns the point for explaining that Executive Order 9066 forced about 120,000 Japanese Americans into camps due to wartime fear and racism; upheld in Korematsu v. U.S."]
]],
"7.13": ["Answer the following about World War II military strategy.", [
  ["Identify one major turning point in the Pacific war.", "Earns the point for the Battle of Midway (1942)."],
  ["Describe the strategy of island hopping.", "Earns the point for describing capturing key islands and bypassing others to move closer to Japan."],
  ["Explain one reason Truman decided to use the atomic bomb.", "Earns the point for explaining that it would end the war quickly and avoid a costly invasion of Japan (also accept demonstrating power to the USSR)."]
]],
"7.14": ["Answer the following about postwar diplomacy.", [
  ["Identify the purpose of the United Nations.", "Earns the point for identifying an international organization created in 1945 to maintain peace and security."],
  ["Describe one decision made at the Yalta Conference (1945).", "Earns the point for describing agreements on dividing Germany into zones, Soviet entry into the war against Japan, creating the UN, or promised free elections in Eastern Europe."],
  ["Explain one source of tension between the U.S. and USSR after the war.", "Earns the point for explaining Soviet control of Eastern Europe, disagreements over Germany, or ideological differences."]
]],
"7.15": ["Answer the following comparison question about 1890–1945.", [
  ["Identify one similarity between the Progressive movement and the New Deal.", "Earns the point for both expanding government's role to regulate business and address social problems."],
  ["Describe one difference between Progressive reforms and the New Deal.", "Earns the point for describing that the New Deal was much larger in scale, created a federal safety net (Social Security), and was a response to economic collapse."],
  ["Explain one reason for the difference.", "Earns the point for explaining that the Great Depression created an unprecedented crisis requiring more federal action."]
]],
"8.1": ["Answer the following about the context of Period 8 (1945–1980).", [
  ["Identify one Cold War policy of the United States.", "Earns the point for containment, the Truman Doctrine, the Marshall Plan, NATO, or massive retaliation."],
  ["Describe one social movement of this period.", "Earns the point for describing the civil rights movement, the women's movement, the environmental movement, or the antiwar movement."],
  ["Explain one cause of postwar economic growth.", "Earns the point for explaining consumer demand, government spending (defense, highways), the GI Bill, or baby boom."]
]],
"8.2": ["Answer the following about the Cold War from 1945 to 1980.", [
  ["Identify the Truman Doctrine.", "Earns the point for identifying the 1947 policy of supporting countries resisting communism (e.g., Greece and Turkey)."],
  ["Describe the Marshall Plan.", "Earns the point for describing U.S. economic aid to rebuild Western Europe and prevent communism."],
  ["Explain the significance of the Cuban Missile Crisis (1962).", "Earns the point for explaining that it brought the U.S. and USSR close to nuclear war, ended with removal of Soviet missiles from Cuba, and led to a hotline and arms control talks."]
]],
"8.3": ["Answer the following about the Red Scare.", [
  ["Identify Senator Joseph McCarthy's role in the Red Scare.", "Earns the point for identifying his accusations, often without evidence, that communists had infiltrated the government."],
  ["Describe the House Un-American Activities Committee (HUAC).", "Earns the point for describing the congressional committee that investigated alleged communists, including in Hollywood."],
  ["Explain one effect of the Red Scare.", "Earns the point for explaining loyalty oaths, blacklists, restrictions on civil liberties, or a climate of fear and conformity."]
]],
"8.4": ["Answer the following about the economy after 1945.", [
  ["Identify the GI Bill.", "Earns the point for identifying the law providing veterans with education benefits, home loans, and unemployment pay."],
  ["Describe suburbanization after World War II.", "Earns the point for describing growth of suburbs (e.g., Levittown) with mass-produced homes, supported by highways and federal loans."],
  ["Explain one way the growth of suburbs reinforced racial segregation.", "Earns the point for explaining that restrictive covenants and redlining excluded Black families from new suburbs."]
]],
"8.5": ["Answer the following about culture after 1945.", [
  ["Identify one example of conformity in postwar culture.", "Earns the point for suburban life, consumerism, traditional gender roles, or corporate culture."],
  ["Describe the Beat movement.", "Earns the point for describing writers (Kerouac, Ginsberg) who rejected conformity and materialism."],
  ["Explain the role of television in postwar culture.", "Earns the point for explaining that television spread a shared national culture and consumer values."]
]],
"8.6": ["Answer the following about early civil rights efforts (1940s–1950s).", [
  ["Identify the ruling in Brown v. Board of Education (1954).", "Earns the point for identifying that segregated public schools were unconstitutional, overturning 'separate but equal.'"],
  ["Describe the Montgomery Bus Boycott (1955–1956).", "Earns the point for describing a boycott of segregated buses sparked by Rosa Parks's arrest and led by Martin Luther King Jr."],
  ["Explain one example of federal action on civil rights in the 1940s or 1950s.", "Earns the point for explaining Truman desegregating the military (1948), Eisenhower sending troops to Little Rock (1957), or the Civil Rights Act of 1957."]
]],
"8.7": ["Answer the following about America as a world power.", [
  ["Identify one Cold War military alliance.", "Earns the point for NATO or SEATO."],
  ["Describe the Korean War.", "Earns the point for describing the 1950–1953 war in which UN/U.S. forces defended South Korea against North Korea (and China), ending in an armistice near the 38th parallel."],
  ["Explain one example of U.S. covert action during the Cold War.", "Earns the point for explaining CIA-backed coups in Iran (1953) or Guatemala (1954), or the Bay of Pigs invasion (1961)."]
]],
"8.8": ["Answer the following about the Vietnam War.", [
  ["Identify the Gulf of Tonkin Resolution (1964).", "Earns the point for identifying the congressional resolution giving President Johnson broad power to use military force in Vietnam."],
  ["Describe the Tet Offensive (1968).", "Earns the point for describing a major North Vietnamese/Viet Cong attack that, though a military defeat for them, turned American public opinion against the war."],
  ["Explain one effect of the Vietnam War on American society or politics.", "Earns the point for explaining antiwar protests, the credibility gap, the War Powers Act (1973), or the 26th Amendment."]
]],
"8.9": ["Answer the following about the Great Society.", [
  ["Identify one Great Society program.", "Earns the point for Medicare, Medicaid, Head Start, the Job Corps, or federal aid to education."],
  ["Describe the goal of the War on Poverty.", "Earns the point for describing Lyndon Johnson's effort to reduce poverty through federal programs in health, education, and jobs."],
  ["Explain one criticism of the Great Society.", "Earns the point for explaining that conservatives criticized its cost and expansion of government, or that Vietnam spending undercut it."]
]],
"8.10": ["Answer the following about the African American civil rights movement in the 1960s.", [
  ["Identify the Civil Rights Act of 1964.", "Earns the point for identifying the law banning discrimination in public accommodations and employment."],
  ["Describe the Voting Rights Act of 1965.", "Earns the point for describing federal protection of voting rights, banning literacy tests and allowing federal oversight."],
  ["Explain how the Black Power movement differed from earlier civil rights strategies.", "Earns the point for explaining emphasis on Black pride, self-determination, and self-defense, rather than integration and nonviolence."]
]],
"8.11": ["Answer the following about the expansion of the civil rights movement.", [
  ["Identify one group inspired by the African American civil rights movement.", "Earns the point for women, Latino/Chicano Americans (César Chávez, UFW), Native Americans (AIM), or LGBTQ+ Americans."],
  ["Describe one goal of the women's movement of the 1960s–1970s.", "Earns the point for describing equal pay, ending workplace discrimination, the Equal Rights Amendment, or reproductive rights (Betty Friedan, NOW)."],
  ["Explain one achievement of these movements.", "Earns the point for explaining Title IX (1972), Roe v. Wade (1973), the Indian Self-Determination Act, or farmworker contracts."]
]],
"8.12": ["Answer the following about youth culture of the 1960s.", [
  ["Identify the counterculture.", "Earns the point for identifying young people rejecting mainstream values, embracing rock music, communal living, and experimentation."],
  ["Describe one student protest movement.", "Earns the point for describing the Free Speech Movement, Students for a Democratic Society (SDS), or antiwar protests."],
  ["Explain one effect of youth movements.", "Earns the point for explaining changes in attitudes toward authority, the 26th Amendment lowering the voting age, or conservative backlash."]
]],
"8.13": ["Answer the following about the environment and natural resources, 1968–1980.", [
  ["Identify the Environmental Protection Agency (EPA).", "Earns the point for identifying the federal agency created in 1970 to protect the environment."],
  ["Describe the purpose of Earth Day (1970).", "Earns the point for describing raising public awareness of environmental problems."],
  ["Explain one environmental law passed in this period.", "Earns the point for explaining the Clean Air Act, Clean Water Act, or Endangered Species Act."]
]],
"8.14": ["Answer the following about society in transition, 1970s.", [
  ["Identify one economic challenge of the 1970s.", "Earns the point for stagflation, the oil crisis, or declining manufacturing."],
  ["Describe one reason for the rise of conservatism in the 1970s.", "Earns the point for describing backlash against 1960s movements, the Religious Right, or distrust of government."],
  ["Explain one effect of the Watergate scandal.", "Earns the point for explaining Nixon's resignation, distrust of government, or reforms limiting presidential power."]
]],
"8.15": ["Answer the following continuity and change question about 1945–1980.", [
  ["Identify one change in civil rights between 1945 and 1980.", "Earns the point for legal end of segregation, voting rights protections, or anti-discrimination laws."],
  ["Describe one continuity in American society during this period.", "Earns the point for describing persistent racial inequality, Cold War anxiety, or economic disparities."],
  ["Explain one cause of the change identified in part A.", "Earns the point for explaining grassroots activism, court decisions, or federal legislation."]
]],
"9.1": ["Answer the following about the context of Period 9 (1980–present).", [
  ["Identify one development that shaped American politics after 1980.", "Earns the point for the rise of conservatism, the end of the Cold War, or globalization."],
  ["Describe one effect of globalization on the U.S. economy.", "Earns the point for describing outsourcing of manufacturing, growth of trade, or growth of the service and tech sectors."],
  ["Explain one challenge the U.S. faced in the 21st century.", "Earns the point for explaining terrorism (9/11), the Great Recession, climate change, or political polarization."]
]],
"9.2": ["Answer the following about Reagan and conservatism.", [
  ["Identify one economic policy of the Reagan administration.", "Earns the point for tax cuts, deregulation, or cuts to social programs (Reaganomics/supply-side economics)."],
  ["Describe one group that supported the new conservatism.", "Earns the point for describing evangelical Christians (Moral Majority), business interests, or suburban voters."],
  ["Explain one effect of Reagan's policies.", "Earns the point for explaining economic growth, rising deficits, or growing inequality."]
]],
"9.3": ["Answer the following about the end of the Cold War.", [
  ["Identify one event that marked the end of the Cold War.", "Earns the point for the fall of the Berlin Wall (1989) or dissolution of the USSR (1991)."],
  ["Describe Reagan's approach to the Soviet Union.", "Earns the point for describing military buildup, SDI, and later negotiations with Gorbachev (INF Treaty)."],
  ["Explain one reason the Soviet Union collapsed.", "Earns the point for explaining economic stagnation, costly arms race, or Gorbachev's reforms."]
]],
"9.4": ["Answer the following about a changing economy after 1980.", [
  ["Identify one technological change that reshaped the economy.", "Earns the point for personal computers, the internet, or mobile technology."],
  ["Describe the North American Free Trade Agreement (NAFTA).", "Earns the point for describing the 1994 agreement reducing trade barriers among the U.S., Canada, and Mexico."],
  ["Explain one effect of economic changes on American workers.", "Earns the point for explaining loss of manufacturing jobs, wage stagnation, or growth of service and tech jobs."]
]],
"9.5": ["Answer the following about migration and immigration in the 1990s and 2000s.", [
  ["Identify one major source region of immigration to the U.S. after 1965.", "Earns the point for Latin America or Asia."],
  ["Describe one debate over immigration policy.", "Earns the point for describing debates over border security, a path to citizenship, or DACA."],
  ["Explain one effect of immigration on American society.", "Earns the point for explaining demographic change, cultural diversity, or political debates."]
]],
"9.6": ["Answer the following about challenges of the 21st century.", [
  ["Identify the September 11, 2001 attacks.", "Earns the point for identifying al-Qaeda's terrorist attacks on the World Trade Center and Pentagon."],
  ["Describe one U.S. response to 9/11.", "Earns the point for describing the war in Afghanistan, the Iraq War, the Patriot Act, or the Department of Homeland Security."],
  ["Explain one debate caused by the War on Terror.", "Earns the point for explaining debates over civil liberties and surveillance, detention (Guantánamo), or the Iraq War."]
]],
"9.7": ["Answer the following causation question about 1980–present.", [
  ["Identify one cause of economic change after 1980.", "Earns the point for technology, globalization, or deregulation."],
  ["Describe one effect of this economic change.", "Earns the point for describing growing income inequality, shift to service economy, or financial crises (2008)."],
  ["Explain one long-term effect of globalization on the U.S.", "Earns the point for explaining global supply chains, cultural exchange, or political backlash."]
]]
};
