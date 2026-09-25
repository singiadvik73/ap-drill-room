// AP Precalculus — Units 3–4. Question format: [stem, correct, [distractors], explanation, figure?]
const pcSine = (a, b, c, d, x0, x1, n) => Array.from({ length: n + 1 }, (_, i) => { const x = x0 + (x1 - x0) * i / n; return [+x.toFixed(3), +(a * Math.sin(b * (x - c)) + d).toFixed(3)]; });
AP_DATA.pc.units.push(
{ n: 3, name: "Trigonometric and Polar Functions", weight: "30–35%", topics: [
  ["3.1", "Periodic Phenomena", [
    ["A function f is periodic with period 4. If f(1) = 7, what is f(13)?", "7", ["13", "28", "It cannot be determined"], "13 = 1 + 3(4), so f(13) = f(1)."],
    ["The graph shows the height of a point on a spinning wheel over time. What is the period?", "8 seconds", ["4 seconds", "2 seconds", "16 seconds"], "The pattern repeats every 8 seconds (for example, peaks at t = 2 and t = 10).", { t: "line", title: "Height of a point on a wheel", x: { min: 0, max: 16, ticks: [0, 2, 4, 6, 8, 10, 12, 14, 16], label: "Time (s)" }, y: { min: 0, max: 10, ticks: [0, 2, 4, 6, 8, 10], label: "Height (m)" }, series: [{ name: "Height", pts: pcSine(4, Math.PI / 4, 0, 5, 0, 16, 64) }] }],
    ["Which situation is best modeled by a periodic function?", "Daily high tides at a beach", ["The balance of a savings account", "The height of a growing tree", "The cooling of a cup of coffee"], "Tides repeat in a regular cycle."],
    ["The period of a periodic function is", "the smallest positive length of the input interval over which the pattern repeats", ["the largest output value", "the difference between the max and min", "the first x-intercept"], "f(x + p) = f(x) for all x, with p as small as possible."]
  ]],
  ["3.2", "Sine, Cosine, and Tangent", [
    ["An angle in standard position has terminal ray through (3, 4). What is sin θ?", "4/5", ["3/5", "4/3", "3/4"], "r = √(3² + 4²) = 5, and sin θ = y/r."],
    ["An angle in standard position has terminal ray through (−5, 12). What is cos θ?", "−5/13", ["5/13", "12/13", "−12/5"], "r = 13, and cos θ = x/r."],
    ["On the unit circle, the point at angle θ has coordinates", "(cos θ, sin θ)", ["(sin θ, cos θ)", "(tan θ, 1)", "(θ, sin θ)"], "Cosine gives the x-coordinate and sine gives the y-coordinate."],
    ["tan θ can be interpreted as", "the slope of the terminal ray", ["the length of the terminal ray", "the x-coordinate on the unit circle", "the arc length"], "tan θ = sin θ / cos θ = y/x."]
  ]],
  ["3.3", "Sine and Cosine Function Values", [
    ["What is sin(π/6)?", "1/2", ["√3/2", "√2/2", "1"], "The reference triangle for 30° has opposite side 1 and hypotenuse 2."],
    ["What is cos(3π/4)?", "−√2/2", ["√2/2", "−1/2", "−√3/2"], "3π/4 is in Quadrant II, where cosine is negative, with a reference angle of π/4."],
    ["What is sin(4π/3)?", "−√3/2", ["√3/2", "−1/2", "1/2"], "4π/3 is in Quadrant III (sine negative), with a reference angle of π/3."],
    ["How many radians is 150°?", "5π/6", ["3π/4", "2π/3", "5π/3"], "150 × π/180 = 5π/6."]
  ]],
  ["3.4", "Sine and Cosine Function Graphs", [
    ["What is the period of y = sin x?", "2π", ["π", "1", "4π"], "The unit circle repeats after one full turn."],
    ["On which interval is y = cos x decreasing?", "(0, π)", ["(π, 2π)", "(−π, 0)", "(π/2, 3π/2)"], "cos x goes from 1 at 0 to −1 at π."],
    ["The graph of y = cos x is the graph of y = sin x shifted", "left by π/2", ["right by π/2", "up by 1", "left by π"], "cos x = sin(x + π/2)."],
    ["Where does y = sin x have zeros?", "At integer multiples of π", ["At odd multiples of π/2", "At multiples of 2π only", "Nowhere"], "sin x = 0 when the point on the unit circle is on the x-axis."]
  ]],
  ["3.5", "Sinusoidal Functions", [
    ["What is the amplitude of f(x) = −3 sin(2x) + 1?", "3", ["−3", "2", "1"], "Amplitude is |a| = 3."],
    ["What is the period of f(x) = 4 cos(3x)?", "2π/3", ["3", "6π", "4"], "Period = 2π / |b| = 2π/3."],
    ["What is the midline of f(x) = 2 sin(x) − 5?", "y = −5", ["y = 2", "y = 0", "y = −3"], "The vertical shift is −5."],
    ["The graph shows a sinusoidal function. Which equation matches it?", "y = 2 sin(x) + 3", ["y = 3 sin(x) + 2", "y = 2 sin(2x) + 3", "y = 2 cos(x) + 3"], "Midline y = 3, amplitude 2, period 2π, and it starts at the midline going up.", { t: "line", title: "A sinusoidal function", x: { min: 0, max: 6.2832, ticks: [0, 1.5708, 3.1416, 4.7124, 6.2832], fmt: t => ["0", "π/2", "π", "3π/2", "2π"][Math.round(t / 1.5708)], label: "x" }, y: { min: 0, max: 6, ticks: [0, 1, 2, 3, 4, 5, 6], label: "y" }, series: [{ name: "y", pts: pcSine(2, 1, 0, 3, 0, 6.2832, 48) }] }]
  ]],
  ["3.6", "Sinusoidal Function Transformations", [
    ["The graph of y = sin(x − π/3) is the graph of y = sin x shifted", "right by π/3", ["left by π/3", "up by π/3", "down by π/3"], "Replacing x with x − c shifts right by c."],
    ["What is the phase shift of y = cos(2x + π)?", "π/2 to the left", ["π to the left", "π to the right", "π/2 to the right"], "cos(2(x + π/2)): the shift is π/2 left."],
    ["Which function has a maximum value of 7 and a minimum value of 1?", "y = 3 sin x + 4", ["y = 7 sin x + 1", "y = 6 sin x + 1", "y = 4 sin x + 3"], "Midline (7 + 1)/2 = 4; amplitude (7 − 1)/2 = 3."],
    ["Which transformation changes the period of y = sin x?", "Multiplying the input by a constant, as in sin(bx)", ["Adding a constant to the output", "Multiplying the output by a constant", "Subtracting a constant from the input"], "Only a horizontal dilation changes the period."]
  ]],
  ["3.7", "Sinusoidal Function Context and Data Modeling", [
    ["A Ferris wheel has diameter 40 m, its center is 25 m above the ground, and it turns once every 60 s. What is the amplitude of the height function?", "20 m", ["40 m", "25 m", "60 m"], "The amplitude is the radius, half the diameter."],
    ["For the same Ferris wheel (center 25 m high, radius 20 m, period 60 s), what is the midline?", "h = 25 m", ["h = 20 m", "h = 45 m", "h = 5 m"], "The height oscillates around the center's height."],
    ["The average daily temperature in a city varies from a low of 30°F to a high of 80°F over one year. What is the amplitude of a sinusoidal model?", "25°F", ["50°F", "55°F", "80°F"], "(80 − 30)/2 = 25."],
    ["A sinusoidal model of tides has a period of 12.4 hours. What is b in h(t) = a sin(bt) + d?", "2π/12.4", ["12.4", "12.4/2π", "π/12.4"], "Period = 2π/b, so b = 2π/12.4."]
  ]],
  ["3.8", "The Tangent Function", [
    ["What is the period of y = tan x?", "π", ["2π", "π/2", "4π"], "tan repeats every π because tan(x + π) = tan x."],
    ["Where does y = tan x have vertical asymptotes?", "At x = π/2 + kπ for integer k", ["At x = kπ", "At x = 2kπ", "Nowhere"], "tan x = sin x / cos x is undefined where cos x = 0."],
    ["What is tan(π/4)?", "1", ["0", "√3", "√2/2"], "sin and cos are equal at π/4."],
    ["On each interval between its asymptotes, y = tan x is", "increasing", ["decreasing", "constant", "periodic with period 2π"], "The slope of the terminal ray grows as θ goes from −π/2 to π/2."]
  ]],
  ["3.9", "Inverse Trigonometric Functions", [
    ["What is arcsin(1/2)?", "π/6", ["5π/6", "π/3", "π/4"], "The range of arcsin is [−π/2, π/2], and sin(π/6) = 1/2."],
    ["What is arccos(−1)?", "π", ["−π", "0", "−π/2"], "The range of arccos is [0, π]."],
    ["What is the range of y = arctan x?", "(−π/2, π/2)", ["[0, π]", "[−π/2, π/2]", "All real numbers"], "tan is restricted to (−π/2, π/2) to make it one-to-one."],
    ["Why must the domain of sin x be restricted to define arcsin?", "sin x is not one-to-one on all real numbers", ["sin x has no outputs", "sin x is undefined at 0", "sin x is not periodic"], "Restricting to [−π/2, π/2] makes it one-to-one."]
  ]],
  ["3.10", "Trigonometric Equations and Inequalities", [
    ["Solve sin x = √2/2 for 0 ≤ x < 2π.", "x = π/4 and x = 3π/4", ["x = π/4 only", "x = π/4 and x = 7π/4", "x = 3π/4 and x = 5π/4"], "Sine is positive in Quadrants I and II."],
    ["Solve 2 cos x + 1 = 0 for 0 ≤ x < 2π.", "x = 2π/3 and x = 4π/3", ["x = π/3 and x = 5π/3", "x = 2π/3 only", "x = π/6 and x = 11π/6"], "cos x = −1/2 in Quadrants II and III."],
    ["How many solutions does sin(2x) = 0 have for 0 ≤ x < 2π?", "4", ["2", "1", "8"], "2x = 0, π, 2π, 3π → x = 0, π/2, π, 3π/2."],
    ["For 0 ≤ x < 2π, where is sin x > 0?", "0 < x < π", ["π < x < 2π", "π/2 < x < 3π/2", "0 < x < π/2 only"], "Sine is positive in Quadrants I and II."]
  ]],
  ["3.11", "The Secant, Cosecant, and Cotangent Functions", [
    ["What is sec(π/3)?", "2", ["1/2", "√3", "2/√3"], "sec θ = 1/cos θ = 1/(1/2) = 2."],
    ["What is csc(π/2)?", "1", ["0", "Undefined", "−1"], "csc θ = 1/sin θ = 1/1."],
    ["Where is y = cot x undefined?", "At x = kπ for integer k", ["At x = π/2 + kπ", "Nowhere", "At x = 2kπ only"], "cot x = cos x / sin x is undefined where sin x = 0."],
    ["If tan θ = 3/4, what is cot θ?", "4/3", ["3/4", "5/4", "−3/4"], "cot θ = 1/tan θ."]
  ]],
  ["3.12", "Equivalent Representations of Trigonometric Functions", [
    ["Which is equivalent to sin²x + cos²x?", "1", ["0", "2 sin x cos x", "tan²x"], "This is the Pythagorean identity."],
    ["Which is equivalent to 1 + tan²x?", "sec²x", ["csc²x", "cot²x", "1"], "Divide sin²x + cos²x = 1 by cos²x."],
    ["Which is equivalent to sin(2x)?", "2 sin x cos x", ["2 sin x", "sin²x − cos²x", "sin x + cos x"], "This is the double-angle identity for sine."],
    ["If sin θ = 3/5 and θ is in Quadrant II, what is cos θ?", "−4/5", ["4/5", "−3/5", "3/4"], "cos²θ = 1 − 9/25 = 16/25; cosine is negative in Quadrant II."]
  ]],
  ["3.13", "Trigonometry and Polar Coordinates", [
    ["Convert the polar point (4, π/3) to rectangular coordinates.", "(2, 2√3)", ["(2√3, 2)", "(4, π/3)", "(−2, 2√3)"], "x = r cos θ = 4(1/2) = 2, y = r sin θ = 4(√3/2) = 2√3."],
    ["Convert the rectangular point (0, −5) to polar coordinates with r > 0 and 0 ≤ θ < 2π.", "(5, 3π/2)", ["(5, π/2)", "(−5, π/2)", "(5, π)"], "r = 5, and the point is on the negative y-axis."],
    ["Which polar point represents the same location as (3, π/4)?", "(−3, 5π/4)", ["(3, −π/4)", "(−3, π/4)", "(3, 5π/4)"], "A negative r points the opposite direction, which is adding π to θ."],
    ["In polar coordinates, r represents", "the directed distance from the origin", ["the angle from the x-axis", "the x-coordinate", "the slope"], "θ is the angle, r is the distance."]
  ]],
  ["3.14", "Polar Function Graphs", [
    ["What is the graph of r = 3?", "A circle of radius 3 centered at the origin", ["A line through the origin", "A spiral", "A rose with 3 petals"], "Every point is 3 units from the origin."],
    ["How many petals does the rose r = 4 sin(3θ) have?", "3", ["6", "4", "12"], "For r = a sin(nθ) with n odd, there are n petals."],
    ["How many petals does the rose r = cos(2θ) have?", "4", ["2", "1", "8"], "For n even, there are 2n petals."],
    ["The polar graph of r = 2 + 2 cos θ is a", "cardioid", ["circle", "rose", "straight line"], "r = a + a cos θ is heart-shaped."]
  ]],
  ["3.15", "Rates of Change in Polar Functions", [
    ["For r = f(θ), if r is positive and increasing on an interval of θ, then the points on the graph are", "moving away from the origin", ["moving toward the origin", "staying the same distance from the origin", "on the x-axis"], "A larger positive r means a greater distance."],
    ["For r = 2θ on 0 ≤ θ ≤ π, what is the average rate of change of r with respect to θ?", "2", ["π", "2π", "1/2"], "(2π − 0) / (π − 0) = 2."],
    ["For r = 3 sin θ on 0 ≤ θ ≤ π, where is the distance from the origin greatest?", "At θ = π/2", ["At θ = 0", "At θ = π", "At θ = π/4"], "|r| is largest when sin θ = 1."],
    ["For r = f(θ), if r is negative and decreasing on an interval, then the distance from the origin is", "increasing", ["decreasing", "constant", "zero"], "r going from −1 to −3 means |r| grows from 1 to 3."]
  ]]
]},
{ n: 4, name: "Functions Involving Parameters, Vectors, and Matrices", weight: "Not on the AP exam", topics: [
  ["4.1", "Parametric Functions", [
    ["For x(t) = t + 1 and y(t) = t², what point corresponds to t = 2?", "(3, 4)", ["(2, 4)", "(4, 3)", "(3, 2)"], "x = 2 + 1 = 3, y = 2² = 4."],
    ["A parametric function x = f(t), y = g(t) describes", "the position of a point in the plane as t changes", ["a single number", "a function of y only", "a vertical line only"], "t is often time."],
    ["Eliminate the parameter: x = 2t, y = t + 3.", "y = x/2 + 3", ["y = 2x + 3", "y = x + 3", "y = 2x − 3"], "t = x/2, so y = x/2 + 3."],
    ["For x(t) = cos t and y(t) = sin t, as t goes from 0 to 2π the point traces", "the unit circle once counterclockwise", ["a line segment", "the unit circle clockwise", "a parabola"], "cos²t + sin²t = 1."]
  ]],
  ["4.2", "Parametric Functions Modeling Planar Motion", [
    ["A particle moves with x(t) = 3t and y(t) = 4t. How far is it from its start after t = 2?", "10 units", ["14 units", "7 units", "12 units"], "The position is (6, 8), which is √(36 + 64) = 10 from the origin."],
    ["For x(t) = t² and y(t) = 2t, is the particle moving left or right at t = −1?", "Left, because x is decreasing there", ["Right", "Neither", "Up only"], "x = t² decreases for t < 0."],
    ["A ball is thrown so that x(t) = 20t and y(t) = −16t² + 32t. At what time does it reach its highest point?", "t = 1", ["t = 2", "t = 0.5", "t = 20"], "The vertex of y(t) is at t = −32 / (2 · −16) = 1."],
    ["In a parametric motion model, the direction of motion is shown by", "how the points move as t increases", ["the y-intercept only", "the value of t at the start only", "the slope of the x-axis"], "Plotting points in order of t reveals the direction."]
  ]],
  ["4.3", "Parametric Functions and Rates of Change", [
    ["For x(t) = 2t and y(t) = t² on [0, 3], what is the average rate of change of y with respect to x?", "1.5", ["3", "9", "0.5"], "Δy = 9, Δx = 6, so 9/6 = 1.5."],
    ["For x(t) = t + 1 and y(t) = 3t, the average rate of change of x with respect to t on [0, 4] is", "1", ["3", "4", "1/3"], "Δx/Δt = (5 − 1)/4 = 1."],
    ["If x(t) is increasing and y(t) is decreasing, the particle is moving", "right and down", ["left and up", "right and up", "left and down"], "Increasing x is right; decreasing y is down."],
    ["For a parametric curve, Δy/Δx over an interval of t gives", "the slope of the secant line between the two points", ["the speed of the particle", "the distance traveled", "the value of t"], "It compares vertical and horizontal changes."]
  ]],
  ["4.4", "Parametrically Defined Circles and Lines", [
    ["Which parametrization describes a circle of radius 5 centered at (1, 2)?", "x = 1 + 5 cos t, y = 2 + 5 sin t", ["x = 5 + cos t, y = 5 + sin t", "x = 5 cos t, y = 5 sin t", "x = 1 + cos t, y = 2 + sin t"], "Center (h, k), radius r: x = h + r cos t, y = k + r sin t."],
    ["Which parametrization gives the line segment from (0, 0) to (4, 2) for 0 ≤ t ≤ 1?", "x = 4t, y = 2t", ["x = 2t, y = 4t", "x = t, y = 2t", "x = 4 + t, y = 2 + t"], "Start + t(end − start)."],
    ["For x = 3 cos t, y = 3 sin t, how many times is the circle traced for 0 ≤ t ≤ 4π?", "2", ["1", "4", "3"], "Each 2π is one full turn."],
    ["The parametrization x = cos t, y = −sin t traces the unit circle", "clockwise", ["counterclockwise", "not at all", "as a line"], "At t = 0 it's at (1, 0) and then y becomes negative."]
  ]],
  ["4.5", "Implicitly Defined Functions", [
    ["The equation x² + y² = 25 defines", "a circle that is not the graph of a single function y = f(x)", ["a function y = f(x)", "a line", "a parabola"], "It fails the vertical line test, but it can be split into y = ±√(25 − x²)."],
    ["Which point lies on x² + xy = 10?", "(2, 3)", ["(1, 3)", "(3, 2)", "(5, 1)"], "4 + 6 = 10."],
    ["For the curve y² = x, which explicit functions together give the whole graph?", "y = √x and y = −√x", ["y = x² only", "y = √x only", "y = 1/x"], "Solving for y gives two branches."],
    ["An implicitly defined relation is one where", "x and y are related by an equation not solved for y", ["y is always a function of x", "there is no y", "x is a constant"], "Examples include circles and ellipses."]
  ]],
  ["4.6", "Conic Sections", [
    ["What conic is x²/9 + y²/4 = 1?", "An ellipse", ["A hyperbola", "A parabola", "A circle"], "A sum of squared terms with different denominators, set equal to 1."],
    ["What conic is x²/4 − y²/9 = 1?", "A hyperbola", ["An ellipse", "A circle", "A parabola"], "A difference of squared terms gives a hyperbola."],
    ["What conic is y = x² − 3?", "A parabola", ["A circle", "An ellipse", "A hyperbola"], "Only one variable is squared."],
    ["What are the center and radius of (x − 2)² + (y + 1)² = 16?", "Center (2, −1), radius 4", ["Center (−2, 1), radius 16", "Center (2, 1), radius 4", "Center (2, −1), radius 16"], "Compare with (x − h)² + (y − k)² = r²."]
  ]],
  ["4.7", "Parametrization of Implicitly Defined Functions", [
    ["Which parametrization gives the ellipse x²/9 + y²/4 = 1?", "x = 3 cos t, y = 2 sin t", ["x = 9 cos t, y = 4 sin t", "x = 2 cos t, y = 3 sin t", "x = 3t, y = 2t"], "(3 cos t)²/9 + (2 sin t)²/4 = cos²t + sin²t = 1."],
    ["A parametrization of y = x² is", "x = t, y = t²", ["x = t², y = t", "x = cos t, y = sin t", "x = 2t, y = t"], "Let x = t, then y = t²."],
    ["Parametrizing an implicitly defined curve is useful because", "it describes the whole curve with functions of a single parameter", ["it removes the curve's shape", "it makes the curve a function of x", "it only works for lines"], "Each coordinate becomes a function of t."],
    ["For x = t, y = √(4 − t²) on −2 ≤ t ≤ 2, which curve is traced?", "The upper half of the circle x² + y² = 4", ["The whole circle x² + y² = 4", "The lower half of the circle", "A parabola"], "y is never negative here."]
  ]],
  ["4.8", "Vectors", [
    ["What is the magnitude of the vector ⟨3, −4⟩?", "5", ["7", "1", "−1"], "√(9 + 16) = 5."],
    ["What is ⟨2, 5⟩ + ⟨−1, 3⟩?", "⟨1, 8⟩", ["⟨3, 2⟩", "⟨1, 2⟩", "⟨−2, 15⟩"], "Add components."],
    ["What is the dot product ⟨1, 2⟩ · ⟨3, −1⟩?", "1", ["5", "⟨3, −2⟩", "7"], "1(3) + 2(−1) = 1."],
    ["Two nonzero vectors are perpendicular when their dot product is", "0", ["1", "−1", "equal to their magnitudes"], "u · v = |u||v| cos θ, and cos 90° = 0."]
  ]],
  ["4.9", "Vector-Valued Functions", [
    ["For p(t) = ⟨t, t²⟩, what is the position at t = 3?", "(3, 9)", ["(9, 3)", "(3, 6)", "(1, 9)"], "Evaluate each component."],
    ["A vector-valued function p(t) = ⟨x(t), y(t)⟩ is equivalent to", "the parametric function x = x(t), y = y(t)", ["a single real-valued function", "a matrix", "a conic section"], "Both give a point's position in terms of t."],
    ["For p(t) = ⟨2t, 3t⟩, what is the displacement from t = 0 to t = 2?", "⟨4, 6⟩", ["⟨2, 3⟩", "⟨6, 4⟩", "⟨0, 0⟩"], "p(2) − p(0) = ⟨4, 6⟩."],
    ["For p(t) = ⟨cos t, sin t⟩, what is the distance from the origin at any t?", "1", ["t", "0", "2"], "√(cos²t + sin²t) = 1."]
  ]],
  ["4.10", "Matrices", [
    ["What is [[1, 2], [3, 4]] + [[0, 1], [1, 0]]?", "[[1, 3], [4, 4]]", ["[[1, 2], [3, 4]]", "[[0, 2], [3, 0]]", "[[2, 3], [4, 5]]"], "Add matching entries."],
    ["What is the product [[1, 0], [2, 1]] · [[3], [4]]?", "[[3], [10]]", ["[[3], [4]]", "[[7], [10]]", "[[3], [8]]"], "Row 1: 1·3 + 0·4 = 3; row 2: 2·3 + 1·4 = 10."],
    ["A 2 × 3 matrix can be multiplied on the right by a matrix with", "3 rows", ["2 rows", "3 columns", "2 columns"], "The inner dimensions must match."],
    ["Is matrix multiplication commutative in general?", "No; AB usually differs from BA", ["Yes, always", "Only for 3 × 3 matrices", "Only when A is the zero matrix"], "The order of multiplication matters."]
  ]],
  ["4.11", "The Inverse and Determinant of a Matrix", [
    ["What is the determinant of [[3, 2], [1, 4]]?", "10", ["14", "12", "2"], "ad − bc = 12 − 2 = 10."],
    ["A 2 × 2 matrix has an inverse exactly when", "its determinant is not 0", ["its determinant is 0", "all its entries are positive", "it is symmetric"], "The inverse formula divides by the determinant."],
    ["What is the inverse of [[2, 0], [0, 4]]?", "[[1/2, 0], [0, 1/4]]", ["[[−2, 0], [0, −4]]", "[[4, 0], [0, 2]]", "[[2, 0], [0, 4]]"], "Invert each diagonal entry."],
    ["The absolute value of the determinant of [[a, b], [c, d]] gives", "the area of the parallelogram formed by its column vectors", ["the sum of its entries", "its trace", "the number of solutions"], "Determinants measure how a transformation scales area."]
  ]],
  ["4.12", "Linear Transformations and Matrices", [
    ["The matrix [[1, 0], [0, −1]] represents a", "reflection over the x-axis", ["reflection over the y-axis", "rotation by 90°", "dilation by 2"], "(x, y) → (x, −y)."],
    ["Which matrix rotates points 90° counterclockwise about the origin?", "[[0, −1], [1, 0]]", ["[[0, 1], [−1, 0]]", "[[1, 0], [0, 1]]", "[[−1, 0], [0, −1]]"], "(1, 0) → (0, 1) and (0, 1) → (−1, 0)."],
    ["The matrix [[2, 0], [0, 2]] transforms a shape by", "dilating it by a factor of 2", ["rotating it 180°", "reflecting it", "translating it"], "Each coordinate doubles."],
    ["Applying transformation A and then B corresponds to the matrix", "BA", ["AB", "A + B", "A − B"], "The first transformation is applied to the vector first: B(Av) = (BA)v."]
  ]],
  ["4.13", "Matrices as Functions", [
    ["If A = [[1, 1], [0, 1]], what is A applied to ⟨2, 3⟩?", "⟨5, 3⟩", ["⟨2, 5⟩", "⟨3, 2⟩", "⟨2, 3⟩"], "⟨1·2 + 1·3, 0·2 + 1·3⟩ = ⟨5, 3⟩."],
    ["An inverse matrix A⁻¹ acts as a function that", "undoes the transformation A", ["doubles the transformation", "always rotates by 90°", "has determinant 0"], "A⁻¹(Av) = v."],
    ["A transformation with determinant 0", "collapses the plane onto a line or a point, so it cannot be undone", ["preserves area", "is a rotation", "has an inverse"], "Different inputs can map to the same output."],
    ["A transformation with determinant −1", "preserves area but reverses orientation, like a reflection", ["doubles area", "collapses the plane", "has no effect"], "|det| = 1 preserves area; the negative sign flips orientation."]
  ]],
  ["4.14", "Matrices Modeling Contexts", [
    ["A transition matrix models customers switching between two stores each week. What must each column (of probabilities from one store) add up to?", "1", ["0", "2", "100 in all cases"], "Every customer ends up somewhere, so the probabilities out of each state total 1."],
    ["If 80% of Store A's customers stay and 20% switch to Store B each week, the first column of the transition matrix is", "[[0.8], [0.2]]", ["[[0.2], [0.8]]", "[[0.8], [0.8]]", "[[1], [0]]"], "The column for A lists where A's customers go: 0.8 to A, 0.2 to B."],
    ["To predict the state two weeks later using transition matrix T and state vector v, compute", "T²v", ["2Tv", "T + v", "v²"], "Apply T twice."],
    ["A steady state for a transition matrix T is a vector v such that", "Tv = v", ["Tv = 0", "Tv = 2v", "T = v"], "Applying the transition leaves the distribution unchanged."]
  ]]
]}
);
