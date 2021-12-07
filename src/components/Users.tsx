import React from 'react'

type UsersProps = {
       users: {
              firstName: string,
              lastName: string
       }
}

export default function Users( props: UsersProps ) {
       return (
              <div>
                     <h1>Hi my name is { props.users.firstName } { props.users.lastName }</h1>
              </div>
       )
}