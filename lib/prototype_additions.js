function trimLeftChar(trimChar) {
    var i, stop;
    var s = this.split('');

    for (i=0; i<s.length;i++){
        if (s[i] != trimChar) { 
            stop = i;
            break;
        }
    }
    s.splice(0,i);
    return s.join('');
}

String.prototype.trimLeftChar = trimLeftChar;

module.exports = {
    trimLeftChar : trimLeftChar,
};
