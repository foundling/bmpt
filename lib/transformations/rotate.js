function generate_bitmap(x,y) {

    var bitmap = [];
    var i = 10;
    var j = 10;
    var row;

    for (i = 0; i < x; i++) {
        row = [];
        for (j=0; j < y; j++){ 
            row.push(j); 
        }
        bitmap.push(row);
    }
    return bitmap;
}

function rotate(bitmap) {
    var i,
        j,
        row,
        row_len = bitmap[0].length;
        bitmap_result = [];

    for (i=0; i<row_len; i++) {
        row = [];
        for(j=0;j<row_len; j++) {
            // row.push(bitmap[j][9 - i]);
            row.push(bitmap[9 - j][i]);
            //row.push(bitmap[j][i]);
        }
        bitmap_result.push(row);
    }
    return bitmap_result;
}

module.exports = rotate;

/*
var src = generate_bitmap(10,10);
var r90 = rotate_bitmap(src);
var r180 = rotate_bitmap(rotate_bitmap(src));
console.log(src);
console.log('\n');
console.log(r180);

*/
