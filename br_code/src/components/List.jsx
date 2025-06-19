export default function List(props) {

    // fruits.sort((a,b) =>  b.name.localeCompare(a.name) )
    // fruits.sort((a,b) => b.calories - a.calories);

    // const lowCals = fruits.filter(fruit=> fruit.calories < 40)
    // const highCallCals = fruits.filter(fruit=> fruit.calories >= 40)
   const category = props.category;
     const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                                            {item.name} : &nbsp;
                                                           {item.calories}</li>)
    return (
        <>
          <h3> {category} </h3>
        <ol>
            {listItems}
        </ol>
        </>
      
    )
}