//import {Videos} from "../DB";
import routes from '../routes';
import Video from '../models/Video';



export const videos  = (req , res) => res.render("videos",{pageTitle:"videos"});

export const getupload  =(req , res) => {
    res.render("upload",{pageTitle:"upload"});
};
export const postupload  = async (req , res) => {
    const {
        body:{file, title, description},
        file:{path}
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    console.log(newVideo);
    res.redirect(routes.video_detail(newVideo.id));
};


export const video_detail  = async (req , res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("video_detail", {pageTitle: "video_detail", video});
    } catch(error) {
        res.redirect(routes.home);
    }

};

export const edit_video  =(req , res) => res.render("edit_video",{pageTitle:"edit_video"});
export const delete_video  =(req , res) => res.render("delete_video",{pageTitle:"delete_video"});



export const home = async (req, res, next) => {
    try {
        const videos = await Video.find({});
        res.render("home", {pageTitle: "Home", videos });

    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });
    }
};





export const search  =(req , res) => {
    const{
        query: {term:searchingBy}
    }=req;
    res.render("search",{pageTitle:"search",searchingBy, videos});
};


