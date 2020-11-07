var a = 1;

var b = {
  a: 2,
  foo: function () {
    console.log(this.a);
  },
};

b.foo();

var fooCopy = b.foo; // lúc này fooCopy là 1 function, có lệnh thực thi là console.log(this.a), lúc này a chính là biến a global chứ không phải là property a của object b nữa, nên this.a = 1. Vì vậy kết quả cho lần lượt là 2 và 1
fooCopy();
// Chạy code và giải thích vì sao kết quả dòng 10 khác dòng 13

// Em có copy code vào VSCode và chạy thử, thì kết quả nhận được là 2 và undefined, nhưng chạy trên repl.it là 2 và 1, What happened!!?
