import mongoose from 'mongoose';
import Post from '../models/Post.js';

// getting all posts route
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: error.message });
  }
};

// creating new post route
export const createPost = async (req, res) => {
  const { post } = req.body;

  const newPost = new Post(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: error.message });
  }
};

// updating a post route
export const updatePost = async (req, res) => {
  const { id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('No post with that Id');
  }

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { ...post, id },
      {
        new: true,
      }
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: error.message });
  }
};
