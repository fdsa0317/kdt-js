// switch: 값을 이미 알고 있을 때 사용하는 분기문
// switch(값){}

const choice = "한식"

switch(choice){
    case "중식": {
        let menu = "짜장면"
        console.log(menu)
        break
    }
    case "한식": {
        let menu = "텀블러비어"
        console.log(menu)
        break
    }
    case "일식":
        console.log("돈까스")
        break
    default:
        console.log("굷기")
        break
}