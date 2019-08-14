<template>
    <div id="detailfooter">
        <div class="footer">
            <div class="index">
                <span class="iconfont icon-shouyefanhuishouye"></span>
                <!-- <p>首页</p> -->
                <router-link to="/">首页</router-link>
            </div>
            <div class="cart">
                <span class="iconfont icon-qicheqianlian-1-copy">
                    <i id="num">{{message}}</i>
                </span>
                <!-- <p>购物车</p> -->
                <router-link to="/HomePage/shoppingcar">购物车</router-link>
            </div>
            <div class="buying">
                <button @click="addToCart">加入购物车</button>
                <span class="bool bool-animate" ref="bool"></span>
            </div>
        </div>
    </div>
</template>
<script>
import eventBus from '../util/eventbus';
export default {
    name:'detailfooter',
    data(){
        return{
            message:null
        }
    },
    mounted(){
        let count_total=sessionStorage.getItem('totalcount');
        this.message=count_total;    
    },
    methods:{
        addToCart(){
            
        }
    }

}
</script>
<style lang="scss" scoped>
    .footer{
        position:fixed;
        bottom:0.1rem;
        left:0.2rem;
        right:0.2rem;
        box-shadow: 1px 1px 2px 1px #ccc;
        border-radius:15px;
        height:1rem;
        z-index: 1;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .index, .cart{
            text-align: center;
            span{
                position:relative;
                #num{
                    width:0.3rem;
                    height:0.3rem;
                    background:#ff6700;
                    color:#fff;
                    position:absolute;
                    top:-6px;
                    right:-7px;
                    border-radius: 50%;
                    font-size:0.1rem;
                    text-align: center;
                    line-height: 0.3rem;
                    font-style: normal;
                }
            }
            a{
                color: rgba(0,0,0,.54);
                font-size:12px;
                display:block;
            }
        }
        .buying{
            button{
                color:#fff;
                width:2rem;
                height:0.7rem;
                background:#ff6700;
                border-radius:30px;
                border:0;
                font-size:14px;
                outline:none;
            }
        }
    }
</style>