<template>
    <div class="main">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item, index) in swiper" :key="index">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    data () {
        return {
            swiper: [
                { img: require('../assets/tel.jpg') },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .main{
        width: 100%;
        height: 3.5rem;
        overflow: hidden;
        img{
            // height: 12rem;
            width: 100%;
            // height: 100%;
        }
    }
</style>