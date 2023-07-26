const express = require('express');
const app = express();
const port = 5000;

const multer = require('multer');
const sharp = require('sharp');


app.use(express.json());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({
    storage: storage, 
    limits: {
        fileSize: 4 * 1024 * 1024,
    },
});


app.post('/resize-image', upload.single('image'), (req, res) => {
    if (!req.file || !req.body.size) {
        return res.status(400).json({ error: 'Se requiere una imagen y un tamaño para redimensionar.' });
    }

    const { size } = req.body;
    const buffer = req.file.buffer;

    let width, height;

    switch (size) {
        case 'icon':
            width = 32;
            height = 32;
            break;
        case 'medioI':
            width = 800;
            height = 600;
            break;
        case 'mediaII':
            width = 1024;
            height = 768;
            break;
        case 'alta':
            width = 1920;
            height = 1080;
            break;
        case 'ultra':
            width = 3840;
            height = 2160;
            break;
        case 'original':
            width = null;
            height = null;
            break;
        default:
            return res.status(400).json({ error: 'Tamaño seleccionado no válido.' });
    }

    sharp(buffer)
        .resize(width, height)
        .toBuffer()
        .then((data) => {

            res.end(data);
        })
        .catch((error) => {
            console.error('Error al redimensionar la imagen:', error);
            res.status(500).json({ error: 'Error al redimensionar la imagen.' });
        });
});


app.listen(port, () => {
    console.log(`Servidor en funcionamiento en el puerto ${port}`);
});
