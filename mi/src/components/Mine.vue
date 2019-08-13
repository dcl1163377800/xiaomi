<template>
  <div class="wrap">
    <div class="head">
      <div class="middle">
        <i class="logo">
            <img src="https://m.mi.com/static/img/avatar.76a75b8f17.png" alt="">
        </i>
        <div class="head_log_reg">
          <!-- <router-link to="/login">登录</router-link>
          <router-link to="/register">/注册</router-link> -->
          <span @click="writeMessageShow=true">登录/注册</span>
            <div class="wmassageMask" v-show="writeMessageShow" @click="writeMessageFun($event) " ref="shadow">
            　　<div class="messageMaskContent" ref="msk">
                  <span>协议声明</span>
                  <p>《小米商城用户协议》《账号协议》《隐私政策》</p>
                  <p>请您仔细阅读以上协议，其中有对您权利义务的特别约定等重要条款，同意后方可使用本软件</p>
                 <div class="yuedu">
                    <span @click="writeMessageShow=false">不同意</span>
                    <router-link to="/login" tag="span">同意</router-link>
                 </div>
            　　</div>
            </div>
        </div>
      </div>
    </div>
    <section>
      <div class="section_middle">
        <span class="order">我的订单</span>
        <div class="all_order">
          <span>全部订单</span>
          <i class="iconfont icon-lunboyou"></i>
        </div>
      </div>
    </section>
    <div class="mine_third">
      <ul class="mine_nav">
        <li>
          <div class="box">
            <i class="iconfont icon-daifukuan"></i>
            <p>代付款</p>
          </div>
        </li>
        <li>
          <div class="box">
            <i class="iconfont icon-daishouhuo1"></i>
            <p>代收款</p>
          </div>
        </li>
        <li>
          <div class="box">
            <i class="iconfont icon-xiuli1"></i>
            <p>退换修</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="mine_four">
      <ul class="mine_four_nav">
        <li>
          <i class="iconfont icon-huiyuan-"></i>
          <span>
            会员中心
            <i class="iconfont icon-lunboyou"></i>
          </span>
        </li>
        <li>
          <i class="iconfont icon-youhui"></i>
          <span>
            我的优惠
            <i class="iconfont icon-lunboyou"></i>
          </span>
        </li>
      </ul>
       <ul class="mine_four_nav">
        <li>
          <i class="iconfont icon-jia"></i>
          <span>
            小米之家
            <i class="iconfont icon-lunboyou"></i>
          </span>
        </li>
        <li>
          <i class="iconfont icon-fuwuzhongxin1"></i>
          <span>
            服务中心
            <i class="iconfont icon-lunboyou"></i>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    data () {
  　　return {
  　　　　writeMessageShow: false
  　　}
  },

methods: {
　　writeMessageFun (ev) {
// 　　　　if (!this.$refs.msk.contains(ev.target)) {
// 　　　　　　this.writeMessageShow = false;
// 　　　　}
　　}
}
};
</script>
<style lang="scss" scoped>
.head {
  background: #f37d0f;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  height: 1.5rem;
  .middle {
    // line-height: 1.5rem;
    display: flex;
    align-items: left;
    margin-left: 2%;
    .logo {
      width: 13%;
      margin-top: 0.3rem;
      margin-right: 0.2rem;
      img{
          width: 100%;
      }
    }
    .head_log_reg {
      color: white;
      font-size: 0.34rem;
      margin-top: 0.5rem;
      .wmassageMask{
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: rgba(0,0,0,.3);
          z-index: 101;
          .messageMaskContent{
            position: absolute;
            bottom: 4rem;
            left: 2%;
            right: 2%;
            width: 96%;
            background-color: #fff;
            border-radius: 0.2rem;
            color: black;
            .yuedu{
              display: flex;
              // justify-content: space-between;
              align-items: center;
              span{
                display: block;
                padding: 4% 11%;
                border:1px solid gray;
                margin-top: 8%;
                border:1px solid #f5f5f5;
                color: gray;
              }
               span:nth-child(1){
                display: block;
                margin-left: 14%;
              }
               span:nth-child(2){
                 color: #f37d0f;
               }
            }
            span{
              display: block;
               text-align: center;
            }
              p:nth-child(2){
                margin-top: 3%;
                padding: 0 12%;
                font-size: 0.25rem;
                color: orange;
                font-weight: 500;
                }
                 p:nth-child(3){
                    font-size: 0.25rem;
                    padding: 2% 12%;
                    font-weight: 500;
                    color: gray;
                }
            }
          }
      a{
          color: white;
      }
    }
  }
}
section {
  width: 100%;
  margin-top: 1.2rem;
  border-bottom: 1px solid #f2f2f2;
  .section_middle {
    margin-left: 2%;
    line-height: 0.8rem;
    width: 98%;
    display: flex;
    justify-content: space-between;
    .order {
        font-size: 0.3rem;
    }
    .all_order {
      display: flex;
      align-items: center;
      margin-right: 0;
      span {
        margin-right: 0.4rem;
      }
      i {
        font-size: 0.2rem;
      }
    }
  }
}
.mine_third {
  width: 100%;
  overflow: hidden;
  .mine_nav {
    width: 100%;
    text-align: center;

    li {
      width: 30%;
      display: inline-block;
      margin: 5% 1%;
      i {
        font-size: 0.5rem
      }
      p {
        color: rgba(0, 0, 0, 0.87);
        font-size: 12px;
        margin-top: 0.2rem;
      }
    }
  }
}
.mine_four {
  background: #f5f5f5;
  overflow: hidden;
  .mine_four_nav {
    background: white;
    margin-top: 0.2rem;
    li {
      width: 100%;
      .icon-huiyuan- {
        display: inline-block;
        width: 12%;
        font-size: 0.5rem;
        margin: 7% 2%;
        color: orangered;
      }
      .icon-youhui {
        display: inline-block;
        width: 12%;
        font-size: 0.5rem;
        margin: 7% 2%;
        color: skyblue;
      }
      .icon-jia {
        display: inline-block;
        width: 12%;
        font-size: 0.5rem;
        margin: 7% 2%;
        color: orangered;
      }
      .icon-fuwuzhongxin1 {
        display: inline-block;
        width: 12%;
        font-size: 0.5rem;
        margin: 7% 2%;
        color: red;
      }
      span {
        padding: 0.2rem 0;
        color: rgba(0, 0, 0, 0.87);
        display: inline-block;
        width: 78%;
        // margin-left: 5%;
        font-size: 0.3rem;
        border-bottom: 2px solid #f2f2f2;
        .icon-lunboyou {
          float: right;
          // line-height: 1rem;
        }
      }
      .curison {
        border-bottom: none;
      }
    }
  }

}
</style>