const registerController = require("../controllers/registerController");
const homeController = require("../controllers/homeController");
const loginController = require("../controllers/loginController");
const defaultController = require("../controllers/defaultController");

module.exports = (app) => {
    app.use('/', homeController );
    app.use('/auth/register', registerController);
    app.use('/auth/login', loginController);

    app.use('*', defaultController);
}