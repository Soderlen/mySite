let Store=
{
_state:{
ContentPage:[{name:"Anton",age:24},{name:"Klava",age:23}]
},
getState(){
    return this._state;
},
callSubscriber(){},
subscribe(observer)
{
   
    this.callSubscriber=observer;
},

add(param)
{
    this._state.ContentPage.push({name:"karl",age:99});
}}
export default Store;