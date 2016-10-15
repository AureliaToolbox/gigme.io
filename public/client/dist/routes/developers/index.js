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
        function Index(companiesService, listingsService, datastore) {
          _classCallCheck(this, Index);

          this.listings = [];
          this.companies = [];
          this.listingTypes = [];

          this.companiesService = companiesService;
          this.listingsService = listingsService;
          this.datastore = datastore;
        }

        Index.prototype.attached = function attached() {
          var _this = this;

          return Promise.all([this.loadListingTypes(), this.loadCompanies()]).then(function () {
            _this.loadListings();
          });
        };

        Index.prototype.loadListings = function loadListings() {
          var _this2 = this;

          if (!this.listings.length) {
            return this.listingsService.getListings().then(function (result) {
              result.forEach(function (listingJson) {
                var listing = new Listing(listingJson);
                _this2.datastore.addListing(listing);
                _this2.listings.push(listing);
              });
            });
          }
        };

        Index.prototype.loadCompanies = function loadCompanies() {
          var _this3 = this;

          if (!this.companies.length) {
            return this.companiesService.getCompanies().then(function (result) {
              result.forEach(function (companyJson) {
                var company = new Company(companyJson);
                _this3.datastore.companies.push(company);
                _this3.companies.push(company);
              });
            });
          }
        };

        Index.prototype.loadListingTypes = function loadListingTypes() {
          var _this4 = this;

          if (!this.listingTypes.length) {
            this.listingsService.getListingTypes().then(function (result) {
              result.forEach(function (listingTypeJson) {
                var listingType = new ListingType(listingTypeJson);
                _this4.datastore.listingTypes.push(listingType);
                _this4.listingTypes.push(listingType);
              });
            });
          }
        };

        Index.prototype.createCompany = function createCompany() {
          this.companiesService.saveCompany();
        };

        Index.prototype.createListingType = function createListingType() {
          this.listingsService.saveListingType();
        };

        Index.prototype.edit = function edit(item) {
          item.isEditing = true;
        };

        Index.prototype.save = function save(item) {
          this.listingsService.save(item).then(function (result) {
            console.log(result);
          });
        };

        Index.prototype.add = function add() {
          var newListing = new Listing();
          newListing.isEditing = true;
          this.listings.push(newListing);
        };

        return Index;
      }(), _class.inject = [CompaniesService, ListingsService, Datastore], _temp));

      _export('Index', Index);
    }
  };
});
//# sourceMappingURL=index.js.map
