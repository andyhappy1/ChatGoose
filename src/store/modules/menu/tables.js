import lazyLoading from './lazyLoading.js'

export default {
  name: 'tables',
  meta: {
    title: 'menu.people',
    iconClass: 'vuestic-icon vuestic-icon-user'
  },
  path: '/tables',
  component: lazyLoading('tables/Table')
}
