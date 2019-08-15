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