import React from "react";

function FilterBox (props) {

  return (
    <div className="flex flex-col justify-start items-start">
      <span className="text-gray-500">{props.category}</span>
      <div className="flex flex-row justify-start gap-8">
        {props.tests.map((test, index) => {
          
          return (
            <div key={test.title} className="flex items-center gap-1">
              <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox" id={`task-${index}`} />
              <label className="ml-1 text-sm font-medium text-gray-900 dark:text-black-300">{test}</label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FilterBox