import React, {useEffect, useState} from 'react';
const Profile_statusWithHoc=React.memo((props)=>{
 let [editMode,setEditMode]=useState(false);
    let [status_,setStatus]=useState(props.status);
    useEffect(()=>{
setStatus(props.status)

    },[props.status])
//let editMode=StateWith[0];
//let setEditMode=StateWith[1];
    const activeMOde=()=>    {

     setEditMode(true);
    }
    const DeActiveMOde=()=>
    {
        setEditMode(false);
             props.UpdateStatusThunk(status_)
    }
    const OnstatusChenge=(e)=>
    {
        setStatus(e.currentTarget.value);

    }

        return <div>

            {!editMode && <div>
                <span onDoubleClick={activeMOde} >-{status_}-</span>

            </div>}
            {editMode && <div>
                <input onChange={OnstatusChenge} onBlur={ DeActiveMOde}  autoFocus={true}
                       value={status_}/>
            </div>}
        </div>

})

export default Profile_statusWithHoc;