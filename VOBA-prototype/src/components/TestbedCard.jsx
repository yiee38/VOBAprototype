import React from "react";
function TestbedCard (props) {
	return (
		<div className="flex flex-col w-80 h-96 drop-shadow-md	">
      <div className="flex justify-center items-center flex-1 text-3xl bg-black text-white">{props.preview}</div>
      <div className="flex flex-col flex-2 bg-blue-component mt-1 p-5 justify-between">
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-black">{props.title}</div>
          <div className="text-base">{props.description}</div>
        </div>
        <div className="flex flex-row justify-end">
          <button className="primary-button text-base p-2.5">{props.action}</button>
        </div>
      </div>
    </div>
	)
}

export default TestbedCard;