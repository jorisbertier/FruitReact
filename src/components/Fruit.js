import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import '../styles/Fruit.css'

export const Fruit = ({index,fruit, handleDelete}) => {
    
  return (
    
        <li key={index}>{fruit.nom}
          <button onClick={() => handleDelete(fruit.id)}>
            <DeleteOutlineIcon 
            className='deleteIcon'
            fontSize="small"
            />
            </button>
        </li> 
  )
}


export default Fruit