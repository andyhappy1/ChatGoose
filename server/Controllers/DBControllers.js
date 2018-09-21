const ArticleModelUsers = require('../Libs/mongoose').ArticleModelUser,
    ArticleModelCompany = require('../Libs/mongoose').ArticleModelCompany

module.exports = {
    setUser(userData, callback) {
        var article = new ArticleModelUsers({
            email: userData.email,
            password: userData.password
        });
        article.save(function (err) {
            if (!err) {
                console.log("article created" + article);
                callback(article)
                return article;
            } else {
                console.log(err);
                if(err.name === 'ValidationError') {
                    console.log('Validation error')
                } else {
                    console.log('Server error')
                }
                console.log('Internal error: %s',err.message);
            }
        });
    },

    isExistUser(email, callback) {
        return ArticleModelUsers.find({email: email}, function (err, articles) {
            if (!err) {
                callback(articles);
            } else {
                console.log('Internal error: ' + err.message);
                callback(false);
            }
        });
    },

    getUserCompany(id, callback) {
        return ArticleModelUsers.find({_id: id}, function (err, articles) {
            if (!err) {
                var companyForFind = {$and : []}
                if ((articles[0].company === undefined) || (articles[0].company.length === 0)) {
                    callback([])
                } else {
                    articles.company.forEach(function (company) {
                        companyForFind.$and.push({_id: company})
                    })
                    ArticleModelCompany.find(companyForFind, function (err, articles) {
                        callback(articles);
                    })
                }
            } else {
                console.log('Internal error: ' + err.message);
                callback(false);
            }
        });
    },

    getCompany() {

    }
}
