<template>
    <div id='"login"'>
        <div class="login">
            <div class="mi_logo">
               <span class="iconfont icon-milogo"></span> 
            </div>
            <p>小米账号注册</p>
            <div class="login_inp">
                 <form onsubmit="return false">
                    <p class="phone">
                        <span>+86</span>
                        <span class="iconfont icon-icon1"></span>
                        <input type="text" ref="reg_phone" placeholder="手机号码">
                    </p>
                    <p class="name">
                        <input type="text" ref="reg_name" placeholder="用户名">
                    </p>
                    <p class="pwd">
                        <input type="text" ref="reg_pwd" placeholder="输入密码">
                    </p>
                    <p class="confirm">
                        <input type="text" ref="reg_confirm" placeholder="确认密码">
                    </p>
                    <p class="code">
                        <input type="text" ref="reg_code" placeholder="短信验证码">
                        <span>获取验证码</span>
                    </p>
                    <p class="reg_btn">
                        <input type="submit" value="立即注册" id="regBtn" @click="register">
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'register',
    methods:{
        register(){
            let tel = this.$refs.reg_phone.value;
            let password = this.$refs.reg_pwd.value;
            let reg_confirm = this.$refs.reg_confirm.value;
            let username = this.$refs.reg_name.value;
            if(password !== reg_confirm){
                alert("密码不一致");
                return;
            }
            let user = {
                tel,
                password,
                username
            };
            // let params = 'username=' + username + "&password=" + password + '&tel=' + tel;
            axios.get(`http://192.168.61.244:8080/XiaoMi/regist?username=${username}&password=${password}&tel=${tel}`).then( result =>{
                console.log(result.data);
            })
        }
    }
}
</script>
<style lang="scss" scoped>
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
            margin: 3% 0;
            font-size:18px;
        }
        .login_inp{
            form{
                padding: 0 5%;
                p{
                    border-bottom:1px solid #d3d3d3;
                    color:#9b9b9b;
                    font-size:18px;
                    text-align: left;
                    margin: 5% 0;
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
                        font-size:14px;
                        color:#2ea5e5;
                    }
                }
                .reg_btn{
                    border: 0; 
                    input{
                        background:#ff6700;
                        color:#fff;
                        width:100%;
                        border-radius:8px;
                        height:1rem;
                    }
                }
                .login_btn{
                    border: 0;
                    margin-top:1.2rem;
                    input{
                        background:#fff;
                        color:#000;
                        width:100%;
                        border:1px solid #ccc;
                        border-radius:8px;
                        height:3rem;
                        line-height: 3rem;
                    }
                }
            }
        }
    }
</style>