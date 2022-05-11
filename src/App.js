
import './App.scss';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';
import {useState} from 'react'
import HistoryReducer,{addHistory} from "./Reducer";
import {useReducer} from 'react'

const initialState = {methodUrl:[], historyResults:[], historyHeaders:[]};

function App () {

const [data,setData]= useState()
const [reqParams,setReqParams]= useState()
const [loading,setLoading]= useState(false)
const [headers,setHeaders] = useState()
const [state,dispatch]=useReducer(HistoryReducer,initialState)

function handleClick(e) { 
  e.preventDefault();
  const click = e.target.innerText
  console.log(click);
  let arr = click.split(' ')
  let method = arr[1]
  let url= arr[0]
  for (let i = 0; i < state.methodUrl.length; i++) {
    if (method === state.methodUrl[i].method && url === state.methodUrl[i].url) {
    
    setData(state.historyResults[i])
    setHeaders(state.historyHeaders[i])
    setReqParams({method,url})
    console.log(data);
    }
    
  }
console.log(click);
 } 

  const callApi = (data,formInputs,header) => {
 setHeaders(header)
 setData(data)
 setReqParams(formInputs)
 console.log(formInputs);
 console.log(reqParams);
 console.log(headers);
 console.log(data);  
 dispatch(addHistory({data:data,header:header,reqParams:formInputs})) 
  }
// useEffect(()=>{

// },[data])
  return (
      <>
        <Header />
        <div data-testid="request">Request Method: {reqParams && (reqParams.method || '')}</div>
        <div>URL: {reqParams && (reqParams.url || '')}</div>
        <Form handleApiCall={callApi} setLoading={setLoading} dispatch={dispatch}/>
        {reqParams&&<Results data={data} loading={loading} header= {headers} state={state} handleClick={handleClick}/>}
        <Footer />
      </>
    );
  }
export default App;

