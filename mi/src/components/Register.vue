<template>
  <div id="login">
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
            <input type="text" ref="reg_phone" placeholder="手机号码" />
          </p>
          <p class="name">
            <input type="text" ref="reg_name" placeholder="用户名" />
          </p>
          <p class="pwd">
            <input type="text" ref="reg_pwd" placeholder="输入密码" />
          </p>
          <p class="confirm">
            <input type="text" ref="reg_confirm" placeholder="确认密码" />
          </p>
          <p class="code">
            <input type="text" ref="reg_code" placeholder="短信验证码" />
            <span>获取验证码</span>
          </p>
          <p class="reg_btn">
            <input type="submit" value="立即注册" id="regBtn" @click="register" />
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "register",
  methods: {
    register() {
      let tel = this.$refs.reg_phone.value;
      let password = this.$refs.reg_pwd.value;
      let reg_confirm = this.$refs.reg_confirm.value;
      let username = this.$refs.reg_name.value;

      var name = /^[a-zA-Z\u4e00-\u9fa5]\w{5,11}$/gi;
      var pwd = /[\w\d]{6,12}$/;
      var phone = /^1[3456789]\d{9}$/;

      if (phone.test(tel)) {
        // '18571772895'
        console.log("wy");
        if (name.test(username)) {
          console.log("wy1");
          if (pwd.test(password)) {
            console.log("wy2");
            if (password == reg_confirm) {
                console.log(username,password,tel)
              // console.log('wy3')
              axios
                .get(
                  `http://192.168.61.244:8080/XiaoMi/regist?username=${username}&password=${password}&tel=${tel}`
                )
                .then(result => {
                  console.log(result.data);
                  if(result.data.code==1){
                      if(confirm('注册成功,去登陆?')){
                          this.$router.push('/login')
                      }

                  }
                });
            } else {
              alert("确认密码与新密码不相同");
            }
          } else {
            alert("密码格式不正确或者密码不能为空");
          }
        } else {
          alert("用户名格式不正确或用户名不能为空,请重新输入");
        }
      } else {
        alert("电话号码格式不正确或不能为空");
      }

      // let params = 'username=' + username + "&password=" + password + '&tel=' + tel;
    }
  }
};
</script>
<style lang="scss" scoped>
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
    margin: 3% 0;
    font-size: 18px;
  }
  .login_inp {
    form {
      padding: 0 5%;
      p {
        border-bottom: 1px solid #d3d3d3;
        color: #9b9b9b;
        font-size: 18px;
        text-align: left;
        margin: 1% 0;
        height:1rem;
        line-height:1rem;
        input {
          border: none;
          color: #9b9b9b;
          font-size: 18px;
          outline: none;
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
          font-size: 14px;
          color: #2ea5e5;
        }
      }
      .reg_btn {
        border: 0;
        margin-top:0.4rem;
        input {
          background: #ff6700;
          color: #fff;
          width: 100%;
          border-radius: 8px;
          height: 1rem;
        }
      }
    }
  }
}
</style>