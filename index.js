const attic = require('benkle-attic');
const markdownIt = require('markdown-it');

class PugAdapter extends attic.template.Adapter {
    constructor(directory, options) {
        super(directory, options);
        this.markdown = new markdownIt();
    }

    render(vars) {
        return this.markdown.render(vars);
    }
}

exports.create = function (directory, options) {
    return new PugAdapter(directory, options);
};