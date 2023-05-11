const router = require("express").Router();
const Conversation = require("../models/Conversation");
const User = require("../models/User");



// new conversation
router.post("/", async (req, res) => {
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId]
    });

    try {
        const savedConversation = await newConversation.save();
        res.status(200).json(savedConversation);
    }
    catch (error) {
        res.status(500).json(error)
    }
});




// get userConversation
router.post("/", async (req, res) => {
    try {
        const conversation = await Conversation.find(req.body.id);
        members: { $in: [req.params.userId] };
        res.status(200).json(conversation);
    }
    catch (error) {
        res.status(500).json(error)
    }
})




// delete conversation
router.delete("/:conversationId", async (req, res) => {
    const conversation = await Conversation.findById(req.params.conversationId);
    const member = await Conversation.find(req.body.members);
    const findUser = await User.findById(req.body.userId);
    const authUser = member[0]?.members.find(i => findUser?._id.equals(i));

    try {
        if (authUser) {
            await conversation.deleteOne();
            res.status(200).json("the conversation has been deleted");
        } else {
            res.status(403).json("you can delete only your conversation")
        }
    }
    catch (error) {
        res.status(500).json(error)
    }
});




// get all conversation
router.get("/allconversations/:userId", async (req, res) => {
    try {
        const conversations = await Conversation.find({ members: req.params.userId });
        res.status(200).json(conversations);
    }
    catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router;





