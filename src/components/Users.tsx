import React from 'react'

// import Users Types Interface
import { UsersTypes } from './types/Users.types'

export default function Users( props: UsersTypes ) {
       return (
              <div>
                     <h1>Hi my name is { props.users.firstName } { props.users.lastName }</h1>
              </div>
       )
}