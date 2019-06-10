const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send('DuckDuckGo API Proxy');
});

module.exports = router;