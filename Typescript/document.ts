let arr: (string | number)[];

arr = [1, 2, 3, "string"];

/**
 * * I- TypeScript Type:
 */
// 1. Enum type: An enum is a group of named constant values
// Lưu ý khi sài enum type: nếu gán string value cho các value thì phải gán hết.

// 2. Never type: type that contains no value.
// The never type represents the return type of a function that always throws an error or a function that contains an indefinite loop.
function raiseError(message?: string): never {
  throw new Error(message);
}

// 3. Union type: A TypeScript union type allows you to store a value of one or serveral types in a variable.
let result: number | string;
result = 10; // OK
result = "Hi"; // also OK
result = false; // a boolean value, not OK

function add(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Parameters must be numbers or strings");
}

// 4. Type aliases: Use type aliases to define new names for existing types.
type chars = string;
let messsage: chars; // same as string type

type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = "Hi"; // valid
input = false; // Compiler error

// 5. String Literal Types: A TypeScript string literal type defines a type that accepts specified string literal.
// Use the string literal types with union types and type aliases to define types that accept a finite set of string literals.
type MyMouseEvent = "click" | "dblclick" | "mouseup" | "mousedown";
let mouseEvent: MyMouseEvent;
mouseEvent = "click"; // valid
mouseEvent = "dblclick"; // valid
mouseEvent = "mouseup"; // valid
mouseEvent = "mousedown"; // valid
mouseEvent = "mouseover"; // compiler error

let anotherEvent: MyMouseEvent;

// 6. Tuple type: A tupple is an array with a fixed number of elements whose types are known.
let skill: [string, number];
skill = ["Programming", 5];

let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];

// 7. Intersection Types
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}
type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;
let e: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'
};

let c: Customer = {
    name: 'ABC Inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
};

// 8. Type Casting
// Type casting allows you to convert a variable from one type to another.
// Use the as keyword or <> operator for type castings.
let my_input = document.querySelector('input[type="text"]') as HTMLInputElement;
let another_input = <HTMLInputElement>document.querySelector('input[type="text"]');

/**
 * * II- TypeScript Class
 */
// 1. Simple class
class Person {
  ssn: string;
  firstName: string;
  lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// 2. Access Modifiers:
// TypeScript provides three access modifiers to class properties and methods: private, protected, and public.
// The private modifier allows access within the same class.
// The protected modifier allows access within the same class and subclasses.
// The public modifier allows access from any location.

// 3. Readonly
class Person2 {
  readonly birthDate: Date;

  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}

let person = new Person2(new Date(1990, 12, 25));
person.birthDate = new Date(1991, 12, 25); // Compile error

// 4. Getters and Setters

class Person3 {
  private _age: number;
  private _firstName: string;
  private _lastName: string;

  public get age() {
    return this._age;
  }

  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 200) {
      throw new Error("The age is invalid");
    }
    this._age = theAge;
  }

  public get firstName() {
    return this._firstName;
  }

  public set firstName(theFirstName: string) {
    if (!theFirstName) {
      throw new Error("Invalid first name.");
    }
    this._firstName = theFirstName;
  }

  public get lastName() {
    return this._lastName;
  }

  public set lastName(theLastName: string) {
    if (!theLastName) {
      throw new Error("Invalid last name.");
    }
    this._lastName = theLastName;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// 4. Inheritance
class Tuong {
  name: string;
  type: string;
  skills: string[];

  constructor(name: string, type: string, skills: string[]) {
    this.name = name;
    this.type = type;
    this.skills = skills;
  }

  getInfo(): string {
    return `${this.name}, ${this.type}, ${this.skills}`;
  }
}

class Miner extends Tuong {
  dig: number;
  constructor(name: string, type: string, skills: string[], dig: number) {
    super(name, type, skills);
    this.dig = dig;
  }

  getInfo(): string {
    const baseInfo = super.getInfo();
    return `${baseInfo}, ${this.dig}`;
  }
}

const miner = new Miner("Miner", "Earth", ["dao mo"], 500);
console.log(miner.getInfo());

// 5. Interface
// An interface can extend one or multiple existing interfaces.
interface IPerson {
    firstName: string;
    lastName: string;
    showInfo(): void;
    age: 500;
}

interface IMe extends IPerson{
    isMe: boolean;
}

class Person4 implements IMe {
    firstName: string;
    lastName: string;
    readonly age = 500;
    isMe: boolean;
    constructor(firstName: string,
       lastName: string) {
    }

    public showInfo(): void {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

/**
 * * III. Type Guards
 */
// 1. typeof

type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}

// 2. instanceof

class Customer {
    isCreditAllowed(): boolean {
        // ...
        return true;
    }
}

class Supplier {
    isInShortList(): boolean {
        // ...
        return true;
    }
}

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner) : string {
    let message: string;
    if (partner instanceof Customer) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }

    if (partner instanceof Supplier) {
        message = partner.isInShortList() ? 'Sign a new contract the supplier' : 'Need to evaluate further';
    }

    return message;
}

// 3. in

function signContract(partner: BusinessPartner) : string {
    let message: string;
    if ('isCreditAllowed' in partner) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
        // must be Supplier
        message = partner.isInShortList() ? 'Sign a new contract the supplier ' : 'Need to evaluate further';
    }
    return message;
}

/**
 * * IV. Generics: Use TypeScript generics to develop reusable, generalized, and type-safe functions, interfaces, and classes.
 */

 function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

console.log(getRandomElement<number>([1,2,3,4,5]))
console.log(getRandomElement<string>(['a','b','c','d','e']))


//* Use extends keyword to constrain the type parameter to a specific type.
function merge<U extends object, V extends object>(obj1: U, obj2: V) {
  return {
      ...obj1,
      ...obj2
  };
}

// error
let person = merge(
  { name: 'John' },
  25
);

// success
let person2 = merge(
  { name: 'John' },
  { age: 22 }
);

//* Use extends keyof to constrain a type that is the property of another object.

// error
function prop<T, K>(obj: T, key: K) {
  return obj[key];
}

// success
function prop2<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}


interface Pair<K, V> {
  key: K;
  value: V;
}

let month: Pair<string, number> = {
  key: 'Jan',
  value: 1
};