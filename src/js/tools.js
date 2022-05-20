export const validAlbum = (value, max) => {
  if (isNaN(value)) return 0
  if (value < 0) return 0
  if (value >= max) return max - 1
  return value
}

export const validPhoto = (value, max) => {
  if (isNaN(value)) return -1
  if (value >= max) return max - 1
  return value
}

export const setUrl = (album = 0, photos = null) => {
  let url = ''
  url += album ? `/photos/${album}` : ''
  url += photos ? `/${photos}` : ''
  window.history.pushState(null, null, url)
}
