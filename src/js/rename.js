// Language: javascript
const fs = require('fs')

const albums_path = 'public/data/albums'

const albums = fs.readdirSync(albums_path)
albums.forEach(function (album_name) {
  const thisAlbum = albums_path + '/' + album_name
  if (fs.statSync(thisAlbum).isDirectory()) {
    jpgToLowecase(thisAlbum)
    // Check if there is a folder called 's'
    const s_folder = albums_path + '/' + album_name + '/s'
    if (fs.existsSync(s_folder)) {
      jpgToLowecase(thisAlbum + '/s')
    }
  }
})

function jpgToLowecase(path) {
  fs.readdirSync(path).forEach(function (pFile) {
    const file = pFile.toLowerCase()
    const ext = file.split('.').pop()
    if (ext === 'jpg') {
      fs.renameSync(path + '/' + pFile, path + '/' + file)
    }
  })
}
