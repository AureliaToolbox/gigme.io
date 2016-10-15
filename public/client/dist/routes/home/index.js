'use strict';

System.register(['aurelia-framework', 'aurelia-router', '../../services/session'], function (_export, _context) {
  "use strict";

  var inject, Router, Session, _dec, _class, Index, User;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_servicesSession) {
      Session = _servicesSession.Session;
    }],
    execute: function () {
      _export('Index', Index = (_dec = inject(Router, Session), _dec(_class = function () {
        function Index(router, session) {
          _classCallCheck(this, Index);

          this.router = router;
          this.session = session;
          this.router.configure(function (config) {
            config.title = 'Aurelia';
            config.map([{ route: ['', 'home'], moduleId: './home', nav: true, title: 'Home' }]);
          });
        }

        Index.prototype.attached = function attached() {
          var thisUser = document.querySelector('#user_info');
          if (thisUser) {
            var content = thisUser.textContent;
            this.session.currentUser = new User(content.split('|')[0], content.split('|')[1], content.split('|')[2]);
          }
        };

        return Index;
      }()) || _class));

      _export('Index', Index);

      User = function User(username, uid, image) {
        _classCallCheck(this, User);

        this.username = username;
        this.uid = uid;
        this.image = image;
      };
    }
  };
});
//# sourceMappingURL=index.js.map
