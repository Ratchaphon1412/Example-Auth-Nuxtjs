import  { useMyUseAuthStoreStore } from '~/store/useAuthStore'

type Header = { [key: string]: string }

export default async function useMyFetch<T>(url: string, options?:{}) {
  const config = useRuntimeConfig()
  const auth =  useMyUseAuthStoreStore()



  const headers:Header = {
    "Accept":"application/json",
  }

  if (auth.token !== ""){
    headers["Authorization"] = `Bearer ${auth.token}`
  }
  


  return await useFetch<T>(url, {
    ...options,
    baseURL: config.public.apiBaseUrl,
    headers

  });
}