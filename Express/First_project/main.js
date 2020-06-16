const express = require('express');
const app = express();
const port = 3000;

app.get('/todos',(Request,Response)=>{
    Response.send('<ul><li>Đi chợ</li> <li>Nấu cơm</li> <li>Rửa bát</li> <li>Học code tại CodersX</li></ul>')
})

app.listen(port,()=>{
    console.log('Server listening on port ' + port);
})