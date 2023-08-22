describe("Properties", () => {
  class Customer {
    readonly id: number;
    name: string;
    age?: number;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
    sayHello(name: string): void {
      console.info(`Hello ${name}, My Name is ${this.name}`);
    }
  }

  it("should can have properties", () => {
    const customer = new Customer(1, "Zch");
    customer.age = 20;
    console.info(customer);
  });

  it("should can have name", () => {
    const customer = new Customer(2, "Eko");
    customer.sayHello("Budi");
  });
});
