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
                { img: require('../assets/1.jpg') },
                { img: require('../assets/2.jpg') },
                { img: require('../assets/3.jpg') },
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
            width: 100%;
            height: 100%;
        }
    }
</style>