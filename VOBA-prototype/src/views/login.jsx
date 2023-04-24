import React from "react";

function Login() {
  return (
    <div className="flex flex-1 h-full w-full justify-center items-center">
      <div className="flex flex-col w-2/5 items-center">
        <div className="text-5xl">VOBA</div>
        <div className="text-3xl text-slate-500">log in</div>
        <div className="flex flex-col w-full items-start pt-10 pb-5">
          <label htmlFor="name" className="text-xl">username: </label>
          <input name="name" placeholder="johndoe@doe.com" className="border-zinc-950 border-b-2 w-full focus:outline-none focus:border-blue-button"/>
          <label htmlFor="password" className="pt-5 text-xl">password: </label>
          <input name="password" type="password" placeholder="johndoesosolalaso" className="border-zinc-950 border-b-2 w-full focus:outline-none focus:border-blue-button"/>
        </div>
        <div className="w-full flex justify-center gap-2">
          <a 
            href={`/create-account`}  
            className="w-full secondary-button"
          >
            <span className="py-1 w-full m-0 text-center">
              CREATE ACCOUNT
            </span>
          </a>
          <a href={`/home`} className="w-full primary-button">
            <span className="py-1 w-full m-0 text-center">
              SIGN IN
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login;