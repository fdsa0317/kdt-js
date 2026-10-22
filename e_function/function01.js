// 두 수를 전달하면 두 수를 더해주는 함수
// 일반 함수
// function add(num1, num2){
//     return num1 + num2
// }

// let result = add(10, 20)
// console.log(result)

// 화살표 함수(ES6) === lambda
const getFullName1 = (lastNme, firstName) => {
    return lastNme + firstName
}

let fullName = getFullName("홍", "길동")
console.log(fullName)

// 매개변수가 1개라면 소괄호 생략이 가능하다.
// ※단 권장하지 않는다.
const getFullName2 = lastNme => {
    return lastNme + firstName
}

// 중괄호와 returen 키워드가 없다면 통째로가 리턴값이다.
const getFullName3 = lastNme => lastNme + firstName

// Enter를 치고 싶다면 () 최우선 연산자로 감싸야한다.
const getFullName4 = lastNme => (
    lastNme + firstName
)