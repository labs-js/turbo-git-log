#!/usr/bin/env node
var program = require('commander');

program
    .version(require('../package.json').version)
    .parse(process.argv);

require('./log');