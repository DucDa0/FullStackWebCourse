/**
 * Thiết kế database cho 1 hệ thống quản lý thư viện sách, cho biết thư viện này có hàng trăm giá sách khác nhau, sách được để ở bất kì giá nào không theo danh mục nào.
 * Mỗi cuốn sách có 1 mã khác nhau.
 * Hệ thống cho phép đăng ký người dùng mới, một người có thể mượn nhiều sách khác nhau trong một khoảng thời gian hữu hạn.
 * Hệ thống có thể lưu lịch sử ai đã mượn sách nào, bắt đầu mượn từ bao lâu, trả lúc nào.
 * Hệ thống có lưu lại số ngày quá hạn tổng cộng của 1 người dùng, ví dụ sách A quá 2 ngày, sách B quá 3 ngày -> tổng 5 ngày
 */

/////////////// Library System //////////////
/*
    BookShelves: các giá sách,
    BookShelvesID: mã giá sách,
    Location: vị trí giá sách trong thư viện
*/
let BookShelves=[
    { bookShelvesID:0, Location:'A1', books[0,1]},
    { bookShelvesID:1, Location:'A2', books[2,3]},
    { bookShelvesID:2, Location:'B1', books[4,5]},
    { bookShelvesID:3, Location:'B2', books[6,7]},
    { bookShelvesID:4, Location:'C1', books[8,9]}
];
/*
    Category: thể loại sách,
    catID: mã thể loại sách,
    name: tên thể loại
*/
let Category=[
    {catID:0, name: 'Science'},
    {catID:1, name: 'Math'},
    {catID:2, name: 'Biological'},
    {catID:3, name: 'Historical'},
    {catID:4, name: 'Fiction'},
    {catID:5, name: 'Reference'},
    {catID:6, name: 'Art'},
    {catID:7, name: 'Light Novel'},
    {catID:8, name: 'Manga'},
    {catID:9, name: 'ManhWa'}
];
/*
    Books: những cuốn sách trong thư viện,
    bookID: mã sách,
    category: thể loại sách tham chiếu đến catID,
    bookShelves: giá sách tham chiếu đến bookShelvesID
*/
let Books=[
    {bookID:0, name:'Book A', category: 0},
    {bookID:1, name:'Book B', category: 1},
    {bookID:2, name:'Book C', category: 2},
    {bookID:3, name:'Book D', category: 3},
    {bookID:4, name:'Book E', category: 4},
    {bookID:5, name:'Book F', category: 5},
    {bookID:6, name:'Book G', category: 6},
    {bookID:7, name:'Book H', category: 7},
    {bookID:8, name:'Book I', category: 8},
    {bookID:9, name:'Book J', category: 9}
]
/*
    Members: thành viên đã đăng ký,
    memberID: mã thành viên,
    name: tên thành viên,
    sex: giới tính,
    age: tuổi,
    address: địa chỉ,
    registrationDay: ngày đăng ký
*/
let Members=[
    {memberID:0, name:'Dao Van Duc', sex:'feMale', age:21, address:'Dong Nai', registrationDay:'09/06/1999'} 
];
/*
    listOfBorrowedBooks: danh sách người mượn,
    memberID: người đã mượn sách, tham chiếu đến memberID của Members,
    books: những sách đã mượn, bao gồm mã sách, ngày mượn, ngày trả theo qui định của thư viện, ngày người mượn trả, số ngày
    mượn quá hạn tương ứng với mỗi sách, và cuối cùng là tổng số ngày mượn quá hạn, quá 10 ngày thì cho luôn, khỏi trả!
*/
let listOfBorrowedBooks=[
    { memberID:0, books:[{bookID:7, dateOfBorrowing:'09/06/1999', dateOfReturing_library:'16/06/1999',dateOfReturing_member:'16/06/1999', outOfDateCounting:0},
                        {bookID:0, dateOfBorrowing:'09/06/1999', dateOfReturing_library:'16/06/1999',dateOfReturing_member:'19/06/1999', outOfDateCounting:3},
                        {bookID:6, dateOfBorrowing:'11/06/1999', dateOfReturning_library:'14/06/1999',dateOfReturing_member:'12/06/1999', outOfDateCounting:0},
                        {bookID:9, dateOfBorrowing:'12/06/1999', dateOfReturning_library:'20/06/1999',dateOfReturing_member:'22/06/1999', outOfDateCounting:2}],
      outOfDateCounting_total: 5
    }
];