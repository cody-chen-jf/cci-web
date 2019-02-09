<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">Copyright ...</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'

export default {
  name: 'login',
  components: {
    LoginForm
  },
  methods: {
    handleSubmit({ userName, password }) {
      console.log('userName : ', userName)
      console.log('password : ', password)
    }
  }
}
</script>

<style scoped lang="less">
  @import './login.less';
</style>
