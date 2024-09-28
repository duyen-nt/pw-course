# Cấu trúc 1 element
Thẻ mở - Thuộc tính - Gía trị thuộc tính - Thẻ đóng
VD:
<option value="usa">United States</option>
Trong đó:
<option : Thẻ mở
value: Thuộc tính
usa: Gía trị của thuộc tính value
United States: text
</option>: Thẻ đóng

Cấu trúc thẻ tự đóng:
<..../>
VD:
<src="image.jpg" alt="Image description"/>

# Thẻ HTML thường gặp: 
- Thẻ <div> (viết tắt của divide): dùng để chia các khối trong trang web
- Thẻ <h1></h1> đến <h6></h6> (viết tắt của heading): dùng để tạo ra các header phân cấp theo thứ tự từ lớn đến bé.
- Thẻ <form></form>: dùng để chứa một form thông tin.
- Thẻ input: text, email, radio, checkbox, file, color, range, date
- Thẻ textarea: hiển thị ô input, dạng to
- Thẻ radio button
- Thẻ checkbox
- Thẻ list và dropdown
- button
- Thẻ table
- thead = table heading
- tr = table row = 1 dòng
- th: table heading: text in đậm
- tbody
- tr -> td = table data
- Thẻ date picker
- Thẻ slider
- Thẻ iframe

# Cấu trúc DOM (Document Object Model) cơ bản của một trang web bao gồm các thẻ sau:

1. html: Là thẻ gốc của trang web, chứa thông tin về trang web và các nội dung khác.
2. head: Thẻ con của thẻ html, chứa thông tin về metadata của trang web, như tiêu đề, mô tả, liên kết đến các file CSS và JavaScript.
3. body: Thẻ con của thẻ html, chứa nội dung chính của trang web, bao gồm các thẻ khác như h1, p, img, table...
4. h1-h6: Thẻ định dạng tiêu đề, có cấp độ khác nhau (h1 là tiêu đề chính, h2 là tiêu đề phụ...).
5. p: Thẻ đoạn văn bản, dùng để hiển thị văn bản trên trang web.
6. img: Thẻ hình ảnh, dùng để hiển thị hình ảnh trên trang web.
7. table: Thẻ bảng, dùng để hiển thị dữ liệu trong dạng bảng.
8. tr: Thẻ dòng bảng, dùng để tạo thành các dòng trong bảng.
9. td: Thẻ cell bảng, dùng để tạo thành các ô trong bảng.
10. ul, ol, li: Thẻ danh sách không số, danh sách số và mục danh sách, dùng để hiển thị danh sách trên trang web.
11. a: Thẻ liên kết, dùng để tạo thành liên kết đến các trang web khác hoặc email.
12. form: Thẻ biểu mẫu, dùng để tạo thành biểu mẫu để người dùng nhập liệu.
13. input, textarea, select: Thẻ nhập dữ liệu, hộp text và dropdown lựa chọn, dùng để nhập dữ liệu 

Ngoài ra, có thể có nhiều thẻ khác nhau tùy thuộc vào chức năng và nhu cầu của trang web.


# Cấu trúc 1 table:
<table>
  <caption>Table Caption</caption>
  <thead>
    <tr>
      <th>Table Header Cell 1</th>
      <th>Table Header Cell 2</th>
      <!-- ... -->
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table Data Cell 1</td>
      <td>Table Data Cell 2</td>
      <!-- ... -->
    </tr>
    <!-- ... -->
  </tbody>
</table>

Trong đó:
- Thẻ table dùng để định nghĩa đây là 1 bảng
- Thẻ caption là một thẻ element con của table, được sử dụng để cung cấp thông tin về bảng.
- Thẻ thread dùng để định nghĩa tiêu đề các cột trong bảng, thread có thể chứa nhiều thẻ tr
- Thẻ tr là một thẻ element con của table dùng để định nghĩa tiêu đề các hàng trong bảng, tr có thể chứ nhiều thẻ th và td
- Thẻ th là một thẻ element con của tr dùng để định nghĩa tiêu đề các cột trong bảng, mỗi thẻ th là 1 cột
- Thẻ td là một thẻ element con của tr dùng để định nghĩa dữ liệu trong bảng, mỗi thẻ td là 1 dơn vị dữ liệu của 1 cột/hàng
- Thẻ tbody là một thẻ element con của table dùng để định nghĩa thân bảng, tbody có thể chứa 1 or nhiều thẻ tr

Cấu trúc trên cho thấy một TABLE có thể chứa nhiều cột và hàng, và mỗi hàng có thể chứa nhiều đơn vị dữ liệu.

# XPath selector
Gốm Xpath tuyệt đối và Xpath tương đối
- Xpath tuyệt đối: bắt đầu bằng / ví dụ: 
/html/body/div[2]/div[1]/input
- Xpath tương đối: bắt đầu bằng //, ví dụ:
//input[@id="username"]

# Playwright basic syntax
Cú pháp khai báo 1 test: 

import { test } from '@playwright/test';

test('<tên test>', async ({ page }) => {
// Code của test bao gồm các step
await test.step('Tên step', async () => {
// Code here
});
});

**Đi đến 1 link**:
await page.goto('https://pw-practice.playwrightvn.com/');

**Single click**
await page.locator("//button").click();

**Double click**
await page.locator("//button").dblclick();

**Click số lần bất kỳ**
await page.location("//button).click({clickCount: 5})

**Click chuột phải**
page.locator("//button").click({
button: 'right'
})
**Click chuột kèm bấm phím khác**
page.locator("").click({
modifiers: ['Shift'],
})

**Paste content vào một ô input**:
page.locator("//input").fill('Playwright
Viet Nam');

**Gõ từng chữ cái vào ô input**:
page.locator("//input").pressSequentially
('Playwright Viet Nam', {
delay: 100,
});

**Lấy giá trị hiện tại đang là check hay không**
const isChecked = page.locator("//input").isChecked();

**Check/ uncheck**
page.locator("//input").check();
page.locator("//input").setChecked(false);


**set timeout**
await page.waitForLoadState('networkidle')
or
test.setTimeout(480000);
