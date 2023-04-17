import React from "react";
function Button (props) {
	return (
		<button className="w-full bg-blue-button text-white my-2.5 text-5xl">
			{props.button_text}
		</button>
	)
}

export default Button;