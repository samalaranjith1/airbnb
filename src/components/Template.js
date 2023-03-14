import React from 'react'
import Modi from '../images/modi.jpg'
import call from '../images/calling.jpg'
import mail from '../images/mail.png'


export default function Template(props) {
  return (
     <div className='contacts'>
        <div className='template-card'>
        <img src={props.img} className='template-person-photo'/>
        <p>{props.name}</p>
        
        <div className='info-group'>
            <img src={call} className='template-calling-image' />
            <p>{props.phone}</p>
        </div>
        <div className='info-group'>
            <img src={mail} className='template-mail-image' />
            <p>{props.email}</p>
        </div>


        
      {/*we have to paste this content into App.js to get results <Template 
      img={Modi}
      name='Modi'
      phone='0000000000'
      email='modiji@gmail.com'
       />
       <Template 
      img={Rahul}
      name='Rahul'
      phone='0000000000'
      email='modiji@gmail.com'
       />
       <Template 
      img={Dhoni}
      name='Dhoni'
      phone='0000000000'
      email='modiji@gmail.com'
       />
       <Template 
      img={Kohli}
      name='Kohli'
      phone='0000000000'
      email='modiji@gmail.com'
       /> */}

    </div>
    </div>

  )
}
