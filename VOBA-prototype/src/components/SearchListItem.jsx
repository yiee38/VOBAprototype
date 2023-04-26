import React from 'react'
import { useNavigate } from 'react-router-dom'

function SearchListItem(props) {
  const navigate = useNavigate();
  console.log(props.notTested)
  const handleAccess = () => {
    navigate('/report', {state: {returnTo: '/database', title: props.title, tests: props.tests, notTested:props.notTested, description: props.description, date: props.date}})
  }
  return (
    <div className='flex flex-row justify-between'>
      <div className='text-lg'>{props.title}</div>
      <div className='flex flex-row justify-end gap-8 items-center'>
        <div className='text-lg truncate w-1/2'>{props.tests.join(' | ')}</div>
        <div className='text-lg text-gray-500'>{props.date}</div>
        <button onClick={handleAccess} className='text-lg text-blue-button hover:text-blue-button-dark'>
          Access
        </button>
      </div>
    </div>
  )
}

export default SearchListItem