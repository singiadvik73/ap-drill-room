// AP Human Geography: free-response questions, one per CED topic (Claude version only).
// Each topic: [stimulus, [[part prompt, rubric], ...]]. Every part is worth 1 point; Claude grades only against the rubric.
window.AP_FRQ = window.AP_FRQ || {};
AP_FRQ.hug = {
"1.1": ["A city planner is choosing maps for a report. One map uses the Mercator projection to show the whole world. Another is a choropleth map showing median household income by census tract.", [
  ["Identify one type of distortion found on the Mercator projection.", "Earns the point for correctly identifying that the Mercator distorts AREA/SIZE (landmasses near the poles, such as Greenland or Antarctica, appear far larger than they are). Distance distortion at high latitudes is also acceptable. Does not earn: saying it distorts direction or shape (Mercator preserves direction and local shape)."],
  ["Describe one reason the Mercator projection is still used despite its distortion.", "Earns the point for describing that it preserves direction/compass bearing (it is conformal), so a straight line is a line of constant bearing, which makes it useful for navigation (sea or air) or for web mapping of local areas. Does not earn: 'it is accurate' or 'it shows true size.'"],
  ["Explain one limitation of using a choropleth map to show income by census tract.", "Earns the point for explaining a real limitation, e.g., it shows one average value per tract and hides variation within the tract; large tracts visually dominate even if few people live there; results depend on how class breaks/categories are chosen; boundaries suggest sharp changes that don't exist. Must explain, not just name, the limitation."]
]],
"1.2": ["A county government wants to decide where to build a new fire station. It has access to GIS software, satellite imagery, census data, and interviews with residents.", [
  ["Identify one type of geospatial technology the county could use.", "Earns the point for identifying GIS, GPS, or remote sensing (satellite imagery, aerial photography, drones/LiDAR). Does not earn: a generic 'computer' or 'map.'"],
  ["Describe how GIS could help the county choose the location.", "Earns the point for describing layering/overlaying data (e.g., roads, population density, existing station locations, response times, fire risk) to analyze spatial relationships and find the best site. Must describe what GIS does with the data, not just say 'it makes a map.'"],
  ["Explain one advantage of using qualitative field data, such as interviews with residents, in this decision.", "Earns the point for explaining that interviews reveal perceptions, local knowledge, needs, or concerns (e.g., which roads flood, where residents feel underserved) that quantitative data or satellite images cannot capture. Must connect to why that helps the decision."]
]],
"1.3": ["A national government uses census data to redraw legislative districts and to decide where to fund new schools and hospitals.", [
  ["Identify one way governments use geographic data in decision-making.", "Earns the point for identifying a valid use, e.g., redistricting/apportioning representatives, allocating funding (schools, hospitals, infrastructure), disaster planning, transportation planning, public health tracking."],
  ["Describe how census data could influence where a new hospital is built.", "Earns the point for describing that census data shows where population is growing, concentrated, aging, or underserved, so the hospital can be located to serve the most people or those with the greatest need."],
  ["Explain one way an undercount of a population group in a census could affect that group.", "Earns the point for explaining a consequence such as less political representation (fewer seats/districts), less federal/state funding for services in their area, or fewer resources (schools, clinics) planned for them. Must connect undercount to the effect."]
]],
"1.4": ["Two maps of a metropolitan area are compared. Map 1 shows coffee shops clustered tightly downtown. Map 2 shows public libraries spread evenly across neighborhoods.", [
  ["Identify the type of pattern shown by the coffee shops on Map 1.", "Earns the point for identifying the pattern as clustered/concentrated/agglomerated (high density in one area)."],
  ["Describe the difference between absolute location and relative location, using a library as an example.", "Earns the point for describing absolute location as a precise position (latitude/longitude or street address) AND relative location as position in relation to other places (e.g., 'across from the park, near the high school'). Both halves needed."],
  ["Explain how distance decay could affect the number of people who use a library.", "Earns the point for explaining that interaction declines with distance: people living farther from a library are less likely to use it, so use is highest among nearby residents. Must apply distance decay to library use."]
]],
"1.5": ["Farmers in the Netherlands built polders by draining land from the sea. In the Sahel, overgrazing and drought have contributed to desertification.", [
  ["Define the concept of possibilism.", "Earns the point for defining possibilism as the idea that the physical environment sets limits or offers options, but humans choose how to respond/adapt using culture and technology. Does not earn: a definition of environmental determinism."],
  ["Describe how Dutch polders illustrate humans modifying the environment.", "Earns the point for describing that the Dutch used dikes, pumps/windmills, and drainage to turn wetlands or seabed into usable land for farming or settlement, reshaping the environment to meet human needs."],
  ["Explain one way human activity in the Sahel contributes to desertification.", "Earns the point for explaining a process: overgrazing removes vegetation, exposing soil to wind/water erosion; deforestation or firewood collection removes cover; overcultivation depletes soil; so land becomes desert-like. Must link the activity to land degradation."]
]],
"1.6": ["A news report states that unemployment in a country is 5%. Data for the country's regions ranges from 2% to 14%, and some individual towns exceed 20%.", [
  ["Identify two scales of analysis mentioned in the scenario.", "Earns the point for identifying two of: national/country, regional, local/town. Both needed."],
  ["Describe how looking only at the national scale could be misleading.", "Earns the point for describing that the national average hides variation, so places with very high unemployment (14% regions, 20% towns) are not visible and problems may be overlooked."],
  ["Explain why a policymaker might choose to analyze the data at the local scale.", "Earns the point for explaining that local-scale data reveals specific places in need, so resources/programs (job training, investment) can be targeted where they will help most. Must connect scale to a decision."]
]],
"1.7": ["The 'Bible Belt' in the southern United States, the 'Corn Belt' in the Midwest, and a metropolitan newspaper's delivery area are all examples of regions.", [
  ["Identify the type of region represented by a newspaper's delivery area.", "Earns the point for identifying it as a functional (nodal) region, organized around a central node."],
  ["Describe what makes the Corn Belt a formal region.", "Earns the point for describing that it is defined by a shared, measurable characteristic (corn production/agricultural land use) that is present throughout the area."],
  ["Explain why the boundaries of a perceptual (vernacular) region such as the Bible Belt are hard to define.", "Earns the point for explaining that perceptual regions are based on people's feelings, attitudes, or mental maps rather than precise data, so different people draw the borders differently. Must explain the reason for fuzzy boundaries."]
]],
"2.1": ["A population map of Egypt shows over 95% of the people living within a few kilometers of the Nile River. Egypt's arithmetic density is about 110 people per km², but its physiological density is over 3,000 people per km² of arable land.", [
  ["Identify one physical factor that explains Egypt's population distribution.", "Earns the point for identifying access to fresh water/the Nile, fertile/arable soil along the river or delta, or the surrounding desert/arid climate."],
  ["Describe the difference between arithmetic density and physiological density.", "Earns the point for describing arithmetic density as total population divided by total land area AND physiological density as population divided by arable (farmable) land. Both needed."],
  ["Explain what Egypt's high physiological density suggests about pressure on its agricultural land.", "Earns the point for explaining that many people depend on a small amount of farmland, so there is heavy pressure on that land to produce food; Egypt may need intensive farming or food imports. Must connect the number to pressure on land."]
]],
"2.2": ["Rapid population growth in a region is concentrated in a few coastal cities, while interior rural areas are losing population.", [
  ["Identify one political consequence of an uneven population distribution.", "Earns the point for identifying a consequence such as shifts in political representation/redistricting toward growing areas, more political power for dense regions, or rural areas losing representation."],
  ["Describe one economic consequence for the shrinking rural areas.", "Earns the point for describing a consequence such as a smaller labor force, businesses closing, lower tax base, reduced services (schools, clinics), or declining property values."],
  ["Explain one environmental or social challenge that could result from rapid growth in the coastal cities.", "Earns the point for explaining a challenge such as strain on water, housing shortages, informal settlements, traffic/pollution, loss of wetlands, or overwhelmed infrastructure, and linking it to rapid growth."]
]],
"2.3": ["Country X's population pyramid has a wide base that narrows quickly toward the top. Country Y's pyramid is narrow at the base and wide in the middle and upper age groups.", [
  ["Identify which country most likely has a higher total fertility rate.", "Earns the point for identifying Country X (wide base means many children/high birth rate)."],
  ["Describe one challenge Country Y is likely to face in the next 20 years.", "Earns the point for describing a challenge of an aging population: shrinking labor force, rising pension/health-care costs, higher dependency ratio of elderly, labor shortages, school closures."],
  ["Explain how a population pyramid can be used to predict future demand for schools in Country X.", "Earns the point for explaining that the large number of young children at the base means many school-age students in coming years, so demand for schools and teachers will rise. Must use the pyramid's shape to predict."]
]],
"2.4": ["In a country, the crude birth rate is 30 per 1,000 and the crude death rate is 8 per 1,000. Net migration is close to zero.", [
  ["Calculate the rate of natural increase (as a percentage).", "Earns the point for 2.2% (30 − 8 = 22 per 1,000 = 2.2%). Accept '22 per 1,000' if converted or clearly equivalent."],
  ["Describe what the doubling time would be approximately, and how it is estimated.", "Earns the point for about 32 years (accept roughly 30–35) using the rule of 70 (70 ÷ 2.2). Must give an approximate number."],
  ["Explain one reason the country's crude death rate is low even though its birth rate is high.", "Earns the point for explaining that improved medicine, vaccines, sanitation, clean water, or food supply lowered deaths, and/or that a young population structure means few elderly deaths. Must give a reason, not just restate."]
]],
"2.5": ["Country Z has a falling crude birth rate, a low crude death rate, and a high but slowing rate of natural increase. It is urbanizing and more women are entering the workforce.", [
  ["Identify which stage of the demographic transition model Country Z is most likely in.", "Earns the point for identifying Stage 3."],
  ["Describe one reason crude birth rates fall during this stage.", "Earns the point for describing a reason: urbanization makes children an economic cost rather than a labor asset, more women in education/workforce, access to contraception, lower infant mortality so fewer births are needed."],
  ["Explain one limitation of the demographic transition model.", "Earns the point for explaining a limitation, e.g., it is based on European/Western experience and may not apply elsewhere; it doesn't account for migration; it doesn't predict timing; it didn't originally include a Stage 5 of population decline; countries can be pushed through stages by outside medicine rather than industrialization."]
]],
"2.6": ["In 1798, Thomas Malthus argued that population grows geometrically while food supply grows arithmetically.", [
  ["Describe Malthus's prediction about population and food.", "Earns the point for describing that population would outgrow the food supply, leading to famine, disease, war, or other 'checks' that would reduce population."],
  ["Identify one development that has prevented Malthus's prediction from coming true on a global scale.", "Earns the point for identifying the Green Revolution, the Second Agricultural Revolution, mechanization, fertilizers/pesticides, high-yield seeds, irrigation, GMOs, or falling birth rates."],
  ["Explain one way neo-Malthusians expand on Malthus's ideas today.", "Earns the point for explaining that neo-Malthusians argue population growth strains resources beyond food (water, energy, land, the environment) and that rapid growth in poorer countries worsens these pressures."]
]],
"2.7": ["China's one-child policy (1980–2015) limited most families to one child. Russia and several European countries offer cash payments and extended parental leave to families that have more children.", [
  ["Identify the type of population policy used by Russia and similar countries.", "Earns the point for identifying pronatalist policy."],
  ["Describe one intended outcome of China's one-child policy.", "Earns the point for describing an intended outcome: slowing population growth, reducing pressure on food and resources, or supporting economic development."],
  ["Explain one unintended consequence of China's one-child policy.", "Earns the point for explaining an unintended consequence such as a skewed sex ratio (more males) due to son preference, a rapidly aging population, a future labor shortage, or the '4-2-1' problem of one child supporting parents and grandparents."]
]],
"2.8": ["In many countries, rising female literacy and employment have been followed by declining fertility rates.", [
  ["Identify one social change in the status of women that affects fertility.", "Earns the point for identifying increased education/literacy, entry into the paid workforce, access to family planning, delayed marriage, or more legal rights."],
  ["Describe how increased education for women can lower the total fertility rate.", "Earns the point for describing a mechanism: educated women marry and have children later, know about/use contraception, pursue careers, and choose smaller families."],
  ["Explain one effect of declining fertility on a country's economy.", "Earns the point for explaining an effect such as a demographic dividend (more working-age people per dependent), more women in the labor force, or later an aging population and shrinking workforce. Must link fertility decline to the economy."]
]],
"2.9": ["Japan's median age is over 48, and more than 28% of its people are 65 or older.", [
  ["Identify one cause of Japan's aging population.", "Earns the point for identifying low fertility/birth rates, high life expectancy, or low immigration."],
  ["Describe one economic challenge created by an aging population.", "Earns the point for describing a challenge: high elderly dependency ratio, pension/health-care costs rising, shrinking workforce/labor shortages, lower tax revenue."],
  ["Explain one policy a country could adopt to address the challenges of an aging population.", "Earns the point for explaining a policy and how it helps: encouraging immigration to fill jobs, raising the retirement age, pronatalist incentives, automation/robotics, or encouraging more women/older people to work."]
]],
"2.10": ["A young man leaves a rural village in Guatemala, where there are few jobs, and moves to Houston, Texas, where his cousin already works in construction.", [
  ["Identify one push factor in this scenario.", "Earns the point for identifying lack of jobs/economic opportunity in the village (accept poverty or low wages)."],
  ["Describe one pull factor in this scenario.", "Earns the point for describing jobs in construction/economic opportunity in Houston or having a family member (cousin) already there."],
  ["Explain how chain migration is illustrated by this scenario.", "Earns the point for explaining that he migrated to a place where a relative already lived, and that earlier migrants' connections (information, housing, jobs) make it easier for family and community members to follow."]
]],
"2.11": ["Millions of Syrians fled their country during the civil war that began in 2011. Some crossed into Turkey, while others were displaced within Syria.", [
  ["Identify the difference between a refugee and an internally displaced person (IDP).", "Earns the point for stating that a refugee crosses an international border to escape persecution/conflict, while an IDP is forced to move but stays within their own country. Both parts needed."],
  ["Describe why this migration is classified as forced rather than voluntary.", "Earns the point for describing that people moved because of war/violence/threat to their lives, not by choice for opportunity."],
  ["Explain one intervening obstacle Syrian migrants faced.", "Earns the point for explaining an obstacle that hindered migration, e.g., closed borders, border fences, the Mediterranean Sea, cost of travel, visa/asylum laws, or dangerous routes, and how it made migration harder."]
]],
"2.12": ["Mexican workers in the United States sent over $60 billion in remittances to Mexico in 2023.", [
  ["Define remittances.", "Earns the point for defining remittances as money migrants send back to family or communities in their home country."],
  ["Describe one positive effect of remittances on the migrants' home region.", "Earns the point for describing an effect such as reduced poverty, improved housing, funding education or small businesses, or a boost to the local economy."],
  ["Explain one negative effect of emigration on the sending country.", "Earns the point for explaining an effect such as brain drain (loss of skilled/educated workers), labor shortages, uneven sex ratios, families separated, or dependence on remittances. Must explain the impact."]
]],
"3.1": ["In Southern California, Spanish-language signs, Catholic missions, and Mexican restaurants are common alongside English-language shopping malls.", [
  ["Identify one cultural trait visible in this landscape.", "Earns the point for identifying a trait such as language (Spanish), religion (Catholicism/missions), food/cuisine, or architecture."],
  ["Describe the difference between folk culture and popular culture.", "Earns the point for describing folk culture as traditional, practiced by small, often rural, homogeneous groups and changing slowly, AND popular culture as widespread, found in large heterogeneous societies, spreading quickly through media/globalization. Both needed."],
  ["Explain how this landscape reflects cultural relativism or ethnocentrism.", "Earns the point for correctly explaining one: cultural relativism means judging a culture by its own standards (e.g., appreciating Mexican traditions on their own terms); ethnocentrism means judging other cultures by your own culture's standards (e.g., viewing Spanish signs as inferior). Must apply to the scenario."]
]],
"3.2": ["In Paris, the Gothic cathedral of Notre-Dame stands near modern glass office towers, while street names honor historic figures.", [
  ["Define sequent occupance.", "Earns the point for defining it as successive societies leaving their cultural imprints on a place over time, each adding to the cultural landscape."],
  ["Describe how Notre-Dame is an example of a sacred space.", "Earns the point for describing that it is a place of religious worship/significance (a Catholic cathedral) that holds spiritual meaning for believers."],
  ["Explain how the cultural landscape of Paris reflects both traditional and modern influences.", "Earns the point for explaining that historic buildings, cathedrals, and street names preserve traditions/history while glass towers reflect globalization, modern architecture, or economic change, showing layers of different periods."]
]],
"3.3": ["In the United States, gender roles in the workforce have changed since the 1950s, and neighborhoods such as Chinatown in San Francisco have distinct ethnic identities.", [
  ["Define ethnic neighborhood (ethnic enclave).", "Earns the point for defining it as an area within a city where people of the same ethnicity cluster, maintaining their culture, language, businesses, and traditions."],
  ["Describe one way an ethnic enclave shapes the cultural landscape.", "Earns the point for describing features such as signs in the group's language, religious buildings, restaurants and shops, festivals, or architectural styles."],
  ["Explain one reason immigrants often settle in ethnic enclaves.", "Earns the point for explaining a reason: shared language, social networks/family (chain migration), job opportunities in ethnic businesses, affordable housing, support services, or protection from discrimination."]
]],
"3.4": ["Hip-hop music began in New York City in the 1970s, spread to other large U.S. cities, and later spread to cities worldwide. Meanwhile, the English language spread through British colonies.", [
  ["Identify the type of diffusion shown by hip-hop spreading from large city to large city.", "Earns the point for identifying hierarchical diffusion (accept urban hierarchy)."],
  ["Describe relocation diffusion using the spread of English as an example.", "Earns the point for describing that English spread as British people physically moved to colonies (North America, Australia, etc.) and carried the language with them."],
  ["Explain how stimulus diffusion differs from other types of diffusion. Provide an example.", "Earns the point for explaining that the underlying idea spreads but the specific trait is changed/adapted to fit the new culture, with a valid example (e.g., McDonald's changing its menu in India; Hindu vegetarian burgers; Cherokee syllabary inspired by the English alphabet)."]
]],
"3.5": ["During the 1800s, Britain colonized large parts of Africa and Asia. Today, English is an official language in many former British colonies.", [
  ["Identify one historical process that caused English to diffuse globally.", "Earns the point for identifying colonialism/imperialism, trade, or migration of British settlers."],
  ["Describe one way colonial powers spread their culture to colonized peoples.", "Earns the point for describing a method: establishing schools in the colonizer's language, missionary activity spreading religion, imposing legal/political systems, or settlers bringing customs."],
  ["Explain one lasting effect of colonialism on the cultural landscape of a former colony.", "Earns the point for explaining an effect such as the colonizer's language being official, colonial architecture, churches, legal systems, place names, sports (cricket), or creolized languages."]
]],
"3.6": ["Streaming services, social media, and multinational corporations such as Netflix and McDonald's operate in almost every country.", [
  ["Identify one contemporary cause of cultural diffusion.", "Earns the point for identifying the internet/social media, TV/streaming, globalization, multinational corporations, trade, tourism, or migration."],
  ["Describe how time-space compression affects the diffusion of culture.", "Earns the point for describing that faster communication and transportation reduce the effective distance between places, so cultural traits spread much more quickly and widely."],
  ["Explain one way a local culture might resist the spread of popular culture.", "Earns the point for explaining a response such as laws protecting language/media (e.g., France's quotas on French music), banning foreign products, revival movements, promoting local traditions, or religious objections."]
]],
"3.7": ["Christianity and Islam are universalizing religions that spread across several continents. Hinduism remains concentrated mainly in India and Nepal.", [
  ["Identify one difference between a universalizing religion and an ethnic religion.", "Earns the point for identifying that universalizing religions seek converts and appeal to all people, while ethnic religions are tied to a particular group/place and generally don't seek converts."],
  ["Describe how Islam diffused from its hearth.", "Earns the point for describing diffusion from the Arabian Peninsula (Mecca/Medina) through expansion of Arab empires/conquest (relocation), along trade routes, or by missionaries/merchants (e.g., to North Africa, South Asia, Southeast Asia)."],
  ["Explain why ethnic religions such as Hinduism tend to remain spatially concentrated.", "Earns the point for explaining that they don't actively seek converts, are tied to a specific ethnic group, and are linked to local physical geography/sacred sites, so they spread mainly through relocation of their followers."]
]],
"3.8": ["Some Spanish words have entered American English, while in parts of the world, local languages are disappearing as English spreads.", [
  ["Define cultural convergence.", "Earns the point for defining it as cultures becoming more similar through contact/interaction (e.g., sharing traits because of globalization)."],
  ["Describe one example of syncretism.", "Earns the point for describing a blending of two cultural traits into a new form, e.g., Vodou/Santería combining African religions and Catholicism, Tex-Mex food, Spanglish, Day of the Dead blending Indigenous and Catholic traditions."],
  ["Explain one reason minority languages are declining.", "Earns the point for explaining a reason: globalization and the economic advantages of dominant languages (English, Spanish, Mandarin), government policies, media in dominant languages, migration to cities, younger generations not learning them."]
]],
"4.1": ["The Kurds are an ethnic group of about 30 million people spread across Turkey, Iraq, Iran, and Syria. They do not have their own country.", [
  ["Define nation-state.", "Earns the point for defining a nation-state as a state whose borders closely match the territory of one nation (a culturally unified people)."],
  ["Identify the Kurds as a stateless nation and describe what that means.", "Earns the point for describing that the Kurds are a nation (shared culture, language, identity) without a sovereign state of their own."],
  ["Explain one challenge a multinational state faces.", "Earns the point for explaining a challenge such as separatist/independence movements, ethnic conflict, disputes over language or rights, or unequal representation."]
]],
"4.2": ["After World War I, the victorious powers divided parts of the Middle East into new states. After World War II, many African states gained independence.", [
  ["Define colonialism.", "Earns the point for defining colonialism as a state establishing control over a territory and its people, often settling it and exploiting its resources."],
  ["Describe one way colonial boundaries continue to affect African states today.", "Earns the point for describing that colonial borders were drawn without regard to ethnic groups, so they divide ethnic groups or combine rival groups, which leads to conflict or weak national identity."],
  ["Explain the process of decolonization in the second half of the twentieth century.", "Earns the point for explaining that colonies gained independence from European powers (through independence movements, negotiation, or war) as empires weakened after WWII, creating many new sovereign states."]
]],
"4.3": ["China has built artificial islands and military bases in the South China Sea. Several neighboring states also claim parts of these waters.", [
  ["Define territoriality.", "Earns the point for defining territoriality as the attempt by a group or state to control, claim, or defend a specific area/territory."],
  ["Describe one reason states compete for control of the South China Sea.", "Earns the point for describing a reason: oil/natural gas reserves, fishing resources, strategic shipping lanes/trade routes, or military position."],
  ["Explain how the UN Convention on the Law of the Sea (UNCLOS) relates to these disputes.", "Earns the point for explaining that UNCLOS defines maritime zones (12-nautical-mile territorial sea, 200-nautical-mile exclusive economic zone) that give states rights to resources, so overlapping EEZ claims and the status of islands cause disputes."]
]],
"4.4": ["The U.S.–Canada border follows the 49th parallel for much of its length. The border between Mexico and the U.S. follows the Rio Grande for part of its length.", [
  ["Identify the type of boundary represented by the 49th parallel.", "Earns the point for identifying a geometric boundary."],
  ["Describe the difference between a geometric boundary and a physical (natural) boundary.", "Earns the point for describing a geometric boundary as a straight line (often latitude/longitude) AND a physical boundary as following natural features such as rivers or mountains. Both needed."],
  ["Explain one type of boundary dispute and give an example.", "Earns the point for explaining one type (definitional, locational, operational, or allocational) with a matching example, e.g., allocational: dispute over resources such as oil along the Iraq-Kuwait border; locational: India-Pakistan over Kashmir; operational: disagreement over migration control at the U.S.-Mexico border."]
]],
"4.5": ["The Berlin Wall divided East and West Berlin from 1961 to 1989. The border between France and Germany today has no passport checks.", [
  ["Identify one function of political boundaries.", "Earns the point for identifying a function such as defining territory/sovereignty, controlling movement of people or goods, separating groups, or defining where laws apply."],
  ["Describe the difference between an antecedent boundary and a superimposed boundary.", "Earns the point for describing an antecedent boundary as drawn before the area was heavily settled AND a superimposed boundary as imposed by outside powers, ignoring existing cultural patterns. Both needed."],
  ["Explain how the France-Germany border shows a change in the function of boundaries.", "Earns the point for explaining that the Schengen Agreement/EU allows free movement, so the border no longer restricts people and goods, showing boundaries can become more open through supranational cooperation."]
]],
"4.6": ["After the 2020 census, a state legislature redrew congressional district lines. Critics said the map packed one party's voters into a few districts.", [
  ["Define gerrymandering.", "Earns the point for defining gerrymandering as drawing electoral district boundaries to give an advantage to a particular party or group."],
  ["Describe the difference between packing and cracking.", "Earns the point for describing packing as concentrating opposition voters into as few districts as possible AND cracking as spreading opposition voters across many districts so they are a minority in each. Both needed."],
  ["Explain one effect of gerrymandering on political representation.", "Earns the point for explaining an effect: the number of seats a party wins doesn't match its share of the vote; less competitive elections; some groups' voting power is diluted; incumbents protected."]
]],
"4.7": ["The United States divides power between the federal government and 50 states. France concentrates most power in its national government in Paris.", [
  ["Identify the form of governance used by France.", "Earns the point for identifying a unitary state/government."],
  ["Describe one characteristic of a federal state.", "Earns the point for describing that power is divided between a central government and regional governments (states/provinces), which have their own powers and laws."],
  ["Explain why a large or culturally diverse country might choose a federal system.", "Earns the point for explaining that federalism lets regions with different cultures, languages, or needs govern themselves on local issues, reducing conflict and managing large territory. Must give the reason."]
]],
"4.8": ["In Spain, many Catalans have pushed for independence. In Belgium, Flemish and Walloon regions have gained more self-government.", [
  ["Define devolution.", "Earns the point for defining devolution as the transfer of power from a central government to regional governments."],
  ["Identify one factor that can lead to devolution.", "Earns the point for identifying an ethnic, linguistic, religious, economic, or physical/spatial factor (e.g., distinct language in Catalonia, economic inequality between regions, isolation)."],
  ["Explain how economic factors can encourage a region like Catalonia to seek independence.", "Earns the point for explaining that a wealthy region may feel it pays more in taxes than it gets back from the central government, so it wants control over its own economy/resources."]
]],
"4.9": ["The European Union allows free trade, a shared currency, and common laws among member countries. Meanwhile, terrorist groups operate across national borders.", [
  ["Define supranational organization.", "Earns the point for defining it as an organization of three or more states that cooperate on shared goals, often giving up some sovereignty (e.g., EU, UN, NATO)."],
  ["Describe one way membership in the EU challenges a country's sovereignty.", "Earns the point for describing that states must follow EU laws/rules, give up control of currency (euro) or borders (Schengen), or accept rulings of EU courts."],
  ["Explain one other force that challenges state sovereignty.", "Earns the point for explaining another force: terrorism, multinational corporations, the internet/social media, ethnic separatism, economic globalization, or climate change, and how it limits a state's control."]
]],
"4.10": ["In Rwanda after the 1994 genocide, the government promoted a single national identity. In Yugoslavia, ethnic divisions led to the country breaking apart in the 1990s.", [
  ["Define a centrifugal force.", "Earns the point for defining a centrifugal force as something that divides a state or pulls it apart (e.g., ethnic or religious conflict, economic inequality)."],
  ["Describe one centripetal force a government can promote.", "Earns the point for describing a unifying force: national identity/patriotism, shared language, national institutions, symbols, infrastructure, or an external threat."],
  ["Explain one consequence when centrifugal forces become stronger than centripetal forces.", "Earns the point for explaining a consequence such as devolution, civil war, breakup of the state (balkanization), ethnic cleansing, or failed state."]
]],
"5.1": ["In Bangladesh, farmers grow rice on small plots using large amounts of labor. In Montana, ranchers raise cattle on very large ranches with few workers.", [
  ["Identify which scenario represents intensive agriculture.", "Earns the point for identifying Bangladesh rice farming."],
  ["Describe one characteristic of extensive agriculture.", "Earns the point for describing low inputs of labor/capital per unit of land, large land areas, and lower output per acre (e.g., ranching, shifting cultivation, nomadic herding)."],
  ["Explain one physical factor that influences the type of agriculture practiced in a region.", "Earns the point for explaining how climate, rainfall, soil fertility, or terrain determines what crops/animals can be raised (e.g., dry grasslands suit ranching; wet tropics suit rice)."]
]],
"5.2": ["In the Midwestern U.S., land was divided into square sections by the township and range system. In Quebec, farms were divided into long, narrow lots reaching back from rivers.", [
  ["Identify the survey system used in Quebec.", "Earns the point for identifying the long-lot system."],
  ["Describe one difference between clustered and dispersed rural settlement patterns.", "Earns the point for describing clustered settlements as farmers living together in a village with fields around it AND dispersed settlements as farmers living on isolated farms spread across the land. Both needed."],
  ["Explain one advantage of the long-lot system for early settlers.", "Earns the point for explaining that it gave each farm access to the river for transport/water and a mix of land types (fertile riverbanks, woods farther back)."]
]],
"5.3": ["Wheat and barley were first domesticated in the Fertile Crescent, while maize was domesticated in Mesoamerica.", [
  ["Identify one agricultural hearth.", "Earns the point for identifying the Fertile Crescent, Mesoamerica, Southeast Asia, the Nile Valley, the Indus Valley, China's Yellow/Yangtze River valleys, the Andes, or West Africa."],
  ["Describe how the Columbian Exchange affected the diffusion of crops.", "Earns the point for describing that after 1492, crops and animals moved between the Americas and Europe/Africa/Asia (e.g., maize and potatoes to Europe/Africa; wheat, cattle, horses to the Americas)."],
  ["Explain one effect of the First Agricultural Revolution on human settlement.", "Earns the point for explaining that domestication allowed permanent settlements, food surpluses, population growth, and the rise of towns and specialized labor."]
]],
"5.4": ["In the 1700s–1800s, British farmers began using seed drills, crop rotation, and later tractors.", [
  ["Identify one innovation of the Second Agricultural Revolution.", "Earns the point for identifying seed drill, crop rotation (Norfolk four-field), enclosure, mechanization (tractors, reapers), selective breeding, or improved fertilizers."],
  ["Describe how the Second Agricultural Revolution was connected to the Industrial Revolution.", "Earns the point for describing that surplus food supported growing urban populations and that fewer farm workers were needed, freeing labor to work in factories (or that industry produced farm machinery)."],
  ["Explain one effect of the Second Agricultural Revolution on rural populations.", "Earns the point for explaining that mechanization reduced the need for farm labor, causing rural-to-urban migration (and enclosure pushed small farmers off land)."]
]],
"5.5": ["Beginning in the 1960s, India adopted high-yield rice and wheat varieties, chemical fertilizers, and irrigation, and its grain output rose sharply.", [
  ["Identify one technology associated with the Green Revolution.", "Earns the point for identifying high-yield seed varieties (HYVs), chemical fertilizers, pesticides, irrigation, or mechanization."],
  ["Describe one positive effect of the Green Revolution.", "Earns the point for describing increased food production, reduced famine/hunger, food self-sufficiency, or lower food prices."],
  ["Explain one negative consequence of the Green Revolution.", "Earns the point for explaining a consequence: water pollution/depleted aquifers from irrigation, soil degradation, loss of crop diversity, farmer debt from buying seeds and chemicals, benefits favoring wealthier farmers, or dependence on fossil fuels."]
]],
"5.6": ["In the Mediterranean climate of California, farmers grow grapes, olives, and citrus. In the Amazon, some farmers practice slash-and-burn.", [
  ["Identify the type of farming known as slash-and-burn.", "Earns the point for identifying shifting cultivation (subsistence, extensive)."],
  ["Describe why shifting cultivators move to new fields every few years.", "Earns the point for describing that the soil loses its fertility after a few years, so farmers clear new land and let old plots recover."],
  ["Explain how climate influences the crops grown in Mediterranean agricultural regions.", "Earns the point for explaining that hot, dry summers and mild, wet winters favor drought-tolerant crops like grapes, olives, and citrus."]
]],
"5.7": ["A single corporation owns the seed company, the farms, the processing plants, and the grocery distribution network for a line of frozen vegetables.", [
  ["Identify the term for this type of corporate ownership across stages of production.", "Earns the point for identifying vertical integration (accept agribusiness if vertical integration is described)."],
  ["Describe one characteristic of commercial agriculture.", "Earns the point for describing that crops/animals are produced for sale, often on large farms with machinery and few workers, and linked to global markets."],
  ["Explain how economies of scale benefit large agribusinesses.", "Earns the point for explaining that producing in larger quantities lowers the cost per unit (bulk inputs, efficient machinery), giving large firms an advantage over small farms."]
]],
"5.8": ["In von Thünen's model, rings of land use surround a central market city.", [
  ["Identify the land use found in the ring closest to the market in von Thünen's model.", "Earns the point for identifying market gardening/dairy (perishable goods such as vegetables, fruit, milk)."],
  ["Describe why ranching is located in the outermost ring.", "Earns the point for describing that land is cheap far from the market and cattle can walk to market/transport cost per unit value is low relative to land needs, so extensive ranching fits there."],
  ["Explain one limitation of von Thünen's model today.", "Earns the point for explaining a limitation: modern refrigeration/transportation reduce the importance of distance; it assumes a flat, uniform landscape; it assumes one market; government subsidies and global trade affect land use."]
]],
"5.9": ["Kenya exports cut flowers and green beans to Europe by air, while many Kenyan farmers grow maize for their own families.", [
  ["Define commodity chain.", "Earns the point for defining it as the series of links connecting production, processing, distribution, and consumption of a product."],
  ["Describe one reason Kenya exports crops to Europe.", "Earns the point for describing that export crops earn foreign currency/income, European demand is high, Kenya's climate allows year-round production, or trade agreements favor it."],
  ["Explain one challenge for countries that depend on exporting a few agricultural products.", "Earns the point for explaining a challenge: price changes in global markets, crop failures, dependency on wealthy importers, land used for exports instead of local food (food insecurity)."]
]],
"5.10": ["Large cattle ranches in the Amazon have replaced millions of acres of rainforest. Runoff from Midwestern farms contributes to a 'dead zone' in the Gulf of Mexico.", [
  ["Identify one environmental consequence of agriculture described in the scenario.", "Earns the point for identifying deforestation or water pollution/eutrophication/dead zone."],
  ["Describe how fertilizer runoff can create a dead zone.", "Earns the point for describing that nutrients (nitrogen/phosphorus) cause algal blooms; when algae die and decompose, oxygen is used up, killing aquatic life (eutrophication/hypoxia)."],
  ["Explain one agricultural practice that could reduce environmental damage.", "Earns the point for explaining a practice and how it helps: buffer strips, cover crops, contour plowing, terracing, no-till farming, crop rotation, reduced fertilizer use, agroforestry, organic methods."]
]],
"5.11": ["In a U.S. city, one neighborhood has no supermarket within a mile, while residents of another neighborhood shop at farmers' markets and buy organic food.", [
  ["Define food desert.", "Earns the point for defining a food desert as an area with limited access to affordable, nutritious food (e.g., no supermarket nearby)."],
  ["Describe one reason food deserts form.", "Earns the point for describing a reason: low-income areas are less profitable for grocery stores, lack of transportation, disinvestment/redlining, or stores leaving for suburbs."],
  ["Explain one debate surrounding genetically modified organisms (GMOs).", "Earns the point for explaining a debate with both sides or a clearly explained concern/benefit: GMOs increase yields and resist pests/drought, but critics worry about health effects, loss of biodiversity, corporate control of seeds, or cross-contamination."]
]],
"5.12": ["In many sub-Saharan African countries, women produce most of the food for family consumption but own a small share of farmland.", [
  ["Identify one role women play in agriculture in developing countries.", "Earns the point for identifying roles such as growing subsistence food crops, processing/preparing food, caring for livestock, selling at markets, or collecting water and firewood."],
  ["Describe one barrier women farmers face.", "Earns the point for describing a barrier: limited land ownership rights, less access to credit/loans, less access to training or technology, or cultural restrictions."],
  ["Explain how improving women's access to land or credit could affect agricultural production.", "Earns the point for explaining that women could invest in better seeds, tools, or land improvements, increasing yields and food security for families."]
]],
"6.1": ["The earliest cities appeared in Mesopotamia, the Nile Valley, the Indus Valley, and along the Huang He (Yellow River).", [
  ["Identify one site or situation factor that influenced the location of early cities.", "Earns the point for identifying access to water/rivers, fertile land, defensible site, flat land, trade routes, or a crossroads location."],
  ["Describe the difference between site and situation.", "Earns the point for describing site as the physical characteristics of a place AND situation as a place's location relative to other places. Both needed."],
  ["Explain how the agricultural surplus contributed to the rise of cities.", "Earns the point for explaining that surplus food meant not everyone had to farm, allowing specialized jobs (artisans, priests, rulers) and larger, denser populations."]
]],
"6.2": ["Tokyo has over 37 million people in its metropolitan area. Lagos, Nigeria, is growing rapidly, with many residents living in informal settlements.", [
  ["Define megacity.", "Earns the point for defining a megacity as an urban area with more than 10 million people."],
  ["Describe one reason cities in developing countries are growing faster than those in developed countries.", "Earns the point for describing rural-to-urban migration for jobs/services and/or high natural increase."],
  ["Explain one challenge created by rapid urban growth in cities like Lagos.", "Earns the point for explaining a challenge: informal settlements/slums, inadequate water/sanitation, traffic congestion, pollution, lack of jobs, or overwhelmed services."]
]],
"6.3": ["New York, London, and Tokyo host major stock exchanges, corporate headquarters, and international banks.", [
  ["Define world city (global city).", "Earns the point for defining a world city as a city that is a major center of the global economy, with connections through finance, corporations, and decision-making."],
  ["Describe one function that world cities perform in the global economy.", "Earns the point for describing a function: centers of finance/banking, corporate headquarters, stock exchanges, media, advanced producer services, or transportation hubs."],
  ["Explain how globalization increases the importance of world cities.", "Earns the point for explaining that as trade and communication become global, decision-making, capital, and services concentrate in a few highly connected cities that coordinate the world economy."]
]],
"6.4": ["In Country A, the largest city has 8 million people and the second largest has 4 million. In Country B, the largest city has 10 million and the second largest has 800,000.", [
  ["Identify which country's urban hierarchy follows the rank-size rule.", "Earns the point for identifying Country A (the second city is about half the size of the largest)."],
  ["Describe a primate city.", "Earns the point for describing a primate city as a city that is more than twice the size of the next largest and dominates the country's economy, politics, and culture (Country B)."],
  ["Explain one assumption of Christaller's central place theory.", "Earns the point for explaining an assumption/element: settlements provide goods and services to surrounding areas; range and threshold determine market areas; larger places offer higher-order goods; hexagonal market areas on a flat plain; consumers travel to the nearest place."]
]],
"6.5": ["In the Burgess concentric zone model, a city grows outward in rings from the central business district (CBD). The Latin American city model includes a spine extending from the CBD.", [
  ["Identify one characteristic of the CBD.", "Earns the point for identifying high land values, tall buildings, offices/businesses, high density, transportation hub, or little residential use."],
  ["Describe the location of wealthy residents in the Latin American city model.", "Earns the point for describing that the wealthy live near the CBD along the spine (commercial corridor), and in the elite residential sector, not on the periphery."],
  ["Explain one limitation of the concentric zone model when applied to cities outside North America.", "Earns the point for explaining that many cities (Latin American, African, European) have wealthy people in the center and poor people/squatter settlements on the edges, the opposite of Burgess; or that it assumes a single center and ignores cars, suburbs, physical features."]
]],
"6.6": ["A suburb near Atlanta is mostly single-family homes on large lots. A new development near a light rail station includes apartments, shops, and offices in the same buildings.", [
  ["Define urban sprawl.", "Earns the point for defining sprawl as low-density, automobile-dependent development spreading outward from a city."],
  ["Describe mixed-use development.", "Earns the point for describing development combining residential, commercial, and/or office uses in the same building or area."],
  ["Explain one benefit of higher-density development near public transit.", "Earns the point for explaining a benefit: less car dependency and traffic, lower emissions, walkability, more efficient infrastructure, more affordable housing, preservation of open space."]
]],
"6.7": ["A city expands its subway system, while another city's aging water pipes frequently break.", [
  ["Identify one type of urban infrastructure.", "Earns the point for identifying transportation (roads, rail, subways), water/sewer, electricity/power grid, telecommunications, schools, or hospitals."],
  ["Describe how transportation infrastructure affects where people live and work.", "Earns the point for describing that people and businesses locate near transit lines/highways; new infrastructure drives development along corridors or suburban growth."],
  ["Explain one consequence of inadequate infrastructure for a city.", "Earns the point for explaining a consequence: businesses avoid investing, public health problems (unsafe water), traffic congestion, inequality in access, economic decline."]
]],
"6.8": ["Portland, Oregon, has an urban growth boundary. Many cities are adding bike lanes, green roofs, and walkable neighborhoods.", [
  ["Define smart growth.", "Earns the point for defining smart growth as policies that encourage compact, walkable, mixed-use development and limit sprawl."],
  ["Describe how an urban growth boundary works.", "Earns the point for describing that it limits development beyond a set line, protecting farmland/open space and directing growth inward."],
  ["Explain one challenge of implementing sustainable urban policies.", "Earns the point for explaining a challenge: higher housing costs inside the boundary, cost of new transit, resistance from residents/developers, car dependency, gentrification."]
]],
"6.9": ["A researcher compares census data on income, race, and housing values with interviews of long-time residents in a changing neighborhood.", [
  ["Identify one source of quantitative urban data.", "Earns the point for identifying census data, surveys with numerical results, housing prices, income data, GIS layers, satellite data, or crime statistics."],
  ["Describe one advantage of qualitative data in studying a neighborhood.", "Earns the point for describing that interviews/observations reveal residents' perceptions, experiences, and meaning that numbers miss."],
  ["Explain how combining both types of data gives a fuller picture of neighborhood change.", "Earns the point for explaining that quantitative data shows what is changing (income, rents, demographics), while qualitative data explains why and how people experience the change."]
]],
"6.10": ["In a historic neighborhood, older buildings are being renovated, rents are rising quickly, and long-time residents are moving out. In the 1930s, the same neighborhood was 'redlined.'", [
  ["Define gentrification.", "Earns the point for defining gentrification as higher-income people moving into and renovating a lower-income neighborhood, raising property values and costs."],
  ["Describe redlining.", "Earns the point for describing redlining as banks/government refusing loans or insurance in neighborhoods (often minority neighborhoods) marked as high risk."],
  ["Explain one effect of gentrification on long-time residents.", "Earns the point for explaining that rising rents/property taxes displace lower-income residents, or that the neighborhood's culture/businesses change, or (positive) improved services—must be connected to residents."]
]],
"6.11": ["Many cities face problems with urban heat islands, air pollution, and brownfields left by old factories.", [
  ["Define brownfield.", "Earns the point for defining a brownfield as abandoned or underused industrial/commercial land that may be contaminated."],
  ["Describe the urban heat island effect.", "Earns the point for describing that cities are warmer than surrounding areas because pavement and buildings absorb and hold heat and there is less vegetation."],
  ["Explain one strategy a city could use to address an environmental challenge.", "Earns the point for explaining a strategy and how it helps: green roofs/tree planting reduce heat; brownfield cleanup and redevelopment; public transit reduces pollution; green space and permeable surfaces reduce runoff."]
]],
"7.1": ["The Industrial Revolution began in Great Britain in the late 1700s and spread to Western Europe, the United States, and Japan.", [
  ["Identify one factor that helped the Industrial Revolution begin in Great Britain.", "Earns the point for identifying coal/iron resources, capital from trade/colonies, inventions (steam engine), colonial markets and raw materials, a labor supply from agricultural changes, or political stability."],
  ["Describe how the Industrial Revolution changed where people lived.", "Earns the point for describing rural-to-urban migration as people moved to cities for factory jobs, causing rapid urbanization."],
  ["Explain how industrialization in Europe affected colonies in Africa and Asia.", "Earns the point for explaining that colonies supplied raw materials and served as markets for manufactured goods, creating economic dependence."]
]],
"7.2": ["In Country P, 60% of workers are in agriculture. In Country Q, 75% of workers are in services such as finance and education.", [
  ["Identify which economic sector includes agriculture.", "Earns the point for identifying the primary sector."],
  ["Describe the relationship between economic sectors and development.", "Earns the point for describing that less developed countries have more workers in the primary sector, while more developed countries have more workers in tertiary (and quaternary/quinary) sectors."],
  ["Explain one factor that influences where manufacturing (secondary sector) is located.", "Earns the point for explaining a factor using Weber or other location reasoning: cost of transportation (bulk-reducing vs. bulk-gaining), labor costs, proximity to raw materials or markets, agglomeration, or break-of-bulk points."]
]],
"7.3": ["Country M has a GNI per capita of $50,000 and a Human Development Index (HDI) of 0.94. Country N has a GNI per capita of $2,000 and an HDI of 0.55.", [
  ["Identify the three components of the Human Development Index.", "Earns the point for identifying health/life expectancy, education (years of schooling), and income/standard of living (GNI per capita). All three needed."],
  ["Describe one advantage of HDI over GNI per capita as a measure of development.", "Earns the point for describing that HDI includes social factors (health, education) and not just income, giving a broader picture of quality of life."],
  ["Explain one limitation of using GNI per capita to measure development.", "Earns the point for explaining that it's an average that hides inequality; ignores the informal economy and unpaid work; doesn't measure well-being; or doesn't account for cost of living."]
]],
"7.4": ["Microloans from organizations such as the Grameen Bank have helped women in Bangladesh start small businesses.", [
  ["Define microloan (microcredit).", "Earns the point for defining a microloan as a small loan to people, often women, who lack access to traditional banks, to start or grow small businesses."],
  ["Describe one measure of gender inequality.", "Earns the point for describing the Gender Inequality Index (GII) with a component (reproductive health, empowerment, labor force participation) or another measure such as wage gap or female literacy rate."],
  ["Explain how women's economic empowerment can influence a country's development.", "Earns the point for explaining that higher female incomes increase family spending on health and education, lower fertility, and grow the economy/labor force."]
]],
"7.5": ["Rostow's Stages of Economic Growth describes countries moving from a 'traditional society' to 'high mass consumption.' Wallerstein's World-Systems Theory divides the world into core, semi-periphery, and periphery.", [
  ["Identify one stage of Rostow's model.", "Earns the point for identifying one of: traditional society, preconditions for take-off, take-off, drive to maturity, high mass consumption."],
  ["Describe the relationship between core and periphery countries in World-Systems Theory.", "Earns the point for describing that core countries control capital, technology, and high-value production, while periphery countries provide raw materials and cheap labor, so core countries benefit from the relationship."],
  ["Explain one criticism of Rostow's model.", "Earns the point for explaining a criticism: it's based on Western experience; it assumes all countries follow the same path; it ignores colonialism and global inequality (dependency theory); it overlooks environmental limits."]
]],
"7.6": ["Mexico, the U.S., and Canada trade under the USMCA. Many companies have built factories (maquiladoras) just south of the U.S.–Mexico border.", [
  ["Define maquiladora.", "Earns the point for defining a maquiladora as a factory in Mexico (often near the U.S. border) that assembles imported parts into products for export, often duty-free."],
  ["Describe one reason companies locate maquiladoras near the U.S. border.", "Earns the point for describing lower labor costs, proximity to the U.S. market, reduced transportation costs, and trade agreements reducing tariffs."],
  ["Explain the concept of comparative advantage.", "Earns the point for explaining that a country should specialize in producing goods it can make at a lower opportunity cost than others, and trade for other goods."]
]],
"7.7": ["A U.S. company closed its factory in Ohio and moved production to Vietnam. Meanwhile, the company's call center was moved to the Philippines.", [
  ["Define outsourcing (or offshoring).", "Earns the point for defining outsourcing/offshoring as moving jobs or production to another company or country, often to lower costs."],
  ["Describe one effect of deindustrialization on communities like the one in Ohio.", "Earns the point for describing unemployment, population loss, declining tax base, abandoned factories, or economic decline."],
  ["Explain one reason the Philippines attracts call-center jobs.", "Earns the point for explaining a reason: English-speaking workforce, lower wages, time-zone advantages, educated workers, or telecommunications infrastructure."]
]],
"7.8": ["Costa Rica has promoted ecotourism and generates most of its electricity from renewable sources.", [
  ["Define sustainable development.", "Earns the point for defining it as development that meets present needs without compromising the ability of future generations to meet theirs (economic, social, environmental)."],
  ["Describe how ecotourism can support sustainable development.", "Earns the point for describing that ecotourism brings income while giving a financial incentive to protect ecosystems and employing local people."],
  ["Explain one challenge countries face in pursuing sustainable development.", "Earns the point for explaining a challenge: high cost of renewable energy, pressure for quick economic growth, dependence on resource exports, lack of technology, or conflicts between development and conservation."]
]]
};
