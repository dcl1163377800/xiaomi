<template>
    <div class="sort">
        <div class="menu">
            <span>《</span>
            <span>分类</span>
            <span class="iconfont icon-suosou"></span>
        </div>
        <div class="nav">
            <div class="left_menu">
                <ul>
                    <li>新品</li>
                    <li>新品</li>
                    <li>新品</li>
                    <li>新品</li>
                    <li>新品</li>
                    <li>新品</li>
                    <li>新品</li>
                    <li>新品</li>
                    <li>新品</li>
                    <li>新品</li>
                    <li>新品</li>
                    <li>新品</li>
                    <li>新品</li>
                </ul>
            </div>
            <div class="right_content"></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .menu{
        position: fixed;
        width: 100%;
        height: 3rem;
        top: 0;
        background: #f2f2f2;
        line-height: 3rem;
        display: flex;
        justify-content: space-around;   
    }
        .nav{
            height: 50rem;
            background: #fefefe;
            .left_menu{
                position:fixed;
                top:3rem;
                bottom:3rem;
                left:0;
                width:5rem;
                border-right: 1px solid #efefef;
                overflow: hidden;
                z-index: 1;
                ul{
                    padding:0.2rem 0.4rem 0.3rem 0;
                    overflow-y: scroll;              
                    li{
                        height:3rem;
                        line-height: 3rem;
                        text-align: center;
                        font-size:12px;
                    }
                }
            }
             
        }
</style>
