let filteredNames = []

for (let customer of customers){
    // if (customer.name.first !== 'ann' || customer.name.first !=='harper' || customer.name.first !== 'tammy' || customer.name.first !== 'addison') 
    // {
    //     filteredNames.push(customer)
    //     console.log(customer)
    // }
//select target element (landing zone)
let landingZone = document.querySelector('.customer')
//create ul
let list = document.createElement('ul')
//append ul to landing zone in dom
landingZone.appendChild(list)
console.log(list)
//create an li
let listItem = document.createElement('li')
//append to ul 
list.appendChild(listItem)
console.log(listItem)
//create img
let imgCustomer = document.createElement('img')
imgCustomer.src = customer.picture.thumbnail
console.log(imgCustomer)
listItem.appendChild(imgCustomer)
// create name title h3
let nameTitle = document.createElement('h3')
nameTitle.innerText = customer.name.first + customer.name.last
//append to img
listItem.appendChild(nameTitle)
console.log(nameTitle)
//create email address p
let email = document.createElement('h5')
email.innerText = customer.email
//append to li
listItem.appendChild(email)
console.log(email)
//create mailing address p
let address = document.createElement('p')
address.innerText = customer.location.street + customer.location.city + customer.location.state + customer.location.postcode
//append to li
listItem.appendChild(address)
console.log(address)
//create dob p
let dob = document.createElement('p')
dob.innerText = customer.dob
//append to li
listItem.appendChild(dob)
console.log(dob)
//create customer since p
let tenure = document.createElement('p')
tenure.innerText = "Customer since: " + customer.registered
//append to li
listItem.appendChild(tenure)
console.log(tenure) 
}


