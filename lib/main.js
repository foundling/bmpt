var fs = require('fs'),
    args = require('./../lib/parse_args.js')(process.argv),
    offsetData = require('./offsetData.js').offsetData,
    transformations = fs.readdirSync('transformations').map( function(filename, index, array){
        // input is a filename in trans dir
        var filepath = './transformations/' + filename; 
        return require(filepath);
    });

console.log(JSON.stringify(args,undefined,2));

/*


var Bitmap = function(args,transformations,offsetData){

    this.src_file = args.src_file;   
    this.dest_suffix = args.dest_suffix;
    this.transformations = transformations;

    this.offsetData = offsetData;
    this.buffer = null;
    this.header_data = null;
    this.palette_data = null;
    this.bitmap_data = null;
      
    // initialization code
    if (!this.src_file) {
        perror('src_file');
    }
    if (!this.dest_suffix) {
        perror('dest_suffix');
    }
    if (!this.transformations.length) {
        perror('transformations');
    }

};

Bitmap.prototype.readHeaderData = function() {

};

Bitmap.prototype.readPaletteData = function() {

};

Bitmap.prototype.readBitmapData = function() {

};


};

var bitmap = new Bitmap(args,transformations,offsetData);

console.log(args);
*/
