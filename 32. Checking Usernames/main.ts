/* 32.Checking Usernames: Do the following to create a program that simulates how websites ensure 
that everyone has a unique username.

 • Make a list of five or more usernames called current_users.

 • Make another list of five usernames called new_users. Make sure one or two of the new usernames
  are also in the current_users list.

 • Loop through the new_users list to see if each new username has already been used. 
 If it has, print a message that the person will need to enter a
 new username. If a username has not been used, print a message saying that the username is available.

 • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

//  current_users and new_users list.
let currentUsers: string[] = [
  "Iqra",
  "Salman",
  "Bilal",
  "Bismillaha",
  "Fatima",
];
let new_Users: string[] = ["Maira", "Bilal", "Iqra", "Areeba", "Jamal"];
// Convert currentUsers to lowercase for case-insensitive comparison
let currentUsersLower: string[] = currentUsers.map((user) =>
  user.toLowerCase()
);
//for loop
for (let newUser of new_Users) {
  if (currentUsersLower.includes(newUser.toLowerCase())) {
    console.log(
      `Sorry the username'${newUser}' is already taken.Please choose a different username.`
    );
  } else {
    console.log(`The username '${newUser}' is available.`);
  }
}

