/*
1. Viết một hàm để tính chỉ số BMI (Body Mass Index) dựa trên chiều cao (mét) và cân
nặng (kg) và trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì).
Biết:
○ Chiều cao được tính theo đơn vị mét (VD: 1.75m)
○ Cân nặng tính theo kg
○ Công thức tính BMI: cân nặng / (chiều cao*chiều cao)
○ BMI < 18.5: Thiếu cân
○ BMI < 25: Bình thường
○ BMI < 30: Thừa cân
○ BMI >= 30: Béo phì
*/

function Ex1 (height, weight) {
    let bmi = (weight / (height*height));
    if (bmi < 18.5) {
        console.log ("Thiếu cân");
    } else if (bmi >=18.5 && bmi < 25) {
        console.log ("Bình thường");
    } else if (bmi >=25 && bmi < 30) {
        console.log ("Thừa cân");
    } else {
        console.log ("Béo phì");
    }
}
console.log("1. Kết quả Ex1: ");
Ex1 (1.6, 200);

/* 2. Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. Hàm sẽ
nhận vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về nhiệt độ đã
chuyển đổi.
Biết công thức chuyển đổi:
○ Từ độ C sang độ F: độ F = (độ C) * 9/5 + 32;
○ Từ độ F sang độ C: (độ F - 32) * 5 / 9;
*/
function Ex2 (temp, unit) {
    if (unit === 'C') {
      doC = temp * 9/5 + 32;
      return (doC); 
    } else if (unit === 'F') {
        doF = (temp - 32) * 5/9;
      return (doF); 
    } else {
      console.log("Dữ liệu không hợp lệ");
    }
  }
  console.log("2. Kết quả Ex2: ", Ex2 (37, 'C'));

/* 3. Khai báo một mảng các phần tử bất kì. Viết một hàm để tính tổng của các phần tử trong
một mảng số.
*/
let numbers = [1,2,3,4,5];
function Ex3(arr3) {
    let sum = 0;
  for (let i = 0; i < arr3.length; i++) {
    sum += arr3[i];
  }
  return sum;
}
console.log("3. Kết quả Ex3: ", Ex3(numbers));

/* 4. Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho.
Biết:
○ Số 0, số 1 không phải số nguyên tố.
○ Các số nguyên tố là số chỉ chia hết cho 1 và chính nó
*/
let arr4 = [1, 2, 3, 4, 5];
function Ex4 (arr4) {
    return arr4.filter(function(number) {
      if (number <= 1) {
        return false; 
      }
      for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            return false; 
        }
      }
      return true; 
    });
  }
console.log("4. Kết quả Ex4: ");
console.log(Ex4(arr4)); 

/*6. Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một
mảng các object.
Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85}
*/
const students = [
    { name: "Alex", score: 85 },
    { name: "A", score: 50 },
    { name: "B", score: 100 },
  ];
function Ex6(students) {
    let totalPoint = 0;
    let count = 0; 
    for (const student of students) {
      totalPoint += student.score;
      count++;
    }
    return (totalPoint / count);
  }
  
  console.log("6. Kết quả Ex6: ");
  console.log(Ex6(students)); 

 /*7. Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không.
  Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {“name”:
  “product 1”, price: 100 }
*/

  const products = [
    { name: "product 1", price: 100 },
    { name: "product 2", price: 200 },
    { name: "product 3", price: -150 }
  ];
  function Ex7 (products) {
    return products.every(product => product.price > 0);
  }
  if (Ex7 (products)) {
    console.log("Tất cả sp đều có giá > 0");
  } else {
    console.log("Đang tồn tại sản phẩm có giá <0");
  }

/* 8. Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không. Biết cửa hàng
mở cửa từ 9 giờ sáng đến 9 giờ tối. */

function Ex8 (hourse) {
    if (hourse >=9 && hourse <=21) {
        console.log("Cửa hàng hiện tại đang mở cửa");
    } else {
        console.log("Cửa hàng hiện tại đang đóng cửa");
    }     
}
console.log("8. Kết quả Ex8: ");
Ex8 (1);



/* 9. Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi: trẻ em dưới 5
tuổi miễn phí, người lớn từ 18 tuổi trở lên là 100k, và trẻ em từ 6 đến 17 tuổi là 50k.
*/
function Ex9 (age) {
    if (age < 5) {
        console.log("Mức giá vé vào cổng của trẻ " + age + " tuổi là miễn phí");
    } else if ( age >=6 && age < 17) {
        console.log("Mức giá vé vào cổng của trẻ " + age + " tuổi là 50k");
    } else if (age >=18) {
        console.log("Mức giá vé vào cổng của trẻ " + age + " tuổi là 100k");
    } else {
        console.log("Không có kết quả phù hợp");
    }
}
console.log("9. Kết quả Ex9: ");
Ex9 (5.5);


/* 10. Viết hàm in ra tên tháng dựa vào số tháng được nhập vào. Sử dụng câu lệnh
switch...case để xử lý. */
function Ex10 (month) {
    switch (month) {
        case 1:
            console.log("Tháng 1");
            break;
        case 2:
            console.log("Tháng 2"); 
            break;
        case 3:
            console.log("Tháng 3");
            break;
        case 4:
            console.log("Tháng 4");  
            break;  
        case 5:
            console.log("Tháng 5");
            break;
        case 6:
            console.log("Tháng 6"); 
            break;
        case 7:
            console.log("Tháng 7");
            break;
        case 8:
            console.log("Tháng 8"); 
            break;
        case 9:
            console.log("Tháng 9");
            break;
        case 10:
            console.log("Tháng 10"); 
            break;
        case 11:
            console.log("Tháng 11");
            break;
        case 12:
            console.log("Tháng 12");   
            break;
        default:
            console.log("Dữ liệu truyền vào không hợp lệ");
            break;
    }
}
console.log("10. Kết quả Ex10: ", );
Ex10 (177);



/*11. Viết hàm nhập vào điểm số. In ra phân loại điểm số của học sinh: giỏi (>= 8), khá (>=
6.5 và < 8), trung bình (>= 5 và < 6.5), yếu (< 5). */
function Ex11 (point) {
    if (point < 5) {
        console.log ("Yếu");
    } else if (point >=5 && point < 6.5) {
        console.log ("Trung bình");
    } else if (point >=6.5 && point < 8) {
        console.log ("Khá");
    } else {
        console.log ("Giỏi");
    }
}
console.log("11. Kết quả Ex11: ", );
Ex11 (9);


/* 12. Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết: nóng
(>= 30 độ C), mát (< 30 độ C và >= 20 độ C), lạnh (< 20 độ C) */
function Ex12 (temp) {
    if (temp < 20) {
        console.log ("Nhiệt độ " + temp + " độ C: Thời tiết lạnh");
    } else if (temp >=20 && temp < 30) {
        console.log ("Nhiệt độ " + temp + " độ C: Thời tiết mát"); 
    } else {
        console.log ("Nhiệt độ " + temp + " độ C: Thời tiết nóng");
    }
}
console.log("12. Kết quả Ex12: ", );
Ex12 (25);
