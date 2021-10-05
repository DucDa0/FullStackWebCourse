//* Tính chất
+ Tính trừu tượng là một tiến trình ẩn các chi tiết trình triển khai và chỉ hiển thị tính năng tới người dùng. 
Tính trừu tượng cho phép bạn loại bỏ tính chất phức tạp của đối tượng bằng cách chỉ đưa ra các thuộc tính và phương thức cần thiết của đối tượng trong lập trình.
+ Tính trừu tượng giúp bạn tập trung vào những cốt lõi cần thiết của đối tượng thay vì quan tâm đến cách nó thực hiện.
+ Trong Java, chúng là sử dụng abstract class và abstract interface để có tính trừu tượng.

//* Lớp trừu tượng
+ Nếu một lớp được khai báo là lớp trừu tượng thì bạn không thể khởi tạo được đối tượng của lớp đó mà chỉ có thể khởi tạo được đối tượng của lớp con

//Khai báo lớp trừu tượng Animal
abstract class Animal{
}

class Cat extends Animal{
}

public class Entry {
	public static void main(String[] args) {
		Animal a = new Cat();
	}
}

+ Lớp trừu tượng có thể có các phương thức trừu tượng. Phương thức trừu tượng là phương thức mà chỉ có phần khai báo, không có phần thân.

// Khai báo lớp trừu tượng Animal
abstract class Animal {
	// Khai báo phương thức trừu tượng makeSound()
	public abstract void makeSound();
}

+ Nếu một lớp được kế thừa từ lớp trừu tượng thì lớp đó phải ghi đè tất cả các phương thức trừu tượng.

abstract class Animal {
	public abstract void makeSound();
}

class Cat extends Animal {
	@Override
	public void makeSound() {
		System.out.println("meow meow");
	}
}

public class Entry {
	public static void main(String[] args) {
		Animal a = new Cat();
		a.makeSound();
	}
}

//* Interface
+ interface được dùng để lưu trữ các phương thức trừu tượng và các biến hằng số:
 - Giống với lớp trừu tượng, không thể khởi tạo được đối tượng của interface mà chỉ có thể khởi tạo được đối tượng của lớp được kế thừa từ interface.
 - Tất cả các phương thức trong interface đều được trình biên dịch hiểu là các phương thức trừu tượng và tất cả 
 các biến trong interface đều được trình biên dịch hiểu là các hằng số.

 interface IAnimal{
	int N = 4;
	void move();
	void sound();
}
// cái trên biên dịch ra cái dưới
interface IAnimal{
	public static final int N = 4;
	public abstract void move();
	public abstract void sound();
}

- Một lớp có thể kế thừa nhiều interface

interface IFlyable {
	void fly();
}

interface IEatable {
	void eat();
}

class Bird implements IFlyable, IEatable {
	@Override
	public void fly() {
		System.out.println("Bird flying");
	}

	@Override
	public void eat() {
		System.out.println("Bird eats");
	}
}

public class Entry {
	public static void main(String[] args) {
		Bird bird = new Bird();
		bird.eat();
		bird.fly();
	}
}

//* 
public interface IShape {
	double getArea();

	double getPerimeter();
}

public class Rectangle implements IShape {
	private double length;
	private double width;

	public Rectangle(double length, double width) {
		this.length = length;
		this.width = width;
	}

	@Override
	public double getArea() {
		return length * width;
	}

	@Override
	public double getPerimeter() {
		return (length + width) * 2;
    }
}

public class Circle implements IShape {
	private double radius;

	public Circle(double radius) {
		this.radius = radius;
	}

	@Override
	public double getArea() {
		return 3.14 * radius * radius;
	}

	@Override
	public double getPerimeter() {
		return 2 * 3.14 * radius;
	}
}