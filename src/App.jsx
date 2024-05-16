import { useState } from 'react'
import './css/App.css'



const Button = ({name, type, onClick}) => <button type={type} onClick={onClick} >{name}</button>

const showCount = true

const todos = [
  'Prenster react',
  'faire a manger',
  'Faire le menage'
]


function App() {
  const [person, setPerson] = useState({
    firstname : 'Jhon',
    lastname: 'Doe',
    age : 18
  })

  const [count, setCount] = useState(0)

  const increase = () =>  {

      setPerson(({...person, age : person.age + 1}))
     
  }

  const increaseNumber = () =>  {
    setCount((count) => count + 1)

   
}


  return (
    <>
      <div className='class'>
        <p> age de {person.firstname  } est de : {person.age}</p>
        <p> number : {count}</p>
        <Button type='submit' name='Ganer une anée' onClick={increase}/>
        <Button type='submit' name='increment' onClick={increaseNumber}/>
      </div>

      <ul className='ul'>
          {todos.map((todo) => <li key={todo} >{todo}</li>)}
      </ul>
    </>
  )
}

export default App
