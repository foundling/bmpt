#!/usr/bin/env node

var fs = require('fs'),
//    bmp_buffer = fs.readFileSync('../img/non-palette-bitmap.bmp'),
    bmp_buffer = fs.readFileSync('../img/palette-bitmap.bmp'),
    bmp_attributes = {},    
    img_dir = 'img',
    header_offsets = {
        'header': 14,
        'width': 18,
        'height': 22,
        'pixel_depth': 28,
        'palette_depth': 46, // found this in the wiki article  
        'raster_size': 34,
        'palette_table' : 54,
        'raster_data': 256*4,// # of colors * byte per color 
    },
    palette_data = [],
    color,
    byte,
    i,
    j;

// read the whole color palette, one byte at a time
// 256 colors, each is comprised of 4 bytes, rgba. a is always 0.
//
// potentially confusing point: 
// I'm adding 5 to 256 so we can see beyond the end of the palette. In the BMP
// article, it says the palette table is padded at the end, and then the following
// section is the raw bitmap data.  This is just to show the end of the palette table
// and the beginning of the raw bitmap data (the 0's turn back into color data).
for (i = 0; i < (256)*4; i+=4) {
    var color = [];
    for (j = 0; j < 4; j++) {
        byte = bmp_buffer.readUInt8(54 + i + j).toString();
        color.push(byte);
    }
    palette_data.push(color);
}

console.log(palette_data);
