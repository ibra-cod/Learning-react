import { useState } from 'react'
import './css/App.css'



const Button = ({name, type, onClick}) => <button type={type} onClick={onClick} >{name}</button>

const showCount = false

const todos = [
  'Prenster react',
  'faire a manger',
  'Faire le menage'
]


function App() {
  const [count, setCount] = useState(0)
  const increase = (e) =>  {
    e.preventDefault()
      setCount(count + 1)
  }

  const decrease = () =>  {
    setCount((count) => count > 0 ? count - 1 : count = 0)
}

  return (
    <>
    <Title color='red'  >Mon composant </Title>
      <div className='class'>
       {showCount && <p onClick={increase}>{ count}</p>}
        <Button type='submit' name='increase' onClick={increase}/>
        <Button type='submit' name='decrease' onClick={decrease}/>
      </div>

      <ul className='ul'>
          {todos.map((todo) => <li key={todo} >{todo}</li>)}
      </ul>
    </>
  )
}


function Title ({color, children, hidden}) {

  if (hidden) {
      return null
  }

  const props = {
    id :'monID',
    className : 'maCalss'
  }


  return <h1 {...props}  style={{color: color}}>{children}</h1>
}
export default App
