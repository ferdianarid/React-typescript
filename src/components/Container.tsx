import React from 'react'

// Interface container props
interface ContainerProps {
       children: React.ReactNode,
       styles: React.CSSProperties
}

export default function Container( props: ContainerProps ) {
       return (
              <div className="container" style={ props.styles }>
                     { props.children }       
              </div>
       )
}

//example container + heading

{/* <Container styles={{ width: "100%", paddingLeft: "120px", paddingRight: "120px" }}>
       <HeadingStyles styles={{ fontSize: "32px", color: "yellow", fontWeight: "bold" }}>Lorem ipsum dolor sit amet.</HeadingStyles>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic inventore iusto ipsa numquam ratione autem odit sequi, doloremque accusamus ad at recusandae ab nesciunt, molestias quasi tenetur maiores perferendis cupiditate.</p>
</Container> */}