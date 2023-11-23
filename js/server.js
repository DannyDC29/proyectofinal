const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', jsonServer.router('db.json'));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
