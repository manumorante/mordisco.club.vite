// General check
// La idea de esta función es que le pases las claves y objetos que quieras validar,
// si la clave exite trata de validarlo. si falla lo muestra por consola. y devuelve una dupla [error, [msg]]
export const hasError = (opts) => {
  console.log('isOK', opts)
  let name = '[HasError]'
  let key = ''

  key = 'albums'
  if (opts.hasOwnProperty(key)) {
    if (isEmpty(opts[key])) return [true, `${name} [${key}] is empty`]
  }

  key = 'album'
  if (opts.hasOwnProperty(key)) {
    if (isEmpty(opts[key])) return [true, `${name} [${key}] is empty`]
  }

  key = 'photos'
  if (opts.hasOwnProperty(key)) {
    if (isEmpty(opts[key])) return [true, `${name} [${key}] is empty`]
  }

  key = 'albumID'
  if (opts.hasOwnProperty(key)) {
    if (isNaN(opts[key])) return [true, `${name} [${key}] is NaN`]
  }

  key = 'photoID'
  // Require albumID
  if (opts.hasOwnProperty(key)) {
    // Check: isNaN
    if (isNaN(opts[key])) return [true, `${name} [${key}] is NaN`]

    // Check: otro
    if (Number(opts[key]) >= opts.photos.length) {
      err(state, acc, 'acc.photoID is out of range')
      return state
    }
  }

  return [false, '']
}
