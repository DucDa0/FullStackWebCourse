//* Tính chất
+ Tính kế thừa là khả năng cho phép ta xây dựng một lớp mới dựa trên các định nghĩa của một lớp đã có. 
Lớp đã có gọi là lớp Cha, lớp mới phát sinh gọi là lớp Con và đương nhiên kế thừa tất cả các thành phần của lớp Cha, 
có thể chia sẻ hay mở rộng các đặc tính sẵn có mà không phải tiến hành định nghĩa lại.
+ Lớp con không được thừa hưởng các thuộc tính và phương thức private từ lớp cha.
+ Constructor của lớp con luôn gọi tới constructor của lớp cha. Dùng từ khóa super để chỉ cho lớp con biết cần phải gọi tới constructor nào của lớp cha

//*

class Person {
	private String name;

	public Person(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}

class Student extends Person {
	public Student(String name) {
		super(name); //  Từ khóa super để chỉ cho lớp con biết cần phải gọi tới constructor nào của lớp cha 
		// Từ khóa super khác từ khóa this ở chỗ từ khóa super sẽ tham chiếu tới lớp cha còn từ khóa this sẽ tham chiếu tới lớp hiện tại.
	}
}

public class Entry {
	public static void main(String[] args) {
		Student s1 = new Student("Trung");
		System.out.println(s1.getName());
	}
}

//*
+ Nếu một phương thức được chú thích với annotation @Override thì chương trình sẽ kiểm tra xem phương thức này có thực sự ghi đè phương thức của lớp cha không, 
nếu không thì sẽ báo lỗi.
+ Để ghi đè phương thức của lớp cha thì phương thức của lớp con phải có phạm vi truy cập bằng hoặc rộng hơn phạm vị truy cập của phương thức ở lớp cha
+ private -> default -> protected -> public

class SuperClass{
	public void display() {
		System.out.println("Hello from SuperClass");
	}
}

class SubClass extends SuperClass{
	@Override
	public void display() {
		super.display();
		System.out.println("Hello from SubClass");
	}
}

class Entry {
	public static void main(String[] args) {
		SubClass s = new SubClass();
		s.display();
	}
}