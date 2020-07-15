function foo() {
    var localVariable = 'private variable';
    return function() {
        return localVariable;
    }
}

var getLocalVariable = foo();
console.log(getLocalVariable()) // "private variable"