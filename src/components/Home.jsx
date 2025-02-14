
const Home = () => {
const handleClick = (e) =>{
  console.log('Hello, Rachel',e)
}

const handleClickAgain = (name,e) =>{
  console.log('Hello'+ name,e.target);
}
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={(e) =>handleClickAgain('Rachel',e)}>Click Me Again</button>
    </div>
   );
}

export default Home;