// https://jsonplaceholder.typicode.com/posts
// 타이틀만 가져오기
const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    if(!response.ok) throw new Error("data fetching failed")
    const datas = await response.json()
    return datas
}

getPosts()
    .then((posts) => posts.map((post) => post.title))
    .then((titles) => console.log(titles))
    .catch((err) => console.log(err))