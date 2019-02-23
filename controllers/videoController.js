import {Videos} from "../DB";
import routes from '../routes';

export const videos  = (req , res) => res.render("videos",{pageTitle:"videos"});

export const getupload  =(req , res) => {
    res.render("upload",{pageTitle:"upload"});
};
export const postupload  =(req , res) => {
    const {
        body:{file, title, description}
    } = req;
    res.redirect(routes.video_detail(324393))
};


export const video_detail  =(req , res) => res.render("video_detail",{pageTitle:"video_detail"});
export const edit_video  =(req , res) => res.render("edit_video",{pageTitle:"edit_video"});
export const delete_video  =(req , res) => res.render("delete_video",{pageTitle:"delete_video"});
export const home  =(req , res) => res.render("home",{pageTitle:"home" , Videos});
export const search  =(req , res) => {
    const{
        query: {term:searchingBy}
    }=req;
    res.render("search",{pageTitle:"search",searchingBy, videos});
};


