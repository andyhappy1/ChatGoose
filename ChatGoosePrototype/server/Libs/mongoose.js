var modeles = require('./modeles')
var mongoose    = require('mongoose');
mongoose.connect('mongodb://localhost/chat_goose', { useNewUrlParser: true });
var db = mongoose.connection;

// db.dropDatabase();

db.on('error', function (err) {
    console.log('connection error:' + err.message);
});
db.once('open', function callback () {
    console.log("Connected to DB Chat Goose!");
});

var Schema = mongoose.Schema;

var
    Company = new Schema(modeles.company),
    User = new Schema(modeles.user)
    // Address = new Schema(modeles.addresses),
    // Category = new Schema(modeles.categories);

var
    ArticleModelCompany = mongoose.model('Company', Company),
    ArticleModelUser = mongoose.model('Users', User)
    // ArticleModelAddress = mongoose.model('Address', Address),
    // ArticleModelCategory = mongoose.model('Category', Category)

module.exports.ArticleModelCompany = ArticleModelCompany
module.exports.ArticleModelUser = ArticleModelUser
// module.exports.ArticleModelAddress = ArticleModelAddress
// module.exports.ArticleModelCategory = ArticleModelCategory
