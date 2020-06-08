const webpackMerge = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react');

function removeElementsFromArray(elements, array) {
  return array.filter((elem) => {
    return !elements.includes(elem);
  });
}

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'sock-shop',
    projectName: 'user',
    webpackConfigEnv,
  });

  defaultConfig.externals = removeElementsFromArray(
    ['react', 'react-dom'],
    defaultConfig.externals
  );

  return webpackMerge.smart(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
  });
};
