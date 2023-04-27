import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import IDETest from "../components/IDETest";
import Popup from "../components/Popup";
import EditTest from "../components/EditTest";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { loremIpsum } from "lorem-ipsum";

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
  const initial_tests = [
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
  const navigate = useNavigate();

  let location = useLocation();

  function initializeTestTypes() {
    var currTests = [];
    if (location.state !== null && location.state.selections !== null) {
      console.log(location.state)
      setTestSelections(location.state.selections);
      for (const [key, value] of Object.entries(location.state.selections)) {
        if (value) {
          currTests.push(key);
        }
      }
    } else {
      var currVBSNs = localStorage.getItem('vbsns');
      var vbsns = JSON.parse(currVBSNs);

      currTests = Object.values(vbsns[0])[3];
    }

    console.log(location)
    const selected = location.state.selections
    console.log(selected)
    const newTests = tests
    console.log(newTests)

    Object.keys(selected).map((test) => {
      console.log(test)
      console.log(selected[test])
      for (let i = 0; i<newTests.length; i++) {
        if (selected[test] === true && test === newTests[i].title){
          newTests[i].type = "current"
        }
      }
    })

    setTests(newTests)
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
    initializeTestTypes();
    setReport(JSON.parse(localStorage.getItem('reports')));
  }, []);

  function setReportItem() {
    var currVBSNs = localStorage.getItem('vbsns');
    var vbsns = JSON.parse(currVBSNs);
    var newDate = new Date();
    var month = newDate.getMonth() + 1;
    var day = newDate.getDate();
    var year = newDate.getFullYear();
    const vbsn = location.state.selectedVbsn    
    var testText = ""
    Object.keys(tests).map((test) => {
      if (tests[test].type === 'current'){
        testText = testText + tests[test].title
        testText = testText + " | "
      }
    })

    var newReport
    if (report){
        newReport = [...report, 
        {title: 'Report ' + vbsn.title, 
        description: 'Report for ' + vbsn.title + ' with these tests: '+ testText, 
        tests: tests,
        date: month + '/' + day + '/' + year}
        ];
      }
    else {
      newReport = [{title: 'Report ' + vbsn.title, 
      description: 'Report for ' + vbsn.title + ' with these tests: '+ testText, 
      tests: tests,
      date: month + '/' + day + '/' + year}];
    }
    localStorage.setItem('reports', JSON.stringify(newReport))
    setReport(newReport);
  }

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
            <button className="flex flex-row gap-1 items-center hover:text-blue-button-dark" onClick={() => {
              setReportItem()
              const testsForThething = []
              const notTested = []

              tests.map((test)=>{
                if (test.type === 'current'){
                  testsForThething.push(test.title)
                }
                else {
                  notTested.push(test.title)
                }
              })
              navigate('/report', {
                state: {
                  title: report.title, 
                  tests: testsForThething, 
                  notTested: notTested, 
                  description: report.description, 
                  date: report.date,
                  returnTo: '/ide',
                  vbsn: location.state.selectedVbsn
                }}
              )
            }}>
              <FontAwesomeIcon icon={faPlay} />
              <span>Run </span>
            </button>
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
          height="60vh"
          width="75vw"
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