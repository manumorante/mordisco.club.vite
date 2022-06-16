export function bodyScroll(condition) {
  const styles = {
    touchAction: 'none',
    WebkitOverflowScrolling: 'none',
    overflow: 'hidden',
    overscrollBehavior: 'none',
  }

  if (condition) {
    Object.entries(styles).forEach(([key, value]) => {
      document.body.style[key] = ''
    })
  } else {
    Object.entries(styles).forEach(([key, value]) => {
      document.body.style[key] = value
    })
  }
}
