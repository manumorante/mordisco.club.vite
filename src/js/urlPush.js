export const urlPush = (url) => history.pushState(null, '', url)
export const urlPhotos = () => urlPush(`/photos`)
export const urlAlbum = (albumID) => urlPush(`/photos/${albumID}`)
export const urlPhoto = (albumID, photoID) =>
  urlPush(`/photos/${albumID}/${photoID}`)
