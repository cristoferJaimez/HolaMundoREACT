import React from "react";

function DataTable(props) {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
          <th>#</th>
          <th>Serial</th>
          <th>Producto</th>
          <th>cantidad</th>
          </tr>
        </thead>
        <tbody>
          {props.producto.map((data, key) => {
            return (
              <tr key={key}>
                <td>{key+1}</td>
                <td>{data.serial}</td>
                <td>{data.nombre}</td>
                <td>{data.cantidad}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
