'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var Job;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('Job', Job = function Job(data) {
        _classCallCheck(this, Job);

        this._id = '';
        this.title = '';
        this.description = '';

        Object.assign(this, data);
      });

      _export('Job', Job);
    }
  };
});
//# sourceMappingURL=job.js.map
