const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'))
    });
}

app.listen(PORT, error => {
    if (error) throw error;
    console.log(`Server running on port ${PORT} (●'◡'●)`)
});

