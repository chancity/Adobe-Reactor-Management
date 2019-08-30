require('ignore-styles');

require('@babel/register')({
    ignore: [/(node_modules)/],
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins:['babel-plugin-styled-components','babel-plugin-macros', '@babel/plugin-transform-runtime','@babel/plugin-syntax-dynamic-import']
});

const prerenderer = require('./index2').default;

module.exports = prerenderer;
