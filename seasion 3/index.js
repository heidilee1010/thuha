// const array = [1, 2, 3, 4, "thuha"]
// console.log(array[0])
// //in ra man hinh
// for (let index = 0; index < array.length; index++) {
//     console.log(array[index])
// }
// // them phan tu moi vao đuôi mang 
// array.push("phan tu moi")
// //them phan tu moi vao đầu mảng
// array.unshift("phần tử mới trên đầu nè")

// // bản chất của một chuỗi - string
// const arr = ['t','h', 'u']
// const string = "thu"
// arr.join('')

// // xóa 1 phần tử 
// // xóa phần tử sau cùng
// array.pop();
// //xóa phần tử dựa trên chỉ số
// array.splice(0,1)

// // Cập nhật phân tử trong mảng
// array[1]= 789

// //thêm phần tử vào giữa mảng
// array.splice(1, 0, "mới thêm")
// // vị trí bắt đầu, vị trí muốn xóa, giá trị muốn thêm

// Triển khia thuật toán tìm kiếm tuyến tính
//Nhập vào 1 giá trị 
// Nếu giá trị có trong mảng ==> true
// Nếu giá trị không có tring mảng ==> false
const array= [2,34,55,65,6,4,443,4,5,654,72,5,3,10]
let a = prompt("nhập 1 giá trị")
for(let i = 0 ;i<array.length;i++){
    if(a==array[i]) {
    console.log("true")
} else{
    console.log("false")
}
}