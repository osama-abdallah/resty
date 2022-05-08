import React from 'react';

import './App.scss';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';
import {useState} from 'react'

function App () {

const [data,setData]= useState()
const [reqParams,setReqParams]= useState({})
const [loading,setLoading]= useState(false)
const [headers,setHeaders] = useState()

  const callApi = (data,formInputs,header) => {
 setHeaders(header)
 setData(data)
 setReqParams(formInputs)   
  }

  return (
      <React.Fragment>
        <Header />
        <div data-testid="request">Request Method: {reqParams.method || ''}</div>
        <div>URL: {reqParams.url || ''}</div>
        <Form handleApiCall={callApi} setLoading={setLoading}/>
        <Results data={data} loading={loading} header= {headers}/>
        <Footer />
      </React.Fragment>
    );
  }
export default App;