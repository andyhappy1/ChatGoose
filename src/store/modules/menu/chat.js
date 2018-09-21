import lazyLoading from './lazyLoading'

export default {
  name: 'Chat',
  path: '/chat',
  component: lazyLoading('chat/Chat'),
  meta: {
    default: true,
    title: 'menu.chat',
    iconClass: 'vuestic-icon vuestic-icon-comments'
  }
}
