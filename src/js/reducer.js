import { isEmpty, isLength } from './utils'
const isMobile = window.innerWidth < 768

export const initialState = {
  hasAlbums: false,
  hasAlbum: false,
  hasPhoto: false,
  albums: [],
  album: {},
  photo: {},
  isMobile: isMobile,
}

const err = (state, acc, error) => {
  console.error(acc.type, error)
  console.table(state)
  console.table(acc)
}

const selectItem = (arr, index) => {
  if (!isLength(index)) return {}
  if (index >= arr.length) return {}

  return arr[index]
}

const actions = {
  INIT: (state, acc) => {
    if (isEmpty(acc.albums)) {
      err(state, acc, 'acc.albums is empty')
      return state
    }
    return { ...state, albums: acc.albums, hasAlbums: true }
  },

  // Select Album and Photo (optional) by index
  SELECT: (state, acc) => {
    // Photo (and Album)
    if (acc.albumIndex != null && acc.photoIndex != null) {
      const album = selectItem(state.albums, acc.albumIndex)
      if (isEmpty(album)) {
        err(state, acc, `album (${acc.albumIndex}) not found`)
        return state
      }

      const photo = selectItem(album.photos, acc.photoIndex)
      if (isEmpty(photo)) {
        err(state, acc, `photo (${acc.photoIndex}) not found`)
        return state
      }

      return { ...state, album, photo, hasAlbum: true, hasPhoto: true }
    }

    // Album
    if (acc.albumIndex != null) {
      const album = selectItem(state.albums, acc.albumIndex)
      if (isEmpty(album)) {
        err(state, acc, `album (${acc.albumIndex}) not found 2`)
        return state
      }

      return { ...state, album, hasAlbum: true }
    }

    return {
      ...state,
      album: album,
      hasAlbum: true,
    }
  },

  // Select Photo by index
  SET_PHOTO: (state, acc) => {
    if (isEmpty(state.albums)) {
      err(state, acc, 'state.albums is empty')
      return state
    }

    if (isEmpty(state.album)) {
      err(state, acc, 'state.album is empty')
      return state
    }

    if (isNaN(acc.photoIndex)) {
      err(state, acc, 'acc.photoIndex isNaN')
      return state
    }

    const photos = state.album.photos
    if (isEmpty(photos)) {
      err(state, acc, 'state.album.photos is empty')
      return state
    }

    const index = Number(acc.photoIndex)

    if (index >= photos.length) {
      err(state, acc, 'acc.photoIndex is out of range')
      return state
    }

    const photo = selectItem(photos, index)
    if (isEmpty(photo)) {
      err(state, acc, `photo not found`)
      return state
    }

    return {
      ...state,
      photo: photo,
      hasPhoto: true,
    }
  },

  // Deselect Photo
  UNSET_PHOTO: (state, _acc) => {
    return {
      ...state,
      photo: {},
      hasPhoto: false,
    }
  },

  MODAL_CLOSE: (state, _acc) => {
    history.pushState(null, '', '/photos/' + state.album.id)
    return {
      ...state,
      photo: {},
      hasPhoto: false,
    }
  },
}

export function reducer(state, acc) {
  const actionReducer = actions[acc.type]
  return actionReducer ? actionReducer(state, acc) : state
}
