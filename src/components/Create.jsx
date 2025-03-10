import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = (e)=>{
    e.preventDefault();
    const blog ={title,body,author};
    console.log(blog)

    setIsPending(true);

    fetch('http://localhost:8000/blogs',{
      method: 'POST',
      Headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(blog)
    }).then(()=>{
      console.log('new blog added');
      setIsPending(false);
      navigate('/');
    })
  }

  return (
    <div className='create'>
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Blog Title</label>
        <input
          type="text"
          required
          value ={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}

        />
        <label htmlFor="">Blog Body</label>
         <textarea
          required
          value ={body}
          onChange={(e)=>{
            setBody(e.target.value)
          }}
         >
         </textarea>
         <label htmlFor="">Blog Author:</label>
         <select
         value={author}
         onChange = {(e)=> setAuthor(e.target.value)}
         >
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
         </select>
         {!isPending && <button>Add Blog</button>}
         {isPending && <button disabled>Adding blog...</button>}

      </form>
    </div>
  )
}
