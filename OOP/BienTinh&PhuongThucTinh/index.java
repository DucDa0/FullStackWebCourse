//* Tính chất
+ Phương thức static có để được gọi mà không cần phải khởi tạo đối tượng.
+ Trong cùng một lớp, phương thức static chỉ có thể gọi tới phương thức static khác, không thể gọi tới phương thức không phải là static.
+ Trong cùng một lớp, phương thức static không thể gọi tới các thuộc tính không phải là static.

//* Ví dụ
class Math {
	public static double PI = 3.14;

	public static int abs(int x) {
		return x < 0 ? -x : x;
	}

	public static int add(int x, int y) {
		return x + y;
	}

	public static int subtract(int x, int y) {
		return x - y;
	}

	public static int min(int x, int y) {
		return x < y ? x : y;
	}

	public static int max(int x, int y) {
		return x > y ? x : y;
	}

	public static int pow(int x, int y) {
		int power = 1;
		for (int i = 0; i < y; i++) {
			power *= x;
		}
		return power;
	}
}

class Entry {
	public static void main(String[] args) {
		System.out.println(Math.PI);
		System.out.println(Math.abs(-2));
		System.out.println(Math.add(2, 3));
		System.out.println(Math.subtract(2, 3));
		System.out.println(Math.min(2, 3));
		System.out.println(Math.max(2, 3));
		System.out.println(Math.pow(2, 3));
	}
}

//* Nạp chồng phương thức
+ Nếu một lớp có nhiều phương thức cùng tên nhưng khác nhau về kiểu dữ liệu hoặc số các tham số, thì đó là nạp chồng phương thức.

class Math{
	public static int max(int a, int b) {
		return a > b ? a : b;
	}
	
	public static int max(int a, int b, int c) {
		return max(max(a, b), c);
	}
}

class Entry {
	public static void main(String[] args) {
		System.out.println(Math.max(3, 5, 2));
	}
}