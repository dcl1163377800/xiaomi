module.exports = {
    devServer: {
        proxy: {
            '/': {
                target: 'http://192.168.61.211:3000',
                changeOrigin: true,
                ws:false
            }
        }
    }
}