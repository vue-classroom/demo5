module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
      name: 'demo 5',
      themeColor: '#4DBA87',
      msTileColor: '#000000',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
  
      // configure the workbox plugin
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: 'src/service-worker.js',
        // ...other Workbox options...
      }
    }
  }