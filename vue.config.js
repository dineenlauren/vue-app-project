module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-app-project/' : '/',
  devServer: {
    proxy: 'http://localhost:8080/',
  },
};
