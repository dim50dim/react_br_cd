export default function Button() {
  const handleClick = () => console.log('WORKED');
  

    return(
        <>
           <button onClick={handleClick} >Click us</button>
        </>
    )
}