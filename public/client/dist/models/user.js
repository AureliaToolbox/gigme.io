'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var User;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('User', User = function User(data) {
        _classCallCheck(this, User);

        this._id = '';
        this.name = '';
        this.image = '';
        this.username = '';

        Object.assign(this, data);
      });

      _export('User', User);
    }
  };
});
//# sourceMappingURL=user.js.map
