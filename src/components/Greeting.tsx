import React from 'react'

// import Heading Warning
import { HeadingWarning } from "./Heading"

// interfaces Username
interface Username {
       name: string,
       orders?: number,
       isCompleted: boolean
}

// interfaces ExamProps
interface ExamProps {
       name: string,
       messageReceived?: number,
       isLoggedIn: boolean
}

// Greeting
const Greeting = (props: Username) => {
       return (
              <div>
                     <h1>Hello my name is { props.name }. You have { props.orders } orders.</h1>
                     <h5>
                            { props.isCompleted ? "Good Job, you already completed task" : "Please do the Job first"}
                     </h5>
              </div>
       )
}

export { Greeting }