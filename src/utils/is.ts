export function isSuccessResponse(response: any) {
  const result = response.parseBody
  return result!.data?.code === 200
}
