import React from 'react'

function Card(props){
    const { data } =props
    return(
        <div className="card-container">
            <h2>{data.title}</h2>
            <p>{data.explanation}</p>
        </div>
    )
  
}

export default Card