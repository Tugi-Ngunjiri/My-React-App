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
      <img src={image} alt={name} />
      <h3>Favorite Snacks</h3>
      <ul>
      {/* render snacks here */}
    {favSnacksList}
      </ul>
    </div>
  )
}

export default PetCard;