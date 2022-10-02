import React from "react";

function Model(props) {
  console.log(props, "aaaaaaaaaaa");
  function confirmHandler() {
    props.onConfirm();
  }
  function cancleHandler() {
    props.onCancle();
  }
  return (
    <div className="modal">
      <p> Are you sure?</p>
      <button className="btn btn--alt" onClick={confirmHandler}>
        Yes
      </button>
      <button className="btn" onClick={cancleHandler}>
        No
      </button>
    </div>
  );
}

export default Model;
