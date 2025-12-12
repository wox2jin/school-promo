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
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
