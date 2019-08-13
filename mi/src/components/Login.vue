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
                        <input type="text" id="user" placeholder="手机号码">
                    </p>
                    <p class="code">
                        <input type="text" id="pwd" placeholder="输入密码">
                    </p>
                    <p class="code">
                        <input type="text" id="pwd" placeholder="短信验证码">
                        <span>获取验证码</span>
                    </p>
                    <p class="login_btn">
                        <input type="submit" value="用户名密码登录" id="loginBtn">
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
export default {
    name:'login',
    data(){
        return{
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
        margin: 8% 0;
        text-align: center;
        .mi_logo{
            span{
                font-size:1rem;
                color:#ff6700;
            }
        }
        p{
            margin: 0.3rem 0;
            font-size:18px;
        }
        .login_inp{
            form{
                padding: 0 4%;
                p{
                    border-bottom:1px solid #d3d3d3;
                    color:#9b9b9b;
                    font-size:18px;
                    text-align: left;
                    margin: 0.5rem 0;
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
                    input{
                        background:#ff6700;
                        color:#fff;
                        width:100%;
                        border-radius:8px;
                        height:1rem;
                    }
                }
            }
            .reg{
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