//* MỘt kĩ thuật đọc và ghi các file có content khủng khiếp
//* Bufer: là nơi chứa tạm thời các dữ liệu được chuyển từ nơi này sang nơi khác, kích thước của buffer luôn xác định và giới hạn
//* Stream: là chuỗi dữ liệu có sẵn qua thời gian(ví dụ xem youtube thì video được tải đến đâu xem đến đó, chứ ko phải đợi tải hết mới xem đc)
//* Chunk: là một mảnh dữ liệu đc truyền qua 1 stream, dữ liệu đc cắt ra từng mảnh chunk và chuyền đi
//* Pipe: là một cơ chế nối 2 stream với  nhau, đầu ra của stream này được nối vs đầu vào của stream khác
//* Lưu ý: khi đọc 1 file thì luồng ghi bao h cũng chậm hơn luồng đọc
const fs = require('fs');
const zlib=require('zlib');

const readable=fs.createReadStream(__dirname+'/readme.txt',{// * đọc từng mảnh dữ liệu
    encoding: 'utf-8',
    highWaterMark: 16*1024 //* 16kb
});

const writable=fs.createWriteStream(__dirname+'/readmeCopy.txt');
const compressed=fs.createWriteStream(__dirname+'/readmeCopy.txt.gz');

const gzip=zlib.createGzip();
// readable.on('data',function(chunk){//* ghi từng mảnh dữ liệu
//     console.log(chunk.length);
//     writable.write(chunk);
// })

readable.pipe(writable);//* truyền từ stream có thể đọc đc(readable) sang stream có thể ghi đc (writable)

readable.pipe(gzip).pipe(compressed);
