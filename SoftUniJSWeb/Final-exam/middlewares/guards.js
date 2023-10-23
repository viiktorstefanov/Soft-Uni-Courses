const { getById } = require("../services/ElectronicsService");

function hasUser () {
    return (req, res, next) => {
        if (req.user != undefined) {
            next();
        } else {
            res.redirect('/auth/login');
        }
    }
};

function isGuest() {
    return (req, res, next) => {
        if(req.user != undefined) {
            res.redirect('/');
        } else {
            next();
        }
    }
};

function canUserBuy () {
    return async (req, res, next) => {

        try {
            const electronics = await getById(req.params.id);

            if (!req.user || electronics.owner == req.user._id) {
                return res.redirect('/');
            }
            next();
        } catch (err) {
            return res.render('404');
        }
    }
}
function userAlreadyBought() {
    return async (req,res,next) => {

        try {
            const electronics = await getById(req.params.id);
            
            if(electronics.buyingList.some(id => id == req.user._id)){
                return res.redirect('/');
            }
            next();
        }catch(err) {
            return res.render('404');
        }
    }
}

module.exports = {
    hasUser,
    isGuest,
    userAlreadyBought,
    canUserBuy
}