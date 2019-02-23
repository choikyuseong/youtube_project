import mongoose from "mongoose";

mongoose.connect(
    "mongodb+srv://kusung2230:ks3220930@cluster0-ahhel.mongodb.net/test?retryWrites=true",
    {
        useNewUrlParser:true,
        useFindAndModify:false
    }

);

const db = mongoose.connection;

const handleopen = () => console.log("Conneted to DB");
const handleerror = error => console.log(`Error on DB connetion:${error}`);

db.once('open',handleopen);
db.on('error',handleerror);


// export const Videos = [
//     {
//         id: 324393,
//         title: "Video awesome",
//         description: "This is something I love",
//         views: 24,
//         videoFile:
//             "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator: {
//             id: 121212,
//             name: "Nicolas",
//             email: "nico@las.com"
//         }
//     },
//     {
//         id: 1212121,
//         title: "Video super",
//         description: "This is something I love",
//         views: 24,
//         videoFile:
//             "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator: {
//             id: 121212,
//             name: "Nicolas",
//             email: "nico@las.com"
//         }
//     },
//     {
//         id: 55555,
//         title: "Video nice",
//         description: "This is something I love",
//         views: 24,
//         videoFile:
//             "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator: {
//             id: 121212,
//             name: "Nicolas",
//             email: "nico@las.com"
//         }
//     },
//     {
//         id: 11111,
//         title: "Video perfect",
//         description: "This is something I love",
//         views: 24,
//         videoFile:
//             "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
//         creator: {
//             id: 121212,
//             name: "Nicolas",
//             email: "nico@las.com"
//         }
//     }
// ];