/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
const readlineSync = require("readline-sync");
const fs = require("fs");
let PhoneBooks = [];

function loadData() {
  let fileContent = fs.readFileSync("./data.json");
  PhoneBooks = JSON.parse(fileContent);
}

function showContacts() {
  for (let people of PhoneBooks) {
    console.log(people.Name, people.Phone);
  }
}

function addContacts() {
  let name = readlineSync.question("Name: ");
  let phone = readlineSync.question("Phone Number: ");
  let contactAdded = {
    Name: name,
    Phone: parseInt(phone)
  };
  PhoneBooks.push(contactAdded);
}

function menuSelect() {
  console.log("1. Edit contact");
  console.log("2. Delete contact");
  console.log("3. Back");
}

function editContact(index) {
  let editName = readlineSync.question("Name: ");
  let editPhone = readlineSync.question("Phone: ");
  PhoneBooks[index].Name = editName;
  PhoneBooks[index].Phone = parseInt(editPhone);
  SaveAndExit();
}

function deleteContact(index) {
  PhoneBooks.splice(index, 1);
  SaveAndExit();
}

function findSelection(index) {
  let option = readlineSync.question("> ");
  switch (option) {
    case "1":
      editContact(index);
      break;
    case "2":
      deleteContact(index);
      break;
    case "3":
      showMenu();
      break;
  }
}

function findContact(contact) {
  let findName = PhoneBooks.filter(
    x =>
      x.Name.toLowerCase().includes(contact.toString().toLowerCase()) === true
  );
  let findPhone = PhoneBooks.filter(
    x => x.Phone.toString().includes(contact.toString()) === true
  );
  if (typeof parseInt(contact) === 'number') {
    if (findPhone.length === 0) {
      console.log("No result!");
    } else {
      if (findPhone.length === 1) {
        let indexPhone = PhoneBooks.findIndex(
          x => x.Phone.toString() === findPhone[0].Phone.toString()
        );
        console.log(findPhone[0].Name, findPhone[0].Phone);
        menuSelect();
        findSelection(indexPhone);
      } else if (findPhone.length > 1) {
        for (let c of findPhone) {
          console.log("[" + findPhone.indexOf(c) + "]", c.Name, c.Phone);
        }
        let selectContact = readlineSync.question(
          "Select a contact that u want to edit or delete: "
        );
        let indexPhone = PhoneBooks.findIndex(
          x =>
            x.Phone.toString() ===
            findPhone[parseInt(selectContact)].Phone.toString()
        );
        console.log(
          findPhone[parseInt(selectContact)].Name,
          findPhone[parseInt(selectContact)].Phone
        );
        menuSelect();
        findSelection(indexPhone);
      }
    }
  } else {
    if (findName.length === 0) {
      console.log("No result!");
    } else {
      if (findName.length === 1) {
        let indexName = PhoneBooks.findIndex(
          x =>
            x.Name.toLowerCase() === findName[0].Name.toString().toLowerCase()
        );
        console.log(findName[0].Name, findName[0].Phone);
        menuSelect();
        findSelection(indexName);
      } else if (findName.length > 1) {
        for (let c of findName) {
          console.log("[" + findName.indexOf(c) + "]", c.Name, c.Phone);
        }
        let selectContact = readlineSync.question(
          "Select a contact that u want to edit or delete: "
        );
        let indexName = PhoneBooks.findIndex(
          x =>
            x.Name.toLowerCase() ===
            findName[parseInt(selectContact)].Name.toString().toLowerCase()
        );
        console.log(
          findName[parseInt(selectContact)].Name,
          findName[parseInt(selectContact)].Phone
        );
        menuSelect();
        findSelection(indexName);
      }
    }
  }
  showMenu();
}

function SaveAndExit() {
  let content = JSON.stringify(PhoneBooks);
  fs.writeFileSync("./data.json", content, { encoding: "utf8" });
}

function showMenu() {
  console.log("1. Show all contact");
  console.log("2. Add new contact");
  console.log("3. Find a contact");
  console.log("4. Save and Exit");
  let option = readlineSync.question("> ");
  switch (option) {
    case "1":
      showContacts();
      showMenu();
      break;
    case "2":
      addContacts();
      showMenu();
      break;
    case "3":
      var input = readlineSync.question("Enter Name or phone number: ");
      findContact(input);
      break;
    case "4":
      SaveAndExit();
      break;
    default:
      console.log("Wrong select!");
      showMenu();
      break;
  }
}

function main() {
  loadData();
  showMenu();
}
main();



