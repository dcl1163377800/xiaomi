module.exports = {
    devServer: {
        proxy: {
            '/XiaoMi': {
                target: 'http://106.53.65.198:8080',
                changeOrigin: true
            }
        }
    }
}