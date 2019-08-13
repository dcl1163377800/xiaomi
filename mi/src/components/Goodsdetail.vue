<template>
    <div id="goodsdetail">
        <div class="goods_detail" v-for="goods in songList" :key="goods.w_id">
            <div class="detail_swiper">
                <div class="header">
                    <span class="iconfont icon-zuojiantou" @click="goback_index()"></span>  
                    <span class="iconfont icon-fenxiang"></span>
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
                        <span>{{goods.w_name}}</span>
                        <span class="iconfont icon-icon1"></span>
                    </div>
                    <div class="address">
                        <span class="ad_left">送至</span>
                        <span>北京市 东城区</span>
                        <span class="iconfont icon-icon1"></span>
                    </div>
                    <div class="mi">
                        <span class="iconfont icon-duihaocheckmark17"></span>
                        <span>小米自营</span>
                        <span class="iconfont icon-duihaocheckmark17"></span>
                        <span>小米发货</span>
                        <span class="iconfont icon-duihaocheckmark17"></span>
                        <span>7天无理由退货</span>
                        <span class="iconfont icon-icon1"></span>
                    </div>
                </div>
            </div>
            <!-- 评论 -->
            <div class="comment">

            </div>
        </div>
        <div class="footer">
            <div class="index">
                <span class="iconfont icon-shouyefanhuishouye"></span>
                <p>首页</p>
            </div>
            <div class="cart">
                <span class="iconfont icon-qicheqianlian-1-copy"></span>
                <p>购物车</p>
            </div>
            <div class="buying">
                <button>立即抢购</button>
            </div>
        </div>
    </div>  
</template>
<script>
// import service from '../services/service';
export default {
    name:'goodsdetail',
    data(){
        return{
            songList:[
                {w_id:'01',w_img:require('../assets/swiper1.jpg'),w_img2:require('../assets/swiper2.jpg'),w_name:'小米电视4X 43英寸',w_brief:'PHD全高清屏， 人工智能语音',new_price:'￥1399',old_price:'￥1499'},
            ]
        }
    },
    mounted() {
        
        // axios.get('/aaa/bbb?wid=' + this.$route.query.w_id).then((res) => {
        //     console.log(res.data);
        // })
        // service.getDetail(this.$route.query.w_id).then((res) => {
        //     // this.songList = res.data;
        //     console.log(res)
        // })
    },
    methods:{
        goback_index(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="scss" scoped>
    .goods_detail{
        margin-bottom: 5rem;
        .detail_swiper{
            position:relative;
            .header{
                position: absolute;
                top:0.2rem;
                left:0.2rem;
                right:0.2rem;
                height:5rem;
                z-index: 1;
                display:flex;
                justify-content: space-between;
                span{
                    font-size: 30px;
                }
            }
        }
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
                    font-size: 12px;
                }
                .selected{
                    .se_left{
                        color: rgba(0,0,0,.54);
                        display:inline-block;
                        margin-right:1rem;
                    }
                    span:last-child{
                        float:right;
                    }
                }
                .address{
                    .ad_left{
                        color: rgba(0,0,0,.54);
                        display:inline-block;
                        margin-right:1rem;
                    }
                    span:last-child{
                        float:right;
                    }
                }
                .mi{
                    .iconfont{
                        font-size:18px;
                        color:#ff6700;
                    }
                    span:nth-child(even){
                        color:rgba(0,0,0,.54);
                        display: inline-block;
                        margin-right:0.5rem;
                    }
                    span:last-child{
                        float:right;
                        color:#000;
                    }
                }
            }
        }
    }
    
    .footer{
        position:fixed;
        bottom:0.5rem;
        left:0.5rem;
        right:0.5rem;
        box-shadow: 1px 1px 2px 1px #ccc;
        border-radius:15px;
        height:3rem;
        z-index: 1;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .index, .cart{
            text-align: center;
            p{
                color: rgba(0,0,0,.54);
                font-size:12px;
            }
        }
        .buying{
            button{
                color:#fff;
                width:8rem;
                height:2rem;
                background:#ff6700;
                border-radius:30px;
                border:0;
                font-size:14px;
            }
        }
    }
    
</style>