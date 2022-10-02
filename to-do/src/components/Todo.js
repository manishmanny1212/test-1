import React from "react";
import "../components/todo.css";
import Backdrop from "./backdrop/Backdrop";
import Model from "./model/Model";
import { useState } from "react";

function Todo(props) {
  //hooks
  const [modelIsOpen, SetmodelIsOpen] = useState(false);

  //javascript function.
  function clickHandler() {
    console.log(props.title);
    SetmodelIsOpen(true);
  }
  function closeModelHandler() {
    SetmodelIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <span> manish</span>
        <button className="btn" onClick={clickHandler}>
          delete
        </button>
      </div>
      {modelIsOpen ? (
        <Model onCancle={closeModelHandler} onConfirm={closeModelHandler} />
      ) : null}
      {modelIsOpen ? <Backdrop onCancle={closeModelHandler} /> : null}
    </div>
  );
}

export default Todo;
