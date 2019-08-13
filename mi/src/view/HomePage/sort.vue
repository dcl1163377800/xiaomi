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
                    <li class="active" ref="lis">新品</li>
                    <li ref="lis">新品</li>
                    <li ref="lis">新品</li>
                    <li ref="lis">新品</li>
                    <li ref="lis">新品</li>
                    <li ref="lis">新品</li>
                    <li ref="lis">新品</li>
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
            <div class="right_content">
                <div class="sub">sub1</div>
                <div class="sub">sub2</div>
                <div class="sub">sub3</div>
                <div class="sub">sub4</div>
                <div class="sub">sub5</div>
                <div class="sub">sub6</div>
                <div class="sub">sub7</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
        //    phones:[
        //        {phone_id:'01',phone_name:'小米cc9',phone_img:require('../assets/p2.png')},
        //        {phone_id:'02',phone_name:'小米cc9e',phone_img:require('../assets/p2.png')},
        //        {phone_id:'03',phone_name:'小米cc9e 美图版',phone_img:require('../assets/p2.png')},
        //        {phone_id:'04',phone_name:'小米9',phone_img:require('../assets/p2.png')},
        //        {phone_id:'05',phone_name:'小米9 SE',phone_img:require('../assets/p2.png')},
        //        {phone_id:'06',phone_name:'小米Redmi 7',phone_img:require('../assets/p2.png')},
        //        {phone_id:'07',phone_name:'小米Redmi 7A',phone_img:require('../assets/p2.png')},
        //    ]
        }
    },
    mothods:{
        
    }
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
        justify-content: space-between;
        .icon-right{
            margin-left: 1rem;
        }
        .icon-suosou{
            margin-right:0.6rem;
        }
    }

        .nav{
            background: #fefefe;
            .left_menu{
                position:fixed;
                top:3rem;
                bottom:3rem;
                left:0;
                width:5rem;
                border-right: 1px solid #efefef;
                overflow-y: scroll; 
                overflow-x: hidden;
                ul{
                    padding:0.2rem 0.4rem 0.3rem 0;
                    overflow-y: scroll;           
                    li{
                        height:3rem;
                        line-height: 3rem;
                        text-align: center;
                        font-size:12px;
                    }
                    .active{
                        color:#fb7d34;
                        font-size:18px;
                    }
                }
            }
            .right_content{
                background-color: #000;
                float: right;
            }
        }
</style>
