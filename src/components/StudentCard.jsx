function StudentCard(props){
    return(
        <div>
            <h2>Name:{props.name} </h2>
            <p>Age: {props.age}</p>
            <p>Class: {props.class}</p>
        </div>
    )
}
export default StudentCard;