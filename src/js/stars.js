import Starback from 'starback'

export default function showStars() {
  const canvas = document.getElementById('canvas')
  new Starback(canvas, {
    width: document.body.clientWidth,
    height: document.body.clientHeight,
    type: 'line',
    frequency: 400,
    slope: { x: -1, y: 10 },
    directionX: 2,
    speed: 30,
    spread: -10,
    randomOpacity: true,
    quantity: 20,
  })
}
