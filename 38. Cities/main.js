/*Write a function called describe_city() that accepts the name of
a city and */
function describe_city(nameOfCity, nameOfCountry) {
    return " ".concat(nameOfCity, " is in ").concat(nameOfCountry);
}
;
// 3 cities
var city1 = describe_city("Cape town", "South Africa");
var city2 = describe_city("Dubai", "UAE");
var city3 = describe_city("Hydrabad", "Pakistan");
var city4 = describe_city("Istambul", "Turkey");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
