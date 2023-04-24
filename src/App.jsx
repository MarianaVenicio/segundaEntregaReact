import { useEffect, useRef,useState } from 'react'

import { NavBar} from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount'

//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  

  return (
    
      <div>
        <NavBar />
        <ItemListContainer  greeting= {"saludos"} />
        <ItemCount/>
        
     </div>
    
  )
}

export default App
