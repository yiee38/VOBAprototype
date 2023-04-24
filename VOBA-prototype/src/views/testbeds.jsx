import React, {useState} from 'react'
import LogOutModal from "../components/LogOutModal";
import LogOutButton from "../components/LogOutModal";
import TestbedCard from "../components/TestbedCard";
import TestBed from "../components/CreateTestbedCard";
import {
  useNavigate,
} from "react-router-dom";

function TestBeds () {
  const [newTestbed, setNewTestbed] = useState(false)

  const navigate = useNavigate()

  var sample_test = [
    {
      title: 'Audio Tests',
      description: 'A list of available tests to check the audio services of your VBSN',
      task_list: [
        'Audio Enhancement',
        'Audio Masking',
        'Audio File Clearance'
      ]
    },
    {
      title: 'Translation Tests',
      description: 'A list of available tests to check the translation services for your VBSN',
      task_list: [
        'Text2Voice',
        'Voice2Text',
        'Voice2Voice'
      ]
    },
    {
      title: 'Security Tests',
      description: 'A list of available tests to check the security of your VBSN',
      task_list: [
        'User Authentication',
        'Firewall',
        'Blockchain Encryption'
      ]
    },
  ]

  var sample_history = [
    {
      title: 'myFirstTestbed',
      description: 'My first attempt at a Testbed - uses Text2Voice, Firewall, and Audio Masking tests with myFirstVBSN'
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
        <div className='flex flex-col gap-4 w-full'>
          <div className="flex flex-row justify-between items-end">
            <span className="text-lg">Testbeds</span>
            <div className='flex flex-row gap-3'>
              <button className="secondary-button text-lg" onClick={handleNewTestbed}>
                <span className="px-1">
                  {newTestbed? 'Show Options':'Hide Options'}
                </span>
              </button>  
              <button className="primary-button text-lg" onClick={handleCreate}>
                <span className="px-1">
                  Create Testbed
                </span>
              </button>  
            </div>
          </div>
          { newTestbed &&
            <div className="w-full flex flex-row gap-10 justify-start">
              {sample_test.map((sample, index) => {
                return <TestBed key={index} title={sample.title} description={sample.description} task_list={sample.task_list}/>})
              }
            </div>
          }
        </div>
        <div className='flex flex-col gap-4 w-full'>
          <div className="flex flex-row justify-between items-end">
            <span className="text-lg text-gray-500">Previous Testbeds</span>
          </div>
          <div className="w-full flex flex-row gap-10 justify-start">
            {sample_history.map((history, index) => {
              return <TestbedCard key={history.title} title={history.title} description={history.description} handleDelete={()=>handleDelete(index)}/> })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestBeds

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