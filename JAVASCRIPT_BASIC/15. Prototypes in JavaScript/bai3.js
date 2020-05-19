/**
 * Chạy đoạn code phía dưới và giải thích kết quả
 * Link run code: https://repl.it/@maithedung/DroopyPaltryKeygenerator
 */

function answer() {
    return `
    // Ghi câu trả lời ở đây
    kết quả cho ra true bởi vì thằng sing là thằng được dùng chung, không phải được tạo ra mỗi khi khởi tạo 1 object nào đó
    `
  }
  
  function Person(name, age) {
    this.type = "person";
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.sing = function() {
    console.log(`Là lá la...`);
  };
  
  const mrThinh = new Person("Pham Thinh", 33);
  const mrDung = new Person("The Dung", 19);
  
  mrThinh.sing === mrDung.sing
  