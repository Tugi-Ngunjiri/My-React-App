import Card from "./Card"
import Button from "./Button"

function Main(Props){
    return(
      <main>
         <Card cardHeading="Welcome to Petland!"> 
           <em>Find your dream Pet</em>
           </Card>
               <Card cardHeading="What would you like to see?"> 
            <div>
                <Button buttonIcon="😸"  buttonName="Cat"></Button>
                <Button buttonIcon="🐕"  buttonName="Dog"></Button>
          </div>
           </Card>
             
           </main> 
           )}

           export default Main;