function Card(props){
    return(
    <div classname="card">
    <h2>{props.cardHeading}</h2>
    {props.children}
  </div>
  
  )};
  
    export default Card;  