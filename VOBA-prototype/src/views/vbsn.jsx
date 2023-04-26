import React, {useState, useEffect} from 'react'
import LogOutModal from "../components/LogOutModal";
import LogOutButton from "../components/LogOutModal";
import TestbedCard from "../components/TestbedCard";
import TestBed from "../components/CreateTestbedCard";
import {
  useNavigate,
} from "react-router-dom";

function VbsnList () {
  const intialSelections= {'Audio Enhancement':false,
  'Audio Masking':false,
  'Audio File Clearance':false,
  'Text2Voice':false,
  'Voice2Text':false,
  'Voice2Voice':false,
  'User Authentication':false,
  'Firewall':false,
  'Blockchain Encryption':false,
}
  const [newTestbed, setNewTestbed] = useState(false)

  const navigate = useNavigate()
  const [vbsn, setVbsn] = useState([])
  const [nameInput, setNameInput] = useState('default')
  const [descInput, setDescInput] = useState('default')
  const [showForm, setShowForm] = useState(false)

  useEffect(()=> {
    if (!localStorage.getItem('vbsns')) {
      localStorage.setItem('vbsns', JSON.stringify([{id: 0, title: 'myFirstVBSN',description: 'My first attempt at a VBSN', tests: ['Firewall', 'Text2Voice']}]))
    }
    setVbsn(JSON.parse(localStorage.getItem('vbsns')))
  }, []) 

  var sample_history = [
    {
      title: 'myFirstVBSN',
      description: 'My first attempt at a VBSN'
    },
  ]

  var presets = [
    {
      id: 999,
      title: 'VBSN sample 1 - Supersafe ChatRoom',
      description: 'VBSN Sample with bloackchain encryption, audio enhancement, and audio masking',
      tests: ['Blockchain Encryption', 'Audio Enhancement', 'Audio Masking']
    },
    {
      id: 998,
      title: 'VBSN sample 2 - Voice Master',
      description: 'VBSN Sample with audio enhancement, audio masking, Text2Voice, and Voice2Voice transcription',
      tests: ['Audio Masking', 'Audio Enhancement', 'Text2Voice', 'Voice2Voice']
    }
  ]

  const handleShowOptions = () => {
    setShowForm(!showForm)
  }

  const handleCreate = () =>{
    const newVBSN = [...vbsn, {id:vbsn[vbsn.length-1].id+1, title:nameInput, description:descInput}]
    localStorage.setItem('vbsns', JSON.stringify(newVBSN))
    setVbsn(newVBSN)
  }

  const handleDelete = (id) => {
    const newVBSN = vbsn.filter(a => a.id !== id)
    localStorage.setItem('vbsns', JSON.stringify(newVBSN))
    setVbsn(newVBSN)
  }


  return (
    <div className="flex flex-1 h-full w-full flex-col pt-10 px-10"> 
      <div className="flex flex-col w-full gap-8">
        <div className="flex flex-row justify-between items-end">
          <span className="text-lg">VBSNs</span>
          <div className='flex flex-row gap-3'>
            <button className="secondary-button text-lg" onClick={handleShowOptions}>
              <span className="px-1">
                {newTestbed? 'Show Options':'Hide Options'}
              </span>
            </button>  
            <button className="primary-button text-lg" onClick={handleCreate}>
              <span className="px-1">
                Create New
              </span>
            </button>  
          </div>
        </div>
          {showForm &&
            <div className="w-full flex flex-col justify-start">
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
            </div>
          }
        <div className='flex flex-col gap-4 w-full'>
          <div className="flex flex-row justify-between items-end">
            <span className="text-lg text-gray-500">Previous VBSNs</span>
          </div>
          <div className="w-full flex flex-row gap-10 justify-start flex-wrap">
            {vbsn.map((history, _) => {
              return <TestbedCard taskSelection={intialSelections} selected={history} tests={history.tests} key={history.id} title={history.title} description={history.description} handleDelete={()=>handleDelete(history.id)}/> })
            }
          </div>
        </div>
        <div className='flex flex-col gap-4 w-full'>
          <div className="flex flex-row justify-between items-end">
            <span className="text-lg text-gray-500">Start From Presets</span>
          </div>
          <div className="w-full flex flex-row gap-10 justify-start">
            {presets.map((history, index) => {
              return <TestbedCard taskSelection={intialSelections} selected={history} tests={history.tests} key={history.title} preset title={history.title} description={history.description} handleDelete={()=>handleDelete(index)}/>})
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default VbsnList