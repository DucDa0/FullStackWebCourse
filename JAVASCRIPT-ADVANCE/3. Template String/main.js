function hi(name, age) {
    return 'Hi ' + name + '! You will be ' + (age + 10) + ' years old in 10 years.';
}

const anotherHi = (name, age) => {
    // write code here using template string
    // so that this function behave the same way
    // with `hi` function
    return `Hi ${name}! You will be ${age + 10} years old in 10 years.`;
}