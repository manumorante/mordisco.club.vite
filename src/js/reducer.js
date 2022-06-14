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

import { isNum, isEmpty, setArrIndex, cutRandom } from './utils'
import { urlAlbum, urlPhoto } from './urlPush'

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
  if (!'photos' in album) err(`getAlbum() album(${id}) has no photos`)
  if (isEmpty(album.photos)) return err(`getAlbum() album(${id}).photos isEmpty`)

  return [false, album]
}

// PHOTO
// To set a photo you need albumID and photoID
const getPhoto = (state, acc) => {
  if (isNaN(acc.photoID)) return err(`getPhoto() photoID(${acc.photoID}) is NaN`)
  if (isNaN(acc.albumID)) return err(`getPhoto() photoID(${acc.albumID}) is NaN`)

  const album = getAlbum(state, acc)
  if (album[0]) return [true, {}]

  const photo = setArrIndex(album[1].photos, acc.photoID)
  if (isEmpty(photo)) return err(`photo(${acc.photoID}) not found`)

  return [false, photo]
}

const actions = {
  INIT: (state, _) => {
    if (isEmpty(state.albums)) throw new Error('INIT: albums isEmpty')

    return { ...state, success: true }
  },

  // Select Album or Photo
  SET: (state, acc) => {
    if (isNum(acc.photoID)) return actions.SET_PHOTO(state, acc)
    if (isNum(acc.albumID)) return actions.SET_ALBUM(state, acc)

    return state
  },

  SET_ALBUM: (state, acc) => {
    const album = getAlbum(state, acc)
    if (album[0]) return state

    urlAlbum(acc.albumID)

    return { ...state, album: album[1] }
  },

  SET_PHOTO: (state, acc) => {
    const album = getAlbum(state, acc)
    if (album[0]) return state

    const photo = getPhoto(state, acc)
    if (photo[0]) return state

    urlPhoto(acc.albumID, acc.photoID)

    return { ...state, album: album[1], photo: photo[1] }
  },

  MODAL_CLOSE: (state, _) => {
    urlAlbum(state.album.id)
    return { ...state, photo: {} }
  },

  NEXT_PHOTO: (state, _) => {
    let id = state.photo.id + 1
    if (id >= state.album.photos.length) return state

    urlPhoto(state.album.id, id)

    return actions.SET_PHOTO(state, { albumID: state.album.id, photoID: id })
  },

  PREV_PHOTO: (state, _) => {
    let id = state.photo.id - 1
    if (id < 0) return state

    urlPhoto(state.album.id, id)

    return actions.SET_PHOTO(state, { albumID: state.album.id, photoID: id })
  },

  UPDATE_PHRASE: (state, _) => {
    if (state.phrases.length === 0) return state
    return { ...state, phrase: cutRandom(state.phrases) }
  },
}

export function reducer(state, acc) {
  const actionReducer = actions[acc.type]
  return actionReducer ? actionReducer(state, acc) : state
}
