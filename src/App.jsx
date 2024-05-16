import './css/App.css'
import { Checkbox } from "./components/Checkbox.jsx";
import { Input } from "./components/Input.jsx";
import { ProductCategoryRow } from "./components/ProductCategoryRow.jsx";
import { ProductRow } from './components/ProductRow.jsx';


const PRODUCTS = [  
  {id:1, category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
  { id:2, category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
  { id:3, category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
  { id:4, category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
  { id:5, category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
  { id:6, category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
]

function App() {
  return (
    <>
      <Searchbar />
      <ProductTable products={PRODUCTS}/>
    </>
  )

}



function ProductTable({products}) {
  const rows= []
  let lastCategory = null

 for (const product of products) {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow key={product.id} name={product.category}/>)
    }
    lastCategory = product.category
      rows.push(<ProductRow product={product} key={product.name} />)
   
 }


 return <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>
         {rows}
      </tbody>
 </table>
 
  
}


function Searchbar () {
    return <div>
      <Input />
    <Checkbox/>
    </div>
}



export default App
