// ※ 배열의 고차 메소드
// 매개변수의 콜백함수로 결과를 다르게 반환하는 메소드

// .forEach(callback(data, i, arr))
// 값을 순차적으로 접근하고 반복문을 처리하는 메서드

// const arr1 = new Array(10).fill(0)

// arr1.forEach((data, i, array) => {
//     array[i] += i + 1
// })
// console.log(arr1)

// ※ .map(callback(data, i, arr))
// 베열의 값을 변경한 후 [새로운 배열]로 반환하는 메소드
// 리턴하는 값을 모은다***
// const arr2 = new Array(10).fill(0).map((data, i) => i + 1)
// console.log(arr2)


// 체이닝(stream 문법)
// const arr2 = new Array(10)
//     .fill(0)
//     .map((_, i) => i + 1)
//     .map((data) => data * 10)

// console.log(arr2)

// ※ .filter(callback(data, i, array))
// 값을 순차적으로 접근하고 조건식을 만족하는 값들만 [새로운 배열]로 반환하는 메소드

// 짝수만 걸러내기!
// const evenArr = new Array(10).fill(0).map((_, i) => i + 1).filter((n) => n % 2 === 0)
// console.log(evenArr)

// .indexOF(값)
// 값을 해당 Array에서 찾은 뒤 인덱스 번호를 반환하는 메소드, 찾지 못하면 -1 반환
// console.log(evenArr.indexOf(8))

// ※ .find(callback(data, i, array))
// 값을 순차적으로 접근하고 조건식을 만족하는 첫 번째 값을 리턴하는 메소드
// ※ .find(callback(data, i, array))
// 값을 순차적으로 접근하고 조건식을 만족하는 첫 번째 값을 리턴하는 메소드
const user1 = {
    name: "홍길동",
    age: 20,
    point: 5000
}
const user2 = {
    name: "장보고",
    age: 30,
    point: 10000
}
const user3 = {
    name: "이순신",
    age: 40,
    point: 15000
}

const users = [user1, user2, user3]
// 유저의 포인트가 1만이 넘어가는 유저 조회
// const userArr = users.filter((user) => user.point >= 10000)
// const foundMember = users.find((user) => user.point >= 10000)
// console.log(foundMember)

// ※ .some(callback(data, i, array))
// 값을 순차적으로 접근하고 조건식을 만족하는 값이 있는지 없는지를 확인후 boolean 리턴하는 메서드
// 회원가입 이메일 중복확인
// console.log(users.some((user) => user.name === "홍길동"))

// ※ .reduce(callback(accumulate(누적값), data, i, array). accumulate 초기값)
// 모든 값을 순회하고 마지막에 accumulate 값을 반환한다.
const arr10 = new Array(10).fill(0).map((_, i) => i + 1).map((n) => n * 10)

// 누적합
// const total = arr10.reduce((acc, data, i, arr) => acc + data, 0)
// console.log(total)

const datas = [
    {name: "야옹이", age: 5},
    {name: "누렁이", age: 10},
    {name: "점박이", age: 7},
    {name: "얼룩이", age: 6},
]

// 필요한 데이터를 모아서 반환할 때
const result = datas.reduce((acc, data) => {
    if(data.age >= 7){
        acc.push(data.name)
    }
    return acc
}, [])

console.log(result)

// .from()
// 유사배열객체를 배열로 변경
const obj = {
    0: "1번값",
    1: "1번값",
    length: 2
}

console.log(Array.from(obj))