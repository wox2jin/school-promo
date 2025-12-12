const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// EJS 세팅
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 정적 파일(public 폴더)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  const now = new Date();
  const date = now.toLocaleDateString();     // YYYY-MM-DD 형식
  const time = now.toLocaleTimeString();     // HH:MM:SS 형식
  res.render('index', {date, time});
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
