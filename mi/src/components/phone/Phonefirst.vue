<template>
  <div class="list_one">
    <a href class="phone_a">
      <div class="phone_img">
        <img src="../../assets/big1.webp" alt />
      </div>
      <div class="info_bwf">
        <div class="bwf1">
          <div class="bwf1_name">小米MIX3</div>
          <div class="bwf1_price">$2999</div>
        </div>
        <div class="bwf2">
          <div class="bwf2_brief">Dx0百分相机,四曲面陶瓷机身</div>
          <div class="bwf2_buyButton">立即购买</div>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.list_one {
  width: 100%;
  background-color: #ccc;
  // opacity: 0.5;
  overflow: hidden;
  .phone_a {
    width: 100%;
    overflow: hidden;
    .phone_img {
      margin-top: 5px;
      width: 100%;
      text-align: center;
      // margin-bottom: 1rem;
      img {
        width: 96%;
      }
    }
    .info_bwf {
      padding-top: 0.1rem;
      background: #fff;
      width: 96%;
      margin: 0 2%;

      .bwf1 {
        display: flex;
        align-items: center;
        .bwf1_name {
          width: 50%;
          color:black;
          font-size:18px;
        }
        .bwf1_price {
          font-size:20px;
          color: #ea625b;
          width: 50%;
          // float:right;
          text-align: right;
          margin-right: .2rem;
          // padding-left: 47%;
          // margin-left: %;
        }
      }
      .bwf2 {
        display: flex;
        align-items: center;
        .bwf2_brief {
          width: 70%;
          color: rgba(0,0,0,.54);
          font-size:8px;
        }
        .bwf2_buyButton {
          width: 25%;
          text-align: center;
           background: #ea625b;
           color:white;
           height: 0.6rem;
           line-height: 0.6rem;
        }
      }
    }
  }
}
</style>