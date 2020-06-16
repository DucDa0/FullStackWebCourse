const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','pug');
app.set('views','./views')

app.get('/todos',(req,res)=>{
    res.render('todos/index',{
        items:[
            {id: 1,name: 'Đi chợ'},
            {id: 2,name: 'Nấu cơm'},
            {id: 3,name: 'Rửa bát'},
            {id: 4,name: 'Học code tại CodersX'}
        ]
    });
});

app.listen(port,()=>{
    console.log('Server listening on port ' + port);
})