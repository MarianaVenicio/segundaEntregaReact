import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { mFetch } from "../../Utils/mFetch";
import Filter from "../Filter/Filter";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { categoria } = useParams();

  useEffect(() => {
    mFetch()
      // .then(res => res.json())
      .then((resultado) => {
        setProductos(resultado);
      })
      // .then(resul => console.log(resul))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  const handleProductFiltered = ({ filterState, handleFilterChange }) => (
    <center>
      <h2>Buscar Producto</h2>
      <br></br>
      {/* {filterState} */}
      <input type="text" value={filterState} onChange={handleFilterChange} />

      {isLoading ? (
        <h2>Cargando...</h2>
      ) : (
        <>
          {filterState === ""
            ? productos.map(({ id, foto, name, price, categoria }) => (
                <div key={id} className="card w-25">
                  <img src={foto} className="card-img-top" alt="imagen-card" />
                  <div className="card-body">
                    <h6>Nombre: {name}</h6>
                    <label>Precio: {price}</label>
                    <label>Categoria: {categoria}</label>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-outline-dark">Detalle</button>
                  </div>
                </div>
              ))
            : productos
                .filter((producto) =>
                  producto.name
                    .toLowerCase()
                    .includes(filterState.toLowerCase())
                )
                .map(({ id, foto, name, price, categoria }) => (
                  <div key={id} className="card w-25">
                    <img
                      src={foto}
                      className="card-img-top"
                      alt="imagen-card"
                    />
                    <div className="card-body">
                      <h6>Nombre: {name}</h6>
                      <label>Precio: {price}</label>
                      <label>Categoria: {categoria}</label>
                    </div>
                    <div className="card-footer">
                      <button className="btn btn-outline-dark">Detalle</button>
                    </div>
                  </div>
                ))}
        </>
      )}
    </center>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <Filter>{handleProductFiltered}</Filter>
    </div>
  );
};

export default ItemListContainer;
