// *Lưu ý
/**
 * *Khi gặp await, nó sẽ convert hàm đó thành promise với callback là tất cả những phần code phía sau await đó.
 * *Bản chất await là một promise, phần code nằm sau await thực chất là code nằm trong callback của hàm await đó
 */
// *  async/await là một cơ chế giúp thực hiện các thao tác bất đồng bộ một cách tuần tự hơn
// ex
async function test() {
    var result = await db.collection('hospitals').findOne({ name: 'xxx' })
    console.log('after findResult: ', result)
    //... more code here ...
}

// tương đương với
function test() {
    db.collection('hospitals').findOne({ name: 'xxx' }, function (result) {
        console.log('after findResult: ', result)
        //... more code here ...
    })
}



// * Another ex
function sum(x,y) {
    return x+y;
  }
    
  async function process(){
    console.log('begin');
    let res=await sum(9,6);
    console.log(res);
    console.log('end');
  }
  process();
  console.log('A');
  
  /**
   * begin
   * A
   * 15
   * end
   */