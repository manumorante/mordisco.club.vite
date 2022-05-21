// https://lodash.com/

export function isLength(value) {
  return value && !isNaN(value) && value >= 0
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