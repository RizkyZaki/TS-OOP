describe("Class", () => {
  class Customer {
    constructor() {
      console.info("Create New Customer");
    }
  }
  class Order {}
  it("Should can create class", () => {
    const customer: Customer = new Customer();
    const order = new Order();
  });
});
