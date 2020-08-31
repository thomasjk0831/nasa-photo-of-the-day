import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
     text-align: center;
     background-color: burlywood
    `
const StyledH1 = styled.h1`
     border: 1px solid black;
     padding: 10px;
     color: white;
     background-color: black
`
const StyledP = styled.p`
     font-weight: 800;
     background-color: lightblue;
     font-size: 20px;
`

function Header(props){

    const { data } = props
    return(
      <StyledDiv>
          <StyledH1>NASA photo of the day</StyledH1>
          <StyledP>{data.date}</StyledP>
      </StyledDiv>
    )
}

export default Header