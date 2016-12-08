[![Build Status](https://travis-ci.org/labs-js/turbo-git-log.svg?)](https://travis-ci.org/labs-js/turbo-git-log)
[![codecov](https://codecov.io/gh/labs-js/turbo-git-log/branch/develop/graph/badge.svg)](https://codecov.io/gh/labs-js/turbo-git-log)
[![npm](https://img.shields.io/npm/v/turbo-git-log.svg?style=flat)](https://www.npmjs.com/package/turbo-git-log)
[![Turbo Commit](https://img.shields.io/badge/Turbo_Commit-on-3DD1F2.svg)](https://github.com/labs-js/turbo-git/blob/master/CONVENTION.md)
[![bitHound](https://www.bithound.io/github/labs-js/turbo-git-log/badges/score.svg)](https://www.bithound.io/github/labs-js/turbo-git-log)
[![Code Climate](https://codeclimate.com/github/labs-js/turbo-git-log/badges/gpa.svg)](https://codeclimate.com/github/labs-js/turbo-git-log)

# turbo-git-log

**Turbo git log command** -> Semantic git logs according your commit convention.

#### This lib is part of the [Turbo Git](https://github.com/labs-js/turbo-git) -> Making your git even more awesome 😎🙌

## how to use it:

```
npm install turbo-git-log
```

And then from the code anytime that you want to call the turbo git log:

```
require('turbo-git-log')()
```

This will print out the command output with the **Turbo Log**. The colors will be apply only if the commit follow the obtained commit convention. 
> Note: The commit convention will be obtained by the `.turbogit` config file on the git repo. If this file is not on your repo this will use the default convention got by the package [turbo-git-config](https://github.com/labs-js/turbo-git-config/)


## What do I get? 

> Well now you can see your git log with semantics commits. So.. the colors on the git log have sense now:

<img alt="turbo-git-log" src="https://github.com/labs-js/turbo-git-log/blob/develop/assests/git-log-sample.png" width="500">

- This example is using the [turbo-commit](https://github.com/labs-js/turbo-git/blob/develop/CONVENTION.md) convention
