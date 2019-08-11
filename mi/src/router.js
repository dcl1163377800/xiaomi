import Vue from "vue";
import Router from "vue-router";
import FirstPage from "./view/HomePage/firstPage.vue"
import Myshoppingcar from "./view/HomePage/myshoppingcar.vue";
import Shoppingcar from "./view/HomePage/shoppingcar.vue";
import Sort from "./view/HomePage/sort.vue";
import HomePage from "./view/HomePage/index.vue";

Vue.use(Router);
const router=new Router({
    mode:"hash",
    routes:[
        //一级路由
        {
            path:"/HomePage",
            component:HomePage,
            //二级嵌套路由
            children:[
                {
                    path:"firstPage",
                    component:FirstPage
                },
                {
                    path:"shoppingcar",
                    component:Shoppingcar
                },
                {
                    path:"myshoppingcar",
                    component:Myshoppingcar
                },
                {
                    path:"sort",
                    component:Sort
                }
            ]
        },
        {
            path: "/",
            redirect: '/HomePage/firstPage' //当路径为空时 /film/sort为默认页面
        },
    ]
})
export default router;