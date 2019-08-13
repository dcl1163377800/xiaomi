const ws = {
    '111': {w_id:'01',w_img:require('../assets/swiper1.jpg'),w_img2:require('../assets/swiper2.jpg'),w_name:'小米电视4X 43英寸',w_brief:'PHD全高清屏， 人工智能语音',new_price:'￥1399',old_price:'￥1499'},
    '222': {w_id:'02',w_img:require('../assets/swiper1.jpg'),w_img2:require('../assets/swiper2.jpg'),w_name:'小米电视4X 43英寸',w_brief:'PHD全高清屏， 人工智能语音',new_price:'￥2399',old_price:'￥2499'}
}

module.exports = {
    getDetail (wid) {
        return new Promise(function(resolve, reject) {
            resolve(ws[wid])
        });
    }
}

// module.exports = {
//     getDetail (wid) {
//         return axios.get('/api/getDetail?wid=' + wid);
//     }
// }