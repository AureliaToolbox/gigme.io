'use strict';

System.register(['aurelia-http-client'], function (_export, _context) {
  "use strict";

  var HttpClient, _class, _temp, ListingsService;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      _export('ListingsService', ListingsService = (_temp = _class = function ListingsService(httpClient) {
        _classCallCheck(this, ListingsService);

        this.http = httpClient.configure(function (x) {
          x.withHeader('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content);
        });
      }, _class.inject = [HttpClient], _temp));

      _export('ListingsService', ListingsService);
    }
  };
});
//# sourceMappingURL=jobs.js.map
