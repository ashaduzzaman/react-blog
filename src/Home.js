const Home = () => {

    const handleClick = (e) => {
        console.log('hello, ovi', e.target);
    }
    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => {
                handleClickAgain('ashad',e)
            }}>Click me again</button>
        </div>
     );
}
 
export default Home;