/* import { Linter } from 'eslint'
import { use, useState } from "react";

function App() {
const[valor, setValor]=useState(0)
const[nombres, setNombres]=useState(["Fabian"])
  function sumar(){
  setValor(valor + 1)
  }
  function restar(){
  setValor(valor - 1)
 }
 
  function agregarNombres(){
  setNombres([...nombres,"Mario"])
  }

  return (
  <div>
  <h1>UNAHUR</h1>
   <button onClick={()=>{sumar()}}>Sumar</button>
  <button onClick={()=>{restar()}}>Restar</button>
  <button onClick={()=>{agregarNombres()}}>Lista</button>
  <p>Valor del contador: {valor}</p>
  <p>Lista de alumnos</p>
  
  <ul>
        {nombres.map((n) => (
          <li>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default App */

import { use, useState } from "react";

function App() {
  const [nombres, setNombres] = useState(["Ana", "Pablo"]);
  const[valor, setValor] = useState(0);
  const [texto, setTexto] = useState('');
 
  function agregarNombre() {
    setNombres([...nombres, "Juan"]);
  }
  
  function modificar(event){
       setTexto(event.target.value);
  }
  const alHacerClic = () => {    
    setNombres([...nombres, texto]);
  };


  function sumar(){
  setValor(valor + 1)
  }



  return (
    <div>
      <h1>Unahur</h1>
      {/* <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)}/>  */}
      <input type="text" onChange={modificar}/>
      <button type="button" onClick={alHacerClic}>Agregar nombre</button>
      <button onClick={()=>{sumar()}}>Sumar</button>
      <p>Valor del contador: {valor}</p>
      <ul>
        {nombres.map((n) => (
          <li>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;