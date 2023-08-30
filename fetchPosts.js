
function loadPosts(){

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=>res.json())
  .then(data=>displayPosts(data))
}
loadPosts();

function displayPosts(posts){
  console.log(posts)
  const postsContainer = document.getElementById('posts-container')
  for(const post of posts){
    console.log(post);
    const div = document.createElement('div')
    div.classList.add('post-style')
    div.innerHTML = 
    `
      <h4>User: ${post.id}</h4>
      <p>${post.title}</p>
      <p>${post.body}</p>
    `

    postsContainer.appendChild(div)
  }
}