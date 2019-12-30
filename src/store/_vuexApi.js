import axios from 'axios'
const baseURL = `${process.env.VUE_APP_BASE_URL}`
axios.defaults.baseURL = baseURL

export default async function requestSync(store, type, options) {
  const { commit } = store;
  /**
   * Extract Type
   * before replace: type == 'post'SaveStockAlert
   * after replace: type == ''SaveStockAlert
   * httpMethod == post
   */
  let method = 'post'
  const replacedType = type.replace(/get|post|put|delete/, (httpMethod) => {
    method = httpMethod.toUpperCase();
    return ""
  })
  /**
   * Build up axios config
   * replacedType == SaveStockAlert
   */
  const { url, data, params } = options
  const dataCopy = JSON.parse(JSON.stringify(data))
  const axiosConfig = {
    url,
    method,
    params: params ? params : {},
    data: dataCopy
  }
  /**
   * Send request
   */
  let axiosResponse = null
  try {
    console.log({
      axiosConfig
    })
    axiosResponse = await axios(axiosConfig)
  } catch (error) {
    /**
     * @type {config, data, headers, request, status, statusText} axiosResponse
     */
    axiosResponse = error.response
    // const { data } = axiosResponse
    /**
     * @type {AP, Data, IsSuccessful, Message, ResultCode, WarningMessage} serverStandardRes
     */
    const serverStandardRes = axiosResponse
    const { IsSuccessful } = serverStandardRes
    if (IsSuccessful) {
      return serverStandardRes
    }
  } finally {
    /**
     * Commit response to store state at once
     * replacedType = SaveStockAlert
     * mutationName = setSaveStockAlert
     * @type {config, data, headers, request, status, statusText} axiosResponse
     * @type {AP, Data, IsSuccessful, Message, ResultCode, WarningMessage} serverStandardRes
     */
    const { data, status, statusText } = axiosResponse
    const necessaryInfo = {
      data,
      status,
      statusText
    }
    const mutationName = `set${replacedType}Res`
    commit(mutationName, necessaryInfo)
  }
  return axiosResponse
}
