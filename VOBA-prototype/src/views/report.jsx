import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft, faPrint, faShare } from '@fortawesome/free-solid-svg-icons';
import { loremIpsum } from "lorem-ipsum";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



function Report(props) {
  var report = {
    title: "Testbed #1", 
    author: "Test Persona",
    date: "04/19/2023",
    type: "All applicable tests",
    insight: loremIpsum({count:2, units:"paragraphs"}),
    score: 86,
    passed: ['Privacy Test', 'Voice to Text Tests', 'Voice Quality Tests'],
    failed: ['Universal Translation Test', 'General Audio Press Test'],
  }
  return (
    <div className="flex flex-col flex-1 h-full w-full px-10 gap-8">
      <div class="flex flex-col w-full gap-8">
        <div className="flex flex-row justify-between gap-3 text-lg items-end">
          <div className='text-lg text-gray-500'>VBSN test report</div>
            <div className="flex flex-row justify-end gap-3 text-blue-button">
              <a href={'/ide'} className="flex flex-row gap-1 items-center hover:text-blue-button-dark">
                <FontAwesomeIcon icon={faRotateLeft} />
                <span>Return to IDE</span>
              </a>
              <button className="flex flex-row gap-1 items-center hover:text-blue-button-dark" onClick={() => setButtonPopup(true)}>
                <FontAwesomeIcon icon={faShare} />
                <span>Print/Share</span>
              </button>
            </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-5">
        <div className="flex flex-col gap-3" >
          <div className="text-lg">{report.title}</div>
          <div className="text-gray-500 flex flex-row gap-4">
            <div>{report.author}</div>
            <div>{report.date}</div>
            <div>{report.type}</div>
          </div>
        </div>
        <div className="flex flex-col gap-3" >
          <div className="text-lg">Insights</div>
          <div className="flex flex-row">
            <div>{report.insight}</div>
          </div>
        </div>
        <div className="flex flex-row w-full gap-64">
          <div className="w-1/4">
            <CircularProgressbar value={report.score} text={`${report.score}%`} 
              styles={
                {path:{
                    stroke: "black",
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                },
                trail: {
                  stroke: '#d6d6d6',
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
                text: {
                  fill: '#f88',
                  fontSize: '16px',
                },
              }}
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <div className="text-gray-500">Passed: </div>
              {report.passed.map((test, index) => {
                return(
                  <div key={index} className="text-green-800">{test}</div>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <div className="text-gray-500">Failed: </div>
              {report.failed.map((test, index) => {
                return(
                  <div key={index} className="text-red-800">{test}</div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report;