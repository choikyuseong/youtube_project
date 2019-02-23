import express from "express";
import routes from "../routes";
import {
    users,
    userDetail,
    editProfile,
    changePassword
} from "../controllers/userController";

const userrouter = express.Router();


userrouter.get(routes.users , users );
userrouter.get(routes.user_detail() , userDetail);
userrouter.get(routes.edit_profile , editProfile);
userrouter.get(routes.change_password , changePassword);

export default userrouter;