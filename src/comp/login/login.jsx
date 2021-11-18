import React from 'react';
import  {Basic_} from "./LoginForm";
import { connect } from "react-redux";

import {AppStateType} from "../../redux/redux-store";
import {Basic} from "../test/test_components";
import {AuthThunk} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";



const Login=(props)=>
{
    console.log(props.isAuth);
if(props.isAuth) {
  return  <Redirect to={"/User"}/>
}
    return <div>
    <h1>LOGIN</h1>
<Basic_ {...props}/>
</div>
}
const MapStateToProps=(state)=>
{
return {isAuth: state.AuthPage.isAuth}
}


export default connect(MapStateToProps,{AuthThunk})(Login)