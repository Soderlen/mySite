import { applyMiddleware, combineReducers, createStore } from "redux";
import ContentPage from "../comp/Content_reducer";
import Profile_reducer from "../comp/Profile/profile-reducer";
import Users_conteiner from "../comp/Users/Users_conteiner";
import Authreducer from "./auth-reducer";
import Usersreducer from "./users-reducer";
import  thunkMiddleware from "redux-thunk";
import { compose } from 'redux'
import {type} from "os";
import Store from "../comp/store";

let comb=combineReducers({ContentPage,UsersPage:Usersreducer,AuthPage:Authreducer})
type RootRedecerType= typeof comb;


/////////
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store_ = createStore(comb, /* preloadedState, */ composeEnhancers(
   // const Store_ = createStore(comb, /* preloadedState, */ compose(
    applyMiddleware(thunkMiddleware)
));

///////////

//let Store_=createStore(comb,applyMiddleware(thunkMiddleware));
//@ts-ignore

 window.Store_=Store_;
export type AppStateType=ReturnType<RootRedecerType>
export type AppDispatch=typeof Store_.dispatch;

export default Store_;
