const registerController = require("../controllers/registerController");
const homeController = require("../controllers/homeController");
const loginController = require("../controllers/loginController");
const defaultController = require("../controllers/defaultController");
const logoutController = require("../controllers/logoutController");
const { isGuest, hasUser } = require("../middlewares/guards");
const createController = require("../controllers/createController");
const catalogController = require("../controllers/catalogController");
const detailsController = require("../controllers/detailsController");
const editController = require("../controllers/editController");
const deleteController = require("../controllers/deleteController");
const buyController = require("../controllers/buyController");
const searchController = require("../controllers/searchController");


module.exports = (app) => {
    app.use('/', homeController );
    app.use('/auth/register', isGuest(), registerController);
    app.use('/auth/login', isGuest(), loginController);
    app.use('/auth/logout', hasUser(), logoutController);
    app.use('/create', hasUser(), createController);
    app.use('/catalog', catalogController);
    app.use('/details', detailsController);
    app.use('/edit', hasUser(), editController);
    app.use('/delete', hasUser(), deleteController);
    app.use('/buy', buyController);
    app.use('/search', searchController);

    app.use('*', defaultController);
}