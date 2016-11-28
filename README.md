[![Build Status](https://travis-ci.org/labs-js/turbo-git-log.svg?)](https://travis-ci.org/labs-js/turbo-git-log)
[![codecov](https://codecov.io/gh/labs-js/turbo-git-log/branch/develop/graph/badge.svg)](https://codecov.io/gh/labs-js/turbo-git-log)
[![npm](https://img.shields.io/npm/v/turbo-git-log.svg?style=flat)](https://www.npmjs.com/package/turbo-git-log)
[![Turbo Commit](https://img.shields.io/badge/Turbo_Commit-on-3DD1F2.svg)](https://github.com/labs-js/turbo-commit/blob/master/CONVENTION.md)
[![bitHound](https://www.bithound.io/github/labs-js/turbo-git-log/badges/score.svg)](https://www.bithound.io/github/labs-js/turbo-git-log)
[![Code Climate](https://codeclimate.com/github/labs-js/turbo-commit/badges/gpa.svg)](https://codeclimate.com/github/labs-js/turbo-git-log)

# turbo-git-log

Turbo-git log command. Semantic git logs according your commit convention.

## how to use it:

```
npm i turbo-git-log
```

And then from the code anytime that you want to call the turbo git log:

```
require('turbo-git-log')()
```

## TODO

- I'm thinking that this should take the turbo-git-config by param and Not use it iternally like is doing now.
