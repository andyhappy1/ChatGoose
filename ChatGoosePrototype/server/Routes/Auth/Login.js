const bcrypt = require("bcrypt"),
    jwt = require("jsonwebtoken"),
    DbControllers = require("../../Controllers/DBControllers")

module.exports = {
    listenLoginPath(app, multipartMiddleware) {
        app.post("/login", multipartMiddleware, function(req, res) {
            DbControllers.isExistUser(req.body.email, (users) => {
                if (users.length == 0) {
                    return res.json({
                        status: false,
                        message: "Sorry, wrong email or password, please retry"
                    });
                }
                let user = users[0]._doc;
                let authenticated = bcrypt.compareSync(req.body.password, user.password);
                delete user.password;
                if (authenticated) {
                    //  create payload for JWT
                    const payload = { user: user };
                    // create token
                    let token = jwt.sign(payload, app.get("appSecret"), {
                        expiresIn: "24h" // expires in 24 hours
                    });

                    return res.json({
                        status: true,
                        user: user,
                        token: token
                    });
                }

                return res.json({
                    status: false,
                    message: "Sorry, wrong email or password, please retry"
                });
            })

        });
    }
}
