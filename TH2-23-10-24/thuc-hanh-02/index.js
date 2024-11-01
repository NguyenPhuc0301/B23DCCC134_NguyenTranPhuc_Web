const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.get('/resource',(req, res) => {
    res.json({ message: 'GET request - Dữ liệu đã lấy', data: {} });   
});

app.post('/resource', (req, res) => {
    const newData = req.body;
    res.json({ message:'POST request - Tạo mới', data: newData });
});

app.put('/resource/:id', (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    res.json({ message: `PUT request - Dữ liệu có id = ${id} đã được update`, data: updatedData });
});

app.delete('/resource/:id', (req,res) => {
    const {id} = req.params;
    res.json({ message: `DELETE request - Dự liệu id =${id} đã bị xóa`});
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});