import React from "react";

function Login() {
	return (
		<div className="flex flex-1 h-full w-full justify-center items-center">
			<div className="flex flex-col w-2/5 items-center">
				<div className="text-5xl">VOBA</div>
				<div className="text-3xl text-slate-500">log in</div>
				<div className="flex flex-col w-full items-start pt-10 pb-5">
					<label for="name" className="text-xl">username: </label>
					<input name="name" placeholder="johndoe@doe.com" className="border-zinc-950 border-b-2 w-full focus:outline-none focus:border-blue-button"/>
					<label for="password" className="pt-5 text-xl">password: </label>
					<input name="password" type="password" placeholder="johndoesosolalaso" className="border-zinc-950 border-b-2 w-full focus:outline-none focus:border-blue-button"/>
				</div>
				<div className="w-full flex justify-center gap-2">
					<a 
						href={`/create-account`}  
						className="flex justify-center items-center w-full text-2xl border-2 border-blue-button hover:border-blue-button-dark"
					>
						<span className="py-1 w-full m-0 text-center">
							CREATE ACCOUNT
						</span>
					</a>
					<button className="flex justify-center items-center w-full bg-blue-button text-white text-2xl hover:bg-blue-button-dark">
						<span className="py-1">
							SIGN IN
						</span>
					</button>
					
				</div>

			</div>
		</div>
	)
}

export default Login;