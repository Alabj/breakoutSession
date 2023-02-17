function tellFortune(X, Y, Z, N) {
  let result = "You will be an " + X + "in " + Y + "and married to " + Z + "with " + N + " kids"
  return result
}
console.log(tellFortune("accountant ", " lekki ", "tosin ", 12))

function calculateDogAge(x) {
  let result = "Your doggie is " + 7 * x + " years old " + "in dog years"
  return result
}
console.log(calculateDogAge(4))
console.log(calculateDogAge(7))
console.log(calculateDogAge(9))

function calculateSupply(x, y) {
  let result = "You will need " + x * y + " to last you until the ripe old age of " + x
  return result
}
console.log(calculateSupply(42, 9))
console.log(calculateSupply(80, 2))
console.log(calculateSupply(35, 4))

function calCircumferenceOfCircle(r) {
  let formula = 2 * 3.142 * r
  let result = "The circumference is " + formula 
  return result
}
console.log(calCircumferenceOfCircle(12))

function calAreaOfCircle(r) {
  let formula = 3.142 * r * r
  let result = "The area is " + formula 
  return result
}
console.log(calAreaOfCircle(4))

function celsiusToFahrenheit(c) {
  let formula =  c * 1.8 + 32 
  let Answer = c + " celcius is " + formula + " fahrenheit"
  return Answer
}
console.log(celsiusToFahrenheit(10))

function fahrenheitToCelsius(f) {
  let formula = (f - 32) * 0.5555555555555556
  let solution = f + " fahrenheit is " +formula + " celcuis"
  return solution
}
console.log(fahrenheitToCelsius(60))
