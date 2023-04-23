import React from "react";

function IDETest (props) {
    if (props.list == props.type) {
        return (
            <button className="border border-black p-2 text-center w-full hover:bg-[#87cefa]" onClick={() => props.updateTest(props.id)}>
                {props.title}
            </button>
        )
    }
	
}

export default IDETest;