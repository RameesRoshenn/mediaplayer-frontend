

import { ServerUrl } from "./ServerUrl"
import { commonApi } from "./commonApi"

//api to upload video

 export const uploadAllVideo=async(reqBody)=>{
   return await commonApi('POST',`${ServerUrl}/videos`,reqBody)
}

// api to get all video

export const getAllVideos = async()=>{
  return await commonApi('GET' ,`${ServerUrl}/videos`,"")
}



// api to delete

export const deleteVideo =async (id)=>{
  return await commonApi('DELETE' ,`${ServerUrl}/videos/${id}`,{})
}


// api to add watch history

export const  watchHistory=async (videoDetails)=>{
  return await commonApi('POST' ,`${ServerUrl}/history`,videoDetails)
}

//api to get history
export const  getWatchHistory=async ()=>{
  return await commonApi('GET' ,`${ServerUrl}/history`,"")
}

//api to delete history


export const deleteHistory=async (id)=>{
  return await commonApi('DELETE' ,`${ServerUrl}/history/${id}`,{})
}


//api to add category

export const addCategory= async(name)=>{
  return await commonApi('POST' ,`${ServerUrl}/category`,name)
}


//api to get category

export const  getCategory=async ()=>{
  return await commonApi('GET' ,`${ServerUrl}/category`,"")
}

//api to delete category


export const deleteCategory=async (id)=>{
  return await commonApi('DELETE' ,`${ServerUrl}/category/${id}`,{})
}


//api to get a video

export const  getAvideo=async (id)=>{
  return await commonApi('GET' ,`${ServerUrl}/videos/${id}`,"")
}


//api to update the category

export const  updateCategory=async (id , name)=>{
  return await commonApi('PUT' ,`${ServerUrl}/category/${id}`,name)
}