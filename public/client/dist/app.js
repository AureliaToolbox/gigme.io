'use strict';

System.register(['aurelia-framework', 'aurelia-router', './session', 'bootstrap', 'bootstrap/css/bootstrap.css!'], function (_export, _context) {
  "use strict";

  var inject, Router, Session, _dec, _class, App, User;

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
    }, function (_session) {
      Session = _session.Session;
    }, function (_bootstrap) {}, function (_bootstrapCssBootstrapCss) {}],
    execute: function () {
      _export('App', App = (_dec = inject(Router, Session), _dec(_class = function () {
        function App(router, session) {
          _classCallCheck(this, App);

          this.router = router;
          this.session = session;
          this.router.configure(function (config) {
            config.title = 'Aurelia';
            config.map([{ route: ['', 'home'], moduleId: './home', nav: true, title: 'Home' }]);
          });
        }

        App.prototype.attached = function attached() {
          var thisUser = document.querySelector('#user_info');
          if (thisUser) {
            var content = thisUser.textContent;
            this.session.currentUser = new User(content.split('|')[0], content.split('|')[1], content.split('|')[2]);
            console.log(this.session.currentUser);
          }
        };

        return App;
      }()) || _class));

      _export('App', App);

      User = function User(username, uid, image) {
        _classCallCheck(this, User);

        this.username = username;
        this.uid = uid;
        this.image = image;
      };
    }
  };
});
//# sourceMappingURL=app.js.map
