import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import {LogOut, setAuthUserData} from '../../../redux/auth-reducer';

import Header from './header';
class header_conteiner extends React.Component
{
componentDidMount()
{
//axios.get("https://social-network.samuraijs.com/api/1.0/auth/me",{withCredentials:true}).then((respons)=>{
//if(respons.data.resultCode===0)
//{
   
   // let {id,email,login}=respons.data.data;

//this.props.setAuthUserData(id,email,login);
//}
//})
}
    render()
    {

return <Header {...this.props}/>

    }
}



const mapSteteToPropes=(state)=>
{

    return {isAuth:state.AuthPage.isAuth,login:state.AuthPage.login}
}
 

export default connect(mapSteteToPropes,{setAuthUserData,LogOut})(header_conteiner)