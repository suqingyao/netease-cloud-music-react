export function setStorage(k: string, v: any = '') {
  localStorage.setItem(k, JSON.stringify(v))
}

export function getStorage(k: string) {
  return JSON.parse(localStorage.getItem(k) || '')
}

export function clearStorage() {
  localStorage.clear()
}

export function removeStorage(k: string) {
  localStorage.removeItem(k)
}
