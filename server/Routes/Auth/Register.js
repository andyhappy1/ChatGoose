const bcrypt = require("bcrypt"),
    jwt = require("jsonwebtoken"),
    utilsControllers = require("../../Controllers/UtilsControllers"),
    DbControllers = require("../../Controllers/DBControllers"),
    saltRounds = 10;

module.exports = {
    listenRegisterPath(app, multipartMiddleware) {
        app.post("/register", multipartMiddleware, function(req, res) {
            // check to make sure none of the fields are empty
            var isEmptyVar = isEmpty(req)
            if (isEmptyVar) {
                return isEmptyVar
            }

            getHash(req, (hash) =>{
                DbControllers.setUser({
                    email: req.body.email,
                    password: hash
                }, (user) => {
                    user = user._doc
                    delete user.password;
                    //  create payload for JWT
                    const payload = {
                        user: user
                    };
                    // create token
                    let token = jwt.sign(payload, app.get("appSecret"), {
                        expiresIn: "24h" // expires in 24 hours
                    });

                    return res.json({
                        status: true,
                        user: user,
                        token: token
                    });
                })
            })
        });
    }
}

function getHash(req, callback) {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        if (err) {
            console.log(err)
            throw err;
        } else {
            callback(hash)
        }
    })
}

function isEmpty(req) {
    if (
        utilsControllers.isEmpty(req.body.email) ||
        utilsControllers.isEmpty(req.body.password)
    ) {
        return {
            status: false,
            message: "All fields are required"
        }
    } else {
        return false
    }
}
