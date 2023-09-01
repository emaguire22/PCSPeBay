let OGstring = document.querySelector(".pcih").innerHTML;
let result = OGstring
.replace("304", "New")
.replace("319", "New–open box")
.replace("305", "Manufacturer Refurbished")
.replace("309", "Seller Refurbished")
.replace("310", "Used")
.replace("311", "Not Working")
.replace("315", "Used Acceptable")
.replace("316", "Used Good")
.replace("317", "Used Like New")
.replace("318", "Used Very Good");

document.querySelector(".pcih").innerHTML = result;
