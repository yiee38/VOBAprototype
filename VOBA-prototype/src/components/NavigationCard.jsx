import React from "react";
function NavigationCard (props) {
	return (
		<div className="flex flex-col w-80 h-96 drop-shadow-md	">
      <div className="flex justify-center items-center flex-1 text-3xl bg-black text-white">{props.preview}</div>
      <div className="flex flex-col flex-2 bg-blue-component mt-1 p-5 justify-between">
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-black">{props.title}</div>
          <div className="text-base">{props.description}</div>
        </div>
        <div className="flex flex-row justify-end">
          <a href={props.href} className="p-2.5 text-base primary-button"> 
            <span>
              {props.action}
            </span>
          </a>
        </div>
      </div>
    </div>
	)
}

export default NavigationCard;