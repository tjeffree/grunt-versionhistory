# grunt-versionhistory

**Save latest version history in package.json**

## Installation

Install npm package, next to your project's `Gruntfile.js` file:

    npm install https://github.com/tjeffree/grunt-versionhistory --save-dev

Add this line to your project's `Gruntfile.js`:

    grunt.loadNpmTasks('grunt-versionhistory');


## Usage

To add the current version to the version history:
```
$ grunt add_version
```

## Configuration

This shows all the available config options with their default values.

```js
add_version: {
  options: {
    packageFile: 'package.json'
  }
}
```
