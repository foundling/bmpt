var Bitmap = function(properties, transformations){

    this.transformations = transformations;

    this.properties = properties;

    this.outfile_name = this.properties.srcfile_name
                        .split('.')[0] +
                        (this.properties.outfile_extension || '.bmpt.bmp'); 


    this.properties.outfile_name = properties.outfile_extension.split('bmp')[0];

    /*  this.properties.srcfile_name = srcfile_name;
        this.properties.outfile_extension = outfile_extension;
        this.outfile_name = outfile_name;
        this.properties.header_data = [];
        this.properties.raw_bmp_data = [];
        this.properties.pallete_data = []; */

};

Bitmap.prototype.test = function(properties) {
    // if no dest suffix, use default? -bmpt--rotate90--invert
    // test properties;
};

Bitmap.prototype._writeTo = function(buffer) {
    fs.writeFile(this.outfile_name, buffer, function(err, data){

    });
};

Bitmap.prototype._run_transformations = function() {

    var rv;

    rv = this.transformations.reduce(function(buffer, func){
        return func(buffer);  
    }, buffer);

    return rv;

};

module.exports = {
    Bitmap: Bitmap,
};
