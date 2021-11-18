import { StaticRouter } from "react-router";

let Initialstate= 
{
  users: [{name:"Anton",age:24},{name:"Klava",age:23}],
  newText:"sddfs"
}

const Content_reducer=(state=Initialstate,action)=>
{
    switch(action.type)
    {
        case "Add":
        //  let newState={...state};
        // newState.users=[...state.users];

            let newState={...state,users:[...state.users,{name:action.text,age:99}]}

       //    newState.users.push();
            return  newState; 

            default:
     
            return state;
    }
   
}

export default Content_reducer;