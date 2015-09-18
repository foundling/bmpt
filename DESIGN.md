//note test for 'grayscale' with no value 

# project discription

MAIN PARTS 

1. command line interface
2. argument checking
3. bitmap object creation 
4. run transform functions
5. writing output


:: COMMAND LINE INTERFACE ::

example usage:

bmpt image.bmp --rotate 90 --invert -o rotated90

becomes:

var args = {
                'src_files' : [image.bmp],
                'dst_suffix' : rotated90,
                'options' : {
                    'rotate': 90,
                    'invert' : undefined 
                }
            }


note: instead of a destination file, it would be better to use a destination file extension, aka suffix.

This way, when multiple source files are passed, we can create the output file by just appending the suffix 



:: ARGUMENT CHECKING ::

Easiest way to do this is to do it on the object itself when a new Bitmap object is created.  
We will need an error helper object to do the reporting and exiting the program.

examples of errors:

bmpt image.bmp                  ( no outfile or functions specified )
bmpt image.bmp --rotate         ( no degrees argument passed to rotate )
bmpt image.bmp --rotate 90 -o   ( no output file suffix specified ) 


:: BITMAP OBJECT CREATION ::

We create a Bitmap object for each source file, aka for each args['src_file']

What the constructor needs:
- args object above, passed from the arg_parse module after it parses the process.argv array
- transformation functions ( loaded externally and then bound to the object)
- the offset data (external, since it depends on the BMP spec, aka wikipedia)

What it does on initialization:

- checks for necessary fields 
    + if no src_file
    + if no dest_file
    + if transformation array is empty
    + if any one of these isn't present, the Bitmap object will throws an error on initialization and the program will exit

- If all of the fields are present, it runs the initialization code, which means:
    + it reads the headers, palette data, bitmap data

EXAMPLE BITMAP OBJECT

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


:::: TRANSFORM FUNCTIONS ::::

These are in an array that is bound to each object.  The important thing is that each transform func should return 'this' at the end so we can chain them.  That allows each func to run on the results of the last.

:::: WRITING THE OUTPUT ::::


Each bitmap object runs the transformations in its this.transformations array and writes it to a new file using the this.dst_suffix (not going into the details here, but will involve some text manipulation) 

