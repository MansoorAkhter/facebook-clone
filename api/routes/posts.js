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
router.put("/:id", async (req, res) => {
    const post = await Post.findById(req.params.id);
    try {
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json("the post has been updated")
        } else {
            res.status(403).json("you can update only your post")
        }
    } catch (error) {
        res.status(500).json(error)
    }
})




// Delete Post
router.delete("/:id", async (req, res) => {
    const post = await Post.findById(req.params.id);
    try {
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json("the post has been deleted");
        } else {
            res.status(403).json("you can delete only your post")
        }
    } catch (error) {
        res.status(500).json(error)
    }
})
// Like Post
// Get Post
// Get timeline Post
module.exports = router