import '../styles/App.css'
import { useState } from 'react'

function App() {

  const [fruits, setFruits] = useState([
    {id: 1, nom: 'abricot'},
    {id: 2, nom: 'pêche'},
    {id: 3, nom: 'fraise'},
  ])

  const [newFruit, setNewFruit] = useState('')

  const handleChange = (event) => {
    // console.log(event.target.value)
    setNewFruit(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //1 copie du state
    const copyFruits = [...fruits]
    // manipuler
    const id = new Date().getTime();
    const nom = newFruit;
    copyFruits.push({id: id, nom: nom})
    //setter
    setFruits(copyFruits)
  }

  const handleClick = (id) => {
    // alert(fruits.nom);
    //1 copie du state

    const copyFruits = [...fruits]
    //2 maniouler mon state
    const updateCopyFruits = copyFruits.filter((fruit) => fruit.id !== id)
    console.log(updateCopyFruits)
    //3 setter mon state
    setFruits(updateCopyFruits)
  }
  
  return (
    <div className="App">
      <ul>
        {fruits.map((fruit, index) =>
        <li key={index}>{fruit.nom}
          <button onClick={() => handleClick(fruit.id)}>X</button>
        </li> )}
      </ul>
      <form action='submit' onSubmit={(e) => handleSubmit(e)}>
        <input placeholder='ajoute un fruit' onChange={handleChange}></input>
        <button>add</button>
      </form>
    </div>
  );
}

export default App;
