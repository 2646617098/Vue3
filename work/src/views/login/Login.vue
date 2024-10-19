<template>
  <Header_P/>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="loginInfo">Username: {{ loginInfo.username }}, Password: {{ loginInfo.password }}</p>
  </div>
</template>

<script>
import Header_P from '@/components/Header_P.vue';

export default {
  name: 'Login_P',
  components: {
    Header_P
  },
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // 这里将来会加上向后端发送数据的代码
      console.log(`登录信息：用户名=${this.username}, 密码=${this.password}`);
    }
  }
};
</script>

<style scoped>
label, h2{
  font-weight: bold;
  color: white;
}

.login-form {
  max-width: 300px;
  margin: 20vh auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-form h2 {
  text-align: center;
}

.login-form div {
  margin-bottom: 15px;
}

.login-form label {
  display: block;
  margin-bottom: 5px;
}

.login-form input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.login-form button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-form button:hover {
  background-color: #369570;
}
</style>
