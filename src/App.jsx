import { useState } from 'react'
import './css/App.css'



// const Button = ({name, type, onClick}) => <button type={type} onClick={onClick} >{name}</button>


function App() {

  const [firstname, setFirstname] = useState('John Doe')

  const handleChange = (e) => {
   setFirstname( e.target.value)
  }

  const reset = () => {
    setFirstname('')
  }

  console.log('rend');

  return (
    <>
     <input type="text" name='firstname' value={firstname} onChange={handleChange}/>{firstname}
     <button onClick={reset}>reset</button>
    </>
  )

}


export default App
