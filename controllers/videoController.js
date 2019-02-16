export const videos  = (req , res) => res.send("videos",{pageTitle:"videos"});
export const upload  =(req , res) => res.send("upload",{pageTitle:"upload"});
export const video_detail  =(req , res) => res.send("video_detail",{pageTitle:"video_detail"});
export const edit_video  =(req , res) => res.send("edit_video",{pageTitle:"edit_video"});
export const delete_video  =(req , res) => res.send("delete_video",{pageTitle:"delete_video"});
export const home  =(req , res) => res.render("home",{pageTitle:"home"});
export const search  =(req , res) => {
    const{
        query: {term:searchingBy}
    }=req;
    res.render("search",{pageTitle:"search",searchingBy});
};


