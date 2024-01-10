c
   
   
   
   let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
   let dog_names = ["Max", "HAS", "PuRple", "dog"];
   
   const dognamedirectory = [piggy, joe, mia, honey, spot, max, peter, lulu]
       for (let i = 0; i < dognamedirectory.length; i++) {
           if (dognamedirectory[i] === nameToCheck) {
               console.log("Matched " + dognamedirectory[i]);
               return; ("Matched Dog Name")
           }
       }
       console.log("No Matches");
   }
   
   








   function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        arr.splice(i, 1, "even index");
    }
    return arr;
}


const originalArr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
const modifiedArr = replaceEvens(originalArr);

console.log(modifiedArr);
