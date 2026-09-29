// AP Precalculus — Units 1–2. Question format: [stem, correct, [distractors], explanation, figure?]
window.AP_DATA = window.AP_DATA || {};
AP_DATA.pc = {
  id: "pc",
  name: "AP Precalculus",
  short: "Precalc",
  blurb: "Functions as models: polynomial, rational, exponential, logarithmic, trigonometric, and polar functions.",
  exam: "Exam: 40 MCQ (120 min, part calculator) + 4 FRQ (60 min). Unit 4 is taught but not tested.",
  units: []
};
AP_DATA.pc.units.push(
{ n: 1, name: "Polynomial and Rational Functions", weight: "30–40%", topics: [
  ["1.1", "Change in Tandem", [
    ["The number of people in line at a coffee shop at t = 0, 1, 2, 3, and 4 minutes is 4, 7, 12, 15, and 13. During which minute did the line grow the fastest?", "From t = 1 to t = 2", ["From t = 0 to t = 1", "From t = 2 to t = 3", "From t = 3 to t = 4"], "The changes are +3, +5, +3, and −2, so the biggest increase (5 people) is from t = 1 to t = 2."],
    ["The graph of f is shown. On which interval is f decreasing?", "(−1, 2)", ["(−3, −1)", "(2, 4)", "(−3, 4)"], "The graph rises until x = −1, falls until x = 2, then rises again.", { t: "line", title: "y = f(x)", x: { min: -3, max: 4, ticks: [-3, -2, -1, 0, 1, 2, 3, 4], label: "x" }, y: { min: -6, max: 6, ticks: [-6, -4, -2, 0, 2, 4, 6], label: "y" }, series: [{ name: "f", pts: [[-3, -4.5], [-2.5, 0.1], [-2, 2.7], [-1.5, 3.9], [-1, 4.2], [-0.5, 3.7], [0, 2.7], [0.5, 1.2], [1, -0.3], [1.5, -1.4], [2, -1.8], [2.5, -1.2], [3, 0.8], [3.5, 4.4], [3.7, 5.8]] }] }],
    ["A ball's height is h(t) = −5t² + 20t + 1 meters after t seconds. On which interval is the height increasing?", "0 < t < 2", ["t > 2", "0 < t < 4", "1 < t < 3"], "The vertex is at t = −20/(2·−5) = 2, so the height rises until t = 2 and falls after."],
    ["For f(x) = x³ − 12x, f(−3) = 9, f(−2) = 16, f(−1) = 11, f(1) = −11, f(2) = −16, and f(3) = −9. At which x-value does f have a relative maximum?", "x = −2", ["x = 2", "x = 0", "x = −3"], "Outputs rise to 16 at x = −2 and then fall, so f changes from increasing to decreasing there."]
  ]],
  ["1.2", "Rates of Change", [
    ["What is the average rate of change of f(x) = x² + 3x on the interval [1, 5]?", "9", ["8", "10", "36"], "f(5) = 40 and f(1) = 4, so (40 − 4)/(5 − 1) = 9."],
    ["A town had 2,400 residents in 2015 and 3,000 residents in 2023. What was the average rate of change of the population?", "75 people per year", ["600 people per year", "80 people per year", "125 people per year"], "(3,000 − 2,400)/(2023 − 2015) = 600/8 = 75."],
    ["Using the interval [1.9, 2.1], which is the best estimate of the rate of change of f(x) = x³ at x = 2?", "About 12", ["About 8", "About 4", "About 6"], "f(2.1) = 9.261 and f(1.9) = 6.859, so (9.261 − 6.859)/0.2 ≈ 12.01."],
    ["The temperature was 52°F at 8 a.m., 70°F at noon, and 61°F at 6 p.m. What was the average rate of change from noon to 6 p.m.?", "−1.5°F per hour", ["1.5°F per hour", "−9°F per hour", "0.75°F per hour"], "(61 − 70)/(6 hours) = −1.5°F per hour."]
  ]],
  ["1.3", "Rates of Change in Linear and Quadratic Functions", [
    ["The table shows values of a function at equally spaced inputs. What type of function could it be?", "Quadratic", ["Linear", "Exponential", "Cubic only"], "The first differences are 3, 5, 7, 9 and the second differences are all 2. Constant second differences mean quadratic.", { t: "table", title: "Values of g(x)", head: ["x", "0", "1", "2", "3", "4"], rows: [["g(x)", "1", "4", "9", "16", "25"]] }],
    ["For f(x) = 3x² − 2x, find the average rates of change on [0, 1], [1, 2], and [2, 3]. By how much does the rate increase from each interval to the next?", "6", ["3", "2", "7"], "f(0) = 0, f(1) = 1, f(2) = 8, f(3) = 21, so the rates are 1, 7, and 13, increasing by 6 each time."],
    ["A linear function g has g(2) = 11 and g(6) = 23. What is g(10)?", "35", ["34", "46", "30"], "The slope is (23 − 11)/(6 − 2) = 3, so g(10) = 23 + 3·4 = 35."],
    ["A quadratic function has outputs 5, 8, 9, and 8 at x = 0, 1, 2, and 3. What is its output at x = 4?", "5", ["6", "7", "3"], "First differences are 3, 1, −1, decreasing by 2 each time, so the next difference is −3 and the output is 8 − 3 = 5."]
  ]],
  ["1.4", "Polynomial Functions and Rates of Change", [
    ["For p(x) = (x − 1)²(x + 3), what happens to the graph at x = 1?", "It touches the x-axis and turns around", ["It crosses the x-axis", "It has a vertical asymptote", "It has a hole"], "The zero x = 1 has even multiplicity (2), so the graph touches the axis without crossing."],
    ["For p(x) = x³ − 6x² + 9x, p(0) = 0, p(1) = 4, p(2) = 2, p(3) = 0, and p(4) = 4. What is the relative maximum value of p on 0 < x < 4?", "4", ["2", "0", "3"], "The outputs rise to 4 at x = 1 and then fall, so the relative maximum value is 4."],
    ["A polynomial has a zero at x = −2, a zero of multiplicity 2 at x = 1, and a zero at x = 4. What is its least possible degree?", "4", ["3", "5", "2"], "Counting multiplicity: 1 + 2 + 1 = 4 zeros, so the degree is at least 4."],
    ["An odd polynomial function f has f(3) = −7. What is f(−3)?", "7", ["−7", "3", "0"], "Odd functions satisfy f(−x) = −f(x), so f(−3) = −(−7) = 7."]
  ]],
  ["1.5", "Polynomial Functions and Complex Zeros", [
    ["What are all the zeros of p(x) = x³ + 4x?", "0, 2i, and −2i", ["0, 2, and −2", "0, 4, and −4", "0 only"], "x³ + 4x = x(x² + 4), and x² + 4 = 0 gives x = ±2i."],
    ["A polynomial with real coefficients has zeros at 3 and 1 + i. What is its least possible degree?", "3", ["2", "4", "1"], "1 + i requires its conjugate 1 − i, so there are at least three zeros: 3, 1 + i, and 1 − i."],
    ["How many real zeros does p(x) = x⁴ − 16 have?", "2", ["4", "0", "1"], "x⁴ − 16 = (x − 2)(x + 2)(x² + 4). The zeros are ±2 (real) and ±2i (not real)."],
    ["Which polynomial has zeros 2, i, and −i?", "(x − 2)(x² + 1)", ["(x + 2)(x² + 1)", "(x − 2)(x² − 1)", "(x − 2)(x + 1)²"], "i and −i are the zeros of x² + 1, and 2 is the zero of x − 2."]
  ]],
  ["1.6", "Polynomial Functions and End Behavior", [
    ["For f(x) = −3x⁵ + 2x² − 7, what happens to f(x) as x → −∞?", "f(x) → ∞", ["f(x) → −∞", "f(x) → 0", "f(x) → −7"], "The leading term −3x⁵ dominates. For large negative x, x⁵ is very negative, and multiplying by −3 makes it very positive."],
    ["Let p(x) = 0.01x⁴ and q(x) = 100x³. Which is true for very large positive x?", "p(x) > q(x)", ["q(x) > p(x)", "p(x) = q(x)", "Neither grows without bound"], "p has the higher degree, so it eventually passes q (for x > 10,000)."],
    ["A company models revenue as R(x) = −2x³ + 60x² for x hundred units. What does the end behavior imply about this model?", "R(x) → −∞ as x grows, so the model is only reasonable on a limited domain", ["R(x) → ∞, so revenue always grows", "R(x) levels off at 60", "The model is linear for large x"], "The leading term −2x³ makes R negative for large x, which doesn't make sense for revenue, so the domain must be restricted."],
    ["What is the leading term of f(x) = (2x − 1)³(x + 4)²?", "8x⁵", ["2x⁵", "8x⁶", "6x⁵"], "(2x)³ · x² = 8x⁵."]
  ]],
  ["1.7", "Rational Functions and End Behavior", [
    ["What is the horizontal asymptote of r(x) = (6x² − 1)/(3x² + x)?", "y = 2", ["y = 6", "y = 0", "There is none"], "The degrees are equal, so the asymptote is the ratio of leading coefficients: 6/3 = 2."],
    ["What is the horizontal asymptote of r(x) = (5x + 2)/(x² − 9)?", "y = 0", ["y = 5", "y = 3", "There is none"], "The denominator has higher degree, so r(x) → 0."],
    ["The concentration of a drug in the blood t hours after a dose is C(t) = 40t/(t² + 4) mg/L. What happens to C(t) in the long run?", "It approaches 0 mg/L", ["It approaches 40 mg/L", "It approaches 10 mg/L", "It grows without bound"], "The denominator has higher degree than the numerator, so C(t) → 0 as t → ∞."],
    ["What is the slant asymptote of r(x) = (x² + 3)/(x − 1)?", "y = x + 1", ["y = x", "y = x − 1", "y = 1"], "Dividing gives x² + 3 = (x − 1)(x + 1) + 4, so r(x) = x + 1 + 4/(x − 1)."]
  ]],
  ["1.8", "Rational Functions and Zeros", [
    ["What are the zeros of r(x) = (x² − 4x)/(x + 2)?", "x = 0 and x = 4", ["x = −2", "x = 0, x = 4, and x = −2", "x = 4 only"], "The numerator x(x − 4) is zero at 0 and 4, and the denominator is not zero there."],
    ["What are the zeros of r(x) = (x − 3)(x + 1)/(x − 3)?", "x = −1 only", ["x = 3 and x = −1", "x = 3 only", "There are none"], "At x = 3 the function is undefined (a hole), so the only zero is x = −1."],
    ["For which x-values is r(x) = (x − 2)/(x + 1) positive?", "x < −1 or x > 2", ["−1 < x < 2", "x > 2 only", "x > −1"], "The sign changes at x = −1 and x = 2. Testing x = −2 (positive), x = 0 (negative), and x = 3 (positive)."],
    ["The average cost per item is C(x) = (500 + 2x)/x dollars for x items. For how many items is the average cost $7?", "100", ["50", "250", "71"], "(500 + 2x)/x = 7 gives 500 + 2x = 7x, so x = 100."]
  ]],
  ["1.9", "Rational Functions and Vertical Asymptotes", [
    ["What are the vertical asymptotes of r(x) = (x + 1)/(x² − 5x + 6)?", "x = 2 and x = 3", ["x = −1", "x = −2 and x = −3", "x = 6"], "x² − 5x + 6 = (x − 2)(x − 3), and neither factor cancels with the numerator."],
    ["The graph of r is shown. What is the vertical asymptote?", "x = 2", ["x = 0", "y = 1", "x = −2"], "The graph shoots up and down near x = 2 and never reaches it.", { t: "line", title: "y = r(x)", x: { min: -2, max: 6, ticks: [-2, -1, 0, 1, 2, 3, 4, 5, 6], label: "x" }, y: { min: -6, max: 8, ticks: [-6, -4, -2, 0, 2, 4, 6, 8], label: "y" }, series: [{ name: "r(x)", pts: [[-2, 0.75], [-1, 0.67], [0, 0.5], [1, 0], [1.5, -1], [1.75, -3], [1.85, -5.67]] }, { name: "", pts: [[2.15, 7.67], [2.25, 5], [2.5, 3], [3, 2], [4, 1.5], [5, 1.33], [6, 1.25]], k: 1 }] }],
    ["For r(x) = 3/(x − 4), what happens as x approaches 4 from the right?", "r(x) → ∞", ["r(x) → −∞", "r(x) → 0", "r(x) → 3"], "For x slightly more than 4, x − 4 is a small positive number, so 3/(x − 4) is very large and positive."],
    ["What are the vertical asymptotes of r(x) = (x + 5)/((x + 5)(x − 1))?", "x = 1 only", ["x = −5 and x = 1", "x = −5 only", "There are none"], "The factor x + 5 cancels, making a hole at x = −5. Only x − 1 remains in the denominator."]
  ]],
  ["1.10", "Rational Functions and Holes", [
    ["Where is the hole in the graph of r(x) = (x² − 9)/(x − 3)?", "(3, 6)", ["(3, 0)", "(−3, 0)", "(3, 9)"], "r(x) = (x − 3)(x + 3)/(x − 3) = x + 3 for x ≠ 3, so the hole is at (3, 3 + 3) = (3, 6)."],
    ["For r(x) = (x² + x − 6)/(x² − 4), which describes the graph?", "A hole at (2, 5/4) and a vertical asymptote at x = −2", ["Vertical asymptotes at x = 2 and x = −2", "A hole at (−2, 1/4) and a vertical asymptote at x = 2", "A hole at (2, 0) and no vertical asymptote"], "r(x) = (x + 3)(x − 2)/((x + 2)(x − 2)). The x − 2 cancels, leaving (x + 3)/(x + 2), which is 5/4 at x = 2."],
    ["What happens at x = 1 on the graph of r(x) = (x − 1)²/(x − 1)?", "There is a hole at (1, 0)", ["There is a vertical asymptote at x = 1", "There is no break in the graph", "There is a hole at (1, 1)"], "It simplifies to x − 1 for x ≠ 1, so the graph is the line y = x − 1 with the point (1, 0) missing."],
    ["Which function has a hole at x = −4?", "r(x) = (x + 4)(x − 1)/(x + 4)", ["r(x) = (x − 4)(x − 1)/(x − 4)", "r(x) = (x + 1)/(x + 4)", "r(x) = (x + 4)/(x − 1)"], "A hole appears where a factor cancels from the numerator and denominator; here x + 4 cancels."]
  ]],
  ["1.11", "Equivalent Representations of Polynomial and Rational Expressions", [
    ["What is (x³ − 2x² + 4) ÷ (x − 2)?", "x² + 4/(x − 2)", ["x² + 2 + 4/(x − 2)", "x² − 4/(x − 2)", "x²"], "Synthetic division with 2 on 1, −2, 0, 4 gives 1, 0, 0 with remainder 4."],
    ["What is the coefficient of x² in the expansion of (x − 2)⁴?", "24", ["6", "16", "−24"], "The term is C(4, 2) · x² · (−2)² = 6 · 4 · x² = 24x²."],
    ["Which is the complete factorization of 2x³ − 16?", "2(x − 2)(x² + 2x + 4)", ["2(x − 2)³", "(2x − 4)(x² + 4)", "2(x + 2)(x² − 2x + 4)"], "2x³ − 16 = 2(x³ − 8), and x³ − 8 is a difference of cubes: (x − 2)(x² + 2x + 4)."],
    ["What is the remainder when p(x) = x⁴ − 3x + 5 is divided by x + 1?", "9", ["3", "1", "7"], "By the remainder theorem, the remainder is p(−1) = 1 + 3 + 5 = 9."]
  ]],
  ["1.12", "Transformations of Functions", [
    ["The point (2, 5) is on the graph of f. Which point must be on the graph of g(x) = f(x + 3) − 4?", "(−1, 1)", ["(5, 1)", "(−1, 9)", "(5, 9)"], "f(x + 3) shifts left 3 and −4 shifts down 4: (2 − 3, 5 − 4)."],
    ["The point (6, 3) is on the graph of f. Which point must be on the graph of g(x) = −f(2x)?", "(3, −3)", ["(12, −3)", "(3, 3)", "(6, −3)"], "f(2x) compresses horizontally by 1/2 (x = 3), and the negative reflects over the x-axis (y = −3)."],
    ["The graph of f(x) = x² is shifted right 4, stretched vertically by a factor of 3, and then shifted down 2. What is the new function?", "g(x) = 3(x − 4)² − 2", ["g(x) = 3(x + 4)² − 2", "g(x) = (3x − 4)² − 2", "g(x) = 3(x − 4)² + 2"], "Right 4 gives (x − 4)², the stretch multiplies by 3, and down 2 subtracts 2."],
    ["A function f has zeros at x = −1 and x = 5. What are the zeros of g(x) = f(x − 2)?", "x = 1 and x = 7", ["x = −3 and x = 3", "x = −1 and x = 5", "x = 1 and x = 3"], "f(x − 2) shifts the graph right 2, so each zero moves right 2."]
  ]],
  ["1.13", "Function Model Selection and Assumption Articulation", [
    ["A store's monthly sales were 120, 150, 180, and 210 units in months 1–4. Using an appropriate model, what are the predicted sales in month 6?", "270 units", ["240 units", "300 units", "250 units"], "Sales rise by a constant 30 per month, so a linear model fits: 210 + 30 · 2 = 270."],
    ["A ball's height at t = 0, 1, 2, 3, 4 seconds is 0, 48, 64, 48, 0 feet. Which model is most appropriate?", "Quadratic, because the second differences are constant", ["Linear, because the heights change by the same amount", "Exponential, because the heights have a constant ratio", "Quadratic, because the first differences are constant"], "First differences are 48, 16, −16, −48, and second differences are all −32."],
    ["A linear model of algae coverage in a pond predicts 120% coverage after 10 weeks. What does this show about the model?", "Its domain must be restricted, because coverage cannot exceed 100%", ["The pond will be covered 1.2 times", "The model should be linear with a steeper slope", "The algae will grow exponentially after week 10"], "A model must make sense in context; predictions over 100% show it can't be used that far out."],
    ["A town of 5,000 people grows by 3% each year. Which function models the population after t years?", "P(t) = 5000(1.03)ᵗ", ["P(t) = 5000 + 0.03t", "P(t) = 5000(0.03)ᵗ", "P(t) = 5000 + 150t"], "Growing by a constant percent means multiplying by 1.03 each year, which is exponential."]
  ]],
  ["1.14", "Function Model Construction and Application", [
    ["A farmer has 100 m of fence for a rectangular pen. The area is A(w) = w(50 − w), where w is the width. What is the maximum area?", "625 m²", ["2,500 m²", "50 m²", "1,250 m²"], "The vertex is at w = 25, so A = 25 · 25 = 625 m²."],
    ["An open box is made from a 20 cm by 20 cm sheet by cutting squares of side x from each corner. Its volume is V(x) = x(20 − 2x)². What is a reasonable domain for V?", "0 < x < 10", ["0 < x < 20", "x > 0", "0 ≤ x ≤ 5"], "The cut must be positive and 20 − 2x must stay positive, so x < 10."],
    ["At a ticket price of p dollars, a theater sells 500 − 10p tickets. What price maximizes revenue R(p) = p(500 − 10p)?", "$25", ["$50", "$10", "$500"], "R(p) = −10p² + 500p has its vertex at p = −500/(2 · −10) = 25."],
    ["A company's profit is P(x) = −x² + 14x − 24 thousand dollars when x thousand units are sold. At which sales levels does the company break even?", "2,000 and 12,000 units", ["2,000 units only", "7,000 units", "24,000 units"], "−x² + 14x − 24 = 0 gives x² − 14x + 24 = (x − 2)(x − 12) = 0."]
  ]]
]},
{ n: 2, name: "Exponential and Logarithmic Functions", weight: "27–40%", topics: [
  ["2.1", "Change in Arithmetic and Geometric Sequences", [
    ["An arithmetic sequence has a₁ = 7 and common difference −3. What is a₂₀?", "−50", ["−53", "−47", "67"], "a₂₀ = 7 + 19(−3) = −50."],
    ["A geometric sequence has g₁ = 3 and g₄ = 81. What is g₆?", "729", ["243", "2,187", "486"], "r³ = 81/3 = 27, so r = 3 and g₆ = 3 · 3⁵ = 729."],
    ["Maya saves $50 in the first week and $15 more each week than the week before. How much does she save in week 12?", "$215", ["$230", "$180", "$200"], "This is arithmetic: 50 + 11 · 15 = 215."],
    ["A geometric sequence has g₂ = 12 and g₅ = 96. What is g₁?", "6", ["3", "4", "12"], "r³ = 96/12 = 8, so r = 2 and g₁ = 12/2 = 6."]
  ]],
  ["2.2", "Change in Linear and Exponential Functions", [
    ["The table shows f at equally spaced inputs. What type of function is f?", "Exponential", ["Linear", "Quadratic", "Logarithmic"], "Each output is 3 times the one before: a constant ratio means exponential.", { t: "table", title: "Values of f(x)", head: ["x", "0", "1", "2", "3", "4"], rows: [["f(x)", "2", "6", "18", "54", "162"]] }],
    ["An exponential function g passes through (0, 5) and (2, 20). What is g(4)?", "80", ["35", "40", "60"], "g(x) = 5bˣ with 5b² = 20, so b = 2 and g(4) = 5 · 16 = 80."],
    ["Job A pays $40,000 and adds $2,000 per year. Job B pays $40,000 and grows 4% per year. After 10 years, which pays more?", "Job A, by about $790", ["Job B, by about $790", "Job A, by about $20,000", "They pay the same"], "Job A: 40,000 + 20,000 = 60,000. Job B: 40,000(1.04)¹⁰ ≈ 59,210."],
    ["A linear function f increases by 6 every time x increases by 2, and f(1) = 4. What is f(9)?", "28", ["52", "24", "16"], "The slope is 6/2 = 3, so f(9) = 4 + 3 · 8 = 28."]
  ]],
  ["2.3", "Exponential Functions", [
    ["For f(x) = 200(0.75)ˣ, what is f(2)?", "112.5", ["150", "50", "262.5"], "200 · 0.75² = 200 · 0.5625 = 112.5."],
    ["An exponential function f(x) = a · bˣ passes through (0, 6) and (1, 15). What is f(3)?", "93.75", ["37.5", "54", "234.375"], "a = 6 and b = 15/6 = 2.5, so f(3) = 6 · 2.5³ = 93.75."],
    ["Which function is decreasing and has a y-intercept of 4?", "f(x) = 4(0.5)ˣ", ["f(x) = 4(2)ˣ", "f(x) = 0.5(4)ˣ", "f(x) = −4(2)ˣ"], "The base 0.5 is between 0 and 1 (decreasing), and f(0) = 4."],
    ["A $30,000 car loses 15% of its value each year. What is it worth after 3 years?", "$18,423.75", ["$16,500.00", "$25,500.00", "$21,675.00"], "30,000(0.85)³ = 30,000 · 0.614125 = 18,423.75."]
  ]],
  ["2.4", "Exponential Function Manipulation", [
    ["Which expression is equivalent to 4^(x + 1)?", "4 · 4ˣ", ["4ˣ + 4", "4ˣ + 1", "x · 4ˣ"], "By the product property, 4^(x + 1) = 4ˣ · 4¹."],
    ["Which expression is equivalent to 8^(2x/3)?", "2^(2x)", ["2ˣ", "2^(3x)", "4^(3x)"], "8 = 2³, so 8^(2x/3) = 2^(3 · 2x/3) = 2^(2x)."],
    ["An investment grows by the model P(t) = 500(1.2)ᵗ, where t is in years. What is the equivalent quarterly growth factor?", "About 1.0466", ["1.05", "1.3", "About 2.07"], "Each quarter is 1/4 year: 1.2^(1/4) ≈ 1.0466."],
    ["A population is modeled by P(t) = 100e^(0.05t), with t in years. By about what percent does it grow each year?", "5.13%", ["5%", "50%", "105%"], "The annual growth factor is e^0.05 ≈ 1.0513, a 5.13% increase."]
  ]],
  ["2.5", "Exponential Function Context and Data Modeling", [
    ["A drug has a half-life of 6 hours. A patient takes 80 mg. How much remains after 18 hours?", "10 mg", ["20 mg", "40 mg", "26.7 mg"], "18 hours is 3 half-lives: 80 → 40 → 20 → 10."],
    ["A bacteria culture has 500 cells at t = 0 hours and 4,500 cells at t = 2 hours. Which exponential model fits?", "N(t) = 500 · 3ᵗ", ["N(t) = 500 · 9ᵗ", "N(t) = 500 + 2,000t", "N(t) = 500 · 4.5ᵗ"], "500b² = 4,500 gives b² = 9, so b = 3."],
    ["$1,000 is invested at 6% annual interest compounded monthly. What is it worth after 5 years?", "$1,348.85", ["$1,300.00", "$1,338.23", "$1,349.86"], "1,000(1 + 0.06/12)^(60) = 1,000(1.005)⁶⁰ ≈ 1,348.85."],
    ["A regression model for a plant's height is h(x) = 2.1(1.35)ˣ cm, where x is weeks. What does 1.35 mean?", "The height increases by 35% each week", ["The height increases by 1.35 cm each week", "The height starts at 1.35 cm", "The height increases by 135% each week"], "A growth factor of 1.35 means each week's height is 135% of the previous, a 35% increase."]
  ]],
  ["2.6", "Competing Function Model Validation", [
    ["A model predicts 46 for a data point whose actual value is 50. What is the residual?", "4", ["−4", "96", "1.087"], "Residual = actual − predicted = 50 − 46 = 4."],
    ["A linear model's residuals for x = 1 to 6 are 4, 1, −2, −3, −1, 3. What does this suggest?", "A linear model is not appropriate, because the residuals follow a curved pattern", ["The linear model fits well because the residuals add to about 2", "The data are exponential because some residuals are negative", "The model is appropriate because the residuals are small"], "Residuals that go from positive to negative and back form a U shape, showing the data curve."],
    ["In year 10, Model A predicts 180 and Model B predicts 240. The actual value is 235. Which model is more accurate for year 10?", "Model B, because its error is 5 and Model A's is 55", ["Model A, because it predicts a smaller value", "Model B, because it predicts a larger value", "Neither, because both have errors"], "|235 − 240| = 5 and |235 − 180| = 55."],
    ["Two models are fit to the same data. The sum of squared residuals is 12.4 for Model A and 3.1 for Model B. Which statement is best supported?", "Model B fits the data more closely", ["Model A fits the data more closely", "Both models fit equally well", "Model B is exponential"], "A smaller sum of squared residuals means predictions are closer to the actual values."]
  ]],
  ["2.7", "Composition of Functions", [
    ["Let f(x) = 2x + 1 and g(x) = x². What is f(g(3))?", "19", ["49", "13", "7"], "g(3) = 9, and f(9) = 19."],
    ["Let f(x) = √x and g(x) = x − 5. What is the domain of f(g(x))?", "x ≥ 5", ["x ≥ 0", "x ≥ −5", "All real numbers"], "f(g(x)) = √(x − 5) requires x − 5 ≥ 0."],
    ["Using the table, what is f(g(1))?", "4", ["3", "2", "1"], "g(1) = 3, and f(3) = 4.", { t: "table", title: "Values of f and g", head: ["x", "1", "2", "3", "4"], rows: [["f(x)", "2", "1", "4", "3"], ["g(x)", "3", "4", "1", "2"]] }],
    ["h(x) = (3x − 2)⁵ can be written as h(x) = f(g(x)). Which choice works?", "f(x) = x⁵ and g(x) = 3x − 2", ["f(x) = 3x − 2 and g(x) = x⁵", "f(x) = 3x⁵ and g(x) = x − 2", "f(x) = x − 2 and g(x) = 3x⁵"], "The inside function is 3x − 2, and the outside function raises it to the 5th power."]
  ]],
  ["2.8", "Inverse Functions", [
    ["If f(x) = (x − 4)/3, what is f⁻¹(2)?", "10", ["−2/3", "2", "6"], "f⁻¹(x) = 3x + 4, so f⁻¹(2) = 10. Check: f(10) = 2."],
    ["Fahrenheit is F = 1.8C + 32. Use the inverse to find the Celsius temperature when F = 68.", "20°C", ["37.8°C", "154.4°C", "36°C"], "C = (F − 32)/1.8 = 36/1.8 = 20."],
    ["A one-to-one function f has f(2) = 9 and f(5) = 12. What is f⁻¹(12)?", "5", ["1/12", "9", "2"], "f(5) = 12 means f⁻¹(12) = 5."],
    ["f(x) = x² + 1 with domain x ≥ 0. What is f⁻¹(x)?", "√(x − 1)", ["√x − 1", "√(x + 1)", "1/(x² + 1)"], "Solve x = y² + 1 for y ≥ 0: y = √(x − 1)."]
  ]],
  ["2.9", "Logarithmic Expressions", [
    ["What is log₃ 81?", "4", ["3", "27", "9"], "3⁴ = 81."],
    ["What is log₅(1/25)?", "−2", ["2", "−1/2", "1/2"], "5⁻² = 1/25."],
    ["Given log 3 ≈ 0.477, what is log 300?", "About 2.477", ["About 47.7", "About 1.431", "About 0.954"], "log 300 = log 3 + log 100 = 0.477 + 2."],
    ["Between which two consecutive integers is log₂ 50?", "5 and 6", ["4 and 5", "6 and 7", "24 and 25"], "2⁵ = 32 and 2⁶ = 64, and 50 is between them."]
  ]],
  ["2.10", "Inverses of Exponential Functions", [
    ["If f(x) = 5ˣ, what is f⁻¹(125)?", "3", ["25", "1/3", "625"], "f⁻¹(x) = log₅ x, and log₅ 125 = 3."],
    ["Let g be the inverse of f(x) = 2ˣ. What is g(1/8)?", "−3", ["3", "1/3", "−1/3"], "g(x) = log₂ x, and 2⁻³ = 1/8."],
    ["What is the inverse of f(x) = 3 · 2ˣ?", "f⁻¹(x) = log₂(x/3)", ["f⁻¹(x) = log₂(x)/3", "f⁻¹(x) = 3 log₂ x", "f⁻¹(x) = log₃(x/2)"], "Solve x = 3 · 2ʸ: 2ʸ = x/3, so y = log₂(x/3)."],
    ["f(x) = 2ˣ + 3. What is the domain of f⁻¹?", "x > 3", ["x > 0", "All real numbers", "x > −3"], "The range of f is y > 3, and the range of f becomes the domain of f⁻¹."]
  ]],
  ["2.11", "Logarithmic Functions", [
    ["What is the domain of f(x) = log₂(x − 3)?", "x > 3", ["x > 0", "x > −3", "x ≥ 3"], "The argument must be positive: x − 3 > 0."],
    ["For f(x) = log₃ x + 2, what is f(27)?", "5", ["3", "29", "11"], "log₃ 27 = 3, and 3 + 2 = 5."],
    ["Solve log₄ x = 1.5.", "x = 8", ["x = 6", "x = 2.5", "x = 16"], "x = 4^1.5 = (√4)³ = 8."],
    ["For f(x) = log x, what is the average rate of change on [10, 100]?", "1/90", ["1/9", "1", "90"], "(log 100 − log 10)/(100 − 10) = (2 − 1)/90."]
  ]],
  ["2.12", "Logarithmic Function Manipulation", [
    ["What is log₂ 12 − log₂ 3?", "2", ["log₂ 9", "4", "3"], "log₂(12/3) = log₂ 4 = 2."],
    ["Which expression is equivalent to ln(x³√y)?", "3 ln x + (1/2) ln y", ["3 ln x · (1/2) ln y", "ln(3x) + ln(y/2)", "3 ln x − (1/2) ln y"], "ln(x³) + ln(y^(1/2)) = 3 ln x + (1/2) ln y."],
    ["Given log 2 ≈ 0.301 and log 3 ≈ 0.477, what is log 12?", "About 1.079", ["About 0.778", "About 1.431", "About 0.903"], "log 12 = log(2² · 3) = 2(0.301) + 0.477."],
    ["Use the change of base formula to find log₇ 50.", "About 2.010", ["About 7.14", "About 1.69", "About 0.497"], "ln 50 / ln 7 ≈ 3.912/1.946 ≈ 2.010."]
  ]],
  ["2.13", "Exponential and Logarithmic Equations and Inequalities", [
    ["Solve 2^(x + 1) = 32.", "x = 4", ["x = 5", "x = 16", "x = 3"], "32 = 2⁵, so x + 1 = 5."],
    ["Solve 3e^(2x) = 60.", "x = ln(20)/2 ≈ 1.498", ["x = ln(60)/2 ≈ 2.047", "x = ln 20 ≈ 2.996", "x = 10"], "e^(2x) = 20, so 2x = ln 20."],
    ["Solve log₃ x + log₃(x − 8) = 2.", "x = 9", ["x = 9 and x = −1", "x = −1", "x = 1"], "x(x − 8) = 9 gives x² − 8x − 9 = (x − 9)(x + 1) = 0. x = −1 is rejected because log₃(−1) is undefined."],
    ["An investment grows by V(t) = 5(1.08)ᵗ thousand dollars. When does it first exceed $10,000?", "After about 9.01 years", ["After 12.5 years", "After 8 years", "After about 5.5 years"], "1.08ᵗ > 2 gives t > ln 2/ln 1.08 ≈ 9.006."]
  ]],
  ["2.14", "Logarithmic Function Context and Data Modeling", [
    ["pH = −log[H⁺]. What is the pH of a solution with [H⁺] = 3.2 × 10⁻⁵ M?", "About 4.49", ["About 5.49", "3.2", "5"], "−log(3.2 × 10⁻⁵) = 5 − log 3.2 ≈ 5 − 0.505 = 4.49."],
    ["Loudness in decibels is 10 log(I/I₀). If a sound goes from 60 dB to 90 dB, by what factor does its intensity increase?", "1,000", ["30", "1.5", "3"], "An increase of 30 dB means log(I/I₀) goes up by 3, so intensity is multiplied by 10³."],
    ["On the Richter scale, how many times greater is the wave amplitude of a magnitude 6.5 earthquake than a magnitude 4.5 earthquake?", "100", ["2", "20", "1,000"], "A difference of 2 magnitudes means 10² times the amplitude."],
    ["A population is modeled by P(t) = 2,000e^(0.03t). About how many years until it reaches 5,000?", "About 30.5 years", ["About 50 years", "About 25 years", "About 83.3 years"], "e^(0.03t) = 2.5, so t = ln 2.5/0.03 ≈ 30.54."]
  ]],
  ["2.15", "Semi-log Plots", [
    ["A semi-log plot of data (log y versus x) is the line log y = 0.5x + 1. Which model fits the original data?", "y = 10(3.16)ˣ", ["y = 0.5x + 1", "y = 3.16(10)ˣ", "y = 10(0.5)ˣ"], "y = 10^(0.5x + 1) = 10 · (10^0.5)ˣ ≈ 10(3.16)ˣ."],
    ["Data from y = 4 · 3ˣ are plotted as log y (base 10) versus x. What is the slope of the resulting line?", "About 0.477", ["3", "4", "About 0.602"], "log y = log 4 + x log 3, so the slope is log 3 ≈ 0.477."],
    ["The graph shows log y versus x for a data set. What kind of model fits the original data?", "Exponential decay", ["Exponential growth", "Linear", "Logarithmic"], "A decreasing line on a semi-log plot means y is multiplied by a constant less than 1 for each step in x.", { t: "line", title: "Semi-log plot", x: { min: 0, max: 5, ticks: [0, 1, 2, 3, 4, 5], label: "x" }, y: { min: 0, max: 3, ticks: [0, 1, 2, 3], label: "log y" }, series: [{ name: "log y", pts: [[0, 2.8], [1, 2.4], [2, 2], [3, 1.6], [4, 1.2], [5, 0.8]], dots: true }] }],
    ["On a semi-log plot, the line through the data passes through (0, 2) and (4, 1.2), where the vertical axis is log y. Which model fits the data?", "y = 100(0.631)ˣ", ["y = 2(0.8)ˣ", "y = 100(0.8)ˣ", "y = 2 − 0.2x"], "The slope is −0.2, so b = 10^(−0.2) ≈ 0.631, and the intercept 2 gives a = 10² = 100."]
  ]]
]}
);
