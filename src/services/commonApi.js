import axios from "axios"

export const commonApi = async (httpmethod, url, reqBody)=>{
  let reqConfig = {

    method: httpmethod,
    //    url:url,
    url,
    data:reqBody, 
    Headers:{
      "Content-Type":"application/json"
      
    }
  }
  return await axios(reqConfig).then((result)=>{
    return result
  }).catch((err)=>{
    return err
  
  })
}
