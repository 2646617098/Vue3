const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt'); // 引入bcrypt用于密码加密和解密

app.use(express.json()); // 用于解析JSON格式的请求体
app.use(cors());// 处理跨域请求问题


console.log('服务器启动中...');//console.log()需要重新打开后端才能运行



// 注册路由
app.post('/register', (req, res) => {
  // 处理POST请求
  // 使用req.body来访问请求体中的数据
  // 使用res.send来发送响应
  console.log('接收到的注册数据:', req.body);//请求体数据

  const Data = Object.keys(req.body).map(key => req.body[key]).join(',');//将请求体数据转换为csv格式数据
  fs.appendFile('data.csv', Data + '\n', err => {//将csv格式数据写入文件
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: '写入csv文件失败。' });//返回json格式的响应
      return;
    }
    console.log('数据已写入csv文件。');//显示在控制台中
  });

  res.status(200).json({ success: true, message: '注册成功，数据已写入csv文件。' });
});




// 登录路由
app.post('/login', (req, res) => {
  console.log('接收到的登录数据:', req.body); // 请求体数据
  const filePath = 'data.csv';

  // 读取CSV文件
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: '读取CSV文件失败' });
    }

    // 将CSV数据转换为行数组
    const lines = data.split('\n');
    let userFound = false;
    let userData = null;

    // 遍历CSV文件中的每一行，查找用户
    lines.forEach(line => {
      // 使用正则表达式来查找以用户名开头并后接逗号的行
      const regex = new RegExp(`^${req.body.username},`);
      if (regex.test(line)) {
        const [user, password] = line.split(',').map(s => s.trim()); // 使用trim()去除可能的空格
        userData = { user, password };
        userFound = true;
        // console.log("找到了用户");
      }
    });

    // 如果找到用户，验证密码
    if (userFound) {
      // 直接比较用户输入的密码与数据库中存储的密码
      if (req.body.password === userData.password) {
          // 密码正确
          res.json({ success: true, message: '登录成功' });
      } else {
          // 密码错误
          res.json({ success: false, message: '用户名或密码错误' });
          // console.log("输入密码与数据库中的密码不匹配"+ req.body.password + userData.password);
          //之后可以做哈希加密和解密，用户名唯一，密码规范
      }
  } else {
      // 用户未找到
      res.json({ success: false, message: '用户名不存在' });
  }
  });
});



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});