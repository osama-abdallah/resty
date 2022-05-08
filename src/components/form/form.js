import axios from 'axios';
import React from 'react';
import { useState } from "react";
import './form.scss';

function Form(props){

  const [url , setURL]=useState()
  const [method , setMethod] = useState("get")
  const [reqBody , setReqBody] = useState()

   function getMethod(e){
    setMethod(e.target.value)
     
}
   function getURL(e){
  setURL(e.target.value)

}
  
   function getReqBody(e){
    setReqBody(e.target.value)
    console.log(reqBody);
   }

  async function  handleSubmit (e) {
    e.preventDefault();
console.log(method)
    let methodURLObject = {
      method:method ,
      url:url
    }


props.setLoading(true)
if (method === 'post' || method === 'put'){
   const resultData = await axios[method](url,reqBody)
   props.handleApiCall(resultData.data,methodURLObject,resultData.headers)
}
else {
  const resultData = await axios[method](url)
  console.log(resultData)
  props.handleApiCall(resultData.data,methodURLObject,resultData.headers)

}
props.setLoading(false)
}

    return (
      <>
        {/* <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span id="get">GET</span>
            <span id="post">POST</span>
            <span id="put">PUT</span>
            <span id="delete">DELETE</span>
          </label>
        </form> */}

<form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={getURL}/>
            <button type="submit" data-testid="update-method">GO!</button>
          </label>
          <label className="methods"  >

          <select data-testid="select" id="select" name="select" onClick={getMethod}>
            <option value="get"  >GET</option>
            <option value="post" >POST</option>
            <option value="put" >PUT</option>
            <option value="delete"  >DELETE</option>
</select>
<br></br>
        <textarea id="text" name="text" onChange={getReqBody}></textarea>

          </label>
        </form>
      </>
    );
  
}

export default Form;