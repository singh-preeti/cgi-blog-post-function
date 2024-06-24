import React from 'react';
import SingleComment from './SingleComment';
import Pic1 from './Image/bill.png'
import Pic2 from './Image/alone.png'
import UserCard from './UserCard';
 const App = () => {
  return(
    <div className='ui comments'>
      <UserCard description='Hello my name is Preeti and i am a jfs developer and trainer'>
      <SingleComment name="Preeti" 
       date='Today at 5:00PM'
       text="it ia a Reactjs Blog"
       picture={Pic2}/>
     </UserCard>
     <UserCard description='Hello my name is Kavita and i am a jfs developer and trainer'>
      <SingleComment name="Kavita" 
      date='Today at 6:00PM'
      text="It is Angular Blog"
      picture={Pic1}/>
      <SingleComment />
      </UserCard>
     
    </div>
  )
}
export default App;