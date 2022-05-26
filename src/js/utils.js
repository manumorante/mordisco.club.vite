// https://lodash.com/

export function isLength(value) {
  return !isNaN(value) && value >= 0
}

export function isEmpty(value) {
  if (value == null) {
    return true
  }

  if (Array.isArray(value)) {
    return !value.length
  }

  if (typeof value === 'object') {
    return !Object.keys(value).length
  }

  return true
}

export function valIndex(value, maxLength) {
  const index = Number(value)
  if (isNaN(index)) return 0
  if (index < 0) return 0
  if (index > maxLength - 1) return maxLength - 1
  return index
}

export function randomizeArray(arr) {
  return arr
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
}
