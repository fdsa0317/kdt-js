let data1 = 10
let data2 = 20

// console.log(data1 || true)
// 앞의 값이 false라면 || "초기값"
// console.log(false || "홍길동")

// console.log(data1 && true)
// console.log(true && data1)

// 만약 파이썬이었다면?
// ※문법에 익숙해져야함(Next TSX 문법 if문이 없다.)
// 10 >= 11 ? (
//     console.log("a")
// ) : (
//     console.log("b")
// )

// false가 아닌데 false로 취급되는 값
console.log(Boolean(10))
console.log(Boolean(NaN)) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean("")) // false
console.log(Boolean(0)) // false
console.log(Boolean(" ")) // 공백문자도 값이다. (true)
console.log(Boolean([]))
console.log(Boolean({}))