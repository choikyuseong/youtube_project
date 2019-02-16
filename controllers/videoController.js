import {Videos} from "../DB";


export const videos  = (req , res) => res.render("videos",{pageTitle:"videos"});
export const upload  =(req , res) => res.render("upload",{pageTitle:"upload"});
export const video_detail  =(req , res) => res.render("video_detail",{pageTitle:"video_detail"});
export const edit_video  =(req , res) => res.render("edit_video",{pageTitle:"edit_video"});
export const delete_video  =(req , res) => res.render("delete_video",{pageTitle:"delete_video"});
export const home  =(req , res) => res.render("home",{pageTitle:"home" , Videos});
export const search  =(req , res) => {
    const{
        query: {term:searchingBy}
    }=req;
    res.render("search",{pageTitle:"search",searchingBy});
};


