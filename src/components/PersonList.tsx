import React from 'react'

type PersonListProps = {
       nameList: {
              firstName: string,
              lastName: string
       }[]
}

export default function PersonList( props: PersonListProps ) {
       return (
              <React.Fragment>
                     <h1>Users List</h1>
                     {
                            props.nameList.map(users  => {
                                   return (
                                                 <h1 key={users.firstName}>Name: { users.firstName } {users.lastName}</h1>
                                          )
                                   }
                            )
                     }
                     
              </React.Fragment>
       )
}
