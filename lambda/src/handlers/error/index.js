const { error } = require('../../services');

module.exports = {
  canHandle() {
    return true;
  },
  handle: error,
};
