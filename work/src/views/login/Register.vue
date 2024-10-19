<template>
  <Header_P></Header_P>
  <div class="register-form">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div>
        <label for="username">Username:</label>
        <input type="text" placeholder="Enter your username" v-model="username" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" placeholder="Enter your password" v-model="password" required>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import Header_P from '@/components/Header_P.vue';
import axios from 'axios';
//import { response } from 'express';

export default {
  name: 'Register_P',
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
    register() {// 注册方法,连接后端
      if (this.username.trim() === '' || this.password.trim() === '') {
        alert('用户名和密码不能为空！');
        return; // 如果为空，则终止函数执行
      }
      axios.post('http://localhost:3000/register', {//发起axios请求
        username: this.username,
        password: this.password,
      })
        .then(response => {
          console.log(response.data);
          // 注册成功后的处理逻辑
          this.message = response.data.message;
          this.success = response.data.success;
          if (this.success) {
            alert('注册成功！');
            this.$router.push('/login');
          }
        })
        .catch(error => {
          console.error(error);
          // 处理错误情况
          this.message = error.response.data.message || '注册失败';
          this.success = false;
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

.register-form {
  max-width: 300px;
  margin: 20vh auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(131, 45, 45, 0.1);
}

.register-form h2 {
  text-align: center;
}

.register-form div {
  margin-bottom: 15px;
}

.register-form label {
  display: block;
  margin-bottom: 5px;
}

.register-form input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.register-form button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.register-form button:hover {
  background-color: #369570;
}
</style>
