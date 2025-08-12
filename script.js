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
console.log(
  "---- Testing two sample instances with PerishableProduct class ----"
);

const example1 = new PerishableProduct("Egg", 0.7, 12, "2025-09-02");
const example2 = new PerishableProduct("Milk", 1.5, 10, "2025-09-12");
console.log(example1);
console.log(example2);

// Part 4: Store Management
class Store {
  constructor() {
    this.inventory = [];
  }

  addProduct(product) {
    this.inventory.push(product);
  }

  getInventoryValue() {
    return this.inventory.reduce(
      (total, product) => total + product.getTotalValue(),
      0
    );
  }

  findProductByName(name) {
    return (
      this.inventory.find(
        (product) => product.name.toLowerCase() === name.toLowerCase()
      ) || null
    );
  }
}
// Part 5: Testing the system
// Create 5 products in Total (2 products with subclass)
const p1 = new Product("Mango", 3.5, 50);
const p2 = new Product("Banana", 0.9, 100);
const p3 = new Product("Whole Organic Chicken", 11.0, 30);
const p4 = new PerishableProduct("Butter", 7.5, 10, "2025-12-31");
const p5 = new PerishableProduct("Yogurt", 3.5, 25, "2025-09-15");
// Add products to STORE object
const myStore = new Store();
myStore.addProduct(p1);
myStore.addProduct(p2);
myStore.addProduct(p3);
myStore.addProduct(p4);
myStore.addProduct(p5);
// Display total inventory value BEFORE discount
console.log(
  "Total Inventory Value (Before Discount): $",
  myStore.getInventoryValue().toFixed(2)
);
// Apply 15% discount to all products
Product.applyDiscount(myStore.inventory, 0.15);
// Display total inventory value AFTER discount
console.log(
  "Total Inventory Value (After 15% Discount): $",
  myStore.getInventoryValue().toFixed(2)
);
