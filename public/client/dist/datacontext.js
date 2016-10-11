'use strict';

System.register(['aurelia-http-client', 'aurelia-framework'], function (_export, _context) {
  "use strict";

  var HttpClient, inject, client, DataContext;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      client = new HttpClient().configure(function (x) {
        x.withHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
      });

      _export('DataContext', DataContext = function () {
        function DataContext() {
          _classCallCheck(this, DataContext);
        }

        DataContext.prototype.getNewsItems = function getNewsItems() {
          return client.get('/news_items.json');
        };

        DataContext.prototype.likeCard = function likeCard(card) {
          return client.createRequest('/news_items/like.json').asPost().withHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content')).withHeader('Content-Type', 'application/json').withContent(card).send();
        };

        return DataContext;
      }());

      _export('DataContext', DataContext);
    }
  };
});
//# sourceMappingURL=datacontext.js.map
