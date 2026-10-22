// 화살표 함수

// // 1. 입력받은 문자열을 뒤집어주는 함수
// // "abde" -> "edba"
// const reversed = (str) => {
//    return str.split("").reverse("").join("")
// }
// let rev = reversed("abcd")
// console.log(rev)

// // 쌤 풀이
// const reverse = (str) => {
//     let result = ""
//     for(let i = 0; i < str.length; i++){
//         result += str[str.length -1 - i]
//     }
//     return result
// }

// // 2. 3개의 매개변수를 전달하여 숫자의 개수 찾아주기
// // ex) 10, "a", 7
// // -> 정수 2개
// const cnt = (str1, str2, str3) => {
//     const strs = [str1, str2, str3]
//     let count = 0
//     for(let str of strs){
//         if (typeof str === "number"){
//             count++
//         }
//     }
//     return count
// }

// let cnts = cnt(5, 6, 10)
// console.log(cnts)

// // 쌤 풀이
// console.log(typeof("a") === "number")
// // 정수인지
// console.log(!isNaN(10))

// const getNumberCount = (data1, data2, data3) => !isNaN(data1) + !isNaN(data2) + !isNaN(data3)
// let result2 = getNumberCount(10, "a", 7)
// console.log(result2)

// const getNumberCount2 = (data1, data2, data3) => {
//     let total = 0
//     typeof(data1) === "number" && total++
//     typeof(data2) === "number" && total++
//     typeof(data3) === "number" && total++
//     return total 
// } 

// let result3 = getNumberCount2(10, "a", 7)
// console.log(result3)

// *args === ...args(가변 매개변수): rest parameter
const add = (...number) => {
    console.log(number)
}

add(10, 20, 30)

const add2 = (data1, data2) => data1 + data2
console.log(add2(10))

// default parameter
const init = () => 0
const add3 = (data1, data2 = 0) => data1 + data2
const add4 = (data1, data2 = init) => data1 + data2
const add5 = (data1, data2 = (() => 0)()) => data1 + data2
console.log(add5(100))