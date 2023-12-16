
//import axios

import axios from "axios";


export const commonAPI = async(httpRequest,url,reqBody,reqHeader)=>{
const reqConfig={
method:httpRequest,
url,
data:reqBody,
headers:reqHeader?reqHeader:{"Content-Type":"application/json"} //in our projects their are 2 types of content to upload

}

return await axios(reqConfig).then((result)=>{
return result
}).catch((err)=>{
return err
})
}