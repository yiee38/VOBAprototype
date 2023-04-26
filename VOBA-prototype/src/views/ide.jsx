import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import IDETest from "../components/IDETest";
import Popup from "../components/Popup";
import EditTest from "../components/EditTest";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useLocation } from 'react-router-dom';

import { useState } from 'react'

/*
'Audio Enhancement':false,
    'Audio Masking':false,
    'Audio File Clearance':false,
    'Text2Voice':false,
    'Voice2Text':false,
    'Voice2Voice':false,
    'User Authentication':false,
    'Firewall':false,
    'Blockchain Encryption':false,
*/

function IDE() {
  var initial_tests = [
    {
      id: 0,
      title: 'Audio Enhancement',
      type: 'available'
    },
    {
      id: 1,
      title: 'Audio Masking',
      type: 'available'
    },
    {
      id: 2,
      title: 'Audio File Clearance',
      type: 'available'
    },
    {
      id: 3,
      title: 'Text2Voice',
      type: 'available'
    },
    {
      id: 4,
      title: 'Voice2Text',
      type: 'available'
    },
    {
      id: 5,
      title: 'Voice2Voice',
      type: 'available'
    },
    {
      id: 6,
      title: 'User Authentication',
      type: 'available'
    },
    {
      id: 7,
      title: 'Firewall',
      type: 'available'
    },
    {
      id: 8,
      title: 'Blockchain Encryption',
      type: 'available'
    }
  ]

  const [buttonPopup, setButtonPopup] = useState(false);
  const [tests, setTests] = useState(initial_tests);
  const [report, setReport] = useState([]);
  const [testSelections, setTestSelections] = useState([]);

  let location = useLocation();

  function initializeTestTypes() {
    var currVBSNs = localStorage.getItem('vbsns');
    var vbsns = JSON.parse(currVBSNs);

    console.log(testSelections);

    var currTests = Object.values(vbsns[0])[3];
    console.log(vbsns)

    setTests(tests.map((test) => {
      for (let i = 0; i < currTests.length; i++) {
        if (test.title === currTests[i]) {
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
      }
      return test;
    }))
  }

  function updateTestTypes(index) {
    setTests(tests.map((test) => {
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

  useEffect(() => {
    if (location.state != null) {
      console.log("here");
      setTestSelections(location.state.selections);
    }
    initializeTestTypes();
    setReport(JSON.parse(localStorage.getItem('reports')));
  }, []);

  useEffect(() => {
    var currTests = [];

    for (let i = 0; i < tests.length; i++) {
      if (tests[i].type === 'current') {
        currTests.push(tests[i].title);
      }
    }

    localStorage.setItem('vbsns', JSON.stringify([{id: 0, title: 'myFirstVBSN',description: 'My first attempt at a VBSN', tests: currTests}]));
  }, [tests]);

  function setReportItem() {
    var currVBSNs = localStorage.getItem('vbsns');
    var vbsns = JSON.parse(currVBSNs);
    var newDate = new Date();
    var month = newDate.getMonth() + 1;
    var day = newDate.getDate();
    var year = newDate.getFullYear();

    const newReport = [...report, {title: vbsns[0].title + 'Report', description: 'Report for ' + vbsns[0].title, tests: vbsns[0].tests, date: month + '/' + day + '/' + year}];

    localStorage.setItem('reports', JSON.stringify(newReport))
    setReport(newReport);
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
    <div className="flex flex-col flex-1 h-full w-full px-10 pb-5">
      <div className="flex flex-col w-full gap-8">
        <div className="flex flex-row justify-between gap-3 text-lg items-end">
          <div className='text-lg text-gray-500'>Integrated VBSN Editor</div>
          <div className="flex flex-row justify-end gap-3 text-blue-button">
            <button className="flex flex-row gap-1 items-center hover:text-blue-button-dark" onClick={() => setButtonPopup(true)}>
              <FontAwesomeIcon icon={faPenToSquare} />
              <span >Edit</span>
            </button>
            <a href={'/report'} className="flex flex-row gap-1 items-center hover:text-blue-button-dark" onClick={() => setReportItem()}>
              <FontAwesomeIcon icon={faPlay} />
            <span>Run </span>
            </a>
          </div>
        </div>
        <div className="flex flex-row items-end gap-5">
          <div className="text-xl">Current Tests: </div>
          <div className="flex flex-row gap-5">
            {tests.map((sample, index) => {
              return <IDETest key={index} title={sample.title} list='current' type={sample.type}/>
            })}
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center bg-sky-950 flex-col h-full">
        <div className="text-5xl text-white pb-4 self-start ml-24">Begin Coding Below:</div>
        <CodeMirror
          value="console.log('hello world!');"
          height="500px"
          width="800px"
        />
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