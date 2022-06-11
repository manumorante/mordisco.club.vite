// https://lodash.com/

export const isMobile = window.innerWidth < 768

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
