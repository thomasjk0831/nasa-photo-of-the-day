import React from 'react'

function Header(props){

    const { data } = props
    return(
      <div className="header">
          <h1>NASA photo of the day</h1>
          <p>{data.date}</p>
      </div>
    )
}

export default Header