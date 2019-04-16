export default {
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true
      }
    ]
  ],
  routes: [
    {
      path: '/',
      component: '../layout',
      routes: [
        {
          path: '/helloworld',
          component: './HelloWorld'
        },
        {
          path: '/dashboard',
          routes: [
            { path: '/dashboard/analysis', component: './DashBoard/Analysis' },
            { path: '/dashboard/monitor', component: './DashBoard/Monitor' },
            { path: '/dashboard/workplace', component: './DashBoard/Workplace' }
          ]
        },
        {
          path: '/puzzlecards',
          component: './puzzlecards'
        },
        { path: '/list', component: './list' },
        {
          component: './404'
        }
      ]
    },
    {
      component: './404'
    }
  ]
};
