/* Các thông số sức khỏe được tính như sau: 
Cân nặng lý tưởng = Số lẻ của chiều cao (tính bằng cm) x 9 rồi chia 10 
Mức cân tối đa = Bằng số lẻ của chiều cao (tính bằng cm) 
Mức cân tối thiểu = Số lẻ của chiều cao (tính bằng cm) x 8 rồi chia 10 
Như vậy, nếu bạn cao 1,7m, tức 170cm thì : 
Cân cân nặng lý tưởng của bạn là: 70 x 9: 10 = 63 kg 
Cân nặng tối đa là: 70kg 
Cân nặng tối thiểu là: 70 x 8 :10 = 56 kg 
Tạo file ex4.js, thêm vào code đáp án cho đề bài sau: 
a. Khai báo chiều cao của bạn (cm) 
b. In ra cân nặng lý tưởng, cân nặng tối đa, cân nặng tối thiểu trên cùng một dòng. 
*/


let height = 160;
let x = height - 100;
console.log("Cân nặng lý tưởng của tôi là: ", x*9/10 + "  Cân nặng tối đa là: ", x + "  Cân nặng tối thiểu là: ", x*8/10);

// cách 2
let max = x*9/10;
let min = x*8/10;
console.log("Cân nặng lý tưởng của tôi là: ", max + "  Cân nặng tối đa là: ", x + "  Cân nặng tối thiểu là: ", min);
