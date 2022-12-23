/**
 * Chạy đoạn code phía dưới và giải thích kết quả
 * Link run code: https://repl.it/@maithedung/FarflungIdioticExabyte
 */

function answer() {
    return `
    // Ghi câu trả lời ở đây
    kết quả ra false bời vì mỗi khi khởi tạo 1 object mới thì thằng sing nó cũng được khởi tạo cho chính object đó
    `
  }
  
  function Person(name, age) {
    this.type = "person";
    this.name = name;
    this.age = age;
  
    this.sing = function() {
      console.log(`Là lá la...`);
    };
  
  }
  
  const mrThinh = new Person("Pham Thinh", 33);
  const mrDung = new Person("The Dung", 19);
  
  mrThinh.sing === mrDung.sing
  