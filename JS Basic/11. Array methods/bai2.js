/**
 * Đọc và dịch các method đã học từ MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * Lấy ví dụ cho các trường hợp input khác nhau của mỗi method
 * Mục đích của bài tập này: Giúp bạn học cách tự tra cứu, đọc tài liệu.
 * Đây là một kĩ năng không thể thiếu của 1 developer.
 */
var myWeapon=[
    {name:'Orb',class:'Wizard',level: 10},
    {name:'Crystals',class:'Force Archer',level: 15},
    {name:'Katanas',class:'Blader',level: 20},
    {name:'Blades',class:'Force Blade',level: 25},
    {name:'Daikatanas',class:'Gladiator',level: 30}
  ]
  var newWeapon=[ {name:'Great Swords',class:'Warrior',level: 35}];
  
  var concat = myWeapon.concat(newWeapon);
  var findIndex = myWeapon.findIndex(item=>{return item.level===20});
  var indexOf = myWeapon.indexOf(myWeapon[3]);
  var reduce = myWeapon.reduce((a,b)=>{return a+b.level},0);