export default {
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true
      }
    ]
  ],
  routes: [
    {
      path: '/',
      component: '../layout',
      routes: [
        {
          path: 'helloworld',
          component: './HelloWorld'
        },
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
