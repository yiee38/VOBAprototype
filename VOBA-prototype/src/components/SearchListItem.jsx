import React from 'react'

function SearchListItem(props) {
    return (
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row justify-start gap-8'>
          <div className='text-lg'>{props.title}</div>
          <div className='text-lg'>{props.tests}</div>
        </div>
        <div className='flex flex-row justify-start gap-8 items-center'>
          <div className='text-lg text-gray-500'>{props.date}</div>
          <a href="/report" className='text-lg text-blue-button hover:text-blue-button-dark'>
            Access
          </a>
        </div>
      </div>
    )
}

export default SearchListItem