import routes from '../routes';


export const getjoin  = (req , res) => {
    res.render("join", {pageTitle: "join"});
};


export const postjoin = (req, res) => {
    const {
        body: { name, email, password, password2 }
    } = req;
    if (password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        // To Do: Register User
        // To Do: Log user in
        res.redirect(routes.home);
    }
};


export const getlogin  =(req , res) => {
    res.render("login",{pageTitle:"login in"});
};
export const postlogin  =(req , res) => {
    res.redirect(routes.home);
};




export const logout  =(req , res) => res.render("logout",{pageTitle:"logut"});
export const users  =(req , res) => res.render("users",{pageTitle:"users"});
export const userDetail  =(req , res) => res.render("userDetail",{pageTitle:"userDetail"});
export const editProfile  =(req , res) => res.render("editProfile",{pageTitle:"editProfile"});
export const changePassword  = (req , res) => res.render("changePassword",{pageTitle:"changePassword"});
