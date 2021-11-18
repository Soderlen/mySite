
import React from 'react';
let ffff=React.createRef();
let st=[{
  id:1,name:"1111"
}];

const Pro=()=>
{ return    (
     <div>
       <input ref={ffff} type="Text"></input>
<button onClick={()=>{
 
  alert(ffff.current.value)}}>кнопка</button>
</div>
 )
 
 }

export default Pro;