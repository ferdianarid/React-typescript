import React from 'react'

type UsersProps = {
       firstName: string,
       lastName: string
}

export default function Users( props: UsersProps ) {
       return (
              <div>
                     <h1>Hi { props.firstName } { props.lastName }</h1>
              </div>
       )
}
