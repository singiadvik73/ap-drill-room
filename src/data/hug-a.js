// AP Human Geography — Units 1–4
window.AP_DATA = window.AP_DATA || {};
AP_DATA.hug = {
  id: "hug",
  name: "AP Human Geography",
  short: "HuG",
  blurb: "Where people live, what they believe, how they govern, farm, build cities, and develop — and why it varies across space.",
  exam: "Exam: 60 MCQ (60 min) + 3 FRQ (75 min)",
  units: []
};
AP_DATA.hug.units.push(
{ n: 1, name: "Thinking Geographically", weight: "8–10%", topics: [
  ["1.1", "Introduction to Maps", [
    ["A ship's navigator wants a map where a straight line keeps a constant compass bearing. Which projection is best?", "Mercator", ["Robinson (Peters)", "Robinson", "Goode homolosine"], "Mercator is conformal and preserves direction."],
    ["A map showing population density by county using shades of color is a", "choropleth map", ["dot density map", "isoline map", "cartogram"], "Choropleth maps shade areas by value."],
    ["Which map would best show that some countries have huge populations compared with their land area?", "A cartogram sized by population", ["A Mercator reference map", "An isoline map of population density", "A topographic map of the continents"], "Cartograms distort size to show data."],
    ["On a Mercator map, Greenland looks as large as Africa. This is because Mercator distorts", "area near the poles", ["direction", "shape near the equator", "distance near the equator"], "Africa is about 14 times larger than Greenland."],
    ["A map scale of 1:24,000 compared with 1:1,000,000 shows", "a smaller area in more detail", ["a larger area in more detail", "a smaller area in less detail", "the same area"], "Larger-scale maps show small areas with more detail."],
    ["The Robinson projection is often used for world maps because it", "compromises among all distortions", ["preserves area exactly", "preserves direction exactly", "shows no distortion"], "It balances distortion of area, shape, distance, and direction."]
  ]],
  ["1.2", "Geographic Data", [
    ["Emergency planners overlay flood-zone, road, and population layers to plan evacuation. They are using", "GIS", ["GPS alone", "a mental map", "a reference map"], "GIS combines layers of spatial data."],
    ["A farmer uses satellite images to see which parts of a field are stressed. This is", "remote sensing", ["GIS", "field surveys on foot", "a census"], "Remote sensing collects data from a distance."],
    ["A researcher interviews residents about how safe they feel in parks. This is", "qualitative data", ["quantitative data", "remote sensing", "GPS coordinate data"], "Perceptions and experiences are qualitative."],
    ["Which is an example of quantitative geographic data?", "Average commute times by census tract", ["Residents' descriptions of a neighborhood", "Photographs of street art", "Interviews with shop owners"], "Numerical data can be measured."],
    ["GPS is most useful for", "finding precise absolute locations", ["analyzing layered data", "measuring residents' perceptions of places", "showing population change over decades"], "It gives exact coordinates."]
  ]],
  ["1.3", "The Power of Geographic Data", [
    ["After a census, a state loses a congressional seat. The most direct cause is", "slower population growth than other states", ["a decline in the state's voter turnout rate", "new immigration laws", "a change in state borders"], "Seats are apportioned by population."],
    ["Health officials map cases of a disease to find its source. This is an example of", "using spatial data to solve problems", ["remote sensing", "creating a mental map of the neighborhood", "measuring absolute location precisely"], "John Snow's cholera map is a classic example."],
    ["Businesses use geographic data mainly to", "choose locations near customers", ["draw political boundaries", "measure elevation", "record rainfall"], "Market data guide site selection."],
    ["An undercount of immigrants in a census could lead to", "less funding for services in their neighborhoods", ["more representation for their districts in Congress", "higher property values", "faster population growth"], "Funding follows census counts."]
  ]],
  ["1.4", "Spatial Concepts", [
    ["The spread of a new store's customers declines farther from the store. This is", "distance decay", ["time-space compression", "a formal region", "sequent occupance"], "Interaction decreases with distance."],
    ["Video calls let people interact across the world instantly. This illustrates", "time-space compression", ["distance decay effects", "absolute location", "friction of distance effects"], "Technology reduces the effect of distance."],
    ["'The store is two blocks north of the school' describes", "relative location", ["absolute location", "site", "scale"], "It uses other places as references."],
    ["A city's situation refers to its", "location relative to other places", ["physical features", "its latitude and longitude coordinates", "population size"], "Situation is about connections."],
    ["Houses spread evenly across a suburb show a", "dispersed pattern", ["clustered pattern", "linear settlement pattern", "concentrated pattern"], "Pattern describes arrangement."],
    ["Coffee shops clustered downtown have high", "concentration", ["distance decay", "absolute location", "dispersion"], "Concentration measures spread relative to each other."]
  ]],
  ["1.5", "Human-Environmental Interaction", [
    ["The idea that the environment sets limits but people choose how to adapt is", "possibilism", ["environmental determinism", "sequent occupance", "diffusion"], "Humans have choices within environmental limits."],
    ["Terraced rice fields on steep hillsides in the Philippines are an example of", "humans modifying the environment", ["environmental determinism", "desertification", "urban sprawl"], "People reshape land to farm."],
    ["Environmental determinism has been criticized because it", "was used to justify racist and colonial views", ["overstated the role of human choice and technology", "focuses only on cities", "denies climate exists"], "It claimed climate determined culture and ability."],
    ["Overgrazing in the Sahel contributes to", "desertification", ["deforestation", "soil eutrophication", "rapid urbanization"], "Loss of vegetation exposes soil."],
    ["Building dams for hydroelectric power is an example of", "human–environment interaction", ["environmental determinism", "relocation diffusion", "a perceptual region"], "People alter rivers to meet needs."]
  ]],
  ["1.6", "Scales of Analysis", [
    ["National data show falling poverty, but some cities show rising poverty. This shows the importance of", "scale of analysis", ["map projection", "absolute location", "distance decay"], "Patterns can differ at different scales."],
    ["Which scale would best show differences in income within one city?", "Census tracts", ["Countries", "States", "Continents or world regions"], "Smaller units show local variation."],
    ["A global map of COVID-19 cases by country could hide", "hotspots within countries", ["differences between continents", "the total number of cases", "country names and borders"], "Aggregating hides local variation."],
    ["Analyzing migration between states uses which scale?", "Regional (national)", ["Local", "Global", "Local (city) level"], "It looks within one country."]
  ]],
  ["1.7", "Regional Analysis", [
    ["The area served by a city's airport is an example of a", "functional region", ["formal region", "perceptual region", "vernacular region"], "Organized around a node."],
    ["A region where most people speak Spanish is a", "formal region", ["functional region", "perceptual region", "nodal region"], "Defined by a shared trait."],
    ["'The South' in the U.S. is often described as a", "perceptual region", ["formal region", "functional region", "political unit"], "Its boundaries vary with people's views."],
    ["Perceptual region boundaries are hard to define because they", "are based on people's feelings", ["are set by law", "follow rivers", "are measured precisely by census data"], "Different people draw different borders."],
    ["A newspaper's delivery area is a functional region because it", "is organized around a central point", ["shares one language", "shares a single dominant culture", "follows state lines"], "Activity radiates from a node."]
  ]]
]},
{ n: 2, name: "Population and Migration Patterns and Processes", weight: "12–17%", topics: [
  ["2.1", "Population Distribution", [
    ["Most of Egypt's population lives along the Nile because", "it provides water and fertile land", ["the desert has more jobs", "the government requires people to live there", "it's cooler there than in the desert"], "Physical factors shape distribution."],
    ["Egypt's physiological density is much higher than its arithmetic density because", "little of its land is arable", ["it has a very small total population", "it has many cities", "it has high birth rates"], "Many people depend on little farmland."],
    ["Arithmetic density is calculated by dividing", "population by total land area", ["population by arable land", "farmers by arable land", "land by population"], "People per unit of land."],
    ["Agricultural density measures", "farmers per unit of arable land", ["total population per area", "people per unit of arable (farm) land", "crops produced per acre of land"], "It indicates farming efficiency."],
    ["Most of the world's people live", "in the Northern Hemisphere", ["in the Southern Hemisphere", "in polar regions", "in deserts"], "Large clusters are in Asia and Europe."]
  ]],
  ["2.2", "Consequences of Population Distribution", [
    ["Rapid population growth in a city can lead to", "strain on housing and services", ["lower demand for schools", "more farmland", "less traffic"], "Services may not keep up."],
    ["Areas losing population often experience", "a shrinking tax base", ["rising housing demand", "new schools", "more jobs"], "Fewer residents pay taxes."],
    ["Population shifts toward cities can affect politics by", "changing the number of representatives", ["ending elections in rural districts", "increasing rural voting power in Congress", "removing districts"], "Representation follows population."],
    ["High population density can increase", "the spread of infectious disease", ["the amount of farmland per person", "open space", "rural isolation"], "Close contact spreads disease."]
  ]],
  ["2.3", "Population Composition", [
    ["A population pyramid with a wide base indicates", "high birth rates", ["an aging population", "low birth rates", "high immigration of elderly"], "Many young children."],
    ["A pyramid with a narrow base and wide top suggests", "an aging population", ["rapid population growth", "high birth rates", "a young and growing population"], "Few births and many older people."],
    ["A bulge of young men in a pyramid for Qatar is most likely due to", "male labor migration", ["high birth rates", "war deaths", "low life expectancy"], "Many foreign male workers."],
    ["The dependency ratio compares", "dependents to working-age people", ["men to women", "births to deaths", "urban residents to rural residents"], "Dependents are under 15 and over 64."],
    ["The sex ratio in China is skewed toward males mainly because of", "son preference under the one-child policy", ["higher emigration of women to find work abroad", "female emigration", "war deaths among young women in rural areas"], "Sex-selective practices."]
  ]],
  ["2.4", "Population Dynamics", [
    ["A country's CBR is 25 and CDR is 10. Its rate of natural increase is", "1.5%", ["15%", "3.5%", "0.15%"], "(25 − 10)/10 = 1.5%."],
    ["A country growing at 2% per year will double its population in about", "35 years", ["20 years", "50 years", "70 years"], "Rule of 70: 70 ÷ 2 = 35."],
    ["Total fertility rate (TFR) is the", "average number of children per woman", ["number of births per 1,000 people each year", "number of deaths per 1,000", "annual rate of natural increase in a country"], "Replacement is about 2.1."],
    ["Infant mortality rate is a good indicator of", "access to health care", ["population density in rural areas", "land area", "migration"], "It reflects living conditions."],
    ["Replacement-level fertility is about", "2.1 children per woman", ["1.0 children per woman", "4.0 children per woman", "0.5 children per woman"], "Enough to replace parents."]
  ]],
  ["2.5", "The Demographic Transition Model", [
    ["In Stage 2 of the demographic transition model, death rates fall mainly because of", "better medicine and sanitation", ["falling birth rates in cities", "war", "emigration"], "Birth rates stay high."],
    ["A country with low birth rates, low death rates, and slow growth is in", "Stage 4", ["Stage 1", "Stage 2", "Stage 3"], "Both rates are low."],
    ["Birth rates fall in Stage 3 mainly because", "urbanization makes children costly", ["death rates rise", "wars and epidemics raise death rates", "death rates rise again as cities grow"], "Children become an economic cost."],
    ["A criticism of the DTM is that it", "is based on European history", ["includes too many stages", "ignores death rates", "focuses on Africa"], "Other countries may not follow the same path."],
    ["Japan's shrinking population places it in", "Stage 5", ["Stage 2", "Stage 3", "Stage 1"], "Deaths exceed births."]
  ]],
  ["2.6", "Malthusian Theory", [
    ["Malthus predicted that population would", "outgrow the food supply", ["decline steadily", "stabilize at replacement", "grow slower than food"], "He expected famine and war."],
    ["Malthus's prediction has not come true globally mainly because of", "agricultural innovations", ["higher death rates from war", "more frequent wars", "less trade"], "The Green Revolution increased food."],
    ["Neo-Malthusians argue that population growth threatens", "resources such as water and energy", ["only food supplies, not other resources", "nothing", "only cities"], "They expand concern beyond food."],
    ["Critics of Malthus argue that", "technology can increase resources", ["population growth always slows on its own", "food always runs out", "wars are necessary to limit population"], "Boserup argued population growth drives innovation."]
  ]],
  ["2.7", "Population Policies", [
    ["China's one-child policy is an example of an", "antinatalist policy", ["pronatalist family policy", "immigration policy", "eugenic policy"], "It aimed to reduce births."],
    ["France paying families to have more children is a", "pronatalist policy", ["antinatalist policy", "migration policy", "urban zoning policy"], "It encourages births."],
    ["An unintended effect of China's one-child policy was", "a large gender imbalance", ["rapid population growth", "more female births", "higher fertility"], "Son preference skewed sex ratios."],
    ["Singapore's shift from antinatalist to pronatalist policies was a response to", "birth rates falling too low", ["birth rates rising too fast", "war", "emigration"], "Low fertility threatened the workforce."]
  ]],
  ["2.8", "Women and Demographic Change", [
    ["As women's education increases, the total fertility rate usually", "decreases", ["increases", "stays the same", "doubles"], "Women marry later and have fewer children."],
    ["Women entering the paid workforce often leads to", "later marriage and fewer children", ["earlier marriage", "earlier marriage and more children", "higher death rates among young women"], "Career opportunities change priorities."],
    ["Access to family planning most directly lowers", "birth rates", ["death rates", "migration", "urbanization"], "Contraception allows smaller families."],
    ["Which is likely in a country where women have low status?", "High fertility rates", ["Low fertility and aging", "An aging population", "Negative growth rates"], "Limited education and rights often mean more children."]
  ]],
  ["2.9", "Aging Populations", [
    ["A high elderly dependency ratio creates pressure on", "pension and health systems", ["schools", "schools and maternity wards", "youth sports"], "More retirees need support."],
    ["Japan's response to an aging population includes", "using robotics in care", ["increasing birth rates quickly", "banning retirement", "closing rural hospitals"], "Automation helps with labor shortages."],
    ["An aging population often leads to", "labor shortages", ["more young workers", "higher birth rates", "school expansion"], "Fewer people are working age."],
    ["One way to offset an aging workforce is", "encouraging immigration", ["lowering the retirement age", "cutting pensions only", "closing borders"], "Immigrants fill labor needs."]
  ]],
  ["2.10", "Causes of Migration", [
    ["Leaving a region because of war is a", "push factor", ["pull factor", "intervening opportunity", "remittance flow"], "Negative conditions push people out."],
    ["Job opportunities in a destination are a", "pull factor", ["push factor", "intervening obstacle", "step migration"], "They attract migrants."],
    ["A migrant moves from a village to a town, then to a city. This is", "step migration", ["chain migration", "forced migration", "circular migration"], "Moving in stages."],
    ["A migrant stops in a city along the way because of a job offer. This is an", "intervening opportunity", ["intervening obstacle", "push factor", "remittance"], "An opportunity halts the journey."],
    ["Ravenstein's laws of migration state that most migrants move", "short distances", ["long distances", "internationally", "only to rural areas"], "Distance decay affects migration."]
  ]],
  ["2.11", "Forced and Voluntary Migration", [
    ["Syrians fleeing civil war to Turkey are", "refugees", ["internally displaced persons", "economic migrants", "guest workers"], "They crossed an international border to flee danger."],
    ["People forced from their homes but staying in their own country are", "internally displaced persons", ["refugees", "asylum seekers living abroad", "guest workers"], "They don't cross borders."],
    ["The Atlantic slave trade is an example of", "forced migration", ["voluntary migration", "step migration chain", "chain migration"], "People were moved against their will."],
    ["Guest workers in Germany from Turkey were an example of", "voluntary labor migration", ["forced migration", "refugee migration", "forced internal migration"], "They moved for work."],
    ["An asylum seeker is someone who", "requests protection in another country", ["moves for a better job", "moves abroad mainly for higher wages", "returns home"], "They seek refugee status."],
    ["Transhumance is the seasonal movement of", "herders and livestock", ["factory workers between cities", "refugees", "students"], "Moving animals between pastures."]
  ]],
  ["2.12", "Effects of Migration", [
    ["Money sent home by migrants is called", "remittances", ["tariffs", "subsidies", "foreign aid"], "Remittances support families."],
    ["Brain drain occurs when", "skilled workers emigrate", ["unskilled workers immigrate", "sending cities grow quickly", "birth rates fall"], "Countries lose educated people."],
    ["Migration can change a destination's culture by", "adding new languages and foods", ["removing all of its cultural traits", "ending trade", "reducing diversity"], "Cultural diffusion occurs."],
    ["A sending country may experience an uneven sex ratio because", "more men emigrate for work", ["more women emigrate for work", "women emigrate more", "birth rates rise among women"], "Labor migration is often male."],
    ["Receiving countries often benefit from migration through", "filling labor shortages", ["higher unemployment", "brain drain", "fewer taxes"], "Migrants add workers."]
  ]]
]},
{ n: 3, name: "Cultural Patterns and Processes", weight: "12–17%", topics: [
  ["3.1", "Introduction to Culture", [
    ["Traditional clothing worn by the Amish is an example of", "folk culture", ["popular culture", "globalization", "a formal region"], "Small, traditional groups."],
    ["A global fashion trend spread through social media is an example of", "popular culture", ["folk culture", "relocation diffusion", "sequent occupance"], "Popular culture spreads quickly."],
    ["Judging another culture by your own culture's standards is", "ethnocentrism", ["cultural relativism", "acculturation", "assimilation"], "It assumes your culture is superior."],
    ["Understanding another culture by its own values is", "cultural relativism", ["ethnocentric judgment", "assimilation", "cultural syncretism"], "Avoids judging by outside standards."]
  ]],
  ["3.2", "Cultural Landscapes", [
    ["Buildings from different eras layered in a city show", "sequent occupance", ["relocation diffusion", "ethnocentrism", "folk culture and customs"], "Successive groups leave imprints."],
    ["A mosque, a church, and a synagogue near each other illustrate a", "diverse cultural landscape", ["formal region", "folk culture", "centripetal nationalism at work"], "Landscapes reflect cultures present."],
    ["Placelessness refers to", "places looking alike because of globalization", ["places that have lost their historic population", "rural isolation", "places without names"], "Chain stores make places similar."],
    ["Street signs in Chinese characters in a U.S. city show", "an ethnic enclave's cultural landscape", ["the spread of global popular culture", "the influence of environmental determinism", "a perceptual region"], "Language marks the landscape."],
    ["Sacred spaces like Mecca are important because they", "hold religious significance", ["are centers of trade", "are capital cities", "have large populations"], "Pilgrimage sites."]
  ]],
  ["3.3", "Cultural Patterns", [
    ["Chinatown in San Francisco is an example of", "an ethnic neighborhood", ["a perceptual region", "folk culture", "a formal region of one religion"], "Immigrants clustered together."],
    ["Immigrants often settle in ethnic enclaves because of", "social networks and shared language", ["government housing requirements", "cheap farmland", "better climate"], "Chain migration and support."],
    ["Gender roles in agriculture differ across regions because of", "cultural norms", ["climate and soil", "soil types", "latitude and climate"], "Culture shapes who does what work."],
    ["As women gain education, gender roles in the workforce tend to", "become more equal", ["become more unequal", "stay fixed", "disappear"], "More women enter formal work."]
  ]],
  ["3.4", "Types of Diffusion", [
    ["Hip-hop spreading from New York to other large cities first is", "hierarchical diffusion", ["contagious diffusion by contact", "relocation diffusion", "stimulus diffusion of ideas"], "It moves through the urban hierarchy."],
    ["A viral video spreading from person to person is", "contagious diffusion", ["hierarchical diffusion", "relocation diffusion", "stimulus diffusion only"], "Spreads to nearby people."],
    ["McDonald's offering vegetarian burgers in India is", "stimulus diffusion", ["relocation diffusion", "hierarchical diffusion", "contagious diffusion"], "The idea is adapted."],
    ["Irish immigrants bringing St. Patrick's Day to Boston is", "relocation diffusion", ["contagious diffusion", "hierarchical diffusion", "stimulus diffusion"], "People carry culture when they move."],
    ["A new style adopted first by celebrities and then the public shows", "hierarchical diffusion", ["contagious diffusion", "relocation diffusion", "stimulus diffusion"], "It spreads from high-status people."],
    ["The spread of Islam across North Africa through trade and conquest shows", "both relocation and expansion diffusion", ["only stimulus diffusion", "only contagious diffusion by traders", "no diffusion"], "People moved and ideas spread."]
  ]],
  ["3.5", "Historical Causes of Diffusion", [
    ["English spread worldwide largely through", "British colonialism", ["the Silk Roads", "the Columbian Exchange", "the Cold War"], "Colonies adopted English."],
    ["Spanish is widely spoken in Latin America because of", "Spanish colonization", ["recent migration from Spain", "trade with China", "the internet and television"], "Colonizers brought their language."],
    ["Christianity spread to the Americas largely through", "colonial missions", ["the Silk Roads", "Mongol conquest", "the Industrial Revolution"], "Missionaries converted Indigenous peoples."],
    ["Historical trade routes helped spread", "religions and languages", ["only goods", "only crops and diseases", "nothing"], "Merchants carried culture."]
  ]],
  ["3.6", "Contemporary Causes of Diffusion", [
    ["Time-space compression most speeds up", "the spread of popular culture", ["the spread of folk culture", "sequent occupance", "distance decay"], "Media spreads trends quickly."],
    ["Social media platforms contribute to", "rapid cultural diffusion", ["cultural isolation", "slower communication between groups", "folk culture only, not pop culture"], "Content spreads globally."],
    ["Multinational corporations spread culture by", "selling global brands", ["banning local products", "reducing trade", "closing borders"], "Brands carry cultural traits."],
    ["Tourism contributes to cultural diffusion by", "bringing people into contact with other cultures", ["isolating cultures from one another over time", "ending trade", "reducing migration"], "Visitors exchange culture."],
    ["France's quotas on French music are an example of", "resisting cultural globalization", ["promoting American popular culture", "relocation diffusion", "assimilation into American culture"], "Protecting local culture."]
  ]],
  ["3.7", "Diffusion of Religion and Language", [
    ["Christianity and Islam are", "universalizing religions", ["ethnic religions", "folk religions only", "animistic religions"], "They seek converts."],
    ["Hinduism is mostly concentrated in India because it is", "an ethnic religion", ["a universalizing religion", "a new religion", "banned elsewhere"], "Ethnic religions rarely seek converts."],
    ["Buddhism spread from India to East Asia mainly through", "missionaries and trade routes", ["colonialism", "the internet and radio", "forced migration and conquest"], "Monks and merchants carried it."],
    ["The Indo-European language family spread partly through", "migration and conquest", ["the internet", "trade with China", "the Columbian Exchange only"], "Theories include the Kurgan and Anatolian hypotheses."],
    ["A lingua franca is", "a common language used between different groups", ["a dead language", "a dialect", "a language used only for formal religious ceremonies"], "Example: English in business."],
    ["Judaism is considered an ethnic religion because it", "is tied to a specific people", ["seeks converts worldwide", "has no holy texts", "is polytheistic"], "Membership is largely by descent."]
  ]],
  ["3.8", "Effects of Diffusion", [
    ["Cultures becoming more alike through contact is", "cultural convergence", ["cultural divergence over time", "ethnocentrism in each group", "cultural relativism"], "Globalization increases similarity."],
    ["Blending Christian and Indigenous beliefs in Vodou is an example of", "syncretism", ["assimilation", "ethnocentrism", "divergence"], "Combining traits into something new."],
    ["An immigrant family fully adopting the host culture and losing its own is", "assimilation", ["acculturation", "syncretism", "multiculturalism"], "The original culture is lost."],
    ["Adopting some traits of a new culture while keeping one's own is", "acculturation", ["assimilation", "divergence", "ethnocentrism"], "Partial adoption."],
    ["The Amish maintaining traditions separate from mainstream U.S. culture is an example of", "cultural divergence", ["cultural convergence", "assimilation", "syncretism"], "Cultures growing apart."]
  ]]
]},
{ n: 4, name: "Political Patterns and Processes", weight: "12–17%", topics: [
  ["4.1", "Introduction to Political Geography", [
    ["Japan, where most people share one ethnicity and language, is close to a", "nation-state", ["multinational state", "stateless nation", "multistate nation"], "State borders match a nation."],
    ["The Kurds, spread across four countries without their own state, are a", "stateless nation", ["nation-state", "multinational state", "microstate"], "A nation without a state."],
    ["Russia, with dozens of ethnic groups, is a", "multinational state", ["nation-state", "stateless nation", "microstate"], "Many nations in one state."],
    ["Koreans living in both North and South Korea form a", "multistate nation", ["stateless nation", "multinational state", "nation-state only"], "One nation in more than one state."],
    ["Sovereignty means a state", "controls its own internal affairs", ["belongs to the UN", "has only one ethnic group within it", "has no borders with other states"], "Independence from outside control."],
    ["Vatican City and Monaco are examples of", "microstates", ["multinational states", "stateless nations", "federal states"], "Very small sovereign states."]
  ]],
  ["4.2", "Political Processes", [
    ["The division of Africa at the Berlin Conference is an example of", "colonialism", ["devolution", "irredentism", "supranationalism"], "European powers claimed African territory."],
    ["After World War II, many African states gained independence through", "decolonization", ["colonization", "annexation", "imperialism"], "Colonies became sovereign states."],
    ["The breakup of the Soviet Union in 1991 created", "many new independent states", ["one larger state", "new colonies of Russia", "a new supranational union of states"], "Fifteen republics became independent."],
    ["Russia's annexation of Crimea in 2014 is an example of", "irredentism", ["devolution", "decolonization", "supranationalism"], "Claiming territory with shared ethnic ties."]
  ]],
  ["4.3", "Political Power and Territoriality", [
    ["China building military bases on disputed islands shows", "territoriality", ["devolution", "supranationalism", "federalism"], "Asserting control over space."],
    ["Under UNCLOS, a state's exclusive economic zone extends", "200 nautical miles from shore", ["12 nautical miles from shore only", "50 nautical miles", "the whole ocean to the next coast"], "States control resources there."],
    ["A state's territorial sea extends", "12 nautical miles from shore", ["200 nautical miles from shore", "3 miles", "100 nautical miles"], "Full sovereignty applies."],
    ["Neocolonialism refers to", "powerful states controlling others economically", ["new colonies being founded by former colonies", "states giving up territory", "supranational unions"], "Control without formal colonies."]
  ]],
  ["4.4", "Defining Political Boundaries", [
    ["The 49th parallel boundary between the U.S. and Canada is a", "geometric boundary", ["physical boundary along a river", "cultural boundary", "subsequent boundary"], "It follows a line of latitude."],
    ["The India–Pakistan border, drawn to separate religious groups, is a", "subsequent boundary", ["antecedent boundary", "geometric boundary", "relic boundary"], "Drawn after settlement to separate groups."],
    ["The Berlin Wall's remains are a", "relic boundary", ["antecedent boundary", "superimposed boundary", "geometric boundary"], "No longer functions but remains visible."],
    ["Borders drawn by Europeans in Africa, ignoring ethnic groups, are", "superimposed boundaries", ["antecedent boundaries set early", "consequent boundaries", "relic boundaries"], "Imposed by outside powers."],
    ["The dispute over Kashmir between India and Pakistan is a", "locational dispute", ["allocational dispute", "operational dispute", "definitional dispute only"], "Disagreement over where the border is."]
  ]],
  ["4.5", "The Function of Political Boundaries", [
    ["The Schengen Agreement changed the function of borders by", "allowing free movement between member states", ["closing borders", "ending the EU", "requiring passports at every member border"], "Borders became open."],
    ["A dispute over how to control migration at a border is", "an operational dispute", ["a definitional dispute", "a locational dispute over maps", "an allocational dispute"], "About how the border functions."],
    ["An allocational boundary dispute concerns", "resources that cross a border", ["the exact location of the border line", "legal definitions", "border functions"], "Example: an oil field on a border."],
    ["The Rio Grande as part of the U.S.–Mexico border is a", "physical boundary", ["geometric boundary", "relic boundary", "superimposed boundary"], "It follows a natural feature."],
    ["An antecedent boundary is one drawn", "before an area was heavily settled", ["after settlement to separate groups", "by colonial powers", "along a wall between two cultures"], "Example: the U.S.–Canada border in the west."]
  ]],
  ["4.6", "Internal Boundaries", [
    ["Drawing districts to concentrate opposing voters in a few districts is", "packing", ["cracking", "stacking", "reapportionment"], "Wastes the opposition's votes."],
    ["Spreading opposing voters across many districts so they're a minority in each is", "cracking", ["packing", "stacking", "apportionment"], "Dilutes their votes."],
    ["Reapportionment after the census changes", "the number of House seats per state", ["the number of senators", "district boundaries within a state only", "the voting age in each state"], "Seats follow population."],
    ["Gerrymandering can lead to", "fewer competitive elections", ["more competitive elections in every district", "more third parties", "higher turnout everywhere"], "Safe districts reduce competition."]
  ]],
  ["4.7", "Forms of Governance", [
    ["France, where most power is in Paris, is a", "unitary state", ["federal state system", "confederation", "stateless nation"], "Centralized power."],
    ["The U.S., which divides power between national and state governments, is a", "federal state", ["unitary state", "confederation", "microstate"], "Shared power."],
    ["A large, diverse country might choose federalism to", "let regions govern local matters", ["centralize all power", "remove local governments entirely", "limit diversity"], "Regions can reflect local cultures."],
    ["A unitary system works best in a country that is", "small and culturally uniform", ["large and ethnically diverse", "large and divided by mountains", "made of many nations"], "Central control is easier."]
  ]],
  ["4.8", "Defining Devolutionary Factors", [
    ["Catalonia's push for independence from Spain is driven partly by", "a distinct language and wealthier economy", ["a religious difference with the rest of Spain", "a colonial past", "a small population"], "Cultural and economic factors."],
    ["Transferring power from a central government to regional governments is", "devolution", ["federalism", "supranationalism", "irredentism"], "Power moves to regions."],
    ["Scotland's parliament, created in 1999, is an example of", "devolution", ["centralization", "supranationalism", "colonialism"], "The UK transferred powers to Scotland."],
    ["Physical isolation can encourage devolution because", "distant regions feel separate from the core", ["mountains unite people", "islands and remote areas are always wealthier", "nearby regions share more cultural ties with the capital"], "Distance weakens ties."],
    ["Ethnic separatism can lead to", "independence movements", ["stronger centralization", "supranationalism", "irredentism only"], "Ethnic groups seek self-rule."]
  ]],
  ["4.9", "Challenges to Sovereignty", [
    ["Membership in the European Union challenges sovereignty because states", "must follow EU laws", ["lose their militaries", "can't trade with non-members", "have no governments"], "They share some decision-making."],
    ["Which is a supranational organization?", "The United Nations", ["The U.S. Congress", "The state of Texas", "The city of London"], "Multiple states cooperate."],
    ["Terrorist groups challenge state sovereignty because they", "operate across borders", ["are recognized states", "hold UN seats", "control no territory"], "They act beyond state control."],
    ["The internet challenges sovereignty by", "making information flow hard to control", ["ending trade", "creating borders", "stopping cross-border communication entirely"], "Information crosses borders easily."]
  ]],
  ["4.10", "Consequences of Centrifugal and Centripetal Forces", [
    ["A shared national language is an example of a", "centripetal force", ["centrifugal force", "devolutionary force", "boundary dispute over land"], "It unifies people."],
    ["Ethnic conflict that divides a country is a", "centrifugal force", ["centripetal force", "unifying force", "boundary type"], "It pulls a state apart."],
    ["The breakup of Yugoslavia in the 1990s resulted from", "centrifugal forces overpowering centripetal ones", ["strong centripetal forces unifying the country", "economic equality", "supranational pressure"], "Ethnic divisions split the country."],
    ["National holidays and symbols act as", "centripetal forces", ["centrifugal forces", "devolution", "balkanization"], "They build shared identity."],
    ["Balkanization refers to", "a state breaking into smaller states", ["two or more states merging into a union", "colonization", "federalism"], "Named for the Balkans."]
  ]]
]}
);
