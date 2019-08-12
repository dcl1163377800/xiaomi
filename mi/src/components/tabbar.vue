<template>
  <div style="width:100%;height:2rem" class="tbar">
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
          111
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="tel" >
          <Telswiper></Telswiper>
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
              <div class="watch_list" v-for="item of watchList" :key="item.w_id"> 
                <div class="w1">
                  <img :src="item.w_img" alt="">
                </div>
                <div class="w2">        
                  <p class="watch_name">{{item.w_name}}</p>
                  <p class="watch_brief">{{item.w_brief}}</p>
                  <p class="watch_price">
                    <span class="new_price">{{item.new_price}}</span>
                    <span class="old_price">{{item.old_price}}</span>
                  </p>
                  <button class="buy" @click="buy">立即购买</button>
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
          333
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import Swiper from "./swiper";
import Telswiper from "./Telswiper";
export default {
  data() {
    return {
      selected: "1",
      watchList:[
        {w_id:'01',w_img:require('../assets/watch2.jpg'),w_name:'小米电视4X 43英寸',w_brief:'PHD全高清屏， 人工智能语音',new_price:'￥1399',old_price:'￥1499'},
        {w_id:'02',w_img:require('../assets/watch2.jpg'),w_name:'小米电视4X 43英寸',w_brief:'PHD全高清屏， 人工智能语音',new_price:'￥1399',old_price:'￥1499'},
        {w_id:'03',w_img:require('../assets/watch2.jpg'),w_name:'小米电视4X 43英寸',w_brief:'PHD全高清屏， 人工智能语音',new_price:'￥1399',old_price:'￥1499'},
        {w_id:'04',w_img:require('../assets/watch2.jpg'),w_name:'小米电视4X 43英寸',w_brief:'PHD全高清屏， 人工智能语音',new_price:'￥1399',old_price:'￥1499'},
      ]
    }
  },
  methods:{
    buy(){
      
    }
  },
  components: {
    Swiper,
    Telswiper
  }
};
</script>
 
<style lang="scss" scoped>
 .tbar{
     width: 100%;
     .mint-navbar{
        height: 2rem;
        background: #f2f2f2;
        margin-bottom: 0.3rem;
        font-size: 15px;
        color: gray;
    }
.mint-tab-container-item {
  .tel{
    background-color:rgb(159,0,33);
    padding:0 0.3rem 0.3rem 0.3rem;
    .Explosive img{
      height:3.2rem;
    }
    .content {
      .watch1{
        img{
          height:14.3em;
        }
        .watch1_content{
          background: #fff;
          padding:0.6rem 0.8rem;
          .w1{
            overflow: hidden;
            .watch1_name{
              float: left;
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
              height:1.5rem;
              line-height:1.5rem;
            }
            .buy{
              width:6rem;
              height:1.5rem;
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
          display:flex;
          flex-direction: column;
          margin-top: 0.3rem;;
          .w1{
            width: 11.3rem;
            img{
              width:100%;
            }
          }
          .w2{
            background: #fff;
            text-align: center;
            .watch_name{
              font-size:14px;
              height:1.5rem;
              line-height:1.5rem;
            }
            .watch_brief{
              font-size:12px;
              color:rgba(0,0,0,.54);
              height:1.2rem;
              line-height:1.2rem;
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
              width:6rem;
              height:1.5rem;
              background-color:#ea625b;
              border:0;
              border-radius:0.2rem;
              color:#fff;
              margin:0.3rem;
            }
          }
        }
      }
    }
  }
  .computer {
    width: 100%;
    height: 15rem;
    a {
        width:100%;
        height: 15rem;
      img {
        width: 100%;
        height: 15rem;
      }
    }
  }

}
.mint-navbar{
    .mint-tab-item{
        font-size:1rem;
        .mint-tab-item-label{
            font-size: 15px;
            line-height: 1;
        }
    }
     .mint-tab-item.is-selected {
     border-bottom: 3px solid orange;
     color: orange;
     margin-bottom: -3px;
     }
}
 }

</style>