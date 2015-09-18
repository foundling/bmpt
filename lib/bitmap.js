var Bitmap = function(properties, transformations){

    this.transformations = transformations;

    this.properties = properties || {};
    this.properties.src_file = src_file;
    this.properties.outfile_extension = outfile_extension;
    this.properties.header_data = [];
    this.properties.raw_bmp_data = [];
    this.properties.pallete_data = [];

};


Bitmap.prototype.run_transformations = function() {

    var rv;

    rv = this.transformations.reduce(function(buffer, func){
        return func(buffer);  
    }, buffer);

    return rv;

};

module.exports = {
    Bitmap: Bitmap,
};
