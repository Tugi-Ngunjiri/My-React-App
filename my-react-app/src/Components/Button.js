function Button(props){
    return(
      <div>
        <button>
          <span role="img">{props.buttonIcon}</span>
          {props.buttonName}
       </button>
    </div>)}

    export default Button;