<template>
    <div id="app1">
        <header>
        <div class="logo_header">
            <span class="iconfont icon-mi"></span>
            <div class="search">
                <span class="iconfont icon-suosou"></span>
                <input type="text" placeholder="请搜索商品名称"/>
            </div>
            <span class="iconfont icon-wode4">登录</span>
        </div>
    </header>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
        .logo_header{
            width: 100%;
            height: 3rem;
            text-align: center;
            background: #f2f2f2;
            color: gray;
            display: flex;
            justify-content: space-around;
            align-items: center;

                 .icon-mi{
                     color: rgb(237, 91, 0);
                     font-size: 1.5rem;
                 }
                 .search{
                     background:#fff;
                     padding-left:10px;
                     height: 2rem;
                     display:flex;
                     align-items: center;
                    input{
                        color:rgba(0,0,0,.3);
                        border: 0;
                        width: 15rem;
                        height: 1.5rem;
                        padding:0.2rem
                    }
                 }


}
    // }


    // #app1 {
    // width: 100vw;
    // height: 100vh;
    // display: -webkit-flex;
    // display: flex;
    // flex-direction: column;
    
    //     header{
    //         width: 100%;
    //         height: 2rem;
    //         background: red;
    //         text-align: center;
    //         background: #f2f2f2;
    //         color: gray;
    //          .logo{
    //              display: flex;
    //              justify-content: space-around;
    //              align-items: center;
    //              height: 2.5rem;
    //              line-height: 2rem;
    //              .icon-mi{
    //                  color: rgb(237, 91, 0);
    //                  font-size: 1.5rem;
    //              }
    //              .search{
    //                  background:#fff;
    //                  padding-left:10px;
    //                  display:flex;
    //                  align-items: center;
    //                 input{
    //                     color:rgba(0,0,0,.3);
    //                     border: 0;
    //                     width: 15rem;
    //                     height: 1.5rem;
    //                     padding:0.2rem
    //                 }
    //              }
    //         }
    //     }
    // }
</style>