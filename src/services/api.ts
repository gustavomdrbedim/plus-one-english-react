/** Fronteira de API. Nenhuma credencial deve estar no frontend. */
export interface ApiClient { post<TResponse>(path: string, payload: unknown): Promise<TResponse> }
export function createApiClient(baseUrl: string): ApiClient {
 return { async post<TResponse>(path: string, payload: unknown): Promise<TResponse> {
   if (!baseUrl) throw new Error('API não configurada');
   const response = await fetch(`${baseUrl.replace(/\/$/,'')}/${path.replace(/^\//,'')}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
   if(!response.ok) throw new Error(`Falha na API (${response.status})`);
   return response.json() as Promise<TResponse>;
 }};
}
