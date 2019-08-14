<template>
    <div>
        <div class="menu">
            <span class="iconfont icon-right"></span>
            <span>购物车</span>
            <span class="iconfont icon-suosou"></span>
        </div>
        <div class="nav" v-for="item in cartList" :key="item.p_id">
            <div class="checkList">
                <input type="checkbox">
            </div>
            <div class="imgList">
                <img :src="item.p_img" alt="">
            </div>
            <div class="goodsTitle">
                <p>{{item.p_name}}</p>
                <span>售价：{{item.p_price}}</span>
                <div class="content">
                    <span>-</span>
                    <span>{{item.count}}</span>
                    <span>+</span>
                </div>
            </div>
            <div class="deleteList">
                <span class="iconfont icon-shanchu"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            cartList:[
                {p_id:'01',p_img:require('../../assets/11.jpg'),p_name:'Redemi K20 Pro 全网通版 8GB + 256GB 冰川蓝 256GB',p_price:'2999元',count:1}
            ]
        }      
    }
}
</script>

<style lang="scss" scoped>
    .menu{
        position: fixed;
        width: 100%;
        height: 1rem;
        top: 0;
        background: #f2f2f2;
        line-height: 1rem;
        display: flex;
        justify-content: space-between;
        padding: 0 0.5rem;
        .icon-right{
            font-size: 0.5rem;
        }
        .icon-suosou{
            font-size: 0.5rem;
        }
    }
    .nav{
        margin: 0.3rem 0;
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 15px;
        .checkList{
            width: 10%;
            text-align: center;
            input{
                border: 0;
                border-radius: 50%;
                width: 0.4rem;
                height: 0.4rem;
            }
        }
        .imgList{
            width: 25%;
            border: 1px solid #eee;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .goodsTitle{
            width: 60%;
            margin-left: 0.2rem;
            p{
                color:#666;
                // text-overflow: ellipsis;
                // white-space:nowrap;
            }
            span{
                color: #999;
                font-size:12px;
            }
            .content{
                span{
                    display:inline-block;
                    width: 0.5rem;
                    height: 0.5rem;
                    border:1px solid #eee;
                    text-align: center;
                    color:#000;
                }
                span:nth-child(odd){
                    background: #eee;
                }
                // input{
                //     border: 0;
                //     width: 0.5rem;
                //     height: 0.5rem;
                //     border: 1px solid #eee;
                //     text-align: center;
                //     border-left:0;
                //     border-right:0;
                // }
            }
            p{
                margin-top:0.1rem;
            }
        }
        .deleteList{
            width: 10%;
            margin-top: 1.3rem;
            span{
              font-size: 0.4rem;
              color: #999;
            }
        }
    }

</style>
