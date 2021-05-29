import logo from "./logo.svg";
import "./App.css";

//hooks
import  {useState } from 'react';

//compoenntes
import DataTable from "./components/DataTable.js";
import DataRest from "./components/DataRest.js";

// data
import { producto } from "./data/dataSource.json";
import React, { useEffect } from "react";
//import { productos } from "./data/dataSource";

function App() {

  const [item, setItems] = useState([]);

  useEffect(() => {
     fetch("https://saint-seiya-api.herokuapp.com/api/all-classes")
    .then(response => response.json())
    .then(
      (resul) => {
        setItems(resul);
        console.log("consumiendo api..." );
        console.log(JSON.stringify(item));

        return resul;
      },
      (error) => {
        console.log("Error");
      }
    );
  }, [item]);

  return (
    <div className="App">
      {/*   
      {
        producto.map((data, key)=>{
            return <h1 key={key}> {data.nombre} - {data.serial} </h1>
        })
      }


      {
        productos.map((data, key) => {
        return <h1 key={key}> {data.nombre} - {data.cantidad}  </h1>;
          })
      }
  */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dev. <code>Cristofer Jaimez</code> .
        </p>
        <a
          className="App-link"
          href="https://github.com/cristoferJaimez"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <br />
        <DataTable producto={producto}></DataTable>

        <DataRest ApiRest = {item}></DataRest>
      </header>
    </div>
  );
}

export default App;
