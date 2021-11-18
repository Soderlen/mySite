import {LogOut} from "../../../redux/auth-reducer";
import {useHistory} from "react-router-dom";

const Header=(props)=>
{

    return <div>
{props.isAuth?
    <div>{ props.login}-<button onClick={(e)=>{props.LogOut();}}>LogOut</button> </div>
       :"Необходимо авторизироваться"}




        <img src='../favicon.ico'></img>
    </div>
}
export default Header;