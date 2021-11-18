import { getAllByTestId } from "@testing-library/dom";
import axios from "axios";

let instance= axios.create({withCredentials:true,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{
  "API-KEY":"c7425015-4ab3-419f-b6db-efa18b8d9263" 


}});
export const UserAPI={
  getUsers(currenPage=1,pagesize=10,term=""){
  //  alert("API");
//return instance.get(`users?page=${currenPage}&count=${pagesize}`+term.length>0?`&term=${term}`:``).then(response=>response.data)
  //  console.log(`users?page=${currenPage}&count=${pagesize}`+term.length>0?`&term=${term}`:``);

    return instance.get(`users?page=${currenPage}&count=${pagesize}&term=${term}`).then(response=>response.data)
}
,
  follow(userid) {

 return instance.delete(`follow/${userid}`)
},
unfollow(userid)
{
 
return instance.post(`follow/${userid}`)
}


 
}
export class AuthApi{
  static Auth(email,password,rememberMe)
  {
return instance.post("auth/login",{email,password,rememberMe})
  }
  static Logout()
  {
return instance.delete("auth/login");
  }

}


export const StatusAPI=
{
getProfile(userId)
{

  return  instance.get(`profile/${userId}`)
},
getStatus(userId)
{


  return  instance.get(`profile/status/${userId}`)
},
UpdateStatus(status)
{
  return instance.put('profile/status',{status:status})
}

}