import React, { useState } from 'react'

export const isLoggedIn = () => {
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

       return (
              <React.Fragment>
                     { isLoggedIn ? "Welcome to homepage" : "Lets Login First" }
                     <h1>Users is {}</h1>

                     <button onClick={LoggedIn} className="py-3 px-4 rounded-md border-none bg-blue-500">Login</button>
                     <button onClick={LoggedOut} className="py-3 px-4 rounded-md border-none bg-blue-500">Logout</button>
              </React.Fragment>
       )
}