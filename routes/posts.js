const express = require('express');
const router = express.Router();
const Post = require('../models/postsModel');

router.get('/', async function(req, res, next){
    const post = await Post.find();


    res.status(200).json({
        "status": true,
        post,
    });
});

router.get('/:id', async function(req,res,next){
    const id = req.params.id;
    const post = await Post.find({"_id":id});
    res.status(200).json({
        post,
    });
});

router.post('/', async function(req, res, next){
    const newPost = await Post.create(req.body);
    res.status(200).json({
        "status": true,
        post: newPost,
    });
});

router.delete('/', async function(req, res, next){
    await Post.deleteMany({});
    const leftPost = await Post.find({});
    res.status(200).json({
        "status": true,
        post: leftPost,
    });
});

router.delete('/:id', async function(req, res, next){
    const id = req.params.id;
    const deletedPost = await Post.deleteOne({"_id": id});
    res.status(200).json({
        "status": true,
        post: deletedPost,
    });
});

router.patch('/:id', async function(req, res, next){
    const id = req.params.id;
    let {name, content, image, likes} = req.body;
    const oldPost  = await Post.findByIdAndUpdate(id, {
        $set:{name, content, image, likes},
    });
    const newPost = await Post.find({"_id":id});

    res.status(200).json({
        "status": true,
        postOld: oldPost,
        postNew: newPost,
    });


});

router.options('/', function(req, res, next){
    res.status(200).json({
        "status":true,
        "message": "options",
    });
});






module.exports = router;