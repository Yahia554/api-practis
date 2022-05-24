// load data
const loadComment = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComent(data))
}
// daiect load data
loadComment()
// disply te comment data arrow function use 
const displayComent = data => {
    // foreach use the daynamic html element and coment id , name ,body and class add
    const divContainer = document.getElementById('comments');
    data.forEach(data => {
        const div = document.createElement('div')
        div.classList.add('coment')
        div.innerHTML = `      <h1>Id:${data.id} </h1> <h3> name: ${data.name}</h3> <h4>Email: ${data.email}</h4> <p>  Body:${data.body}</p>`;
        divContainer.appendChild(div);
    })

}
// task 1 2 3  4 5 complite