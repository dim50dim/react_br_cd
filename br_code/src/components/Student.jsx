export default function Student(props) {
    return (
        <>
            <div className="">
                 <p>Name  : {props.name} </p>
                 <p>Age  : {props.age} </p>
                 <p>Student  : {props.isStudent ? 'Yes' : 'No'} </p>
            </div>
        </>
    )
}