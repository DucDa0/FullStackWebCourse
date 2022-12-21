//* Thang điểm đánh giá
/**
 * * 0: không trả lời đc.
 * * 1: trả lời tạm ổn.
 * * 2: trả lời tốt.
 * * 3: trả lời xuất sắc (trả lời đúng trọng tâm, đưa ra nhiều hướng giải quyết vấn đề, hướng giải quyết tốt hơn,...).
 */

//* --------------------------------------------------------------------------------------------------

//! HTML & CSS
/**
 * * 1. Sự khác biệt giữa display: none và visibility: hidden? [3]
 * * => display: none : ko xuất hiện/ ko chiếm space trên UI, visibility: hidden: ẩn element trên UI, vẫn chiếm space.
 * 
 * * 2. Có 1 thẻ div có padding là 50px, margin là 50px, khi set background color thì padding vs margin có bị ảnh hưởng ko?
 * * Nếu padding bị ảnh hưởng thì làm sao để ko bị ảnh hưởng? [1]
 * * => padding bị ảnh hưởng, margin thì ko. Để padding ko bị ảnh hường thì thêm thuộc tính css background-clip: content-box;
 * 
 * * 3. Nhúng 1 trang web khác vào page/modal thì dùng thẻ nào? [0]
 * * => thẻ iframe
 * 
 * * 4. Khi nào thì dùng display: inline-block? [3]
 * * => Khi muốn set width, height cho thẻ inline (span,..).
 */

//! JS & TS
//* 1. Callback function là gì? [3]
//* => Bất cứ function nào được truyền vào một function khác như một tham số và được gọi sau đó, thì gọi là callback function.

// * 2. Call, Bind, Apply dùng để làm gì? Sự khác biệt giữa chúng? [2]
// * => Thay đổi/ xác định context/giá trị của this. Call và Apply thực thi hàm luôn, bind trả về 1 hàm.


//* 3. Con trỏ this là gì? [3]
//*  => Con trỏ this tham chiếu đến đối tượng mà nó được gọi, hay nó gắn liền với context mà nó được gọi.

//* 4. Có thể tạo object từ 1 function ko? fucntion có 1 thuộc tính prototype là gì? []
//* => Có, dùng consructor function + toán tử new. Thụộc tính prototype của 1 function là 1 object có thuộc tính là constructor trỏ ngược lại function đó.

//* vd1: trải đều mảng dùng reduce. [2]
const arr = [[1,2], [2,4]];

arr.reduce((acc,cur)=>acc.concat(cur),[])

//* vd2: tạo 1 method tính bình phương của 1 số. [0]
Number.prototype.square = function () {
    return this * this;
}
const num = 9;
console.log(num.square())

//* vd3: hiểu về prototype của function []
function Person(name, age) {
    this.name = name;
    this.age = age;
}

//* 3 cách tạo này cho ra kết quả thế nào?
const person1 = new Person('Person 1', 21);
const person2 = new Person.prototype.constructor('Person 2', 23);
const person3 = new person2.constructor('Person 2', 23);

//* giá trị in ra là gì
console.log(person1.constructor === Person);

//* vd4: mutate kiểu dữ liệu tham chiếu, shallow clone và deep clone [1]
const products  = [
    {id: 1, name: 'Product 1', price: 12},
    {id: 2, name: 'Product 2', price: 26},
    {id: 3, name: 'Product 3', price: 41}
]

const newProducts = [...products];

newProducts[1].price = 100;

console.log(newProducts[1].price) //* ?
console.log(products[1].price) //* ?
products.map(p => ({...p}));

//* vd5: Viết 1 function để trả về kết quả như sau []
console.log(multiply(2)(4)(5)); //* 40
const multiply =  (num1) => (num2) => (num3) => num1 * num2 * num3;

//* vd6: hỏi về typescript: []
interface/type Point { x: number; }
interface/type Point { y: number; }

//* merge type báo lỗi: Duplicate identifier 'Point'.

const point: Point = { x: 1, y: 2 };

//! ReactJS
//* 1. Sự khác biệt khi dùng React.Fragment và <></>. [2]
//* => React.Fragment có thể dùng attrribute key.

//* 2. React Portal là gì? Thường được dùng trong trường hợp nào? []
//* => React Portal là 1 API của React, cho phép tạo và render 1 element bên ngoài element cha được chỉ định, thường được dùng để tạo Modal, Tooltip, là
//* các thành phần độc lập.
//* cú pháp: ReactDOM.createPortal(<Your component />, Parent element you want render outside it, use document.get....)

//* 3. Khi nào thì dùng property ref? Cho ví dụ cụ thể? []
//* => ref tham chiếu đến một node element, thường dùng để tương tác trực tiếp với DOM thật(focus input,...), hoặc dùng để lưu những giá trị ko dùng cho việc 
//* update UI, ko bị ảnh hưởng quá trình re-render của react.

//* 4. viết thử 1 custom hook, hook đó được sử dụng để render lại UI
const useForceRender = () => {
    const [_, setCount] = useState(0);

    const forceRender = () => setCount(prevState => prevState + 1);

    return { forceRender }
}

//* vd1: hiểu về cách sử dụng state, event trong react, tối ưu performnace.
//* Viết code làm sao khi change color ở input thì cũng change backgroundColor của thẻ div id là box
//* Nếu ứng viên dùng state để handle thì bảo ko dùng state đc ko?=> dùng useRef (performance tốt hơn do component ko bị re-render nhiều lần).

const ColorPicker = () => {
    return (
        <>
        <input type="color" />
        <div id="box"></div>
        </>
    )
}

//* vd2: hiểu về cách xử lý data: lifting state up || forwardRef + useImperativeHandle || pass function as props
const StudentContainer = () => {

    const handleSubmit = () => {
        // call api here
    }

    return (
        <>
            <StudentForm />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

const StudentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        class: ''
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <form>
            <input type="text" name="name" onChange={handleOnChange} value={formData.name} />
            <input type="text" name="class" onChange={handleOnChange} value={formData.class} />
        </form>
    )

}

// ! Others 
//* Hỏi thêm xem ứng viên hiểu biết rộng tn
//* đánh giá: y(có biết) || n(ko biết)
/**
 * * Có từng dùng AWS bao h chưa? []
 * * Biết sử dụng Jira ko? []
 * * Dùng qua NextJS/NestJS chưa? []
 * * Thằng Reudx có 3 middlesware phổ biến là Thunk, Observable và Saga, bạn thường dùng thằng nào nhất. []
 * * Có dùng qua Vite? Nó là gì vậy? []
 * * React Query? []
 * * Có biết dùng docker? []
 * * Có biết Meteor ko? :v []
 */