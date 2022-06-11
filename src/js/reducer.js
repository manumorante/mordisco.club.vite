/* 
  NOTAS GENERALES ENTRE MIS APPS
  FUNCIONES
  get: devuelve siempre una dupla [error, objeto]
  set: devuelve el objeto o provoca error

  Consejo
  Usa las `get` en las `set`

  Error en funciones
  - si es `get` pinta un error en consola y devuelve una dupla [true, {}]
  - si es `set` pinta un error en consola y provoca un error throw new Error()
*/

import { isEmpty, isLength, setArrIndex } from './utils'
import { urlPush, urlPhotos, urlAlbum, urlPhoto } from './urlPush'
const isMobile = window.innerWidth < 768

export const initialState = {
  hasAlbums: false,
  albums: [],
  album: {},
  photo: {},
  isMobile: isMobile,
}

// Show error log in console and return the error dupla [true, {}]
const err = (error) => {
  console.log('🟥', error)
  return [true, {}]
}

// ALBUM
// To set an album you need albumID
const getAlbum = (state, acc) => {
  const id = acc.albumID
  if (isNaN(id)) return err(`getAlbum() photoID(${id}) is NaN`)

  const album = setArrIndex(state.albums, id)
  if (isEmpty(album)) return err(`getAlbum() album(${id}) not found`)

  if (!album.hasOwnProperty('photos'))
    err(`getAlbum() album(${id}) has no photos`)

  if (isEmpty(album.photos))
    return err(`getAlbum() album(${id}).photos isEmpty`)

  return [false, album]
}

const setAlbum = (state, acc) => {
  const album = getAlbum(state, acc)
  if (album[0]) return state

  return { ...state, album: album[1] }
}

// PHOTO
// To set a photo you need albumID and photoID
const getPhoto = (state, acc) => {
  if (isNaN(acc.photoID))
    return err(`getPhoto() photoID(${acc.photoID}) is NaN`)

  if (isNaN(acc.albumID))
    return err(`getPhoto() photoID(${acc.albumID}) is NaN`)

  const album = getAlbum(state, acc)
  if (album[0]) return [true, {}]

  const photo = setArrIndex(album[1].photos, acc.photoID)
  if (isEmpty(photo)) return err(`photo(${acc.photoID}) not found`)

  return [false, photo]
}

const setPhoto = (state, acc) => {
  const album = getAlbum(state, acc)
  if (album[0]) return state

  const photo = getPhoto(state, acc)
  if (photo[0]) return state

  urlPhoto(acc.albumID, acc.photoID)

  return { ...state, album: album[1], photo: photo[1] }
}

const actions = {
  INIT: (state, acc) => {
    if (isEmpty(acc.albums)) throw new Error('INIT: albums isEmpty')

    return {
      ...state,
      albums: acc.albums,
      hasAlbums: true,
      album: {},
      photo: {},
    }
  },

  // Select Album or Photo
  SELECT: (state, acc) => {
    if (!isNaN(acc.photoID)) return setPhoto(state, acc)
    if (!isNaN(acc.albumID)) return setAlbum(state, acc)

    return state
  },

  // Set Album or Photo by id
  SET_ALBUM: (state, acc) => setAlbum(state, acc),
  SET_PHOTO: (state, acc) => setPhoto(state, acc),

  // Deselect Album and Photo
  UNSET_ALBUM: (state, _acc) => {
    return { ...state, album: {}, photo: {} }
  },

  UNSET_PHOTO: (state, _acc) => {
    return { ...state, photo: {} }
  },

  MODAL_CLOSE: (state, _acc) => {
    urlAlbum(state.album.id)
    return { ...state, photo: {} }
  },

  NEXT_PHOTO: (state, _acc) => {
    let id = state.photo.id + 1
    if (id >= state.album.photos.length) return state

    history.pushState(null, '', '/photos/' + state.album.id + '/' + id)

    return setPhoto(state, {
      albumID: state.album.id,
      photoID: id,
    })
  },

  PREV_PHOTO: (state, _acc) => {
    let id = state.photo.id - 1
    if (id < 0) return state

    history.pushState(null, '', '/photos/' + state.album.id + '/' + id)

    return setPhoto(state, {
      albumID: state.album.id,
      photoID: id,
    })
  },
}

export function reducer(state, acc) {
  const actionReducer = actions[acc.type]
  return actionReducer ? actionReducer(state, acc) : state
}
