import express from "express";
import { getUsers, login, signup, updateUser, logout} from "../controllers/user.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/update-user", verifyJWT, updateUser);
router.get("/users", verifyJWT, getUsers);

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;