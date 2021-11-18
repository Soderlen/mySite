import logo from "./logo.svg";
import "./App.css";
import funct from "./js/script";
import Content from "./comp/content";
import cont from "./comp/content.module.css";
import Profile from "./comp/Profile/profile";
import "./grid.css";
import { BrowserRouter, NavLink, Redirect, Route } from "react-router-dom";
import ContentConteiner from "./comp/ContentConteiner";
import { withRouter } from "react-router";
import Usersreducer from "./redux/users-reducer";
import Users_conteiner from "./comp/Users/Users_conteiner";
import Profile_cont from "./comp/Profile/Profile_conteiner";
import Header_conteiner from "./comp/command/header/header_conteiner";
import Login from "./comp/login/login";
import { Component } from "react";
import axios from "axios";
//import f1 from './js/script'
import { setAuthUserData, StatusThunk } from "./redux/auth-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./comp/command/preloader";
import Test from "./comp/test/test1";

// yyy.fub

class App extends Component {
  componentDidMount() {
    this.props.StatusThunk();
    //    axios.get("https://social-network.samuraijs.com/api/1.0/auth/me",{withCredentials:true}).then((respons)=>{
    //       if(respons.data.resultCode===0)
    //     {

    //       let {id,email,login}=respons.data.data;

    //       this.props.setAuthUserData(id,email,login,true);
    //     }
    //  })
  }

  render() {
    if (!this.props.status) return <Preloader isFetching="true" />;
    let f = 470000;
    //f1(f);
    let parтт = <Content name="ddddd" />;
    return (
      <div className="app-wrapper">
        <header className="header">
          <Header_conteiner />
        </header>
        <nav className="nav">
          <div className="item">
            <NavLink activeClassName="activ" to="/Profile">
              {" "}
              profile
            </NavLink>
          </div>
          <div>
            <NavLink activeClassName="activ" to="/Content">
              content
            </NavLink>
          </div>
          <div>
            <NavLink activeClassName="activ" to="/User">
              Find user
            </NavLink>
          </div>
          <div>
            <NavLink activeClassName="activ" to="/Login">
              Login
            </NavLink>
          </div>
          <div>
            <NavLink activeClassName="activ" to="/Test">
              Тест
            </NavLink>
          </div>
          <div className="item">
            <a>music</a>
          </div>
        </nav>
        <div className={cont.Content}>
          <div className="Mygrid">
            <div>
              <switch>
                <Route path="/Content" render={() => <ContentConteiner />} />

                <Route path="/User" render={() => <Users_conteiner />} />

                <Route
                  path="/Profile/:userId?"
                  render={() => <Profile_cont />}
                />
                <Route path="/login" render={() => <Login />} />
                <Route path="/Test" component={Test} />
                <Redirect to={"/User"} />
              </switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Ss = () => {
  return <h1>87yiuy</h1>;
};
let mapStateToprops = (state) => {
  return { auth: state.AuthPage.isAuth, status: state.AuthPage.Status };
};

export default compose(
  withRouter,
  connect(mapStateToprops, { setAuthUserData, StatusThunk })
)(App);
//withRouter( connect(null,{setAuthUserData})(App));
