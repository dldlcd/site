

let Money = 100000;
let Rate = 2.4/100;
let Interest = Money * Rate;
let Sum = Money + Interest;

for(i=1; i<6; i++) {
    console.log( i + " Year:  money= "  +  Money + " interest: " + Interest + " Sum: " + Sum);
    Money += Interest;
    Interest = Math.floor(Money*Rate);
    Sum += Interest;
}





    
   

