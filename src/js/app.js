// Language: javascript
const fs = require('fs')
const sizeOf = require('image-size')

const TODAY = new Date()

let DATA = {
  created_at: TODAY,
  albums: [],
}

const albums_path = 'public/data/albums'

function createAlbum(path) {
  let album = {
    created_at: TODAY,
    path: path.substring(6),
    photos: [],
  }

  const files = fs.readdirSync(path)
  files.forEach(function (file) {
    const ext = file.split('.').pop().toLowerCase()
    if (ext === 'jpg' || ext === 'png') {
      const dimensions = sizeOf(path + '/' + file)
      album.photos.push({
        file: file,
        width: dimensions.width,
        height: dimensions.height,
      })
    }
  })

  return album
}

function getAlbums() {
  const files = fs.readdirSync(albums_path)
  files.forEach(function (file) {
    DATA.albums.push(createAlbum(albums_path + '/' + file))
  })

  return DATA
}

const albums = getAlbums()
fs.writeFileSync('public/data/albums.json', JSON.stringify(albums, null, 2))
