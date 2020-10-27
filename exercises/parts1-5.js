"use strict";
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
var spacescraftName = "Determination";
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Part 2: Print Days to Mars
// let milesToMars: number = kilometersToMars*milesPerKilometer;
// let hoursToMars: number = milesToMars/speedMph;
// let daysToMars: number = hoursToMars/24;
// Code an output statement here (use a template literal):
// console.log(`${spacescraftName} will take ${daysToMars} to reach Mars.`);
// Part 3: Create a Function ("getDaysToLocation")
// let getDaysToLocation = function(kilometersAway: number): number {
//     let milesToLocation: number = kilometersAway*milesPerKilometer;
//     let hoursToLocation: number = milesToLocation/speedMph;
//     return hoursToLocation/24;
// };
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// console.log(`${spacescraftName} will take ${getDaysToLocation(kilometersToMars)} to reach Mars.`);
// console.log(`${spacescraftName} will take ${getDaysToLocation(kilometersToTheMoon)} to reach the moon.`);
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    return Spacecraft;
}());
var getDaysToLocation = function (kilometersAway) {
    var milesToLocation = kilometersAway * milesPerKilometer;
    var hoursToLocation = milesToLocation / speedMph;
    return hoursToLocation / 24;
};
printDaysToLocation(location, SpaceLocation_1.SpaceLocation);
void {
    console: console, : .log(this.name + " will take " + this.getDaysToLocation(location.kilometersAway) + " days to reach destination.")
};
// Create an instance of the class here:
var spaceShuttle = new Spacecraft("Determination", 17500);
// console.log(`${spaceShuttle.name} will take ${spaceShuttle.getDaysToLocation(kilometersToMars)} to reach Mars.`);
// console.log(`${spacescraftName} will take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} to reach the moon.`);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
