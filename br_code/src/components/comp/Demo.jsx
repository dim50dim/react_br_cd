import { useState } from "react"

const allUsers = [
    'john',
    'alex',
    'george',
    'simon',
    'james',
]

export default function Demo() {
  const [users,setUsers] = useState(allUsers);

  const handleSearch = (text) => {
    const filterUsers = allUsers.filter((user) => 
        user.includes(text),
);
  setUsers(filterUsers);
  }
    return(
        <>
<div className="tutorial">
    <div className="align-center mb-2 flex">
        <button  > Shuffle</button>
    </div>
</div>
          
        </>
    )
}