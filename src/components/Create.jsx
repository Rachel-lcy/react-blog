import { useState } from "react"

export default function Create() {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')

  return (
    <div className='create'>
      <h2>Add a new blog</h2>
      <from>
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
         <button>Add Blog</button>
         <p>{title}</p>
         <p>{body}</p>
         <p>{author}</p>

      </from>
    </div>
  )
}
