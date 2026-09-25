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
    ["On an interval where a function is increasing,", "as the input values increase, the output values increase", ["as the input values increase, the output values decrease", "the output values stay constant", "the graph is always concave up"], "Increasing means larger inputs give larger outputs."],
    ["The graph of f is shown. On which interval is f decreasing?", "(−1, 2)", ["(−3, −1)", "(2, 4)", "(−3, 4)"], "The graph rises until x = −1, falls until x = 2, then rises again.", { t: "line", title: "y = f(x)", x: { min: -3, max: 4, ticks: [-3, -2, -1, 0, 1, 2, 3, 4], label: "x" }, y: { min: -6, max: 6, ticks: [-6, -4, -2, 0, 2, 4, 6], label: "y" }, series: [{ name: "f", pts: [[-3, -4.5], [-2.5, 0.1], [-2, 2.7], [-1.5, 3.9], [-1, 4.2], [-0.5, 3.7], [0, 2.7], [0.5, 1.2], [1, -0.3], [1.5, -1.4], [2, -1.8], [2.5, -1.2], [3, 0.8], [3.5, 4.4], [3.7, 5.8]] }] }],
    ["A relative maximum of a function occurs where the function", "changes from increasing to decreasing", ["changes from decreasing to increasing", "crosses the x-axis", "has a vertical asymptote"], "Just before, outputs rise; just after, they fall."],
    ["On an interval where the rate of change of f is increasing, the graph of f is", "concave up", ["concave down", "linear", "decreasing"], "Concave up means the slopes are getting larger as x increases."]
  ]],
  ["1.2", "Rates of Change", [
    ["What is the average rate of change of f(x) = x² on the interval [1, 4]?", "5", ["3", "15", "16"], "(f(4) − f(1)) / (4 − 1) = (16 − 1) / 3 = 5."],
    ["The average rate of change of a function over [a, b] is the slope of", "the secant line through (a, f(a)) and (b, f(b))", ["the tangent line at x = a", "the x-axis", "the line y = x"], "Average rate of change = Δy/Δx between the two points."],
    ["A car's distance from home is 30 miles at t = 1 hour and 150 miles at t = 3 hours. What is its average rate of change of distance?", "60 miles per hour", ["75 miles per hour", "120 miles per hour", "50 miles per hour"], "(150 − 30) / (3 − 1) = 60 mi/h."],
    ["If the average rate of change of f on [0, 5] is negative, then", "f(5) is less than f(0)", ["f is decreasing on the whole interval", "f(5) is greater than f(0)", "f has no zeros"], "A negative average rate only compares the endpoints; f could rise in between."]
  ]],
  ["1.3", "Rates of Change in Linear and Quadratic Functions", [
    ["The table shows values of a function at equally spaced inputs. What type of function could it be?", "Quadratic", ["Linear", "Exponential", "Cubic only"], "The first differences are 3, 5, 7, 9 and the second differences are all 2. Constant second differences mean quadratic.", { t: "table", title: "Values of g(x)", head: ["x", "0", "1", "2", "3", "4"], rows: [["g(x)", "1", "4", "9", "16", "25"]] }],
    ["For a linear function, the average rate of change over any interval is", "constant", ["increasing", "decreasing", "zero"], "Linear functions have the same slope everywhere."],
    ["For f(x) = −2x² + 8x, the average rates of change over consecutive equal-length intervals", "decrease by the same amount each time", ["stay the same", "increase by the same amount each time", "double each time"], "A quadratic with a negative leading coefficient has rates of change that change at a constant negative rate (it's concave down)."],
    ["A quadratic function is concave up everywhere when", "its leading coefficient is positive", ["its leading coefficient is negative", "its constant term is positive", "it has two real zeros"], "For f(x) = ax² + bx + c, the second differences have the sign of a."]
  ]],
  ["1.4", "Polynomial Functions and Rates of Change", [
    ["What is the degree of f(x) = 4x³ − x⁵ + 2?", "5", ["3", "4", "2"], "The degree is the greatest exponent."],
    ["A polynomial of degree 4 can have at most how many relative extrema?", "3", ["4", "2", "5"], "A degree-n polynomial has at most n − 1 turning points."],
    ["A point of inflection of a polynomial is where the graph", "changes concavity", ["crosses the x-axis", "has a relative maximum", "has a vertical asymptote"], "Concavity switches between up and down, which is where the rate of change is at a max or min."],
    ["A polynomial function has an absolute maximum but no absolute minimum. Which could be its degree and leading coefficient?", "Degree 4, negative leading coefficient", ["Degree 4, positive leading coefficient", "Degree 3, negative leading coefficient", "Degree 5, positive leading coefficient"], "Even degree with a negative leading coefficient falls toward −∞ at both ends, so it has a highest point but no lowest point."]
  ]],
  ["1.5", "Polynomial Functions and Complex Zeros", [
    ["What are the zeros of f(x) = (x − 2)²(x + 3)?", "x = 2 (multiplicity 2) and x = −3", ["x = −2 and x = 3", "x = 2 only", "x = 4 and x = −3"], "Set each factor to zero. (x − 2)² gives x = 2 twice."],
    ["At a zero of even multiplicity, the graph of a polynomial", "touches the x-axis and turns around", ["crosses the x-axis", "has a vertical asymptote", "has a hole"], "The output doesn't change sign there."],
    ["A polynomial with real coefficients has 3 + 2i as a zero. What must also be a zero?", "3 − 2i", ["−3 + 2i", "−3 − 2i", "2 + 3i"], "Non-real zeros of real polynomials come in conjugate pairs."],
    ["How many complex zeros (counting multiplicity) does a degree-5 polynomial have?", "Exactly 5", ["At most 4", "At least 6", "Exactly 1"], "By the Fundamental Theorem of Algebra, a degree-n polynomial has exactly n complex zeros counting multiplicity."]
  ]],
  ["1.6", "Polynomial Functions and End Behavior", [
    ["What is the end behavior of f(x) = −3x⁴ + x?", "As x → ±∞, f(x) → −∞", ["As x → ±∞, f(x) → +∞", "As x → ∞, f(x) → ∞; as x → −∞, f(x) → −∞", "f(x) → 0"], "Even degree, negative leading coefficient: both ends go down."],
    ["What is the end behavior of f(x) = 2x³ − 5x²?", "As x → ∞, f(x) → ∞; as x → −∞, f(x) → −∞", ["As x → ±∞, f(x) → ∞", "As x → ±∞, f(x) → −∞", "As x → ∞, f(x) → −∞; as x → −∞, f(x) → ∞"], "Odd degree with a positive leading coefficient rises to the right and falls to the left."],
    ["The end behavior of a polynomial is determined by", "its leading term", ["its constant term", "its smallest-degree term", "its number of zeros"], "For large |x|, the highest-degree term dominates."],
    ["An even function satisfies", "f(−x) = f(x) for all x, so its graph is symmetric about the y-axis", ["f(−x) = −f(x)", "f(x) = 0 at x = 0", "f(x + 1) = f(x)"], "Example: f(x) = x⁴ − 2x²."]
  ]],
  ["1.7", "Rational Functions and End Behavior", [
    ["What is the horizontal asymptote of r(x) = (3x² + 1) / (x² − 4)?", "y = 3", ["y = 0", "y = −1/4", "There is none"], "Equal degrees: the asymptote is the ratio of leading coefficients, 3/1."],
    ["What is the end behavior of r(x) = (2x) / (x² + 1)?", "r(x) → 0 as x → ±∞", ["r(x) → 2 as x → ±∞", "r(x) → ∞ as x → ∞", "r(x) → −2 as x → ∞"], "The denominator has higher degree, so y = 0 is a horizontal asymptote."],
    ["A rational function whose numerator's degree is exactly one more than its denominator's has", "a slant (oblique) asymptote", ["a horizontal asymptote at y = 0", "no end behavior", "a vertical asymptote at every zero"], "Dividing gives a linear quotient that the graph approaches."],
    ["What is the slant asymptote of r(x) = (x² + 1) / x?", "y = x", ["y = 1", "y = 0", "x = 0"], "(x² + 1)/x = x + 1/x, and 1/x → 0."]
  ]],
  ["1.8", "Rational Functions and Zeros", [
    ["What are the zeros of r(x) = (x − 3)(x + 1) / (x + 2)?", "x = 3 and x = −1", ["x = −2", "x = 3, −1, and −2", "x = −3 and x = 1"], "Zeros come from numerator factors that don't cancel with the denominator."],
    ["Why is x = 2 not a zero of r(x) = (x − 2) / [(x − 2)(x + 5)]?", "The factor cancels, so x = 2 is a hole, not a zero", ["x = 2 makes the numerator positive", "x = 2 is a vertical asymptote", "r has no zeros at all because it is rational"], "r(2) is undefined, so it can't be a zero."],
    ["Solve (x − 1) / (x + 3) ≥ 0.", "x < −3 or x ≥ 1", ["−3 < x ≤ 1", "x ≥ 1 only", "x > −3"], "Sign changes at x = −3 (excluded) and x = 1 (included). Test intervals: positive for x < −3 and x > 1."],
    ["A rational function has a zero at x = a when", "the numerator is 0 at a and the denominator is not", ["the denominator is 0 at a", "both are 0 at a", "the function is undefined at a"], "Otherwise the function isn't defined there."]
  ]],
  ["1.9", "Rational Functions and Vertical Asymptotes", [
    ["What are the vertical asymptotes of r(x) = (x + 1) / (x² − 9)?", "x = 3 and x = −3", ["x = −1", "y = 0", "x = 9"], "The denominator is zero at ±3 and the numerator is not."],
    ["The graph of r is shown. What is the vertical asymptote?", "x = 2", ["x = 0", "y = 1", "x = −2"], "The graph shoots up and down near x = 2 and never reaches it.", { t: "line", title: "y = r(x)", x: { min: -2, max: 6, ticks: [-2, -1, 0, 1, 2, 3, 4, 5, 6], label: "x" }, y: { min: -6, max: 8, ticks: [-6, -4, -2, 0, 2, 4, 6, 8], label: "y" }, series: [{ name: "r(x)", pts: [[-2, 0.75], [-1, 0.67], [0, 0.5], [1, 0], [1.5, -1], [1.75, -3], [1.85, -5.67]] }, { name: "", pts: [[2.15, 7.67], [2.25, 5], [2.5, 3], [3, 2], [4, 1.5], [5, 1.33], [6, 1.25]], k: 1 }] }],
    ["Near a vertical asymptote x = a, the output values of a rational function", "grow without bound in absolute value", ["approach 0", "approach a", "stay constant"], "As x → a, |r(x)| → ∞."],
    ["For r(x) = 1/(x − 4)², what happens as x → 4 from either side?", "r(x) → +∞ from both sides", ["r(x) → −∞ from both sides", "r(x) → +∞ from the right and −∞ from the left", "r(x) → 0"], "The squared factor keeps the denominator positive on both sides."]
  ]],
  ["1.10", "Rational Functions and Holes", [
    ["Where does r(x) = (x² − 1) / (x − 1) have a hole?", "At (1, 2)", ["At x = −1", "At (1, 0)", "It has no hole"], "(x − 1)(x + 1)/(x − 1) = x + 1 for x ≠ 1, so the hole is at x = 1, y = 2."],
    ["A hole in a rational function's graph happens when", "a factor cancels from the numerator and denominator", ["the numerator is zero", "the denominator has a factor that doesn't cancel", "the degrees are equal"], "The function is undefined there, but the output approaches a finite value."],
    ["r(x) = (x − 2)² / (x − 2) has at x = 2", "a hole at (2, 0)", ["a vertical asymptote", "a zero at x = 2", "no special feature"], "It simplifies to x − 2 for x ≠ 2, so the hole's y-value is 0. The function is still undefined at x = 2."],
    ["r(x) = (x − 3) / (x − 3)² has at x = 3", "a vertical asymptote", ["a hole", "a zero", "a horizontal asymptote"], "After canceling, a factor of (x − 3) remains in the denominator."]
  ]],
  ["1.11", "Equivalent Representations of Polynomial and Rational Expressions", [
    ["Which is equivalent to (x² − 5x + 6) / (x − 2) for x ≠ 2?", "x − 3", ["x + 3", "x − 2", "x² − 3"], "x² − 5x + 6 = (x − 2)(x − 3)."],
    ["Which is a factored form of x³ − 4x?", "x(x − 2)(x + 2)", ["x(x − 4)", "(x − 2)³", "x²(x − 4)"], "Factor out x, then use the difference of squares."],
    ["What is the coefficient of x² in (x + 2)⁴?", "24", ["6", "16", "4"], "By the binomial theorem, C(4, 2)·x²·2² = 6 · 4 = 24."],
    ["Dividing p(x) = x³ + 2x − 5 by (x − 1) gives a remainder of", "−2", ["0", "−5", "3"], "By the Remainder Theorem, the remainder is p(1) = 1 + 2 − 5 = −2."]
  ]],
  ["1.12", "Transformations of Functions", [
    ["The graph of g(x) = f(x − 3) + 2 is the graph of f shifted", "right 3 units and up 2 units", ["left 3 and up 2", "right 3 and down 2", "left 3 and down 2"], "Replacing x with x − 3 shifts right; adding 2 shifts up."],
    ["The graph of g(x) = −f(x) is the graph of f", "reflected over the x-axis", ["reflected over the y-axis", "shifted down", "stretched vertically"], "Every output changes sign."],
    ["The graph of g(x) = f(2x) is the graph of f", "compressed horizontally by a factor of 1/2", ["stretched horizontally by a factor of 2", "stretched vertically by 2", "shifted left 2"], "Each input is reached twice as fast."],
    ["If f has domain [0, 4], what is the domain of g(x) = f(x + 1)?", "[−1, 3]", ["[1, 5]", "[0, 4]", "[0, 3]"], "x + 1 must be in [0, 4], so x is in [−1, 3]."]
  ]],
  ["1.13", "Function Model Selection and Assumption Articulation", [
    ["A data set's output values have roughly constant first differences over equal input intervals. Which model fits best?", "Linear", ["Quadratic", "Exponential", "Cubic"], "Constant rate of change is the hallmark of a linear model."],
    ["A ball's height rises and then falls over time. Which model is most appropriate?", "Quadratic", ["Linear", "Exponential", "Logarithmic"], "A quadratic has one turning point and constant second differences, like projectile motion."],
    ["A model for the number of people in a line should use which domain restriction?", "Whole numbers greater than or equal to 0", ["All real numbers", "Negative numbers", "Only irrational numbers"], "The context limits the inputs and outputs that make sense."],
    ["A rational function could model average cost per item because", "fixed costs are spread over more items, so the average approaches a constant", ["costs always grow exponentially", "cost is always linear", "average cost is periodic"], "C(x) = (fixed + vx)/x approaches the variable cost v as x grows."]
  ]],
  ["1.14", "Function Model Construction and Application", [
    ["A quadratic model passes through (0, 5), (1, 6), and (2, 9). What is it?", "y = x² + 5", ["y = x + 5", "y = 2x² − x + 5", "y = x² + x + 5"], "c = 5; a + b = 1; 4a + 2b = 4 → a = 1, b = 0."],
    ["A cubic regression predicts negative sales for a future month. The best interpretation is that", "the model is not valid that far outside the data", ["sales will be negative", "the data are wrong", "a linear model must be exact"], "Extrapolating a polynomial far beyond the data can give unrealistic results."],
    ["A rectangle has perimeter 20 m. Which function gives its area in terms of its width w?", "A(w) = w(10 − w)", ["A(w) = 20w", "A(w) = w(20 − w)", "A(w) = w²/20"], "Length = 10 − w, so area = w(10 − w)."],
    ["Using A(w) = w(10 − w), what width maximizes the area?", "5 m", ["10 m", "2.5 m", "20 m"], "The vertex of this downward parabola is halfway between the zeros 0 and 10."]
  ]]
]},
{ n: 2, name: "Exponential and Logarithmic Functions", weight: "27–40%", topics: [
  ["2.1", "Change in Arithmetic and Geometric Sequences", [
    ["What is the 10th term of the arithmetic sequence 3, 7, 11, …?", "39", ["43", "40", "35"], "aₙ = 3 + 4(n − 1) = 3 + 36 = 39."],
    ["What is the 6th term of the geometric sequence 2, 6, 18, …?", "486", ["162", "1,458", "36"], "gₙ = 2 · 3ⁿ⁻¹; g₆ = 2 · 3⁵ = 486."],
    ["A geometric sequence has g₁ = 5 and g₃ = 45. Which could be its common ratio?", "3 (or −3)", ["9", "40", "15"], "g₃ = g₁r² → r² = 9 → r = ±3."],
    ["Arithmetic sequences change by a constant", "difference, like linear functions", ["ratio, like exponential functions", "percentage", "exponent"], "Geometric sequences change by a constant ratio, like exponential functions."]
  ]],
  ["2.2", "Change in Linear and Exponential Functions", [
    ["The table shows f at equally spaced inputs. What type of function is f?", "Exponential", ["Linear", "Quadratic", "Logarithmic"], "Each output is 3 times the one before: a constant ratio means exponential.", { t: "table", title: "Values of f(x)", head: ["x", "0", "1", "2", "3", "4"], rows: [["f(x)", "2", "6", "18", "54", "162"]] }],
    ["Over equal-length input intervals, exponential functions have output values that change", "by a constant proportion", ["by a constant amount", "by a constant second difference", "by zero"], "For f(x) = abˣ, adding 1 to x multiplies f by b."],
    ["A linear function f and an exponential function g both pass through (0, 2) and (1, 6). What is g(3)?", "54", ["14", "18", "162"], "g(x) = 2 · 3ˣ, so g(3) = 54. (f(3) = 14.)"],
    ["For large enough x, an increasing exponential function will always", "exceed any increasing linear function", ["stay below every linear function", "equal a linear function", "stop increasing"], "Exponential growth eventually outpaces any constant rate."]
  ]],
  ["2.3", "Exponential Functions", [
    ["Which function shows exponential decay?", "f(x) = 5(0.8)ˣ", ["f(x) = 5(1.2)ˣ", "f(x) = 0.8x + 5", "f(x) = 5x^0.8"], "In f(x) = abˣ with a > 0, decay happens when 0 < b < 1."],
    ["What is the horizontal asymptote of f(x) = 3 · 2ˣ − 4?", "y = −4", ["y = 0", "y = 3", "x = −4"], "3 · 2ˣ → 0 as x → −∞, so f(x) → −4."],
    ["The graph of f(x) = abˣ passes through (0, 4). What is a?", "4", ["0", "1", "It depends on b"], "f(0) = ab⁰ = a."],
    ["For f(x) = 2(3)ˣ, which statement about concavity is true?", "It is concave up everywhere", ["It is concave down everywhere", "It changes concavity at x = 0", "It is linear"], "Growth factor greater than 1 with a > 0 gives an increasing, concave up graph."]
  ]],
  ["2.4", "Exponential Function Manipulation", [
    ["Which is equivalent to 2ˣ⁺³?", "8 · 2ˣ", ["2ˣ + 8", "6 · 2ˣ", "2ˣ + 3"], "2ˣ⁺³ = 2ˣ · 2³."],
    ["Which is equivalent to 9ˣ?", "3²ˣ", ["3ˣ⁺²", "(3ˣ)³", "18ˣ"], "9 = 3², so 9ˣ = (3²)ˣ = 3²ˣ."],
    ["A population doubles every 5 years: P(t) = P₀ · 2^(t/5). What is its approximate annual growth factor?", "2^(1/5) ≈ 1.149", ["2/5 = 0.4", "5/2 = 2.5", "2⁵ = 32"], "P₀ · 2^(t/5) = P₀ · (2^(1/5))ᵗ."],
    ["Which is equivalent to 4^(1/2)?", "2", ["8", "1/2", "16"], "b^(1/n) is the nth root: √4 = 2."]
  ]],
  ["2.5", "Exponential Function Context and Data Modeling", [
    ["A $1,000 investment earns 5% interest compounded yearly. Which models its value after t years?", "V(t) = 1,000(1.05)ᵗ", ["V(t) = 1,000(0.05)ᵗ", "V(t) = 1,000 + 0.05t", "V(t) = 1,000(1.5)ᵗ"], "Each year the value is multiplied by 1 + 0.05."],
    ["A car loses 15% of its value each year. What is its yearly growth factor?", "0.85", ["0.15", "1.15", "−0.15"], "Keeping 85% each year means multiplying by 0.85."],
    ["With continuous compounding at rate r, an amount A₀ grows to", "A₀e^(rt)", ["A₀(1 + r)", "A₀ + rt", "A₀r^t"], "Continuous growth uses base e."],
    ["A bacteria culture grows from 100 to 400 in 6 hours. If growth is exponential, how many are there after 3 hours?", "200", ["250", "150", "300"], "The count multiplies by 4 in 6 hours, so by √4 = 2 in 3 hours."]
  ]],
  ["2.6", "Competing Function Model Validation", [
    ["A residual plot for a model shows a clear U-shaped pattern. This suggests", "the model is not appropriate for the data", ["the model fits perfectly", "the data are linear", "there are no errors"], "A good model's residuals look randomly scattered around 0."],
    ["A residual is calculated as", "actual value − predicted value", ["predicted − actual", "actual × predicted", "predicted ÷ actual"], "Positive residuals mean the model underestimated."],
    ["A model gives a residual of −3 at x = 5. This means the model", "overestimated the actual value by 3", ["underestimated by 3", "was exact", "predicted −3"], "actual − predicted = −3 → predicted is 3 more than actual."],
    ["Two models fit a data set. Model A's residuals are random and small; Model B's show a curved pattern. Which is more appropriate?", "Model A", ["Model B", "Both equally", "Neither can be judged"], "A curved residual pattern means Model B misses a systematic trend."]
  ]],
  ["2.7", "Composition of Functions", [
    ["If f(x) = x² and g(x) = x + 3, what is f(g(2))?", "25", ["7", "10", "13"], "g(2) = 5, then f(5) = 25."],
    ["If f(x) = 2x and g(x) = x − 1, what is g(f(x))?", "2x − 1", ["2x − 2", "2(x − 1)", "x − 2"], "Put f(x) into g: 2x − 1."],
    ["Using the table, what is f(g(1))?", "4", ["3", "2", "1"], "g(1) = 3, and f(3) = 4.", { t: "table", title: "Values of f and g", head: ["x", "1", "2", "3", "4"], rows: [["f(x)", "2", "1", "4", "3"], ["g(x)", "3", "4", "1", "2"]] }],
    ["Is function composition commutative in general?", "No; f(g(x)) usually differs from g(f(x))", ["Yes, always", "Only for linear functions", "Only when f = g"], "Example: f(x) = x², g(x) = x + 1: (x + 1)² ≠ x² + 1."]
  ]],
  ["2.8", "Inverse Functions", [
    ["What is the inverse of f(x) = 3x − 6?", "f⁻¹(x) = (x + 6) / 3", ["f⁻¹(x) = 3x + 6", "f⁻¹(x) = (x − 6) / 3", "f⁻¹(x) = 1/(3x − 6)"], "Swap x and y and solve: x = 3y − 6 → y = (x + 6)/3."],
    ["The graph of f⁻¹ is the reflection of the graph of f over", "the line y = x", ["the x-axis", "the y-axis", "the origin"], "Inverses swap inputs and outputs."],
    ["A function has an inverse function when it is", "one-to-one (each output comes from exactly one input)", ["always increasing and decreasing", "even", "periodic"], "Otherwise the inverse wouldn't be a function."],
    ["If f(2) = 7, then f⁻¹(7) =", "2", ["7", "1/7", "−2"], "The inverse undoes f."]
  ]],
  ["2.9", "Logarithmic Expressions", [
    ["What is log₂ 32?", "5", ["16", "6", "1/5"], "2⁵ = 32."],
    ["What is log 0.001 (base 10)?", "−3", ["3", "−1/3", "0.001"], "10⁻³ = 0.001."],
    ["What is ln(e⁴)?", "4", ["e⁴", "1/4", "4e"], "ln is the logarithm with base e."],
    ["log_b a = c means", "b^c = a", ["a^c = b", "c^b = a", "b · c = a"], "A logarithm is an exponent."]
  ]],
  ["2.10", "Inverses of Exponential Functions", [
    ["What is the inverse of f(x) = 5ˣ?", "f⁻¹(x) = log₅ x", ["f⁻¹(x) = x⁵", "f⁻¹(x) = 5/x", "f⁻¹(x) = ln 5x"], "Exponential and logarithmic functions with the same base are inverses."],
    ["What is the inverse of f(x) = 2 · eˣ?", "f⁻¹(x) = ln(x / 2)", ["f⁻¹(x) = 2 ln x", "f⁻¹(x) = e^(x/2)", "f⁻¹(x) = ln x − 2"], "x = 2eʸ → eʸ = x/2 → y = ln(x/2)."],
    ["Since the range of f(x) = bˣ is (0, ∞), the domain of log_b x is", "(0, ∞)", ["(−∞, ∞)", "[0, ∞)", "(−∞, 0)"], "Domain and range swap for inverses."],
    ["What is 3^(log₃ 8)?", "8", ["3", "24", "log 8"], "Composing inverses returns the input."]
  ]],
  ["2.11", "Logarithmic Functions", [
    ["What is the vertical asymptote of f(x) = log(x − 2)?", "x = 2", ["x = 0", "y = 2", "x = −2"], "The argument must be positive: x > 2."],
    ["The graph of f(x) = ln x is", "increasing and concave down", ["increasing and concave up", "decreasing and concave down", "decreasing and concave up"], "It keeps rising, but more and more slowly."],
    ["What is the x-intercept of f(x) = log₃ x?", "(1, 0)", ["(0, 1)", "(3, 0)", "It has none"], "log₃ 1 = 0."],
    ["As x → 0⁺, log₂ x approaches", "−∞", ["0", "∞", "1"], "Small positive inputs give large negative exponents."]
  ]],
  ["2.12", "Logarithmic Function Manipulation", [
    ["Which is equivalent to log 20 + log 5?", "2", ["log 25", "log 4", "1"], "log 20 + log 5 = log 100 = 2."],
    ["Which is equivalent to ln(x³ / y)?", "3 ln x − ln y", ["ln 3x − ln y", "3 ln x + ln y", "(ln x)³ / ln y"], "Use the quotient and power rules."],
    ["Which is equivalent to log₂ 7 (change of base)?", "ln 7 / ln 2", ["ln 2 / ln 7", "ln 7 − ln 2", "7 / 2"], "log_b a = log a / log b in any common base."],
    ["log₄ 64 − log₄ 4 equals", "2", ["60", "16", "3"], "log₄ (64/4) = log₄ 16 = 2."]
  ]],
  ["2.13", "Exponential and Logarithmic Equations and Inequalities", [
    ["Solve 3ˣ = 81.", "x = 4", ["x = 27", "x = 3", "x = 9"], "81 = 3⁴."],
    ["Solve 2eˣ = 10.", "x = ln 5", ["x = ln 10", "x = 5", "x = 2 ln 5"], "eˣ = 5, so x = ln 5."],
    ["Solve log₂(x + 1) = 3.", "x = 7", ["x = 8", "x = 5", "x = 2"], "x + 1 = 2³ = 8."],
    ["Solve log x + log(x − 3) = 1.", "x = 5", ["x = −2 and x = 5", "x = −2", "x = 10"], "log(x(x − 3)) = 1 → x² − 3x − 10 = 0 → x = 5 or −2; x = −2 is outside the domain."]
  ]],
  ["2.14", "Logarithmic Function Context and Data Modeling", [
    ["The pH scale is pH = −log[H⁺]. A solution with pH 3 has how many times the [H⁺] of a solution with pH 5?", "100 times", ["2 times", "10 times", "1,000 times"], "Each unit is a factor of 10: 10² = 100."],
    ["An earthquake of magnitude 7 releases shaking amplitude how many times greater than one of magnitude 5?", "100 times", ["2 times", "20 times", "1,000 times"], "The Richter scale is base-10 logarithmic in amplitude."],
    ["A logarithmic model is most appropriate for data where the output", "increases quickly at first and then more and more slowly", ["doubles at a constant rate", "increases at a constant rate", "repeats periodically"], "Logarithmic growth is increasing and concave down."],
    ["How long does it take $500 to grow to $1,000 at 8% per year compounded yearly?", "t = ln 2 / ln 1.08 ≈ 9 years", ["t = 2 / 0.08 = 25 years", "t = 8 years", "t = 500 / 0.08 years"], "Solve 1.08ᵗ = 2 with logarithms."]
  ]],
  ["2.15", "Semi-log Plots", [
    ["On a semi-log plot (log y versus x), data from an exponential function appear", "linear", ["curved upward", "periodic", "as a horizontal line only"], "log(abˣ) = log a + x log b is linear in x."],
    ["The semi-log plot of a data set is a line with slope 0.30 and y-intercept 1 (base 10). Which exponential model fits?", "y = 10 · 2ˣ", ["y = 0.30 · 10ˣ", "y = 2 · 10ˣ", "y = 1 · 0.3ˣ"], "log y = 1 + 0.30x → y = 10¹ · (10^0.30)ˣ ≈ 10 · 2ˣ."],
    ["The graph shows log y versus x for a data set. What kind of model fits the original data?", "Exponential decay", ["Exponential growth", "Linear", "Logarithmic"], "A decreasing line on a semi-log plot means y is multiplied by a constant less than 1 for each step in x.", { t: "line", title: "Semi-log plot", x: { min: 0, max: 5, ticks: [0, 1, 2, 3, 4, 5], label: "x" }, y: { min: 0, max: 3, ticks: [0, 1, 2, 3], label: "log y" }, series: [{ name: "log y", pts: [[0, 2.8], [1, 2.4], [2, 2], [3, 1.6], [4, 1.2], [5, 0.8]], dots: true }] }],
    ["Why are semi-log plots useful?", "They make it easy to check whether data are exponential and to find the growth factor", ["They remove all error from data", "They turn every function into a line", "They only work for linear data"], "A straight semi-log plot confirms an exponential model; its slope gives log b."]
  ]]
]}
);
