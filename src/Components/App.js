import React,{useState,useEffect} from 'react';
import Header from './header';
import Calculation from './cal';
import Expenses from './expenses';
import Form from './form';
const expenselist=localStorage.getItem('expensess') ? JSON.parse(localStorage.getItem('expensess')) : [];


//const expenselist=[];
const App=()=>{
const [list,setlist]=useState(expenselist);
const [edit,setedit]=useState(false);
const [add,setadd]=useState(false);
const [total,settotal]=useState(0);
const [amount,setamount]=useState("");
const[id,setId]=useState(0);
const [title,settitle]=useState("");
useEffect(()=>{
localStorage.setItem('expensess',JSON.stringify(list));
let tot=0;
    for(let i=0;i<list.length;i++)
{
    tot+= +list[i].amount
}
    settotal(tot);
},[list])
return (<><div className="main"></div>
    <div className="container"><Header /><div className="budget-measures">
        <Calculation total={total} />
        <Expenses setId={setId} setamount={setamount} settitle={settitle} setId={setId} setedit={setedit} list={list} setlist={setlist} setadd={setadd} />
        <Form edit={edit} id={id} settotal={settotal} total={total} setedit={setedit} setamount={setamount} settitle={settitle} amount={amount} title={title} list={list} setlist={setlist} add={add} setadd={setadd} />
        </div>
        </div>
</>)
}
export default App;