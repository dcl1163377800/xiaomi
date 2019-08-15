<<<<<<< HEAD

<template>
  <div class="address">
      <header>
          请选择地址
      </header>
    <ul>
      <li>
        <div class="left">
          <span>所在地区</span>
        </div>
        <div class="right r">
          <div class="city" @click="toAddress">{{city}}</div>
          <i class="arrow-r"></i>
        </div>
      </li>
    </ul>

    <v-distpicker type="mobile" @selected="selected" v-show="addInp"></v-distpicker>
    <div class="mask" v-show="mask"></div>
  </div>
</template>

<script>
import VDistpicker from "v-distpicker";
export default {
  components: {
    VDistpicker
  },
  data() {
    return {
      city: "请选择",
      addInp: false,
      mask: false
    };
  },
  methods: {
    toAddress() {
      this.mask = true;
      this.addInp = true;
    },
    selected(data) {
      this.mask = false;
      this.addInp = false;
      this.city =
        data.province.value + "" + data.city.value + "" + data.area.value;
    }
  }
};
</script>

<style lang="scss" scoped>
.address{
    header{
        background:chocolate;
        width: 100%;
        line-height: 1rem;
        text-align: center;
        color: white;
        font-size:0.4rem;
        margin-bottom: 0.5rem;
    }
    ul{
        // float: left;
        width: 100%;
        border-bottom: gray solid 1px;
        
        li{
            display: flex;
            align-items: left;
            .left{
                
                span{

                    width: 30%;
                    display: inline-block;
                    border:chocolate solid 1px;
                }
            }
            // .right{
                
            //     // .city{

            //     // }
            // }
        }
    }
}
</style>
=======
<template>
    <div>
        
       湖北武汉rrrrrrr
             <ul>
            <li>
            <div class="left"> <span>所在地区</span> 
            </div> 
            <div class="right r"> 
           <div class="city" @click="toAddress">{{city}}</div> 
           <i class="arrow-r"> </i> 
           </div>
            </li>
           </ul>

            <v-distpicker type="mobile" @selected='selected' v-show="addInp"> </v-distpicker>
             <div class="mask" v-show="mask"></div>

    </div>
</template>

<script>
import VDistpicker from 'v-distpicker'
export default {
    components:{
        VDistpicker
    },
    data(){
        return {
            city:'请选择',
            addInp:false,
            mask:false

        }
    },
    methods:{
        toAddress(){
            this.mask=true;
            this.addInp=true;
        },
        selected(data){
            this.mask=false;
            this.addInp=false;
            this.city=data.province.value+''+data.city.value+''+data.area.value
        }

    }
    
}
</script>

<style lang="scss" scoped>

</style>
>>>>>>> 8115b87dad8fd4c148f0096ec704170b6ce3f3e6
