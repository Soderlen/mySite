import {useState} from "react";

export const Myhooks=(callback)=>
{
    const [per,setPer]=useState(false);
    const t=async ()=> {
        setPer(true);
      await  callback();
        setPer(false);
    }
    return [t,per];

}
