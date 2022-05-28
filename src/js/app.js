const fs = require('fs')
const sizeOf = require('image-size')

function randomizeArray(arr) {
  return arr
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
}

const TODAY = new Date()

let DATA = {
  created_at: TODAY,
  albums: [],
}

const root = 'public/data/albums'

function createAlbum(path, albumIndex) {
  let album = {
    created_at: TODAY,
    id: albumIndex,
    path: path.substring(6),
    photos: [],
  }

  let files = fs.readdirSync(path)
  files = randomizeArray(files)
  let photoIndex = 0
  files.forEach(function (file) {
    const ext = file.split('.').pop()
    if (ext === 'jpg') {
      const dimensions = sizeOf(path + '/' + file)
      album.photos.push({
        file: file,
        id: photoIndex,
        width: dimensions.width,
        height: dimensions.height,
      })
      photoIndex = photoIndex + 1
    }
  })

  return album
}

function getAlbums() {
  const files = fs.readdirSync(root)
  let albumIndex = 0
  files.forEach(function (file) {
    if (fs.statSync(root + '/' + file).isDirectory()) {
      DATA.albums.push(createAlbum(root + '/' + file, albumIndex))
      albumIndex = albumIndex + 1
    }
  })

  return DATA
}

const albums = getAlbums()
fs.writeFileSync('public/data/albums.json', JSON.stringify(albums, null, 2))
