function showMultiplicationTable(input){
    for(i = 1; i<11; i++ ){
        console.log( input + " * " + i+ " =", i * input)

    }
}
showMultiplicationTable(9)



for (i = 1; i<11 ; i++ ){
var oldtool = (Math.floor(Math.random() * 180) + 20 );

    if (oldtool % 2 ===0){
        console.log(oldtool + " is an even number")
    }else{
        console.log(oldtool + " is an odd number")
    }
}

for (var i = 1; i <= 9; i++)
{
    var num = "";
    for (var j = 0; j < i; j++)
    {
        (num = num + i);
    }
    console.log(num);
}

for (var k = 100; k >= 5; k-=5) {
    console.log(k);
}


