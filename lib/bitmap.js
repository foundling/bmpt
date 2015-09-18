var Bitmap = function(properties, transformations){

    this.transformations = transformations;
    this.properties = properties; // header, src, outfile extension, palette buff, bmp buffer 
    this.outfile_name = properties.srcfile_name
                        .split('.')[0] +
                        (properties.outfile_extension + '.bmp' || '.bmpt.bmp'); 
};


Bitmap.prototype._writeOut = function(transformed_buffer) {
    fs.writeFile(this.outfile_name, transformed_buffer, function(err){
        if (err) throw err;
    });
};

Bitmap.prototype.run_transformations = function() {

    var buffer = (this.palette) ? this.palette : this.bmp_buffer;  

    rv = this.transformations.reduce(function(buffer, func){
        return func(buffer);  
    }, buffer);

    return rv;

};

module.exports  = Bitmap;
