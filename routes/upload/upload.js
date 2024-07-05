const multer = require("multer");
const screenshotStorage = require("../../utils/Storage");
const wrapAsync = require("../../utils/wrapAsync");
const router = require('express').Router();


const upload = multer({ storage: screenshotStorage });

router.post('/img', upload.single('image'),wrapAsync(async (req, res) => {
    try {
        const uploadedFilePath = req.file.path;
        const fileURL = `${req.protocol}://${req.get('host')}/${uploadedFilePath}`;
        return res.json({ message: "File uploaded", fileURL });
    } catch (error) {
        res.status(500).json({ error: "Image not upload" });
    }   
}));

router.get('/', (req, res) => {
    res.send('upload route')
})


module.exports = router;
