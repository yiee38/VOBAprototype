import React from "react";

function TaskList(props) {
    return (
        <div>
          {props.task_list.map((task, index) => (
            <div key={index}>
              <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox" id={`task-${index}`} />
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-black-300">{task}</label>
            </div>
          ))}
        </div>
      );
}

export default TaskList;



