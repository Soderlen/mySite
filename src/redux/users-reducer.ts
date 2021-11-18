import axios from "axios";
import {  StatusAPI, UserAPI } from "../API/API";
import produce from "immer";
import {AppDispatch, AppStateType} from "./redux-store";
import {Dispatch} from "redux";
import {TypedUseSelectorHook, useSelector} from "react-redux";
const SET_PROFILE="SET_PROFIL";
const follow = "FOLLOW";
const unfollow = "UNFOLLOW";
const setUsers ="SETUSERS";
const SET_CURRENT_PAGE="set_current_page";
const SET_USERS_COUNT="SET_USERS_COUNT";
const TOOGLE_ISFETCHING="TOOGLE_ISFETCHING";
const TOOGLE_IS_FOLLOWING_PROGERESS="TOOGLE_IS_FOLLOWING_PROGERESS";
const SET_STATUS="SET_STATUS";
const SET_Term="SET_Term";
const AppState:TypedUseSelectorHook<AppStateType>=useSelector;

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
//export  const  TypeHook:TypedUseSelectorHook< AppStateType>=useSelector;

type PhotosType=
    {
        small:string|null,
         large:string|null
    }
type  UsertType=
    {
        name:string|null,
        id:number,
        followed:boolean,
        photos:PhotosType,
        status:string|null,
        term:string|null
    }
let InitialState={
  profile:null,
Items:[] as Array<UsertType>,
pagesize:10,
totalUsersCount:0,
currenPage:1,
isFetching:false as boolean,
followingInProgress:[] as Array<number>,
Status:"",
    term:""
}
type InitialStateType=typeof InitialState;
const Usersreducer=(state=InitialState,action:any):InitialStateType=>{
switch(action.type)
{
  case SET_PROFILE:
  return  {

      ...state,profile:action.profile
    }
    case SET_Term:
  return  {
      ...state,term:action.term
    }
    case SET_STATUS:
  return  {
      ...state,Status:action.status
    }
  case TOOGLE_ISFETCHING:
  return{
    ...state,isFetching:action.isFetching
  }

  case TOOGLE_IS_FOLLOWING_PROGERESS:
    return{
      ...state,followingInProgress:action.followingInProgress?
              [...state.followingInProgress,action.id]:
              state.followingInProgress.filter(id=>id!=action.id)

    }
case SET_USERS_COUNT:
  return{

    ...state,totalUsersCount:action.usersCount
  }
    case follow:
    return {
...state,
Items:(state.Items.map((u)=>{
if(u.id===action.userid)
{
return {...u,followed:true} ;
}
return u ;

      }))
    } 
    case unfollow:
        return {
    ...state,
    Items:state.Items.map((u :UsertType)=>{
    if(u.id===action.userid)
    { 
    return {...u,followed:false};
    }
    return u ;
    
          })
        }   
        case setUsers:{
          return produce(state,newState=>{newState.Items=action.Items})//{
                 
           //  ...state,Items:[...state.Items,...action.Items]



         //  ...state,Items:[...action.Items]
          }
          
      //  }
case SET_CURRENT_PAGE:  {

    return {
           ...state,currenPage:action.currenPage}
    }
default:return state;


}
    
}
export const SetIsFollowingProgress=(followingInProgress:boolean,id:number)=>({type:TOOGLE_IS_FOLLOWING_PROGERESS,followingInProgress,id});
type SetIsFetchingACType={type:typeof TOOGLE_ISFETCHING,isFetching:boolean}
export const SetIsFetchingAC=(isFetching:boolean):SetIsFetchingACType=>({type:TOOGLE_ISFETCHING,isFetching});
export const followAC=(userid:number)=>({type:follow,userid});
export const  unFollowAC=(userid:number)=>({type:unfollow,userid});
export const  setUserAC=(Items_:any)=>({type:setUsers,Items:Items_});
export const  setTermAC=(term:string)=>({type:SET_Term,term});
export const SetCurrentPageAC=(currenPage:number)=>{return {type:SET_CURRENT_PAGE,currenPage}};
export const SetTotalUsersAC=(usersCount:number)=>{return {type:SET_USERS_COUNT,usersCount}};
export const  Set_profileAC=(profile:any)=>{return {type:SET_PROFILE,profile}};
export const  setStatusAC=(status:any)=>({type:SET_STATUS,status});


export const getUsersThunkCreator=(currenPage:number,pagesize:number,term:string)=>{
 return async (dispatch:AppDispatch,getState:()=>AppStateType)=>
{

dispatch(  SetCurrentPageAC(currenPage));
  dispatch(SetIsFetchingAC(true));


 let response=await UserAPI.getUsers(currenPage,pagesize,term)

    dispatch(setTermAC(term));
 //((response) => {
    dispatch(SetIsFetchingAC(false));
    dispatch(setUserAC(response.items));

    dispatch(SetTotalUsersAC(response.totalCount))
     
  }
  //);
}



export const followThunk=(userid:number)=>{
  return (dispatch:any)=>
 {

  dispatch(SetIsFollowingProgress(true,userid));
  UserAPI.follow(userid).then((respons)=>{

 
  if(respons.data.resultCode==0)
  {
    dispatch( unFollowAC(userid))
  }
  dispatch((SetIsFollowingProgress(false,userid)))
 })
        

 
 }
}

export const unfollowThunk=(userid:number)=>{
  return async (dispatch:any)=>
 {
 
  dispatch(SetIsFollowingProgress(true,userid));
 let respons= await UserAPI.unfollow(userid)
     //then((respons)=>{

 
  if(respons.data.resultCode==0)
  {
    
    dispatch( followAC(userid))
  }
  dispatch((SetIsFollowingProgress(false,userid)))
 //}
// )
        

 
 }
}
export const GetStatusThunk=(userid:number)=>{
  return (dispatch:any)=>
 {

  StatusAPI.getStatus(userid).then((respons)=>{
    
 dispatch( setStatusAC(respons.data));
 })
        

 
 }
}

export const UpdateStatusThunk=(status:any)=>{
  return (dispatch:any)=>
 {
 
  StatusAPI.UpdateStatus(status).then((respons)=>{
   if(respons.data.resultCode===0)
 dispatch( setStatusAC(status));

 })
        

 
 }
}
export default Usersreducer;