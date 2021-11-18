import React, {useEffect, useState} from 'react';

export const Render=(props)=>
{
    
    return <>
    {console.log("render")}
    
    Render Conponent--{props.d}
    </>
}
export default  React.memo(Render)