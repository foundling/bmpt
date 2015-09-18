var fs = require('fs'),
    args = require('./../lib/parse_args.js')(process.argv), // get args
    bitmap = require('./bitmap').Bitmap(args);

bitmap.run_transformations(transformations);
bitmap.writeOut();

