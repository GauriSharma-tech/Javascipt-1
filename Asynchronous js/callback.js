// Asynchronous JavaScript is a programming paradigm that allows for non-blocking operations.
// It enables the execution of code without waiting for previous operations to complete, which is particularly useful for tasks like network requests, file I/O, and timers.
// This is achieved through mechanisms like callbacks, promises, and async/await syntax.

//---------------------------------------------------------------------------------------------------
//CALLBACKS: callbacks are functions passed as arguments to other functions, allowing for asynchronous execution.
// They are often used in event handling, timers, and network requests.

const posts = [
    { title: 'Post 1', body: 'This is post 1' },
    { title: 'Post 2', body: 'This is post 2' },

];

getposts = () => {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000)
}

// createPost = (post) => {
//     setTimeout(() => {
//         posts.push(post);
//     },2000)
// }

//this is where the asynchronous code is executed as it will not diplay post 3 as getposts is takking 1 second to execute and createPost is taking 2 seconds



//so using callbacks we can make sure that createPost is executed first and then getposts is executed by passing getposts as a callback function to createPost


createPost = (post,callback) => {
  setTimeout(() => {
      posts.push(post);
      callback();
  }, 2000);
};

getposts();
createPost({title :'Post 3', body : 'This is post 3'},getposts);
