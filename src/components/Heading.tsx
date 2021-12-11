import React from "react"

// Interfaces Heading
interface HeadingProps {
       children: string
}

// Heading Warning
const HeadingWarning = ( props: HeadingProps ) => {
       return (
              <h1 className="text-yellow-300 text-4xl font-bold">{ props.children }</h1>
       )
}

// Heading Danger
const HeadingDanger = ( props: HeadingProps ) => {
       return (
              <h1 className="text-2xl font-bold text-red-600">{ props.children }</h1>
       )
}

// Heading Informations
const HeadingInformations = ( props: HeadingProps ) => {
       return (
              <h1 className="text-2xl font-bold text-blue-100">{ props.children }</h1>
       )
}

// Interface Manual Styling
interface manualStyles {
       styles: React.CSSProperties,
       children: React.ReactNode
}

// Manual Styling
const HeadingStyles = ( props: manualStyles ) => {
       return (
              <h1 style={ props.styles }>{ props.children }</h1>
       )
}
// <HeadingStyles styles={{ color: "skyblue", fontWeight: "bold", fontSize: "32px" }} />
//<HeadingStyles styles={{ color: "yellow", fontWeight: "bold", fontSize: "32px" }} />

export { HeadingWarning, HeadingDanger, HeadingInformations, HeadingStyles }