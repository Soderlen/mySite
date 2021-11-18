import React from 'react';
import axios from "axios";
import comp from "../../comp/content.module.css"
import style from "../../comp/user.module.css"


class UsersC extends React.Component {

  constructor(props){
super(props);

if(this.props.Items.length===0)
   {
//axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response)=>{this.props.setUsers_(response.data.items);});
  
  }}
     get_user=()=>
    {
   
}
onPageChanged=(pageNumber)=>
{
  this.props.SetCurrentPage(pageNumber);
  
  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesize}`).then((response)=>{
this.props.setUsers_(response.data.items)  
   
  
  });

  
}
componentDidMount()
{

  if(this.props.Items.length===0)
  {

 axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currenPage}&count=${this.props.pagesize}`).then((response)=>{
   this.props.setUsers_(response.data.items);
   this.props.SetUsersTotalCount(100);//response.data.totalCount);
  });

  
   
  }
}
    render() {
      
      let pageCount=Math.ceil(this.props.totalUsersCount/this.props.pagesize);
      let pages=[];
      for (let index = 1; index <= pageCount; index++) {
        pages.push(index);
        
      }
      
        return(
        
            <div> 
              
              <div >
                {pages.map((p)=>{return <span onClick={()=>{this.onPageChanged(p)}} className={this.props.currenPage===  p&&style.selectedPage}> {p}</span>})}
        <p  color="black">страницы таблицы</p>
        
      </div>
              
              Здесь будут юреры
        
              {
                  
               this.props.Items.map((u)=>{return ( <div>   <div  className={comp.br}  key={u.id}>
                 {u.name} 
                   {u.followed? <button onClick={()=>this.props.unfollow(u.id)}>follow</button>: <button onClick={()=>this.props.follow(u.id)}>Unfollow</button>}
                 
                  
                   </div>
                   <p></p>
                   </div>
                  )
                 
                   })
              }
              <button onClick={this.get_user}>get users</button>
            </div>)
    }
}
export default UsersC;

