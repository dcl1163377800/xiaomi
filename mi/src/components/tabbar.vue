<template>
  <div class="tbar">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">手机</mt-tab-item>
      <mt-tab-item id="2">电视</mt-tab-item>
      <mt-tab-item id="3">笔记本</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <!-- 在这里面写内容下面同理  每个选项卡的内容写在一个大div里  div已经写好了在里面写就行了-->
        <!-- //轮播图组件   -->
        <div class="phone">
          <Swiper></Swiper>
          <Phonefirst></Phonefirst>
          <phonesecond></phonesecond>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
          <Telswiper></Telswiper>
        <div class="tel" >
          <div class="Explosive">
            <img src="../assets/ex.jpg" alt="">  
          </div> 
          <div class="content">
            <div class="watch1">
              <img src="../assets/watch1.jpg" alt="">
              <div class="watch1_content">
                <div class="w1">
                  <span class="watch1_name">小米电视4A 32英寸</span>
                  <span class="watch1_price">￥799</span>
                </div>
                <div class="w2">
                  <p>人工智能,高清液晶屏,64位处理器</p>
                  <button class="buy buy1">立即购买</button>
                </div> 
              </div>
            </div>
            <div class="watch2">
              <div class="watch_list" v-for="item of watchList" :key="item.w_id" @click="buy(item.tId)"> 
                <div class="w1">
                  <img :src="item.tImg" alt="">
                </div>
                <div class="w2">        
                  <p class="watch_name">{{item.tName}}</p>
                  <p class="watch_brief">{{item.t_brief}}</p>
                  <p class="watch_price">
                    <span class="new_price">{{item.newPrice}}</span>
                    <span class="old_price">{{item.oldPrice}}</span>
                  </p>
                  <button class="buy">立即购买</button>
                </div>              
              </div>
            </div>
          </div> 
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="computer">
          <a href>
            <img src="../assets/computerimg.jpg" alt />
          </a>
        </div>
         <div class="picList">
              <span>
                  <img src="../assets/4.jpg" alt="">
              </span>
              <span>
                  <img src="../assets/5.jpg" alt="">
              </span>
              <span>
                  <img src="../assets/6.jpg" alt="">
              </span>
              <span>
                  <img src="../assets/7.jpg" alt="">
              </span>
              <span>
                  <img src="../assets/8.jpg" alt="">
              </span>
          </div>
          <div class="side">
              <img src="../assets/9.jpg" alt="">
          </div>
          <div class="menu">
              <div class="topPic">
                  <img src="../assets/10.jpg" alt="">
              </div>
              <div class="botoomText">
                  <div class="gameText">
                      <p><strong>游戏本2019款</strong></p>
                      <p style="color:gray;">性能怪兽全新出击</p>
                  </div>
                  <div class="priceText">
                      <p>￥7499起</p>
                      <button>立即预定</button>
                  </div>
              </div>
          </div>
          <div class="listWrap">
              <div class="box" v-for="computer in computerList" :key="computer.c_id" @click="computerBy(computer.lID)">
                  <div class="imgList">
                      <img :src="computer.lImg" alt="">
                  </div>
                  <div class="list2">
                      <p>{{computer.lName}}</p>
                      <p>{{computer.lBrief}}</p>
                      <p>￥{{computer.newPrice}}起</p>
                      <button>立即预定</button>
                  </div>
              </div>
          </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import Swiper from "./swiper";
import Telswiper from "./Telswiper";
import Phonefirst from "../components/phone/Phonefirst";
import phonesecond from '../components/phone/Phonesecone';
import axios from 'axios'; 
export default {
  data() {
    return {
      selected: "1",
      watchList:[
        // {w_id:'01',w_img:require('../assets/watch2.jpg'),w_name:'小米电视4X 43英寸',w_brief:'PHD全高清屏， 人工智能语音',new_price:'￥1399',old_price:'￥1499'},
        // {w_id:'02',w_img:require('../assets/watch2.jpg'),w_name:'小米电视4X 43英寸',w_brief:'PHD全高清屏， 人工智能语音',new_price:'￥1399',old_price:'￥1499'},
        // {w_id:'03',w_img:require('../assets/watch2.jpg'),w_name:'小米电视4X 43英寸',w_brief:'PHD全高清屏， 人工智能语音',new_price:'￥1399',old_price:'￥1499'},
        // {w_id:'04',w_img:require('../assets/watch2.jpg'),w_name:'小米电视4X 43英寸',w_brief:'PHD全高清屏， 人工智能语音',new_price:'￥1399',old_price:'￥1499'},
      ],
       computerList:[
        // {c_id:'001',c_img:require('../assets/10.jpg'),com_name:'RedmiBook 14',com_title:'超轻薄全金属笔记本',price:'￥3199'},
        // {c_id:'002',c_img:require('../assets/10.jpg'),com_name:'RedmiBook 14',com_title:'超轻薄全金属笔记本',price:'￥3199'},
        // {c_id:'003',c_img:require('../assets/10.jpg'),com_name:'RedmiBook 14',com_title:'超轻薄全金属笔记本',price:'￥3199'},
        // {c_id:'004',c_img:require('../assets/10.jpg'),com_name:'RedmiBook 14',com_title:'超轻薄全金属笔记本',price:'￥3199'},
      ]
    }
  },
  mounted(){
    axios.get('http://192.168.61.244:8080/XiaoMi/laptop').then((res)=>{
      console.log(res.data);
      this.computerList = res.data;
      
    });
    axios.get('http://192.168.61.244:8080/XiaoMi//Tv').then((res)=>{
      console.log(res.data);
      this.watchList = res.data;
    })
  },
  methods:{
    buy(res){
      console.log(res);
      this.$router.push({
        path:'/goodsdetail',
        query:{
          id:res
        }
      })
    },
    computerBy(result){
      console.log(result);
      this.$router.push({
        path:"/goodsComputer",
        query:{
          id:result
        }
      })
    }
  },
  components: {
    Swiper,
    Telswiper,
    Phonefirst,
    phonesecond
  }
};
</script>
 
<style lang="scss" scoped>
 .tbar{
    width: 100%;
    height: 1rem;
     .mint-navbar{
        background: #f2f2f2;
        padding-bottom: 0.07rem;
        color: gray;

         .mint-tab-item.is-selected {
            border-bottom: 2px solid rgb(237,91,0);
            color: rgb(237,91,0);
         }

    }
.mint-tab-container-item {
  .tel{
    background-color:rgb(159,0,33);
    padding:2%;
    .Explosive{
      width: 100%;
        img{
         width: 100%;
         height: 100%;
    }
    } 
    .content {
      .watch1{
        width: 100%;
        img{
          width: 100%;
          
        }
        .watch1_content{
          background: #fff;
          padding:7px 1%;
          .w1{
            overflow: hidden;
            .watch1_name{
              float: left;
              margin-bottom: 0.2rem;
            }
            .watch1_price{
              font-size:12px;
              color:#ea625b;
              float:right;
            }
          }
          .w2{
            overflow: hidden;
            p{
              color: rgba(0,0,0,.54);
              font-size:12px;
              float:left;
            }
            .buy{
              width:2rem;
              height:0.6rem;
              float:right;
              background-color:#ea625b;
              border:0;
              border-radius:0.2rem;
              color:#fff;
            }
          }
        }
      }
      .watch2{
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .watch_list{
           margin: 1% 0;
          width: 49%;
          .w1{
            height:3rem;
            img{
              width:100%;
              height:100%;
            }
          }
          .w2{
            background: #fff;
            text-align: center;
            padding-top: 0.2rem;
            .watch_name{
              font-size:14px;
            }
            .watch_brief{
              font-size:12px;
              color:rgba(0,0,0,.54);
            }
            .watch_price{
              font-size:12px;
              .new_price{
                color:#ea625b;
              }
              .old_price{
                color:rgba(0,0,0,.54);
                text-decoration:line-through;
              }
            }
            button{
              width:2rem;
              height:0.6rem;
              background-color:#ea625b;
              border:0;
              border-radius:0.2rem;
              color:#fff;
              margin:0.2rem;
            }
          }
        }
      }
    }
  }
  .computer {
    width: 100%;
    a {
        width:100%;
      img {
        width: 100%;
      }
    }
  }
        .picList{
            width: 100%;
            display: flex;
            justify-content: center;
            span{
                width: 20%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
           
        }
        .side{
            width: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .menu{
            width:100%;
            background: black;
            padding: 0 1%;
            font-size: 14px;
            .topPic{
                // height: 15rem;
                border-bottom: 1px solid gray;
                img{
                    width: 100%;
                    // height: 100%;
                }
            }
            .botoomText{
                // height: 5rem;
                background: white;
                display: flex;
                justify-content: space-between;
                padding:0.2rem 0.2rem;
                display: flex;
                align-items: center;
                .gameText{
                    p{
                      line-height: 0.5rem;;
                    }
                }
                .priceText{
                    p{
                        margin-left: 0.6rem;
                        margin-top: 0.3rem;
                        color: #ea625b;
                    }
                    button{
                        // margin: 0 0.5rem;
                        border: 0;
                        width: 2rem;
                        height: 0.6rem;
                        background:  #ea625b;
                        color: white;
                        border-radius: 2px;
                        float: right;
                    }
                }
            }
        }
        .listWrap{
            width: 100%;
            font-size: 14px;
            background: black;
            display: flex;
            flex-wrap: wrap;
            .box{
                  width: 48%;
                  // height: 15rem;
                  // margin: 0.4rem 0.11rem;
                  margin: 1%;
                .imgList{
                    height:3rem;
                    border-bottom: 1px solid gray;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .list2{
                    padding-top: 0.2rem;
                    background: white;
                    text-align: center;
                    // height: 7rem;
                    p:nth-child(2){
                        color: gray;
                    }
                    p:nth-child(3){
                        color: #ea625b;;
                    }
                    button{
                        border: 0;
                        width: 2rem;
                        height: 0.6rem;
                        background:  #ea625b;
                        color: white;
                        border-radius: 2px;
                        margin: 0.2rem;
                    }
                }
            }
        }
}
.mint-navbar{
    .mint-tab-item{
        font-size:1rem;
        .mint-tab-item-label{
            font-size: 15px;
        }
      }
   }
 }
 

</style>