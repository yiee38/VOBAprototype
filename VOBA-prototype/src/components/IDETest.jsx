import React from "react";

function IDETest (props) {
  console.log(props.title);
  if (props.list == props.type) {
    return (
      <div className="">
        {props.title}
      </div>
    )
  }
}

export default IDETest;