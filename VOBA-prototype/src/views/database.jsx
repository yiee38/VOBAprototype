import React, {useState} from 'react'
import LogOutModal from "../components/LogOutModal";
import LogOutButton from "../components/LogOutModal";
import TestbedCard from "../components/TestbedCard";
import TestBed from "../components/CreateTestbedCard";
import {
  useNavigate,
} from "react-router-dom";
import FilterBox from '../components/FilterBox';
import SearchListItem from '../components/SearchListItem';

function Database () {
  const [newTestbed, setNewTestbed] = useState(false)

  const [searchTerm, setSearchTerm] = useState("");
  const [sample, setSample] = useState([
    {title: 'Report 1', date: '4/12/23', tests:'Audio enhancement, Text2Voice'},
    {title: 'Report 2', date: '4/12/23', tests:'User Authentication, Firewall'},
    {title: 'Report 3', date: '4/12/23', tests:'Blockchain Encryption, Text2Voice'},
    {title: 'Report 4', date: '4/12/23', tests:'Voice2Voice'},
    {title: 'Report 5', date: '4/12/23', tests:'Audio File Clearance'},
    {title: 'Report 6', date: '4/12/23', tests:'Voice2Text, Audio Masking'},
  ]);


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

    // checkbox
    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheckboxChange = (event) => {
      const value = event.target.value;
      if (event.target.checked) {
        setCheckedItems([...checkedItems, value]);
        console.log(checkedItems)
      } else {
        setCheckedItems(checkedItems.filter((item) => item !== value));
        console.log(checkedItems)
      }
    };

  
    const filteredList = checkedItems.length === 0
    ? sample // if checkedItems is empty, return the original list
    : sample.filter((item) =>
      checkedItems.some(word =>
        item.tests.toLowerCase().includes(word.toLowerCase())
    ));
  

  const navigate = useNavigate()


  var sample_test = [
    {
      title: 'Audio Tests',
      description: 'A list of available tests to check the audio services of your VBSN',
      task_list: [
        'Audio Enhancement',
        'Audio Masking',
        'Audio File Clearance'
      ]
    },
    {
      title: 'Translation Tests',
      description: 'A list of available tests to check the translation services for your VBSN',
      task_list: [
        'Text2Voice',
        'Voice2Text',
        'Voice2Voice'
      ]
    },
    {
      title: 'Security Tests',
      description: 'A list of available tests to check the security of your VBSN',
      task_list: [
        'User Authentication',
        'Firewall',
        'Blockchain Encryption'
      ]
    },
  ]

  return (
    <div className="flex flex-1 h-full w-full flex-col pt-10 px-10"> 
      <div className="flex flex-col w-full gap-8">
        <div>
          <div className='text-lg'>Filters</div>
          <div className='flex flex-col gap-4 w-full'>
            {sample_test.map((test, index) => {
              return <FilterBox key={index} category={test.title} tests={test.task_list} handleFun = {handleCheckboxChange}/>
            })}
          </div>
        </div>

        <div>
          <div className='text-lg'>Results</div>
          <div className='flex flex-col gap-4 w-full'>
            {filteredList.map((result, index) => {
              return <SearchListItem title={result.title} date={result.date} tests={result.tests} />
            })}
          </div>
        </div>
        <p>Checked items: {checkedItems.join(', ')}</p>

      </div>
    </div>
  )
}

export default Database

/*
<div className="p-10 flex flex-row justify-start items-start gap-10">
        {sample_links.map((sample, index) => {
          return <TestbedCard key={index} preview={sample.preview} title={sample.title} description={sample.description} action={sample.action}/>
        })}
      </div>

      <div className="p-10 flex flex-row justify-start items-start gap-10">
        {
        sample_test.map((sample, index) => {
          return <TestBed key={index} title={sample.title} description={sample.description} task_list={sample.task_list}/>
        })
        }
      </div>

*/
