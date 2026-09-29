// AP Precalculus: free-response questions, one per CED topic (Claude version only).
// Each topic: [stimulus, [[part prompt, rubric], ...]]. Every part is worth 1 point; Claude grades only against the rubric.
// Equivalent exact or decimal forms (to 3 decimal places) earn the point unless the part asks for a specific form.
window.AP_FRQ = window.AP_FRQ || {};
AP_FRQ.pc = {
"1.1": ["Let f(x) = x² − 4x + 3.", [
  ["Find the zeros of f.", "Earns the point for x = 1 and x = 3 (factoring (x − 1)(x − 3)). Both needed."],
  ["Identify the intervals on which f is decreasing and increasing.", "Earns the point for decreasing on (−∞, 2) and increasing on (2, ∞). Accept closed endpoints at 2."],
  ["Describe how the output values change as x increases from 0 to 5, including the minimum value.", "Earns the point for describing that f decreases from 3 to a minimum of −1 at x = 2, then increases to 8 at x = 5."]
]],
"1.2": ["Let f(x) = x³.", [
  ["Find the average rate of change of f on the interval [1, 3].", "Earns the point for 13 ((27 − 1) / 2)."],
  ["Interpret the average rate of change on [1, 3] as the slope of a line.", "Earns the point for interpreting it as the slope of the secant line through (1, 1) and (3, 27)."],
  ["Explain whether the rate of change of f at x = 3 is greater than or less than 13, using the shape of the graph.", "Earns the point for greater than 13, because f is concave up for x > 0, so the rate of change is increasing over [1, 3] and is largest at the right end."]
]],
"1.3": ["Let f(x) = 2x² and g(x) = 3x + 1.", [
  ["Find the average rates of change of f on [0, 1], [1, 2], and [2, 3].", "Earns the point for 2, 6, and 10. All three needed."],
  ["Describe the pattern in the rates of change of f, and what it shows about quadratic functions.", "Earns the point for describing that the rates increase by a constant amount (4) over equal intervals; for a quadratic, average rates of change over consecutive equal-length intervals change at a constant rate (linear rate of change)."],
  ["Describe the rate of change of g and explain why.", "Earns the point for describing a constant rate of change of 3 because g is linear (constant slope)."]
]],
"1.4": ["Let f(x) = x³ − 3x.", [
  ["Identify the x-value where f has a relative maximum and give the maximum value.", "Earns the point for x = −1 with f(−1) = 2."],
  ["Identify the x-value where f has a relative minimum and give the minimum value.", "Earns the point for x = 1 with f(1) = −2."],
  ["Explain what happens to the rate of change of f at the point of inflection x = 0.", "Earns the point for explaining that the rate of change switches from decreasing to increasing (concave down to concave up) at x = 0."]
]],
"1.5": ["Let p(x) = x³ − x² + 4x − 4.", [
  ["Factor p(x) completely over the real numbers.", "Earns the point for (x − 1)(x² + 4)."],
  ["Find all zeros of p, including complex zeros.", "Earns the point for x = 1, 2i, and −2i."],
  ["Explain why a polynomial with real coefficients that has 2i as a zero must also have −2i as a zero.", "Earns the point for explaining that non-real zeros of polynomials with real coefficients come in complex conjugate pairs."]
]],
"1.6": ["Let f(x) = −2x⁴ + x³ − 5 and g(x) = 3x⁵ − x.", [
  ["Describe the end behavior of f.", "Earns the point for as x → ∞, f(x) → −∞, and as x → −∞, f(x) → −∞."],
  ["Describe the end behavior of g.", "Earns the point for as x → ∞, g(x) → ∞, and as x → −∞, g(x) → −∞."],
  ["Explain why the leading term determines end behavior.", "Earns the point for explaining that for large |x|, the highest-degree term grows much faster than the other terms, so it dominates the value."]
]],
"1.7": ["Consider r(x) = (3x² + 1)/(x² − 4) and s(x) = (2x)/(x² + 1).", [
  ["Find the horizontal asymptote of r.", "Earns the point for y = 3 (ratio of leading coefficients; equal degrees)."],
  ["Find the horizontal asymptote of s.", "Earns the point for y = 0 (degree of numerator less than degree of denominator)."],
  ["Describe the end behavior of t(x) = x³/(x² + 1) as x → ∞.", "Earns the point for t(x) → ∞ (numerator degree is larger; slant asymptote y = x also acceptable)."]
]],
"1.8": ["Let r(x) = (x² − 9)/(x + 1).", [
  ["Find the zeros of r.", "Earns the point for x = 3 and x = −3."],
  ["Explain why x = −1 is not a zero of r.", "Earns the point for explaining that the denominator is zero there, so r is undefined (vertical asymptote)."],
  ["Determine the sign of r(x) on the interval (−1, 3).", "Earns the point for negative (e.g., r(0) = −9)."]
]],
"1.9": ["Let r(x) = (x + 2)/((x − 1)(x + 3)).", [
  ["Identify the vertical asymptotes of r.", "Earns the point for x = 1 and x = −3."],
  ["Describe the behavior of r(x) as x approaches 1 from the right.", "Earns the point for r(x) → ∞ (numerator positive 3, denominator positive and approaching 0)."],
  ["Explain why x = −2 is not a vertical asymptote.", "Earns the point for explaining that the numerator is 0 at x = −2 while the denominator is nonzero, so it's a zero (x-intercept)."]
]],
"1.10": ["Let r(x) = (x² − 4)/(x − 2).", [
  ["Identify the x-value where r has a hole.", "Earns the point for x = 2."],
  ["Find the coordinates of the hole.", "Earns the point for (2, 4)."],
  ["Explain why there is a hole rather than a vertical asymptote at x = 2.", "Earns the point for explaining that the factor (x − 2) cancels from numerator and denominator (same multiplicity), so the limit exists."]
]],
"1.11": ["Rewrite the expressions in equivalent forms.", [
  ["Factor x³ − 8.", "Earns the point for (x − 2)(x² + 2x + 4)."],
  ["Divide (x² + 3x + 5) by (x + 1), writing the result as a quotient plus remainder.", "Earns the point for x + 2 + 3/(x + 1)."],
  ["Expand (x + 1)³.", "Earns the point for x³ + 3x² + 3x + 1."]
]],
"1.12": ["The point (1, 4) is on the graph of f. Let g(x) = 2f(x − 3) + 1.", [
  ["Describe the transformations from f to g.", "Earns the point for horizontal shift right 3, vertical dilation by factor 2, vertical shift up 1. All three needed."],
  ["Find the point on g that corresponds to (1, 4).", "Earns the point for (4, 9)."],
  ["Write h(x) that reflects f over the x-axis and shifts it left 2.", "Earns the point for h(x) = −f(x + 2)."]
]],
"1.13": ["Data: x = 0, 1, 2, 3, 4 gives y = 2, 5, 10, 17, 26. Another dataset gives y = 3, 6, 12, 24, 48.", [
  ["Identify the type of function that best models the first dataset, and justify.", "Earns the point for quadratic, because second differences are constant (2)."],
  ["Identify the type of function that best models the second dataset, and justify.", "Earns the point for exponential, because consecutive outputs have a constant ratio (2)."],
  ["Describe one assumption made when using a model to predict values beyond the data.", "Earns the point for describing that the pattern continues beyond the observed data; conditions stay the same."]
]],
"1.14": ["A ball's height is h(t) = −16t² + 64t + 5, in feet, t seconds after launch.", [
  ["Find the time when the ball reaches its maximum height.", "Earns the point for t = 2 seconds."],
  ["Find the maximum height.", "Earns the point for 69 feet."],
  ["Describe an appropriate domain for this model in context.", "Earns the point for describing t from 0 until the ball hits the ground (about 4.08 s); negative times and times after landing don't make sense."]
]],
"2.1": ["An arithmetic sequence has a₁ = 5 and common difference 3. A geometric sequence has g₁ = 2 and common ratio 3.", [
  ["Find a₁₀.", "Earns the point for 32."],
  ["Find g₅.", "Earns the point for 162."],
  ["Explain how arithmetic and geometric sequences change differently.", "Earns the point for explaining that arithmetic sequences change by adding a constant, while geometric sequences change by multiplying by a constant."]
]],
"2.2": ["A table shows x = 0, 1, 2, 3 and f(x) = 4, 12, 36, 108.", [
  ["Explain whether f is linear or exponential.", "Earns the point for exponential, because outputs have a constant ratio (3) over equal intervals."],
  ["Write an expression for f(x).", "Earns the point for f(x) = 4 · 3ˣ."],
  ["Describe how a linear function's outputs change over equal-length input intervals.", "Earns the point for describing that they change by equal differences."]
]],
"2.3": ["Let f(x) = 5(0.8)ˣ.", [
  ["Identify whether f shows exponential growth or decay, and justify.", "Earns the point for decay, because the base 0.8 is between 0 and 1."],
  ["Identify the y-intercept and horizontal asymptote.", "Earns the point for y-intercept (0, 5) and horizontal asymptote y = 0."],
  ["Describe the concavity of f.", "Earns the point for concave up."]
]],
"2.4": ["Rewrite each exponential expression.", [
  ["Rewrite 2^(x + 3) as a constant times 2ˣ.", "Earns the point for 8 · 2ˣ."],
  ["Rewrite 9ˣ as a power of 3.", "Earns the point for 3^(2x)."],
  ["Rewrite (1/2)ˣ using a negative exponent.", "Earns the point for 2^(−x)."]
]],
"2.5": ["A town has 1,200 people and grows 4% per year.", [
  ["Write a model P(t) for the population after t years.", "Earns the point for P(t) = 1200(1.04)ᵗ."],
  ["Find the population after 10 years.", "Earns the point for about 1,776 (1,776.29)."],
  ["Find the equivalent monthly growth factor.", "Earns the point for about 1.00327 (1.04^(1/12))."]
]],
"2.6": ["A researcher fits a linear model and an exponential model to data. The residual plot for the linear model shows a U-shaped pattern; the exponential model's residuals are scattered randomly.", [
  ["Define a residual.", "Earns the point for actual value minus predicted value."],
  ["Explain which model is more appropriate.", "Earns the point for the exponential model because its residuals show no pattern, while the U-shape means the linear model systematically misses."],
  ["Describe one other way to compare the models.", "Earns the point for describing comparing error sizes (sum of squared residuals), checking predictions, or comparing to context."]
]],
"2.7": ["Let f(x) = x² + 1 and g(x) = 2x − 3.", [
  ["Find f(g(2)).", "Earns the point for 2."],
  ["Find an expression for g(f(x)).", "Earns the point for 2x² − 1."],
  ["Find an expression for f(g(x)), and explain whether composition is commutative.", "Earns the point for 4x² − 12x + 10 and stating that composition is generally not commutative (f(g(x)) ≠ g(f(x)))."]
]],
"2.8": ["Let f(x) = (2x + 1)/3.", [
  ["Find f⁻¹(x).", "Earns the point for (3x − 1)/2."],
  ["Describe the graphical relationship between f and f⁻¹.", "Earns the point for describing a reflection over the line y = x."],
  ["Explain why g(x) = x² needs a restricted domain to have an inverse.", "Earns the point for explaining that it's not one-to-one (two x-values give the same output), so restricting (e.g., x ≥ 0) makes it invertible."]
]],
"2.9": ["Evaluate logarithmic expressions.", [
  ["Evaluate log₂ 32.", "Earns the point for 5."],
  ["Evaluate log₁₀ 0.001.", "Earns the point for −3."],
  ["Explain what log_b a represents.", "Earns the point for explaining that it is the exponent to which b must be raised to get a."]
]],
"2.10": ["Let f(x) = 3ˣ.", [
  ["Write the inverse of f.", "Earns the point for log₃ x."],
  ["The point (2, 9) is on f. Find a point on f⁻¹.", "Earns the point for (9, 2)."],
  ["Describe the domain and range of f⁻¹.", "Earns the point for domain x > 0 and range all real numbers."]
]],
"2.11": ["Let f(x) = log₂ x.", [
  ["Identify the vertical asymptote and domain.", "Earns the point for x = 0 and domain x > 0."],
  ["Find f(8) and f(1/2).", "Earns the point for 3 and −1."],
  ["Describe the concavity and increasing/decreasing behavior of f.", "Earns the point for increasing and concave down."]
]],
"2.12": ["Use properties of logarithms.", [
  ["Evaluate log 50 + log 2 (base 10).", "Earns the point for 2."],
  ["Write 2 ln x − ln y as a single logarithm.", "Earns the point for ln(x²/y)."],
  ["Use the change of base formula to evaluate log₃ 20 to three decimal places.", "Earns the point for about 2.727."]
]],
"2.13": ["Solve each equation.", [
  ["Solve 3^(2x) = 81.", "Earns the point for x = 2."],
  ["Solve log₂(x + 1) = 4.", "Earns the point for x = 15."],
  ["Solve 5e^(0.2t) = 20.", "Earns the point for t = 5 ln 4 (about 6.931)."]
]],
"2.14": ["The Richter scale is logarithmic: each increase of 1 in magnitude means 10 times the wave amplitude.", [
  ["Compare the amplitude of a magnitude 7 earthquake to a magnitude 5 earthquake.", "Earns the point for 100 times as large."],
  ["pH = −log[H⁺]. Find the pH if [H⁺] = 1 × 10⁻⁴ M.", "Earns the point for pH 4."],
  ["Explain why logarithmic scales are useful.", "Earns the point for explaining that they compress data spanning many orders of magnitude into a manageable range."]
]],
"2.15": ["Data for y = 3 · 2ˣ is plotted with log₁₀ y on the vertical axis and x on the horizontal axis.", [
  ["Describe the shape of the semi-log plot.", "Earns the point for a straight line."],
  ["Find the slope of the line.", "Earns the point for log₁₀ 2 (about 0.301)."],
  ["Find the vertical intercept of the line.", "Earns the point for log₁₀ 3 (about 0.477)."]
]],
"3.1": ["The water depth in a harbor rises and falls with the tides, from a minimum of 1 m to a maximum of 9 m, repeating every 12.4 hours.", [
  ["Find the amplitude.", "Earns the point for 4 m."],
  ["Find the midline.", "Earns the point for y = 5 m."],
  ["Identify the period and explain what it means in context.", "Earns the point for 12.4 hours: the time for the water level to complete one full cycle."]
]],
"3.2": ["The terminal side of angle θ in standard position passes through (−3, 4).", [
  ["Find sin θ.", "Earns the point for 4/5."],
  ["Find cos θ.", "Earns the point for −3/5."],
  ["Find tan θ.", "Earns the point for −4/3."]
]],
"3.3": ["Evaluate using the unit circle.", [
  ["Find sin(π/6).", "Earns the point for 1/2."],
  ["Find cos(3π/4).", "Earns the point for −√2/2."],
  ["Find sin(4π/3).", "Earns the point for −√3/2."]
]],
"3.4": ["Consider y = sin x on [0, 2π].", [
  ["Identify the zeros.", "Earns the point for 0, π, 2π."],
  ["Identify the maximum and where it occurs.", "Earns the point for maximum 1 at x = π/2."],
  ["Identify an interval where sin x is increasing and concave down.", "Earns the point for (0, π/2)."]
]],
"3.5": ["Let f(x) = 3 sin(2x) + 1.", [
  ["Find the amplitude and period.", "Earns the point for amplitude 3 and period π."],
  ["Identify the midline.", "Earns the point for y = 1."],
  ["Find the range.", "Earns the point for [−2, 4]."]
]],
"3.6": ["Let f(x) = −2 cos((π/4)(x − 1)) + 5.", [
  ["Find the period.", "Earns the point for 8."],
  ["Describe the phase shift.", "Earns the point for right 1."],
  ["Find the maximum value and one x-value where it occurs.", "Earns the point for maximum 7 at x = 5 (or 5 + 8k)."]
]],
"3.7": ["A Ferris wheel has a diameter of 50 m, its center is 30 m above the ground, and it completes one rotation every 10 minutes. A rider starts at the bottom at t = 0.", [
  ["Write a function h(t) for the rider's height.", "Earns the point for h(t) = 30 − 25 cos(πt/5) or an equivalent form."],
  ["Find the rider's height at t = 2.5 minutes.", "Earns the point for 30 m."],
  ["Find the maximum height and when it first occurs.", "Earns the point for 55 m at t = 5 minutes."]
]],
"3.8": ["Consider y = tan x.", [
  ["Identify the period.", "Earns the point for π."],
  ["Identify the vertical asymptotes.", "Earns the point for x = π/2 + kπ."],
  ["Explain the relationship between tan θ and the terminal ray of θ.", "Earns the point for explaining that tan θ is the slope of the terminal ray."]
]],
"3.9": ["Evaluate inverse trigonometric expressions.", [
  ["Find arcsin(1/2).", "Earns the point for π/6."],
  ["Find arccos(−1/2).", "Earns the point for 2π/3."],
  ["Explain why the domain of sine must be restricted to define arcsin.", "Earns the point for explaining that sine isn't one-to-one on its full domain; restricting to [−π/2, π/2] makes it one-to-one."]
]],
"3.10": ["Solve on [0, 2π).", [
  ["Solve 2 sin x − 1 = 0.", "Earns the point for x = π/6 and 5π/6."],
  ["Solve cos x > 0.", "Earns the point for [0, π/2) ∪ (3π/2, 2π)."],
  ["Solve 2cos²x = 1.", "Earns the point for π/4, 3π/4, 5π/4, 7π/4."]
]],
"3.11": ["Evaluate reciprocal trigonometric functions.", [
  ["Find sec(π/3).", "Earns the point for 2."],
  ["Find csc(π/6).", "Earns the point for 2."],
  ["Explain where sec x has vertical asymptotes.", "Earns the point for explaining that sec x = 1/cos x has asymptotes where cos x = 0 (x = π/2 + kπ)."]
]],
"3.12": ["Use trigonometric identities.", [
  ["Simplify sin²x + cos²x.", "Earns the point for 1."],
  ["Write sin(2x) in terms of sin x and cos x.", "Earns the point for 2 sin x cos x."],
  ["Find cos(π/12) exactly using a difference identity.", "Earns the point for (√6 + √2)/4."]
]],
"3.13": ["Convert between polar and rectangular coordinates.", [
  ["Convert (4, π/3) to rectangular coordinates.", "Earns the point for (2, 2√3)."],
  ["Convert (−1, 1) to polar coordinates with r > 0.", "Earns the point for (√2, 3π/4)."],
  ["Write the complex number 1 + i in polar form.", "Earns the point for √2(cos(π/4) + i sin(π/4))."]
]],
"3.14": ["Consider r = 2 + 2 cos θ.", [
  ["Find the maximum value of r and where it occurs.", "Earns the point for r = 4 at θ = 0."],
  ["Find where r = 0.", "Earns the point for θ = π."],
  ["Identify the number of petals of r = 3 sin(2θ).", "Earns the point for 4."]
]],
"3.15": ["Consider r = 2 + 2 cos θ.", [
  ["Find the average rate of change of r on [0, π/2].", "Earns the point for −4/π."],
  ["Describe what a negative rate of change of r means for points on the graph.", "Earns the point for describing that points get closer to the origin as θ increases."],
  ["Identify an interval where r is increasing.", "Earns the point for (π, 2π)."]
]],
"4.1": ["Let x(t) = t² and y(t) = 2t + 1 for −2 ≤ t ≤ 2.", [
  ["Find the point at t = 1.", "Earns the point for (1, 3)."],
  ["Eliminate the parameter to write x in terms of y.", "Earns the point for x = ((y − 1)/2)²."],
  ["Describe the direction of motion as t increases.", "Earns the point for describing that y increases (moves upward) while x decreases then increases."]
]],
"4.2": ["A ball's position is x(t) = 3t, y(t) = −16t² + 32t.", [
  ["Find the time of maximum height.", "Earns the point for t = 1."],
  ["Find the maximum height.", "Earns the point for 16."],
  ["Find the horizontal distance when the ball lands.", "Earns the point for 6 (t = 2)."]
]],
"4.3": ["Let x(t) = t² and y(t) = t³.", [
  ["Find the change in x from t = 1 to t = 2.", "Earns the point for 3."],
  ["Find the change in y from t = 1 to t = 2.", "Earns the point for 7."],
  ["Find the average rate of change of y with respect to x on this interval.", "Earns the point for 7/3."]
]],
"4.4": ["Parametric equations describe circles and lines.", [
  ["Identify the center and radius of x = 3 cos t + 1, y = 3 sin t − 2.", "Earns the point for center (1, −2), radius 3."],
  ["Write parametric equations for the line through (1, 2) and (4, 8).", "Earns the point for x = 1 + 3t, y = 2 + 6t (or equivalent)."],
  ["Describe the direction of motion on the circle as t increases.", "Earns the point for counterclockwise."]
]],
"4.5": ["Consider x² + y² = 25.", [
  ["Explain why this equation does not define y as a function of x.", "Earns the point for explaining that some x-values correspond to two y-values."],
  ["Verify that (3, 4) is on the curve.", "Earns the point for 9 + 16 = 25."],
  ["Write two functions whose graphs together form the curve.", "Earns the point for y = √(25 − x²) and y = −√(25 − x²)."]
]],
"4.6": ["Classify each conic.", [
  ["Classify x²/9 + y²/4 = 1 and identify its vertices on the x-axis.", "Earns the point for ellipse with vertices (±3, 0)."],
  ["Classify x² − y² = 1.", "Earns the point for hyperbola."],
  ["Classify y = x² − 4.", "Earns the point for parabola."]
]],
"4.7": ["Parametrize implicitly defined curves.", [
  ["Parametrize x²/9 + y²/4 = 1.", "Earns the point for x = 3 cos t, y = 2 sin t."],
  ["Parametrize y = x².", "Earns the point for x = t, y = t²."],
  ["Parametrize x² − y² = 1.", "Earns the point for x = sec t, y = tan t (or x = cosh t, y = sinh t)."]
]],
"4.8": ["Let u = ⟨3, 4⟩ and v = ⟨−1, 2⟩.", [
  ["Find |u|.", "Earns the point for 5."],
  ["Find u + v.", "Earns the point for ⟨2, 6⟩."],
  ["Find u · v.", "Earns the point for 5."]
]],
"4.9": ["A particle's position is p(t) = ⟨2t, t²⟩.", [
  ["Find the position at t = 3.", "Earns the point for (6, 9)."],
  ["Find the displacement from t = 1 to t = 3.", "Earns the point for ⟨4, 8⟩."],
  ["Find the average velocity on [1, 3].", "Earns the point for ⟨2, 4⟩."]
]],
"4.10": ["Let A = [[1, 2], [3, 4]] and B = [[0, 1], [1, 0]].", [
  ["Find AB.", "Earns the point for [[2, 1], [4, 3]]."],
  ["Find BA.", "Earns the point for [[3, 4], [1, 2]]."],
  ["Explain what parts A and B show about matrix multiplication.", "Earns the point for explaining that matrix multiplication is not commutative."]
]],
"4.11": ["Let A = [[1, 2], [3, 4]].", [
  ["Find det(A).", "Earns the point for −2."],
  ["Find A⁻¹.", "Earns the point for [[−2, 1], [1.5, −0.5]]."],
  ["Explain what a determinant of 0 means.", "Earns the point for explaining that the matrix has no inverse."]
]],
"4.12": ["Linear transformations in the plane.", [
  ["Write the matrix for a 90° counterclockwise rotation.", "Earns the point for [[0, −1], [1, 0]]."],
  ["Find the image of (2, 3) under this rotation.", "Earns the point for (−3, 2)."],
  ["Write the matrix for reflection over the x-axis.", "Earns the point for [[1, 0], [0, −1]]."]
]],
"4.13": ["Let R be the matrix for a 90° counterclockwise rotation and F the matrix for reflection over the x-axis.", [
  ["Describe the matrix that performs R first, then F.", "Earns the point for FR (the product with R applied first, on the right)."],
  ["Compute FR.", "Earns the point for [[0, −1], [−1, 0]]."],
  ["Explain the meaning of R⁻¹.", "Earns the point for explaining that R⁻¹ undoes the rotation (a 90° clockwise rotation)."]
]],
"4.14": ["Two stores share 200 customers. Each week, store A keeps 80% of its customers and loses 20% to B; store B keeps 70% and loses 30% to A. Transition matrix P = [[0.8, 0.3], [0.2, 0.7]], starting with 100 at each store.", [
  ["Find the distribution after one week.", "Earns the point for 110 at A and 90 at B."],
  ["Find the steady-state distribution.", "Earns the point for 120 at A and 80 at B."],
  ["Explain what the steady state means.", "Earns the point for explaining that the distribution no longer changes from week to week."]
]]
};
