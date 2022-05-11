
const initialState = {methodUrl:[], historyResults:[] ,historyHeaders:[]}


export default function HistoryReducer (state=initialState,action){

    const {type,payload}=action;
    switch (type) {
        case "addHistory":
            let methodUrl=[...state.methodUrl,payload.reqParams]
            let historyResults=[...state.historyResults,payload.data]
            let historyHeaders=[...state.historyHeaders,payload.header]
            
            return{methodUrl,historyResults, historyHeaders};
    
        default:
            return initialState;
    }


}

export function addHistory (payload){
    return{type:"addHistory",payload:payload}
}
