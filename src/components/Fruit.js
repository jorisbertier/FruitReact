import React from 'react'

export const Fruit = ({index,fruit, handleDelete}) => {
    
  return (
    
        <li key={index}>{fruit.nom}
          <button onClick={() => handleDelete(fruit.id)}>X</button>
        </li> 
  )
}


export default Fruit