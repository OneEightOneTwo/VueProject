<template>
  <div class="login">
    <div class="verify-phone">
      <div class="form-box">
        <input
          type="tel"
          maxlength="11"
          placeholder="请输入手机号"
          autofocus="autofocus"
          class="form-input"
          v-model="num"
        />
        <div class="form-btn-code">
          <button class="form-btn">获取验证码</button>
        </div>
      </div>
      <div class="form-box">
        <input
          v-model="code"
          type="tel"
          maxlength="4"
          placeholder="输入验证码"
          class="form-input"
        />
        <!---->
      </div>
      <div class="form-protocol">
        <span
          @click="toggle"
          class="form-protocol-checkbox"
          :class="{ checkbox: bool }"
          >√</span
        >
        <div class="form-protocol-label">
          <i>我已认真阅读、理解并同意</i>
          <i class="form-protocol-link">《每日优鲜用户协议》</i> <i>及</i>
          <i class="form-protocol-link">《每日优鲜隐私策略》</i>
        </div>
      </div>
      <div class="form-submit">
        <button
        @click="jump"
          :disabled="dis"
          :class="{ 'form-submit-btn': buttonIsActive }"
          class="form-submit-btn-disabled"
        >
          登录
        </button>
      </div>
      <div>
        <div
          class="vux-popup-dialog vux-popup-bottom vux-popup-dialog vux-popup-dialog-7e0ph"
          style="height: 100%; display: none;"
        >
          <div class="header-bar-wrapper">
            <div class="bar bar-header fixed">
              <div class="buttons buttons-left">
                <button class="button back"></button>
              </div>
              <h1 class="title">每日优鲜用户协议</h1>
            </div>
          </div>
          <div class="protocol-content-wrap">
            <iframe
              width="100%"
              src="https://as-vip.missfresh.cn/frontend/active/publish/9832bc34-fefc-428f-861d-eac304bfe6e6/index.html?promotionId=0"
              class="protocol-content"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <h2 class="login-tip">
      为方便您及时查询订单信息，需要验证您的手机号来登录
    </h2>
  </div>
</template>
<script src="../router.js"></script>
<script>
export default {
  data() {
    return {
      bool: false,
      num: "",
      code: "",
      phonestatus: false,
      codestatus: false,
      dis: true
    };
  },
  methods: {
    toggle() {
      this.bool = !this.bool;
      this.dis = false;
    },
    jump() {
      this.$router.push({
        path:"/home"
      })
    }
  },
  computed: {
    buttonIsActive() {
      return this.phonestatus && this.codestatus && this.bool;
    }
  }, //监听手机号和验证码的格式
  watch: {
    num(newv, old) {
      this.phonestatus = /^1[34578]\d{9}$/.test(newv);
    },
    code(newv, old) {
      this.codestatus = /^\d{4}$/.test(newv);
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  padding-top: 130px;
  padding-right: 20px;
  padding-left: 20px;
  .verify-phone .form-box {
    width: 100%;
    border: none;
    border-bottom: 0.5px solid #e6e6e6;
    padding: 5px 0;
    .form-input {
      font-size: 16px;
      color: #262626;
      height: 34px;
      width: 48%;
      border: none;
      outline: none;
    }
    .form-btn-code {
      float: right;
      margin-top: 5px;
      .form-btn {
        font-size: 14px;
        width: 88px;
        height: 30px;
        color: #ff4891;
        padding: 5px 5px 5px;
        border: 1px solid #ff4891;
        border-radius: 5px;
        background: #fff;
        outline: none;
      }
    }
  }
  .verify-phone .form-protocol {
    display: flex;
    align-items: flex-start;
    margin-top: 20px;
    .form-protocol-checkbox {
      display: block;
      width: 18px;
      height: 15px;
      text-align: center;
      line-height: 15px;
      font-size: 12px;
      color: #fff;
      font-weight: 200;
      padding: 1px;
      border-radius: 100%;
      border: 0.5px solid #b8b3ba;
    }
    .form-protocol-label {
      padding-left: 0.25rem;
      font-size: 0.75rem;
      line-height: 1rem;
      color: #969696;
      .form-protocol-link {
        color: #ff4891;
      }
    }
    .checkbox {
      width: 19px;
      height: 16px;
      border-color: #ff4891;
      background: #ff4891;
    }
  }
  .verify-phone .form-submit {
    margin-top: 20px;

    .form-submit-btn-disabled {
      background: #b8b3ba;
      width: 315px;
      height: 41px;
      border-radius: 5px;
    }
    .form-submit-btn {
      color: #fff;
      border: none;
      background: #ff4891;
      min-height: 2.5rem;
      text-overflow: ellipsis;
      font-size: 1rem;
      line-height: 2.625rem;
    }
  }
  .login-tip {
    padding: 20px 15px 0 0;
    color: #969696;
    font-size: 12px;
  }
}
</style>


