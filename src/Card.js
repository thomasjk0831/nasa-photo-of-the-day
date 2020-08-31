import React from 'react'
import styled from 'styled-components'

const StyledP = styled.p`
   margin: 0 auto;
   width: 90%;
   border: 1px solid black;
   border-radius: 40px;
   padding: 10px;
   background-color: lightblue;
`
const StyledH2 = styled.h2`
  text-align: center;
  border-radius: 40px;
  padding: 10px;
  background-color: burlywood;
  `
const StyledDiv = styled.div`
  background-color: black;
  `


function Card(props){
    const { data } =props
    return(
        <StyledDiv>
            <StyledH2>{data.title}</StyledH2>
            <StyledP>{data.explanation}</StyledP>
        </StyledDiv>
    )
  
}

export default Card