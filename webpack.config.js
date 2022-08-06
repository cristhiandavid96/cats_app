const path = require('path')
const createExpoWebpackConfigAsync = require('@expo/webpack-config')
//configuracion webpack con el fin que react-router-native funcione en web
module.exports = async function (env, argv) {

    const config = createExpoWebpackConfigAsync(env, argv)

    config.module.rules.push({
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
            path.join(_dirname, 'node_modules/react-router-native')
        ]
    })

    return config;
}