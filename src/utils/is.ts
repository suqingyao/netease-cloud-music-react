export function isSuccessResponse(response: any) {
  return response?.code === 200
}

export function isEmpty<T>(obj: T) {
  if (typeof obj === 'object' && Object.keys(obj).length === 0) {
    return false
  }
  if (typeof obj === 'string' && obj === '') {
    return false
  }
  return true
}

export const isVoid = (value: unknown) =>
  value === null || value === undefined || value === ''
