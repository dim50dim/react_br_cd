export default function List() {
    const fruits = ['apple','orange', 'banana','pineapple'];
    
    const listItems = fruits.map(fruit => <li> {fruit} </li>)
    return (
        <ol>
            {listItems}
        </ol>
    )
}