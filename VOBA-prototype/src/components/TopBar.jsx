import React, {useEffect} from "react";
import { useLocation } from 'react-router-dom';

function TopBar (props) {

  let path = useLocation();

	return (
    <div className="w-full flex flex-row justify-between items-center pl-10 pr-6 py-3" >
      <div className="text-5xl">VOBA</div>
      <div className="flex flex-row justify-end gap-3">
        <a href={`/home`} >
          <span className={`m-0 text-center hover:text-blue-button-dark ${path.pathname === '/home' ? 'text-zinc-900':'text-blue-button'}`}>
            Home
          </span>
        </a>
        <a href={`/testbeds`} >
          <span className={`m-0 text-center hover:text-blue-button-dark ${path.pathname === '/testbeds' ? 'text-zinc-900':'text-blue-button'}`}>
            Testbeds
          </span>
        </a>
        <a href={`/vbsns`} >
          <span className={`m-0 text-center hover:text-blue-button-dark ${path.pathname === '/vbsns' ? 'text-zinc-900':'text-blue-button'}`}>
            VBSN Demos
          </span>
        </a>
        <a href={`/database`} >
          <span className={`m-0 text-center hover:text-blue-button-dark ${path.pathname === '/database' ? 'text-zinc-900':'text-blue-button'}`}>
            Database
          </span>
        </a>
        <a href={`/`} >
          <span className={`m-0 text-center hover:text-blue-button-dark text-salmon-report`}>
            Log Out
          </span>
        </a>
      </div>
    </div>
	)
}

export default TopBar;

/*
<a href={`/home`} className="w-full primary-button">
  <span className="py-1 w-full m-0 text-center">
    SIGN IN
  </span>
</a>

*/