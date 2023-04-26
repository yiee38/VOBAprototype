import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";

export default function Root() {
  useEffect(()=> {
    if (!localStorage.getItem('vbsns')) {
      localStorage.setItem('vbsns', JSON.stringify([{id: 0, title: 'myFirstVBSN',description: 'My first attempt at a VBSN', tests: ['Firewall', 'Text2Voice']}]))
    }
    if (!localStorage.getItem('testbeds')) {
      localStorage.setItem('testbeds', JSON.stringify([
        {
          id: 0,
          title: 'myFirstTestbed',
          description: 'My first attempt at a Testbed - uses Text2Voice, Firewall, and Audio Masking tests with myFirstVBSN',
          tests: ['Audio Enhancement', 'Text2Voice', 'Audio Masking', 'Firewall']
        }
      ]))
      
    }
    var newDate = new Date();
    var month = newDate.getMonth() + 1;
    var day = newDate.getDate();
    var year = newDate.getFullYear();
    const tests = [
      {
        id: 0,
        title: 'Audio Enhancement',
        type: 'current'
      },
      {
        id: 1,
        title: 'Audio Masking',
        type: 'current'
      },
      {
        id: 2,
        title: 'Audio File Clearance',
        type: 'available'
      },
      {
        id: 3,
        title: 'Text2Voice',
        type: 'current'
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
        type: 'current'
      },
      {
        id: 8,
        title: 'Blockchain Encryption',
        type: 'available'
      }
    ]
    const newReport = [{title: 'Report ' + 'myFirstTestbed', 
      description: 'Report for ' + 'myFirstTestbed' + ' with these tests: '+ "Audio Enhancement | Text2Voice | Audio Masking | Firewall", 
      tests: tests,
      date: month + '/' + day + '/' + year}
    ];
    if (!localStorage.getItem('reports')) {
      localStorage.setItem('reports', JSON.stringify(newReport))
    }
  },[])

  return (
    <div className="flex flex-col w-full flex-1 h-full">
      <TopBar />
      <Outlet />
    </div>
  );
}