const DbControllers = require("../../Controllers/DBControllers")

module.exports = {
    listenLoginPath(app, multipartMiddleware) {
        app.post("/company/get", multipartMiddleware, function(req, res) {
            DbControllers.getUserCompany(req.body.id, (company) => {
                return res.json({
                    company: company
                });
            })
        })
    }
}
