import express from "express";
import routes from "../routes";
import{
    home,
    search
} from "../controllers/videoController";
import {
    getjoin,
    postjoin,
    getlogin,
    postlogin,
    logout
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home , home);

globalRouter.get(routes.join , getjoin);
globalRouter.post(routes.join , postjoin);

globalRouter.get(routes.login , getlogin);
globalRouter.post(routes.login , postlogin);



globalRouter.get(routes.logout , logout);
globalRouter.get(routes.search , search);


export default globalRouter;