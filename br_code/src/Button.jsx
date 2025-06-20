export default function Button() {
    const handleClick = (e) => console.log(e.target.textContent = 'HOW');
    
        
        return(
            <button onDoubleClick={handleClick}>Click me</button>
        )
}