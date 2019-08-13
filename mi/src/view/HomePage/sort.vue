<template>
  <div class="sort">
    <div class="menu">
      <span class="iconfont icon-right"></span>
      <span>分类</span>
      <span class="iconfont icon-suosou"></span>
    </div>
    <div class="nav">
      <div class="left_menu">
        <ul>
          <li
            class="lis"
            ref="lis"
            :class="{'active' : currentIndex  === index}"
            v-for="(item,index) of nav"
            :key="item.id"
            @click="changeLi(index)"
            v-text="item.nav_name"
          ></li>
          <!-- <li class="lis" ref="lis" :class="{active:item == activeItem}"  v-for="item of nav" :key="item.id" @click="changeLi(item,index)">{{item.nav_name}}</li> -->
        </ul>
      </div>
      <div class="right_content">
        <div class="sub" :class="{'content_active' : currentIndex === index}" v-for="(item,index) of phones" :key="item.id">
            <div class="phoneLi">
                 <span>--  手机  --</span>
             </div>
             <div class="flexed">
                <div class="smallImg" v-for="(img,index) in item.phone_img" :key="index">
                    <img :src="img.img1" alt />
                    <div class="Phone_name">{{item.phone_name}}</div>
                </div>
             </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeItem: null,
      currentIndex: 0,
      nav: [
        { nav_id: "01", nav_name: "新品" },
        { nav_id: "02", nav_name: "众筹" },
        { nav_id: "03", nav_name: "手机" },
        { nav_id: "04", nav_name: "电视" },
        { nav_id: "05", nav_name: "电脑" },
        { nav_id: "06", nav_name: "智能" },
        { nav_id: "07", nav_name: "家用电器" },
        { nav_id: "08", nav_name: "新品" },
        { nav_id: "09", nav_name: "众筹" },
        { nav_id: "001", nav_name: "手机" },
        { nav_id: "002", nav_name: "电视" },
        { nav_id: "003", nav_name: "电脑" },
        { nav_id: "004", nav_name: "智能" },
        { nav_id: "005", nav_name: "家用电器" }
      ],
      phones: [
        {
          phone_id: "01",
          phone_name: "小米cc9",
          phone_img: [
            {
              img1: require("../../assets/11.jpg")
            },
            {
              img1: require("../../assets/11.jpg")
            },
            {
              img1: require("../../assets/11.jpg")
            },
            {
              img1: require("../../assets/11.jpg")
            },
            {
              img1: require("../../assets/11.jpg")
            },
            {
              img1: require("../../assets/11.jpg")
            },
          ]
        },
        // {phone_id:'02',phone_name:'小米cc9e',phone_img:require('../../assets/3.jpg')},
        // {phone_id:'03',phone_name:'小米cc9e 美图版',phone_img:require('../../assets/3.jpg')},
        // {phone_id:'04',phone_name:'小米9',phone_img:require('../../assets/3.jpg')},
        // {phone_id:'05',phone_name:'小米9 SE',phone_img:require('../../assets/3.jpg')},
        // {phone_id:'06',phone_name:'小米Redmi 7',phone_img:require('../../assets/3.jpg')},
        // {phone_id:'07',phone_name:'小米Redmi 7A',phone_img:require('../../assets/3.jpg')}
      ]
    };
  },
  methods: {
    changeLi($index) {
      //   let lis = this.$refs.lis;
      //   console.log(lis);
      this.currentIndex = $index;
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  width: 100%;
  // height: 3rem;
  top: 0;
  background: #f2f2f2;
  line-height: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  .icon-right {
    font-size: 0.5rem;
  }
  .icon-suosou {
    font-size: 0.5rem;
  }
}

.nav {
  width: 100%;
  background: #fefefe;
  .left_menu {
    position: fixed;
    top: 1rem;
    bottom: 1rem;
    left: 0;
    width: 20%;
    border-right: 1px solid #efefef;
    // overflow: hidden;
    overflow-y: scroll;
    overflow-x: hidden;
    ul {
      padding: 0.2rem 0rem 0.3rem 0;
      overflow-y: scroll;
      li {
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        font-size: 12px;
      }
      .active {
        color: #fb7d34;
        font-size: 18px;
      }
    }
  }
  .right_content {
    position: absolute;
    left: 20%;
    top: 1rem;
    width: 80%;
    text-align: center;
    margin-top: 1.5rem;
    .phoneLi{
        font-size: 0.3rem;
    }
  }
  .sub {
    display: none;
    .phoneLi{
        margin-bottom: 0.5rem;
    }
  }
  .content_active {
    display: block;
    .flexed{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
          .smallImg {
            width: 30%;
            img {
                width: 100%;
            }
            .Phone_name {
                color: #999;
             }
        }
    }   
  }
}
</style>