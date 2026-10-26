// fetch 함수 연습하기!
// 1. "https://jsonplaceholder.typicode.com/todos"
// completed가 false인 데이터만 가져와서 출력하기

const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const datas = await response.json()
    return datas
}

getTodos()
    .then ((todoses) => todoses.filter((todos) => todos.completed === false))
    .then ((complets) => console.log(complets))
    .catch ((err) => console.log(err))

// 2. https://jsonplaceholder.typicode.com/comments
// email에서 id만 추출해서 id리스트로 출력하기

const getComments = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments")
    const datas = await response.json()
    return datas
}

getComments()
    .then ((comments) => comments.map((comment) => comment.email.split("@")))
    .then ((email) => console.log(email))
    .catch((err) => console.log(err))

// 3. https://jsonplaceholder.typicode.com/users
// name만 가져와서 모두 거꾸로 만들고 거꾸로된 names 리스트로 출력하기

const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const datas = await response.json()
    return datas
}

getUsers ()
    .then ((users) => users.map((user) => user.name.split("").reverse().join("")))
    .then ((names) => console.log(names))
    .catch ((err) => console.log(err))

// 4. https://jsonplaceholder.typicode.com/posts
// 20부터 35까지만 자르고, body만 가져와서 body리스트로 출력하기

const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const datas = await response.json()
    return datas
}

getPosts()
    .then ((posts) => posts.slice(19, 35))
    .then ((posts) => posts.map((post) => post.body))
    .then ((bodies) => console.log(bodies))
    .catch((err) => console.log(err))

// 쌤 풀이
// fetch 함수 연습하기!
// 1. "https://jsonplaceholder.typicode.com/todos"
// completed가 false인 데이터만 가져와서 출력하기
// const getDatas = async (url) => {
//     const response = await fetch(url)
//     if(!response.ok) throw new Error("getDatas fetching failed")
//     const datas = await response.json()
//     return datas
// }

// getDatas("https://jsonplaceholder.typicode.com/todos")
//     .then((todos) => todos.filter(({completed}) => !completed)) // 구조분해할당
//     .then(console.log)
//     .catch(console.error)


// 2. https://jsonplaceholder.typicode.com/comments
// email에서 id만 추출해서 id리스트로 출력하기
// const emailSplit = ({email}) => email.split("@")[0]

// getDatas("https://jsonplaceholder.typicode.com/comments")
//     .then((comments) => comments.map(emailSplit)) // 참조형
//     .then(console.log)
//     .catch(console.error)

// 3. https://jsonplaceholder.typicode.com/users
// name만 가져와서 모두 거꾸로 만들고 거꾸로된 names 리스트로 출력하기
// getDatas("https://jsonplaceholder.typicode.com/users")
//     .then((users) => users.map(({name}) => name))
//     .then((names) => names.map((name) => name.split("").reverse().join("")))
//     .then((names) => console.log(names))
//     .catch(console.error)

// 4. https://jsonplaceholder.typicode.com/posts
// 20부터 35까지만 자르고, body만 가져와서 body리스트로 출력하기
// getDatas("https://jsonplaceholder.typicode.com/posts")
//     .then((posts) => posts.slice(19, 35))
//     .then((posts) => posts.map(({body}) => body))
//     .then(console.log)
//     .catch(console.error)