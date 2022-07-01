import React, { Children } from 'react'
import './card.css'


const Card = ({children,color}) => {

    return (
        <div className='container'>
            <div className='card' style={{backgroundColor:color ,textTransform: 'uppercase'}}>
               {children}
            </div>
        </div>
    )
}

Card.defaultProps = {
    color:'#4F4F'
}

export default Card