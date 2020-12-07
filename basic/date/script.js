let data = new Date();

console.log("hours "+ data.getHours());
console.log(data)

let newDate = new Date(Date.parse("March 10, 2018"));

console.log(newDate);
console.log(Date.parse("March 10, 2018"));

let dateBrazil = data.getDate() + "/"+ (data.getMonth()+1) + "/" +data.getFullYear();
console.log(dateBrazil);

console.log(data.setHours(data.getHours()+2));
console.log(data)