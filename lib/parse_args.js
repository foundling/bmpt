/*
 * returns an object that looks like this:
 * {
 *      'src_file' : 'cat.bmp',
 *      'dst_file' : 'cat_rotate.bmp',
 *      'options' : {
 *          'rotate' : 180,
 *          'invert' : undefined
 *      }
 *      
 * }
 */
var usage = require('./usage'),
    trimLeftChar = require('./prototype_additions').trimLeftChar;

function checkArgs(argv) {
    if (argv.length === 2)  perror(2);
    if (argv.length === 3)  perror(3);
}

function parseArgs(argv) {

    checkArgs(argv); //prelim check to determine if wrong # of args supplied

    var base = argv.slice(0,2);
    var args_array = argv.slice(2);
    var src_files =  args_array.splice(0,getTargetFilesRange(args_array));
    var options = parseOpts(args_array);    
    var dest_suffix = ('o' in options && options.o) ? options.o : perror(1);

    return {
        'base': base,
        'src_files': src_files,
        'destination_suffix': dest_suffix,
        'options' : options,
    };
}

function getTargetFilesRange(args) {

    var stopIndex;
    args.forEach(function(value,index) {
        if (value.substr(0,2) === '--') {
            stopIndex = index;
        }

    });

    return stopIndex;
}


function parseOpts(args) {
    var state = 'OUT';
    // regular expressions to test the argument array items that come after the filenames
    var opt_re = /^--?[^-].*/; 
    var value_re = /^[^-].*/;
    var last_option;
    var options = {};

    args.forEach(function(value,index) {
        // go through each toke in args array and change state accordingly
        // transitions from out state into either long or short opt state

        // checking if value is an --long-option or -short-option 
        if (state == 'OUT' && opt_re.test(value)) {
            state = 'OPTION';
            last_option = value.trimLeftChar('-'); 
        }

        // checking if value variable is a non-option value
        else if (state == 'OPTION' && value_re.test(value) ) {
            // if state is short opt and our current arg is an option value
            options[last_option] = value; 
            state = 'OUT'; // only one value per option allowed
        }

        else {
            perror(1);
        }

    });

    return options;
}

function perror(err_code,last_option,value) {
    var errors = {
        '1' : usage(),
        '2' : 'You have not specified any file to transform, nor any arguments. Exiting ...\n',
        '3' : 'You have not specified any arguments. Exiting ...\n',
    };

    console.log(errors[err_code]);
    process.exit(1);
}

exports = module.exports = parseArgs;
