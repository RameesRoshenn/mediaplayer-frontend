import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Row , Col } from 'react-bootstrap'
import { getAllVideos } from '../services/allAPI'


function View({uploadVideoStatus}) {

  const[allVideos , setAllVideos]=useState([])

  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)

const getAllUploadedVideos =async()=>{
 const response =await getAllVideos()
//  console.log(response);
const {data}=response
// console.log(data);
setAllVideos(data)
}

console.log(allVideos);
useEffect(()=>{
  
  getAllUploadedVideos()
  setDeleteVideoStatus(false)
},[uploadVideoStatus , deleteVideoStatus])

  return (
   <>
   <Row>
    { allVideos?.length>0?
    allVideos?.map((video)=>(<Col sm={12} md={6} lg={4} xl={3}>
    <VideoCard setDeleteVideoStatus={setDeleteVideoStatus} displayVideo={video}/>
    </Col>)):
   
    <p>Nothing To Display</p>
}
   </Row>
   </>
  )
}

export default View