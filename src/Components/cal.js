import { faMoneyCheckAlt, faPiggyBank, faWallet } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cal=({total})=>{
const calculation=(e)=>
    {let income=document.querySelector('.inputincome')
    let saving=document.querySelector('.inputsaving');
    let ans=income.value-total;
    saving.value=ans;
}
    return (<div className="cal">
        <div className="income">
        <span className="spanincome">Total Income<i><FontAwesomeIcon icon={faWallet} /></i>: </span><input className="inputincome" type="number" placeholder="Your Income" />
        </div>
        <div className="subtract">
        <i className="fas fa-minus"></i>
    </div>
    <div className="total">
<span className="spanincome">Total Figure<i><FontAwesomeIcon icon={faMoneyCheckAlt} /></i>: </span><input className="inputexpense" value="0" readOnly type="read" value={total}/>
</div>
<div className="equal">
    <i className="fas fa-equals"></i>
</div>
 <div className="savings">
    <span>Total Saving<i><FontAwesomeIcon icon={faPiggyBank} /></i>: </span><input className="inputsaving" readOnly value="0" type="text" />
    </div>
<button className="calculate"  onClick={(e)=>{calculation(e)}}>Calculate Savings</button>
    </div>)
}
export default cal;