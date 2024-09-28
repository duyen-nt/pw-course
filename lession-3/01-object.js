/*1. Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và
year=2021. Sau đó in ra năm sản xuất của xe.*/
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};
console.log("Năm sản xuất của xe là:", car.year);
//or
console.log("Năm sản xuất của xe là:", car["year"]);
//or
console.log("Năm sản xuất của xe là:", car['year']);

/*
2. Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc
tính street, city, country). In ra tên đường của người này.
*/
let person = {
    name: "Duyên",
    address: {
        street: "266 Đội Cấn",
        city: "Hà Nội",
        country: "Việt Nam"
    }
};
console.log("Tên đường nhà", person.name , "là:", person.address.street);
//or
console.log("Tên đường nhà " + person.name + " là:", person.address["street"]);
//or
console.log("Tên đường nhà", person.name + " là:", person.address['street']);
//or
console.log("Tên đường nhà", person.name + " là:", person["address"].street);
//or
console.log("Tên đường nhà", person.name + " là:", person['address'].street);

/*
3. Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông.
Biết object student bao gồm 2 thuộc tính: name và grades. Trong đó grades là một
object với 2 thuộc tính kiểu number: math và english
*/
let student = {
    name: "Duyên",
    grades: {
        math: 10,
        english: 10
    }
};
console.log("Điểm môn Toán của " + student.name + " là:", student.grades["math"]);
//or
console.log("Điểm môn Toán của " + student.name , "là:", student.grades['math']);
//or
console.log("Điểm môn Toán của" , student.name , "là:", student["grades"].math);
//or
console.log("Điểm môn Toán của" , student.name + " là:", student['grades'].math);

/*
4. Tạo một object product với các thuộc tính là tên các sản phẩm và giá trị là giá
của chúng. Dùng vòng lặp for...in để in ra tên và giá của mỗi sản phẩm.
*/
let products = {
    laptop: 20000000,
    iphone: 30000000,
    appleWatch: 8000000
};
for (let name in product) {
    console.log(name);
}
/*
5. Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như
volume, brightness. Thay đổi volume và in ra object mới.
*/
let settings = {
    volume: "On",
    brightness: "Off"
};
settings.volume = "Off";

settings["volume"] = "Off";

settings['volume'] = "hihi";

console.log("Cấu hình volume hiện tại là:", settings.volume);
// kq in ra cấu hình volume = hihi

// 6. Tạo một object bike và sau đó thêm thuộc tính color vào object đó
let bike = {};
bike.color = "Xanh";
//or
bike["color"] = "Đỏ";
//or
bike['color'] = "Đen";

console.log(bike.color); 

/*
7. Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi
object này
*/
let employee = {
    name: "Duyên",
    age: 28
};
delete employee.age;
console.log(employee);

/*
8. Một trường học có các lớp học và học sinh như sau:
○ classA: An, Bình, Châu
○ classB: Đào, Hương, Giang
Hãy viết code để đáp ứng yêu cầu sau:
- Khai báo tên biến: school
- Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa
tên các học sinh
Vd:
const school = { classA: ["Giang"]...}
*/

let  school = { 
    classA: ["An", "Bình", "Châu"], 
    classB: ["Đào", "Hương", "Giang"]
};
