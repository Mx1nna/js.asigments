//const BirthYear= 2000;
//const currentYear = 2024;
//let ageOfPerson = currentYear - BirthYear;

// ageOfPerson <= 10
//let isChild =(ageOfPerson <= 10);

// ageOfPerson >=11, ageOfPerson <= 17
  // ageOfPerson is greater than  11 less than17
//let isTeenager =(ageOfPerson >=11) &&(ageOfPerson <=17);

// After 2005. After 2013
// ageOfPerson >=18
//let isAdult = (ageOfPerson >= 18);

//console.log(isChild)
//console.log(isTeenager)
//console.log(isAdult)

//let playerTouchGround = true;

//if(playerTouchGround) {
  //console.log("Player is on the ground.");
  //console.log("Player can jump.");}
//if (!playerTouchGround) {
  //console.log("Player is not touching the ground.");
 // console.log("You cannot jump right now.");}
let playerTouchGround = false;

let playerHasJetpack = true

if(playerTouchGround) {
  //Runs when playerTouchGround = ture;
  console.log("Player is on the ground.");
  console.log("Player can jump.");
}
else if (playerHasJetpack) {
  // Runs when playerTouchGround = ture;
  console.log("Player Jets Away!")
}
else {
  // Runs when playerTouchGround = false && playerHasJetpack = false;
  console.log("Player is not touching the ground.");
  console.log("Player has no jetpack.")
  console.log("You cannot jump right now.");
}
