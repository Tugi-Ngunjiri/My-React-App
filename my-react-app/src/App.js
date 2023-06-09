import Header from "./Components/Header";
import PetCard from "./Components/PetCard";

const pets = [
  {
    id: 1,
    name: "Fezzik",
    image: "https://media.istockphoto.com/id/93393143/photo/old-english-sheepdog.jpg?s=612x612&w=0&k=20&c=QBBph4Rk7F4pzIT_VQdLzATnuF2NBRayk1xjwriEsLw=",
    favSnacks: ["Peanut Butter", "Soccer Balls"],
    isAdopted: false
  },
  {
    id: 2,
    name: "Lucy",
    image: "https://emborapets.com/wp-content/uploads/2020/08/Why-Does-My-Springer-Spaniel-Smell-So-Bad_.jpg",
    favSnacks: ["Cake", "Bacon"],
    isAdopted: true
  },
  {
    id: 3,
    name: "Blaise",
    image: "https://www.thesprucepets.com/thmb/P8d4QM0bI4rJh1WygZDI8f8kNV4=/1000x1000/smart/filters:no_upscale()/GettyImages-870255568-8639765b08c6441dbe35ed72e2d8fb48.jpg",
    favSnacks: ["Pigeons", "Grass", "Chicken"],
    isAdopted: true
  }
]

const isLoggedIn = true;

function App() {
  const petCards = pets.map((pet) => {
    return <PetCard name={pet.name} image={pet.image} favSnacks={pet.favSnacks} isAdopted={pet.isAdopted} key={pet.id} />
  });
  
  return (
    <div className="container">
      <Header isLoggedIn={isLoggedIn} />
      <main>
        {petCards}
      </main>
    </div>
  );
}

export default App;