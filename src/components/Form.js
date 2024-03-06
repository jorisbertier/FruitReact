import React from 'react'
import { useState } from 'react'

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
        <input onChange={handleChange}></input>
        <button>Add</button>
      </form>
  )
}
