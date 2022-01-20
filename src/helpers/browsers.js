export const isiOS = () => {
  if (typeof window === 'undefined') {
    return false
  }
  return window && 'ontouchstart' in window && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
}

export const isSafari = () => {
  if (typeof window === 'undefined') {
    return false
  }
  return window && /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !window.MSStream
}
