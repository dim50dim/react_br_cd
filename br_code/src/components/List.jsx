export default function List(props) {

    // fruits.sort((a,b) =>  b.name.localeCompare(a.name) )
    // fruits.sort((a,b) => b.calories - a.calories);

    // const lowCals = fruits.filter(fruit=> fruit.calories < 40)
    // const highCallCals = fruits.filter(fruit=> fruit.calories >= 40)
   
     const itemList = props.items;

    const listItems = itemList.map(fruit => <li key={fruit.id}>
                                                            {fruit.name} : &nbsp;
                                                           {fruit.calories}</li>)
    return (
        <ol>
            {listItems}
        </ol>
    )
}