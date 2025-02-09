//Task 1 - Object Properties
let customer = //declaring the customer profile with multiple properties
    {
        name: "John Doe",
        age: 35,
        email: "john.doe@email.com"
    }; 
    console.log(`Customer's Name: ${customer.name}`); // printing customer name
    console.log(`Customer's Age: ${customer.age}`); // printing customer age
    console.log(`Customer's Email: ${customer.email}`); // printing customer email
    
//Task 2 - Order Details 
let order = //declaring an object with multiple properties
    {
        orderId: 12345,
        totalAmount: 150,
        status: "Processing",
        displayOrder() //creating a method that will log the details with 'this'
        {return console.log(`Order ID: ${this.orderId} | Total Amount: $${this.totalAmount} | Status: ${this.status}`)}
    }
order.displayOrder(); //calling the method to log the details

//Task 3 - Shopping Cart
let cartItems = ["Pasta", "Milk", "Sauce"]; //declaring an array
console.log(`Initial Cart Items: ${cartItems}`); // Lists the first few items
cartItems.push("Chicken"); // Adding another item using push()
cartItems.pop(); //removing the last item in the array
cartItems.unshift("Noodles"); //adding another item to the beggining of the array
console.log(`Final Cart Items: ${cartItems}`); //prints updated list of cartItems


