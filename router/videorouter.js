
import express from "express";
import routes from "../routes";

import {
    //videos,
    getupload,
    postupload,
    video_detail,
    delete_video, edit_video
} from "../controllers/videoController";

const videoRouter = express.Router();

//videoRouter.get(routes.videos, videos);

videoRouter.get(routes.upload, getupload);
videoRouter.post(routes.upload, postupload);

videoRouter.get(routes.video_detail(), video_detail);
videoRouter.get(routes.edit_video, edit_video);
videoRouter.get(routes.delete_video, delete_video);



export default videoRouter;