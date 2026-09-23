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
    ["The Mercator projection is useful for navigation because it", "preserves direction, so a straight line is a line of constant compass bearing", ["shows the correct relative size of every landmass", "has no distortion near the poles", "shows equal areas"], "Mercator is conformal but badly exaggerates area at high latitudes, which is why Greenland looks as big as Africa."],
    ["A map shows the percentage of each county's population that voted for a candidate, using shades of one color. This is a", "choropleth map", ["dot distribution map", "isoline map", "cartogram"], "Choropleth maps shade areas by a data value."],
    ["A map that resizes countries according to their population rather than land area is a", "cartogram", ["choropleth map", "topographic map", "reference map"], "Cartograms distort area to show a variable."],
    ["Contour lines on a topographic map are an example of", "isolines connecting points of equal value", ["proportional symbols", "a flow map", "a dot density pattern"], "Isolines can show elevation, temperature, or pressure."],
    ["A map at a scale of 1:24,000 compared with a map at 1:1,000,000 shows", "a smaller area in greater detail", ["a larger area in less detail", "the same area and detail", "only relative location"], "A large-scale map has a larger fraction, so it covers a smaller area in more detail."],
    ["The Gall-Peters projection is often chosen to", "preserve the relative area of landmasses", ["preserve shape precisely", "make navigation easier", "show the poles as points"], "Equal-area projections distort shape in order to keep correct sizes."]
  ]],
  ["1.2", "Geographic Data", [
    ["A geographer interviews residents about how safe they feel in different neighborhoods. This is", "qualitative data gathered through fieldwork", ["quantitative satellite data", "census data", "GPS data"], "Interviews capture perceptions and experiences."],
    ["Which technology combines layers of spatial data to analyze patterns, such as overlaying flood zones and housing?", "Geographic Information Systems (GIS)", ["Global Positioning System (GPS)", "Remote sensing alone", "A paper atlas"], "GIS stores, layers, and analyzes geographic data."],
    ["Satellite imagery used to monitor deforestation in the Amazon is an example of", "remote sensing", ["GPS", "field observation", "census data"], "Remote sensing collects data from a distance, usually by satellite or aircraft."],
    ["A ride-share app pinpoints a user's exact location. This relies on", "GPS", ["GIS layering only", "remote sensing of land cover", "a mental map"], "GPS uses satellites to find absolute location."],
    ["A national census is an example of", "quantitative data collected by a government", ["qualitative data from interviews", "remote sensing", "a thematic map"], "Censuses count population characteristics at regular intervals."]
  ]],
  ["1.3", "The Power of Geographic Data", [
    ["During a disease outbreak, officials map where cases occur to find the source. This shows geographic data being used to", "inform policy and decision-making", ["draw political boundaries", "measure elevation", "calculate GDP"], "John Snow's 1854 cholera map is a famous example."],
    ["City planners use traffic data and GIS to decide where to build a new bus line. This is an application of geographic data at the", "local scale", ["global scale", "national scale only", "regional scale only"], "Geographic data informs decisions at every scale."],
    ["A person's internal representation of places they know, such as the route to school, is a", "mental map", ["reference map", "thematic map", "cartogram"], "Mental maps reflect perception and experience."],
    ["Businesses analyze consumer data by ZIP code to decide where to open new stores. This is an example of", "using geographic data to make economic decisions", ["mental mapping", "remote sensing", "physical geography"], "Spatial data drives site selection."]
  ]],
  ["1.4", "Spatial Concepts", [
    ["The coordinates 40.7° N, 74.0° W describe New York City's", "absolute location", ["relative location", "site", "situation"], "Absolute location is an exact position on Earth's grid."],
    ["\"Chicago is located on the southwestern shore of Lake Michigan and is a major rail hub linking the eastern and western United States.\" The second part of this sentence describes Chicago's", "situation", ["site", "absolute location", "density"], "Situation is location relative to other places and connections. Site is the physical character of the place itself."],
    ["The idea that interaction between places decreases as the distance between them increases is", "distance decay", ["time-space compression", "complementarity", "friction of distance only"], "People interact more with nearby places."],
    ["Video calls and fast airline travel make distant places feel closer. This is", "time-space compression", ["distance decay", "absolute distance", "sequent occupance"], "Technology reduces the time it takes for people and ideas to cross space."],
    ["The arrangement of phenomena across Earth's surface, such as clustered or dispersed, is called", "pattern (spatial distribution)", ["scale", "region", "place"], "Distribution also includes density and concentration."],
    ["A town's sense of place, based on its landmarks, culture, and physical setting, describes its", "place", ["space", "absolute location", "scale"], "Place is location given human meaning."]
  ]],
  ["1.5", "Human-Environmental Interaction", [
    ["The idea that the physical environment determines human culture and development is", "environmental determinism", ["possibilism", "sustainability", "cultural relativism"], "Geographers largely reject this idea today."],
    ["Terraced rice fields in the Philippine mountains are an example of", "possibilism, where people adapt to and modify their environment", ["environmental determinism", "time-space compression", "distance decay"], "The environment sets limits, but people choose how to use it."],
    ["Draining wetlands to build housing is an example of", "humans modifying the environment", ["humans adapting to the environment without change", "environmental determinism", "distance decay"], "Human-environment interaction goes both ways."],
    ["Using resources in a way that meets present needs without compromising future generations is", "sustainability", ["depletion", "environmental determinism", "possibilism"], "Sustainability balances environmental, economic, and social goals."],
    ["Natural resources that cannot be replaced within a human lifetime, such as oil, are", "nonrenewable resources", ["renewable resources", "flow resources", "sustainable resources"], "Fossil fuels formed over millions of years."]
  ]],
  ["1.6", "Scales of Analysis", [
    ["A map of U.S. unemployment by state shows the Midwest average. A county map shows sharp differences within one state. This shows that", "changing the scale of analysis can reveal different patterns", ["state data is always wrong", "county data is always less accurate", "scale doesn't affect interpretation"], "Patterns visible at one scale may disappear at another."],
    ["Studying the spread of COVID-19 among countries uses which scale of analysis?", "Global", ["Local", "Regional only", "Individual"], "Global scale compares the world as a whole."],
    ["Comparing voting patterns among neighborhoods in one city uses which scale?", "Local", ["Global", "National", "Continental"], "Local scale looks at small areas such as neighborhoods."],
    ["Why should geographers be careful when drawing conclusions from national-scale data?", "National averages can hide significant regional and local variation", ["National data is never accurate", "Only global data is valid", "Local data is always larger"], "This is sometimes called the ecological fallacy."]
  ]],
  ["1.7", "Regional Analysis", [
    ["The area served by a pizza delivery restaurant is an example of a", "functional (nodal) region", ["formal region", "perceptual region", "vernacular region"], "A functional region is organized around a central node."],
    ["The Corn Belt, defined by a high share of land planted in corn, is a", "formal (uniform) region", ["functional region", "perceptual region", "nodal region"], "Formal regions share a common measurable characteristic."],
    ["\"The South\" in the United States, defined by people's feelings and identity, is a", "perceptual (vernacular) region", ["formal region", "functional region", "nodal region"], "Perceptual regions exist in people's minds and their boundaries vary."],
    ["Regional boundaries are often contested because", "people define regions using different criteria and perceptions", ["regions always have exact boundaries", "regions are fixed by law", "regions cannot overlap"], "Regions are human constructs, and they can overlap."],
    ["A newspaper's circulation area is best described as a", "functional region", ["formal region", "perceptual region", "physical region"], "Its circulation is organized around a center, the newspaper, and weakens with distance."]
  ]]
]},
{ n: 2, name: "Population and Migration Patterns and Processes", weight: "12–17%", topics: [
  ["2.1", "Population Distribution", [
    ["Arithmetic density is calculated as", "total population divided by total land area", ["population divided by arable land", "farmers divided by arable land", "births per 1,000 people"], "It's the simplest density measure but hides uneven distribution."],
    ["Egypt has a high physiological density because", "most people live on a small area of arable land along the Nile", ["it has very little population", "all its land is farmland", "it has many farmers per acre"], "Physiological density = population ÷ arable land. It shows pressure on farmland."],
    ["Agricultural density (farmers per unit of arable land) is typically higher in", "less developed countries with labor-intensive farming", ["highly developed countries with mechanized farms", "countries with no agriculture", "city-states"], "Mechanization lowers the number of farmers needed per acre."],
    ["Which region is one of the world's largest population clusters?", "East Asia", ["Central Australia", "The Sahara", "Northern Canada"], "Major clusters include East Asia, South Asia, Europe, and the northeastern U.S."],
    ["Most of the world's population lives", "at low elevations, near coasts and rivers, in temperate climates", ["in deserts", "at high elevations", "near the poles"], "Physical factors strongly influence population distribution."]
  ]],
  ["2.2", "Consequences of Population Distribution", [
    ["A country with very high physiological density may face", "pressure on food supply and farmland", ["surplus farmland", "labor shortages in agriculture", "no environmental problems"], "More people per arable acre strains food production."],
    ["Rapid population growth in cities can strain", "infrastructure such as housing, water, and transportation", ["only rural services", "global trade only", "nothing, since cities grow easily"], "Services often can't keep up with growth."],
    ["Uneven population distribution in a country can lead to", "political and economic differences between crowded and sparse regions", ["equal access to services everywhere", "identical land use across regions", "no effect on elections"], "Density affects representation, services, and economic activity."],
    ["Carrying capacity refers to", "the number of people an area can support sustainably", ["the total population of a country", "the physiological density", "the number of immigrants allowed"], "It depends on resources and technology."]
  ]],
  ["2.3", "Population Composition", [
    ["A population pyramid with a wide base and narrow top most likely represents a country with", "high birth rates and a young population", ["an aging population and low birth rates", "zero population growth", "high immigration of retirees"], "This expansive shape is common in Stage 2 of the DTM."],
    ["A population pyramid shaped like a column or slightly wider at the top indicates", "low birth rates and an aging population", ["rapid population growth", "high infant mortality", "a young population"], "Examples include Japan and Italy."],
    ["A population pyramid shows an unusually large number of males aged 20–40. The most likely explanation is", "male labor migration into the area, such as for oil industry jobs", ["a baby boom", "war casualties among young men", "high female immigration"], "Some Gulf states show this pattern."],
    ["The sex ratio is", "the number of males per 100 females", ["births per 1,000 people", "deaths per 1,000 people", "people per square kilometer"], "Sex-selective practices or migration can skew it."],
    ["A dip in a population pyramid in a specific age group 20 years earlier might reflect", "a war, famine, or policy that lowered births at that time", ["a baby boom", "increased immigration", "improved health care"], "Pyramids record historical events."]
  ]],
  ["2.4", "Population Dynamics", [
    ["A country's CBR is 30 and its CDR is 10 per 1,000. Its rate of natural increase (RNI) is", "2.0%", ["20%", "3.0%", "0.2%"], "(30 − 10)/1,000 = 20/1,000 = 2%."],
    ["Using the rule of 70, a population growing at 2% per year will double in about", "35 years", ["70 years", "14 years", "140 years"], "Doubling time ≈ 70 ÷ growth rate (%)."],
    ["Total fertility rate (TFR) is", "the average number of children a woman is expected to have in her lifetime", ["births per 1,000 people per year", "deaths of infants per 1,000 live births", "the number of women per 100 men"], "Replacement level is about 2.1."],
    ["Infant mortality rate (IMR) is a useful indicator of", "a country's health care, sanitation, and development", ["population density", "migration patterns", "the sex ratio"], "Lower IMR is generally associated with higher development."],
    ["The dependency ratio compares", "the number of people too young or too old to work with the working-age population", ["males to females", "urban to rural residents", "births to deaths"], "A high dependency ratio puts pressure on workers and government services."]
  ]],
  ["2.5", "The Demographic Transition Model", [
    ["In Stage 2 of the Demographic Transition Model,", "death rates fall sharply while birth rates stay high, causing rapid growth", ["birth and death rates are both low", "birth rates fall below death rates", "birth and death rates are both high and fluctuating"], "Improvements in food supply, sanitation, and medicine lower death rates first."],
    ["The main reason birth rates fall in Stage 3 is", "urbanization, more education and jobs for women, and children becoming an economic cost rather than a benefit", ["rising death rates", "famine", "lower access to contraception"], "Social and economic changes lower fertility."],
    ["A country with CBR 10, CDR 11, and an aging population is most likely in", "Stage 5 (or late Stage 4)", ["Stage 1", "Stage 2", "Stage 3"], "Some scholars add Stage 5 for natural decrease."],
    ["A criticism of the Demographic Transition Model is that", "it is based on European experience and may not predict the path of all countries", ["it applies perfectly to every country", "it includes migration", "it was created in Africa"], "Some countries' death rates fell quickly because of imported medicine, not internal development."],
    ["Most countries in sub-Saharan Africa today are in", "Stage 2 or early Stage 3", ["Stage 1", "Stage 5", "Stage 4 only"], "Death rates have fallen, but birth rates remain relatively high."]
  ]],
  ["2.6", "Malthusian Theory", [
    ["Thomas Malthus argued that", "population grows geometrically while food supply grows arithmetically, which leads to famine", ["food supply grows faster than population", "technology will always prevent famine", "population will stabilize on its own"], "He wrote An Essay on the Principle of Population in 1798."],
    ["A major criticism of Malthus is that he", "did not anticipate how technology such as the Green Revolution would increase food production", ["overestimated technological advances", "ignored population growth", "predicted food surpluses"], "Food production has so far kept up with population globally."],
    ["Neo-Malthusians expand Malthus's ideas by arguing that", "population growth threatens not only food but also other resources and the environment", ["population growth is always beneficial", "resources are unlimited", "birth rates will rise forever"], "They worry about water, energy, and ecological limits."],
    ["Ester Boserup's view, which contrasts with Malthus, is that", "population pressure encourages agricultural innovation that raises food production", ["population always outstrips food supply", "technology never changes", "famine is inevitable"], "Necessity drives intensification."]
  ]],
  ["2.7", "Population Policies", [
    ["China's one-child policy (1979–2015) is an example of", "an antinatalist policy", ["a pronatalist policy", "an immigration policy", "an assimilation policy"], "Antinatalist policies aim to lower birth rates."],
    ["France offers generous child allowances and paid parental leave to encourage larger families. This is", "a pronatalist policy", ["an antinatalist policy", "an emigration policy", "a Malthusian policy"], "Pronatalist policies respond to low fertility and aging."],
    ["An unintended consequence of China's one-child policy was", "a skewed sex ratio with more males than females", ["rapid population growth", "a younger population", "higher fertility"], "A preference for sons combined with the one-child limit."],
    ["Immigration policies that favor highly skilled workers, like Canada's points system, are designed to", "attract workers who meet labor needs", ["reduce immigration to zero", "increase birth rates", "encourage emigration"], "Countries use immigration to address labor shortages and aging."]
  ]],
  ["2.8", "Women and Demographic Change", [
    ["As women's access to education and paid work increases, fertility rates usually", "decline", ["increase", "stay the same", "become unpredictable"], "Education tends to delay marriage and childbearing."],
    ["Improvements in women's rights and reproductive health care are associated with", "lower infant mortality and lower total fertility rates", ["higher death rates", "more rural migration", "lower literacy"], "Women's empowerment is closely linked to demographic change."],
    ["In many countries, women are marrying later and having children later. One demographic effect is", "a lower total fertility rate", ["a younger population", "higher birth rates", "a wider pyramid base"], "Fewer childbearing years lowers TFR."],
    ["Which change is most associated with countries moving from Stage 2 to Stage 3 of the DTM?", "Greater opportunities for women outside the home", ["Higher death rates", "More agricultural employment", "Earlier marriage"], "Fertility falls as women's roles change."]
  ]],
  ["2.9", "Aging Populations", [
    ["A country with a large share of people over 65 is likely to face", "higher pension and health care costs and potential labor shortages", ["a large number of schoolchildren", "rapid natural increase", "a high infant mortality rate"], "Japan and much of Europe face this challenge."],
    ["Countries with aging populations may respond by", "encouraging immigration and raising the retirement age", ["banning immigration", "lowering the retirement age", "cutting health care"], "These policies try to expand the workforce."],
    ["The elderly dependency ratio increases when", "the share of people 65+ grows relative to working-age people", ["birth rates increase", "death rates rise among the elderly", "young people immigrate"], "Fewer workers support more retirees."],
    ["Which country is best known for having one of the world's oldest populations?", "Japan", ["Niger", "Afghanistan", "Nigeria"], "Japan's median age is almost 50."]
  ]],
  ["2.10", "Causes of Migration", [
    ["A family leaves Syria because of civil war. War is a", "political push factor", ["economic pull factor", "environmental pull factor", "cultural pull factor"], "Push factors drive people away from their home."],
    ["Ravenstein's laws of migration state that", "most migrants move short distances, and long-distance migrants tend to go to major cities", ["most migrants move very long distances", "migration never occurs in steps", "rural areas attract most migrants"], "Ravenstein also said every migration flow produces a counter-flow."],
    ["An obstacle that prevents a migrant from reaching their intended destination, such as strict border laws, is an", "intervening obstacle", ["intervening opportunity", "pull factor", "push factor"], "Intervening obstacles can be physical or political."],
    ["A migrant heading to a big city takes a good job in a town along the way and stays. This is an", "intervening opportunity", ["intervening obstacle", "forced migration", "chain migration"], "An attractive opportunity along the way diverts the migrant."],
    ["The gravity model predicts that migration between two places is", "greater when the places have larger populations and are closer together", ["greater between small, distant places", "unrelated to population size", "equal everywhere"], "Interaction ≈ (Pop1 × Pop2) ÷ distance."]
  ]],
  ["2.11", "Forced and Voluntary Migration", [
    ["The transatlantic slave trade is an example of", "forced migration", ["voluntary migration", "chain migration", "step migration"], "People were moved against their will."],
    ["A person who flees their country because of well-founded fear of persecution and crosses an international border is a", "refugee", ["internally displaced person", "asylum seeker who has already been granted citizenship", "guest worker"], "The UN defines refugees by crossing an international border."],
    ["People forced from their homes by conflict who remain within their own country are", "internally displaced persons (IDPs)", ["refugees", "guest workers", "transhumance migrants"], "They lack the international protections that refugees have."],
    ["Migrants who join family members already settled in a new country are part of", "chain migration", ["step migration", "forced migration", "transhumance"], "Social networks guide migration."],
    ["A Turkish worker moves to Germany temporarily to fill a labor shortage. This is an example of", "guest worker migration", ["forced migration", "internal migration", "counterurbanization"], "Germany's Gastarbeiter program in the 1960s is a classic example."],
    ["Herders who move their livestock seasonally between mountain and lowland pastures practice", "transhumance", ["chain migration", "step migration", "counterurbanization"], "This is seasonal, cyclical migration."]
  ]],
  ["2.12", "Effects of Migration", [
    ["Money sent home by migrants to their families is called", "remittances", ["tariffs", "foreign direct investment", "subsidies"], "Remittances are a major part of GDP in countries like Honduras and Nepal."],
    ["The emigration of highly educated professionals from a less developed country is known as", "brain drain", ["brain gain", "chain migration", "remittance flow"], "It can deprive origin countries of skilled workers."],
    ["A country that receives many immigrants may experience", "a larger labor force and more cultural diversity, along with possible political tension", ["population decline", "fewer cultural changes", "a shrinking economy only"], "Migration has economic, cultural, and political effects."],
    ["Emigration of many young adult men from a rural area is likely to cause", "a population pyramid with fewer working-age males and a skewed sex ratio", ["a baby boom", "higher male population", "no demographic change"], "Origin areas lose working-age people."],
    ["Areas that receive many migrants may develop ethnic neighborhoods, such as Chinatowns. This is an example of migration affecting", "the cultural landscape", ["physical geography", "absolute location", "the DTM stage"], "Migrants reshape the places where they settle."]
  ]]
]},
{ n: 3, name: "Cultural Patterns and Processes", weight: "12–17%", topics: [
  ["3.1", "Introduction to Culture", [
    ["Culture traits include", "individual elements of culture such as food, language, religion, and clothing", ["only physical landforms", "only political boundaries", "climate patterns"], "Culture traits combine into a culture complex."],
    ["An attitude that one's own culture is superior to others is", "ethnocentrism", ["cultural relativism", "acculturation", "assimilation"], "Cultural relativism instead judges a culture by its own standards."],
    ["Evaluating another culture's practices based on that culture's own values is", "cultural relativism", ["ethnocentrism", "syncretism", "globalization"], "It's a key perspective in human geography."],
    ["A Korean restaurant opens in a Mexican neighborhood of Los Angeles and serves kimchi tacos. This blend of traits reflects", "cultural interaction and syncretism", ["ethnocentrism", "environmental determinism", "cultural isolation"], "Cultures combine when people interact."]
  ]],
  ["3.2", "Cultural Landscapes", [
    ["The visible imprint of human activity on the land, such as buildings, fields, and signs, is the", "cultural landscape", ["physical landscape", "site", "absolute location"], "Carl Sauer said cultural landscapes are shaped from natural landscapes by cultural groups."],
    ["Layers of different cultural influences on a place over time, such as Spanish missions and later American buildings in San Antonio, show", "sequent occupance", ["environmental determinism", "distance decay", "centripetal forces"], "Each group leaves an imprint on the landscape."],
    ["Mosques with minarets in a city's skyline are an example of", "religion expressed in the cultural landscape", ["physical geography", "a functional region", "a centrifugal force only"], "Sacred sites and religious architecture mark the landscape."],
    ["Streets named after saints and a central plaza with a cathedral in Latin American cities reflect", "the influence of Spanish colonialism on the cultural landscape", ["British colonial influence", "indigenous land survey methods only", "modern suburban design"], "The Laws of the Indies shaped the colonial town layout."],
    ["Attachment to a place that gives people a sense of identity is known as", "sense of place", ["placelessness", "time-space compression", "distance decay"], "Placelessness describes landscapes that look the same everywhere, such as chain stores."]
  ]],
  ["3.3", "Cultural Patterns", [
    ["The belief that a particular place belongs to a group because of their ethnic identity is related to", "ethnicity and territoriality", ["relocation diffusion", "environmental determinism", "the demographic transition"], "Ethnic identity is often tied to specific places."],
    ["Ethnic enclaves such as Little Havana in Miami form because", "migrants tend to cluster near others who share their culture, language, and social networks", ["cities require it by law", "migrants avoid their own group", "it is random"], "Clustering provides support and familiar services."],
    ["Gender roles that differ from place to place are an example of", "culture varying across space", ["physical geography", "absolute location", "sequent occupance"], "Cultural norms shape the roles people play."],
    ["Architecture that uses local materials and traditional designs, like adobe homes in the Southwest, is", "vernacular architecture", ["postmodern architecture", "international style", "placelessness"], "It reflects local culture and environment."]
  ]],
  ["3.4", "Types of Diffusion", [
    ["A fashion trend that starts in New York, then spreads to Los Angeles and Chicago before reaching smaller towns, illustrates", "hierarchical diffusion", ["contagious diffusion", "relocation diffusion", "stimulus diffusion"], "It spreads from larger or more influential places to smaller ones."],
    ["A viral video spreading rapidly from person to person, regardless of hierarchy, is", "contagious diffusion", ["hierarchical diffusion", "relocation diffusion", "stimulus diffusion"], "Contagious diffusion spreads like a disease through nearby contact."],
    ["McDonald's in India serves the vegetarian McAloo Tikki instead of beef burgers. This is", "stimulus diffusion", ["relocation diffusion", "contagious diffusion", "hierarchical diffusion"], "The basic idea spreads, but it's adapted to local culture."],
    ["Irish immigrants bringing St. Patrick's Day celebrations to Boston is", "relocation diffusion", ["contagious diffusion", "stimulus diffusion", "hierarchical diffusion"], "Traits move with people who migrate."],
    ["The spread of Christianity through the Roman Empire, first to urban centers and then outward, involved", "both hierarchical and contagious diffusion", ["only relocation diffusion", "only stimulus diffusion", "no diffusion"], "Diffusion often combines several types."],
    ["The point where a culture trait originates is called its", "hearth", ["node", "periphery", "sphere of influence"], "Ideas diffuse outward from hearths."]
  ]],
  ["3.5", "Historical Causes of Diffusion", [
    ["English became widespread in India, Nigeria, and Australia mainly because of", "British colonialism and imperialism", ["contagious diffusion through social media", "environmental determinism", "Chinese trade routes"], "Colonial powers spread their language, religion, and legal systems."],
    ["The Silk Road contributed to the diffusion of", "goods, religions like Buddhism, and technologies across Eurasia", ["only spices", "only European languages", "only military technology"], "Trade routes carried ideas along with goods."],
    ["Spanish and Portuguese are the dominant languages in Latin America because of", "colonization by Spain and Portugal", ["recent migration from Europe", "trade with China", "indigenous language evolution"], "The Treaty of Tordesillas divided colonial claims between them."],
    ["The spread of Islam across North Africa in the 7th–8th centuries occurred largely through", "military expansion and trade, a form of relocation and expansion diffusion", ["colonialism by European powers", "the internet", "stimulus diffusion only"], "Arab armies and merchants carried Islam outward."]
  ]],
  ["3.6", "Contemporary Causes of Diffusion", [
    ["K-pop gaining fans around the world through streaming platforms is an example of", "globalization and communication technology speeding up cultural diffusion", ["colonialism", "relocation diffusion only", "environmental determinism"], "Time-space compression speeds diffusion."],
    ["Critics argue that global chains like Starbucks lead to", "cultural convergence and placelessness", ["cultural divergence", "more linguistic diversity", "greater folk culture"], "Similar landscapes appear everywhere."],
    ["The adoption of another culture's traits while still keeping one's own culture is", "acculturation", ["assimilation", "ethnocentrism", "syncretism"], "Assimilation means fully absorbing into the dominant culture."],
    ["Immigrants whose grandchildren speak only English and no longer practice their ancestors' traditions have experienced", "assimilation", ["acculturation", "multiculturalism", "syncretism"], "The original culture is largely replaced."],
    ["Popular culture differs from folk culture in that popular culture", "diffuses quickly across large areas and changes rapidly", ["is practiced by small, isolated groups", "resists change", "diffuses mostly by relocation"], "Folk culture is traditional and local."]
  ]],
  ["3.7", "Diffusion of Religion and Language", [
    ["Which religions are universalizing religions that actively seek converts?", "Christianity, Islam, and Buddhism", ["Hinduism, Judaism, and Shinto", "Hinduism and Christianity", "Judaism and Islam"], "Ethnic religions are tied to a particular group and place."],
    ["Hinduism is considered an ethnic religion because it", "is closely tied to the culture and geography of South Asia and does not actively seek converts", ["has spread to every continent through missionaries", "originated in the Middle East", "has a single founder"], "Most Hindus live in India and Nepal."],
    ["Buddhism originated in", "South Asia (northern India/Nepal)", ["East Asia", "Southwest Asia", "Southeast Asia"], "It spread along trade routes to East and Southeast Asia."],
    ["English, Hindi, Spanish, and Persian all belong to which language family?", "Indo-European", ["Sino-Tibetan", "Afro-Asiatic", "Austronesian"], "Indo-European is the most widely spoken language family."],
    ["The Anatolian hypothesis proposes that Proto-Indo-European spread", "with the diffusion of agriculture from Anatolia", ["by horse-riding warriors from the Russian steppe", "through colonialism", "through the Silk Road"], "The Kurgan hypothesis instead proposes steppe nomads."],
    ["A language used between speakers of different native languages to communicate, such as Swahili in East Africa, is a", "lingua franca", ["pidgin", "dialect", "isolate"], "English is the most widespread lingua franca today."]
  ]],
  ["3.8", "Effects of Diffusion", [
    ["Voodoo in Haiti combines West African religious traditions with Catholicism. This is", "syncretism", ["assimilation", "ethnocentrism", "cultural divergence"], "Syncretism blends traits to create something new."],
    ["Many indigenous languages are disappearing as younger generations adopt dominant languages. This is an example of", "cultural convergence leading to language extinction", ["cultural divergence", "stimulus diffusion", "acculturation having no effect"], "UNESCO considers thousands of languages endangered."],
    ["Quebec's laws requiring French on signs are an attempt to", "preserve cultural identity against the spread of English", ["encourage assimilation into English culture", "promote globalization", "eliminate French"], "This is a response to cultural diffusion."],
    ["Amish communities rejecting many modern technologies show", "cultural divergence, keeping a distinct identity", ["cultural convergence", "assimilation", "globalization"], "Some groups resist diffusion to preserve their traditions."],
    ["The mixing of Spanish and English words, such as \"Spanglish,\" is an example of", "language blending that results from cultural interaction", ["language extinction", "ethnocentrism", "a language isolate"], "When languages come into contact, speakers mix words and grammar, and new forms can emerge."]
  ]]
]},
{ n: 4, name: "Political Patterns and Processes", weight: "12–17%", topics: [
  ["4.1", "Introduction to Political Geography", [
    ["A state is best defined as", "a politically organized territory with a permanent population, defined boundaries, and sovereignty", ["a group of people with a shared culture", "any region with a common language", "a subnational unit such as Texas"], "In political geography, 'state' means country."],
    ["A nation is", "a group of people who share a common culture and identity", ["a territory with recognized sovereignty", "a type of government", "an international organization"], "A nation is cultural. A state is political."],
    ["Japan is often cited as an example of a", "nation-state", ["multinational state", "stateless nation", "multistate nation"], "Most of the population shares one ethnic identity."],
    ["The Kurds, who live across Turkey, Iraq, Iran, and Syria without their own country, are a", "stateless nation", ["nation-state", "multinational state", "microstate"], "Palestinians are another example."],
    ["The former Soviet Union, with dozens of ethnic groups, was a", "multinational state", ["nation-state", "stateless nation", "microstate"], "Many nations were contained within one state."],
    ["Koreans living in both North and South Korea are an example of a", "multistate nation", ["stateless nation", "nation-state", "autonomous region"], "One nation spread across more than one state."]
  ]],
  ["4.2", "Political Processes", [
    ["The idea that states have the right to govern their own territory without outside interference is", "sovereignty", ["devolution", "irredentism", "imperialism"], "Sovereignty is central to the modern state system, which dates from the Peace of Westphalia in 1648."],
    ["European powers dividing Africa among themselves at the Berlin Conference (1884–85) is an example of", "colonialism and imperialism", ["self-determination", "devolution", "supranationalism"], "Boundaries were drawn with little regard for ethnic groups."],
    ["After World War II, many African and Asian colonies gained independence. This process is called", "decolonization", ["colonization", "annexation", "balkanization"], "Self-determination drove the formation of new states."],
    ["The right of a group to govern itself is known as", "self-determination", ["imperialism", "annexation", "gerrymandering"], "It was a key principle after World War I."]
  ]],
  ["4.3", "Political Power and Territoriality", [
    ["A country trying to extend its control over a region where people of its ethnicity live in another country is practicing", "irredentism", ["devolution", "supranationalism", "decolonization"], "Russia's claims on Crimea are often cited as an example."],
    ["Neocolonialism refers to", "powerful countries exerting economic or political control over less developed countries without direct rule", ["the process of gaining independence", "creating new colonies by military force", "internal self-government"], "It can happen through debt, trade, or corporations."],
    ["Territoriality is", "a person's or group's attempt to influence and control a specific area", ["the physical size of a state", "the number of boundaries a state has", "the process of giving power to regions"], "Territoriality is expressed through boundaries, symbols, and control."],
    ["Shatterbelts are regions that", "experience internal instability and are caught between rival outside powers", ["are always peaceful", "have no natural resources", "are uninhabited"], "Eastern Europe during the Cold War is an example."]
  ]],
  ["4.4", "Defining Political Boundaries", [
    ["The 49th parallel boundary between the U.S. and Canada is a", "geometric boundary", ["physical boundary", "antecedent boundary following ethnic lines", "relic boundary"], "Geometric boundaries follow latitude, longitude, or straight lines."],
    ["A boundary drawn after a cultural landscape developed, often following ethnic or religious lines, is a", "subsequent boundary", ["antecedent boundary", "superimposed boundary", "relic boundary"], "An example is the India–Pakistan boundary."],
    ["A boundary imposed by outside powers that ignores existing cultural patterns, like many borders in Africa, is a", "superimposed boundary", ["antecedent boundary", "subsequent boundary", "consequent boundary"], "Superimposed boundaries often divide ethnic groups."],
    ["The Berlin Wall's remaining sections, a boundary that no longer functions, are an example of a", "relic boundary", ["antecedent boundary", "geometric boundary", "subsequent boundary"], "Relic boundaries leave marks on the landscape."],
    ["A boundary that existed before the area was heavily populated, like much of the U.S.–Canada border, is an", "antecedent boundary", ["subsequent boundary", "superimposed boundary", "relic boundary"], "It was drawn before the cultural landscape developed."]
  ]],
  ["4.5", "The Function of Political Boundaries", [
    ["The UN Convention on the Law of the Sea gives coastal states an exclusive economic zone (EEZ) extending", "200 nautical miles from the coast", ["12 nautical miles", "3 nautical miles", "500 nautical miles"], "States control fishing and resources within the EEZ."],
    ["Under UNCLOS, a state's territorial sea extends", "12 nautical miles from its coast", ["200 nautical miles", "50 nautical miles", "1 nautical mile"], "The territorial sea is treated like land territory."],
    ["Two countries disagree about where exactly a boundary line should be drawn according to a treaty. This is a", "definitional boundary dispute", ["locational dispute", "operational dispute", "allocational dispute"], "Definitional disputes are about the legal language of the boundary."],
    ["Countries disagree over how to manage migration across their shared border. This is an", "operational boundary dispute", ["definitional dispute", "allocational dispute", "locational dispute"], "Operational disputes are about how the border functions."],
    ["A dispute over oil deposits that lie under a border is an", "allocational boundary dispute", ["operational dispute", "definitional dispute", "relic dispute"], "Allocational disputes are about resources."]
  ]],
  ["4.6", "Internal Boundaries", [
    ["Drawing voting district boundaries to benefit one political party is", "gerrymandering", ["reapportionment", "devolution", "annexation"], "Techniques include 'cracking' and 'packing' voters."],
    ["Concentrating an opposing party's voters into a few districts so they win those by large margins but lose elsewhere is", "packing", ["cracking", "stacking", "reapportionment"], "Packing wastes opposition votes."],
    ["After each U.S. census, House seats are redistributed among states based on population. This is", "reapportionment", ["redistricting", "gerrymandering", "devolution"], "Redistricting then redraws district lines within states."],
    ["Spreading an opposing party's voters thinly across many districts so they are outvoted everywhere is", "cracking", ["packing", "reapportionment", "annexation"], "Cracking dilutes their voting power."]
  ]],
  ["4.7", "Forms of Governance", [
    ["A unitary state is one in which", "power is concentrated in the central government", ["power is divided between central and regional governments", "there is no central government", "regional governments hold most of the power"], "France and Japan are examples."],
    ["A federal state, such as the U.S. or Germany, is one in which", "power is shared between the national government and regional governments", ["all power rests with the central government", "local governments have no power", "there is no constitution"], "Federal systems often suit large or diverse countries."],
    ["Federal systems are often found in large, culturally diverse countries because they", "allow regional groups to keep some self-governance", ["eliminate regional identity", "concentrate all power in one city", "prevent elections"], "Examples include India, Russia, and Brazil."],
    ["Which country is best described as a unitary state?", "France", ["The United States", "Germany", "Canada"], "Its departments have limited autonomy."]
  ]],
  ["4.8", "Defining Devolutionary Factors", [
    ["The transfer of power from a central government to regional governments is", "devolution", ["centralization", "annexation", "imperialism"], "Examples include Scotland's parliament and Catalonia's autonomy."],
    ["The breakup of Yugoslavia into several smaller states along ethnic lines is often called", "balkanization", ["supranationalism", "unification", "annexation"], "The term comes from the Balkan Peninsula."],
    ["Which factor is most likely to drive devolution in a country?", "A distinct ethnic or linguistic minority concentrated in one region", ["A single shared national language", "A strong centralized economy", "Geographic compactness"], "Catalonia and Quebec are examples."],
    ["Physical geography, such as a remote island region far from the capital, can encourage devolution because", "distance and isolation make it harder for central governments to govern and can strengthen local identity", ["it always increases unity", "remote areas have no people", "islands cannot have governments"], "Examples include Corsica and the Faroe Islands."],
    ["Economic differences, such as a wealthier region resenting transfers to poorer regions, can lead to", "devolutionary pressures", ["centripetal forces", "supranationalism", "annexation"], "Northern Italy and Catalonia are examples."]
  ]],
  ["4.9", "Challenges to Sovereignty", [
    ["The European Union is an example of", "supranationalism, where states give up some sovereignty for shared benefits", ["devolution", "irredentism", "colonialism"], "Member states share a single market and, for many, a currency."],
    ["The United Kingdom's decision to leave the EU (Brexit) reflects", "a desire to regain national sovereignty from a supranational organization", ["an increase in supranationalism", "irredentism", "colonialism"], "Supporters wanted more control over laws, borders, and trade."],
    ["Which is a challenge to state sovereignty?", "Global terrorism networks operating across borders", ["A national election", "A new national park", "A domestic highway project"], "Non-state actors and global forces can challenge sovereignty."],
    ["NATO is an example of a supranational organization focused on", "military cooperation and collective defense", ["free trade only", "religion", "cultural preservation"], "An attack on one member is considered an attack on all."]
  ]],
  ["4.10", "Consequences of Centrifugal and Centripetal Forces", [
    ["A shared national language and common national holidays are examples of", "centripetal forces", ["centrifugal forces", "devolutionary forces", "irredentist forces"], "Centripetal forces unify a state."],
    ["Ethnic separatist movements are examples of", "centrifugal forces", ["centripetal forces", "supranationalism", "nationalism that unifies"], "Centrifugal forces divide a state."],
    ["Belgium's division between Dutch-speaking Flanders and French-speaking Wallonia creates", "a centrifugal force that has led to a more federal government", ["a centripetal force", "no political effect", "irredentism"], "Linguistic divisions push toward devolution."],
    ["Uneven economic development between regions of a country is likely to act as a", "centrifugal force", ["centripetal force", "supranational force", "nationalist unifier"], "Inequality can breed resentment and separatism."],
    ["A strong national sports team that the whole country supports is an example of a", "centripetal force", ["centrifugal force", "devolutionary pressure", "superimposed boundary"], "Shared symbols build national unity."]
  ]]
]}
);
