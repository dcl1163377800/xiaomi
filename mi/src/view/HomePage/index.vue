<template>
    <div id="app">
        <header>宇宙第一帅</header>
        <main>
            ------
            <router-view></router-view>
            ========
        </main>
        <footer>
            <div>
                <router-link to="/HomePage/firstPage" activeClass="active" tag="p">
                    <span class="iconfont icon-shouyeweixuanzhong"></span>首页
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
    li {
    list-style: none;
    }
    img {
    vertical-align: top;
    }
    a {
    text-decoration: none;
    }
    #app {
    width: 100vw;
    height: 100vh;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
         header{
            width: 100%;
            height: 3rem;
            background: red;
            text-align: center;
        }
         main{
            flex: 1;
            overflow-y: scroll;
        }
        footer{
            width: 100%;
            height: 3rem;
            background: pink;
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


