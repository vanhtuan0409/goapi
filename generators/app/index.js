const Generator = require("yeoman-generator");

module.exports = class GoAPIGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  method1() {
    this.log("Method 1 just ran");
  }
};
