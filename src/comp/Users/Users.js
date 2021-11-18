import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserAPI } from "../../API/API";
import comp from "../../comp/content.module.css";
import style from "../../comp/user.module.css";
import { Redirect } from "react-router";
import {
  followThunk,
  SetIsFollowingProgress,
  unfollowThunk,
} from "../../redux/users-reducer";
import cm from "classnames";
import UserSearch from "./UserSearch";
import { useSelector } from "react-redux";

let Users = (props) => {
  const st = useSelector(({ UsersPage }) => UsersPage);

  useEffect(() => console.log(st), []);

  let pageCount = Math.ceil(props.totalUsersCount / props.pagesize);

  let pages = [];
  for (let index = 1; index <= pageCount; index++) {
    pages.push(index);
  }
  let portionSiZe = 10;
  let [portion, SetPortion] = useState(1);

  let portionCount = Math.ceil(pageCount / portionSiZe);

  let fistPirionNumber = (portion - 1) * portionSiZe + 1;
  let lastPortionNumber = portion * portionSiZe;

  return (
    <div>
      <UserSearch {...props} />
      <div>
        {portion > 1 && (
          <button onClick={() => SetPortion(portion - 1)}>prev</button>
        )}
        {pages
          .filter((p_) => p_ >= fistPirionNumber && p_ <= lastPortionNumber)
          .map((p) => {
            return (
              <span
                onClick={() => {
                  props.onPageChanged(p);
                }}
                className={props.currenPage === p && cm(style.selectedPage)}
              >
                {" "}
                {p}
              </span>
            );
          })}
        {portionCount > portion && (
          <button onClick={() => SetPortion(portion + 1)}>next</button>
        )}
        <p color="black">страницы таблицы</p>
      </div>
      Здесь будут юреры
      {props.Items.map((u) => {
        return (
          <div>
            {" "}
            <div className={comp.br} key={u.id}>
              {u.name}

              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id == u.id)}
                  onClick={() => {
                    /* props.SetIsFollowingProgress(true,u.id);
          UserAPI.follow(u.id).then((respons)=>{

         
          if(respons.data.resultCode==0)
          {
           props.unfollow(u.id)
          }
          props.SetIsFollowingProgress(false,u.id);
         })
                
    */
                    props.followThunk(u.id);
                  }}
                >
                  follow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id == u.id)}
                  onClick={() => {
                    /*props.SetIsFollowingProgress(true,u.id);
              UserAPI.unfollow(u.id).then((respons)=>{
                 
                if(respons.data.resultCode==0)
                {
                  props.follow(u.id)
                }
                props.SetIsFollowingProgress(false,u.id);
               })
              */
                    props.unfollowThunk(u.id);
                  }}
                >
                  Unfollow
                </button>
              )}
              <NavLink to={"/Profile/" + u.id}>расширенная информация</NavLink>
            </div>
            <p></p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
