var express = require('express');
var app = express();
var static_directory = __dirname + '/app';
app.use(express.static(static_directory));
fs = require('fs');


/*
    Handle all api calls in this route.
    Automatically loads modules in the /api/ directory as needed,
    and calls the methods in those modules based upon the route.
 */
var api_modules = {};//collection apis that have been loaded
var api_config = {app:app};//references to other app modules are put in here
app.get('/api/:module_name/:method_name', function(req, res){
    var module_name = req.params.module_name;
    var method_name = req.params.method_name;
    if((module_name.indexOf("/") > -1) || (module_name.indexOf(".") > -1)){
        return res.send('Error, bad module name');
    }
    if((method_name[0] == "_")){
        return res.send('Error, bad method name');
    }
    if(!api_modules[module_name]){
        try{
            api_modules[module_name] = require(__dirname+'/api/'+module_name+'.js');
        }catch(e){
            return res.send('Error, there is no module by that name.');
        }
    }
    var module = api_modules[module_name];
    module._init(api_config);

    if(typeof(module[method_name])!='function'){
        return res.send('No method by that name');
    }
    var out = {};
    module[method_name](req, res, out, function(req, res, out){
        return res.json(out);
    });
});


/*
    any route that doesn't contain "." hits this route and loads index
    this is to get push state working.
    At some point, server side rendering could be done for SEO (using PhantomJS)
  */
app.get(/^[^\.]+$/, function (req, res) {
    fs.readFile(static_directory+'/index.html', 'utf8', function (err,data) {
        if (err) {
            res.send('ERROR loading index.html');
        }
        res.send(data);
    });
});



var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});