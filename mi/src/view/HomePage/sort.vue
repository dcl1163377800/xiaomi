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
                    <li class="active">新品</li>
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
    data(){
        return{

        }
    },
    mothods:{
        changeColor(){
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .menu{
        position: fixed;
        width: 100%;
        // height: 3rem;
        top: 0;
        background: #f2f2f2;
        line-height: 1rem;
        display: flex;
        justify-content: space-between;
        padding: 0 0.5rem;
        .icon-right{
           font-size: 0.5rem;
        }
        .icon-suosou{
            font-size: 0.5rem;
        }
    }

        .nav{
            background: #fefefe;
            .left_menu{
                position:fixed;
                top:1rem;
                bottom:3rem;
                left:0;
                width:2rem;
                border-right: 1px solid #efefef;
                // overflow: hidden;
                overflow-y: scroll; 
                overflow-x: hidden;
                ul{
                    padding:0.2rem 0.4rem 0.3rem 0;
                    overflow-y: scroll;             
                    li{
                        height:1rem;
                        line-height: 1rem;
                        text-align: center;
                        font-size:12px;
                    }
                    .active{
                        color:#fb7d34;
                        font-size:18px;
                    }
                }
            }
            // .right_content{
            //     background-color: #000;
            //     float: right;
            // }

        }
</style>