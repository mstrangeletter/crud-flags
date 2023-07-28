const express = require('express');
const router = express.Router();

const Flag = require('../models/flag');

router.get('/flag', async (req, res) => {
    try {
        const arrayFlagsDB = await Flag.find();
        console.log(arrayFlagsDB);

        res.json(arrayFlagsDB);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las banderas desde la base de datos.' });
    }
});

module.exports = router;
