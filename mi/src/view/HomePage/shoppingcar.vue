<template>
    <div>
        <div class="menu">
            <span class="iconfont icon-right"></span>
            <span>购物车</span>
            <span class="iconfont icon-suosou"></span>
        </div>
        <div class="nav">
            <div class="checkList">
                <input type="checkbox">
            </div>
            <div class="imgList">
                <img src="../../assets/11.jpg" alt="">
            </div>
            <div class="goodsTitle">
                <p>Redmi K20 Pro 全网通版8GB+256GB 冰川蓝 256GB</p>
                <span>售价:2999元</span>
                <div class="content">
                    <span>-</span>
                    <input type="text" value="1">
                    <span>+</span>
                </div>
            </div>
            <div class="deleteList">
                <span class="iconfont icon-shanchu"></span>
            </div>
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
        height: 1rem;
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
        margin-top: 0.5rem;
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 15px;
        .checkList{
            width: 10%;
            text-align: center;
            input{
                border: 0;
                border-radius: 50%;
                width: 0.4rem;
                height: 0.4rem;
            }
        }
        .imgList{
            width: 20%;
            border: 1px solid #eee;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .goodsTitle{
            width: 60%;
            margin-left: 0.2rem;
            span{
                color: #999;
            }
            .content{
                span{
                    display:inline-block;
                    width: 0.5rem;
                    height: 0.5rem;
                    border:1px solid #eee;
                }
                input{
                    border: 0;
                    width: 0.5rem;
                    height: 0.5rem;
                    border: 1px solid #eee;
                    text-align: center;
                }
            }
            p{
                margin-top:0.1rem;
            }
        }
        .deleteList{
            width: 10%;
            margin-top: 1rem;
            span{
              font-size: 0.4rem;
              color: #999;
            }
        }
    }

</style>
