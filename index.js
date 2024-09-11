var express = require('express');
var cors = require('cors');
const multer = require('multer');

require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Set up multer to handle file uploads
const upload = multer({ dest: 'uploads/' });


// Endpoint to handle file uploads
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    res.json({
        name: file.originalname,
        type: file.mimetype,
        size: file.size
    });
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
