import { Redirect } from "react-router"
import React from 'react';
import { connect } from "react-redux";

export const WithAuthRedirect=(Component)=>
{

    class RedirectComponetnt extends React.Component
    {
        render()

        {

            if(!this.props.isAuth ) return   (   <Redirect to="/Login"/>)

            return <div>
                <h1>MY HOC</h1>

            <Component {...this.props}/>
            
            </div>
        }
    }

    let mapStateToProps=(state)=>
    {
        return{isAuth:state.AuthPage.isAuth,rrrrr:47}
    }
    return  connect(mapStateToProps) (RedirectComponetnt);
}