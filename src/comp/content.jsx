

import { getByTitle } from '@testing-library/dom';
import { Redirect } from 'react-router';
import Store_ from '../redux/redux-store';
import cont from './content.module.css';
import Store from './store';

let gh=()=>alert("sss");
const Content=( param)=>{
    let t=45;
    let mas=[1,2,3,4,5]
  function fClick ()
    {
      
 
       // param.add("jj");
    // Store.callSubscriber(param.Stt);
  //  Store_.dispatch({type:"Add",text:"MY text"});
  param.Add("))))");
    }
    
let masContent=param.ContentPage_.users.map((p)=>{return <p key={p.id}>-{p.name}+" "+{p.age}</p>});
//if(param.isAuth==false)
//return <Redirect to="/Login"/>
{ return <div>
<div  className={cont.wrapper}>
    


   <div className={ cont.br}>
       content
 
       <img width='50px' src='./1/12.jpg' ></img>
    
   </div>
                    <div className={ cont.br}>
   {masContent}
   </div>
  
       </div>
    <button  width="60px" onClick={fClick} value="Нажми">нажми</button>
    </div>


}
}

export default Content;