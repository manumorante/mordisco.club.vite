import { oNe, aNe, sNe } from './tools'
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

const DEFAULT_ALBUM_INDEX = 0

const albumValidIndex = (param, max) => {
  const index = Number(param)
  if (isNaN(index)) return DEFAULT_ALBUM_INDEX
  if (index < 0) return DEFAULT_ALBUM_INDEX
  if (index > max) return max
  return index
}

const photoValidIndex = (index, max) => {
  if (index == null) return -1
  if (isNaN(index)) return -1
  if (index > max) return max
  return index
}

const selectAlbumByIndex = (albums, pIndex) => {
  return albums[albumValidIndex(pIndex)]
}

const selectPhotoByIndex = (album, pIndex) => {
  const index = photoValidIndex(pIndex, album.photos.length)
  if (index < 0) return {}

  const photo = album.photos[index]
  if (!oNe(photo)) return {}

  return { photo: photo, hasPhoto: true }
}

const actions = {
  INIT: (state, acc) => {
    return { ...state, albums: acc.data, hasAlbums: true }
  },

  // Select Album and Photo (optional) by index
  SELECT: (state, acc) => {
    const album = selectAlbumByIndex(state.albums, acc.albumIndex)

    return {
      ...state,
      album: album,
      hasAlbum: true,
      ...selectPhotoByIndex(album, acc.photoIndex),
    }
  },

  // Select Photo by index
  SET_PHOTO: (state, acc) => {
    return {
      ...state,
      ...selectPhotoByIndex(state.album, acc.photoIndex),
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
    return {
      ...state,
      photo: {},
      hasPhoto: false,
    }
  },
}

export function reducer(state, acc) {
  // console.info(acc.type)
  // console.info('STATE', state)
  // console.info('ACTION', acc)
  const actionReducer = actions[acc.type]
  return actionReducer ? actionReducer(state, acc) : state
}
