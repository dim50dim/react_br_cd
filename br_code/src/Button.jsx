export default function Button() {
   const handleClick =() => console.log('What is happening');
   

    return (
        <>
           <button onClick={handleClick} >Click me</button>
         
        </>
    )
}