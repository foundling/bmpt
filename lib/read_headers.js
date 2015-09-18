#!/usr/bin/env node

var fs = require('fs'),
    bmp_buffer = fs.readFileSync('../img/non-palette-bitmap.bmp'),
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
        'palette_table' : 54
    };
    
bmp_attributes.header = bmp_buffer.readUInt32LE(header_offsets.header);
bmp_attributes.width = bmp_buffer.readUInt32LE(header_offsets.width);
bmp_attributes.height = bmp_buffer.readUInt32LE(header_offsets.height);
bmp_attributes.pixel_depth = bmp_buffer.readUInt32LE(header_offsets.pixel_depth);
bmp_attributes.palette_depth = bmp_buffer.readUInt32LE(header_offsets.palette_depth);
bmp_attributes.raster_size = bmp_buffer.readUInt32LE(header_offsets.raster_size);
//bmp_attributes.raw_data = bmp_buffer.readUInt32LE();


function noColorPalette(buffer, offset) {
    return (buffer.readUInt32LE(offset) === 0); 

}

for (var prop in header_offsets) {
    console.log(prop + ': ' + bmp_attributes[prop]);
}

if (noColorPalette(bmp_buffer, header_offsets.palette_depth)) {
    console.log('no palette data');
}
