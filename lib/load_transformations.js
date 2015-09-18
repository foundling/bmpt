var fs = require('fs');

// fix the path construction in this file 
var loadTransformations = function(transformations_dir) {

    return fs.readdirSync(transformations_dir)
            .map(function(filename){
                return require(__dirname + '/transformations' + '/' + filename);
            });
};

module.exports = loadTransformations;

