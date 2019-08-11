<template>
    <div class="wrap">
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

<style lang="scss">
.wrap  {
     width: 100vw;
    height: 100vh;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
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