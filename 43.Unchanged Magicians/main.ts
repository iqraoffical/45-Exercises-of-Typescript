/*
Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.
*/
let magician:string[]=['Harry Potter','Hermione','Ron Weasley','Albus Dumbledeore'];
   
function copyArry(arr:string[]){

 return  [...arr]
}

function make_great(magicianArry:string[]){
    for (let i=0;i<magicianArry.length; i++){
     magician[i] ='the Great ' + magicianArry[i]
    }
}
function show_magicians(Magicians:string[]){
magician.forEach(element => {
        console.log(element);
    });
}
const copyMagicianArry =copyArry(magician);
 make_great(magician);
show_magicians(magician);