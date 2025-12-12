const express = require('express');
const app = express();
const PORT = 3000;

// EJS 템플릿 사용
app.set('view engine', 'ejs');

// public 폴더 정적파일 사용
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
