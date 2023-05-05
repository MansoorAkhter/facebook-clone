const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("User Route 123")
})

module.exports = router;