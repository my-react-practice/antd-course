export default {
  plugins: [
    [
      'umi-plugin-react',
      {
        // todo...
      }
    ]
  ],
  routes: [
    {
      path: '/',
      component: './HelloWorld'
    },
    {
      component: './404'
    }
  ]
};
