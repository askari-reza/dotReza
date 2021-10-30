// import FileDownload from 'js-file-download'
//
export default ({ $axios, store, req }) => {
  $axios.onRequest((config) => {
    store.dispatch('setLoading', true)
    //
    config.withCredentials = true
    config.headers.Authorization = `Bearer ${store.getters['auth/userToken']}`
  })
  //
  $axios.onResponse((resp) => {
    if (resp.status === 200) {
      store.dispatch('setLoading', false)
    }
  })
  // onRequest(config)
  // onResponse(response)
  // onError(err)
  // onRequestError(err)
  // onResponseError(err)
}
