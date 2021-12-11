import React, { useState } from 'react'

function App() {
       // define state, setstate and initial state
       const [ isLoggedIn, setIsLoggedIn ] = useState(false)

       // action login
       const LoggedIn = () => {
              setIsLoggedIn(true)
       }

       // action logout
       const LoggedOut = () => {
              setIsLoggedIn(false)
       }

	 // action toggle logout
	const toggleLogged = () => {
              setIsLoggedIn(!isLoggedIn)
       }

       return (
              <React.Fragment>
			<h1 className="text-3xl font-bold">Users is &nbsp;
                     	{ isLoggedIn ? "Welcome to homepage" : "Lets Login First" }
                     </h1>

                     <button onClick={LoggedIn} className="m-2 py-3 px-4 rounded-md border-none bg-blue-500 hover:bg-blue-700">Login</button>
                     <button onClick={LoggedOut} className="m-2 py-3 px-4 rounded-md border-none bg-blue-500 hover:bg-blue-700">Logout</button>
                     <button onClick={toggleLogged} className="m-2 py-3 px-4 rounded-md border-none bg-blue-500 hover:bg-blue-700">Toggle</button>
              </React.Fragment>
       )
}

export default App