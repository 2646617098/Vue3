<template>
  <div>
    <Header_P />
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username:</label>
          <input type="text" placeholder="Enter your username" id="username" v-model="username" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" placeholder="Enter your username" id="password" v-model="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="loginInfo">Username: {{ loginInfo.username }}, Password: {{ loginInfo.password }}</p>
    </div>
  </div>
</template>

<script>
import Header_P from '@/components/Header_P.vue';
import axios from 'axios';

export default {
  name: 'Login',
  components: {
    Header_P
  },
  data() {
    return {
      username: '',
      password: '',
      message: '',
      success: false
    };
  },
  methods: {
    login() {
      if (this.username.trim() === '' || this.password.trim() === '') {
        alert('用户名和密码不能为空！');
        return;
      }
      axios.post('http://localhost:3000/login', {
        username: this.username,
        password: this.password,
      })
        .then(response => {
          console.log(response.data);
          this.message = response.data.message;
          this.success = response.data.success;
          if (this.success) {
            alert('登录成功！');
            // 登录后跳转到首页
            this.$router.push('/');
          } else {
            alert(this.message);
          }
        })
        .catch(error => {
          console.error(error);
          this.message = error.response.data.message || '登录失败';
          this.success = false;
          alert('error');
        });
    }
  }
};
</script>

<style scoped>
label,
h2 {
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
