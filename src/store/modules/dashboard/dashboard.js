import lazyLoading from './lazyLoading.js'

export default {
  name: 'dashboard',
  meta: {
    title: 'menu.dashboard',
  },
  path: '/dashboard',
  component: lazyLoading('dashboard')
}
