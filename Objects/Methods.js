let restaurant = {
  name: "Castaways",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    return this.guestCapacity - this.guestCount >= partySize;
  },
  //Challenge Area
  seatParty: function (partySize) {
    this.guestCount += partySize;
  },
  removeParty: function (partySize) {
    this.guestCount -= partySize;
  },
};

let status = restaurant.checkAvailability(4);
console.log(status);

status = restaurant.checkAvailability(76);
console.log(status);

restaurant.seatParty(12);
console.log(restaurant.guestCount);

restaurant.removeParty(2);
console.log(restaurant.guestCount);
