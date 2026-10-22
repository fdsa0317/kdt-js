// 얕은 복사와 깊은 복사

// let name1 = "승현"
// let name2 = name1
// name2 += "짱"

// console.log(name1, name2)

// 얕은 복사
// const animal1 = {
//     dog: "누렁이",
//     cat: "점박이",
//     cow: "얼룩이" 
// }

// const animal2 = animal1
// animal1.dog = "누렁스"

// console.log(animal1, animal2)

// 깊은 복사 (1번째)
// Object.assign(target, source)
// const animal1 = {
//     dog: "누렁이",
//     cat: "점박이",
//     cow: "얼룩이" 
// }

//static
// const animal2 = Object.assign({}, animal1)
// animal1.dog = "누렁스"
// console.log(animal1, animal2)

// 깊은 복사(1depth)
// lodash
// const animal3 = {
//     dog: "누렁이",
//     cat: "점박이",
//     human: {
//         name: "이승현",
//         age: 20
//     } 
// }

// const animal4 = Object.assign({}, animal3)
// animal3.human.name = "승현"
// console.log(animal3, animal4)

// 깊은 복사(1depth) - spread문법(객체를 위한 문법)
// const students = {
//     student1: "만약에 수민",
//     student2: "가나디 혜진",
//     student3: "이예나 삼예나",
//     student4: "금요일에 휴가쓰는 슬기"
// }

// const students2 = {...students, student1: "스트레칭 수민"}
// students.student1 = "스트레칭 수민"
// console.log(students, students2)

// 배열의 spread
const arr1 = [10, 20, 30]
const arr2 = [100, 200, 300]
const arr3 = [1, 2, 3]
const newArr = [...arr1, ...arr2, ...arr3]
console.log(newArr)

// Math
console.log(Math.min(...arr1))
console.log(Math.max(...arr1))