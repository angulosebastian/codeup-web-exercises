(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function (radius){
            // TODO: complete this method
            // hint: area = pi * radius^2

            return (Math.PI * Math.pow(circle.radius, 2)); // TODO: return the proper value

        },

        logInfo: function (doRounding) {
            var total = this.getArea();    // TODO: complete this method.
            if (doRounding === true){
                total = Math.round(total);
            }
                console.log("Area of a circle with radius: " + this.radius + ", is: "+ total);


            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
    circle.getArea();

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
    circle.getArea()

})();