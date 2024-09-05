import { Shape } from './shapes/shape.js'

function newRenderer (shape: Shape): any {
  return {
    draw () {
      const area: number = shape.computeArea()
      console.log('Shape drawn\n' + 'Its area is ' + String(area))
    }
  }
}

export { newRenderer }
