// interface Rectangle {
//   width: number
//   height: number
//   computeArea: () => number
// }

// function newRectangle (width: number, height: number): Rectangle {
//   return {
//     width,
//     height,

//     computeArea: function (): number {
//       return width * height
//     }
//   }
// }

// export { Rectangle, newRectangle }
import { Shape } from './shape.js'

function rectangle (length: number, height: number): Shape {
  return {
    computeArea: function (): number {
      return length * height
    }
  }
}

export { rectangle }
