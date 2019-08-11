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
     width: 100%;
     .mint-navbar{
        height: 2rem;
        background: #f2f2f2;
        margin-bottom: 0.3rem;
        font-size: 15px;
        color: gray;
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