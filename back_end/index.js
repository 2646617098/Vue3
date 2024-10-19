const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');

app.use(express.json()); // 用于解析JSON格式的请求体
app.use(cors());// 处理跨域请求问题

// 示例路由
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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});