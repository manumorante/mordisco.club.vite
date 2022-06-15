import Starback from 'starback'

export default function Starfall() {
  const canvas = document.getElementById('canvas')

  new Starback(canvas, {
    width: document.body.clientWidth,
    height: document.body.clientHeight,
    type: 'line',
    frequency: 100,
    slope: { x: -1, y: 10 },
    directionX: 2,
    speed: 30,
    spread: -10,
    randomOpacity: true,
    quantity: 20,
  })

  return true
}
