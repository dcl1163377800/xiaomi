import Vue from "vue";
import Router from "vue-router";
import FirstPage from "./view/HomePage/firstPage.vue"
import Myshoppingcar from "./view/HomePage/myshoppingcar.vue";
import Shoppingcar from "./view/HomePage/shoppingcar.vue";
import Sort from "./view/HomePage/sort.vue";
import HomePage from "./view/HomePage/index.vue";
import Goodsdetail from './components/Goodsdetail.vue'
import Login from './components/Login.vue';
import Register from './components/Register';
import GoodsComputer from "./components/GoodsComputer.vue";
import Account from './components/Account.vue';
import PhoneDetail from './components/phone/PhoneDetail.vue'
import DetailFooter from './components/DetailFooter';
import Resetkey from "./components/Resetkey";
import Address from './components/Address';


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
                    component:Shoppingcar,
                    
                },
                {
                    path:"myshoppingcar",
                    component:Myshoppingcar
                },
                {
                    path:"sort",
                    component:Sort
                },
               
            ]
        },
        {
            path: "/",
            redirect: '/HomePage/firstPage' //当路径为空时 /film/sort为默认页面
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/register',
            component:Register
        },
        {
            path:'/goodsdetail',
            component:Goodsdetail
        },
        {
            path:'/goodsComputer',
            component:GoodsComputer
        },
        {
            path:'/account',
            component:Account
        },
        {
            path:'/phonedetail',
            component:PhoneDetail
        },
        {
            path:'/detailfooter',
            component:DetailFooter
        },
        {
            path:"/resetkey",
            component:Resetkey

        },{
            path:'/address',
            component:Address
        }
    ]
})
export default router;