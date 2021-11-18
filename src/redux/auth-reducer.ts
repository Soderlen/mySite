import {AuthApi, UserAPI} from "../API/API";
import {SetIsFollowingProgress, unFollowAC} from "./users-reducer";
import axios from "axios";

AuthApi.Auth()
const SET_USER_DATE="SET_USER_DATE";
const SET_status="SET_status";
export type InitialStateType=
    {
        id:number|null,
        login:string|null,
        email:string|null,
        isAuth:boolean,
        Status:boolean

    }
 
let InitialState:InitialStateType=
{
    id:null,
    login:null,
    email:null,
    isAuth:false,
    Status:false
}
type  ActiondataType=
    {
        id:number,
        email:string,
        login:string
    }

const Authreducer=(state =InitialState,action:any):InitialStateType=>
{
    
switch(action.type)
{
    case SET_USER_DATE:
        return        {
            ...state,...action.data
        }

    case SET_status:
        return    {
    ...state,Status:true
    }

    default: return state
}



}

export const AuthThunk=(email:string,password:string,rememberMe:boolean)=> {
    return async (dispatch: any) => {

       let response= await AuthApi.Auth(email,password,rememberMe);

       if (response.data.resultCode==0)
      {

          dispatch(Auth())

      }

    }
}
export  const StatusThunk=()=> async (dispatch:any) => {
 let response=await dispatch(Auth());
     dispatch(StatusAc());
 //response.then(()=>{dispatch(StatusAc())});
//Promise.all([response]).then(()=>{dispatch(StatusAc())})

    }

export const Auth=()=>  async (dispatch: any) => {
   let respons=  await   axios.get("https://social-network.samuraijs.com/api/1.0/auth/me",{withCredentials:true})//.then((respons)=>{
      //  console.log(respons.data.resultCode);
            if(respons.data.resultCode===0)
            {

                let {id,email,login}=respons.data.data;

               dispatch(setAuthUserData(id,email,login,true));

            }
       // })

    }

export const LogOut=()=> {
    return async (dispatch: any) => {
   let response= AuthApi.Logout();

       dispatch(setAuthUserData(0, "", "",false));
    //   dispatch(Outh());

    }
}
type setAuthUserDataType=({type:typeof SET_USER_DATE,data: {id:number,email:string,login:string,isAuth:boolean } })

export const StatusAc=()=>({type:SET_status});


export const setAuthUserData=(id:number,email:string,login:string,isAuth:boolean):setAuthUserDataType=>({type:SET_USER_DATE,data:{id,email,login,isAuth}})
export default Authreducer;