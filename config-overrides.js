const { override, fixBabelImports, addLessLoader,addWebpackAlias } = require('customize-cra');
const path = require('path');
const resolve = path.resolve;

// const addCustom = () => config =>{
//     let plugins = [
//         new webpack.optimize.UglifyJsPlugin({
//             compress:{
//               warnings: false,
//               drop_debugger: true,
//               drop_console: false,
//             }
//         })

//     ];
//     if(process.env.NODE_ENV === 'production') config.devtool = falase;
//     if(process.env.NODE_ENV === 'development') config.plugins = [...config.plugins,...plugins];
//     return config;
// }

module.exports = override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      // style: true, # 这里不注释掉就无法使用less修改主题，这里的功能是样式按需加载
    }),
    addLessLoader({
        strictMath: true,
        noIeCompat: true
    }),
    addWebpackAlias({
        ['@']:path.resolve(__dirname,"src"),
        ['@static']:path.resolve(__dirname,"static")
    }),
    // addCustom(),
);
