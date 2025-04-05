const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets/html/index.html'));
});

app.get('/sucesso', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets/html/sucesso.html'));
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'assets/html/404.html'));
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});