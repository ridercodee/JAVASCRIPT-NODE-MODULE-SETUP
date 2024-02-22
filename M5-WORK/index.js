const prompt = require(`prompt-sync`)();

let employee = {};

let firstName = prompt("First Name:");
if(!firstName)  { 
  console.error(`Invalid fist name`);
  process.exit(1); 
}
employee.firstName = firstName;
