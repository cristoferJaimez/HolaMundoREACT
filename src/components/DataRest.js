import React from "react";

function DataRest(props) {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Armadura</th>
          </tr>
        </thead>
        <tbody>
          {props.ApiRest.map((data, key) => {
            return (
              <tr key={key}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.cloth}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataRest;
