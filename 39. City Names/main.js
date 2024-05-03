/*City Names: Write a function called city_country() that takes in the name
of a city and its country.*/
function city_country(city, country) {
    return "\"".concat(city, ",").concat(country, "\"");
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Dubai", "UAE"));
console.log(city_country("Riyaz", "Saudi Aarbia"));
