import React from 'react'

type BooksTypes = {
       children: React.ReactNode
}

export default function Books( props: BooksTypes ) {
       return (
              <div>
                     <h1>{ props.children }</h1>
              </div>
       )
}
