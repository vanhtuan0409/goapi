const Generator = require("yeoman-generator");
const path = require("path");

module.exports = class GoAPIGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.rootUrl = this._getRepoUrl();
  }

  method1() {
    this.log(this.rootUrl);
  }

  _getRepoUrl() {
    const destinationPath = process.env.LOCAL_PATH || this.destinationRoot();
    const gopath = process.env.GOPATH;
    const shouldRemovePath = `${gopath}${path.sep}src`;
    let repoUrl = "";
    if (destinationPath.includes(shouldRemovePath)) {
      repoUrl = destinationPath.replace(shouldRemovePath, "");
      repoUrl = repoUrl[0] === path.sep ? repoUrl.substr(1) : repoUrl;
    }
    return repoUrl;
  }
};
