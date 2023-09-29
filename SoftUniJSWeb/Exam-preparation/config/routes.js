const registerController = require("../controllers/registerController");
const homeController = require("../controllers/homeController");
const loginController = require("../controllers/loginController");
const defaultController = require("../controllers/defaultController");
const logoutController = require("../controllers/logoutController");
const { isGuest, hasUser } = require("../middlewares/guards");
const createController = require("../controllers/createController");

module.exports = (app) => {
    app.use('/', homeController );
    app.use('/auth/register', isGuest(), registerController);
    app.use('/auth/login', isGuest(), loginController);
    app.use('/auth/logout', hasUser(), logoutController);
    app.use('/create', hasUser(), createController);

    app.use('*', defaultController);
}