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
        const newTests = tests.map(test => {
            if (test.type === "current") {
                return {
                    ...test, type: "available"
                };
            } else {
                return {
                    ...test, type: "current"
                };
            }
        })
        
        setTests(newTests);
    }

  return (
    <div class="page">
        <div class="horizontal-line vertical-line tests-ide" style={{height: "100vh"}}>
            <button class="button-wrapper">
                <FontAwesomeIcon icon={faPlay} />
                <span>Run Tests</span>
            </button>
            <button class="button-wrapper" onClick={() => setButtonPopup(true)}>
                <FontAwesomeIcon icon={faPenToSquare} />
                <span>Edit Tests</span>
            </button>
            <div class="test-list">
                <div class="test">
                    <div className="text-xl">Current Tests</div>
                    {initial_tests.map((sample, index) => {
                        return <IDETest key={index} title={sample.title} list='current' type={sample.type}/>
                    })}
                </div>
            </div>
        </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div className="edit-test-wrapper">
                <div className="current-tests-wrapper">
                    <div className="font-black text-3xl text-center">Current Tests</div>
                    <div className="available-tests">
                        {initial_tests.map((sample, index) => {
                            return <EditTest key={index} title={sample.title} list="current" type={sample.type} updateTest={updateTestTypes} id={sample.id}/>
                        })}
                    </div> 
                </div>
                <div className="available-tests-wrapper">
                    <div className="font-black text-3xl text-center">Available Tests</div>
                    <div className="available-tests">
                        {initial_tests.map((sample, index) => {
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