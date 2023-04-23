import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft, faPrint, faShare } from '@fortawesome/free-solid-svg-icons';
import reportPage from "../assets/reportPage.png";

function Report() {
  return (
    <div class="page">
      <div class="horizontal-line vertical-line tests-ide" style={{height: "100vh"}}>
      <a href={'/ide'} class="button-wrapper"> 
        <button className="mt-10">
          <FontAwesomeIcon icon={faRotateLeft} />
          <span>Return to IDE</span>
        </button>
      </a>
      <button class="button-wrapper" onClick={() => setButtonPopup(true)}>
        <div className="inline-flex">
          <FontAwesomeIcon icon={faPrint} />
          <div className="px-1">  /  </div>
          <FontAwesomeIcon icon={faShare} />
        </div>
        <span>Print/Share Report</span>
      </button>
      </div>
        <img src={reportPage} alt="Report Page" className="w-3/4"/>
    </div>
  )
}

export default Report;