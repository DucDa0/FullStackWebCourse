/**
 * Viết hàm xếp hạng điểm số theo công thức sau:
 * [0-5): C
 * [5-7): B
 * [7-10]: A
 */
function grade(score) {
    // your code here!
    if(score>0 && score<5){
        return 'C';
    }
    else if(score>=5 && score<7){
        return 'B';
    }
    else{
        return 'A';
    }
  }