export default function List(props) {

    // fruits.sort((a,b) =>  b.name.localeCompare(a.name) )
    // fruits.sort((a,b) => b.calories - a.calories);

    // const lowCals = fruits.filter(fruit=> fruit.calories < 40)
    // const highCallCals = fruits.filter(fruit=> fruit.calories >= 40)
     const category = props.category;
     const itemList = props.items;
     
    const listItems = itemList.map(item => <li key={item.id}>
                                                            {item.name} : &nbsp;
                                                           {item.calories}: &nbsp;
                                                           {item.price}
                                                           </li>)
    return (
        <>
          <h3 className="list-category"> {category} </h3>
           <ol className="list-items">
            {listItems}
           </ol>
        </>
      
    )
}
List.defaultProps = {
    category: 'Category',
    items: [],
}