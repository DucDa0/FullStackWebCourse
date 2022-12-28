const person = {
  name: "John Doe",
  age: 42,
  nationality: "American",
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      console.log(
        `Hmm.. this property doesn't seem to exist on the target object`
      );
    } else {
      console.log(`The value of ${prop} is ${obj[prop]}`); // Can use built-in object called Reflect to replace obj[prop] -> Reflect.get(obj, prop)
    }
  },
  set: (obj, prop, value) => {
    if (prop === "age" && typeof value !== "number") {
      console.log(`Sorry, you can only pass numeric values for age.`);
    } else if (prop === "name" && value.length < 2) {
      console.log(`You need to provide a valid name.`);
    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`);
      obj[prop] = value;  // Can use built-in object called Reflect to replace obj[prop] = value -> Reflect.set(obj, prop, value)
    }
  },
});

personProxy.name; // The value of name is John Doe
personProxy.age = 43; // Changed age from 42 to 43

personProxy.nonExistentProperty; // Hmm.. this property doesn't seem to exist 
personProxy.age = "44"; // Sorry, you can only pass numeric values for age. 
personProxy.name = ""; // You need to provide a valid name. 
