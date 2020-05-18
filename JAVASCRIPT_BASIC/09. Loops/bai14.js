/**
 * Sử dụng vòng lặp while để tìm bội số chung lớn nhất của 3 và 5 trong khoảng từ 0 đến 1000
 */
var bcln=1000;
while(bcln>=15)
{
  
    if(bcln%3===0&bcln%5===0)
    {
      console.log(bcln);
    }
    bcln--;
}
