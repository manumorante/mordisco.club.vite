import { useEffect } from 'react'

const styles = {
  touchAction: 'none',
  WebkitOverflowScrolling: 'none',
  overflow: 'hidden',
  overscrollBehavior: 'none',
}

export default function useNoScroll({ ref }) {
  useEffect(() => {
    if (ref) {
      Object.entries(styles).forEach(([key, value]) => {
        document.body.style[key] = value
      })
    } else {
      Object.entries(styles).forEach(([key, value]) => {
        document.body.style[key] = ''
      })
    }
  }, [ref])
}
