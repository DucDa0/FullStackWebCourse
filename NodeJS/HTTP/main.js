//* 1. Giao thức (Protocol).
/**
 * * Là một tập các luật, các qui tắc thỏa thuận ở 2 phía khi giao tiếp với nhau.
 * * Client và Server đc lập trình để hiểu và sử dụng các tập luật đó.
 * * TCP/IP là một bộ giao thức truyền thông được cài đặt chồng giao thức mà internet
 * * và hầu hết các mạng máy tính chạy trên đó.
 * * Giao thức giống như việc 2 người khác ở 2 nước khác nhau thỏa thuận sử dụng 1 ngôn
 * * ngữ chung để nói chuyện.
 */
//* Giao thức HTTP
/**
 * * Là một giao thức ứng dụng của bộ giao thức TCP/IP
 * * HTTP qui định một tập các qui tắc và định dạng dữ liệu(tệp HTML, image,...)
 * * Sử dụng cổng mặc định là TCP 80
 */
// * ex: truy cập trang http://www.youtube.com.vn/video=zkdfkb
/**
 * *----HTTP Request----
 * * GET/video=zkdfkb HTTP/1.1
 * * User-Agent: Mozilla/4.0(compatible;MSIE5.01;WINDow 7)
 * * Host: http://www.youtube.com.vn
 * * Accept-Language: en-us
 * * Accept-Encoding: gzip, deflate
 * * Conntection: Keep-Alive
 * 
 * 
 * *----HTTP Response
 * * HTTP/1.1 200 OK
 * * Date: Fri, 14 August 2020 14:50:59 GMT
 * * Server: Apache/2.2.14(Win 32)
 * * ...
 * * Content-Type: text/HTML
 * * Connection: closed
 * * <html>
 * *.......
 * *</html>
 */
//* 2. API
/**
 * * API là một bộ các công cụ để xây dựng 1 ứng dụng phần mềm.
 * * Trong ngữ cảnh web, API ở đây là các bộ URL(1 điểm cuối Endpoint) mà chấp nhận và gửi các dữ liệu qua giao thức HTTP và TCP/IP
 */
//* End point?
/**
 * * Là 1 URL cụ thể trong ứng dụng web API.
 * * Một Endpoint (URL) làm được nhiều requests với giao thức HTTP: GET, POST, PUT,...
 */

const http = require('http');
const fs= require('fs');
const contentTypes={
    html: 'text/html',
    text: 'text/plain',
    json: 'application/json'
}
http.createServer(function(req,res){
    if(req.url === '/' || req.url === '/index.html'){
        fs.createReadStream(__dirname+'/index.html').pipe(res);
    }else if(req.url==='/api'){
         //* Viết Header
        res.writeHead(200,{'Content-Type':contentTypes.json});


        //* Cách cơ bản cho hiệu năng kém nếu phải xử lí nhiều requests
        // let html=fs.readFileSync(__dirname + '/index.html',{encoding: 'utf-8'});
        // let user='Dao Van Duc';
        // html = html.replace('{user}', user);
        // res.end('Hello NodeJS');
        let obj={
            name: 'Dao Van Duc',
            age: 21
        }
        // res.end(html);
        res.end(JSON.stringify(obj));

        //* Cách tối ưu cho hiệu năng tốt, sử dụng Stream
        // fs.createReadStream(__dirname+'/index.html').pipe(res);
    }else{
        res.writeHead(404);
        res.end('Not Found!');
    }
   


}).listen(1159,'127.0.0.1',function(){
     console.log('Server listening on: http://1270.0.0.1:1337')
});