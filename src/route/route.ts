import React from "react";
import Users from "../comp/Users/Users";

export interface IRoute
{
    path:string;
    componet:React.ComponentType;
    exact?:boolean;
}
type rout=
{
    path:string,
    componet:React.ComponentType,
    exact?:boolean
}
//export const routes:Array<rout>=[{path:"sddd",componet:Users}]
export const routes:IRoute[]=[{path:"sddd",componet:Users}]