let restaurant = {
  name: "Castaways",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    return restaurant.guestCapacity - restaurant.guestCount >= partySize;
  },
};

let status = restaurant.checkAvailability(4);
console.log(status);

status = restaurant.checkAvailability(76);
console.log(status);
