import React from 'react'

interface PropsInput {
       value: string,
       handleChange: ( event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ( { value, handleChange } : PropsInput ) =>  {
       const handleInputChange = ( event: React.ChangeEvent<HTMLInputElement>) => {
              console.log( event )
       }
       return (
              <React.Fragment>
                     <input type="text" value={ value } onChange={ handleInputChange } />
              </React.Fragment>
       )
}
