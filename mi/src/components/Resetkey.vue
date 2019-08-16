<template>
  <div class="resetkey">
    <div class="mi_logo">
      <span class="iconfont icon-milogo"></span>
    </div>
    <form action onsubmit="return false" class="from_input">
      <input ref="reset_phone" type="text" placeholder="手机号码/小米账号" />
      <br />
      <input ref="reset_oldpwd" type="password" placeholder="旧密码" />
      <br />
      <input ref="reset_newpwd" type="password" placeholder="新密码" />
      <br />
      <input ref="reset_newpwd1" type="password" placeholder="确认新密码" />
      <br />
      <input type="button" @click="resetSubmit" value="提交" class="btn" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  mounted() {
    // axios.get('http://192.168.61.244:8080/XiaoMi/update?')
  },
  methods: {
    resetSubmit() {
      let reset_phone = this.$refs.reset_phone.value;
      let reset_oldpwd = this.$refs.reset_oldpwd.value;
      let reset_newpwd = this.$refs.reset_newpwd.value;
      let reset_newpwd1 = this.$refs.reset_newpwd1.value;
      var pwd = /[\w\d]{6,12}$/;
      var phone = /^1[3456789]\d{9}$/;

      console.log(reset_phone, reset_oldpwd, reset_newpwd, reset_newpwd1);
      // http://192.168.61.244:8080/XiaoMi/update?minum=1111&tel=1&pwd=8888888&newPwd=111
      if (phone.test(reset_phone)) {
        if (pwd.test(reset_oldpwd)) {
          if (reset_oldpwd != reset_newpwd) {
            if (reset_newpwd == reset_newpwd1) {
              axios
                .get(
                  `http://106.53.65.198:8080/XiaoMi/update?tel=${reset_phone}&pwd=${reset_oldpwd}&newPwd=${reset_newpwd}`
                )
                .then(res => {
                  console.log(res.data);
                  if (res.data.code == 1) {
                    alert("密码修改成功,请重新登陆");
                    this.$router.push("/login");
                  } else {
                    alert("新密码与旧密码相同或密码输入不正确或用户名不存在");
                  }
                });
            } else {
              alert("新密码与确认密码不匹配");
            }
          }else{
            alert("新密码与旧密码相同")
          }
        } else {
          alert("密码不存在或者密码格式不正确");
        }
      } else {
        alert("用户名不存在或用户名格式不正确");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.resetkey {
  width: 100%;
  // background:burlywood;
  .mi_logo {
    line-height: 2rem;
    width: 100%;
    // margin: 0 auto 15px;
    text-align: center;
    .iconfont {
      display: inline-block;
      color: #ff6700;
      width: 20%;
      height: 20%;
      font-size: 1.5rem;
      margin-top: 2%;
    }
  }
  .from_input {
    width: 100%;
    padding: 0 4%;
    input {
      width: 100%;
      margin-bottom: 1rem;
      border: none;
      border-bottom: 1px solid gray;
      outline: none;
    }
    .btn {
      border: none;
      background: #ff6700;
      line-height: 1rem;
      font-size: 18px;
      border-radius: 0.2rem;
      color: white;
    }
  }
}
</style>