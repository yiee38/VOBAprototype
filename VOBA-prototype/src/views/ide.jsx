import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

function IDE() {
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
            <div class="flex justify-center items-center">
                Active Tests
            </div>
        </div>
    </div>
  )
}

export default IDE;