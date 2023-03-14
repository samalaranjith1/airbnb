import React from 'react'
import modi from '../images/modi.jpg'
import star from '../images/star.png'

export default function Card(props) {
  console.log(props)

  return (
    <div className='card'> 
    <div>{props.specialrole && <span  className='card-specialrole'>{props.specialrole}</span>}
</div>
    
        <img src={props.img}  className='card-img' />
        <div className='card-details'>
            <img src={star} alt='rate' className='card-img-star' />
            <span>{props.age}</span>
            <span>(9/10)</span>
            <span>India</span>
        </div>
        <h1  className='card-h1'>{props.name}</h1>
         <div className='card-description'>
            <h3 className='card-h3'>{props.role}</h3>
            <p className='card-p'>Now he is {props.age}</p>
        </div>
    </div>
  )
}
