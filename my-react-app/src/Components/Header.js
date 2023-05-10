import Button from "./Button";
import PetCard from "./PetCard";

function Header(){
    return(
      <header>
      <h1>PetLand</h1>
      <nav>
        <Button buttonIcon="👤"  buttonName="Login"></Button>
  
      </nav>
    </header>
        
    )
  }
   export default Header;