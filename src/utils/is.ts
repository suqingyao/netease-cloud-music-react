export function isSuccessResponse(response: any) {
  const result = response.parseBody
  return result?.code === 200
}
