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
        <div class="tel">
          <Telswiper></Telswiper>
          222
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
              <div class="box">
                  <div class="imgList">
                      <img src="../assets/10.jpg" alt="">
                  </div>
                  <div class="list2">
                      <p>RedmiBook 14</p>
                      <p>超轻薄全金属笔记本</p>
                      <p>￥3199起</p>
                      <button>立即预定</button>
                  </div>
              </div>
               <div class="box">
                  <div class="imgList">
                      <img src="../assets/10.jpg" alt="">
                  </div>
                  <div class="list2">
                      <p>RedmiBook 14</p>
                      <p>超轻薄全金属笔记本</p>
                      <p>￥3199起</p>
                      <button>立即预定</button>
                  </div>
              </div>
               <div class="box">
                  <div class="imgList">
                      <img src="../assets/10.jpg" alt="">
                  </div>
                  <div class="list2">
                      <p>RedmiBook 14</p>
                      <p>超轻薄全金属笔记本</p>
                      <p>￥3199起</p>
                      <button>立即预定</button>
                  </div>
              </div>
               <div class="box">
                  <div class="imgList">
                      <img src="../assets/10.jpg" alt="">
                  </div>
                  <div class="list2">
                      <p>RedmiBook 14</p>
                      <p>超轻薄全金属笔记本</p>
                      <p>￥3199起</p>
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
export default {
  data() {
    return {
      selected: "1"
    };
  },
  components: {
    Swiper,
    Telswiper
  }
};
</script>
 
<style lang="scss" scoped>
 .tbar{
     .mint-navbar{
        height: 2rem;
        background: #f2f2f2;
        margin-bottom: 0.3rem;
        color: gray;
         .mint-tab-item.is-selected {
            border-bottom: 3px solid orange;
            color: orange;
            margin-bottom: -3px;
            font-size: 15px;
        }
    }
    .mint-tab-container-item {
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
        .picList{
            width: 100%;
            height: 5rem;
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
            height: 5rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .menu{
            width: 22.9rem;
            height: 20rem;
            background: black;
            padding: 0 0.3rem;
            font-size: 14px;
            .topPic{
                height: 15rem;
                border-bottom: 1px solid gray;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .botoomText{
                height: 5rem;
                background: white;
                display: flex;
                justify-content: space-between;
                .gameText{
                    p{
                        margin: 0.5rem 0.5rem;
                    }
                }
                .priceText{
                    p{
                        margin-left: 2rem;
                        margin-top: 0.8rem;
                        color: #ea625b;
                    }
                    button{
                        margin: 0 0.5rem;
                        border: 0;
                        width: 6rem;
                        height: 2rem;
                        background:  #ea625b;
                        color: white;
                        border-radius: 2px;
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
                width: 11rem;
                height: 15rem;
                margin: 0.5rem 0.35rem;
                .imgList{
                    height: 8rem;
                    border-bottom: 1px solid gray;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .list2{
                    padding-top: 0.5rem;
                    background: white;
                    text-align: center;
                    height: 7rem;
                    p:nth-child(2){
                        color: gray;
                    }
                    p:nth-child(3){
                        color: #ea625b;;
                    }
                    button{
                        border: 0;
                        width: 6rem;
                        height: 2rem;
                        background:  #ea625b;
                        color: white;
                        border-radius: 2px;
                        margin-top: 0.5rem;
                    }
                }
            }
        }
    }
 }

 

</style>