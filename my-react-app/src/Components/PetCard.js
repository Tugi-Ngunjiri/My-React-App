import ListItem from "./ListItem";

function PetCard(favSnacks, name, image) {

console.log(favSnacks);

const favSnacksList = favSnacks.map((favSnack) =>{ <ListItem favSnack={favSnack}></ListItem>
  return <li key={favSnack}>{favSnack}</li>
}
  );


  console.log(favSnacksList);
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
      
      <ul>
      {/* render snacks here */}
    {favSnacksList}
      </ul>
    </div>
  )
}

export default PetCard;