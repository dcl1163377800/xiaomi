<template>
    <div id='"login"'>
        <div class="login">
            <div class="mi_logo">
               <span class="iconfont icon-milogo"></span> 
            </div>
            <p>小米账号登录</p>
            <div class="login_inp">
                 <form onsubmit="return false">
                    <p class="phone">
                        <span>+86</span>
                        <span class="iconfont icon-icon1"></span>
                        <input type="text" ref="login_phone" placeholder="手机号码" >
                    </p>
                    <p class="pwd">
                        <input type="text" ref="login_pwd" placeholder="输入密码">
                    </p>
                    <p class="code">
                        <input type="text" id="login_code" placeholder="短信验证码">
                        <span>获取验证码</span>
                    </p>
                    <p class="login_btn">
                        <button type="button" id="loginBtn" @click="login">登录</button>
                    </p>
                </form>
                <div class="reg">
                    <span>还没有账号,立即</span>
                    <router-link to="/register">注册</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'login',
    data(){
        return{
            
        }
    },
    methods:{
        login(){
            

        }
    }
}
</script>
<style lang="scss" scoped>
    a{
        text-decoration: none;
        color:#2ea5e5;
    }
    .login{
        margin:1.7rem 1.2rem 0 1.2rem;
        text-align: center;
        .mi_logo{
            span{
                font-size:3rem;
                color:#ff6700;
            }
        }
        p{
            height:2.7rem;
            line-height: 2.7rem;
            font-size:18px;
        }
        .login_inp{
            form{
                p{
                    border-bottom:1px solid #d3d3d3;
                    color:#9b9b9b;
                    font-size:18px;
                    text-align: left;
                    height:3rem;
                    line-height:3rem;
                    input{
                        border:none;
                        color:#9b9b9b;
                        font-size:18px;
                        outline:none;
                    }
                }
                .phone{
                    span:nth-child(even){
                        display:inline-block;
                        margin:0 .5rem;
                    }
                }
                .code{
                    span{
                        // text-align: right;
                        float:right;
                        padding-right:1rem;
                        font-size:14px;
                        color:#2ea5e5;
                    }
                }
                .login_btn{
                    border: 0;
                    margin-top:1.2rem;
                    button{
                        background:#ff6700;
                        color:#fff;
                        width:100%;
                        border-radius:8px;
                        height:3rem;
                        line-height: 3rem;
                        border:none;
                        font-size:18px;
                    }
                }
            }
            .reg{
                margin-top: 1.2rem;
                text-align: right;
                margin-right: 1rem;
                font-size:14px;
                span{
                    display: inline-block;
                    margin-right:1rem;
                }
            }
        }
    }
</style>