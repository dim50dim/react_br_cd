export default function Button2() {
    let count = 0;
      
      const handleClick =(name)=> {
        if( count <= 4) {
                 count++;
                 console.log(`${name} you did it ${count} times`);
        
      }else{
           console.log(`${name} my boy you did it too many times`);
           
      }
       }
    return(
        <>
           <button  onClick={ () => handleClick('Max')} >We Try</button>
        </>
    )
}
 