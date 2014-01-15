/*
 * Add version to version history
 *
 * grunt add_version
 *
 * @author Tony Jeffree <tjeffree@gmail.com>
 */

module.exports = function(grunt) {

  var DESC = 'Store old version numbers in your package.json';
  grunt.registerTask('versionhistory', DESC, function() {
    
    var UNDEFINED,
        space = "\t",
        versionNumber = null,
        opts = this.options({
            packageFile: 'package.json'
        }),
        pkgSrc = grunt.file.readJSON(opts.packageFile);

    versionNumber = pkgSrc.version;

    if (!versionNumber) {
        grunt.fatal('No version number specified');
        return;
    }

    // Check that the array exists in the package.json
    if (!("versionHistory" in pkgSrc)) {
        pkgSrc.versionHistory = [];
    }

    // Add new version to start of array
    pkgSrc.versionHistory.unshift(versionNumber);

    // Trim the array to the last 10 versions
    if (pkgSrc.versionHistory.length > 10) {
        pkgSrc.versionHistory.pop();
    }

    // Write the file back
    grunt.file.write(opts.packageFile, JSON.stringify(pkgSrc, UNDEFINED, space));
      
    grunt.log.ok('Added ' + versionNumber + ' to version history (in ' + opts.packageFile + ')');

  });

};

