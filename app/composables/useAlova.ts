import { createAlova } from 'alova'
import adapterFetch from 'alova/fetch'
import NuxtHook from 'alova/nuxt'

const alova = createAlova({
  statesHook: NuxtHook({
    nuxtApp: useNuxtApp,
  }),
  cacheLogger: null,
  cacheFor: {
    GET: 0,
  },
  requestAdapter: adapterFetch(),

  async beforeRequest(method) {
    console.log('请求数据:', method.url);
  },

  responded: {
    onSuccess: async (response) => {
      console.log('-', response.url)
      if (response.status >= 400) {
        throw new Error(response.statusText)
      }
      const json = await response.json()
      if (json.code !== 200) {
        throw new Error(json.message)
      }
      // console.log('json', json)
      if (json?.data) {
        return json.data
      }
      return json
    },
    onError: (error) => {
      console.error(error)
    },
  },
})

export default function useAlova() {
  const { apiBase } = useRuntimeConfig().public
  alova.options.baseURL = apiBase
  return alova
}

export const get = <T>(url: string, params?: object, config: object = { baseURL: useRuntimeConfig().public.apiHost }) => useAlova().Get<T>(url, { params, ...config })

export const post = <T>(url: string, data?: object, config: object = { baseURL: useRuntimeConfig().public.apiHost }) => useAlova().Post<T>(url, data, config)

export const del = <T>(url: string, data?: object, config: object = { baseURL }) => useAlova().Delete<T>(url, data, config)

export const put = <T>(url: string, data?: object, config: object = { baseURL }) => useAlova().Put<T>(url, data, config)

export const upload = <T>(url: string, data: { name: string, filePath: string, formData: object }, config: object = {}) => useAlova().Post<T>(url, data, { requestType: 'upload', fileType: 'image', ...config })
