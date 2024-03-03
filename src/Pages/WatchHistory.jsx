import React, { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getWatchHistory } from '../services/allAPI'

function WatchHistory() {

  //new

  const[watchHistory,setWatchHistory]=useState()

  const getHistoryDetail =async()=>{
    const response =await getWatchHistory()
   //  console.log(response);
   const {data}=response
   // console.log(data);
   setWatchHistory(data)
   }

   
console.log(watchHistory);
useEffect(()=>{
  
  getHistoryDetail()
  
},[])
   
//function to delete history
const handleDelete =async (id)=>{
  await deleteHistory (id)
  getWatchHistory()
}

useEffect (()=>{
  getWatchHistory()
},[])

  return (
  <>
  <div className=' container mt-5 d-flex  justify-content-between '>
    <h3>Watch History</h3>
    <Link to={'/home'} className=' d-flex  align-items-center ' style={{textdecoration:'none', color:'white' ,fontSize:'20px'}} ><i class='fa-solid fa-arrow-left fa-best me-2'></i>Back To Home</Link>

  </div>
  <table className='table mt-5 mb-5 container '>
    <thead>
      <tr>
        <th>#</th>
        <th>Caption</th>
        <th>URL</th>
        <th>Time Stamp</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
{
  watchHistory?.length>0?watchHistory?.map((item,index)=>(        
  <tr key={index}>
    <td>{index+1}</td>
    <td>{item.caption}</td>
    <td><a href="">{item.embedLink}</a></td>
    <td>{item.timeStamp}</td>
    <td><button onClick={()=>handleDelete(item?.id)} className='btn  btn-danger '><i class="fa-solid fa-trash-can"></i></button></td>
  </tr>)):
   <p>No Watch History</p>

}
      </tbody>
  </table>

  </>
  )
}

export default WatchHistory
