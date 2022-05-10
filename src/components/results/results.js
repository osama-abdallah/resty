import React, { useState } from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';


function Results(props){

  if (!props.loading) {
    return (<>
    <section>
<h2>History</h2>
<ul>
  {props.state.methodUrl.map((history,index)=>{
if (history.url) {
  
return(<li key={index} onClick={props.handleClick}>
  {history.url} {history.method}
</li>)
}
  })
  }
</ul>

    </section>
      <section>
        <h2>Headers:</h2>
          <JSONPretty id='json-pretty' data={props.header ? JSON.stringify(props.header, undefined, 2) : null}></JSONPretty>
      </section>

      <section>
      <h2>Data:</h2>
          <JSONPretty id='json-pretty' data={props.data ? JSON.stringify(props.data, undefined, 2) : null}></JSONPretty>
      </section>
      </>);
      }
      else{
        return (
        <p>
loading.....
        </p>
        );
      }
  
}

export default Results;