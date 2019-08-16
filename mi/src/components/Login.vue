<template>
  <div id="login">
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
            <input type="text" ref="user_input" id="user" placeholder="手机号码" />
          </p>
          <p class="code">
            <input type="text" ref="pwd_input" id="pwd" placeholder="输入密码" />
          </p>
          <p class="code">
            <input type="text" id="pwd" placeholder="短信验证码" />
            <span>获取验证码</span>
          </p>
          <p class="login_btn">
            <input type="submit" value="用户名密码登录" id="loginBtn" @click="login" />
          </p>
        </form>
        <div class="reg">
          <span>还没有账号,立即</span>
          <router-link to="/register">注册</router-link>/
          <router-link to="/resetkey">修改密码</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
    login() {
      //18815682165
      console.log(111);
      let user_phone = this.$refs.user_input.value;
      let user_pwd=this.$refs.pwd_input.value;
      console.log(user_phone,user_pwd);
      var phone = /^1[3456789]\d{9}$/;
     var pwd = /[\w\d]{6,12}$/;
      if(phone.test(user_phone)){
        if(pwd.test(user_pwd)){
             console.log(11119)
            axios.get(`http://106.53.65.198:8080/XiaoMi/login?tel=${user_phone}&password=${user_pwd}`).then((res)=>{
                console.log(res.data)
                if(res.data.code==1){
                    let token=res.data.token;
                    window.sessionStorage.setItem('token',token);
                    console.log(token);
                    this.$toast({
                        message: '登录成功',
                        iconClass: 'icon icon-success'
                    });
                     this.$router.push('/');
                    

                }else{
                    alert('用户名或密码不正确');
                }
            })
        }else{
          alert('密码格式不正确或者密码不能为空')
        }
       

         }else{
           alert('手机号码不能为空，或者格式不正确')
         }
    }
  }
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #2ea5e5;
}
.login {
  margin: 8% 0;
  text-align: center;
  .mi_logo {
    span {
      font-size: 1rem;
      color: #ff6700;
    }
  }
  p {
    margin: 0.3rem 0;
    font-size: 18px;
  }
  .login_inp {
    form {
      padding: 0 4%;
      p {
        border-bottom: 1px solid #d3d3d3;
        color: #4a4a4a;
        font-size: 18px;
        text-align: left;
        margin: 0.1rem 0;
        input {
          border: none;
          color: #4a4a4a;
          font-size: 18px;
          outline: none;
          height:1rem;
          line-height: 1rem;
        }
      }
      .phone {
        span:nth-child(even) {
          display: inline-block;
          margin: 0 0.5rem;
        }
      }
      .code {
        span {
          float: right;
          padding-right: 1rem;
          font-size: 14px;
          color: #2ea5e5;
          height:1rem;
          line-height:1rem;
          margin-bottom:0.4rem;
        }
      }
      .login_btn {
        border: 0;
        margin-bottom: 0.3rem;
        input {
          background: #ff6700;
          color: #fff;
          width: 100%;
          border-radius: 8px;
          height: 1rem;
          line-height: 1rem;
        }
      }
    }
    .reg {
      text-align: right;
      margin-right: 1rem;
      font-size: 14px;
      span {
        display: inline-block;
        margin-right: 0.3rem;
      }
    }
  }
}
</style>