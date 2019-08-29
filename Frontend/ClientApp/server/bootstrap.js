require('ignore-styles');

require('@babel/register')({
    ignore: [/(node_modules)/],
    presets: ['@babel/preset-env', '@babel/react'],
    plugins:['babel-plugin-styled-components','babel-plugin-macros', '@babel/plugin-transform-runtime']
});

const prerenderer = require('./index').default;

module.exports = prerenderer;
