import axios from "axios";
import comp from "../../comp/content.module.css"
import {memo, useMemo} from "react";
import PreLoaderScelenon from "../command/preLoaderScelenon";



const Users= memo((props)=>{
  const get_user=()=>
  {
 if(props.Items.length===0)
 {
axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response)=>{props.setUsers_(response.data.items);});


  
 }
  
}

    return(
     <div> Здесь будут юреры
 
       {
         props.Items.map((u)=>{return ( <div>   <div  className={comp.br}  key={u.id}>
          {u.name} 
            {u.followed? <button onClick={()=>props.unfollow(u.id)}>follow</button>: <button onClick={()=>props.follow(u.id)}>Unfollow</button>}
          
           
            </div>
            <p></p>
            </div>
           )
          
            })
       }
       <button onClick={get_user}>get users</button>
     </div>)
}
)

export default Users;