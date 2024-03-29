// ES6 Syntax:
import {rect} from './rectangle.js'

// Depricated CommonJS Syntax:
// const purple = require('./rectangle')

function solveRect(l, w) {
  console.log(`Solving for rectangle with dimensions: ${l}, ${w}`)

  rect(l, w, (err, rectangle) => {
    if (err) {
      console.log('ERROR:', err.message)
    } else {
      console.log(`Area of rectangle with dimensions: ${rectangle.area()}`)
      console.log(`Perimiter of rectangle with dimensions: ${rectangle.perimiter()}`)
    }
  })
  console.log('This statement is logged after the call to rect() ')
}

solveRect(2, 4)
solveRect(3, 5)
solveRect(0, 5)
solveRect(5, -3)