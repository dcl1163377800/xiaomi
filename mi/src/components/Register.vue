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
            <input type="text" ref="reg_phone" placeholder="手机号码" @blur="reg_test" />
            <i ref="phone_test"></i>
          </p>
          <p class="name">
            <input type="text" ref="reg_name" placeholder="用户名" />
            <i ref="name_test"></i>
          </p>
          <p class="pwd">
            <input type="text" ref="reg_pwd" placeholder="输入密码" />
            <i ref="pwd_test"></i>
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
    reg_test() {
      // let tel = this.$refs.reg_phone.value;
      // let username = this.$refs.reg_name.value;
      // let password = this.$refs.reg_pwd.value;
      // let reg_confirm = this.$refs.reg_confirm.value;
      // this.$refs.test.innerHTML = null;
    },
    register() {
      let tel = this.$refs.reg_phone.value;
      let username = this.$refs.reg_name.value;
      let password = this.$refs.reg_pwd.value;
      let reg_confirm = this.$refs.reg_confirm.value;
      this.$refs.phone_test.innerHTML = null;
      this.$refs.name_test.innerHTML = null;
      this.$refs.pwd_test.innerHTML = null;
      // if(password !== reg_confirm){
      //     alert("密码不一致");
      //     return;
      // }
      var phone = /^1[3456789]\d{9}$/;
      var user_name = /^[a-zA-Z\u4e00-\u9fa5]\w{5,11}$/gi;
      var pwd = /[\w\d]{6,12}$/;
      var flag = false;
      if (phone.test(tel)) {
        console.log(1);
        // console.log(this.$refs.phone_test.innerHTML)
        this.$refs.phone_test.innerHTML = "ok";
        if (user_name.test(username)) {
          console.log(3);
          this.$refs.name_test.innerHTML = "ok";
          if (pwd.test(password)) {
            console.log(4);
            this.$refs.pwd_test.innerHTML = "ok";
            flag = true;
            if (flag) {
                // let user = {
                //     tel,
                //     password,
                //     username
                // };
                console.log(username)
                axios.get(`http://192.168.61.244:8080/XiaoMi/regist?username=${username}&password=${password}&tel=${tel}`)
                .then(res => {
                  console.log(res);
                  if (res.data.code === 1) {
                    this.$router.push('/login');
                    //  alert("注册成功");
                  } else {
                    // alert("用户名不存在");
                  }
                });
             
            }
          } else {
            alert("密码不正确或格式不正确");
          }
        } else {
          alert("用户名不存在或格式不正确");
        }

        // userList.isPhone(phone).then(data => {
        //     console.log(data);
        //     if (data.status) {
        //         $('#phone').nextAll().remove("img");
        //         $("#phone").after("<span id='phone1'>手机号已存在</span>")
        //     } else {
        //         // $('#phone').nextAll().remove("img");
        //         // $("#phone").after("<img src='../images/62.png'>");
        //         $(this).data("flag", true);
        //         $("#phone").after("<span id='phone1'>√</span>")
        //     }
        // })
      } else {
        console.log(2);
        alert("电话号码格式不正确或者不能为空或已存在");
        // $("#phone").after("<span id='phone1'>手机号格式有误</span>")
      }
    //   let user = {
    //     tel,
    //     password,
    //     username
    //   };
    //   axios.post("http://192.168.61.244:8080/XiaoMi/regist", user).then(res => {
    //     // console.log(res);
    //     if (res.data.code === 1) {
    //       // this.$router.push('/login');
    //     } else {
    //       alert("用户名不存在");
    //     }
    //   });
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  margin: 1.7rem 1.2rem 0 1.2rem;
  text-align: center;
  .mi_logo {
    span {
      font-size: 3rem;
      color: #ff6700;
    }
  }
  p {
    height: 2.7rem;
    line-height: 2.7rem;
    font-size: 18px;
  }
  .login_inp {
    form {
      p {
        border-bottom: 1px solid #d3d3d3;
        color: #9b9b9b;
        font-size: 18px;
        text-align: left;
        height: 3rem;
        line-height: 3rem;
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
          // text-align: right;
          float: right;
          padding-right: 1rem;
          font-size: 14px;
          color: #2ea5e5;
        }
      }
      .reg_btn {
        border: 0;
        margin-top: 1.2rem;
        input {
          background: #ff6700;
          color: #fff;
          width: 100%;
          border-radius: 8px;
          height: 3rem;
          line-height: 3rem;
        }
      }
      .login_btn {
        border: 0;
        margin-top: 1.2rem;
        input {
          background: #fff;
          color: #000;
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 8px;
          height: 3rem;
          line-height: 3rem;
        }
      }
    }
  }
}
</style>