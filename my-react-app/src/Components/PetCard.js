import Header from './Header'
import Card from './Card';

// render a <li> for each element in the favSnacks array
// remember to use a unique key prop

function PetCard(props) {
  console.log(props)
  return (
    <div className="card">
        <Header/>
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
      <h3>Favorite Snacks</h3>
      <ul>
      {/* render snacks here */}
      <li></li>
      <li></li>
      <li></li>
      </ul>
    </div>
  )
}

export default PetCard;