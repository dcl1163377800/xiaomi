module.exports = {
    devServer: {
        proxy: {
            '/XiaoMi': {
                target: 'http://192.168.61.244:8080',
                changeOrigin: true
            }
        }
    }
}
