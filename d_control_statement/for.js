// for문
// 횟수를 알 때 사용하는 문장
// for(let i = 0; i < 10; i++){
//     console.log(i)
// }

// 배열.length: 배열의 데이터 수
// enumerate(arr1) -> (1, 10)
const arr1 = [10, 20, 30, 40]
// for(let i = 0; i < arr1.length; i++){
//     console.log(i, arr1[i])
// }

// 빠른 for문
// for ~ in 객체: index 접근하는 반복문
// for(let i in arr1){
//     console.log(i)
// }

// for ~ of 객체: 값 접근하는 반복문
for(let i of arr1){
    console.log(i)
}

for(let i = 0; i < 10; i+=2){
    console.log(i)
}