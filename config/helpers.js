var path = require('path');
var zlib = require('zlib');


// Helper functions
var _root = path.resolve(__dirname, '..');

console.log('root directory:', root());

function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1;
}

function gzipMaxLevel(buffer, callback) {
  return zlib['gzip'](buffer, {level: 9}, callback);
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

function rootNode(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return root.apply(path, ['node_modules'].concat(args));
}

function prependExt(extensions, args) {
  args = args || [];
  if (!Array.isArray(args)) { args = [args] }
  return extensions.reduce(function(memo, val) {
    return memo.concat(val, args.map(function(prefix) {
      return prefix + val;
    }));
  }, ['']);
}

function packageSort(packages) {
  // packages = ['polyfills', 'vendor', 'main']
  var len = packages.length - 1;
  var first = packages[0];
  var last = packages[len];
  return function sort(a, b) {
    // polyfills always first
    if (a.names[0] === first) {
      return -1;
    }
    // main always last
    if (a.names[0] === last) {
      return 1;
    }
    // vendor before app
    if (a.names[0] !== first && b.names[0] === last) {
      return -1;
    } else {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
}

function reverse(arr) {
  return arr.reverse();
}

function extendsConf(config, existingConf) {
   return webpackMerge(existingConf, config);
}

exports.reverse = reverse;
exports.hasProcessFlag = hasProcessFlag;
exports.gzipMaxLevel = gzipMaxLevel;
exports.root = root;
exports.rootNode = rootNode;
exports.prependExt = prependExt;
exports.prepend = prependExt;
exports.packageSort = packageSort;

exports.extendsConf = extendsConf;
