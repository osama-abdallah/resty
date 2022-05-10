
import './App.scss';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';
import {useState} from 'react'
import HistoryReducer,{addHistory} from "./Reducer";
import {useReducer} from 'react'

const initialState = {methodUrl:[], historyResults:[]};

function App () {

const [data,setData]= useState()
const [reqParams,setReqParams]= useState({})
const [loading,setLoading]= useState(false)
const [headers,setHeaders] = useState()
const [state,dispatch]=useReducer(HistoryReducer,initialState)

const [click,setHistory]=useState()
function handleClick(e) { 
  e.preventDefault();
  setHistory(e.target.innerText)
  let arr = click.split(' ')
  let method = arr[1]
  let url= arr[0]
  for (let i = 0; i < state.methodUrl.length; i++) {
    if (method == state.methodUrl[i].method && url == state.methodUrl[i].url) {
    
    setData(state.historyResults[i])
    console.log(data);
    }
    
  }
console.log(click);
 } 

  const callApi = (data,formInputs,header) => {
 setHeaders(header)
 setData(data)
 setReqParams(formInputs)  
 dispatch(addHistory({data:data,header:header,reqParams:reqParams})) 
  }

  return (
      <>
        <Header />
        <div data-testid="request">Request Method: {reqParams.method || ''}</div>
        <div>URL: {reqParams.url || ''}</div>
        <Form handleApiCall={callApi} setLoading={setLoading} dispatch={dispatch}/>
        <Results data={data} loading={loading} header= {headers} state={state} handleClick={handleClick}/>
        <Footer />
      </>
    );
  }
export default App;

