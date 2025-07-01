export default function Button() {
   
  const handleClick = (e) => {
     e.target.textContent = 'what is this happened'
        
  }
  
    return(
        <>
           <button onClick={(e) => handleClick(e)} >Click us</button>
        </>
    )
}