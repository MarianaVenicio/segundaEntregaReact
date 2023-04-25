
import { BrowserRouter as Router} from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import  ItemCount  from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetail} from './components/temDetail/ItemDetail';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <Router>
      <NavBar />
      <ItemListContainer greeting={"saludos"} />
      <ItemDetail />
      <ItemCount />
      
    </Router>
  );
}

export default App;
