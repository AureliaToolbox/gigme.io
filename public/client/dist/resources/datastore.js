"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var Datastore;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function getId(object) {
    return object.$oid;
  }
  return {
    setters: [],
    execute: function () {
      _export("Datastore", Datastore = function () {
        function Datastore() {
          _classCallCheck(this, Datastore);

          this.companies = [];
          this.listingTypes = [];
          this.listings = [];
        }

        Datastore.prototype.addListing = function addListing(listing) {
          this.setupListing(listing);
          this.listings.push(listing);
        };

        Datastore.prototype.setupListing = function setupListing(listing) {
          if (listing.company_id) {
            listing.company = this.companies.filter(function (company) {
              return getId(company._id) === getId(listing.company_id);
            })[0];
          }
          if (listing.listing_type_id) {
            listing.listing_type = this.listingTypes.filter(function (listingType) {
              return getId(listingType._id) === getId(listing.listing_type_id);
            })[0];
          }
        };

        return Datastore;
      }());

      _export("Datastore", Datastore);
    }
  };
});
//# sourceMappingURL=datastore.js.map
