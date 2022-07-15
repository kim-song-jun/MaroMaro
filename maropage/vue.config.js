const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  // devServer:{
  //   proxy:{
  //     '/':{
  //       target: 'http://yukmaro.cafe24.com'
  //     },
  //     '/GetRecord':{
  //       target: 'http://yukmaro.cafe24.com'
  //     }
  //   }
  // }
});