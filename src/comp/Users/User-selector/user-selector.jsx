import {createSelector} from "reselect";
import {useMemo} from "react";

const GetItems=(state)=>
{
    return state.UsersPage.Items;
}


export const getSelectorItems=createSelector(GetItems,(Items)=>{
    return Items.filter((u)=>true)

    }

)