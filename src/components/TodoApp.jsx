import styles from "./todoApp.module.css";
import { useState } from "react";

function TodoApp(){
  const notass = [
    {
      id: crypto.randomUUID(),
      Text:"Soy la nota 1",
    },
    {
      id: crypto.randomUUID(),
      Text:"Soy la nota 2",
    }
  ]
  const [notas, setNotas] = useState(notass);

  return (
  <>
    <h1 className="{styles.titulo}">Notas</h1>
    <ul>
      {notas.map((nota) => <li key={nota.id}>{nota.Text}</li>)}
    </ul>
  </>
  );
}

export default TodoApp;

//props propiedades