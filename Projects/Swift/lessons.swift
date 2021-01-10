// 01
// Quadratic equation. Setting A,B and C variables
var a: Double = 3.0
var b: Double = -11.0
var c: Double = -4.0
// Alternative way:
// var a, b, c: Double

// Defining X values (roots)
var root1: Double
var root2: Double
// Solving the root1 first. Breaking it down
root1 = (b*b - 4*a*c)
root1 = root1.squareRoot()
root1 = -b + root1
root1 = root1 / (2 * a)
// Solving the root2. Breaking it down
root2 = (-b - (b*b - 4*a*c).squareRoot()) / (2*a)
// Taking a look on root1 and root2
print(root1)
print(root2)
// END
//
// 02
