![grunt-kahvesi](http://cl.ly/image/1g2U2c2f1u10/kahvesi.jpg)

`grunt-kahvesi` is an extremely simple grunt plugin for generating [istanbul](https://github.com/gotwarlost/istanbul) + [mocha](http://visionmedia.github.io/mocha/) coverage reports. You simply write your mocha tests as you normally would and `grunt-kahvesi` will run them through the `istanbul cover` command in order to generate your code coverage report.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-kahvesi --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-kahvesi');
```

### Usage Example

Let's generate an istanbul coverage report based on the all the mocha tests using standard globbing. If all goes according to plan, you should end up with an html coverage report, accessible at `coverage/index.html`.

```js
grunt.initConfig({
  kahvesi: {
    src: [ 'test/**/*_test.js' ]
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

version | details
--------|--------
v0.1.0  | initial release
