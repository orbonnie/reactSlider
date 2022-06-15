const express = require('express');
const app = express();
const path = require('path');
const PORT = 3200;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));