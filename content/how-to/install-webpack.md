---
title: How to Install webpack?
---

### Pre-requistes

We assume you have `node` and `npm` already installed.

### Global Installation

``` bash
npm install webpack -g
```

The `webpack` command is now available globally.

However, this is not a recommended practice. This locks you down to a specific version of webpack and might fail in projects that use a different version. The next section tells you how to install webpack locally in a project.

### Local Installation

``` bash
npm install webpack --save-dev

npm install webpack@<version> --save-dev
```

If you are using npm scripts in your project, npm will try to look for webpack installation in your local modules for which this installation technique is useful.

```json
"scripts": {
	"start": "webpack --config mywebpack.config.js"
}
```

This is standard and recommended practice.

T> To run the local installation of webpack you can access its bin version as `node_modules/.bin/webpack`


### Bleeding Edge

If you are enthusiastic about using the latest that webpack has to offer (beware - may be unstable), you can install directly from the webpack repository using

``` bash
npm install webpack/webpack#<tagname/branchname>
```
