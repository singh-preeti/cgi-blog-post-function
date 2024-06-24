import React from 'react'
import Pic1 from './Image/bill.png'
import Pic2 from './Image/alone.png'

const SingleComment = (Kavita) => {
    console.log(Kavita)
    return(
        <div className='comment'>
        <a href="/" className='avatar'>
        <img src={Kavita.picture} alt="Profile picture"></img></a>
        <div className='content'>
         <a href="/" className='author'>{Kavita.name}</a>
         <div className='metadata'>
           <span className='date'>{Kavita.date}</span>
         </div>
         <div className='text'>{Kavita.text}</div>
        </div>
       </div>
      
    )
}
export default SingleComment;