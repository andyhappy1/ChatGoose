import lazyLoading from './lazyLoading'

export default {
  name: 'Statistics',
  meta: {
    title: 'menu.statistics',
    iconClass: 'vuestic-icon vuestic-icon-statistics'
  },
  path: '/statistics/charts',
  component: lazyLoading('statistics/charts/Charts')

  // children: [
  //   {
  //     name: 'menu.charts',
  //     path: '/statistics/charts',
  //     component: lazyLoading('statistics/charts/Charts'),
  //     meta: {
  //       title: 'menu.charts'
  //     }
  //   },
  //   {
  //     name: 'menu.progressBars',
  //     path: '/statistics/progress-bars',
  //     component: lazyLoading('statistics/progress-bars/ProgressBars'),
  //     meta: {
  //       title: 'menu.progressBars'
  //     }
  //   }
  // ]
}
