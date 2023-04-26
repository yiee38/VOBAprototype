import React, {useState, useEffect, useRef} from 'react'
import TestbedCard from "../components/TestbedCard";
import TestBed from "../components/CreateTestbedCard";
import {
  useNavigate,
} from "react-router-dom";

function TestBeds () {
  const [newTestbed, setNewTestbed] = useState(false)
  const [testbeds, setTestbeds] = useState([])
  const [nameInput, setNameInput] = useState('default')
  const [descInput, setDescInput] = useState('default')
  const [vbsns, setVbsns] = useState([])
  const [selected, setSelected] = useState({});
  const navigate = useNavigate()

  useEffect(()=> {
    setVbsns(JSON.parse(localStorage.getItem('vbsns')))
    if (!localStorage.getItem('testbeds')) {
      localStorage.setItem('testbeds', JSON.stringify([
        {
          id: 0,
          title: 'myFirstTestbed',
          description: 'My first attempt at a Testbed - uses Text2Voice, Firewall, and Audio Masking tests with myFirstVBSN',
          tests: ['Audio Enhancement', 'Text2Voice', 'Audio Masking', 'Firewall']
        }
      ]))
      
    }
    setTestbeds(JSON.parse(localStorage.getItem('testbeds')))
  }, []) 


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

  const [taskSelection, setTaskSelection] = useState({
    'Audio Enhancement':false,
    'Audio Masking':false,
    'Audio File Clearance':false,
    'Text2Voice':false,
    'Voice2Text':false,
    'Voice2Voice':false,
    'User Authentication':false,
    'Firewall':false,
    'Blockchain Encryption':false,
  })

  const handleTaskSelection = (task) => {
    const newTasks = taskSelection
    newTasks[task] = !newTasks[task]
    setTaskSelection({...taskSelection,newTasks})
  }

  const handleNewTestbed = () => {
    setNewTestbed(!newTestbed);
  }

  const handleCreate = () =>{
    var newTestBeds
    const selectedTests = []
    Object.keys(taskSelection).map((task)=> {
      if (taskSelection[task]){
        selectedTests.push(task)

      }

    })

    if (testbeds.length !== 0){
      newTestBeds = [...testbeds, {id:testbeds[testbeds.length-1].id+1, title:nameInput, description:descInput, tests: selectedTests}]
    }
    else {
      newTestBeds = [{id:0, title:nameInput, description:descInput, tests: [selectedTests]}]
    }
     
    console.log(newTestBeds)
    localStorage.setItem('testbeds', JSON.stringify(newTestBeds))
    setTestbeds(newTestBeds)
    navigate('/ide', { state: { selections: taskSelection, selectedVbsn: selected }})
  }

  const handleDelete = (id) => {
    const newTestBeds = testbeds.filter(a => a.id !== id)
    localStorage.setItem('testbeds', JSON.stringify(newTestBeds))
    setTestbeds(newTestBeds)
  }

  const handleSelect = (thing) => {
    setSelected(thing)
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
                  {newTestbed? 'Hide Options':'Show Options'}
                </span>
              </button>  
              <button className="primary-button text-lg disabled:bg-gray-500" onClick={handleCreate} disabled={selected.id ==undefined}>
                <span className="px-1">
                  Create Testbed
                </span>
              </button>  
            </div>
          </div>
          { newTestbed &&
            <div className="w-full flex flex-col justify-start ">
              
              <label htmlFor="name" className="text-gray-500">name: </label>
              <input 
                name="name" 
                className="border-zinc-950 border-b-2 w-full focus:outline-none focus:border-blue-button" 
                value={nameInput}
                onChange={(e) => {setNameInput(e.target.value)}}
              />
              <label htmlFor="desc" className="pt-2 text-gray-500">description: </label>
              <input 
                name="desc" 
                className="border-zinc-950 border-b-2 w-full focus:outline-none focus:border-blue-button" 
                value={descInput}
                onChange={(e) => {setDescInput(e.target.value)}}
              />
              <div className="w-full flex flex-row gap-10 justify-start pt-3">
                {sample_test.map((sample, index) => {
                  return <TestBed 
                    key={index} 
                    title={sample.title} 
                    description={sample.description} 
                    task_list={sample.task_list}
                    handleTaskSelection={handleTaskSelection}
                  />})
                }
              </div>

            </div>
          }
          <div className='flex flex-col gap-2'>
            <div className='text-salmon-report text-lg'>Please select a vbsn before going to testbed</div>
            <div className='flex flex-row flex-wrap gap-3'>
              {vbsns.map((vbsn, _) => {
                if (vbsn.id === selected.id)
                  return <button onClick={()=>{handleSelect(vbsn)}} key={vbsn.id} className='bg-blue-button border-blue-button border text-white p-1 hover:cursor-pointer'>{vbsn.title}</button>
                else 
                  return <button onClick={()=>{handleSelect(vbsn)}} key={vbsn.id} className='hover:bg-blue-button border-blue-button border hover:text-white p-1 hover:cursor-pointer'>{vbsn.title}</button>
              })}
            </div>
          </div>
          
        </div>
        <div className='flex flex-col gap-4 w-full '>
          <div className="flex flex-row justify-between items-end">
            <span className="text-lg text-gray-500">Previous Testbeds</span>
          </div>
          <div className="w-full flex flex-row gap-10 justify-start flex-wrap">
            {testbeds.map((history, index) => {
              const tasks = {'Audio Enhancement':false,
                'Audio Masking':false,
                'Audio File Clearance':false,
                'Text2Voice':false,
                'Voice2Text':false,
                'Voice2Voice':false,
                'User Authentication':false,
                'Firewall':false,
                'Blockchain Encryption':false,
              }
              console.log(history['tests'])
              history['tests'].map((test)=> {
                console.log(test)
                tasks[test] = true
              })
              return (
                <TestbedCard 
                  key={history.id} 
                  taskSelection={tasks} 
                  id={history.id} 
                  title={history.title} 
                  description={history.description} 
                  handleDelete={()=>handleDelete(history.id)}
                  selected={selected}
                /> )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestBeds
