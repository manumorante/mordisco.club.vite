// Language: javascript
const fs = require('fs')
const sizeOf = require('image-size')

const TODAY = new Date()

let DATA = {
  created_at: TODAY,
  albums: [],
}

const albums_path = 'public/data/albums'

function xCol({ w, h }) {
  if (w > h) return 0

  const ratio = w / h

  const multis = [0.55, 0.6, 0.68, 0.7, 0.74, 0.79, 0.8, 0.86, 0.9]

  let result = 0
  multis.filter((v, i) => {
    if (v > ratio) {
      return false
    } else {
      result = i
      return true
    }
  })

  return result
}

function createAlbum(path) {
  let album = {
    created_at: TODAY,
    path: path.substring(6),
    photos: [],
  }

  const files = fs.readdirSync(path)
  console.log('create album')
  const ratios = []
  files.forEach(function (file, index) {
    const ext = file.split('.').pop().toLowerCase()
    if (ext === 'jpg' || ext === 'png') {
      const dimensions = sizeOf(path + '/' + file)
      const ratio =
        Math.round((dimensions.width / dimensions.height) * 100) / 100
      if (dimensions.height > dimensions.width) {
        ratios.push(ratio)
      }
      album.photos.push({
        file: file,
        index: index - 1,
        width: dimensions.width,
        height: dimensions.height,
        cols: xCol({ w: dimensions.width, h: dimensions.height }),
      })
    }
  })

  console.log(ratios.sort())

  return album
}

function getAlbums() {
  const files = fs.readdirSync(albums_path)
  files.forEach(function (file) {
    if (fs.statSync(albums_path + '/' + file).isDirectory()) {
      DATA.albums.push(createAlbum(albums_path + '/' + file))
    }
  })

  return DATA
}

const albums = getAlbums()
fs.writeFileSync('public/data/albums.json', JSON.stringify(albums, null, 2))
