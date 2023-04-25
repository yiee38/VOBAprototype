import React from "react";

function IDETest (props) {
  if (props.list == props.type) {
    return (
      <div className="">
        {props.title}
      </div>
    )
  }
}

export default IDETest;