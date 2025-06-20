export default function Button() {
   const handleClick =() => console.log('What is happening');
   const handleClick2 = (name) => console.log(`${name} stop clicking`);
   

    return (
        <>
           <button onClick={() => handleClick2('Max')} >Click me</button>
         
        </>
    )
}