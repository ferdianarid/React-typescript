type PropsButton = {
       handleClick: ( event : React.MouseEvent<HTMLButtonElement>, id: number ) => void
}

// Button Style Primary
const ButtonPrimary = ( props: PropsButton) => {
       return (
              <button onClick={(event) => props.handleClick(event, 12)} className="bg-blue-600 transition-all rounded-md border-none px-3 py-2 hover:bg-blue-800">
                     Button Primary
              </button>
       )
}

// Button Style Secondary
const ButtonSecondary = ( props: PropsButton ) => {
       return (
              <button onClick={(event) => props.handleClick(event, 14)} className="bg-blue-200 transition-all rounded-md border-none px-3 py-2 hover:bg-blue-400">
                     Button Secondary
              </button>
       )
}

// Button Style Secondary
const ButtonDanger = ( props: PropsButton ) => {
       return (
              <button onClick={(event) => props.handleClick(event, 14)} className="bg-red-600 transition-all rounded-md border-none px-3 py-2 hover:bg-red-800">
                     Button Danger
              </button>
       )
}

export { ButtonPrimary, ButtonSecondary, ButtonDanger }