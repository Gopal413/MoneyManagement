import React from 'react'
import { useState } from 'react';
import{v4 as uuidv4} from "uuid"

function Moneymanager() {
   const [balance,setbalance] = useState(0);
  const [income,setincome] =  useState(0);
  const [expenses,setexpenses] =  useState(0);
  const [amount,setamount] = useState(0)
  const [store,setstore] =  useState([]);
  const [title,settitle] =  useState("");
  const [cash,setcash] =  useState("Income");

  const submitfun =(e)=>{
    e.preventDefault()
    const obj = {
      id:uuidv4(),
      title:title,
      amount:amount,
      cash:cash,      
    }
    console.log("obj",obj)
    setstore(pre=>[...pre,obj])
    
     cash == "Income"?<div>{setincome(pre=>pre+Number(amount))},{setbalance(pre=>pre+Number(amount))},{console.log("incomevalue")}</div>:<div>{setexpenses(pre=>pre+Number(amount))},{setbalance(pre=>pre-Number(amount))},{console.log("expensesvalue")}</div>;
    console.log("cash",cash,"amount",amount,"income",income,"expenses",expenses)
  }


  return (

    <div className=' bg-gray-100 min-h-screen flex justify-center items-center p-10'>
      <div className='bg-white w-[1000px] rounded-xl shadow-lg p-8'>
        <div className='bg-blue-100 rounded-lg p-6 mb-6 '>
        <h1 className='text-3xl font-semibold'>Hi, Richard</h1>
        <p className='text-gray-600'>Welcome back to your Money Manager</p>
        </div>
        <div className=' grid grid-cols-3 gap-5 mb-8  '>
          <div className='flex items-center bg-green-100 gap-4 p-4 rounded-lg'>
          <div className='bg-green-400 text-white p-3 rounded-full'>₹</div>
          <div>
            <p className='text-gray-600'>Your Balance</p>
            <p className='text-lg font-semibold'>Rs {balance}</p>
          </div>
          </div>
          <div className='flex items-center bg-cyan-100 gap-4 p-4 rounded-lg '>
          <div className='bg-green-400 text-white p-3 rounded-full'>₹</div>
          <div>
            <p className='text-gray-600'>Your Income</p>
            <p className='text-lg font-semibold'>Rs {income}</p>
          </div>
          </div>
          <div className='flex items-center bg-purple-100 gap-4 p-4 rounded-lg '>
          <div className='bg-green-400 text-white p-3 rounded-full'>₹</div>
          <div>
            <p className='text-gray-600'>Your Expenses</p>
            <p className='text-lg font-semibold'>Rs {expenses}</p>
          </div>
          </div>
        </div>
        <div className=' grid grid-cols-2 gap-6'>
          <div className='border rounded-lg  mb-4 p-3'>
            <h2 className='text-xl font-semibold mb-4'>Add Transaction</h2>
            <form  onSubmit={submitfun} className='flex flex-col gap-4 '>
              <label className='text-sm text-gray-600' htmlFor="title" >TITLE</label>
              <input className='w-full border p-2 rounded mt-1' type="text" value={title} placeholder='TITLE' onChange={(e)=>settitle(e.target.value)}/>
              <label className='text-sm text-gray-600' htmlFor="Amount">AMOUNT</label>
              <input className='w-full border p-2 rounded mt-1' type="text" value={amount} placeholder='AMOUNT' onChange={(e)=>setamount(e.target.value)} />
              <label className='text-sm text-gray-600' htmlFor="type">TYPES</label>
              <select className='w-full border p-2 rounded mt-1' name="" value={cash} onChange={(e)=>setcash(e.target.value)}>
                <option value="Income">Income</option>
                <option value="Expenses">Expenses</option>
              </select>
              <button className='bg-blue-600 text-white text-xl py-2 rounded hover:bg-blue-400' type='submit'>Add</button>
            </form>
          </div>
          <div className='border rounded-lg p-3'>
            <h2 className='text-xl font-semibold mb-4'>History</h2>
            <table className='w-full text-center'>
              <thead className='border-y'>
                <tr>
                <th className='p-2'>Title</th>
                <th className='p-2'>Amount</th>
                <th className='p-2'>Type</th>
                <th className='p-2'>Action</th>
                </tr>
              </thead>
              <tbody>
                {store.map((value)=>(
                  <tr key={value.title} className='pb-2 border-b '>
                    <td className='py-2'>{value.title}</td>
                    <td>{value.amount}</td>
                    <td>{value.cash}</td>
                    <td className='pl-4 ' onClick={()=>setstore(pre=>pre.filter(each=>(each.id!=value.id)))}><img className='w-10 h-8 cursor-pointer hover:bg-green-300' src='./Images/dustbin.png'/></td>
                  </tr>
                ))}
                </tbody>
             
            </table>
           
          </div>
        </div>
      </div>
      
    </div>
  );
}


export default Moneymanager
