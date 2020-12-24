module.exports = {
    entry: {
        main: './main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        // 因为是babel包所以要放在babel的loader里面
                        plugins: [
                            ['@babel/plugin-transform-react-jsx',
                            { pragma: 'createElement'}] // 指定翻译后的名字
                        ]
                    }
                }
            }
        ]
    },
    mode: 'development',
    optimization: {
        minimize: false
    }
}