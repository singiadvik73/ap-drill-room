// AP Precalculus — Units 3–4. Question format: [stem, correct, [distractors], explanation, figure?]
const pcSine = (a, b, c, d, x0, x1, n) => Array.from({ length: n + 1 }, (_, i) => { const x = x0 + (x1 - x0) * i / n; return [+x.toFixed(3), +(a * Math.sin(b * (x - c)) + d).toFixed(3)]; });
AP_DATA.pc.units.push(
{ n: 3, name: "Trigonometric and Polar Functions", weight: "30–35%", topics: [
  ["3.1", "Periodic Phenomena", [
    ["A periodic function f has period 6, and f(2) = −3. What is f(32)?", "−3", ["3", "−48", "It cannot be determined"], "32 = 2 + 5 · 6, so f(32) = f(2)."],
    ["The graph shows the height of a point on a spinning wheel over time. What is the period?", "8 seconds", ["4 seconds", "2 seconds", "16 seconds"], "The pattern repeats every 8 seconds (for example, peaks at t = 2 and t = 10).", { t: "line", title: "Height of a point on a wheel", x: { min: 0, max: 16, ticks: [0, 2, 4, 6, 8, 10, 12, 14, 16], label: "Time (s)" }, y: { min: 0, max: 10, ticks: [0, 2, 4, 6, 8, 10], label: "Height (m)" }, series: [{ name: "Height", pts: pcSine(4, Math.PI / 4, 0, 5, 0, 16, 64) }] }],
    ["A seat on a Ferris wheel reaches a maximum height of 42 m and a minimum of 2 m. What are the midline and amplitude of its height?", "Midline 22 m, amplitude 20 m", ["Midline 20 m, amplitude 22 m", "Midline 21 m, amplitude 40 m", "Midline 22 m, amplitude 40 m"], "Midline = (42 + 2)/2 = 22 and amplitude = (42 − 2)/2 = 20."],
    ["High tide is at 3:00 a.m., and the next low tide is at 9:15 a.m. If the tides are periodic, what is the period?", "12.5 hours", ["6.25 hours", "12 hours", "25 hours"], "High to low is half a cycle (6.25 hours), so a full cycle is 12.5 hours."]
  ]],
  ["3.2", "Sine, Cosine, and Tangent", [
    ["An angle in standard position has a terminal ray through (−8, −6). What is sin θ?", "−3/5", ["3/5", "−4/5", "3/4"], "r = √(64 + 36) = 10, so sin θ = y/r = −6/10."],
    ["A point on a circle of radius 10 centered at the origin is at angle π/3. What are its coordinates?", "(5, 5√3)", ["(5√3, 5)", "(10, π/3)", "(5, 5)"], "(10 cos(π/3), 10 sin(π/3)) = (5, 5√3)."],
    ["θ is in Quadrant II and sin θ = 3/5. What is tan θ?", "−3/4", ["3/4", "−4/3", "4/5"], "cos θ = −4/5 in Quadrant II, so tan θ = (3/5)/(−4/5) = −3/4."],
    ["A ramp rises 3 feet over a horizontal distance of 10 feet. About what angle does it make with the ground?", "About 16.7°", ["About 17.5°", "About 73.3°", "About 0.3°"], "tan θ = 3/10, so θ = arctan(0.3) ≈ 16.7°."]
  ]],
  ["3.3", "Sine and Cosine Function Values", [
    ["What is sin(5π/6)?", "1/2", ["−1/2", "√3/2", "−√3/2"], "5π/6 is in Quadrant II with reference angle π/6, and sine is positive there."],
    ["What is cos(−π/3)?", "1/2", ["−1/2", "√3/2", "−√3/2"], "Cosine is even, so cos(−π/3) = cos(π/3) = 1/2."],
    ["What is sin(7π/4) + cos(7π/4)?", "0", ["√2", "−√2", "1"], "sin(7π/4) = −√2/2 and cos(7π/4) = √2/2."],
    ["What are the coordinates of the point on the unit circle at angle 11π/6?", "(√3/2, −1/2)", ["(−√3/2, −1/2)", "(1/2, −√3/2)", "(√3/2, 1/2)"], "11π/6 is in Quadrant IV with reference angle π/6."]
  ]],
  ["3.4", "Sine and Cosine Function Graphs", [
    ["On which interval is y = cos x increasing?", "(π, 2π)", ["(0, π)", "(π/2, 3π/2)", "(−π/2, π/2)"], "cos x decreases from 1 to −1 on (0, π), then increases back to 1 on (π, 2π)."],
    ["How many zeros does y = sin x have on the closed interval [0, 4π]?", "5", ["4", "2", "8"], "sin x = 0 at 0, π, 2π, 3π, and 4π."],
    ["On which interval is y = sin x concave up?", "(π, 2π)", ["(0, π)", "(π/2, 3π/2)", "(0, 2π)"], "sin x is concave up where it is below its midline, on (π, 2π)."],
    ["How many solutions does sin x = 0.6 have on [0, 2π)?", "2", ["1", "0", "4"], "The line y = 0.6 crosses the sine curve once in Quadrant I and once in Quadrant II."]
  ]],
  ["3.5", "Sinusoidal Functions", [
    ["What is the range of f(x) = −4 cos(3x) + 1?", "[−3, 5]", ["[−5, 3]", "[−4, 4]", "[1, 5]"], "Amplitude 4 around midline 1 gives 1 − 4 = −3 to 1 + 4 = 5."],
    ["What is the period of f(x) = 2 sin(πx/6)?", "12", ["6", "π/6", "2"], "Period = 2π/(π/6) = 12."],
    ["What is the maximum value of f(x) = 5 sin(2x) − 3, and where does it first occur for x > 0?", "2, at x = π/4", ["5, at x = π/4", "2, at x = π/2", "8, at x = π/4"], "The max is 5 − 3 = 2 when sin(2x) = 1, so 2x = π/2 and x = π/4."],
    ["The graph shows a sinusoidal function. Which equation matches it?", "y = 2 sin(x) + 3", ["y = 3 sin(x) + 2", "y = 2 sin(2x) + 3", "y = 2 cos(x) + 3"], "Midline y = 3, amplitude 2, period 2π, and it starts at the midline going up.", { t: "line", title: "A sinusoidal function", x: { min: 0, max: 6.2832, ticks: [0, 1.5708, 3.1416, 4.7124, 6.2832], fmt: t => ["0", "π/2", "π", "3π/2", "2π"][Math.round(t / 1.5708)], label: "x" }, y: { min: 0, max: 6, ticks: [0, 1, 2, 3, 4, 5, 6], label: "y" }, series: [{ name: "y", pts: pcSine(2, 1, 0, 3, 0, 6.2832, 48) }] }]
  ]],
  ["3.6", "Sinusoidal Function Transformations", [
    ["Which describes g(x) = 3 sin(2(x − π/4)) + 1?", "Period π, shifted right π/4, midline y = 1", ["Period 2π, shifted left π/4, midline y = 1", "Period π, shifted right π/2, midline y = 3", "Period π/2, shifted right π/4, midline y = 1"], "Period = 2π/2 = π, the phase shift is π/4 right, and the vertical shift is 1."],
    ["The point (π/6, 1/2) is on y = sin x. Which point is on g(x) = 2 sin x − 1?", "(π/6, 0)", ["(π/6, 1)", "(π/3, 0)", "(π/6, −1/2)"], "g(π/6) = 2(1/2) − 1 = 0."],
    ["A sinusoid has a maximum of 10 at x = 0 and its next minimum of 2 at x = 3. Which function matches?", "y = 4 cos(πx/3) + 6", ["y = 4 cos(πx/6) + 6", "y = 8 cos(πx/3) + 2", "y = 4 sin(πx/3) + 6"], "Amplitude (10 − 2)/2 = 4, midline 6, and period 6 (max to min is half a period), so b = 2π/6 = π/3. Cosine starts at a max."],
    ["Which expression is equal to cos x for all x?", "sin(x + π/2)", ["sin(x − π/2)", "−sin x", "sin(x + π)"], "Shifting sine left by π/2 gives cosine."]
  ]],
  ["3.7", "Sinusoidal Function Context and Data Modeling", [
    ["The temperature t hours after midnight is T(t) = 15 − 10 cos(πt/12) °C. What is the maximum temperature, and when does it occur?", "25°C at noon", ["25°C at midnight", "15°C at noon", "10°C at 6 a.m."], "−cos is largest (1) when πt/12 = π, so t = 12, and T = 15 + 10 = 25."],
    ["A city gets a maximum of 15 hours of daylight and a minimum of 9 hours. What are the midline and amplitude of a sinusoidal model?", "Midline 12 hours, amplitude 3 hours", ["Midline 12 hours, amplitude 6 hours", "Midline 15 hours, amplitude 9 hours", "Midline 3 hours, amplitude 12 hours"], "Midline = (15 + 9)/2 = 12, and amplitude = (15 − 9)/2 = 3."],
    ["A Ferris wheel rider's height is h(t) = 30 − 25 cos(πt/5) meters after t minutes. What is the height at t = 3?", "About 37.7 m", ["About 22.3 m", "30 m", "55 m"], "cos(3π/5) ≈ −0.309, so h ≈ 30 + 7.73 = 37.7."],
    ["A weight on a spring has displacement y = 4 sin(2πt) cm after t seconds. When is y = 2 for the first time?", "t = 1/12 s", ["t = 1/6 s", "t = 1/4 s", "t = 1/2 s"], "sin(2πt) = 1/2 first when 2πt = π/6, so t = 1/12."]
  ]],
  ["3.8", "The Tangent Function", [
    ["What is tan(2π/3)?", "−√3", ["√3", "−1/√3", "1/√3"], "2π/3 is in Quadrant II with reference angle π/3, and tangent is negative there."],
    ["What is the period of f(x) = tan(2x)?", "π/2", ["π", "2π", "π/4"], "The period of tan(bx) is π/b = π/2."],
    ["A line through the origin makes a 150° angle with the positive x-axis. What is its slope?", "−√3/3", ["−√3", "√3/3", "−1/2"], "Slope = tan 150° = −tan 30° = −√3/3."],
    ["tan θ = 2 and θ is in Quadrant III. What is sin θ?", "−2/√5", ["2/√5", "−1/√5", "−2"], "Use the point (−1, −2): r = √5, so sin θ = −2/√5."]
  ]],
  ["3.9", "Inverse Trigonometric Functions", [
    ["What is arctan(−1)?", "−π/4", ["3π/4", "7π/4", "π/4"], "arctan's range is (−π/2, π/2), and tan(−π/4) = −1."],
    ["What is arcsin(sin(5π/6))?", "π/6", ["5π/6", "−π/6", "1/2"], "sin(5π/6) = 1/2, and arcsin(1/2) = π/6 (in the range [−π/2, π/2])."],
    ["What is cos(arcsin(3/5))?", "4/5", ["3/5", "−4/5", "5/3"], "The angle has opposite 3 and hypotenuse 5, so adjacent is 4. arcsin's range gives a positive cosine."],
    ["A 10-foot ladder reaches 8 feet up a wall. About what angle does it make with the ground?", "About 53.1°", ["About 36.9°", "About 38.7°", "About 0.8°"], "sin θ = 8/10, so θ = arcsin(0.8) ≈ 53.1°."]
  ]],
  ["3.10", "Trigonometric Equations and Inequalities", [
    ["Solve 2 cos x + √3 = 0 on [0, 2π).", "x = 5π/6 and 7π/6", ["x = π/6 and 11π/6", "x = 2π/3 and 4π/3", "x = 5π/6 only"], "cos x = −√3/2 in Quadrants II and III, with reference angle π/6."],
    ["Solve sin(2x) = 1 on [0, 2π).", "x = π/4 and 5π/4", ["x = π/2", "x = π/4 only", "x = π/4 and 3π/4"], "2x = π/2 or 5π/2 (since 2x ranges over [0, 4π)), so x = π/4 or 5π/4."],
    ["Solve tan x = √3 on [0, 2π).", "x = π/3 and 4π/3", ["x = π/3 and 2π/3", "x = π/6 and 7π/6", "x = π/3 only"], "tan x = √3 at π/3, and tangent repeats every π."],
    ["Solve sin x ≥ 1/2 on [0, 2π).", "π/6 ≤ x ≤ 5π/6", ["π/6 ≤ x ≤ π/3", "0 ≤ x ≤ π/6", "5π/6 ≤ x < 2π"], "sin x = 1/2 at π/6 and 5π/6, and sine is above 1/2 between them."]
  ]],
  ["3.11", "The Secant, Cosecant, and Cotangent Functions", [
    ["What is sec(2π/3)?", "−2", ["2", "−1/2", "−2/√3"], "cos(2π/3) = −1/2, so sec = 1/(−1/2) = −2."],
    ["sin θ = −5/13 and cos θ = 12/13. What is cot θ?", "−12/5", ["12/5", "−5/12", "13/12"], "cot θ = cos θ/sin θ = (12/13)/(−5/13)."],
    ["Solve csc x = 2 on [0, 2π).", "x = π/6 and 5π/6", ["x = π/3 and 2π/3", "x = 7π/6 and 11π/6", "x = π/6 only"], "csc x = 2 means sin x = 1/2."],
    ["For which x-values is y = csc x undefined?", "x = kπ for any integer k", ["x = π/2 + kπ", "x = 2kπ only", "It is defined everywhere"], "csc x = 1/sin x, and sin x = 0 at every multiple of π."]
  ]],
  ["3.12", "Equivalent Representations of Trigonometric Functions", [
    ["θ is in Quadrant I and sin θ = 0.6. What is sin(2θ)?", "0.96", ["1.2", "0.48", "0.28"], "cos θ = 0.8, so sin(2θ) = 2(0.6)(0.8) = 0.96."],
    ["cos θ = 0.8. What is cos(2θ)?", "0.28", ["1.6", "0.64", "0.96"], "cos(2θ) = 2cos²θ − 1 = 2(0.64) − 1 = 0.28."],
    ["What is the exact value of sin 75°?", "(√6 + √2)/4", ["(√6 − √2)/4", "(√3 + √2)/2", "√2/4"], "sin(45° + 30°) = sin45 cos30 + cos45 sin30 = (√6 + √2)/4."],
    ["Simplify (1 − cos²x)/sin x.", "sin x", ["cos x", "1", "tan x"], "1 − cos²x = sin²x, and sin²x/sin x = sin x."]
  ]],
  ["3.13", "Trigonometry and Polar Coordinates", [
    ["Convert the polar point (6, 5π/6) to rectangular coordinates.", "(−3√3, 3)", ["(3√3, 3)", "(−3, 3√3)", "(3√3, −3)"], "x = 6 cos(5π/6) = −3√3 and y = 6 sin(5π/6) = 3."],
    ["Which polar coordinates with r > 0 and 0 ≤ θ < 2π represent the point (0, −4)?", "(4, 3π/2)", ["(4, π/2)", "(4, π)", "(4, 0)"], "The point is 4 units from the origin, straight down."],
    ["What are the modulus and argument of z = −1 + i√3?", "Modulus 2, argument 2π/3", ["Modulus 2, argument π/3", "Modulus 4, argument 2π/3", "Modulus √2, argument 3π/4"], "|z| = √(1 + 3) = 2, and the point (−1, √3) is at angle 2π/3."],
    ["What is the product of 2(cos π/6 + i sin π/6) and 3(cos π/3 + i sin π/3)?", "6i", ["5i", "6", "6 + 6i"], "Multiply moduli (6) and add angles (π/2): 6(cos π/2 + i sin π/2) = 6i."]
  ]],
  ["3.14", "Polar Function Graphs", [
    ["Which describes the graph of r = 4 cos θ?", "A circle centered at (2, 0) with radius 2", ["A circle centered at (4, 0) with radius 4", "A circle centered at (0, 2) with radius 2", "A circle centered at the origin with radius 4"], "r² = 4r cos θ gives x² + y² = 4x, or (x − 2)² + y² = 4."],
    ["How many petals does r = 5 sin(3θ) have?", "3", ["6", "5", "9"], "For r = a sin(nθ) with n odd, there are n petals."],
    ["At which angles in [0, 2π) does r = 1 + 2 cos θ pass through the pole?", "θ = 2π/3 and 4π/3", ["θ = π/3 and 5π/3", "θ = π", "θ = π/2 and 3π/2"], "r = 0 when cos θ = −1/2."],
    ["What is the greatest distance from the origin on r = 3 + 3 sin θ, and at what angle?", "6, at θ = π/2", ["3, at θ = π/2", "6, at θ = 3π/2", "6, at θ = 0"], "sin θ = 1 at θ = π/2 gives r = 6."]
  ]],
  ["3.15", "Rates of Change in Polar Functions", [
    ["For r = 2 + sin θ, what is the average rate of change of r on [0, π/2]?", "2/π", ["π/2", "1", "1/2"], "r goes from 2 to 3, so (3 − 2)/(π/2) = 2/π."],
    ["For r = 3 cos θ on (π/2, π), r is negative and decreasing. What happens to the points on the graph?", "They move farther from the origin", ["They move closer to the origin", "They stay the same distance from the origin", "They pass through the origin repeatedly"], "r goes from 0 to −3, so |r| increases and the points get farther from the origin."],
    ["For r = θ², what is the average rate of change of r on [1, 3]?", "4", ["8", "2", "9"], "(9 − 1)/(3 − 1) = 4."],
    ["For r = 2 − 4 cos θ on (0, π/3), r is negative and increasing toward 0. What happens to the points on the graph?", "They move closer to the origin", ["They move farther from the origin", "They stay the same distance from the origin", "They move away and then back"], "r goes from −2 to 0, so |r| decreases and the points approach the origin."]
  ]]
]},
{ n: 4, name: "Functions Involving Parameters, Vectors, and Matrices", weight: "Not on the AP exam", topics: [
  ["4.1", "Parametric Functions", [
    ["For x(t) = 2t − 1 and y(t) = t², what point corresponds to t = 3?", "(5, 9)", ["(6, 9)", "(5, 6)", "(3, 5)"], "x(3) = 5 and y(3) = 9."],
    ["Eliminate the parameter: x = t + 2, y = 3t − 1.", "y = 3x − 7", ["y = 3x + 5", "y = 3x − 1", "y = (x − 2)/3"], "t = x − 2, so y = 3(x − 2) − 1 = 3x − 7."],
    ["A particle moves with x(t) = t² and y(t) = t³. At t = −1, which way is it moving?", "Left and up", ["Right and up", "Left and down", "Right and down"], "As t increases through −1, t² decreases (left) and t³ increases (up)."],
    ["For x(t) = t² − 4 and y(t) = t + 1, at which t-values does the curve cross the y-axis?", "t = 2 and t = −2", ["t = 4", "t = −1", "t = 0"], "The curve crosses the y-axis where x = 0: t² = 4."]
  ]],
  ["4.2", "Parametric Functions Modeling Planar Motion", [
    ["A ball's position is x(t) = 40t, y(t) = −16t² + 48t + 4, in feet. What is its maximum height?", "40 feet", ["44 feet", "36 feet", "52 feet"], "The vertex is at t = 1.5, and y(1.5) = −36 + 72 + 4 = 40."],
    ["For the same ball, x(t) = 40t and y(t) = −16t² + 48t + 4, how far has it traveled horizontally when it returns to a height of 4 feet?", "120 feet", ["60 feet", "160 feet", "40 feet"], "−16t² + 48t = 0 at t = 3, and x(3) = 120."],
    ["A particle moves with x(t) = 3t + 1 and y(t) = 4t − 2. How far does it travel each second?", "5 units", ["7 units", "1 unit", "25 units"], "Each second it moves 3 right and 4 up: √(3² + 4²) = 5."],
    ["A boat's position is x(t) = 2 + 3t, y(t) = 1 + 4t (in km) after t hours. Where is it at t = 2?", "(8, 9)", ["(6, 8)", "(5, 5)", "(8, 8)"], "x(2) = 8 and y(2) = 9."]
  ]],
  ["4.3", "Parametric Functions and Rates of Change", [
    ["For x(t) = t² and y(t) = 4t, what is the average rate of change of y with respect to x from t = 1 to t = 3?", "1", ["4", "2", "1/2"], "Δy = 12 − 4 = 8 and Δx = 9 − 1 = 8."],
    ["For x(t) = 2t + 1 and y(t) = t² − 3, what is the average rate of change of y with respect to t on [0, 2]?", "2", ["4", "1", "3"], "y(2) − y(0) = 1 − (−3) = 4, divided by 2."],
    ["A particle moves with x(t) = t³ and y(t) = 4 − t². At t = 1, which way is it moving?", "Right and down", ["Right and up", "Left and down", "Left and up"], "t³ is increasing (right) and 4 − t² is decreasing for t > 0 (down)."],
    ["For x(t) = t + 1 and y(t) = t³, what is the slope of the secant line between t = 0 and t = 2?", "4", ["8", "2", "6"], "Δy = 8 and Δx = 2, so the slope is 8/2 = 4."]
  ]],
  ["4.4", "Parametrically Defined Circles and Lines", [
    ["What are the center and radius of x = 4 + 2 cos t, y = −1 + 2 sin t?", "Center (4, −1), radius 2", ["Center (−4, 1), radius 2", "Center (4, −1), radius 4", "Center (2, 2), radius 4"], "(x − 4)² + (y + 1)² = 4 cos²t + 4 sin²t = 4."],
    ["Which parametrizes the segment from (−2, 5) to (4, 2) for 0 ≤ t ≤ 1?", "x = −2 + 6t, y = 5 − 3t", ["x = −2 + 4t, y = 5 + 2t", "x = −2 + 4t, y = 5 − 2t", "x = 6t, y = −3t"], "Start at (−2, 5) and add t times the change (6, −3)."],
    ["Which parametrizes the circle of radius 3 centered at the origin, moving clockwise?", "x = 3 cos t, y = −3 sin t", ["x = 3 cos t, y = 3 sin t", "x = cos 3t, y = sin 3t", "x = 3 cos t, y = 3 cos t"], "Starting at (3, 0), y becomes negative right away, so the point moves clockwise."],
    ["Where does the line x = 1 + 2t, y = 3 − t cross the x-axis?", "(7, 0)", ["(3, 0)", "(0, 3.5)", "(−5, 0)"], "y = 0 when t = 3, and x(3) = 7."]
  ]],
  ["4.5", "Implicitly Defined Functions", [
    ["On the curve x² + y² = 169, what are the y-values when x = 5?", "y = 12 and y = −12", ["y = 12 only", "y = 13 and y = −13", "y = √164 and y = −√164"], "y² = 169 − 25 = 144."],
    ["On the curve x² + xy = 10, what is y when x = 2?", "3", ["6", "2", "7"], "4 + 2y = 10, so y = 3."],
    ["What are the x-intercepts of 4x² + y² = 36?", "(3, 0) and (−3, 0)", ["(6, 0) and (−6, 0)", "(9, 0) and (−9, 0)", "(2, 0) and (−2, 0)"], "Setting y = 0: 4x² = 36, so x = ±3."],
    ["Which function describes the part of x² + y² = 25 that contains the point (3, 4)?", "y = √(25 − x²)", ["y = −√(25 − x²)", "y = 25 − x²", "y = √(x² − 25)"], "(3, 4) is on the upper half, where y is positive."]
  ]],
  ["4.6", "Conic Sections", [
    ["What are the center and major-axis length of (x − 2)²/16 + (y + 1)²/9 = 1?", "Center (2, −1), major axis length 8", ["Center (−2, 1), major axis length 8", "Center (2, −1), major axis length 16", "Center (2, −1), major axis length 6"], "a² = 16, so a = 4 and the major axis is 2a = 8."],
    ["What are the asymptotes of x²/9 − y²/16 = 1?", "y = ±(4/3)x", ["y = ±(3/4)x", "y = ±(16/9)x", "y = ±4x"], "For x²/a² − y²/b² = 1, the asymptotes are y = ±(b/a)x."],
    ["What is the vertex of the parabola y = (x − 3)² + 2?", "(3, 2)", ["(−3, 2)", "(3, −2)", "(2, 3)"], "Vertex form y = (x − h)² + k has vertex (h, k)."],
    ["Which describes x² + y² − 6x + 4y = 12?", "A circle with center (3, −2) and radius 5", ["A circle with center (−3, 2) and radius 5", "A circle with center (3, −2) and radius √12", "An ellipse with center (3, −2)"], "Complete the square: (x − 3)² + (y + 2)² = 12 + 9 + 4 = 25."]
  ]],
  ["4.7", "Parametrization of Implicitly Defined Functions", [
    ["Which parametrizes (x − 1)²/4 + y²/9 = 1?", "x = 1 + 2 cos t, y = 3 sin t", ["x = 1 + 4 cos t, y = 9 sin t", "x = 2 cos t, y = 3 sin t", "x = 1 + 3 cos t, y = 2 sin t"], "Substitute cos t = (x − 1)/2 and sin t = y/3 into cos²t + sin²t = 1."],
    ["Which parametrizes the curve y² = x?", "x = t², y = t", ["x = t, y = t²", "x = √t, y = t", "x = t², y = t²"], "With y = t, x = y² = t²."],
    ["Which parametrizes x²/25 − y²/4 = 1?", "x = 5 sec t, y = 2 tan t", ["x = 5 cos t, y = 2 sin t", "x = 25 sec t, y = 4 tan t", "x = 5 tan t, y = 2 sec t"], "sec²t − tan²t = 1 matches x²/25 − y²/4 = 1."],
    ["Which parametrizes the circle x² + y² = 16 starting at (0, 4) and moving counterclockwise?", "x = −4 sin t, y = 4 cos t", ["x = 4 sin t, y = 4 cos t", "x = 4 cos t, y = 4 sin t", "x = 4 cos t, y = −4 sin t"], "At t = 0 the point is (0, 4). As t increases, x becomes negative, so it moves left from the top: counterclockwise."]
  ]],
  ["4.8", "Vectors", [
    ["Let u = ⟨2, −3⟩ and v = ⟨−1, 4⟩. What is 3u − v?", "⟨7, −13⟩", ["⟨5, −5⟩", "⟨7, −5⟩", "⟨6, −13⟩"], "3u = ⟨6, −9⟩, and ⟨6, −9⟩ − ⟨−1, 4⟩ = ⟨7, −13⟩."],
    ["What is the angle between ⟨1, 0⟩ and ⟨1, 1⟩?", "45°", ["30°", "60°", "90°"], "cos θ = (1)/(1 · √2) = 1/√2."],
    ["What is the magnitude of ⟨5, −12⟩?", "13", ["7", "17", "169"], "√(25 + 144) = 13."],
    ["A plane flies east at 300 km/h while the wind blows north at 40 km/h. What is its speed relative to the ground?", "About 302.7 km/h", ["340 km/h", "260 km/h", "300 km/h"], "|⟨300, 40⟩| = √(90,000 + 1,600) ≈ 302.7."]
  ]],
  ["4.9", "Vector-Valued Functions", [
    ["For p(t) = ⟨t², 3t⟩, what is the displacement vector from t = 1 to t = 3?", "⟨8, 6⟩", ["⟨9, 9⟩", "⟨4, 6⟩", "⟨8, 3⟩"], "p(3) − p(1) = ⟨9, 9⟩ − ⟨1, 3⟩."],
    ["For p(t) = ⟨t², 3t⟩, what is the magnitude of the displacement from t = 1 to t = 3?", "10", ["14", "6", "100"], "|⟨8, 6⟩| = √(64 + 36) = 10."],
    ["For p(t) = ⟨2 + 3t, 1 − t⟩, what is the average velocity on [0, 4]?", "⟨3, −1⟩", ["⟨12, −4⟩", "⟨14, −3⟩", "⟨2, 1⟩"], "Displacement ⟨12, −4⟩ divided by 4."],
    ["For p(t) = ⟨cos t, sin t⟩, where is the particle at t = π?", "(−1, 0)", ["(1, 0)", "(0, −1)", "(0, 1)"], "cos π = −1 and sin π = 0."]
  ]],
  ["4.10", "Matrices", [
    ["What is [[2, 1], [0, 3]] · [[1, 4], [2, −1]]?", "[[4, 7], [6, −3]]", ["[[2, 4], [0, −3]]", "[[4, 7], [6, 3]]", "[[3, 5], [2, 2]]"], "Row 1: 2·1 + 1·2 = 4, 2·4 + 1·(−1) = 7. Row 2: 0 + 3·2 = 6, 0 + 3·(−1) = −3."],
    ["A = [[1, 2], [3, 4]] and B = [[0, 1], [5, 2]]. What is 2A − B?", "[[2, 3], [1, 6]]", ["[[2, 4], [6, 8]]", "[[1, 1], [−2, 2]]", "[[2, 3], [11, 10]]"], "2A = [[2, 4], [6, 8]], minus B gives [[2, 3], [1, 6]]."],
    ["A is a 2 × 3 matrix and B is a 3 × 4 matrix. What are the dimensions of AB?", "2 × 4", ["3 × 3", "4 × 2", "AB is undefined"], "The inner dimensions (3) match, and the result has A's rows and B's columns."],
    ["A = [[1, 2], [3, 4]]. What is A times the vector ⟨3, −1⟩?", "⟨1, 5⟩", ["⟨3, −2⟩", "⟨5, 13⟩", "⟨1, −1⟩"], "1·3 + 2·(−1) = 1 and 3·3 + 4·(−1) = 5."]
  ]],
  ["4.11", "The Inverse and Determinant of a Matrix", [
    ["What is the determinant of [[3, 5], [2, 4]]?", "2", ["22", "−2", "7"], "3·4 − 5·2 = 2."],
    ["What is the inverse of [[3, 5], [2, 4]]?", "[[2, −2.5], [−1, 1.5]]", ["[[4, −5], [−2, 3]]", "[[1/3, 1/5], [1/2, 1/4]]", "[[−2, 2.5], [1, −1.5]]"], "(1/2)[[4, −5], [−2, 3]]."],
    ["For what value of k is [[k, 6], [2, 3]] not invertible?", "k = 4", ["k = 9", "k = 1", "k = −4"], "The determinant 3k − 12 = 0 gives k = 4."],
    ["A linear transformation has a matrix with determinant −3. A region of area 5 is transformed. What is the area of the image?", "15", ["−15", "5/3", "8"], "Areas are multiplied by |det| = 3. The negative sign only means orientation is reversed."]
  ]],
  ["4.12", "Linear Transformations and Matrices", [
    ["The matrix [[0, 1], [1, 0]] is applied to the point (5, −2). What is the image?", "(−2, 5)", ["(5, −2)", "(2, −5)", "(−5, 2)"], "This matrix swaps x and y: a reflection over y = x."],
    ["Which matrix rotates points 180° about the origin?", "[[−1, 0], [0, −1]]", ["[[0, −1], [1, 0]]", "[[1, 0], [0, −1]]", "[[−1, 0], [0, 1]]"], "A 180° rotation sends (x, y) to (−x, −y)."],
    ["The point (1, 0) is rotated 60° counterclockwise about the origin. What is the image?", "(1/2, √3/2)", ["(√3/2, 1/2)", "(−1/2, √3/2)", "(1/2, −√3/2)"], "(cos 60°, sin 60°)."],
    ["The unit square is transformed by [[3, 0], [0, 3]]. What is the area of the image?", "9", ["3", "6", "1"], "The determinant is 9, so areas are multiplied by 9."]
  ]],
  ["4.13", "Matrices as Functions", [
    ["R = [[0, −1], [1, 0]] rotates points 90° counterclockwise. What transformation does R² perform?", "A 180° rotation", ["A 90° clockwise rotation", "A reflection over the x-axis", "No change"], "R² = [[−1, 0], [0, −1]], which is two 90° rotations."],
    ["A = [[2, 0], [0, 1]]. Where does A⁻¹ send the point (6, 5)?", "(3, 5)", ["(12, 5)", "(6, 2.5)", "(3, 2.5)"], "A⁻¹ = [[1/2, 0], [0, 1]], which halves x."],
    ["F = [[1, 0], [0, −1]] reflects over the x-axis, and R = [[0, −1], [1, 0]] rotates 90° counterclockwise. What single transformation is 'reflect with F, then rotate with R'?", "A reflection over the line y = x", ["A reflection over the line y = −x", "A 270° rotation", "A 90° rotation"], "RF = [[0, 1], [1, 0]], which swaps x and y."],
    ["The shear matrix [[1, 2], [0, 1]] is applied to (2, 3). What is the image?", "(8, 3)", ["(2, 7)", "(5, 3)", "(8, 6)"], "x' = 2 + 2·3 = 8 and y' = 3."]
  ]],
  ["4.14", "Matrices Modeling Contexts", [
    ["Two gyms share 1,000 members. Each month, gym A keeps 90% and loses 10% to B; gym B keeps 80% and loses 20% to A. Starting with 600 at A and 400 at B, how many are at each gym after one month?", "620 at A and 380 at B", ["600 at A and 400 at B", "580 at A and 420 at B", "640 at A and 360 at B"], "A: 0.9(600) + 0.2(400) = 620. B: 0.1(600) + 0.8(400) = 380."],
    ["Using the same gyms (A keeps 90%, B keeps 80%), what is the steady-state number of members at gym A?", "About 667", ["500", "600", "About 750"], "At steady state, 0.1A = 0.2B, so A = 2B and A = 2,000/3 ≈ 667."],
    ["Using the same gyms, starting with 600 at A and 400 at B, how many are at gym A after two months?", "634", ["620", "640", "658"], "After one month: 620 and 380. Then A = 0.9(620) + 0.2(380) = 558 + 76 = 634."],
    ["If P is the transition matrix and this month's distribution is known, how can you find last month's distribution?", "Multiply this month's distribution by P⁻¹", ["Multiply this month's distribution by P", "Multiply this month's distribution by 2P", "Subtract P from this month's distribution"], "If x₁ = Px₀, then x₀ = P⁻¹x₁."]
  ]]
]}
);
