export default ({ $content }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  // eslint-disable-next-line no-console
  //   inject('fetchContent', (msg) => console.log(`Hello ${msg}!`))
  inject('fetchContent', (path) => $content(path).fetch())
}
