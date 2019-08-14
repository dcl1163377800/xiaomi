<template>
    <div>
        <div class="menu">
            <span class="iconfont icon-right" @click="goback"></span>
            <span>购物车</span>
            <span class="iconfont icon-suosou"></span>
        </div>
        <div class="nav" v-for="(item) in cartList" :key="item.p_id">
            <div class="checkList">
                <input type="checkbox" @click="checkOne(item)">
                <!-- <img class="choice" :src="require(`../../assets/${item.}`)"" alt=""> -->
                <!-- <a href="javascript:;" @click="checkOne(item,index)" class="unchecked" :class="{checked:item == activeitem}"></a> -->
            </div>
            <div class="imgList">
                <img :src="item.p_img" alt="">
            </div>
            <div class="goodsTitle">
                <p>{{item.p_name}}</p>
                <span>售价：{{item.p_price}}</span>
                <div class="content">
                    <button ref="dec_input" @click="decProduct(item)">-</button>
                    <input ref="count_input" :value="item.count"/>
                    <button @click="addProduct(item)">+</button>
                </div>
            </div>
            <div class="deleteList">
                <span class="iconfont icon-shanchu" @click="del(item)"></span>
            </div>
        </div>
        <div class="footer">
            <div class="shop_price">
                <p>共<strong>{{itemTotal}}</strong>件  金额:</p>
                <p>
                    <span class="price">0</span>
                    <span class="yuan">元</span> 
                </p>
            </div>
            <div class="continue_cart">
                继续购物
            </div>
            <div class="gopay" @click="gopay">去结算</div> 
        </div>
    </div>
</template>

<script>
import eventBus from '../../util/eventbus';
import {Toasr} from 'mint-ui';
import axios from 'axios';
export default {
    data(){
        return{
            cartList:[
                {p_id:'01',p_img:require('../../assets/11.jpg'),p_name:'Redemi K20 Pro 全网通版 8GB + 256GB 冰川蓝 256GB',p_price:'2999',count:1},
                {p_id:'03',p_img:require('../../assets/11.jpg'),p_name:'Redemi K20 Pro 全网通版 8GB + 256GB 冰川蓝 256GB',p_price:'2999',count:2},
                {p_id:'04',p_img:require('../../assets/11.jpg'),p_name:'Redemi K20 Pro 全网通版 8GB + 256GB 冰川蓝 256GB',p_price:'2999',count:11},
                {p_id:'05',p_img:require('../../assets/11.jpg'),p_name:'Redemi K20 Pro 全网通版 8GB + 256GB 冰川蓝 256GB',p_price:'2999',count:1},
                {p_id:'06',p_img:require('../../assets/11.jpg'),p_name:'Redemi K20 Pro 全网通版 8GB + 256GB 冰川蓝 256GB',p_price:'2999',count:1},
                {p_id:'07',p_img:require('../../assets/11.jpg'),p_name:'Redemi K20 Pro 全网通版 8GB + 256GB 冰川蓝 256GB',p_price:'2999',count:1},
                {p_id:'08',p_img:require('../../assets/11.jpg'),p_name:'Redemi K20 Pro 全网通版 8GB + 256GB 冰川蓝 256GB',p_price:'2999',count:1},
                {p_id:'09',p_img:require('../../assets/11.jpg'),p_name:'Redemi K20 Pro 全网通版 8GB + 256GB 冰川蓝 256GB',p_price:'2999',count:1},
                {p_id:'10',p_img:require('../../assets/11.jpg'),p_name:'Redemi K20 Pro 全网通版 8GB + 256GB 冰川蓝 256GB',p_price:'2999',count:1},
                {p_id:'11',p_img:require('../../assets/11.jpg'),p_name:'Redemi K20 Pro 全网通版 8GB + 256GB 冰川蓝 256GB',p_price:'2999',count:1},
                {p_id:'12',p_img:require('../../assets/11.jpg'),p_name:'Redemi K20 Pro 全网通版 8GB + 256GB 冰川蓝 256GB',p_price:'2999',count:1},
                {p_id:'13',p_img:require('../../assets/11.jpg'),p_name:'Redemi K20 Pro 全网通版 8GB + 256GB 冰川蓝 256GB',p_price:'2999',count:1},
            ],
            count: "",
            checkList:[],
            activeitem:null,
        }      
    },
    computed: {
        itemTotal() {
            return this.cartList.reduce((pre, item) =>{
                return pre + item.count;
            }, 0)
        }
    },
    methods:{
        goback(){
            this.$router.go(-1);
        },
        gopay(){
            this.$router.push('/account');
        },
        addProduct(item){
            item.count++;
             let position=this.cartList.indexOf(item);
              let dec_value=this.$refs.dec_input[position].value;
            let value=this.$refs.count_input[position].value;
            if(value>=1){
                this.$refs.dec_input[position].value='-'
            }

        },
        decProduct(item){
            let position=this.cartList.indexOf(item);
            let value=this.$refs.count_input[position].value;
            let dec_value=this.$refs.dec_input[position].value;
            if(value>1){
                item.count--;
            } 
            // if(value==1){
            //     this.$refs.dec_input[position].innerHTML='';
            // }
        },

        del(item) {
            let position = this.cartList.indexOf(item);
            this.cartList.splice(position, 1); 
        },
        checkOne(item){
           let list= this.checkList.push(item)
           let priceList=[];          
           this.checkList.forEach(item=>{
                let price=item.p_price*1;
                priceList.push(price);               
                let totalPrice= priceList.reduce((oldvalue,item)=>{
                    return oldvalue+=item*1;
                })
                document.getElementsByClassName('price')[0].innerHTML=totalPrice;
           })
        },

    },
    mounted(){       
        // if(this.$refs.count_input.value==1){
        //         this.$refs.dec_input.innerHTML=''
        //     }
        
        // axios.get(`http://192.168.61.244:8080/XiaoMi/insertGoods?userid=${}&gname=${}&gbrief=${}&gnewprice=${}&num=${}&gId=${}&gcolor=${}`).then((res) => {
        //     console.log(res.data);
        //     this.songList.push(res.data);
        // })
    },
    beforeDestroy(){
        window.sessionStorage.setItem('totalcount',this.itemTotal)
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
        padding: 0 0.2rem;
        color:#666;
        .icon-right{
            font-size: 0.5rem;
        }
        .icon-suosou{
            font-size: 0.5rem;
        }
        span{
            font-size: 16px;
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
                // border-radius: 50%;
                width: 0.4rem;
                height: 0.4rem;
            }
            // .unchecked{
            //     background:url('../../assets/unchosen.png') no-repeat;
            //     width:1rem;
            //     height:1rem;
            //     background-size:100% 100%;
            // }
            // .checked{
            //     background:url('../../assets/chosen.png') no-repeat;
            //     width:0.3rem;
            //     height:0.3rem;
            //     background-size:100% 100%;
            // }
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
                input,button{
                    width: 0.5rem;
                    height: 0.5rem;
                    border:1px solid #eee;
                    text-align: center;
                    color:#000;
                    outline: none;
                }
                button{
                    border:0;
                }
                input:nth-child(odd){
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
    .footer{
        height:1.1rem;
        line-height: 0.3rem;
        width:100%;
        background-color: #fff;
        box-shadow: 1px 1px 1px 1px #f4f4f4;
        position:fixed;
        bottom:0;
        left:0;
        z-index:222;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        div{
            width:33.3%;
        }
        .shop_price{
            text-align: center;
            color:#999;
            font-size: 14px;
            p{
                text-align: center;
                strong{
                    color:#ff5722;
                }
               .price{
                    font-size: 18px;
                    color:#ff5722;
                    font-weight: 700;
                }
            }           
        }
        .continue_cart,.gopay{
            background:#f4f4f4;
            height:1.1rem;
            line-height:1.1rem;
            text-align: center;
            font-size: 14px;
        }
        .gopay{
            background-color: #ff6700;
            color:#fff;
        }
    }
</style>
