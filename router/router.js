const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const Jimp = require('jimp');

router.get('/send', async(req, res) => {
    const { image } = req.query;
    try{
        const imageJimp = await Jimp.read(image);
        const id = uuidv4().slice(0, 5);
        const nameImage = `img-${id}.jpg`;
        await imageJimp
        .resize(350, 350)
        .grayscale()
        .writeAsync(`/assets/img/${nameImage}`);
        res.send('img guardada')
    }catch (error) {
        console.error(error);
        res.status(500).send('Error al procesar la imagen');
    }
});

module.exports = router;
