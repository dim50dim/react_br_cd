export default function Button2() {
    let count = 0;
      const handleClick =()=> console.log('where do you go now');
      const handleClick2 =(name)=> {
        if( count <= 4) console.log(`${name} you did it ${count} times`);
      }else{
        
        
      }
    return(
        <>
           <button onClick={handleClick}>We Try</button>
        </>
    )
}