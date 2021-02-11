// AGE CHECK EXERCISE 129

let ageExe = Number(prompt("How old are you?"));  // all in one 

if(ageExe <= 0 ) {
    console.log("You are still in the womb");
}
    if( ageExe == 21 ) {
    console.log("Happy 21st Birthday!!");

    } 
    if( ageExe % 2 > 0 ) {
        console.log("Your age is odd"); 
    } 
    
                                   //  SQUARE NUMBER 


    let squnum = (Math.sqrt(ageExe));
alert(squnum);
    let squ = !(Math.sqrt(ageExe) + '').includes('.')  

     if(squ === true) {
         alert(squ);
        console.log("Age square root " + squnum)

     } else {    
         alert(squ); 
        console.log('My age ' + ageExe)  
     }
    
    