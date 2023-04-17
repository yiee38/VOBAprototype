import React from "react";

function Create() {
  return (
    <div className="flex flex-1 h-full w-full justify-center items-center">
      <div className="flex flex-col w-2/5 items-center">
        <div className="text-5xl">VOBA</div>
        <div className="text-3xl text-slate-500">set up new account</div>
        <div className="flex flex-col w-full items-start pt-10 pb-5">
          <label for="name" className="text-xl">username: </label>
          <input name="name" placeholder="johndoe@doe.com" className="border-zinc-950 border-b-2 w-full focus:outline-none focus:border-blue-button"/>
          <label for="password" className="pt-5 text-xl">password: </label>
          <input name="password" type="password" placeholder="johndoesosolalaso" className="border-zinc-950 border-b-2 w-full focus:outline-none focus:border-blue-button"/>
          <label for="confirm-password" className="pt-5 text-xl">confirm password: </label>
          <input name="confirm-password" type="password" placeholder="johndoesosolalaso" className="border-zinc-950 border-b-2 w-full focus:outline-none focus:border-blue-button"/>
        </div>
        <div className="w-full flex justify-end gap-2">
          <button className="flex justify-center items-center w-1/2 bg-blue-button text-white text-2xl hover:bg-blue-button-dark">
            <span className="py-1">
              CREATE ACCOUNT
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Create;