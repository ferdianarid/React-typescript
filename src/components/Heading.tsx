import React from "react"

type HeadingProps = {
       children: string
}

export const Heading = ( props: HeadingProps ) => {
       return (
              <h1 className="text-yellow-300 text-4xl font-bold">{ props.children }</h1>
       )
}