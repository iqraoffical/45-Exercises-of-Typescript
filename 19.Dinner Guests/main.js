"use strict";
let Guest_List = ["Imran Khan", "Nawaz sharif", "Asif Ali Zardari"];
// for (let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
let absent_Guest = "Imran Khan";
let new_Guest = "Kamran Tessori";
Guest_List[0] = new_Guest;
// for (let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
// console.log(`Mr.${absent_Guest} is not comming to the party.`);
// console.log("Good News! We find big table so we are inviting 3 more guests.");
Guest_List.unshift("Sir Zia Khan");
Guest_List.splice(2, 0, "Maryam Nawaz");
Guest_List.push("Bilawal Bhutto");
// for (let i = 0; i < Guest_List.length; i++) {
//   console.log("Dear Mr. " + Guest_List[i] +
//       ",\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n"
//   );
// }
console.log(
// "\nSorry we can not arrange big table,only Two people will be invited."
);
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    // console.log(`Sorry Mr.${remove_Guest}, You are not invited for Dinner.`);
}
// for (let i = 0; i < Guest_List.length; i++) {
//   console.log(
//     "Dear Mr. " +
//       Guest_List[i] +
//       ",\n\n you  are still invited.\n\nThank You!\n\n"
//   );
// }
Guest_List.splice(0, 2);
console.log(Guest_List);
//Exercise 19
// print a message indicating the number of people you are inviting to dinner.
console.log(`Total numberr of guest are: ${Guest_List.length}`);
