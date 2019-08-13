<template>
    <div id="app">
        <header>
             <div class="logo_header">
                <span class="iconfont icon-mi"></span>
                <div class="search">
                    <span class="iconfont icon-suosou"></span>
                    <input type="text" placeholder="请搜索商品名称"/>
                </div>
                <span class="iconfont icon-wode4"></span>
                <router-link to="/login">登录</router-link>
            </div>
        </header>
        <main>
            <router-view></router-view>
           
        </main>
        
          <footer>
            <div>
                <router-link to="/HomePage/firstPage" activeClass="active" tag="p">
                    <span class="iconfont icon-shouyefanhuishouye"></span>首页
                </router-link>
            </div>
            <div>
                
                <router-link to="/HomePage/sort" activeClass="active" tag="p">
                     <span class="iconfont icon-wsdzb_zbgzt_xxzx_newpxb_type"></span> 分类
                </router-link>
               
            </div>
            <div>
                
                <router-link to="/HomePage/shoppingcar" activeClass="active" tag="p">
                    <span class="iconfont icon-icon4"></span>购物车
                </router-link>
            </div>
            <div>
                
                <router-link to="/HomePage/myshoppingcar" activeClass="active" tag="p">
                     <span class="iconfont icon-wode4"></span>我的
                </router-link>
            </div>
        </footer>
    </div>
</template>

<script>


export default {
    data(){
        return{
            mothods:{
                // login(){

                // }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    html {
    font-size: -webkit-calc(100vw/7.5);
    font-size: calc(100vw / 7.5);

    }
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    a{
        text-decoration: none;
        color:grey;
    }
   
    #app {
    width: 100vw;
    height: 100vh;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
        header{
            width: 100%;
            height: 2.5rem;
            background: #f2f2f2;
              .logo_header{
                width: 100%;
                height: 3rem;
                text-align: center;
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
                            width: 13rem;
                            height: 1.5rem;
                            padding:0.2rem;
                            outline:none;
                        }
                    }
                }
        }
         main{
            flex: 1;
            overflow-y: scroll;
        }
         footer{
            width: 100%;
            height: 3rem;
            display: flex;
            justify-content: space-around;
            div{
                text-align: center;
                display: block;
                width: 25%;
                height: 3rem;
                font-size: 15px;
                color: #999;
                span{
                    display: block;
                    margin: 6px 0;
                    font-size: 1rem;
                }
                .active{
                    color: orange;
                }
            }
        }
     
    }
   
   
  
</style>


