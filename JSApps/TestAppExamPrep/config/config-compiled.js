'use strict';

var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'crowd-share'
    },
    port: 3100,
    db: 'mongodb://localhost/crowd-share-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'crowd-share'
    },
    port: 3100,
    db: 'mongodb://localhost/crowd-share-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'crowd-share'
    },
    port: 3100,
    db: 'mongodb://localhost/crowd-share-production'
  }
};

module.exports = config[env];

//# sourceMappingURL=config-compiled.js.map