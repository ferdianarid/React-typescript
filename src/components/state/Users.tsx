import React, { useState } from "react"

interface Users {
       name: string,
       address: string,
       email: string
}

const Users = ( ) => {

       // initialize state and setState
       const [ isUsers, setUsers ] = useState<Users>({} as Users)

       // isLoggedIn Method
       const isLoggedIn = () => {
              setUsers({
                     name: "ferdian",
                     address: "jombang",
                     email: "ferdian"
              })
       }

       return (
              <React.Fragment>
                     <button onClick={isLoggedIn} className="bg-blue-600 transition-all rounded-md border-none px-3 py-2 hover:bg-blue-800">Login</button>
                     <h1>Welcome {isUsers?.name}</h1>
                     <h1>Welcome {isUsers?.address}</h1>
              </React.Fragment>
       )
}

export default Users