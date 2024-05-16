import { useState } from 'react'
import './css/App.css'



// const Button = ({name, type, onClick}) => <button type={type} onClick={onClick} >{name}</button>


function App() {


  const [isTermAccepted, setIsTermAccepted] = useState(false)


  return (
    <>
      <form action="">
        <CGUCheckbox checked={isTermAccepted} onCheck={setIsTermAccepted}/>
        <button className='button' disabled={!isTermAccepted} >accpter les terme</button>
      </form>
    </>
  )

}


function CGUCheckbox({checked, onCheck}) {
  return(
    <div>
     <label htmlFor="checkbox">
        <input onChange={(e) => onCheck(e.target.checked)} type="checkbox" checked={checked} />
     </label>
    </div>
  )
}


export default App
