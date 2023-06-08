/* Declaration:
I declare that this test is my own work in accordance with Seneca Academic Policy. No part of this
assignment has been copied manually or electronically from anybody else or distributed to other
students. 
Name: Xuan Khang Huynh (Cris Huynh) 
Student ID: 105444228
 */

// TEST1.JS

function calcPay(number, price, province, discount = 0) 
{
    var tax;

    if (province == "Ontario") 
    {
      tax = 13;
    } 
    else if (province == "Quebec") 
    {
      tax = 15;
    } 
    else 
    {
      tax = 20;
    }
  
    if (discount < 0 || discount > 100)
    {
      console.log("===== Cris's Shop =====");
      console.log("Discount error. Program terminates.");
      return;
    }
  
    var totalAmount = (number * price) * (1 - discount / 100);
    var taxAmount = totalAmount * tax / 100;
    var payment = totalAmount + taxAmount;
  
    console.log("===== Cris's Shop =====");

    if (discount > 0) 
    {
      console.log("You need to pay: $" + payment.toFixed(2));
      console.log("when you buy", number, "items at the price of $" + price, "in", province, "with a discount of", discount + "%.");
      console.log("\n");
    } 
    else
    {
      console.log("You need to pay: $" + payment.toFixed(2));
      console.log("when you buy", number, "items at the price of $" + price, "in", province, "at regular price.");
      console.log("\n");
    }
  }
  
  calcPay(2, 20, "Ontario", 30);
  calcPay(2, 20, "Quebec");
  calcPay(2, 20, "Alberta");
  calcPay(2, 20, "ABC", 300);
  