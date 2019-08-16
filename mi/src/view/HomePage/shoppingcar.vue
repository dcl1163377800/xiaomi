<template>
    <div>
        <div class="menu">
            <span class="iconfont icon-right" @click="goback"></span>
            <span>购物车</span>
            <span class="iconfont icon-suosou"></span>
        </div>
        <div class="nav" v-for="(item) in cartList" :key="item.goodsId">
            <div class="checkList">
                <input type="checkbox" @click="checkOne(item)">
            </div>
            <div class="imgList">
                <img :src="item.goodsImg" alt="">
            </div>
            <div class="goodsTitle">
                <p ref="gname">{{item.goodsName}}{{item.goodsBrief}}</p>
                <span>售价：{{item.goodsNewPrice}}</span>
                <div class="content">
                    <button ref="dec_input" @click="decProduct(item)">-</button>
                    <input ref="count_input" :value="item.goodNum"/>
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
            <div class="continue_cart" @click="go_toshopping">
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
            ],
            count: "",
            checkList:[],
        }      
    },
    computed: {
        itemTotal() {
            return this.cartList.reduce((pre, item) =>{
                return pre + item.goodNum;
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
            console.log('+')
            let gname=item.goodsName;
            item.goodNum++;
              axios.get(`http://106.53.65.198:8080/XiaoMi/updateGoods?gname=${gname}&num=${item.goodNum}`).then(res=>{
                    console.log(111)
                })
            let position=this.cartList.indexOf(item);
            let dec_value=this.$refs.dec_input[position].value;
            let value=this.$refs.count_input[position].value;
            if(value>=1){
                this.$refs.dec_input[position].value='-'
            }

            // axios.get(``)

        },
        decProduct(item){
            let position=this.cartList.indexOf(item);
            let value=this.$refs.count_input[position].value;
            let dec_value=this.$refs.dec_input[position].value;
            let gname=item.goodsName;
            
            if(value>1){
                item.goodNum--;
                axios.get(`http://106.53.65.198:8080/XiaoMi/updateGoods?gname=${gname}&num=${item.goodNum}`).then(res=>{
                    console.log(111)
                })
            } 
            if(value==1){
                this.$refs.dec_input[position].value='';
            }
        },

        del(item) {
            let position = this.cartList.indexOf(item);
            this.cartList.splice(position,1)

            let name=item.goodsName;
            axios.get(`http://106.53.65.198:8080/XiaoMi/deleteGoods?gname=${name}`).then(res=>{

                console.log(res.data.code)
            })
        },
        checkOne(item){
           let list= this.checkList.push(item)
           let priceList=[];          
           this.checkList.forEach(item=>{
                let price=item.goodsNewPrice*1;
                priceList.push(price);               
                let totalPrice= priceList.reduce((oldvalue,item)=>{
                    return oldvalue+=item*1;
                })
                document.getElementsByClassName('price')[0].innerHTML=totalPrice;
           })
        },
        go_toshopping(){
            console.log(1111111)
            this.$router.push('/')
        }
        

    },
    mounted(){  

        // if(this.$refs.count_input.value==1){
        //         this.$refs.dec_input.value=''
        //     }
        
        axios.get("http://106.53.65.198:8080/XiaoMi/showCart").then((res) => {
            console.log(55555)
            console.log(res.data);
            // this.cartList.push(res.data);
            this.cartList=res.data;
        })
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
