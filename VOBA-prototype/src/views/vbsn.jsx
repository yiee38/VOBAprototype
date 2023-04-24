import React, {useState} from 'react'
import LogOutModal from "../components/LogOutModal";
import LogOutButton from "../components/LogOutModal";
import TestbedCard from "../components/TestbedCard";
import TestBed from "../components/CreateTestbedCard";
import {
  useNavigate,
} from "react-router-dom";

function VbsnList () {
  const [newTestbed, setNewTestbed] = useState(false)

  const navigate = useNavigate()

  var sample_history = [
    {
      title: 'myFirstVBSN',
      description: 'My first attempt at a VBSN'
    },
  ]

  var presets = [
    {
      title: 'VBSN sample 1 - Supersafe ChatRoom',
      description: 'VBSN Sample with bloackchain encryption, audio enhancement, and audio masking'
    },
    {
      title: 'VBSN sample 2 - Voice Master',
      description: 'VBSN Sample with bloackchain encryption, audio enhancement, audio masking, and user authentication'
    }
  ]

  const handleNewTestbed = () => {
    setNewTestbed(!newTestbed);
  }

  const handleCreate = () =>{
    navigate('/ide')
  }

  const handleDelete = (id) => {
    console.log(id)
  }


  return (
    <div className="flex flex-1 h-full w-full flex-col pt-10 px-10"> 
      <div className="flex flex-col w-full gap-8">
        <div className="flex flex-row justify-between items-end">
          <span className="text-lg">VBSNs</span>
          <div className='flex flex-row gap-3'>
            <button className="primary-button text-lg" onClick={handleCreate}>
              <span className="px-1">
                Create New
              </span>
            </button>  
          </div>
        </div>
        <div className='flex flex-col gap-4 w-full'>
          <div className="flex flex-row justify-between items-end">
            <span className="text-lg text-gray-500">Previous VBSNs</span>
          </div>
          <div className="w-full flex flex-row gap-10 justify-start">
            {sample_history.map((history, index) => {
              return <TestbedCard key={history.title} title={history.title} description={history.description} handleDelete={()=>handleDelete(index)}/> })
            }
          </div>
        </div>
        <div className='flex flex-col gap-4 w-full'>
          <div className="flex flex-row justify-between items-end">
            <span className="text-lg text-gray-500">Start From Presets</span>
          </div>
          <div className="w-full flex flex-row gap-10 justify-start">
            {presets.map((history, index) => {
              return <TestbedCard key={history.title} preset title={history.title} description={history.description} handleDelete={()=>handleDelete(index)}/>})
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default VbsnList

/*
<div className="p-10 flex flex-row justify-start items-start gap-10">
        {sample_links.map((sample, index) => {
          return <TestbedCard key={index} preview={sample.preview} title={sample.title} description={sample.description} action={sample.action}/>
        })}
      </div>

      <div className="p-10 flex flex-row justify-start items-start gap-10">
        {
        sample_test.map((sample, index) => {
          return <TestBed key={index} title={sample.title} description={sample.description} task_list={sample.task_list}/>
        })
        }
      </div>

*/