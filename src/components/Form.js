import React from 'react'
import { useState } from 'react'
import '../styles/Form.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export const Form = ({fruits, setFruits}) => {
const [addFruit, setAddFruit] = useState('')

  const handleChange = (event) => {
    // console.log(event.target.value)
    setAddFruit(event.target.value)
  }

//   const handleAdd = () => {
//   }

  const handleSubmit = (event) => {
    event.preventDefault()
    //copy
    const copyFruits = [...fruits]

    //manipuler
    const id = new Date().getTime()
    const nom = addFruit;
    const fruitToAdd = {id, nom}
    copyFruits.push(fruitToAdd)
    // console.log(copyFruits)
    // setter
    setFruits(copyFruits)
  }
  
    return (
    <form type='submit' onSubmit={handleSubmit}>
        <TextField onChange={handleChange} id="outlined-basic" label="Field fruit" variant="outlined" ></TextField><br></br>
        <Button variant="contained"  size="small" type='submit'>Add</Button>
      </form>
  )
}
