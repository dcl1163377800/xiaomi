<template>
    <div id="goodsdetail">
        <div class="goods_detail" v-for="goods in songList" :key="goods.w_id">
            <div class="detail_swiper">
                <div class="header">

                </div>
                <mt-swipe :auto="4000" style="height:25rem;width:100%">
                    <mt-swipe-item>
                        <img :src="goods.w_img" alt="" style="height:100%;width:100%">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img :src="goods.w_img2" alt="" style="height:100%;width:100%">
                    </mt-swipe-item>
                </mt-swipe>
            </div>
            <div class="goods_content">
                <p class="goods_name">{{goods.w_name}}</p>
                <p class="goods_brief">{{goods.w_brief}}</p>
                <div class="price">
                    <span class="new_price">{{goods.new_price}}</span>
                    <span class="old_price">{{goods.old_price}}</span>
                </div>
            </div>
            <div class="goods_param">
                <ul>
                    <li>
                        <p class="iconfont icon-fenbianshuai"></p>
                        <p>屏幕尺寸</p>
                        <p>43英寸</p>
                    </li>
                    <li>
                        <p class="iconfont icon-tishiicon_fenbianshuai"></p>
                        <p>分辨率</p>
                        <p>全高清</p>
                    </li>
                    <li>
                        <p class="iconfont icon-cpuchuliqiyingjian"></p>
                        <p>处理器</p>
                        <p>64位</p>
                    </li>
                    <li>
                        <p class="iconfont icon-cunchu"></p>
                        <p>存储</p>
                        <p>1GB+8GB</p>
                    </li>
                    <li>
                        <p class="iconfont icon-HDMI"></p>
                        <p>HDMI</p>
                        <p>2个</p>
                    </li>
                </ul>
            </div>
            <div class="goods_info">
                <div class="goods_info_content">
                    <div class="selected">
                        <span class="se_left">已选</span>
                        <span>小米电视</span>
                    </div>
                    <div class="address">
                        <span class="ad_left">送至</span>
                        <span></span>
                    </div>
                    <div class="mi">
                        <span>小米自营</span>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>
<script>
export default {
    name:'goodsdetail',
    data(){
        return{
            songList:[
                {w_id:'01',w_img:require('../assets/swiper1.jpg'),w_img2:require('../assets/swiper2.jpg'),w_name:'小米电视4X 43英寸',w_brief:'PHD全高清屏， 人工智能语音',new_price:'￥1399',old_price:'￥1499'},
            ]
        }
    },

}
</script>
<style lang="scss" scoped>
    .goods_content{
        padding:1rem 1rem 0 1rem;
        .goods_name{
            font-size:20px;
            height:2rem;
            line-height: 2rem;
        }
        .goods_brief{
            font-size:12px;
            color:rgba(0,0,0,.54);
            white-space: wrap;
            height:1rem;
            line-height: 1rem;
        }
        .price{
            height:2rem;
            line-height: 2rem;
            .new_price{
                font-size:20px;
                color:#ff6700;
            }
            .old_price{
                font-size:12px;
                color:rgba(0,0,0,.54);
                text-decoration:line-through;
            }
        }
    }
    .goods_param{
        padding:0 1rem 0.5rem 1rem;
        ul{
            text-align: center;
            overflow-x: scroll;
            overflow-y: hidden;
            white-space: nowrap;
            padding-bottom:0.5rem;
            li{              
                border-right:1px solid #ccc;
                width:5rem;
                text-align: center;
                display: inline-block;
                p:nth-child(2){
                    font-size:12px;   
                    color:#3c3c3c;                
                }
                p:last-child{
                    font-size: 10px;
                    color:#676767;
                }
            }
        }
    }
    .goods_info{
        padding:0 1rem 0.5rem 1rem;
        .goods_info_content{
            background-color: #fafafa;
            border-radius:5px;
            div{
                border-bottom:1px solid #ccc;
                height:2.2rem;
                line-height:2.2rem;
                padding:0 0.7rem;
            }
        }
    }
</style>