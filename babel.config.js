module.exports = {

  "presets": [
  ["es2015", { "modules": false }],
  "stage-2"
],
  "plugins": ["transform-runtime"],
  "comments": false,
  "env": {
  "test": {
    "plugins": [ "istanbul" ],
      "presets": [ ["es2015"] ]
  }
}
}

