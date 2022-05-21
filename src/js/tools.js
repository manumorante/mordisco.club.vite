// Object Not Empty
export const oNe = (obj) => {
  return (
    obj &&
    typeof obj === 'object' &&
    !Array.isArray(obj) &&
    Object.keys(obj).length > 0
  )
}

// Array Not Empty
export const aNe = (arr) => {
  return arr && Array.isArray(arr) && arr.length > 0
}

// String Not Empty
export const sNe = (str) => {
  return str && str.length > 0
}
