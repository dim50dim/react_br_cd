export default function ProfilePicture() {
     const imageUrl = './src/assets/react.svg'
    const handleClick = (e) => e.target.style.dispaly = 'none';
    
    return (
        <>
           <img src={imageUrl} onClick={(e) => handleClick(e)} />
        </>
    )
}