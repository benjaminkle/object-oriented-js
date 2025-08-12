// Part 1: Setting up classes
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  // Part 1.2: Constructor and methods for getTotalValue() and toString()
  getTotalValue() {
    return this.price * this.quantity;
  }

  toString() {
    return `Product: ${this.name}, Price: $${this.price.toFixed(
      2
    )}, Quantity: ${this.quantity}`;
  }
  // Part 3: Static Methods and Properties
  static applyDiscount(products, discount) {
    products.forEach((product) => {
      product.price -= product.price * discount;
    });
  }
}
// Part 2: Adding Inheritance (subclass Perishable Product)
class PerishableProduct extends Product {
  constructor(name, price, quantity, expirationDate) {
    super(name, price, quantity); // Call parent constructor
    this.expirationDate = expirationDate;
  }

  // Override toString to add expiration date
  toString() {
    return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
  }
}
// Part 4: Store Management
// Part 5: Testing the system
