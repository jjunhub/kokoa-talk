const express = require('express');
const path = require('path');

const app = express();
const port = 8888;
const viewsPath = path.join(__dirname, 'views');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', viewsPath);

app.get('/', (req,res) => {
  res.render('index');
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

