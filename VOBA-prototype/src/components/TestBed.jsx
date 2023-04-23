import React from "react";
import TaskList from "./TaskList";

function TestBed(props) {
  return (
  <div className="flex flex-col w-80 h-60 drop-shadow-md  ">
        <div className="flex flex-col flex-2 bg-white mt-1 p-5 justify-between">
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-black">{props.title}</div>
          <div className="text-gray-500">{props.description}</div>
          <hr />
          <TaskList task_list={props.task_list}></TaskList>
        </div>
      </div>
    </div>
  )
}

export default TestBed;