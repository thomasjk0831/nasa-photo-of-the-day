import React from 'react'

function Photo(props){
    const { data } = props
    return(
       <div className="image-day">
           <img src={ data.url} alt={data.title}/>
       </div>
    )
}

export default Photo

