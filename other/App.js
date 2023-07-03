import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Mine from "./mine";
import FetchData from "./fetch";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  //   const [todos, setTodos] = useState([]);
  //   const [inputValue, setInputValue] = useState("");

  //   const handleInputChange = (e) => {
  //     setInputValue(e.target.value);
  //   };

  //   const handleAddTodo = () => {
  //     if (inputValue) {
  //       setTodos([...todos, inputValue]);
  //       setInputValue("");
  //     }
  //   };

  //   const handleDeleteTodo = (index) => {
  //     const newTodos = [...todos];
  //     newTodos.splice(index, 1);
  //     setTodos(newTodos);
  //   };

  //   return (
  //     <div>
  //       <h1>To-Do App</h1>
  //       <div>
  //         <input type="text" value={inputValue} onChange={handleInputChange} />
  //         <button onClick={handleAddTodo}>Add</button>
  //       </div>
  //       <ul>
  //         {todos.map((todo, index) => (
  //           <li key={index}>
  //             {todo}
  //             <button onClick={() => handleDeleteTodo(index)}>Delete</button>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }
  //   const [posts, setPosts] = useState([]);
  //   const [title, setTitle] = useState("");
  //   const [content, setContent] = useState("");

  //   const handleTitleChange = (e) => {
  //     setTitle(e.target.value);
  //   };

  //   const handleContentChange = (e) => {
  //     setContent(e.target.value);
  //   };

  //   const handleAddPost = () => {
  //     if (title && content) {
  //       const newPost = {
  //         title: title,
  //         content: content,
  //       };

  //       setPosts([...posts, newPost]);
  //       setTitle("");
  //       setContent("");
  //     }
  //   };

  //   const handleDeletePost = (index) => {
  //     const newPosts = [...posts];
  //     newPosts.splice(index, 1);
  //     setPosts(newPosts);
  //   };

  //   return (
  //     <div>
  //       <Mine />
  //       <h1>Blog</h1>
  //       <div>
  //         <input
  //           type="text"
  //           placeholder="Title"
  //           value={title}
  //           onChange={handleTitleChange}
  //         />
  //         <textarea
  //           placeholder="Content"
  //           value={content}
  //           onChange={handleContentChange}
  //         ></textarea>
  //         <button onClick={handleAddPost}>Add Post</button>
  //       </div>
  //       <div>
  //         <ui>
  //           {posts.map((post, index) => (
  //             <li key={index}>
  //               <h2>{post.title}</h2>
  //               <p>{post.content}</p>
  //               <button onClick={() => handleDeletePost(index)}>Delete</button>
  //             </li>
  //           ))}
  //         </ui>
  //       </div>
  //     </div>
  //   );
  // }
  // export default App;
  // import React, { useState, useEffect } from "react";

  // function App() {
  //   const [posts, setPosts] = useState([]);
  //   const [title, setTitle] = useState("");
  //   const [content, setContent] = useState("");

  //   useEffect(() => {
  //     // Load blog posts from storage
  //     const storedPosts = JSON.parse(localStorage.getItem("blogPosts"));
  //     if (storedPosts) {
  //       setPosts(storedPosts);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     // Save blog posts to storage
  //     localStorage.setItem("blogPosts", JSON.stringify(posts));
  //   }, [posts]);

  //   const handleTitleChange = (e) => {
  //     setTitle(e.target.value);
  //   };

  //   const handleContentChange = (e) => {
  //     setContent(e.target.value);
  //   };

  //   const handleAddPost = () => {
  //     if (title && content) {
  //       const newPost = {
  //         title: title,
  //         content: content,
  //       };

  //       setPosts([...posts, newPost]);
  //       setTitle("");
  //       setContent("");
  //     }
  //   };

  //   const handleDeletePost = (index) => {
  //     const newPosts = [...posts];
  //     newPosts.splice(index, 1);
  //     setPosts(newPosts);
  //   };

  //   return (
  //     <div>
  //       <h1>Blog</h1>
  //       <div>
  //         <input
  //           type="text"
  //           placeholder="Title"
  //           value={title}
  //           onChange={handleTitleChange}
  //         />
  //         <textarea
  //           placeholder="Content"
  //           value={content}
  //           onChange={handleContentChange}
  //         ></textarea>
  //         <button onClick={handleAddPost}>Add Post</button>
  //       </div>
  //       <ul>
  //         {posts.map((post, index) => (
  //           <li key={index}>
  //             <h2>{post.title}</h2>
  //             <p>{post.content}</p>
  //             <button onClick={() => handleDeletePost(index)}>Delete</button>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }
  return (
    <div>
      <FetchData />
    </div>
  );
}
export default App;
