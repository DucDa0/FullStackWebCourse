//* Tính chất
+ Khi một tác vụ được thực hiện theo nhiều cách khác nhau được gọi là tính đa hình.
+ Đối với tính chất này, nó được thể hiện rõ nhất qua việc gọi phương thức của đối tượng. 
Các phương thức hoàn toàn có thể giống nhau, nhưng việc xử lý luồng có thể khác nhau. 
Nói cách khác: Tính đa hình cung cấp khả năng cho phép người lập trình gọi trước một phương thức của đối tượng, 
tuy chưa xác định đối tượng có phương thức muốn gọi hay không. Đến khi thực hiện (run-time), 
chương trình mới xác định được đối tượng và gọi phương thức tương ứng của đối tượng đó. 
Kết nối trễ giúp chương trình được uyển chuyển hơn, chỉ yêu cầu đối tượng cung cấp đúng phương thức cần thiết là đủ.
+ Trong Java, chúng ta sử dụng nạp chồng phương thức (method overloading) và ghi đè phương thức (method overriding) để có tính đa hình:
 - Nạp chồng (Overloading): Đây là khả năng cho phép một lớp có nhiều thuộc tính, 
 phương thức cùng tên nhưng với các tham số khác nhau về loại cũng như về số lượng. 
 Khi được gọi, dựa vào tham số truyền vào, phương thức tương ứng sẽ được thực hiện.
 - Ghi đè (Overriding): là hai phương thức cùng tên, cùng tham số, cùng kiểu trả về nhưng thằng con viết lại và dùng theo cách của nó, 
 và xuất hiện ở lớp cha và tiếp tục xuất hiện ở lớp con. Khi dùng override, lúc thực thi, nếu lớp Con không có phương thức riêng, 
 phương thức của lớp Cha sẽ được gọi, ngược lại nếu có, phương thức của lớp Con được gọi.

 //*
 class Animal {
	public void sound() {
		System.out.println("some sound");
	}
}

class Dog extends Animal {
	public void sound() {
		System.out.println("bow wow");
	}
}

class Cat extends Animal {
	public void sound() {
		System.out.println("meow meow");
	}
}

class Duck extends Animal {
	public void sound() {
		System.out.println("quack quack");
	}
}

public class Entry {
	public static void main(String[] args) {
		Animal[] animals = new Animal[4];
		animals[0] = new Animal();
		animals[1] = new Dog();
		animals[2] = new Cat();
		animals[3] = new Duck();
		for (int i = 0; i < 4; i++) {
			animals[i].sound();
		}
	}
}