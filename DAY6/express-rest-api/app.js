const express = require ('express') ;
const app = express();
const port = 3000;
app. use (express. json ()); // Để xử lý dữ liệu JSON trong body của request
app. listen (port, () => {
     console. log('Server is running at http://localhost:${port}') ;
});

app.get('/DAY6',(req, res) => {
     res.json([
          {id: 1, name: 'John Doe'},
          {id: 2, name: 'Jane Smith'}
     ]);
});