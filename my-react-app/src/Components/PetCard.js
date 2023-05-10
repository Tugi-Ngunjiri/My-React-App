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
      <li>Fezzik<li> 1.Peanut butter , 2.Soccer Balls</li></li>
      <li>Lucy<li>1.Cake , 2.Bacon</li></li>
      <li>Blaise<li>1.Pigeons , 2.Grass , 3.Chicken</li></li>
      </ul>
    </div>
  )
}

export default PetCard;