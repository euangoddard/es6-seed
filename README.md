# es6-seed

Seed project to write code using ES6.

This project is designed to get you up and running writing ES6 code and being able to play with new language features.
It uses [babel](https://babeljs.io/) to transpile ES6 code to ES5, and  uses [gulp](http://gulpjs.com/) as a build system.

There are also a few tasks which might come in handy for developing your next javascript project.

## Getting started

Download the seed project:

`$ curl -O https://codeload.github.com/euangoddard/es6-seed/zip/master`

Unzip it and rename it to something sensible

`$ unzip master && mv es6-seed-master project`

Set up all the gulp dependencies

```
$ cd project
$ npm install --save-dev .
```

## Building ES6 code to ES5

In the project directory, run gulp:

`$ gulp`

This will transpile all files with the `.es6` suffix in `src` to `js` files in `dist`, e.g. `test.es6` will be transpiled to `test.js`.

If you want to watch for changes, run:

`$ gulp watch`

Any changes you make to `es6` files in `src` will trigger a build.

## Other goodies

If you want to run a webserver to check out the result of your hacking, start the live reloading webserver:

`$ gulp webserver`

and point your browser at `http://localhost:8000`
