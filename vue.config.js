module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-handy-scroll/dist/" : "/",
  transpileDependencies: [
    "vue-handy-scroll"
  ],
  productionSourceMap: false
};