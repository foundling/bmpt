function usage() {
    console.log('\n');
    console.log('USAGE: btransform file1.bmp -o <outfile extension> [file2.bmp] [...] <options>');
    console.log('Options: ');
    console.log('\t--rotate, -r');
    console.log('\t--invert, -i');
    console.log('\n');
    process.exit(1);
}

module.exports = usage;
