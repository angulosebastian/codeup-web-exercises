var i = 1;
while (i < 65536){
    i= i*2;
    console.log(i);
}

var allCones = Math.floor(Math.random() * 50) + 50;

do{
    var conesordered =Math.floor(Math.random() * 5) + 1;
    if (allCones >= conesordered){
        allCones = allCones - conesordered;
        if (allCones === 0 ){
            console.log(allCones, "All out of cones")
        } else {
            console.log(allCones , "yes i can sell you these cones");
        }
   } else {
       console.log(allCones,  "sorry i cant sell you this cone")
    }
} while(allCones > 0);
