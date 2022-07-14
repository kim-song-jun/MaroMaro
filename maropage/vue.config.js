const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    overlay: false,
    port: 8080,
    contentBase: '.',
    proxy: {
      // 이부분 추가
      '^/GetMatchHistory/병그니': {
        target: 'http://yukmaro.cafe24.com', // 요청할 서버 주소
        pathRewrite: { '^/GetMatchHistory/병그니': '' },
        changeOrigin: true,
        logLevel: 'debug', // 터미널에 proxy 로그가 찍힌다.
      },
    },
  },
});
// module.exports = {
//   devServer: {
//     proxy: 'http://yukmaro.cafe24.com/', // www.xxx.com
//   },
// };
