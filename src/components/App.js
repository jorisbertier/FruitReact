import '../styles/App.css'
import { useState } from 'react'
import Fruit from './Fruit'
import { Form } from './Form'

function App() {

  const [fruits, setFruits] = useState([
    {id: 1, nom: 'abricot'},
    {id: 2, nom: 'pêche'},
    {id: 3, nom: 'fraise'},
  ])



  const handleDelete = (id) => {
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
        <Fruit
        handleDelete={handleDelete}
        fruit={fruit}
        index={index}/>
        )}
      </ul>
      <Form fruits={fruits} setFruits={setFruits}
      />
    </div>
  );
}

export default App;
