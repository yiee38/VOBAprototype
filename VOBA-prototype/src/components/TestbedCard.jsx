import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function TestbedCard(props) {
  const [deleteTest, setDeleteTest] = useState(false);

  const handleDelete = () => {
    if (!deleteTest){
      setDeleteTest(true)
    }
    else {
      props.handleDelete(props.title)
    }
  }
  const navigate = useNavigate()
  const handleNavigate = () => {
    
    navigate('/ide', { state: { selections: props.taskSelection, selectedVbsn: props.selected }})
  }

  return (
    <div className="flex flex-col w-80 h-60 drop-shadow-md  ">
      <div className="flex flex-col flex-2 bg-white mt-1 p-5 justify-between h-full">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-black">{props.title}</div>
            <div className="text-gray-500">{props.description}</div>
          </div>
          <div className="flex flex-row justify-end gap-1">
            {!props.preset && 
              <button className={`secondary-button text-base ${deleteTest ? 'bg-red-800 ':''}}`} onClick={handleDelete}>
                <span className={`px-1 ${deleteTest ? 'text-slate-50':''}`}>
                  Delete
                </span>
              </button>  
            }         
            <button onClick={handleNavigate} className="primary-button text-base disabled:bg-gray-500" disabled={props.selected !== undefined && props.selected.id === undefined} >
              <span className="px-1">
                Access
              </span>
            </button>  
          </div>
        </div>

      </div>
    </div>
  )
}

export default TestbedCard;