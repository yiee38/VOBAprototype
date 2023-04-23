import React from "react";

function IDETest (props) {
  if (props.list == props.type) {
    return (
      <div className="text-white bg-blue-800 border border-black p-2">
        {props.title}
      </div>
    )
  }
}

export default IDETest;