import React from "react"

type messageStatus = {
       status: "loading" | "success" | "error"
}

export const Status = ( props: messageStatus ) => {
       let message
       if (props.status === 'loading') {
              message = "State is loading ..."
       } else if ( props.status === 'success' ) {
              message = "Successfully fetch data"
       } else if ( props.status === 'error') {
              message = "Error fetching"
       }
       return (
              <h1>Status : { message }</h1>
       )
}