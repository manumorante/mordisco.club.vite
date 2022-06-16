import { useEffect } from 'react'

export function useKeys(data) {
  Object.entries(data).forEach(
    ([key, callback]) => {
      useEffect(() => {
        const handleKeyDown = (e) => {
          if ([key].includes(e.key)) {
            callback(callback)
          }
        }
        window.addEventListener('keydown', handleKeyDown)

        return () => {
          window.removeEventListener('keydown', handleKeyDown)
        }
      })
    },
    [data]
  )
}
