# es6-Webpack starter

Simple es6 and scss starter using webpack to bundle.

**Some Useful Resources:**  

Google's fundamentals guide on optimizing performance with webpack. Many of the suggestions there are implemented in this
webpack config.
https://developers.google.com/web/fundamentals/performance/webpack/

To optimize dependencies and reduce overall size on page, check this:
https://github.com/GoogleChromeLabs/webpack-libs-optimizations

To learn more about image compression, and how to use customize image-webpack-loader:
https://images.guide/

In production, use `new webpack.optimize.ModuleConcatenatePlugin()` to create fewer modules and reduce module overhead.
Don't use this in development because it breaks hot module replacement.