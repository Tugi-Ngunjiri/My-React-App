function Button({buttonIcon , buttonName}){
    return(
      <div>
        <button>
          <span role="img">               
          {buttonIcon}</span>
          {buttonName}
       </button>
    </div>)}

    export default Button;