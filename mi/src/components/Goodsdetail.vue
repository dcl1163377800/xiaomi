<template>
  <div id="goodsdetail">
    <div class="goods_detail" v-for="goods in watchList" :key="goods.gID">
      <div class="detail_swiper">
        <div class="header">
          <span class="iconfont icon-zuojiantou" @click="goback_index()"></span>
          <span class="iconfont icon-fenxiang"></span>
        </div>
        <mt-swipe :auto="4000" style="height:8rem;width:100%">
          <mt-swipe-item>
            <img :src="goods.gImg" alt style="height:100%;width:100%" />
          </mt-swipe-item>
          <mt-swipe-item>
            <img :src="goods.gImg1" alt style="height:100%;width:100%" />
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="goods_content">
        <p class="goods_name">{{goods.gContent}}</p>
        <p class="goods_brief">{{goods.gBrief}}</p>
        <div class="price">
          <span class="new_price" ref="p_price">￥{{goods.gewPrice}}</span>
          <span class="old_price">￥{{goods.gldPrice}}</span>
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
        <div class="goods_info_content" @click="writeMessageShow=true">
          <div class="selected">
            <span class="se_left">已选</span>
            <span>{{goods.gName}}</span>
            <span @click="writeMessageShow=true">{{goods.gName}}</span>
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
      <!-- 点击弹出遮罩层 -->
      <div class="wmassageMask" v-show="writeMessageShow">
        <div class="messageMaskContent" ref="msk">
          <div class="showList">
            <span @click="writeMessageShow=false">×</span>
          </div>
          <div class="side">
            <div class="img_">
              <img :src="goods.gImg" alt />
            </div>
            <div class="title_List">
              <span>￥{{goods.gewPrice}}</span>
              <span>￥{{goods.gldPrice}}</span>
              <p>{{goods.gContent}}</p>
            </div>
          </div>
          <div @click="test1">
            <div class="banben">
              <span>版本</span>
            </div>
            <div class="xinhao">
              <span>{{goods.gBan1}}</span>
            </div>
            <div class="banben">
              <span ref="color_span">颜色</span>
            </div>
            <div class="xinhao">
              <span>{{goods.gColor1}}</span>
            </div>
            <div class="banben">
              <span>套餐</span>
            </div>
            <div class="xinhao">
              <span>标配</span>
              <span>十元快充</span>
            </div>
          </div>

          <button @click="addToCart">加入购物车</button>
        </div>
      </div>
      <!-- 评论 -->
      <div class="comment">
        <div class="person">
          <!-- <span class="iconfont icon-wode"></span> -->
          <div class="per_photo">
            <img src="../assets/12.png" alt />
          </div>
          <div class="per">
            <p class="per_name">韩商言</p>
            <p class="per_time">2018-04-11</p>
          </div>
          <div class="Fabulous">
            <span class="iconfont icon-weibiaoti-_huabanfuben"></span>
          </div>
        </div>
        <div class="comment_content">
          <div class="writing">总体来说,色彩跟音效都还可以,这个价位很优惠,特点是遥控器的语音功能</div>
          <div class="photo">
            <img src="//i1.mifile.cn/a2/1523461430_1182205_s1080_960wh!540x5400.jpg" alt />
            <img src="//i1.mifile.cn/a2/1523461431_5796449_s1080_960wh!540x5400.jpg" alt />
            <img src="//i1.mifile.cn/a2/1523461433_3604418_s1080_1920wh!540x5400.jpg" alt />
            <img src="//i1.mifile.cn/a2/1523461433_3604418_s1080_1920wh!540x5400.jpg" alt />
          </div>
        </div>
      </div>
      <div class="more_commont">
        更多评论
        <span class="iconfont icon-filteroff"></span>
      </div>
      <!-- 详情 -->
      <div class="detailed">
        <div class="detailed_bar">
          <ul>
            <li
              v-for="(item,index) of detailed_tab"
              :key="item.tab_id"
              v-text="item.tab_title"
              class="lis"
              @click="changeLi(index)"
              :class="{'active' : currentIndex === index}"
            ></li>
          </ul>
        </div>
        <div class="bar_content">
          <div
            class="bar_imgs"
            :class="{'content_active' : currentIndex === index}"
            v-for="(item,index) of detailed"
            :key="item.summary_id"
          >
            <div class="bar_img" v-for="(img,index) in item.summary_img" :key="index">
              <img :src="img.img1" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="index">
        <span class="iconfont icon-shouyefanhuishouye"></span>
        <!-- <p>首页</p> -->
        <router-link to="/">首页</router-link>
      </div>
      <div class="cart">
        <span class="iconfont icon-qicheqianlian-1-copy"></span>
        <!-- <p>购物车</p> -->
        <router-link to="/HomePage/shoppingcar">购物车</router-link>
        <span class="num"></span>
      </div>
      <div class="buying">
        <button @click="test">加入购物车</button>
        <span class="bool bool-animate" ref="bool"></span>
      </div>
    </div>
  </div>
</template>
<script>
import detailfooter from "./DetailFooter";
import axios from "axios";
export default {
  name: "goodsdetail",
  components: {
    detailfooter
  },
  data() {
    return {
      writeMessageShow: false,
      currentIndex: 0,
      watchList: [],
      songList: [],
      detailed_tab: [
        { tab_id: "01", tab_title: "概述" },
        { tab_id: "02", tab_title: "参数" },
        { tab_id: "03", tab_title: "安装服务" },
        { tab_id: "04", tab_title: "常见问题" }
      ],
      detailed: [
        {
          summary_id: "01",
          summary_img: [
            {
              img1:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/97621602cb45c394ea49ca761fa3f8ec.jpg"
            },
            {
              img1:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3eb08affdbf987f2f6f995480186a33.jpg"
            },
            {
              img1:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa6b147384fa270c653b93baf229a74c.jpg"
            },
            {
              img1:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bedc7aeb428232804ed2b8b14678724f.jpg"
            },
            {
              img1:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/89f1e1395dda904d305a768e85ef338a.jpg"
            }
          ]
        },
        {
          summary_id: "02",
          summary_img: [
            {
              img1:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/eab16e1226c6fe2da4352c5a61413d5a.jpg"
            },
            {
              img1:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/84c28deb98c88ab8dd69c9f7cae07027.jpg"
            },
            {
              img1:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/50a22c455ba186df7d54f484a29c76e1.jpg"
            },
            {
              img1:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/50a22c455ba186df7d54f484a29c76e1.jpg"
            },
            {
              img1:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/af0280721e0132501c56a543910bca69.jpg"
            },
            {
              img1:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/072ab154395e09344cbe64d91742cc4e.jpg"
            },
            {
              img1:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/327a899b678340e6e2418fc2ed7a3687.jpg"
            },
            {
              img1:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3a284da99bafba858c1a429bd4d05bc4.jpeg"
            }
          ]
        },
        {
          summary_id: "03",
          summary_img: [
            {
              img1:
                "//i8.mifile.cn/b2c-mimall-media/1673f6f407678c70a8348ca01659a815.jpg"
            },
            {
              img1:
                "//i8.mifile.cn/b2c-mimall-media/91958b7466f8b19302237a8be1fb9b90.jpg"
            },
            {
              img1:
                "//i8.mifile.cn/b2c-mimall-media/e03a2daf7da5ea857cb75af0d05c251b.jpg"
            }
          ]
        },
        {
          summary_id: "04",
          summary_img: [
            {
              img1:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/92d8172079dd11dbc5971f1f2cc4d8f3.jpg"
            },
            {
              img1:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/54cc538db88eff88a03e157583c123bc.jpg"
            },
            {
              img1:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/06964bd51cee71332ff01b1b7dfe58fb.jpg"
            },
            {
              img1:
                "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d28911a0a052d114330446cfac3ad9c0.jpg"
            }
          ]
        }
      ]
    };
  },
  methods: {},
  mounted() {
    sessionStorage.setItem("gb", "");
    // code=1 手机
    // code=2 电视
    // code=3 笔记本
    // http://192.168.61.244:8080/XiaoMi/search?code=3&id=01
    axios
      .get(
        `http://106.53.65.198:8080/XiaoMi/search?code=2&id=` +
          this.$route.query.id
      )
      .then(res => {
        console.log(res.data);
        this.watchList.push(res.data);

        let gname = res.data.gName;
        let gbrief = res.data.gBrief;
        let gimg = res.data.gImg;
        let gnewprice = res.data.gewPrice;
        let num = 1;
        let color = res.data.gColor1;
        let gId = res.data.gID;
        console.log(gname, gbrief, gnewprice, gimg, num, color, gId);
        let obb = {
          gname: gname,
          gbrief: gbrief,
          gnewprice: gnewprice,
          gimg: gimg,

          num: num,
          color: color,
          gId: gId
        };
        let str_obb = JSON.stringify(obb);
        sessionStorage.setItem("gotocar", str_obb);
      });
  },
  methods: {
    test_gb() {
      let cogb = this.$refs.color_span[0].innerText;
      console.log(cogb);
      sessionStorage.setItem("gb", cogb);
    },

    test() {
    //  let test = sessionStorage.setItem("gb",this.$refs.color_span[0].innerText);

      // if (sessionStorage.getItem('gb')) {
      //     alert('规格已经选好，请点击加入购物车')
      // } else {
        this.$toast({
                        message: '你需要选好规格',
                        // iconClass: 'icon icon-success'
                    });
      // }
    },
    test1(){
        let test = sessionStorage.setItem("gb",this.$refs.color_span[0].innerText);

      if (sessionStorage.getItem('gb')) {
         this.$toast({
                        message: '规格已经选好，请点击加入购物车',
                        // iconClass: 'icon icon-success'
                    });
          // alert('规格已经选好，请点击加入购物车')
      } else {
        this.$toast({
                        message: '你需要选好规格',
                        // iconClass: 'icon icon-success'
                    });
      }
    },
    goback_index() {
      this.$router.go(-1);
    },
    changeLi($index) {
      this.currentIndex = $index;
    },
    addToCart() {
      console.log("car");
      let test = sessionStorage.getItem("gb");
        
      if (test) {
        
        if(sessionStorage.getItem('token')){
        let list = sessionStorage.getItem("gotocar");
    
      let car_list = JSON.parse(list);
      console.log(car_list.gimg)
        axios.get(
            `http://106.53.65.198:8080/XiaoMi/insertGoods?gimg=${car_list.gimg}&gname=${car_list.gname}&gbrief=${car_list.gbrief}&gnewprice=${car_list.gnewprice}&num=${car_list.num}&gId=${car_list.gId}&gcolor=3`
          )
          .then(res => {
            console.log(res.data);
            this.$router.push("/HomePage/shoppingcar");
            if(res.data.code==1){
              this.$toast({
                        message: '成功添加购物车',
                        // iconClass: 'icon icon-success'
                    });
            }
            
          });
          }else{
              alert('你还没登录，请去登录')
              this.$router.push('/login');
          }
      } else {
        this.$toast({
                        message: '你需要选好规格',
                        // iconClass: 'icon icon-success'
                    });
      }

    
     
    
    }
  }
};
</script>
<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 0;
  width: 100%;
  height: 1rem;
  background: #f2f2f2;
}
.goods_detail {
  margin-bottom: 2rem;
  .detail_swiper {
    position: relative;
    .header {
      position: absolute;
      top: 0.2rem;
      left: 0.2rem;
      right: 0.2rem;
      height: 5rem;
      z-index: 1;
      display: flex;
      justify-content: space-between;
      span {
        font-size: 30px;
      }
    }
  }
  .goods_content {
    padding: 1% 5%;
    .goods_name {
      font-size: 20px;
      margin: 0.2rem 0;
    }
    .goods_brief {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.54);
      white-space: wrap;
    }
    .price {
      padding: 0.2rem 0;
      .new_price {
        font-size: 20px;
        color: #ff6700;
      }
      .old_price {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.54);
        text-decoration: line-through;
      }
    }
  }
  .goods_param {
    padding: 1% 0;
    ul {
      text-align: center;
      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap;
      padding-bottom: 0.5rem;
      li {
        border-right: 1px solid #ccc;
        width: 2rem;
        text-align: center;
        display: inline-block;
        p:nth-child(2) {
          font-size: 12px;
          color: #3c3c3c;
        }
        p:last-child {
          font-size: 10px;
          color: #676767;
        }
      }
    }
  }
  & > .goods_info {
    padding: 0 2%;
    & > .goods_info_content {
      background-color: #fafafa;
      border-radius: 0.2rem;
      border-bottom: 1px solid rgb(245, 239, 239);
      & > div {
        border-bottom: 1px solid rgb(245, 239, 239);
        height: 1rem;
        line-height: 1rem;
        padding: 0 0.3rem;
        font-size: 12px;
      }
      div:last-child {
        border: 0;
      }
      .selected {
        .se_left {
          color: rgba(0, 0, 0, 0.54);
          display: inline-block;
          margin-right: 1rem;
        }

        span:last-child {
          float: right;
        }
      }

      .address {
        .ad_left {
          color: rgba(0, 0, 0, 0.54);
          display: inline-block;
          margin-right: 1rem;
        }
        span:last-child {
          float: right;
        }
      }
      .mi {
        .iconfont {
          font-size: 18px;
          color: #ff6700;
        }
        span:nth-child(even) {
          color: rgba(0, 0, 0, 0.54);
          display: inline-block;
          margin-right: 0.5rem;
        }
        span:last-child {
          float: right;
          color: #000;
        }
      }
    }
  }
  .comment {
    margin: 2%;
    border-radius: 0.2rem;
    background: #fafafa;
    border: 1px solid rgb(245, 239, 239);
    .person {
      overflow: hidden;
      margin: 0.2rem;
      display: flex;
      align-items: center;
      .per_photo {
        float: left;
        margin-right: 0.15rem;
        img {
          width: 0.8rem;
          border-radius: 50%;
        }
      }
      .per {
        float: left;
        .per_name {
          font-size: 12px;
          color: #3c3c3c;
        }
        .per_time {
          color: rgba(0, 0, 0, 0.54);
          font-size: 10px;
        }
      }
      .Fabulous {
        margin-left: 61%;
      }
    }
    .comment_content {
      text-align: justify;
      .writing {
        margin: 0 0.2rem;
        // line-height:0.4rem;
        // height:0.8rem;
        text-overflow: ellipsis;
        overflow: hidden;
        color: rgba(0, 0, 0, 0.87);
        text-overflow: ellipsis;
      }
      .photo {
        margin: 0.2rem;
        display: flex;
        justify-content: space-between;
        overflow-x: scroll;
        img {
          width: 1.8rem;
          height: 1.5rem;
          border-radius: 20px;
          margin-right: 0.3rem;
        }
      }
    }
  }
  .more_commont {
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    color: #4e72a5;
    font-size: 16px;
  }
  .detailed {
    .detailed_bar {
      ul {
        // border:1px solid #fafafa;
        display: flex;
        align-content: space-around;
        height: 0.8rem;
        line-height: 0.8rem;
        li {
          float: left;
          border: 1px solid #f4f4f4;
          color: #3c3c3c;
          font-size: 14px;
          width: 25%;
          text-align: center;
        }
        .active {
          color: #ff6700;
        }
      }
    }
    .bar_content {
      .bar_imgs {
        display: none;
        .bar_img {
          width: 100%;
          img {
            width: 100%;
          }
        }
      }
      .content_active {
        display: block;
      }
    }
  }
}
//点击弹出遮罩层
.wmassageMask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 101;
  .messageMaskContent {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    // transition: all 2s;
    height: 10rem;
    background-color: #fff;
    .showList {
      width: 100%;
      text-align: right;
      span {
        font-size: 0.8rem;
        color: gray;
      }
    }
    .side {
      width: 100%;
      height: 2rem;
      display: flex;
      justify-content: center;
      padding: 0 3%;
      .img_ {
        width: 30%;
        height: 2rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .title_List {
        width: 70%;
        span {
          margin-top: 4%;
          margin-left: 4%;
          display: inline-block;
        }
        span:nth-child(1) {
          color: #ff6700;
          font-size: 0.5rem;
        }
        span:nth-child(2) {
          color: gray;
          text-decoration: line-through;
        }
        p {
          color: #3c3c3c;
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          margin-left: 4%;
          margin-top: 4%;
          font-size: 0.28rem;
        }
      }
    }
    .banben {
      margin-top: 2%;
      span {
        margin-left: 4%;
      }
    }
    .xinhao {
      span {
        display: inline-block;
        text-align: center;
        margin-left: 6%;
        margin-top: 4%;
        color: #ff6700;
        padding: 2%;
      }
    }
    button {
      width: 80%;
      height: 1rem;
      margin: 7% 10%;
      border-radius: 0.5rem;
      border: 0;
      background: #ff6700;
      color: white;
      font-size: 0.3rem;
    }
  }
}
.footer {
  position: fixed;
  bottom: 0.1rem;
  left: 0.2rem;
  right: 0.2rem;
  box-shadow: 1px 1px 2px 1px #ccc;
  border-radius: 15px;
  height: 1rem;
  z-index: 1;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .index,
  .cart {
    text-align: center;
    a {
      color: rgba(0, 0, 0, 0.54);
      font-size: 12px;
      display: block;
    }
  }
  .buying {
    button {
      color: #fff;
      width: 2rem;
      height: 0.7rem;
      background: #ff6700;
      border-radius: 30px;
      border: 0;
      font-size: 14px;
    }
  }
}
</style>