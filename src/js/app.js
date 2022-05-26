// Language: javascript
const fs = require('fs')
const sizeOf = require('image-size')

const TODAY = new Date()

let DATA = {
  created_at: TODAY,
  albums: [],
}

const root = 'public/data/albums'

function createAlbum(path) {
  let album = {
    created_at: TODAY,
    path: path.substring(6),
    photos: [],
  }

  const files = fs.readdirSync(path)
  files.forEach(function (file, index) {
    // If JPG
    const ext = file.split('.').pop()
    if (ext === 'jpg') {
      console.log('jpg')
      const dimensions = sizeOf(path + '/' + file)
      album.photos.push({
        file: file,
        index: index - 1,
        width: dimensions.width,
        height: dimensions.height,
      })
    }
  })

  return album
}

function getAlbums() {
  const files = fs.readdirSync(root)
  files.forEach(function (file) {
    if (fs.statSync(root + '/' + file).isDirectory()) {
      DATA.albums.push(createAlbum(root + '/' + file))
    }
  })

  return DATA
}

const albums = getAlbums()
fs.writeFileSync('public/data/albums.json', JSON.stringify(albums, null, 2))
