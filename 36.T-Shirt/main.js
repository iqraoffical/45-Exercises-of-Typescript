/* Write a function called make_shirt() that accepts a size and the
 text of a message that should be printed on the shirt. The function should print
 a sentence summarizing the size of the shirt and the message printed on it.*/
// Call the function.
function make_shirt(size, text) {
    console.log("creating a ".concat(size, "  t-shirt with the message \"").concat(text, "\" printed on it. "));
}
make_shirt("medium", "Code is Life");
