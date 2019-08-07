// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
// console.log("the value of the confirm is " + weShouldDeleteStuff)
// if (weShouldDeleteStuff) {
//     // delete all the things...
//     alert('we are deleting everything')
// } else {
//     alert("Operation Canceled!");
// }
//
// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }

// var lights = prompt('what color is the light');
//
// if (lights === "red"){
//     alert("stop");
// } else if (lights === "yellow"){
//     alert("slow down");
// } else if(lights === "green"){
//     alert("Go!!");
// }

// function evaluateTrafficLight(lightColor){
//     if(lightColor === "green") {
//         return "keep driving";
//     } else if(lightColor === "yellow"){
//         return "proceed with caution";
//     }else if (lightColor === "red"){
//         return "stop";
//     }else{
//
//     }
// }

var evaluteTrafficLight = prompt("what color is the light?");

switch (evaluteTrafficLight) {
    case "green":
        alert("Go")
        break;
    case "yellow:":
        alert("slow down")
        break;
    case "red":
        alert("Stop")
        break;
    default:
        alert(evaluteTrafficLight + "just go man")
        break;
}



