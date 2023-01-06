let restaurant = {
  name: "Castaways",
  guestCapacity: 75,
  guestCount: 15,
};

let seating = function (restuarant, party) {
  return restuarant.guestCapacity - restuarant.guestCount >= party
    ? "This party can be seated"
    : "Add to the waitlist";
};

console.log(seating("Castaways", 22));
