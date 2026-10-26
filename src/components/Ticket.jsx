function Ticket (props){
    return(
        <div>
<h3> {props.movie}</h3>
<p> Hall: {props.hall} | Seat: {props.seat}</p>
<p> price: {props.price} | with popcorn: {props.price + 15} NIS</p>
<p> Tickets: {props.count}</p>
<p>total: ({props.price * props.count}) </p>
</div>
    )
  
}
export default Ticket;