const express = require('express');
const router = express.Router();
const multer = require('multer')


const File = require('../models/file');

router.post('/', multer().single('upfile'), (req, res) => {
    res.json({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size
    });
})

module.exports = router;