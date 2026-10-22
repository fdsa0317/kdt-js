// 콜백함수 연습
// 1. 1~100까지 짝수만 더한 결과 값의 2를 곱하고 출력
const getTotalBy100 = (callback) => {
    let total = 0
    for(let i = 0; i <= 100; i+=2){
        let n = i
        total += n
    }
    callback(total)
}

const mulBy2 = (num, callback) => callback(num * 2)
getTotalBy100((total) => {mulBy2(total, console.log)})

// 2. 2개 정수 중 큰 값과 작은 값을 비교한 후 큰 값의 10을 곱하고 반환
const getMax = (num1, num2, callback) => {
    let result = 0
    if(isNaN(num1) || isNaN(num2)){ 
        console.log("정수가 아닙니다")
        result = -1
    }

    if(num1 === num2){
        console.log("두 수가 같습니다")
        result = -1
    }else if(num1 > num2){
        result = num1
    }else {
        result = num2
    }
    return callback(result)
}

const mulBy10 = (num) => num * 10

let result2 = getMax(10, 20, (max) => mulBy10(max))
console.log(result2)