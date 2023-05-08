const router = require("express").Router();
const bcrypt = require("bcrypt");
const Post = require("../models/Post");


// Create Post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savePost = await newPost.save();
        res.status(200).json(savePost)
    } catch (err) {
        res.status(500).json(err)
    }
})
// Update Post
// Delete Post
// Like Post
// Get Post
// Get timeline Post
module.exports = router