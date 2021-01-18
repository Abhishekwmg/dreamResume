const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const address = document.getElementById('address');
const city = document.getElementById('city');
const zipcode = document.getElementById('zipcode');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const submit = document.getElementById('submit');

console.log(submit);



 form.addEventListener('submit', (event) => {
         event.preventDefault();

     validate();
 })



