import React from "react"

type sayNameProps = {
       nickname: string,
       takeExam?: string,
       numberResult: number
}

export const TestExam = ( props: sayNameProps ) => {
       return (
              <React.Fragment>
                     <h1>Hello, my name is { props.nickname }</h1>
                     <p className="font-bold text-2xl">{ props.numberResult > 95 ? props.takeExam : "Lets retry later "}</p>
              </React.Fragment>
       )
}