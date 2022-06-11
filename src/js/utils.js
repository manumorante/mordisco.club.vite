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

export function or0(value) {
  return isNaN(value) ? 0 : value
}

export function setArrIndex(arr, index) {
  if (!isLength(index)) return {}
  if (Number(index) >= arr.length) return {}

  return arr[parseInt(index)]
}
