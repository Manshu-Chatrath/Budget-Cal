import React,{useEffect} from 'react';
import uuid from 'react-uuid';

const Form=({settotal,id,list,setlist,amount,setamount,title,settitle,add,setadd,edit,setedit})=>{
useEffect(()=>{
    let main=document.querySelector('.main');
    let form=document.querySelector('.realform');
    let line=document.querySelector('.line');
    document.addEventListener('keydown',close);
    window.addEventListener('click',function(e)
    {  console.log(e.target.classList.value)
        if(e.target.classList.value==="realform")
        {   console.log("yess");
            form.classList.add('hide');
        }
       else if(e.target.classList.value==="add")
        {   console.log("yess");
            form.classList.remove('hide');
        }
    })
    function close(e)
    {
        if(e.keyCode===27)
        {
            form.classList.add('hide');
            setadd(false);
            setedit(false);
            settitle("");
            setamount("");
        }
    }
    if(add || edit)
    {
        form.classList.remove('hide');
    }
    (amount!=0 && title!=="") ? line.classList.add('hide') : line.classList.remove('hide');
    
},[add,title,amount,edit])

const addlist=(e)=>{
e.preventDefault();
if(e.target.innerHTML==='Edit Expense')
{
list.map((list)=>{
        if(list.id===id)
        {
            list.amount=amount;
            list.title=title;
        }
    })
    localStorage.setItem('expensess',JSON.stringify(list));
    let tot=0;
    for(let i=0;i<list.length;i++)
{
    tot+= +list[i].amount
}
    settotal(tot);
    setamount("");
    settitle("");
    setadd(false);
    setedit(false);
    let form=document.querySelector('.realform');
    form.classList.add('hide');
    return true;
}
setlist([...list,{id:uuid(),title: title,amount: amount}]);
setamount("");
settitle("");
setadd(false);
let form=document.querySelector('.realform');
form.classList.add('hide')
}
return(<div className="realform hide">
<form className="form" action="">
<div>
<h2 className="heading-form">Expense Information:</h2><br />
<label>Name of the expense:</label><br />
<input type="text" required className="name-expense" value={title} onChange={(e)=>settitle(e.target.value)}/>
<label>Amount:</label><br />
<input type="number" required className="name-amount" value={amount} onChange={(e)=>setamount(e.target.value)}/>
<div className="line">Please fill both name and amount</div>
<button className="add-expense" onClick={(e)=>addlist(e)}>{edit ? 'Edit Expense' : 'Add Expense'}</button>
</div>
</form>
</div>)
}
export default Form;