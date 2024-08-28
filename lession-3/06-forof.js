/*
1. In ra tất cả các ký tự của một chuỗi. Ví dụ chuỗi Playwright thì sẽ in ra
P
l
a
y
w
r
i
g
h
t
*/
const str = "Playwright";
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
//or
let str2 = "Playwright";
let text = "";
for (let x of str2) {
    text += x;
    console.log(x);
}


/*
2. Tìm và in ra vị trí phần tử đầu tiên và cuối cùng trong một mảng bằng với giá trị
cho trước. Ví dụ với mảng [1, 2, 3, 4, 3, 55, 23] và giá trị cho trước là 3
thì vị trí cần in ra đầu tiên là 2 và vị trí cuối cùng cần in ra là 4.
*/

let numbers = [1, 2, 3, 4, 3, 55, 23];
let index = 0;
for (let i of numbers) {
    if (i === 3) {
        console.log(index);
    }
    index++;
    //     console.log(number[0]);
    // }
}

/*
3. Tạo mảng chứa các kí tự nghịch đảo từ một chuỗi đã cho. Ví dụ với chuỗi
”Playwright” thì mảng kết quả sẽ là [“t”, “h”, “g”, “i”, “r”, “w”,
“y”, “a”, “l”, “P”] => dua vao bai tap for
*/

let input = "Playwright";
let output = [];
for (let i = 0; i < input.length; i++) {
    output.unshift(input[i]);
}
console.log(output);

/*
4. Lọc ra tất cả các phần tử duy nhất trong một mảng. Ví dụ với mảng [1, 2, 3,
1, 2, 4,5] thì các phần tử duy nhất (xuất hiện 1 lần) là: [3, 4, 5]
*/

let arr4 = [1, 2, 3, 1, 2, 4, 5];
