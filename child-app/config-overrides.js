const { name } = require('./package.json');

module.exports = {
    webpack: (config) => {
    //   config.entry = config.entry.filter(
    //     (e) => !e.includes('webpackHotDevClient')
    //   );
  
      config.output.library = `${name}-[name]`;
      config.output.libraryTarget = 'umd';
      config.output.jsonpFunction = `webpackJsonp_${name}`;
      config.output.globalObject = 'window';
  
    //   config.plugins = config.plugins.filter(
    //     (p) => !(p instanceof webpack.HotModuleReplacementPlugin)
    //   );
  
      return config;
    },
  
    devServer: (config) => {
      config.port = process.env.PORT || 7101;
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
  
      config.historyApiFallback = true;
  
      config.hot = false;
      config.watchContentBase = false;
      config.liveReload = false;
  
      return config;
    },
  };