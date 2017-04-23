// this file isn't transpiled. use commonjs and es5

// register babel to transpile before our tersts run
require('babel-register')();

// disable webpack features that mocha doesn't understand
require.extensions['.css'] = function() {};