import React, { useState } from 'react'
import { Card, ToastBody } from 'react-bootstrap'
import { Modal } from 'react-bootstrap';
import {  deleteVideo, watchHistory } from '../services/allAPI';


function VideoCard({displayVideo ,setDeleteVideoStatus}) {

const [show ,setShow]=useState(false);

const handleClose =()=>setShow(false);
const handleShow =async()=>{
  setShow(true);
  const {caption ,embedLink} =displayVideo
  
  const today =new Date
  // console.log(today);
  let timeStamp = new Intl.DateTimeFormat('en-US',{
    year:'numeric',
    month:'2-digit',
    day:'2-digit',
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit'
  }).format(today)
  console.log(timeStamp);
  

  let videoDetails ={
    caption,
    embedLink,
    timeStamp
  }
  await watchHistory(videoDetails)


  

}
const removeVideo = async(id)=>{
const response = await deleteVideo(id)
console.log(response);
setDeleteVideoStatus(true)
}

const dragstated =(e,id)=>{
  console.log( `card no:${id} started dragging`);
  // console.log(e);
  if (e && e.dataTransfer) {
    e.dataTransfer.setData("videoID", id);
  }
}

  return (

   <>
   
   <Card style={{ width: '100%' , height:'330px'}} draggable  onDragStart={(e) => dragstated(e, displayVideo?.id)}>
      <Card.Img style={{padding:'10px'}} height={'250px'} onClick={handleShow} variant="top" src={displayVideo.url} />
      <Card.Body>
        <Card.Title className=' d-flex  justify-content-between  align-items-center '>
            <h6>{displayVideo.caption}</h6>
<button className='btn  btn-danger ' onClick={()=>removeVideo(displayVideo?.id)}><i class="fa-solid fa-trash-can"></i></button>
        </Card.Title>
       
        
      </Card.Body>
    </Card>

    <Modal
show={show}
onHide={handleClose}
animation={false}
>
<Modal.Header closeButton>
  <Modal.Title>{displayVideo.caption}</Modal.Title>
</Modal.Header>
<Modal.Body>
  <iframe width="100%" height="600" src={`${displayVideo.embedLink}?autoplay=1` } title={displayVideo.caption} frameborder="0" allow='accelerometer;autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture ; web-share' allowFullScreen></iframe>
</Modal.Body>
</Modal>
   


  
   </>
  )
}

export default VideoCard