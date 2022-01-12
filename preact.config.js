export default (config, _, helpers) => {
  let { rule } = helpers.getLoadersByName(config, 'babel-loader')[0];
  let babelConfig = rule.options;
  
  babelConfig.plugins.push(require.resolve('babel-plugin-transform-async-to-promises'));
};