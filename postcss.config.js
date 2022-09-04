module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-normalize': {},
    'postcss-pxtorem': {
      rootValue: 16,
      unitPrecision: 6, // 计算结果保留 6 位小数
      selectorBlackList: ['.no-rem', 'no-rem'], // 要忽略的选择器并保留为px。
      propList: ['*'], // 可以从px更改为rem的属性  感叹号开头的不转换
      replace: true, // 转换成 rem 以后，不保留原来的 px 单位属性
      mediaQuery: true, // 允许在媒体查询中转换px。
      minPixelValue: 2, // 设置要替换的最小像素值。
      exclude: /node_modules/i // 排除 node_modules 文件(node_modules 内文件禁止转换)
    },
    'postcss-preset-env': {}
  }
}
