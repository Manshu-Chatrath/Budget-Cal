import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlusSquare, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const expenses=({setadd,list,setlist,setId,setedit,settitle,setamount})=>{
  const adding=()=>{
      setadd(true);
}
const deleteAll=()=>{
    setlist([]);
}
const ondeleteone=(e)=>{

    let newlist=list.filter(list=>list.id!==e.target.id);
    setlist(newlist);
}
const onedit=(e)=>{
    let newlist=list.filter(list=>list.id===e.target.id);
    settitle(newlist[0].title);
    setamount(newlist[0].amount);
    setId(newlist[0].id)
    setedit(true);
}
const items=()=>{

    if(list.length===0)
    {  
       return(<div className="warning">No items added yet!!</div>);
    }
    else
{
return list.map(item=>{
return(  <div key={item.id} className="article">
<div className="basic">
    <div className="name">{item.title}</div>
    <div className="button">
    <i><FontAwesomeIcon id={item.id} icon={faPen} onClick={(e)=>{onedit(e)}} /></i>
  <i><FontAwesomeIcon id={item.id} icon={faTrashAlt} onClick={(e)=>{ondeleteone(e)}} /></i>
    </div>
</div>
<div className="price">{item.amount}$</div>
</div>)
})
}
}
  return(<div className="expenses">
    <div className="h2"><h1 className="heading2">Expenses: </h1><button className="add" onClick={()=>{adding()}}>Add <i><FontAwesomeIcon  icon={faPlusSquare} /></i></button></div>
    <div className="expense">
      {items()}
    </div>
<button className="clear" onClick={(e)=>{deleteAll(e)}}>Clear All</button>
</div>)
}
export default expenses;