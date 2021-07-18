/**
 * 使用vue2
 * @param config
 */
function useVue2(config, options = {}) {
  const { plugins, module } = config
  // 添加解析规则
  module.rules.push(getVue2Rule(options))
  // 添加插件
  plugins.unshift(new (require('vue-loader/lib/plugin'))())
}
exports.useVue2 = useVue2

/**
 * 获取vue2的解析规则
 * @param options
 * @returns
 */
function getVue2Rule(options = {}) {
  return {
    test: /\.vue$/,
    use: [
      {
        loader: require.resolve('vue-loader'),
        options: {
          compilerOptions: {
            whitespace: 'condense',
          },
        },
      },
    ],
  }
}
exports.getVue2Rule = getVue2Rule
