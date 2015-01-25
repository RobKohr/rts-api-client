exports.config = {};
var app = null;
exports._init = function(config){
    exports.config = config;
    app = config.app;
};

exports.my_islands = function(req, res, out, next){
    return next(req, res, {'hello':'world'})
};

exports.list = function(req, res, out, next){

}