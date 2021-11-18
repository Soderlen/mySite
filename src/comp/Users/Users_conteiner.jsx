import React, {PureComponent} from 'react';
import axios from "axios";
import {connect, useSelector} from "react-redux";
import { compose } from 'redux'
import Users from './Users';
import { followAC, followThunk, getUsersThunkCreator, SetCurrentPageAC, SetIsFetchingAC, SetIsFollowingProgress, SetTotalUsersAC, setUserAC, unFollowAC, unfollowThunk } from "../../redux/users-reducer";
import Preloader from '../command/preloader';
import { getUsers } from '../../API/API';
import { Redirect } from 'react-router';
import { WithAuthRedirect } from '../../Hoc/withAutchRedirect';
import {getSelector, getSelectorItems} from '../Users/User-selector/user-selector';
import PreLoaderScelenon from "../command/preLoaderScelenon";
import {TypedUseSelectorHook} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
//import UsersAPIComponent from "./UsersAPIComponent";


class UsersAPIComponent extends PureComponent {


  //  shouldComponentUpdate(nextProps, nextState, nextContext) {
   //    return(nextProps!=this.props || nextState!=this.state)
   // }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber,this.props.pagesize, this.props.term)

    }
    componentDidUpdate(prevProps, prevState, snapshot) {


    }

    componentDidMount() {
console.log("user did mount")
        this.props.getUsers(this.props.currenPage,this.props.pagesize,this.props.term)
    }
    render() {

      

        return <>

           <Preloader isFetching={this.props.isFetching}/>
            <Users {...this.props} onPageChanged ={this.onPageChanged }/>
         
        </>
    }




}


let mapStateToProps = (state) => {

  //  return {followingInProgress:state.UsersPage.followingInProgress, Items: state.UsersPage.Items, pagesize: state.UsersPage.pagesize, totalUsersCount: state.UsersPage.totalUsersCount, currenPage: state.UsersPage.currenPage, isFetching: state.UsersPage.isFetching }
    return {term:state.UsersPage.term,followingInProgress:state.UsersPage.followingInProgress, Items: getSelectorItems(state), pagesize: state.UsersPage.pagesize, totalUsersCount: state.UsersPage.totalUsersCount, currenPage: state.UsersPage.currenPage, isFetching: state.UsersPage.isFetching }
}
export default compose(connect(mapStateToProps,{
    follow:followAC,
    followThunk,unfollowThunk,
    SetIsFollowingProgress,

    toogleisFetching: 
      SetIsFetchingAC,
    
    unfollow:
       unFollowAC,
    
    setUsers_:setUserAC,
    
    SetCurrentPage:
       SetCurrentPageAC,
    
    SetUsersTotalCount:
       SetTotalUsersAC,
       getUsers:   getUsersThunkCreator
    }

 ),WithAuthRedirect)(UsersAPIComponent)
//let AuthComponent= WithAuthRedirect(UsersAPIComponent);

     /*   const Users_conteiner = connect(mapStateToProps,{
            follow:followAC,
            followThunk,unfollowThunk,
            SetIsFollowingProgress,
        
            toogleisFetching: 
              SetIsFetchingAC,
            
            unfollow:
               unFollowAC,
            
            setUsers_:setUserAC,
            
            SetCurrentPage:
               SetCurrentPageAC,
            
            SetUsersTotalCount:
               SetTotalUsersAC,
               getUsers:   getUsersThunkCreator
            }
    
         )( AuthComponent);*/

         

//export default Users_conteiner;