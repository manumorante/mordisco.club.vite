// https://lodash.com/

export const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

export const isLength = (value) => !isNaN(value) && value >= 0

export const isEmpty = (value) => {
  if (value == null) return true
  if (Array.isArray(value)) return !value.length
  if (typeof value === 'object') return !Object.keys(value).length

  return true
}

export const isFill = (value) => !isEmpty(value)
export const isNum = (n) => !isNaN(parseFloat(n)) && isFinite(n)

export const valIndex = (value, maxLength) => {
  const index = Number(value)
  if (isNaN(index)) return 0
  if (index < 0) return 0
  if (index > maxLength - 1) return maxLength - 1
  return index
}

// Return the value is number or 0
export const intOrZero = (value) => (isNaN(value) ? 0 : parseInt(value))

export const setArrIndex = (arr, index) => {
  if (!isLength(index)) return {}
  if (Number(index) >= arr.length) return {}

  return arr[parseInt(index)]
}

// Generate a random number between min and max
export const random = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Cut a random item from original array and return it
export const cutRandom = (arr) => {
  if (arr.length === 0) return null

  const i = random(0, arr.length - 1)
  const item = arr[i]
  arr.splice(i, 1)

  return item
}
