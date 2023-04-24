import {useCounter} from "../../Hook/UseCounter"



const ItemCount =({ inital =1, stock=5, onAdd}) =>{
  
    const {counter, handleRestar, handleSumar} = useCounter(inital,1 ,stock)
//const renderCOUNT= useRef(0)


return(
    <div>
        <button onClick ={handleSumar}>+1 </button>
        <label> {counter}</label>
       { /*<p> cantidad de renderizados: {renderCount.current}</p>*/}
<button onClick={handleRestar}>-1</button> 
<button>agregar al carrito</button>   
    </div>
)
}

export default ItemCount
