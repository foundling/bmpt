var fs = require('fs'),
    transformations = require('./load_transformations')(__dirname + '/transformations'),
    args = require('./../lib/parse_args.js')(process.argv), // get args
    bitmap = require('./bitmap').Bitmap(args, transformations);

//bitmap.run_transformations(transformations);
//bitmap.writeOut();
