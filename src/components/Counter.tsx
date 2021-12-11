import React, { useReducer } from "react"

// interface initial state
interface CounterInterface {
       count: number
}

interface updateAction {
       type: string,
       payload: number
}

const initialState = { count: 0 }

const reducers = ( state: CounterInterface, action: updateAction ) => {
       switch(action.type) {
              case "increment":
                     return { count : state.count + action.payload }
              case "decrement":
                     return { count: state.count - action.payload }
              case "reset":
                     return initialState
              default:
                     return state
       }
}

const Counter = () => {
       const [ state, dispatch ] = useReducer( reducers, initialState)
       return (
              <React.Fragment>
                     <h1>Count : { state.count }</h1>

                     <button onClick={() => dispatch({ type: "increment", payload: 3 })} className="py-2 px-4 rounded-md border-none bg-yellow-400 text-gray-900">Increment 3</button>
                     
                     <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>Decrement 5</button>

                     <button onClick={() => dispatch({ type: "reset", payload: 0})} >Reset</button>
              </React.Fragment>
       )
}

export default Counter