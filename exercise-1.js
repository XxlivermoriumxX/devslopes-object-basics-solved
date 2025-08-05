/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //
const oliveGarden = {
  name: "Olive Garden",
  cuisines: ["pasta", "soup", "breadsticks"],
  numberOfStars: 3,
  favorited: true
}

oliveGarden.address = "123 Bear Valley Rd";
oliveGarden.zipcode = 12345;
oliveGarden.acceptsReservations = false;

oliveGarden.numberOfStars += 1;
oliveGarden.favorited = false;
oliveGarden.cuisines.push("salad");

function retrieveProperty(obj, str) {
  if (obj[str] == undefined){
    return "The information does not exist";
  }
  else{
    return obj[str];
  }
}

console.log("Cuisines: " + retrieveProperty(oliveGarden, "cuisines"))
console.log("Favorited: " + retrieveProperty(oliveGarden, "favorited"))
console.log("Name: " + retrieveProperty(oliveGarden, "name"))
console.log("Nickname: " + retrieveProperty(oliveGarden, "nickName"))
console.log("State: " + retrieveProperty(oliveGarden, "state"))