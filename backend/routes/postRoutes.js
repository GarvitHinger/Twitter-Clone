import express from "express";

import { protectRoute } from "../middleware/protectRoute.js";
import {getAllPosts,getLikedPosts, getFollowingPosts,getUserPosts, createPost, commentOnPost,likeUnlikePost, deletePost} from "../controllers/postController.js"

const router = express.Router();

router.get("/all", protectRoute, getAllPosts);
router.get("/liked/:id", protectRoute, getLikedPosts);
router.get("/following", protectRoute, getFollowingPosts);
router.get("/user/:username", protectRoute, getUserPosts);
router.post("/create", protectRoute, createPost);
router.post("/comment/:id", protectRoute, commentOnPost);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.delete("/:id", protectRoute, deletePost);
export default router;