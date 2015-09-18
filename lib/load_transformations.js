fs = require('fs');

function loadTransformations(transformations_dir) {

    var transformations = [];

    fs.readdir(transformations_dir, function(err, files){
        if (err) throw (err);

        var funcs = files.map(function(filename, index, array) {
            var filepath = './transformations/' + filename; 
            return require(filepath);
        });
        transformations.push(funcs);
    });
}

module.exports = loadTransformations;
