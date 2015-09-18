var offsetData = {
        'header': 14,
        'width': 18,
        'height': 22,
        'pixel_depth': 28,
        'palette_depth': 46, // found this in the wiki article  
        'raster_size': 34,
        'palette_table' : 54,
        'palette_data': 256*4,// # of colors * byte per color 
};

module.exports = {
    offsetData: offsetData,
};
