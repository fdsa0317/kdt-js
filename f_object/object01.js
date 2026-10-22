// 객체의 생성
// 프로토타입 -> Object
// 참조 레퍼런스 타입

// 객체 생성자 문법
// const: 주소를 변경하지 못하게 하는 키워드
const user1 = new Object()
// 객체 리터럴 문법
const user2 = {}

// 객체 접근법
const user3 = {
    name: "노퓨어진성",
    age: 50 / 2,
    address: "잠실(부자동네)"
}

// 닷 접근법(.)
// console.log(user3.name)

// 대괄호 접근법([]): 변수를 사용하고 싶을 때 사용하는 접근법
// for(let i in user3){
//     console.log(user3[i])
// }

console.log(user3)
user3.name = "장보고"
console.log(user3)

user3 = new Object()