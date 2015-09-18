// pull in everything necessary first
var fs = require('fs'),
    usage = require('./usage'),
    loadTransformations = require('./load_transformations'),
    validateArgs = require('./validate_args'), // returns args object or false
    parseArgs = require('./parse_args'),
    Bitmap = require('./bitmap');

// init the bitmap obj 
var transformations = loadTransformations(__dirname + '/transformations'),
    args = parseArgs(process.argv), 
    args = validateArgs(args) || usage(), // usage exits with process.exit(1) 
    bitmap = new Bitmap(args,transformations);

bitmap.run_transformations();
//bitmap.writeOut();
