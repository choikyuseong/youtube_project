import express from "express";
import routes from "../routes";

const userrouter = express.Router();


userrouter.get(routes.users , (req , res) => res.send("USERS"));
userrouter.get(routes.user_detail , (req , res) => res.send("user_detail"));
userrouter.get(routes.edit_profile , (req , res) => res.send("edit_profile"));
userrouter.get(routes.change_password , (req , res) => res.send("change_password"));

export default userrouter;