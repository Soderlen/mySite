import React from 'react';
interface list<T>
{
    Item:T
}
export enum tp
{
    name="Anton",
    fio="Zhamaka"
}
interface typeProps
{
st:number,
count:number,
name?:string,
fio:tp
}
export const Ts:React.FC<typeProps>=({st,...props})=>
{

    return  <> {props.children}  </>
}

export default Ts