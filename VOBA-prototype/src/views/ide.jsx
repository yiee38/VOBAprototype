import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import IDETest from "../components/IDETest";

function IDE() {
    var sample_tests = [
        {
            title: 'Audio Enhancement'
        },
        {
            title: 'Audio Masking'
        },
        {
            title: 'Blockchain Encryption'
        },
        {
            title: 'User Authentication'
        }
    ]
  return (
    <div class="page">
        <div class="horizontal-line vertical-line tests-ide" style={{height: "100vh"}}>
            <button class="button-wrapper">
                <FontAwesomeIcon icon={faPlay} />
                <span>Run Tests</span>
            </button>
            <button class="button-wrapper">
                <FontAwesomeIcon icon={faPenToSquare} />
                <span>Edit Tests</span>
            </button>
            <div class="test-list">
                <div class="test">
                    <div className="text-xl">Current Tests</div>
                    {sample_tests.map((sample, index) => {
                        return <IDETest key={index} title={sample.title}/>
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default IDE;