
import React from 'react';
import Profile_status from './Profile_status';
import Profile_statusWithHoc from "./Profile_statusWithHoc";
let ffff=React.createRef();
let st=[{
  id:1,name:"1111"
}];

const Profile=(props)=>{


  if(!props.profile)
  return <div>no data</div>
 

 
  
{ return    (
 
     <div>
       <p>----</p>
       {props.profile.fullName}
       <img src={props.profile.photos.small}/>
       <div>------------------------</div>
         <Profile_statusWithHoc {...props}/>
<p>----</p>
</div>
 )
 
 }
}
export default Profile;