var fs = require('fs'),
    transformations_dir = '/transformations',
    loadTransformations = require('./load_transformations'),
    transformations = loadTransformations(__dirname + transformations_dir),
    args = require('./../lib/parse_args.js')(process.argv), // get args
    bitmap = require('./bitmap').Bitmap(args, transformations);

//bitmap.run_transformations(transformations);
//bitmap.writeOut();
