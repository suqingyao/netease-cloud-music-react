import { ObjectToURLParams } from '.'

const baseURL = import.meta.env.VITE_BASE_URL
interface HttpResponse<T> extends Response {
  parseBody?: T
}

export async function http<T>(request: RequestInfo): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request)
  try {
    response.parseBody = await response.json()
    console.log('response', response)
  } catch (err) {}

  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response
}

export async function get<T>(
  path: string,
  params: object = {},
  args: RequestInit = { method: 'get' }
): Promise<HttpResponse<T>> {
  return await http<T>(
    new Request(baseURL + path + ObjectToURLParams(params), args)
  )
}

export async function post<T>(
  path: string,
  body: any,
  args: RequestInit = { method: 'post', body: JSON.stringify(body) }
): Promise<HttpResponse<T>> {
  return await http<T>(new Request(baseURL + path, args))
}

export async function put<T>(
  path: string,
  body: any,
  args: RequestInit = { method: 'put', body: JSON.stringify(body) }
): Promise<HttpResponse<T>> {
  return await http<T>(new Request(baseURL + path, args))
}

export async function del<T>(
  path: string,
  body: any,
  args: RequestInit = { method: 'delete', body: JSON.stringify(body) }
): Promise<HttpResponse<T>> {
  return await http<T>(new Request(baseURL + path, args))
}
