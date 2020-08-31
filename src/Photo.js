import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
   text-align: center;
   width: 100%;
   background-color: black;
   border: 3px solid orange;
`
const StyledImg = styled.img`
  border: 1px solid black;
`



function Photo(props){
    const { data } = props
    return(
       <StyledDiv>
           <StyledImg src={ data.url} alt={data.title} width='70%' />
       </StyledDiv>
    )
}

export default Photo

