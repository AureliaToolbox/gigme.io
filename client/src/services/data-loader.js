import {Availability, ListingType, ExperienceLevel, User} from 'models/index';

export class DataLoader {
  datastore;
  load(datastore) {
    this.datastore = datastore;
    let availabilities = JSON.parse(window.dataLoader.availabilities);
    let listingTypes = JSON.parse(window.dataLoader.listingTypes);
    let experienceLevels = JSON.parse(window.dataLoader.experienceLevels);
    availabilities.forEach(avail => {
      this.datastore.addAvailability(new Availability(avail));
    });
    listingTypes.forEach(listingType => {
      this.datastore.addListingType(new ListingType(listingType));
    });
    experienceLevels.forEach(expLevel => {
      this.datastore.addExperienceLevel(new ExperienceLevel(expLevel));
    });
    this.checkLoadUsers();
  }
  checkLoadUsers() {
    if (!window.dataLoader.users) return;
    let users = JSON.parse(window.dataLoader.users);
    users.forEach(user => {
      this.datastore.addUser(new User(user));
    });
  }
}
