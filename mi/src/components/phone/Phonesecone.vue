<template>
  <div class="phone_second">
        <span class="data_log" v-for="phone in phoneLlist" v-bind:key="phone.id">
        <div class="img1">
            <img :src="phone.gImg" alt />
        </div>
        <div class="content">
            <div class="phone_name">{{phone.gName}}</div>
            <div class="phone_prief">{{phone.gBrief}}</div>
            <div class="phone_price">￥{{phone.gewPrice}}</div>
            <button>立即预购</button>
        </div>
        </span>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      phoneLlist: []
    };
  },
  mounted(){
    axios.get('http://192.168.61.244:8080/XiaoMi/phone').then((res)=>{
      console.log(res.data);
      this.phoneLlist = res.data;
    })
  }
};
</script>
<style lang="scss" scoped>
.phone_second {
  width: 100%;
  background-color: rgb(230, 231, 251);
  display: flex;
  flex-wrap: wrap;
  
  .data_log {
    width: 48%;
    margin: 1%;
    font-size: 14px;
    .img1 {
      height:3.5rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .content {
        width: 100%;
        background:white;
        text-align: center;
        padding-top: 0.2rem;
        
        button{
            margin: 0.2rem;
            width: 2rem;
            height: 0.6rem;
            border: 0;
            background: #ea625b;
            border-radius: 2px;
            color: white;
        }
      .phone_name {
        width: 100%;
        text-align: center;
      }
      .phone_prief {
        width: 100%;
        text-align: center;
        white-space: nowrap;
        text-overflow: clip;
        font-size:12px;
        color:rgba(0,0,0,.54);
      }
      .phone_price {
        width: 100%;
        text-align: center;
        color:#ea625b;
      }
    }
  }
}
</style>