'use strict';

System.register(['services/users', 'models/index', 'resources/datastore'], function (_export, _context) {
  "use strict";

  var UsersService, User, Datastore, _class, _temp, Index;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_servicesUsers) {
      UsersService = _servicesUsers.UsersService;
    }, function (_modelsIndex) {
      User = _modelsIndex.User;
    }, function (_resourcesDatastore) {
      Datastore = _resourcesDatastore.Datastore;
    }],
    execute: function () {
      _export('Index', Index = (_temp = _class = function () {
        function Index(usersService, datastore) {
          _classCallCheck(this, Index);

          this.developers = [];

          this.usersService = usersService;
          this.datastore = datastore;
        }

        Index.prototype.activate = function activate() {
          var _this = this;

          return this.usersService.getAll().then(function (result) {
            _this.developers = result;
          });
        };

        return Index;
      }(), _class.inject = [UsersService, Datastore], _temp));

      _export('Index', Index);
    }
  };
});
//# sourceMappingURL=index.js.map
