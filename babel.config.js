module.exports = {
  "presets": [
    ["env", {
      "modules": false
    }],
    "stage-2"
  ],
  "env": {
    "test": {
      "presets": ["env", "stage-2"]
    }
  },
  "plugins": ["transform-runtime"]
}
