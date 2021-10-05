//* Tính chất
+ Tức là trạng thái của đối tượng được bảo vệ không cho các truy cập từ code bên ngoài như thay đổi trong thái hay nhìn trực tiếp. 
Việc cho phép môi trường bên ngoài tác động lên các dữ liệu nội tại của một đối tượng theo cách nào là hoàn toàn tùy thuộc vào người viết mã. 
Đây là tính chất đảm bảo sự toàn vẹn, bảo mật của đối tượng.
+ Trong Java, tính đóng gói được thể hiện thông qua phạm vi truy cập (access modifier). 
Ngoài ra, các lớp liên quan đến nhau có thể được gom chung lại thành package.

//* Ví dụ

class Person {
	private int id;
	private String name;
	private int age;
	private String address;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
}

public class Entry {
	public static void main(String[] args) {
		Person p = new Person();
		p.setId(1001);
		p.setName("Quynh");
		p.setAge(24);
		p.setAddress("Ha Noi");
		System.out.println("Id: " + p.getId());
		System.out.println("Name: " + p.getName());
		System.out.println("Age: " + p.getAge());
		System.out.println("Address: " + p.getAddress());
	}
}

//*
class Time {
	private int hour;
	private int minute;
	private int second;

	public Time(int hour, int minute, int second) {
		this.hour = hour;
		this.minute = minute;
		this.second = second;
	}

	public void setTime(int hour, int minute, int second) {
		this.hour = hour;
		this.minute = minute;
		this.second = second;
	}

	public int getHour() {
		return hour;
	}

	public void setHour(int hour) {
		this.hour = hour;
	}

	public int getMinute() {
		return minute;
	}

	public void setMinute(int minute) {
		this.minute = minute;
	}

	public int getSecond() {
		return second;
	}

	public void setSecond(int second) {
		this.second = second;
	}

	public void previousSecond() {
		if (hour == 0 && minute == 0 && second == 0) {
			hour = 23;
			minute = 59;
			second = 59;
			return;
		}
		if (minute == 0 && second == 0) {
			hour--;
			minute = 59;
			second = 59;
			return;
		}
		if (second == 0) {
			minute--;
			second = 59;
			return;
		}
		second--;
	}

	public void nextSecond() {
		if (hour == 23 && minute == 59 && second == 59) {
			hour = 0;
			minute = 0;
			second = 0;
			return;
		}
		if (minute == 59 && second == 59) {
			hour++;
			minute = 0;
			second = 0;
			return;
		}
		if (second == 59) {
			minute++;
			second = 0;
			return;
		}
		second++;
	}

	void display() {
		String hour = this.hour + "";
		String minute = this.minute + "";
		String second = this.second + "";
		if (hour.length() == 1)
			hour = "0" + hour;
		if (minute.length() == 1)
			minute = "0" + minute;
		if (second.length() == 1)
			second = "0" + second;
		System.out.println(hour + ":" + minute + ":" + second);
	}
}

//*
public class Point {
	private double x;
	private double y;

	public Point() {
	}
	
	public Point(double x, double y) {
		this.x = x;
		this.y = y;
	}

	public double getX() {
		return x;
	}

	public void setX(double x) {
		this.x = x;
	}

	public double getY() {
		return y;
	}

	public void setY(double y) {
		this.y = y;
	}

	public void setXY(double x, double y) {
		this.x = x;
		this.y = y;
	}

	public double distance(double x, double y) {
		return Math.sqrt((this.x - x) * (this.x - x) + (this.y - y) * (this.y - y));
	}

	public double distance(Point another) {
		return distance(another.getX(), another.getY());
	}
}

public class Entry {
	public static void main(String[] args) {
		Point p1 = new Point(1.5, 6.7);
		Point p2 = new Point(2.8, 3.2);
		System.out.println(p1.distance(p2));
		System.out.println(p1.distance(2.34, 7.8));
	}
}