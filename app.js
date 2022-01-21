const rect = require('./rectangle')

function solveRect(l, w) {
  console.log(`Solving for rectangle with dimensions: ${l}, ${w}`)

  if (l <= 0 || w <= 0) {
    console.log(`Rectangle dimension must be greater than zero. Recieved: ${l}, ${w}`)
  } else {
    console.log(`Area of rectangle: ${rect.area(l, w)}`)
    console.log(`Perimiter of rectangle: ${rect.perimiter(l, w)}`)
  }
}

solveRect(2, 4)
solveRect(3, 5)
solveRect(0, 5)
solveRect(5, -3)
