/* 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza
instead of printing just the name of the pizza. For each pizza you should
have one line of output containing a simple statement like I like pepperoni
pizza.
 • Add a line at the end of your program, outside the for loop, that states
 how much you like pizza. The output should consist of three or more lines
 about the kinds of pizza you like and then an additional sentence, such as
 I really love pizza!*/

let myfavoritePizzas:string[]=["Margherita Pizza","Pepperoni Pizza","BBQ Chicken Pizza"];
// print name of the pizza.
for(let i=0;i<myfavoritePizzas.length;i++){
    console.log(myfavoritePizzas[i]);
}
//printing names and sentence/message
for(let i =0;i<myfavoritePizzas.length;i++){
    console.log(`I like to eat ${myfavoritePizzas[i]}`);
}
console.log(    `/n The Pizzas come in many varities,such as Pepporni Pizza,
BBQ Chicken Pizza,Macroni Pizza and more with 
toopings and flavours You can get as per your choice,but
I really love pizza!`);