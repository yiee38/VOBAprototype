import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft, faPrint, faShare } from '@fortawesome/free-solid-svg-icons';
import { loremIpsum } from "lorem-ipsum";
import { CircularProgressbar } from 'react-circular-progressbar';
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import 'react-circular-progressbar/dist/styles.css';



function Report(props) {
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location.state)
  var report = {
    title: location.state.title, 
    author: "Test Persona",
    date: location.state.date,
    description: location.state.description, 
    insight: loremIpsum({count:2, units:"paragraphs"}),
    score: 86,
    passed: location.state.tests.slice(0, 3),
    failed: location.state.tests.slice(3),
    untested: location.state.notTested
  }
  const handleClick = () => {
    if (location.state.returnTo==='/ide'){
      navigate('/ide', {state: {selections: [], selectedVbsn: location.state.vbsn}})
    }
    else {
      console.log('hi')
      navigate('/database')
    }
  }

  return (
    <div className="flex flex-col flex-1 h-full w-full px-10 gap-8">
      <div className="flex flex-col w-full gap-8">
        <div className="flex flex-row justify-between gap-3 text-lg items-end">
          <div className='text-lg text-gray-500'>VBSN test report</div>
            <div className="flex flex-row justify-end gap-3 text-blue-button">
              <button onClick={handleClick} className="flex flex-row gap-1 items-center hover:text-blue-button-dark">
                <FontAwesomeIcon icon={faRotateLeft} />
                {location.state.returnTo==='/ide' ? <span>Return to IDE</span>: <span>Return to database</span>}
              </button>
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
          <div className="text-lg">Description</div>
          <div className="flex flex-row">
            <div>{report.description}</div>
          </div>
        </div>
        <div className="flex flex-col gap-3" >
          <div className="text-lg">Insights</div>
          <div className="flex flex-row">
            <div>{report.insight}</div>
          </div>
        </div>
        <div className="flex flex-row w-full gap-48">
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
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <div className="text-gray-500">Not tested: </div>
              {report.untested.map((test, index) => {
                return(
                  <div key={index} className="text-gray-500">{test}</div>
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