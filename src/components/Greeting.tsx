import React from 'react'

type Username = {
       name: string,
       orders: number,
       isCompleted: boolean
}

export default function Greeting(props: Username) {
       return (
              <div>
                     <h1>Hello my name is { props.name }. You have { props.orders } orders.</h1>
                     <h5>
                            { props.isCompleted ? "Good Job, you already completed task" : "Please do the Job first"}
                     </h5>
              </div>
       )
}
