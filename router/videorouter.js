
import express from "express";
import routes from "../routes";

import {
    //videos,
    getupload,
    postupload,
    video_detail,
    delete_video,
    postEdit_video,
    getEdit_video
} from "../controllers/videoController";
import {uploadVideo} from "../middlewares";

const videoRouter = express.Router();

//videoRouter.get(routes.videos, videos);

videoRouter.get(routes.upload, getupload);
videoRouter.post(routes.upload, uploadVideo , postupload);

videoRouter.get(routes.video_detail(), video_detail);

videoRouter.post(routes.edit_video(), postEdit_video);
videoRouter.get(routes.edit_video(), getEdit_video);

videoRouter.get(routes.delete_video(), delete_video);



export default videoRouter;