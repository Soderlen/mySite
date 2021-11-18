import { getDefaultNormalizer } from '@testing-library/dom';
import React from 'react';
import { connect } from 'react-redux';
import { GetStatusThunk,UpdateStatusThunk, SetTotalUsersAC, Set_profileAC } from '../../redux/users-reducer';
import Profile from './profile';
import axios from "axios";
import { withRouter } from 'react-router';
import { WithAuthRedirect } from '../../Hoc/withAutchRedirect';
import { compose } from 'redux';
import { StatusAPI } from '../../API/API';
class Profile_conteiner extends React.Component
{
//дополнительные методы

componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.userId != this.props.match.params.userId) {
        console.log("udate");

    let userId = this.props.match.params.userId;

    if (!userId)
        userId = 2;
    // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`,{withCredentials:true})
    StatusAPI.getProfile(userId).then((response) => {

            this.props.SetUserProfile(response.data);

        }
    );

    this.props.GetStatusThunk(19579);


}
}

    componentDidMount()
{
    console.log("mount");
  //  this.props.history.push("/Content");
let userId=this.props.match.params.userId;

if(!userId)
userId=2;
   // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`,{withCredentials:true})
 StatusAPI.getProfile(userId).then((response) => {
      
       this.props.SetUserProfile(response.data);
     
    }
    );
 
   this.props.GetStatusThunk(19579);
   
   


}


    render()
    {
 
        return <Profile {...this.props }/>// profile={this.props.profile}/>
    }
}


let MapStateToProps=(state)=>{
    return{profile:state.UsersPage.profile,status:state.UsersPage.Status}

}
export default compose(connect(MapStateToProps,{SetUserProfile:Set_profileAC,GetStatusThunk,UpdateStatusThunk}),withRouter)(Profile_conteiner)
//let withUrlDataContainerComponent=withRouter(Profile_conteiner)
//let authComponetn=WithAuthRedirect(withUrlDataContainerComponent)
   /// export default connect(MapStateToProps,{SetUserProfile:Set_profileAC})(authComponetn)


  