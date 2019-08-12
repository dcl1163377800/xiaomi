<template>
  <div class="phone_second">
        <a href class="data_log" v-for="phone in phoneLlist" v-bind:key="phone.id">
        <div class="img1">
            <img src="../../assets/list1.jpg" alt />
        </div>
        <div class="content">
            <div class="phone_name">{{phone.name}}</div>
            <div class="phone_prief">{{phone.prief}}</div>
            <div class="phone_price">{{phone.price}}</div>
            <button>立即预购</button>
        </div>
        </a>
    <!-- <a href="" class="data_log"></a> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      phoneLlist: [
        {
          id: "111",
          name: "手机1",
          prief: "长续航",
          price: "价格",
          img: "../../assets/list1.jpg"
        },
        {
          id: "222",
          name: "手机2",
          prief: "长续航",
          price: "价格",
          img: "../../assets/list1.jpg"
        },
        {
          id: "333",
          name: "手机3",
          prief: "长续航",
          price: "价格",
          img: "../../assets/list1.jpg"
        },
        {
          id: "444",
          name: "手机4",
          prief: "长续航",
          price: "价格",
          img: "../../assets/list1.jpg"
        },
        {
          id: "555",
          name: "手机5",
          prief: "长续航",
          price: "价格",
          img: "../../assets/list1.jpg"
        },
        {
          id: "666",
          name: "手机6",
          prief: "长续航",
          price: "价格",
          img: "../../assets/list1.jpg"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.phone_second {
  width: 100%;
  background-color: #d3d1dc;
  display: flex;
  flex-wrap: wrap;
  
  .data_log {
    width: 47%;
    margin: 0.5rem 0.35rem; 
    .img1 {
        img{
            width: 100%;
            height: 100%;
        }
    }
    .content {
        width: 100%;
        background:white;
        text-align: center;
        height: 8rem;
        padding-top: 0.5rem;
        button{
            margin-top: 0.5rem;
            width: 8rem;
            height: 2rem;
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
      }
      .phone_price {
        width: 100%;
        text-align: center;
      }
    }
  }
}
</style>