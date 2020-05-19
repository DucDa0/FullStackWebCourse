/*
  Viết hàm xây dựng các đối tượng student có các thuộc tính sau:
  - name: String,
  - level: String,
  - school: String

  Trong đó, thuộc tính school là thuộc tính dùng chung, có giá trị là "CodersX".
*/
function Student(name, level) {
    this.school = "CodersX";
    this.name = name;
    this.level = level;
  }