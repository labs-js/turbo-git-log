#!/usr/bin/env node
(function () {
    'use strict';
    var childProcess = require('child_process'),
        configParser = require('turbo-git-config').parser,
        utils = require('turbo-git-config').utils,
        colors = require('colors/safe');

    const commitConf = configParser.getCommitConf()

    return void execute()
        .then(parse)
        .then(output)
        .catch(err => {
            console.error(err)
        })

    function execute () {
        return new Promise((resolve, reject) => {
            const cmd = configParser.getLogCommand()
            childProcess.exec(cmd, (err, log) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(log)
                }
            })
        })
    }

    function parse (log) {

        return log
            .split('\n')
            .map(line => {
                if (line[0] === ' ') {
                    const type = findType(line)
                    if (type) {
                        return colors[type.color](line)
                    }
                }
                return line
            })

        function findType (line) {
            const tag = matchType(line)
            return tag && commitConf.find(type => type.tag === tag)
        }

        function matchType (line) {
            const match = /(\[[^\]]+\])/.exec(line)
            return match && match[1]
        }
    }

    function output (lines) {
        lines.forEach(line => {
            console.log(line)
        })
    }

}());
