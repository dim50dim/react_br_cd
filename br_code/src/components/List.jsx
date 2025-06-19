export default function List() {
    const fruits = [
        {id:1,name:'apple',calories: 44},
        {id:2,name: 'orange',calories: 33},
        {id:3,name: 'banana',calories: 66},
        {id:4,name: 'pineapple',calories:22},
    ]
    // fruits.sort((a,b) =>  b.name.localeCompare(a.name) )
    // fruits.sort((a,b) => b.calories - a.calories);

    
    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                                            {fruit.name} : &nbsp;
                                                           {fruit.calories}</li>)
    return (
        <ol>
            {listItems}
        </ol>
    )
}