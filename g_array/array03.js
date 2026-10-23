// 1. 1~10까지 누적합 구하기
const arr1 = new Array(10).fill(0).map((_, i) => i + 1)
console.log(arr1.reduce((acc, data, i, arr) => acc + data, 0))

// 2. 1~10까지 배열에 담고 값이 5보다 크다면 값을 2배로 변경후 원본 배열을 출력
const arr2 = new Array(10).fill(0).map((data, i) => i + 1).map((_, i) => i > 5 ? i * 2 : i)
console.log(arr2)

// 3. 10, 20, 30, 40, 50을 배열에 담고 내림차순 정렬하기 
const arr3 = new Array(5).fill(0).map((data, i) => (i + 1) * 10).sort((a, b) => b - a)
console.log(arr3)

// 4. array의 고차 함수로 사용하여 a개수 구하기
// "abcccddeaddddadwefdaasdasdjkasdhkjw"
const aCount = "abcccddeaddddadwefdaasdasdjkasdhkjw".split("a").length - 1
console.log(aCount)