import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import IDETest from "../components/IDETest";
import Popup from "../components/Popup";
import EditTest from "../components/EditTest";
import { useState } from 'react'

function IDE() {
  var initial_tests = [
    {
      id: 0,
      title: 'Audio',
      type: 'current'
    },
    {
      id: 1,
      title: 'Blockchain Encryption',
      type: 'current'
    },
    {
      id: 2,
      title: 'User Authentication',
      type: 'current'
    },
    {
      id: 3,
      title: 'Firewall',
      type: 'available'
    },
    {
      id: 4,
      title: 'DDoS',
      type: 'available'
    },
    {
      id: 5,
      title: 'General Attacks',
      type: 'available'
    },
    {
      id: 6,
      title: 'Text2Voice',
      type: 'available'
    },
    {
      id: 7,
      title: 'Audio Translation',
      type: 'available'
    },
    {
      id: 8,
      title: 'Connection',
      type: 'available'
    }
  ]

  const [buttonPopup, setButtonPopup] = useState(false);
  const [tests, setTests] = useState(initial_tests);

  function updateTestTypes(index) {
  console.log("index: " + index);

  console.log("type:", tests[index].type);
  setTests(tests.map((test) => {
    console.log("id: ", test.id);
    if (test.id === index) {
      if (test.type === "current") {
        return {
          ...test, type: "available"
        };
      } else {
        return {
          ...test, type: "current"
        };
      }
    }
    else {
      return test;
    }
    }))
  }

    /*
    <div class="flex flex-row jusitfy-end items-center w-ful ">
          <a href={'/report'} className="">
            <button className="mt-10">
              <span>Run </span>
            </button>
          </a>
          <button class="" onClick={() => setButtonPopup(true)}>
              <span>Edit</span>
          </button>
        </div> */

  return (
    <div className="flex flex-col flex-1 h-full w-full px-10">
      <div class="flex flex-col w-full gap-8">
        <div className="flex flex-row justify-between gap-3 text-lg items-end">
          <div className='text-lg text-gray-500'>Integrated VBSN Editor</div>
          <div className="flex flex-row justify-end gap-3 text-blue-button">
            <button className="flex flex-row gap-1 items-center hover:text-blue-button-dark" onClick={() => setButtonPopup(true)}>
              <FontAwesomeIcon icon={faPenToSquare} />
              <span >Edit</span>
            </button>
            <a href={'/report'} className="flex flex-row gap-1 items-center hover:text-blue-button-dark">
              <FontAwesomeIcon icon={faPlay} />
            <span>Run </span>
            </a>
          </div>
        </div>
        <div class="flex flex-row items-end gap-5">
          <div className="text-xl">Current Tests: </div>
          <div className="flex flex-row gap-5">
            {tests.map((sample, index) => {
              return <IDETest key={index} title={sample.title} list='current' type={sample.type}/>
            })}
          </div>
        </div>
      </div>
      <div className="text-5xl text-center flex-1 flex justify-center items-center bg-sky-950 text-white">
        SAMPLE IDE INTERFACE
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div className="edit-test-wrapper">
          <div className="current-tests-wrapper">
            <div className="font-black text-3xl text-center">Current Tests</div>
              <div className="available-tests">
                {tests.map((sample, index) => {
                  return <EditTest key={index} title={sample.title} list="current" type={sample.type} updateTest={updateTestTypes} id={sample.id}/>
                })}
              </div> 
            </div>
            <div className="available-tests-wrapper">
              <div className="font-black text-3xl text-center">Available Tests</div>
              <div className="available-tests">
                {tests.map((sample, index) => {
                  return <EditTest key={index} title={sample.title} list="available" type={sample.type} updateTest={updateTestTypes} id={sample.id}/>
                })}
            </div>  
          </div>
        </div>
      </Popup>
    </div>
  )
}

export default IDE;