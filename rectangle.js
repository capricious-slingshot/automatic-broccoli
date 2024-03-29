// ES6 Syntax:
// const rect = (x, y, callback) => { ... }

// Depricated CommonJS Syntax:
// export.modules = (x, y, callback) => { ... }

const rect = (x, y, callback) => {
  if (x <= 0 || y <= 0) {
    callback(new Error(`Rectangle dimension must be greater than zero. Recieved: ${x}, ${y}`))
  } else {
    setTimeout(() =>
      callback(null, {
        perimiter: () => 2 * (x + y),
        area: () => x * y
      }),
      2000
    )
  }
}

export default rect