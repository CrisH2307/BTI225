/* 
Declaration:
I declare that this test is my own work in accordance with Seneca Academic Policy. No part of this 
assignment has been copied manually or electronically from anybody else or distributed to other students. 

Name: Xuan Khang Huynh(Cris Huynh) Student ID: 105444228
*/
var customer = 
{
    name: "",
    item: "",
    num: 0,
    price: 0 ,
    taxable: Boolean
};

var customer1 = Object.create(customer); 
customer1.name = "Faris Burch",
customer1.item = "Bread",
customer1.num = 2,
customer1.price = 2.99,
customer1.taxable = false;


var customer2 = Object.create(customer);
customer2.name = "Julius Cross",
customer2.item = "Shirt",
customer2.num = 1,
customer2.price = 30.95,
customer2.taxable = true;

var customer3 = Object.create(customer);
customer3.name = "Eloise Bonner",
customer3.item = "pen",
customer3.num = 10,
customer3.price = 2.5,
customer3.taxable = true;

var customer4 = Object.create(customer);
customer4.name = "Roy Macias",
customer4.item = "Egg",
customer4.num = 2,
customer4.price = 2.99,
customer4.taxable = false;

console.log("==== Cris's Store ====");
console.log();

function getTotal(customer)
 {
    var totalWithoutTax = customer.price * customer.num;
    var totalAmount = 0.0;
  
    if (customer.taxable) 
    {
      totalAmount = totalWithoutTax * 1.13;
    } 
    else
    {
      totalAmount = totalWithoutTax;
    }
  
    return totalAmount;
  }

  function printInfo(customers) 
  {
    for (var i = 0; i < customers.length; i++) 
    {
      console.log(customers[i].name + " purchased " + customers[i].num + " " + customers[i].item +  "(s) at the price of $" + customers[i].price + ".");
      console.log(customers[i].name + " spent $" + getTotal(customers[i]).toFixed(2) + " in total.");
      console.log();
    }
  }

var customers = [customer1, customer2, customer3, customer4];

printInfo(customers);

var totalSales = 0;
customers.forEach(function(customer) // For loop
{
  totalSales += getTotal(customer);
}); 

/* for (let cus of customers)
{
    totalSales += getTotal(cus);
} */

var profit = totalSales * 0.3;

console.log("Store Sales: $" + totalSales.toFixed(2));
console.log("Store Profit: $" + profit.toFixed(2));
  
