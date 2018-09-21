const register = require('./Auth/Register'),
    login = require('./Auth/Login'),
    companyRouthes = require('./Company/CompanyRoutes'),
    multipart = require("connect-multiparty"),
    multipartMiddleware = multipart();

class index {
    constructor (app) {
        this._app = app
    }

    serupRuotes() {
        register.listenRegisterPath(this._app, multipartMiddleware)
        login.listenLoginPath(this._app, multipartMiddleware)
        companyRouthes.listenLoginPath(this._app, multipartMiddleware)
    }
}

module.exports = index
